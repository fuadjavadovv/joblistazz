# Generated by Django 4.1.6 on 2023-02-16 13:00

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showlist', '0011_alter_job_craeted_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='craeted_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 16, 13, 0, 39, 677096, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='job',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
