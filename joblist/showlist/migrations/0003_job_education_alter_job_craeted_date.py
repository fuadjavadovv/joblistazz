# Generated by Django 4.1.6 on 2023-02-14 07:30

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('showlist', '0002_category_city_education_experience_price_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='Education',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='showlist.education'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='job',
            name='craeted_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 14, 7, 29, 58, 622906, tzinfo=datetime.timezone.utc)),
        ),
    ]
