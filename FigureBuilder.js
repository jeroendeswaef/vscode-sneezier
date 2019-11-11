const Circle = require('./Circle');
const Path = require('./Path');

const getFigure = line => {
    if(line.startsWith('CIRCLE')) {
        return new Circle(line.substring(7));
    } else {
        return new Path(line);
    }
}

module.exports = {
    getFigure
}