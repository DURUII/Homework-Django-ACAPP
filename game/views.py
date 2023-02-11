from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    line='<h1 style="text-align: center">my first page</h1>'
    return HttpResponse(line)
