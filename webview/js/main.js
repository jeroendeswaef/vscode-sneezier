NodeList.prototype.array = function() {
	return Array.prototype.slice.call(this);
};

function find(qs) {
	return document.querySelectorAll(qs).array();
}

const vscode = acquireVsCodeApi();

function CurvesView() {
    let imageWidth;
    let imageHeight;
    let cursorPosChanged;

    return {
        oninit: function(vnode) {
            vscode.postMessage({
                command: 'initialized',
            })
            imageWidth = vnode.attrs.imageWidth;
            imageHeight = vnode.attrs.imageHeight;
            cursorPosChanged = vnode.attrs.cursorPosChanged;

            this.drawing = null;
            this.lineIndex = startLine;
            window.addEventListener('message', event => {

                const message = event.data; // The JSON data our extension sent
            
                switch (message.command) {
                    case 'setDrawing':
                        this.drawing = message.drawing;
                        m.redraw();
                        break;
                    case 'selectLine':
                        this.lineIndex = message.lineIndex;
                        m.redraw();
                        break;
                }
            });
        },
        oncreate: function(vnode) {
            return;
            this.fns = bindDrawFunctions(0, vnode.attrs.imageWidth, vnode.attrs.imageHeight);
            let curves = [];
            let previousPaths = initialPaths;
            initialPaths.forEach((path, i) => curves = curves.concat(convertPath(Bezier, path.svgPath).curves.map(curve => Object.assign(curve, { line: path.line }))));
            this.drawFns = [];
            const updateFn = _.debounce(() => {
                for(let i = 0; i < curves.length; i++) {
                    const curve = curves[i];
                    const newPath = curve.toSVG()
                    if (previousPaths[i].svgPath != newPath) {
                        // vscode.postMessage({
                        //     command: 'lineChanged',
                        //     line: i,
                        //     content: newPath
                        // })
                        // previousPaths[i] = newPath;
                    }
                }
            }, 1000);
            for(let i = 0; i < curves.length; i++) {
                const curve = curves[i];
                const draw = () => {
                    if (curve.line === this.lineIndex) {
                        this.fns.drawSkeleton(curve);
                    }
                    this.fns.setColor("#FF0000");
                    this.fns.drawCurve(curve);
                };
                this.drawFns.push(draw);
                draw();
                handleInteraction(this.fns.getCanvas(), curve).onupdate = (evt) => {
                    if (evt) {
                        updateFn();
                        //console.info("handleInteraction", typeof debounce, typeof lodash, typeof _, typeof _.debounce);
                        this.fns.reset(curve); 
                        this.drawFns.forEach(draw => draw(evt));
                    }
                };
            }
        },
        onupdate: function(vnode) {
            //this.fns.reset(); 
            //this.drawFns.forEach(draw => draw());
        },
        getSvgForFigure: function(figure) {
            if (figure.type === 'circle') {
                return m("circle", { fill: 'none', 'stroke-width': 1, stroke: "hotpink", cx: figure.cx, cy: figure.cy, r: figure.r });
            }
            if (figure.type === 'path') {
                return m("path", { 'stroke-width': 1, stroke: "hotpink", fill: 'none', d: figure.d })
            }
        },
        view: function() {
            //return m("figure")
            return m("svg", { onmousemove: cursorPosChanged, class: "svg-area", viewBox: `0 0 ${imageWidth} ${imageHeight}`},
                //initialPaths.map(path => m("path", { class: "path-element", onclick: () => { console.info('svg clicked!'); }, d: path.svgPath, fill: "none", 'stroke-width': 2, stroke: "hotpink" }))
                this.drawing ? this.drawing.map(el => this.getSvgForFigure(el)) : null
            )
        }
    }
}


function DrawingPanel() {
    let opacity = 30;
    let imageWidth = null;
    let imageHeight = null;
    let X = null;
    let Y = null;

    return {
        oninit: () => {
            this.background = _.get(initialMetadata, 'background');
        },
        view: () => m("div", [
            m("div", { class: 'drawing-area' }, [
                m("img", { onload: function() { imageWidth = this.width; imageHeight = this.height; }, style: `opacity: ${opacity / 100}`, src: this.background }),
            ].concat(imageWidth ? [ m(CurvesView, { imageWidth, imageHeight, cursorPosChanged: (ev) => (X = ev.offsetX, Y = ev.offsetY) })] : null)),
            m("input", { onchange: (ev) => { opacity = parseInt(ev.target.value)}, type: "range", min: "0", "max": 100, "value": opacity, "step": 1 }),
            X && Y ? m("span", { class: 'cursor-position' }, `(${X}, ${Y})`) : null
        ])
    }
}

function loadAll() {
    try {
        m.mount(document.getElementById("app"), DrawingPanel)
    } catch(ex) {
        console.error(ex)
    }
}

document.addEventListener("DOMContentLoaded", loadAll);
