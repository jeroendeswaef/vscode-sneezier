
class DrawingBuilder {
    constructor() {
        this.lines = [];
    }

    addLine(content, lineNumber) {
        this.lines.push({
            lineNumber,
            content
        })
    }

    getDrawing() {
        return Promise.resolve(this.lines.map(line => line.content));
    }
}

module.exports = DrawingBuilder;
