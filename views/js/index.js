const tableCustomerRow = Array.from(document.querySelectorAll('[data-tableCustomerRow]'));
const discount = document.querySelector('[data-discount]');
const priceOption = Array.from(document.querySelectorAll('[data-price-option]'));
const priceOptionEdit = Array.from(document.querySelectorAll('[data-editFormCustomerOptionTic]'));
const discountEdit = document.querySelector('[data-discountEdit]');
const customerEditForm = document.querySelector('[data-editFormCustomer]');
const btnCloseEditForm = document.querySelector('[data-btnCloseEditFormCustomer]');
const editCustomerId = document.querySelector('[data-editCustomerId]');
const customerEditValue = Array.from(document.querySelectorAll('[data-editFormCustomerValue]'));

const innerHtmlPrice = new Array(priceOption.length);

discount.addEventListener('input', handlerDiscount);
discountEdit.addEventListener('input', handlerDiscountEdit);
btnCloseEditForm.addEventListener('click', () => { customerEditForm.style.display = "none"; });
tableCustomerRow.map(e => e.addEventListener('dblclick', handlerCustomerEdit));

function handlerDiscount(e) {
    const selectDiscount = e.target[e.target.value].getAttribute('discount');

    priceOption.map(e => {
        e.setAttribute('afterDiscount', e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price'));
        e.innerHTML = `${innerHtmlPrice[e.index - 1]}(${e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price')})zł`;
    });
}

function handlerDiscountEdit(e) {
    const selectDiscount = e.target[e.target.value].getAttribute('discount');

    priceOptionEdit.map(e => {
        e.setAttribute('afterDiscount', e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price'));
        e.innerHTML = `${innerHtmlPrice[e.index - 1]}(${e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price')})zł`;
    });
}

function priceAfterDiscount() {
    const selectDiscount = discountEdit.getAttribute('valueSelected');

    priceOptionEdit.map(e => {
        e.setAttribute('afterDiscount', e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price'));
        e.innerHTML = `${innerHtmlPrice[e.index - 1]}(${e.getAttribute('price') - selectDiscount / 100 * e.getAttribute('price')})zł`;
    });
}

function handlerCustomerEdit(e) {
    editCustomerId.setAttribute("value", e.path[1].id);
    customerEditForm.style.top = `${e.path[1].offsetTop + 1}px`;
    customerEditForm.style.height = `${e.path[1].offsetHeight - 2}px`;
    window.addEventListener('resize', () => {
        customerEditForm.style.top = `${e.path[1].offsetTop + 1}px`;
        customerEditForm.style.height = `${e.path[1].offsetHeight - 2}px`;
    });
    customerEditForm.style.display = "";

    for (i = 0; i <= customerEditValue.length; i++) {
        if (customerEditValue[i].type == 'select-one') {
            Array.from(customerEditValue[i].children).map(q => {
                if (q.getAttribute('value').includes(e.path[1].children[i + 1].getAttribute('value'))) {
                    q.setAttribute('selected', 'selected');
                    customerEditValue[i].setAttribute('valueSelected', q.getAttribute(q.getAttribute('discount') ? 'discount' : 'price'));
                    priceAfterDiscount();
                }
                else {
                    q.removeAttribute('selected');
                }
            });
        }
        else if (customerEditValue[i].type == 'date') {
            customerEditValue[i].setAttribute('value', e.path[1].children[i + 1].innerHTML.split("-").reverse().join("-"));
        }
        else {
            customerEditValue[i].setAttribute('value', e.path[1].children[i + 1].innerHTML);
        }
    }
}

for (i = 0; i < priceOption.length; i++) {
    innerHtmlPrice[i] = priceOption[i].innerHTML;
}

priceOption.map(e => e.innerHTML += `(${e.getAttribute('price')})zł`);
priceOptionEdit.map(e => e.innerHTML += `(${e.getAttribute('price')})zł`);