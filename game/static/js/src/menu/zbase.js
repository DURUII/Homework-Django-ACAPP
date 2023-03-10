class AcGameMenu {
    constructor(root) {


        this.root = root;
        this.$menu = $(`
        <!-- body -->
        <div class="ac-game-menu">
            <!-- ul -->
            <div class="ac-game-menu-field">
                <!-- li -->
                <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode" style="--i:3;">
                    <!-- a -->
                    <span>单机模式</span>
                </div>
                <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode" style="--i:2;">
                    <span>联机模式</span>
                </div>
                <div class="ac-game-menu-field-item ac-game-menu-field-item-settings" style="--i:1;">
                    <span>退出游戏</span>
                </div>
            </div>
        </div>
        `);

        this.$menu.hide();

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
            outer.hide();
            outer.root.playground.show("single mode");
        });

        this.$multi_mode.click(function () {
            outer.hide();
            outer.root.playground.show("multi mode");
        });

        this.$settings.click(function () {
            // 借用

            outer.root.settings.logout_on_remote();
        });
    }

    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}