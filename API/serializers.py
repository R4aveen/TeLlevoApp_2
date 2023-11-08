from .models import *
from rest_framework import serializers

class PasajeroSerializers(serializers.ModelSerializer):
    class Meta:
        model = Pasajero
        fields = '__all__'

class ChoferSerializers(serializers.ModelSerializer):
    class Meta:
        model = Chofer
        fields = '__all__'


class ViajeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = '__all__'

class FavoritoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = '__all__'