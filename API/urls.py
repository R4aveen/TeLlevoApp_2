from rest_framework import urlpatterns
from django.urls import re_path as url
from API import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns=[
    url(r'^api/pasajero/$',views.PasajeroViewSet.as_view()),
    url(r'^api/chofer/$',views.ChoferViewSet.as_view()),
    url(r'^api/viaje/$',views.ViajeViewSet.as_view()),
    url(r'^api/favoritos/$',views.FavoritoViewSet.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)