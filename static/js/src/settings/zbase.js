class Settings {
    constructor(root) {
        this.root = root;
        this.platform = "WEB";
        if (this.root.AcWingOS) this.platform = "ACAPP";

        this.username = "";
        this.photo = "";


        this.$settings = $(`
        <!-- section -->
        <section>
            <div class="ac-game-settings">
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>
                <span class="ac-game-settings-neon"></span>



                <!-- signin -->
                <div class="ac-game-settings-login" style="display: none;">
                    <!-- content -->
                    <div class="ac-game-settings-login-content">

                        <!-- h2 -->
                        <div class="ac-game-settings-title">SIGN IN</div>

                        <!-- form -->
                        <div class="ac-game-settings-username">
                            <!-- inputBx -->
                            <div class="ac-game-settings-item">
                                <input type="text" required>
                                <i>用户名</i>
                            </div>
                        </div>

                        <div class="ac-game-settings-password">
                            <div class="ac-game-settings-item">
                                <input type="password" required>
                                <i>密码</i>
                            </div>
                        </div>

                        <!-- links -->
                        <div class="ac-game-settings-links">
                            <span class="ac-game-settings-error-message">
                            </span>

                            <span class="ac-game-settings-option">
                                注册
                            </span>
                        </div>

                        <!-- inputBx -->
                        <div class="ac-game-settings-submit">
                            <div class="ac-game-settings-item">
                                <input type="submit" value="登录">
                            </div>
                        </div>

                        <div>
                            <div class="ac-game-settings-acwing">
                                <img src="https://app4986.acapp.acwing.com.cn/static/image/settings/acwing_logo.png"
                                    width="30">
                                <div>AcWing一键登陆</div>
                            </div>
                        </div>

                    </div>

                </div>






                <div class="ac-game-settings-register">
                    <div class="ac-game-settings-register-content">

                        <div class="ac-game-settings-title">SIGN UP</div>

                        <div class="ac-game-settings-username">
                            <div class="ac-game-settings-item">
                                <input type="text" required>
                                <i>用户名</i>
                            </div>
                        </div>

                        <div class="ac-game-settings-password ac-game-settings-password-first">
                            <div class="ac-game-settings-item">
                                <input type="password" required>
                                <i>密码</i>
                            </div>
                        </div>

                        <div class="ac-game-settings-password ac-game-settings-password-second">
                            <div class="ac-game-settings-item">
                                <input type="password" required>
                                <i>确认密码</i>
                            </div>
                        </div>

                        <div class="ac-game-settings-links">
                            <span class="ac-game-settings-error-message">
                            </span>

                            <span class="ac-game-settings-option">
                                登录
                            </span>
                        </div>

                        <div class="ac-game-settings-submit">
                            <div class="ac-game-settings-item">
                                <input type="submit" value="注册">
                            </div>
                        </div>


                        <div>
                            <div class="ac-game-settings-acwing">
                                <img src="https://app4986.acapp.acwing.com.cn/static/image/settings/acwing_logo.png"
                                    width="30">
                                <div>AcWing一键登陆</div>
                            </div>
                        </div>



                    </div>
                </div>
        </section>
`);

        this.$login = this.$settings.find(".ac-game-settings-login");
        this.$login_username = this.$login.find(".ac-game-settings-username input");
        this.$login_password = this.$login.find(".ac-game-settings-password input");
        this.$login_submit = this.$login.find(".ac-game-settings-submit input");
        this.$login_error_message = this.$login.find(".ac-game-settings-error-message");
        this.$login_register = this.$login.find(".ac-game-settings-option");


        this.$login.hide();

        this.$register = this.$settings.find(".ac-game-settings-register");
        this.$register_username = this.$register.find(".ac-game-settings-username input");
        this.$register_password = this.$register.find(".ac-game-settings-password-first input");
        this.$register_password_confirm = this.$register.find(".ac-game-settings-password-second input");
        this.$register_submit = this.$register.find(".ac-game-settings-submit input");
        this.$register_error_message = this.$register.find(".ac-game-settings-error-message");
        this.$register_login = this.$register.find(".ac-game-settings-option");

        this.$register.hide();


        this.$acwing_login = this.$settings.find(".ac-game-settings-acwing img")


        this.root.$ac_game.append(this.$settings);


        this.start();
    }

    start() {
        if (this.platform === "ACAPP") {
            this.getinfo_acapp();
        } else {
            this.getinfo_web();
            this.add_listening_events();
        }
    }

    acwing_login() {
        $.ajax({
            url: "https://app4986.acapp.acwing.com.cn/settings/acwing/web/apply_code/",
            type: "GET",
            success: function (resp) {
                if (resp.result === "success") {
                    window.location.replace(resp.apply_code_url);
                }
            }
        })
    }

    add_listening_events() {
        let outer = this;
        this.add_listening_events_login();
        this.add_listening_events_register();

        this.$acwing_login.click(function () {
            outer.acwing_login();
        })
    }

    add_listening_events_login() {
        let outer = this;
        this.$login_register.click(function () {
            outer.register();
        });

        this.$login_submit.click(function () {
            outer.login_on_remote();
        });
    }

    add_listening_events_register() {
        let outer = this;
        this.$register_login.click(function () {
            outer.login();
        });

        this.$register_submit.click(function () {
            outer.register_on_remote();
        })
    }

    login() {// 打开登陆界面
        this.$register.hide();
        this.$login.show();
    }

    register() {
        this.$login.hide();
        this.$register.show();
    }

    login_on_remote() {
        let outer = this;

        let username = this.$login_username.val();
        let password = this.$login_password.val();
        this.$login_error_message.empty();

        $.ajax({
            url: "https://app4986.acapp.acwing.com.cn/settings/login/",
            type: "GET",
            data: {
                username: username,
                password: password,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$login_error_message.html(resp.result);
                }
            }
        });
    }

    register_on_remote() {
        let outer = this;

        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password_confirm = this.$register_password_confirm.val();


        this.$register_error_message.empty();

        $.ajax({
            url: "https://app4986.acapp.acwing.com.cn/settings/register",
            type: "GET",
            data: {
                username: username,
                password: password,
                password_confirm: password_confirm,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    location.reload();
                } else {
                    outer.$register_error_message.html(resp.result);
                }
            }
        });
    }

    logout_on_remote() {
        if (this.platform === "ACAPP") {
            this.root.AcWingOS.api.window.close();
        } else {
            $.ajax({
                url: "https://app4986.acapp.acwing.com.cn/settings/logout/",
                type: "GET",
                success: function (resp) {
                    if (resp.result === "success") {
                        location.reload();
                    } else {
                        outer.$login_error_message.html(resp.result);
                    }
                }
            });
        }
    }

    login_acapp(appid, redirect_uri, scope, state) {
        let outer = this;
        this.root.AcWingOS.api.oauth2.authorize(appid, redirect_uri, scope, state, function (resp) {
            if (resp.result === "success") {
                outer.username = resp.username;
                outer.photo = resp.photo;
                outer.hide();
                outer.root.menu.show();
            }
        });
    }

    getinfo_acapp() {
        let outer = this;
        $.ajax({
            url: "https://app4986.acapp.acwing.com.cn/settings/acwing/acapp/apply_code/",
            type: "GET",
            success: function (resp) {
                if (resp.result === "success") {
                    outer.login_acapp(resp.appid, resp.redirect_uri, resp.scope, resp.state);
                }
            }
        });
    }

    getinfo_web() {
        let outer = this;
        $.ajax({
            url: "https://app4986.acapp.acwing.com.cn/settings/getinfo/",
            type: "GET",
            data: {
                platform: outer.platform,
            },
            success: function (resp) {
                if (resp.result === "success") {
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    outer.hide();
                    outer.root.menu.show();
                } else {
                    outer.login();
                }
            }
        });
    }

    hide() {
        this.$settings.hide();
    }

    show() {
        this.$settings.show();
    }

}