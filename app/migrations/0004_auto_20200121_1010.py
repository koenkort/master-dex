# Generated by Django 2.2.3 on 2020-01-21 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20200114_1019'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teampokemon',
            name='url',
        ),
        migrations.AddField(
            model_name='teampokemon',
            name='pokemon_id',
            field=models.IntegerField(default=0),
        ),
    ]