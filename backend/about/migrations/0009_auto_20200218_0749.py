# Generated by Django 3.0.2 on 2020-02-18 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0008_home'),
    ]

    operations = [
        migrations.AlterField(
            model_name='home',
            name='image',
            field=models.ImageField(upload_to='assets/image'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(upload_to='assets/image'),
        ),
    ]