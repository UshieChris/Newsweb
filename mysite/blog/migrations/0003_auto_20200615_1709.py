# Generated by Django 3.0.7 on 2020-06-15 16:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20200615_1702'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='create_date',
            new_name='created_date',
        ),
    ]
