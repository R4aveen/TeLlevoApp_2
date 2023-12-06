from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import generics
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response



class PasajeroViewSet(generics.ListCreateAPIView):
    queryset = Pasajero.objects.all()
    serializer_class = PasajeroSerializers

class ChoferViewSet(generics.ListCreateAPIView):
    queryset = Chofer.objects.all()
    serializer_class = ChoferSerializers

class ViajeViewSet(generics.ListCreateAPIView):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializers

class FavoritoViewSet(generics.ListCreateAPIView):
    queryset = Favorito.objects.all()
    serializer_class = FavoritoSerializers