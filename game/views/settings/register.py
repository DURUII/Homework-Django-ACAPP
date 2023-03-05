from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player
from django.http import JsonResponse


def register(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()

    password_confirm = data.get("password_confirm", "").strip()

    if not username or not password:
        return JsonResponse({"result": "用户名和密码不能为空"})

    if User.objects.filter(username=username).exists():
        return JsonResponse({"result": "用户名已存在"})

    if password != password_confirm:
        return JsonResponse({"result": "两个密码不一致"})

    user = User(username=username)
    user.set_password(password)
    user.save()

    Player.objects.create(
        user=user,
        photo="https://pic1.zhimg.com/80/v2-186994df8a5be3eb5840fa9297d77826_1440w.webp?source=1940ef5c",
    )

    login(request, user)

    return JsonResponse({"result": "success"})
