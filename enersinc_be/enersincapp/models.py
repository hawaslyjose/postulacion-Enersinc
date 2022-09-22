from django.db import models

# Create your models here.

class Persona(models.Model):
  nombre = models.CharField(max_length=30)
  apellido = models.CharField(max_length=30)
  cedula = models.IntegerField()
  hobbie = models.CharField(max_length=30)
