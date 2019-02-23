NodeList.prototype.array = function() {
	return Array.prototype.slice.call(this);
};

function find(qs) {
	return document.querySelectorAll(qs).array();
}

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
    setLineIndex(index) {
        this.lineIndex = index;
    },
    view: function() {
        return m("div", [m("figure"), m("span", {}, this.lineIndex)])
    }
}


function loadAll() {
    const vscode = acquireVsCodeApi();
    m.mount(document.getElementById("app"), CurvesView)
    var fns = bindDrawFunctions(0);
    let curves = [];
    initialPaths.forEach(path => curves = curves.concat(convertPath(Bezier, path).curves));
    const activeCurveIndex = 0;
    const drawFns = [];
    for(let i = 0; i < curves.length; i++) {
        const curve = curves[i];
        const draw = function() {
            if (i === activeCurveIndex) {
                fns.drawSkeleton(curve);
            }
            fns.setColor("#FF0000");
            fns.drawCurve(curve);
        };
        drawFns.push(draw);
        draw();
        if (i === activeCurveIndex) {
            handleInteraction(fns.getCanvas(), curve).onupdate = function(evt) {
                fns.reset(curve); 
                drawFns.forEach(draw => draw(evt));
            };
        }
    }
}

document.addEventListener("DOMContentLoaded", loadAll);
