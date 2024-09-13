from django.db import models

class Driver(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    license = models.CharField(max_length=50, unique=True)
    vehicle_model = models.CharField(max_length=100)
    vehicle_year = models.IntegerField()

    def __str__(self):
        return f'{self.name} - {self.vehicle_model}'
