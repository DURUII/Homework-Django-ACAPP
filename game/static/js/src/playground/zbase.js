class AcGamePlayGround {
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

        for (let i = 0; i < 10; i++) {
            let getRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            this.players.push(new Player(
                this, this.width / 2, this.height / 2, this.height * 0.05,
                getRandomColor, this.height * 0.15, false))
        }

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
}