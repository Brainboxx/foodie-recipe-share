# Generated by Django 4.2.7 on 2023-11-06 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_rename_user_id_appuser_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='name',
            field=models.CharField(default='', max_length=150),
            preserve_default=False,
        ),
    ]
