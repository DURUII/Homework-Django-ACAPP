from django.urls import path, include
from game.views.settings.getinfo import getinfo
from game.views.settings.login import signin
from game.views.settings.logout import signout
from game.views.settings.register import register

urlpatterns = [
    path("getinfo/", getinfo, name="settings.getinfo"),
    path("login/", signin, name="settings.login"),
    path("logout/", signout, name="settings.logout"),
    path("register/", register, name="settings.register"),
    path("acwing/", include("game.urls.settings.acwing.index"), name="settings.acwing"),
]
