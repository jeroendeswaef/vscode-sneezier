
const SvgPathListener = require('./SvgPathListener').SvgPathListener;

class SvgJsonOutputListener extends SvgPathListener {

    constructor() {
        super();
    }

    enterMoveto(ctx) {
        console.info('<><0');
    }
}

exports.SvgJsonOutputListener = SvgJsonOutputListener;
