from django.shortcuts import render

def main_page(request):
    return render(request, 'calculation/calculator.html')
