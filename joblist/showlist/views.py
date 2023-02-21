from django.shortcuts import render,redirect
from .models import Job,Category,City,Education,Experience,Price,Advertising
from .filters import JobsFilter
from django.core.paginator import Paginator
from django.urls import translate_url
from django.conf import settings


# Create your views here.
def showlist(request):
    advertising=Advertising.objects.filter(show=True)
    categorys = Category.objects.all()
    experiences=Experience.objects.all()
    citys = City.objects.all()
    educations = Education.objects.all()
    jobs_premium = Job.objects.filter(premium=True)
    # pfilter = JobsFilter()
    # properties_filter= JobsFilter(request.GET,queryset=Job.objects.filter(premium=False))
    # jobs = properties_filter.qs

    jobs = Job.objects.filter(premium=False)

    data = request.GET   
    if data.get("city"):
        city = data.get("city").split(",")
        city_list = []
        for i in city:
            city_list.append(City.objects.get(id=i))
        jobs = jobs.filter(city__in=city_list)

    if data.get("category"):
        category = data.get("category").split(",")
        category_list = []
        for i in category:
            category_list.append(Category.objects.get(id=i))
        jobs = jobs.filter(category__in=category_list)

    # if data.get("min_salary") and data.get("max_salary"):
    #     min_salary=data.get("min_salary")
    #     max_salary=data.get("max_salary")
    #     jobs=jobs.filter(price__min=min_salary,price__max=max_salary,premium=False)
    #     print(jobs,'aaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

            
    if data.get("education"):
        education = data.get("education").split(",")
        education_list = []
        for i in education:
            education_list.append(Education.objects.get(id=i))
        jobs = jobs.filter(education__in=education_list)

    if data.get("experience"):
        experience = data.get("experience").split(",")
        experience_list = []
        for i in experience:
            experience_list.append(Experience.objects.get(id=i))
        jobs = jobs.filter(experience__in=experience_list)

    if data.get("min_salary"):
        jobs = jobs.filter(price__gte=data.get("min_salary"))

    if data.get("max_salary"):
        jobs = jobs.filter(price__lte=data.get("max_salary"))
            

    page_number=int(request.GET.get('page',1))
    paginator = Paginator(jobs,2)
    page = paginator.page(page_number)
    # jobs = Job.objects.filter(premium=False)
    context= {
        'jobs_premium':jobs_premium,
        # 'pfilter':pfilter,        
        'jobs': page.object_list, 
        'paginator': paginator,
        'page_object': page,
        'filter': JobsFilter,
        'jobs': page.object_list,
        'paginator': paginator,
        'categorys':categorys,
        'experiences':experiences,
        'citys':citys,
        'educations':educations,
        'advertising':advertising

    } 
    return render(request,'index.html',context)


def set_language(request, lang_code):
    lang = request.META.get("HTTP_REFERER", None)
    
    response = redirect(translate_url(lang, lang_code))
    # request.session[translation.LANGUAGE_SESSION_KEY] = lang_code
    response.set_cookie(settings.LANGUAGE_COOKIE_NAME, lang_code)

    return response