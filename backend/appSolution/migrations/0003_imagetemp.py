# Generated by Django 3.0.2 on 2020-06-25 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appSolution', '0002_auto_20200226_0837'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImageTemp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='assets/image')),
            ],
        ),
    ]
