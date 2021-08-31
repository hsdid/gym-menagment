const priceOption = Array.from(document.querySelectorAll('[data-price-option]'));
const priceOptionEdit = Array.from(document.querySelectorAll('[data-price-optionEdit]'));
const discountOptionEdit = Array.from(document.querySelectorAll('[data-discount-optionEdit]'));
const discount = document.querySelector('[data-discount]');
const discountEdit = document.querySelector('[data-discountEdit]');
const customer = Array.from(document.querySelectorAll('[data-customer]'));
const customerEditForm = document.querySelector('[data-customerEditForm]');
const btnCloseEditForm = document.querySelector('[data-btnCloseEditForm]');
const editCustomerId = document.querySelector('[data-editCustomerId]');
const customerEditValue = document.querySelectorAll('[data-customerEditValue]');

const innerHtmlPrice = new Array(priceOption.length);

discount.addEventListener('input', handlerDiscount);
discountEdit.addEventListener('click', handlerDiscountEdit);
btnCloseEditForm.addEventListener('click', () => { customerEditForm.style.display = "none"; });
customer.map(e => e.addEventListener('click', handlerCustomerEdit));

function handlerDiscount(e) {
    const selectDiscount = e.target[e.target.value].attributes.discount.value;

    priceOption.map(e => {
        e.setAttribute('afterDiscount', e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price'));
        e.innerHTML = `${innerHtmlPrice[e.index - 1]}(${e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price')})zł`;
    });
}

function handlerDiscountEdit(e) {
    const selectDiscount = e.target[e.target.value].attributes.discount.value;

    priceOptionEdit.map(e => {
        e.setAttribute('afterDiscount', e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price'));
        e.innerHTML = `${innerHtmlPrice[e.index - 1]}(${e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price')})zł`;
    });
}

function priceAfterDiscount(e) {

    if (e.attributes.price) {
        p = e.attributes.price.value;
    }

    if (e.attributes.discount) {
        d = e.attributes.discount.value;
    }

    console.log(p);
}

function handlerCustomerEdit(e) {
    editCustomerId.setAttribute("value", e.path[1].id);
    customerEditForm.style.top = `${e.path[1].offsetTop + 2}px`;
    customerEditForm.style.height = `${e.path[1].offsetHeight - 2}px`;
    customerEditForm.style.display = "";

    for (i = 0; i <= customerEditValue.length; i++) {

        Array.from(customerEditValue).map(w => {
            if (w.type == 'select-one') {
                const children = Array.from(customerEditValue[i].children);

                children.map(q => {
                    if (q.innerHTML.includes(e.path[1].children[i + 1].innerHTML)) {
                        q.setAttribute('selected', 'selected');
                        //priceAfterDiscount(q);
                    } else {
                        q.removeAttribute('selected');
                    }
                });
            } else {
                customerEditValue[i].setAttribute('value', e.path[1].children[i + 1].innerHTML);
            }
        });
    }
}

for (i = 0; i < priceOption.length; i++) {
    innerHtmlPrice[i] = priceOption[i].innerHTML;
}

priceOption.map(e => e.innerHTML += `(${e.getAttribute('price')})zł`);
priceOptionEdit.map(e => e.innerHTML += `(${e.getAttribute('price')})zł`);