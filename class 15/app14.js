var arrofobj = [

    {
        p_Name : 'Sumsung',
        p_id :  '01',
        p_price :  '50000',
        p_image :'https://images.priceoye.pk/samsung-galaxy-z-fold4-pakistan-priceoye-lsd5k-270x270.webp'
    },
    {
        p_Name : 'Sumsung',
        p_id :  '02',
        p_price :  '60000',
        p_image :'https://images.priceoye.pk/samsung-galaxy-z-fold4-pakistan-priceoye-lsd5k-270x270.webp'
    },
    


]


// document.write(arrofobj[0].p_image)

var getimg = document.getElementById('img')
getimg.setAttribute('class','img')
getimg.src = arrofobj[0].p_image



