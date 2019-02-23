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
    var curve = new Bezier(150, 40, 80, 30, 105, 150);
    var draw = function() {
        fns.drawSkeleton(curve);
        fns.drawCurve(curve);
    };
    draw();
    handleInteraction(fns.getCanvas(), curve).onupdate = function(evt) {
        fns.reset(); 
        draw(evt);
    };
}

document.addEventListener("DOMContentLoaded", loadAll);
