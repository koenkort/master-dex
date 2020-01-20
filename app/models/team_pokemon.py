from django.db import models


class TeamPokemon(models.Model):
    pokemnon_id = models.IntegerField()
    team = models.ForeignKey('Team', related_name="pokemon", on_delete=models.CASCADE)