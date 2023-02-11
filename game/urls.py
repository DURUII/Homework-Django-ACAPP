from django.urls import path
from game.views import index

urlpatterns=[
    path("",index,name='index')
]
