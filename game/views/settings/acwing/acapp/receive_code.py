from django.shortcuts import redirect
from game.rich_console import console
from django.core.cache import cache
import requests

from django.http import JsonResponse

from django.contrib.auth.models import User
from game.models.player.player import Player
from django.contrib.auth import login


from game.rich_console import console
from random import randint


def receive_code(request):
    data = request.GET

    if "errcode" in data:
        return JsonResponse(
            {
                "result": "apply failed",
                "errcode": data["errcode"],
                "errmsg": data["errmsg"],
            }
        )

    code = data.get("code")
    state = data.get("state")

    console.print(f"[red]{state}[/red]")

    if not cache.has_key(state):
        return JsonResponse(
            {
                "result": "state not exist",
            }
        )
    cache.delete(state)

    apply_access_token_url = (
        "https://www.acwing.com/third_party/api/oauth2/access_token/"
    )
    params = {
        "appid": "4927",
        "secret": "d0dee133b3684bfb9dfbd99023d75504",
        "code": code,
    }

    access_token_res = requests.get(apply_access_token_url, params).json()
    access_token = access_token_res["access_token"]
    openid = access_token_res["openid"]

    players = Player.objects.filter(openid=openid)
    if players.exists():
        # login(request, players[0].user)
        player = players[0]
        return JsonResponse(
            {
                "result": "success",
                "username": player.user.username,
                "photo": player.photo,
            }
        )

    get_userinfo_url = "https://www.acwing.com/third_party/api/meta/identity/getinfo/"
    params = {
        "access_token": access_token,
        "openid": openid,
    }

    userinfo_res = requests.get(get_userinfo_url, params).json()
    username = userinfo_res["username"]
    photo = userinfo_res["photo"]

    while User.objects.filter(username=username).exists():
        username += str(randint(0, 9))

    user = User.objects.create(username=username)
    player = Player.objects.create(user=user, photo=photo, openid=openid)

    return JsonResponse(
        {
            "result": "success",
            "username": player.user.username,
            "photo": player.photo,
        }
    )
