$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });

    let hnav = $('#header__nav');

    hnav.on('show.bs.collapse', '.collapse', function () {
        hnav.addClass('header__nav__full');
        $('#navbarSupportedContent20').css('display', 'fles');
    });
    hnav.on('hide.bs.collapse', '.collapse', function () {
        hnav.removeClass('header__nav__full');
        $('#navbarSupportedContent20').css('display', 'none');
    });
});


let content = [
    { "link": "https:\/\/www.wona.co.il\/product\/contour-brush\/", "image": "https:\/\/www.wona.co.il\/wp-content\/uploads\/2021\/07\/0911028-009-660x1024.png", "title": "FLORMAR - CONTOUR BRUSH", "price": "49.90" },

    { "link": "https:\/\/www.wona.co.il\/product\/contour-brush\/", "image": "https:\/\/www.wona.co.il\/wp-content\/uploads\/2021\/07\/47000023-1-660x1024.png", "title": "FLORMAR - MIDNIGHT MATTE EYELINER BROWN", "price": "29.50" },

    { "link": "https:\/\/www.wona.co.il\/product\/contour-brush\/", "image": "https:\/\/www.wona.co.il\/wp-content\/uploads\/2021\/07\/0717035-000-1-660x1024.png", "title": "FLORMAR - SILK MATTE LIQUID LIPSTICK - NEW", "price": "72" }
];

let product = JSON.parse(JSON.stringify(content));
console.log(product);

for (const element of product) {
    if (element.image) {
        element.image = `<img src="${element.image}" alt="product">`;
    }
    if (element.title) {
        element.title = `<span class="product_title">${element.title}</span>`;
    }
    if (element.price) {
        element.price = `<span class="product-price"><span class="price-items">םיעבצ4</span><span class="price-item">₪${element.price}</span></span>`;
    }
    if (element.link) {
        element.link = `<a href="${element.link}" class="product-link">סקירה מהירה</a>`;
    }
    let tmpl = `<div class="main__product-item">${element.image || ''}${element.title || ''}${element.price || ''}${element.link || ''}</div>`;
    $('#main__products').append(tmpl);
}