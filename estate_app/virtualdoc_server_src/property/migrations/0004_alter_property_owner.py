# Generated by Django 3.2.7 on 2021-09-20 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0003_auto_20210918_2218'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='owner',
            field=models.CharField(max_length=50),
        ),
    ]
