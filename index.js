
// Flight booking function starts here
function ticketCount (ticket, isIncrease) {

    const ticketCount = getInput(ticket);
    let ticketQuantity = ticketCount;
    if (isIncrease == true){
        ticketQuantity = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0) {
        ticketQuantity = ticketCount - 1;
    }
    document.getElementById(ticket+'-count').value = ticketQuantity;
    totalCount () ;
};


// worked here to get the total count of tickets
function totalCount () {
    const firstClassCount = getInput ('firstClass');
    const economyCount = getInput ('economy');

    const subTotalAmount = firstClassCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText=subTotalAmount;

    const charge = Math.round (subTotalAmount * 0.1);
    document.getElementById ('charge').innerText = '$'+ charge;
    const total = subTotalAmount + charge;
    document.getElementById ('total').innerText = '$' + total;
};


// This function is used here to get the input number of tickets
function getInput (ticket) {
    const ticketInput = document.getElementById(ticket+'-count').value;
    const ticketCount = parseInt(ticketInput);
    return ticketCount;
};


//   worked here for additional section
    document.getElementById('book-now').addEventListener('click',function () {
    document.getElementById('book-form').style.display = 'none';
    document.getElementById('payment-form').style.display = 'initial';

});