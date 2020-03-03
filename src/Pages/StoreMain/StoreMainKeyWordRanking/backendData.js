class Product(models.Model):
    name            = models.TextField()
    image_url       = models.URLField(max_length = 2000)
    first_category  = models.ForeignKey('FirstCategory', on_delete = models.SET_NULL, null = True)
    second_category = models.ForeignKey('SecondCategory', on_delete = models.SET_NULL, null = True)
    third_category  = models.ForeignKey('ThirdCategory', on_delete = models.SET_NULL, null = True)
    brand           = models.ForeignKey('Brand', on_delete = models.SET_NULL, related_name = 'brands', null = True)
    price           = models.IntegerField(default = 0)
    discounted_price= models.IntegerField(default = 0)
    point           = models.IntegerField(default = 0)
    detailed_info   = models.TextField()
    add_info        = models.TextField()
    created_at      = models.DateTimeField(auto_now_add = True)
    updated_at      = models.DateTimeField(auto_now = True)
    product_color   = models.ManyToManyField('Color', through = 'ProductColor')
    product_size    = models.ManyToManyField('Size', through = 'ProductSize')
    product_like    = models.ManyToManyField(User, through = 'ProductLike')
    class Meta:
        db_table = 'products'