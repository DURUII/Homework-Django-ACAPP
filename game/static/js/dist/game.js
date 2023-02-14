class AcGameMenu {
    constructor(root) {
        console.log("Menu");

        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">单人模式</div>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">多人模式</div>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings"> 设  置 </div>
    </div>
</div>
        `);

        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function () {
            console.log("single-mode clicked");
            outer.hide();
            outer.root.playground.show();
        });

        this.$multi_mode.click(function () {
            console.log("multi-mode clicked");
        });

        this.$settings.click(function () {
            console.log("settings clicked");
        });
    }

    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}let AC_GAME_OBJECTS = []

class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);

        this.has_called_start = false;
        this.timedelta = 0;
    }

    start() {

    }

    update() {

    }

    destory() {
        this.on_destroy();
        for (let i = 0; i < AC_GAME_OBJECTS; i++) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }

    on_destroy() {

    }
}


let last_timestamp;
let AC_GAME_ANIMATION = function (timestamp) {
    for (let i = 0; i < AC_GAME_OBJECTS.length; i++) {
        let obj = AC_GAME_OBJECTS[i];
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);class GameMap extends AcGameObject {
    constructor(playground) {
        super();
        this.playground = playground;
        this.$canvas = $(`<canvas></canvas>`);
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;

        this.playground.$playground.append(this.$canvas);
    }

    start() {


    }

    update() {
        this.render();

    }

    render() {
        this.ctx.fillStyle = "rgba(0,0,0,0.25)"
        this.ctx.fillRect(0, 0,
            this.ctx.canvas.width, this.ctx.canvas.height);
    }
}class Player extends AcGameObject {
    constructor(playground, X, Y, radius, color, speed, is_me) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = X;
        this.y = Y;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.is_me = is_me;
        this.eps = 0.1;

        this.move_length = 0;
    }

    start() {
        if (this.is_me) {
            this.add_listening_events();
        }
    }

    add_listening_events() {
        let outer = this;
        this.playground.game_map.$canvas.on("contextmenu", function () {
            return false;
        });
        this.playground.game_map.$canvas.mousedown(function (e) {
            if (e.which === 1 || e.which === 3) {
                outer.move_to(e.clientX, e.clientY);
                // console.log(e.clientX, e.clientY);
            }
        });
    }

    get_dist(x1, y1, x2, y2) {
        let dx = x1 - x2;
        let dy = y1 - y2;
        // console.log(dx, dy);
        return Math.sqrt(dx * dx + dy * dy);
    }

    move_to(tx, ty) {
        this.move_length = this.get_dist(this.x, this.y, tx, ty);
        // console.log(this.move_length);
        let angle = Math.atan2(ty - this.y, tx - this.x);
        this.vx = Math.cos(angle);
        this.vy = Math.sign(angle);
    }

    update() {
        if (this.move_length < this.eps) {
            this.move_length = 0;
            this.vx = this.vy = 0;
        } else {
            let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
            this.x += this.vx * moved;
            this.y += this.vy * moved;
            this.move_length -= moved;
        }

        this.render();
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}class AcGamePlayGround {
    constructor(root) {
        this.root = root;
        this.$playground = $(`
<div class="ac-game-playground">

</div>
        `);

        // this.hide();
        this.root.$ac_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(
            this, this.width / 2, this.height / 2, this.height * 0.05,
            "white", this.height * 0.15, true
        ));

        this.start();
    }

    start() {

    }

    show() {
        this.$playground.show();
    }

    hide() {
        this.$playground.hide();
    }
}export class AcGame {
    constructor(id) {
        console.log("AcGame Container");

        this.id = id;
        this.$ac_game = $('#' + id);
        // this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayGround(this);


        this.start();
    }

    start() {

    }
}