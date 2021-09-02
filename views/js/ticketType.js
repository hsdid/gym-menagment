const tableTicketRow = Array.from(document.querySelectorAll('[data-tableTicketRow]'));
const editFormTicket = document.querySelector('[data-editFormTicket]');
const editFormTicketValue = document.querySelectorAll('[data-editFormTicketValue]');
const editTicketId = document.querySelector('[data-editTicketId]');
const btnCloseEditFormTicket = document.querySelector('[data-btnCloseEditFormTicket]');

tableTicketRow.map(e => e.addEventListener('dblclick', tableRowHandler));
btnCloseEditFormTicket.addEventListener('click', () => { editFormTicket.style.display = "none"; });

function tableRowHandler(e) {
    editTicketId.setAttribute("value", e.path[1].id);
    editFormTicket.style.top = `${e.path[1].offsetTop + 1}px`;
    editFormTicket.style.height = `${e.path[1].offsetHeight - 2}px`;
    window.addEventListener('resize', () => {
        editFormTicket.style.top = `${e.path[1].offsetTop + 1}px`;
        editFormTicket.style.height = `${e.path[1].offsetHeight - 2}px`;
    });
    editFormTicket.style.display = "";

    for (i = 0; i <= editFormTicketValue.length; i++) {
        editFormTicketValue[i].setAttribute('value', e.path[1].children[i + 1].innerHTML);
    }
}