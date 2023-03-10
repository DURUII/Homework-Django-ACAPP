from django.http import JsonResponse
from urllib.parse import quote
from random import randint

from django.core.cache import cache


def get_state():
    res = ""
    for i in range(8):
        res += str(randint(0, 9))
    return res


def apply_code(request):
    appid = "4986"
    # FIXME note it is receive code
    redirect_uri = quote(
        "https://app4986.acapp.acwing.com.cn/settings/acwing/web/receive_code/"
    )
    scope = "userinfo"
    state = get_state()

    cache.set(state, True, 7200)

    apply_code_url = "https://www.acwing.com/third_party/api/oauth2/web/authorize/"
    return JsonResponse(
        {
            "result": "success",
            "apply_code_url": apply_code_url
            + f"?appid={appid}&redirect_uri={redirect_uri}&scope={scope}&state={state}",
        }
    )
