from django.db import models

# Create your models here.

class Dashboard(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    chasis = models.CharField(max_length=50)
    propietario = models.CharField(max_length=50)
    rut = models.CharField(max_length=20)
    estado_vehiculo = models.CharField(max_length=20)

class Meta:
    db_table = 'dashboard'
