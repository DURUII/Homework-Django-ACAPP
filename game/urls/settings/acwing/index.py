from django.urls import path
from game.views.settings.acwing.web.apply_code import apply_code as apply_code_web
from game.views.settings.acwing.web.receive_code import receive_code as receive_code_web

from game.views.settings.acwing.acapp.apply_code import apply_code as apply_code_acapp
from game.views.settings.acwing.acapp.receive_code import (
    receive_code as receive_code_acapp,
)

urlpatterns = [
    path("web/apply_code/", apply_code_web, name="settings_acwing_web_apply_code"),
    path(
        "web/receive_code/", receive_code_web, name="settings_acwing_web_receive_code"
    ),
    path(
        "acapp/apply_code/", apply_code_acapp, name="settings_acwing_acapp_apply_code"
    ),
    path(
        "acapp/receive_code/",
        receive_code_acapp,
        name="settings_acwing_acapp_receive_code",
    ),
]
