export class AcGame {
    constructor(id, AcWingOS) {
        console.log("AcGame Container");


        this.id = id;
        this.$ac_game = $('#' + id);
        
        this.AcWingOS = AcWingOS;


        this.settings = new Settings(this);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayGround(this);

        this.start();
    }

    start() {

    }
}