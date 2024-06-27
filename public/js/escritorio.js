//referencia html 
const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const lblTicket = document.querySelector('small')
const divAlerta = document.querySelector('.alert')
const lblPendientes = document.querySelector('#lblPendientes')

const searchParams = new URLSearchParams( window.location.search );

if(!searchParams.has('escritorio')){
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio')
lblEscritorio.innerText = escritorio;

divAlerta.style.display = 'none'

const socket = io();

socket.on('ultimo-ticket', (ultimo) => {
    // lblEscritorio.innerText = 'Ticket ' + ultimo
})

socket.on('connect', () => {

    btnAtender.disabled = false;
    
});

socket.on('disconnect', () => {

    btnAtender.disabled = true;

});

socket.on('tickets-pendientes', (pendientes) => {
    if(pendientes === 0){
        lblPendientes.style.display = 'none';
        btnAtender.disabled = true;
    }else {
        lblPendientes.style.display = '';
        lblPendientes.innerText = pendientes;
        btnAtender.disabled = false;
    }
})


btnAtender.addEventListener( 'click', () => {
    
    socket.emit( 'atender-ticket', { escritorio }, ({ok, ticket, msg}) => {

        if(!ok){
            lblTicket.innerText = `Nadie`
            return divAlerta.style.display = '';
        }

        lblTicket.innerText = `Ticket ${ticket.numero}`

    });

});