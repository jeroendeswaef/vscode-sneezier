class Path {
    constructor(specification) {
        this.path = specification
    }

    getObject() {
        return {
            type: 'path',
            d: this.path
        }
    }
}

module.exports = Path;
