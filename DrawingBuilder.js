const { getFigure } = require('./FigureBuilder');

class DrawingBuilder {
    constructor() {
        this.lines = [];
    }

    addLine(content, lineNumber) {
        this.lines.push({
            lineNumber,
            figureObject: getFigure(content).getObject()
        })
    }

    getDrawing() {
        return Promise.resolve(this.lines.map(line => line.figureObject));
    }
}

module.exports = DrawingBuilder;
