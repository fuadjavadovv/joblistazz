from modeltranslation.translator import register,  TranslationOptions
from showlist.models import Education,Job,City,Category,Experience

@register(City)
class CityTranslationOptions(TranslationOptions):
    fields = ("name", )
@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ("name", )

@register(Experience)
class ExperiencenTranslationOptions(TranslationOptions):
    fields = ("name", )
@register(Education)
class EducationTranslationOptions(TranslationOptions):
    fields = ("name", )



@register(Job)
class JObTranslationOptions(TranslationOptions):
    fields = ("title","bank", "position_description","demands","conditions","appeal","company_description","address")