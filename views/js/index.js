const priceOption = document.querySelectorAll('[data-price-option]');
const discount = document.querySelector('[data-discount]');
const innerHtmlPrice = new Array(priceOption.length);

discount.addEventListener('input', handlerDiscount);

for (i = 0; i < priceOption.length; i++) {
    innerHtmlPrice[i] = priceOption[i].innerHTML;

    priceOption[i].innerHTML += `(${priceOption[i].getAttribute('price')})zł`;
}

function handlerDiscount(e) {
    let selectDiscount = e.target[e.target.value].attributes.discount.value;

    for (i = 0; i < priceOption.length; i++) {
        priceOption[i].setAttribute('afterDiscount', priceOption[i].getAttribute('price') - selectDiscount / 100 * priceOption[i].getAttribute('price'));
        priceOption[i].innerHTML = `${innerHtmlPrice[i]}(${priceOption[i].getAttribute('price') - selectDiscount / 100 * priceOption[i].getAttribute('price')})zł`
    }
}