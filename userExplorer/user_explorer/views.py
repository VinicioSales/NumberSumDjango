from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def sum(request):
    if request.method == "POST":
        num = int(request.POST.get("num"))
        result = num + 10
        return JsonResponse({"result": result})
    elif request.method == "GET":
        return render(request, "index.html")
    return JsonResponse({"erro": "Method not alowed"}, status=405)
