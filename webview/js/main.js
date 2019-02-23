(function() {
	console.info("Called main.js!");
})();

NodeList.prototype.array = function() {
	return Array.prototype.slice.call(this);
};

function find(qs) {
	return document.querySelectorAll(qs).array();
}

function loadAll() {
    var fns = bindDrawFunctions(0);
    const { curves } = convertPath(Bezier, "M10 80 Q 95 10 180 80"/*"M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"*/);
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
