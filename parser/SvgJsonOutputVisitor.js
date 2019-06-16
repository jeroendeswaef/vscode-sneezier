const SvgPathVisitor = require('./SvgPathVisitor').SvgPathVisitor;
const flatten = require('lodash.flatten');

class CoordinateItem {
    constructor(value) {
        this.value = value;
    }
}

class CoordinatePair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class SvgJsonOutputVisitor extends SvgPathVisitor {
    constructor() {
        super();
        this.elements = [];
    }

    visitCoordinate(ctx) {
        return new CoordinateItem(parseInt(ctx.getText()));
    }

    visitCoordinatePair(ctx) {
        const coordinateArr = this.visitChildren(ctx).filter(it => it instanceof CoordinateItem);
        return new CoordinatePair(coordinateArr[0].value, coordinateArr[1].value);
    }

    visitMoveto(ctx) {
        const coordinatePair = flatten(this.visitChildren(ctx)).find(it => it instanceof CoordinatePair);
        this.elements.push({
            type: 'helperPoint',
            x: coordinatePair.x,
            y: coordinatePair.y
        });
        return this.visitChildren(ctx);
    }

    // visitMovetoArgumentSequence(ctx) {
    //     return this.visitChildren(ctx);
    // }
}

exports.SvgJsonOutputVisitor = SvgJsonOutputVisitor;
