# Generated by Django 4.1.6 on 2023-02-15 11:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showlist', '0004_job_premium_alter_job_craeted_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='craeted_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 15, 11, 52, 48, 157837, tzinfo=datetime.timezone.utc)),
        ),
    ]
