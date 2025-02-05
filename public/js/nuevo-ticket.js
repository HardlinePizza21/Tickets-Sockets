
// Referencias del HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket')
const btnCrear = document.querySelector('button')


const socket = io();

socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.innerText = 'Ticket ' + ultimo
})

socket.on('connect', () => {

    btnCrear.disabled = false;
    

});

socket.on('disconnect', () => {

    btnCrear.disabled = true;

});

btnCrear.addEventListener( 'click', () => {
    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerText = ticket
    });

});