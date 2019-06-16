const DrawingBuilder = require('./DrawingBuilder');

class SneezierFile {
    constructor(text) {
        let content;
        let startIndex = 0;
        var lines = text.split('\n');
        if (lines.length > 0) {
            const [header, ...rest] = lines;
            const metadataMatch = header.match(/^\[(?<metadata>.*)\]$/);
            if (metadataMatch) {
                const metadataStr = metadataMatch.groups.metadata;
                const backgroundMatch = metadataStr.match(/background=([^ \]]*)/);
                if (backgroundMatch) {
                    this.background = backgroundMatch[1];
                }
                content = rest;
                startIndex = 1;
            }
        } 
        if (!content) content = lines;
        const drawingBuilder = new DrawingBuilder(content.join('\n'));
        this.drawing = drawingBuilder.getDrawing();
        // this.paths = [];
        // for (let i = 0; i < content.length; i++) {
        //     if (content[i]) {
        //         this.paths.push({
        //             svgPath: content[i],
        //             line: i + startIndex
        //         })
        //     }
        // }
    }

    getDrawing() {
        return this.drawing;
    }

    // getPaths() {
    //     return this.paths;
    // }

    getBackground() {
        return this.background;
    }
}

module.exports = SneezierFile;