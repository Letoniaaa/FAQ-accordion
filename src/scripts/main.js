// Btn De Abertura
const btnOpen1 = document.getElementById('op1');
const btnOpen2 = document.getElementById('op2');
const btnOpen3 = document.getElementById('op3');
const btnOpen4 = document.getElementById('op4');

// Btn de Fechamento
const btnClose1 = document.querySelector('#clo1');
const btnClose2 = document.querySelector('#clo2');
const btnClose3 = document.querySelector('#clo3');
const btnClose4 = document.querySelector('#clo4');

// Paragrafos
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');

btnOpen1.addEventListener('click', () => {

    btnOpen1.style.display = 'none';
    btnClose1.style.display = 'block';

    p1.style.display = 'block';

})

btnClose1.addEventListener('click', () => {

    btnClose1.style.display = 'none';
    btnOpen1.style.display = 'block';

    p1.style.display = 'none';
    
})

btnOpen2.addEventListener('click', () => {

    btnOpen2.style.display = 'none';
    btnClose2.style.display = 'block';

    p2.style.display = 'block';

})

btnClose2.addEventListener('click', () => {

    btnClose2.style.display = 'none';
    btnOpen2.style.display = 'block';

    p2.style.display = 'none';
    
})

btnOpen3.addEventListener('click', () => {

    btnOpen3.style.display = 'none';
    btnClose3.style.display = 'block';

    p3.style.display = 'block';

})

btnClose3.addEventListener('click', () => {

    btnClose3.style.display = 'none';
    btnOpen3.style.display = 'block';

    p3.style.display = 'none';
    
})

btnOpen4.addEventListener('click', () => {

    btnOpen4.style.display = 'none';
    btnClose4.style.display = 'block';

    p4.style.display = 'block';

})

btnClose4.addEventListener('click', () => {

    btnClose4.style.display = 'none';
    btnOpen4.style.display = 'block';

    p4.style.display = 'none';
    
})


