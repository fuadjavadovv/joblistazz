import django_filters as filters
from .models import Job,City,Education,Experience,Price,Category

class JobsFilter(filters.FilterSet):
    category= filters.ModelChoiceFilter(queryset=Category.objects.all())
    city= filters.ModelChoiceFilter(queryset=City.objects.all(),empty_label = 'Şəhər')
    education= filters.ModelChoiceFilter(queryset=Education.objects.all(),empty_label = 'Təhsil')
    # category= filters.ModelChoiceFilter(queryset=Category.objects.all(),empty_label = 'Kategorya')
    class Meta:
        model = Job
        fields = ['category','city','education']

    def __init__(self, data=None, queryset=None, *, request=None, prefix=None):
            super(JobsFilter, self).__init__(data=data, queryset=queryset, request=request, prefix=prefix)
            self.filters['category'].field.widget.attrs.update({'display': 'none','border':'1px #dadada solid','border-radius':'10px','overflow-y':'scroll','height':'20vh'})