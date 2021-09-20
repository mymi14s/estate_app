from django.db import models

# Create your models here.
class Property(models.Model):
    name = models.CharField(max_length=15, unique=True)
    title = models.CharField(max_length=150)
    content = models.TextField(blank=True, null=True)
    property = models.CharField(max_length=15)
    idx = models.PositiveIntegerField(blank=True, null=True)
    docstatus = models.PositiveIntegerField()
    owner = models.CharField(max_length=50)
    parent = models.CharField(max_length=25, blank=True, null=True)
    parenttype = models.CharField(max_length=25, blank=True, null=True)
    creation = models.DateTimeField()
    modified = models.DateTimeField()
    modified_by = models.CharField(max_length=50)

    def __str__(self):return self.name

# {'name': 'DP-230', 'owner': 'Administrator',
# 'creation': '2021-09-18 22:56:41.639926',
# 'modified': '2021-09-18 22:56:41.639926',
# 'modified_by': 'Administrator',
# 'parent': None, 'parentfield': None,
# 'parenttype': None, 'idx': 0, 'docstatus': 0,
#  'title': 'test title',
#  'content': 'test content', 'property': '000166'}
