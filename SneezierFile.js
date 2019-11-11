const DrawingBuilder = require('./DrawingBuilder');

class SneezierFile {
    constructor(text) {
        this.drawingBuilder = new DrawingBuilder();
        // let content;
        // let startIndex = 0;
        const lines = text.split('\n');
        // if (lines.length > 0) {
        //     const [header, ...rest] = lines;
        //     const metadataMatch = header.match(/^\[(?<metadata>.*)\]$/);
        //     if (metadataMatch) {
        //         const metadataStr = metadataMatch.groups.metadata;
        //         const backgroundMatch = metadataStr.match(/background=([^ \]]*)/);
        //         if (backgroundMatch) {
        //             this.background = backgroundMatch[1];
        //         }
        //         content = rest;
        //         startIndex = 1;
        //     }
        // } 
        // if (!content) content = lines;
        // console.info('content>', content)
        // this.drawingBuilder = new DrawingBuilder(content.join('\n'));
        let lineNumber = 0;
        for(const line of lines) {
        const metadataMatch = line.match(/^\[(?<metadata>.*)\]$/);
            if (metadataMatch) {
                const metadataStr = metadataMatch.groups.metadata;
                const backgroundMatch = metadataStr.match(/background=([^ \]]*)/);
                if (backgroundMatch) {
                    this.background = backgroundMatch[1];
                }
              
            } else {
                if (!line.startsWith('#') && line.trim().length > 0) {
                    this.drawingBuilder.addLine(line, lineNumber);
                }
            }
            lineNumber += 1;
        }

    }

   getDrawing() {
       return this.drawingBuilder.getDrawing();
   }

    getBackground() {
        return this.background;
    }
}

module.exports = SneezierFile;