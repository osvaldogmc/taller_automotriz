# Generated by Django 4.2.5 on 2023-11-19 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dashboard',
            fields=[
                ('id', models.IntegerField(auto_created=True, primary_key=True, serialize=False)),
                ('chasis', models.CharField(max_length=50)),
                ('propietario', models.CharField(max_length=50)),
                ('rut', models.CharField(max_length=20)),
                ('estado_vehiculo', models.CharField(max_length=20)),
            ],
        ),
    ]
