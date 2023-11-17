# Generated by Django 4.2.7 on 2023-11-10 18:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipe', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='chef',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
