class Particle extends AcGameObject {
    constructor(playground, X, Y, radius, vx, vy, color, speed, move_length) {
        super();

        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;

        this.x = X;
        this.y = Y;

        this.radius = radius;
        this.vx = vx;
        this.vy = vy;

        this.color = color;
        this.speed = speed;

        this.friction = 0.9;
        this.move_length = move_length;

        this.eps = 0.01;
    }

    start() {


    }

    update() {
        if (this.move_length < this.eps || this.speed < this.eps) {
            this.destory();
            return false;
        }

        let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
        this.x += this.vx * moved;
        this.y += this.vy * moved;

        this.speed *= this.friction;
        this.move_length -= moved;

        this.render();
    }

    render() {
        let scale = this.playground.scale;
        this.ctx.beginPath();
        this.ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}