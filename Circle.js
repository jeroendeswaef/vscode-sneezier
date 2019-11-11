class Circle {
    constructor(specification) {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
        const parts = specification.split(" ");
        if (parts.length > 2) {
            if (!isNaN(parts[0])) {
                this.cx = parseInt(parts[0])
            }
            if (!isNaN(parts[1])) {
                this.cy = parseInt(parts[1])
            }
            if (!isNaN(parts[2])) {
                this.r = parseInt(parts[2])
            }
        }
    }

    getObject() {
        return {
            type: 'circle',
            cx: this.cx,
            cy: this.cy,
            r: this.r
        }
    }
}

module.exports = Circle;