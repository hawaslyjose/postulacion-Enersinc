import json
from django.http.response import JsonResponse
from django.views import View
from .models import Persona
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class PersonaView(View):
  @method_decorator(csrf_exempt)
  def dispatch(self, request, *args, **kwargs):
    return super().dispatch(request, *args, **kwargs)

  def get(self,request,id=0):
    if(id>0):
      personas=list(Persona.objects.filter(id=id).values())
      if len(personas)> 0:
        persona=personas[0]
        datos={'message':"Satisfactorio",'personas':persona}
      else:
        datos={'message':"persona no encontrada",}
      return JsonResponse(datos)
    else:
        personas = list(Persona.objects.values())
        if len(personas)> 0:
          datos={'message':"Satisfactorio",'personas':personas}
        else:
          datos={'message':"persona no encontrada",}
        return JsonResponse(datos)

  def post(self,request):
    jd = json.loads(request.body)
    Persona.objects.create(nombre=jd['nombre'],apellido=jd['apellido'],cedula=jd['cedula'],hobbie=jd['hobbie'])
    datos = {'message':"Satisfactorio"}
    return JsonResponse(datos)

  def put(self,request,id):
    jd= json.loads(request.body)
    personas=list(Persona.objects.filter(id=id).values())
    if len(personas)> 0:
      persona=Persona.objects.get(id=id)
      persona.nombre=jd['nombre']
      persona.apellido=jd['apellido']
      persona.cedula=jd['cedula']
      persona.hobbie=jd['hobbie']
      persona.save()
      datos = {'message':"Satisfactorio"}
    else:
      datos={'message':"persona no encontrada",}
    return JsonResponse(datos)


  def delete(self,request,id):
    personas=list(Persona.objects.filter(id=id).values())
    if len(personas)> 0:
      Persona.objects.filter(id=id).delete()
      datos = {'message':"Satisfactorio"}
    else:
      datos={'message':"persona no encontrada",}
    return JsonResponse(datos)
