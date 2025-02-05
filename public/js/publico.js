//Referencia HTML

const lblTicket1 = document.querySelector('#lblTicket1')
const lblTicket2 = document.querySelector('#lblTicket2')
const lblTicket3 = document.querySelector('#lblTicket3')
const lblTicket4 = document.querySelector('#lblTicket4')
const lblEscritorio1 = document.querySelector('#lblEscritorio1')
const lblEscritorio2 = document.querySelector('#lblEscritorio2')
const lblEscritorio3 = document.querySelector('#lblEscritorio3')
const lblEscritorio4 = document.querySelector('#lblEscritorio4')

const socket = io();

socket.on('estado-actual', (payload) => {

    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();

    const [ticket1,ticket2,ticket3,ticket4 ] = payload

    lblTicket1.innerText = 'Ticket ' + ticket1.numero; 
    lblEscritorio1.innerText = 'Escritorio ' + ticket1.escritorio;

    lblTicket2.innerText = 'Ticket ' + ticket2.numero;
    lblEscritorio2.innerText = 'Escritorio ' + ticket2.escritorio;

    lblTicket3.innerText = 'Ticket ' + ticket3.numero;
    lblEscritorio3.innerText = 'Escritorio ' + ticket3.escritorio;

    lblTicket4.innerText = 'Ticket ' + ticket4.numero;
    lblEscritorio4.innerText = 'Escritorio ' + ticket4.escritorio;
})

