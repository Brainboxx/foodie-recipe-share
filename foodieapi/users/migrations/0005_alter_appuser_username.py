# Generated by Django 4.2.7 on 2023-11-06 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_appuser_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='username',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
