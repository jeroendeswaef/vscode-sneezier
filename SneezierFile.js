class SneezierFile {
    constructor(text) {
        let content;
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
            }
        } 
        if (!content) content = lines;
        this.paths = content.filter(line => line);
    }

    getPaths() {
        return this.paths;
    }

    getBackground() {
        return this.background;
    }
}

module.exports = SneezierFile;