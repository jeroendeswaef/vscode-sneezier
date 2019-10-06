class PathToObjectConverter {
    constructor(pathElements) {
        this.objects = [];
        let previousPoint = null;
        for (const pathElement of pathElements) {
            switch(pathElement.type) {
                case 'helperPoint':
                    previousPoint = {
                        x: pathElement.x,
                        y: pathElement.y
                    }
                    break;
                case 'lineTo':
                    if (!previousPoint) throw new Error('Cannot create line without starting point');
                    this.objects.push({
                        type: 'line',
                        x1: previousPoint.x,
                        y1: previousPoint.y,
                        x2: pathElement.x,
                        y2: pathElement.y
                    })
                    previousPoint = {
                        x: pathElement.x,
                        y: pathElement.y
                    }
                    break;
                default:
                    throw new Error(`type ${pathElement.type} not implemented`)
            }
        }
    }

    getObjects() {
        return this.objects;
    }
}

module.exports = PathToObjectConverter;