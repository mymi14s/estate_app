import json
from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

from .models import Property
from .forms import PropertyForm

# Create your views here.
def propertylist(request):
    properties = [i.get('fields') for i in json.loads(serializers.serialize(
        "json", Property.objects.all().order_by('-creation')
    ))]
    print('REQUEST MADE')
    return JsonResponse(properties, safe=False)

def propertydetail(request, name):
    try:
        property = [i.get('fields') for i in json.loads(serializers.serialize(
        "json", Property.objects.filter(name=name)
        ))]
        print(property)
    except Exception as e:
        doc = json.loads({})
    return JsonResponse(property, safe=False)

@csrf_exempt
def propertycreate(request):
    if(request.method=='POST'):
        name = request.POST.get('name')
        # print("name=", request.POST)
        try:
            property = Property.objects.get(name=name)
            form = PropertyForm(request.POST, instance=property)
            form.save()
        except Exception as e:
            form = PropertyForm(request.POST)
            form.save()
        # return data
        property = [i.get('fields') for i in json.loads(serializers.serialize(
            "json", Property.objects.filter(name=name)
            ))]
        return JsonResponse(property, safe=False)
    return JsonResponse({'state':False}, safe=False)
