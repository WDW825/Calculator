from django.shortcuts import render

def converter_main(request):
    return render(request, 'converter/convert_list.html')

def converter_page(request):
    page_code = int(request.GET.get('page_code'))

    page_list = {
        1: 'Длина',
        2: 'Масса',
        3: 'Объем'
    }

    data = {
        'page_name': page_list[page_code],
        'js_code': page_code
    }

    return render(request, 'converter/converter_page.html', data)