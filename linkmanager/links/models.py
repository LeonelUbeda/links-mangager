from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50)




class Link(models.Model):
    title       = models.CharField(max_length=60)
    img_link    = models.CharField(max_length=150, null=True)
    link        = models.CharField(max_length=255)
    #category    = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at  = models.DateTimeField(auto_now_add=True)
    categories  = models.ManyToManyField(Category, null=True)
    def __str__(self):
        return self.link