from django.shortcuts import render

def converter_main(request):
    return render(request, 'converter/convert_list.html')

# Create your views here.
