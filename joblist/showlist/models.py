from django.db import models
from django.utils import timezone

# Create your models here.
class City(models.Model):
    name = models.CharField(max_length=250)
    def __str__(self):
         return self.name

class Price(models.Model):
    min = models.IntegerField(blank=True)
    max = models.IntegerField(blank=True)
    def __str__(self):
        return '{},{}'.format(self.min,self.max)
class Category(models.Model):
    name = models.CharField(max_length=250)
    def __str__(self):
         return self.name
class Experience(models.Model):
    name = models.CharField(max_length=250)
    def __str__(self):
         return self.name
class Education(models.Model):
    name = models.CharField(max_length=250)
    def __str__(self):
         return self.name
class Advertising(models.Model):
    image = models.ImageField(upload_to='images/')
    show = models.BooleanField(default=False)

class Job(models.Model):
    title = models.CharField(max_length=500)
    bank = models.CharField(max_length=250)
    price = models.IntegerField(default=0)
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    experience = models.ForeignKey(Experience,on_delete=models.CASCADE)
    education = models.ForeignKey(Education,on_delete=models.CASCADE)
    craeted_date = models.DateTimeField(default=timezone.now())
    position_description = models.TextField()
    demands = models.TextField()
    conditions = models.TextField()
    appeal = models.TextField()
    company_description = models.TextField()
    address = models.TextField()
    phone_number = models.CharField(max_length=20)
    image = models.FileField()
    bank_image = models.ImageField(upload_to='images/')
    premium = models.BooleanField(default=False)
    def __str__(self):
     return self.title

