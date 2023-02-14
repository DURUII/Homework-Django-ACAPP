class AcGame {
    constructor(id) {
        console.log("AcGame Container");

        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayGround(this);


        this.start();
    }

    start() {

    }
}