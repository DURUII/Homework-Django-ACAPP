from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    tittle = '<h1 style="text-align: center">战</h1>'
    anchor = '<a href="/play">games</a>'
    img = '<img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.jHe7n8tbxtjoXdEiOq7MaAHaEJ?pid=ImgDet&rs=1" width=100%>'
    return HttpResponse(tittle + anchor + img)


def play(request):
    tittle = '<h1 style="text-align: center">游戏</h1>'
    anchor = '<a href="/">index</a>'
    img = '<img src="https://cdn.acwing.com/media/file_system/file/application/icon/WeChat_Image_20200224110559_Msx1isY.jpg" width=100%>'
    return HttpResponse(tittle + anchor + img)
