from django.http import JsonResponse
from urllib.parse import quote
from random import randint

from django.core.cache import cache

from game.rich_console import console


def get_state():
    res = ""
    for i in range(8):
        res += str(randint(0, 9))
    return res


def apply_code(request):
    appid = "4927"
    # FIXME note it is receive code
    redirect_uri = quote(
        "https://app4927.acapp.acwing.com.cn/settings/acwing/acapp/receive_code/"
    )
    scope = "userinfo"
    state = get_state()

    cache.set(state, True, 7200)

    #  不需要返回连接
    return JsonResponse(
        {
            "result": "success",
            "appid": appid,
            "redirect_uri": redirect_uri,
            "scope": scope,
            "state": state,
        }
    )
