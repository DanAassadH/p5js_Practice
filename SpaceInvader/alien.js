class Alien {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;

        this.xdir = 1;

        this.kill = function () {
            this.r = this.r + 2;
        };

        this.shiftDown = function () {
            this.xdir *= -1;
            this.y += this.r;
        };

        this.move = function () {
            this.x = this.x + this.xdir;
        };

        this.show = function () {
            noStroke();
            fill(40, 250, 150);
            rect(this.x, this.y, this.r * 5, this.r * 2);
        };
    }
}



