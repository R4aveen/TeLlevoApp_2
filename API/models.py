# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Chofer(models.Model):
    id_chofer = models.AutoField(primary_key=True)
    nombre_chofer = models.CharField(max_length=100)
    apellido_chofer = models.CharField(max_length=100)
    usuario_chofer = models.CharField(max_length=100)
    pass_chofer = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    correo = models.CharField(max_length=200)
    telefono = models.IntegerField()
    patente = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'chofer'


class Favorito(models.Model):
    id_favorito = models.AutoField(primary_key=True)
    id_viaje = models.IntegerField()
    id_pasajero = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'favorito'


class Pasajero(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    usuario = models.CharField(max_length=100)
    pass_field = models.CharField(db_column='pass', max_length=100)  # Field renamed because it was a Python reserved word.
    direccion = models.CharField(max_length=500)
    correo = models.CharField(max_length=500)
    telefono = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'pasajero'


class Viaje(models.Model):
    id_viaje = models.AutoField(primary_key=True)
    fecha = models.DateField()
    id_pasajero = models.IntegerField()
    id_chofer = models.IntegerField()
    desde = models.CharField(max_length=150)
    hasta = models.CharField(max_length=150)
    costo = models.IntegerField()
    hora_inicio = models.TimeField()
    hora_termino = models.TimeField()
    calificacion = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'viaje'
