const tableDiscountRow = Array.from(document.querySelectorAll('[data-tableDiscountRow]'));
const editFormDiscount = document.querySelector('[data-editFormDiscount]');
const editFormDiscountValue = document.querySelectorAll('[data-editFormDiscountValue]');
const editDiscountId = document.querySelector('[data-editDiscountId]');
const btnCloseEditFormDiscount = document.querySelector('[data-btnCloseEditFormDiscount]');

tableDiscountRow.map(e => e.addEventListener('dblclick', tableRowHandler));
btnCloseEditFormDiscount.addEventListener('click', () => { editFormDiscount.style.display = "none"; });

function tableRowHandler(e) {
    editDiscountId.setAttribute("value", e.path[1].id);
    editFormDiscount.style.top = `${e.path[1].offsetTop + 1}px`;
    editFormDiscount.style.height = `${e.path[1].offsetHeight - 2}px`;
    window.addEventListener('resize', () => {
        editFormDiscount.style.top = `${e.path[1].offsetTop + 1}px`;
        editFormDiscount.style.height = `${e.path[1].offsetHeight - 2}px`;
    });
    editFormDiscount.style.display = "";

    for (i = 0; i <= editFormDiscountValue.length; i++) {
        editFormDiscountValue[i].setAttribute('value', e.path[1].children[i + 1].innerHTML);
    }
}