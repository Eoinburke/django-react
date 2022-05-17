from django.shortcuts import render
from django.http import HttpResponce

# Create your views here.

def main(request):
    return HttpResponce("Hello")