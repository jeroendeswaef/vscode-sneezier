NodeList.prototype.array = function() {
	return Array.prototype.slice.call(this);
};

function find(qs) {
	return document.querySelectorAll(qs).array();
}

const vscode = acquireVsCodeApi();

var CurvesView = {
    oninit: function() {
        this.lineIndex = startLine;
        window.addEventListener('message', event => {

            const message = event.data; // The JSON data our extension sent
        
            switch (message.command) {
                case 'selectLine':
                    this.lineIndex = message.lineIndex;
                    m.redraw();
                    break;
            }
        });
    },
    oncreate: function() {
        this.fns = bindDrawFunctions(0);
        let curves = [];
        var previousPaths = initialPaths;
        initialPaths.forEach((path, i) => curves = curves.concat(convertPath(Bezier, path).curves.map(curve => Object.assign(curve, { line: i}))));
        this.drawFns = [];
        const updateFn = _.debounce(() => {
            for(let i = 0; i < curves.length; i++) {
                const curve = curves[i];
                const newPath = curve.toSVG()
                if (previousPaths[i] != newPath) {
                    console.info("changed", i, previousPaths[i], '>', curve.toSVG());
                    vscode.postMessage({
                        command: 'lineChanged',
                        line: i,
                        content: newPath
                    })
                    previousPaths[i] = newPath;
                }
            }
        }, 1000);
        for(let i = 0; i < curves.length; i++) {
            const curve = curves[i];
            console.info('c>', curve.toSVG());
            const draw = () => {
                if (i === this.lineIndex) {
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
        this.fns.reset(); 
        this.drawFns.forEach(draw => draw());
    },
    view: function() {
        return m("div", [m("figure"), m("span", {}, this.lineIndex)])
    }
}


function loadAll() {
    m.mount(document.getElementById("app"), CurvesView)
}

document.addEventListener("DOMContentLoaded", loadAll);
