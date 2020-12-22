class Ship {
    constructor() {
        this.x = width / 2;
        this.xdir = 0;

        this.show = function () {
            fill(240, 150, 150);
            rectMode(CENTER);
            ellipse(this.x, height - 40, 60, 20);
        };

        this.setDir = function (dir) {
            this.xdir = dir;
        };

        this.move = function (dir) {
            this.x += this.xdir * 5;
        };
    }
}
   