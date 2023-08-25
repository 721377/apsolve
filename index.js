var menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const naclo = document.querySelector('.close');
const clos = document.getElementById('clo');
const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');

function closen() {
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
}

menu.onclick = function () {
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
};

naclo.onclick = closen; // Remove parentheses
clos.onclick = closen;
close1.onclick = closen;
close2.onclick = closen;
close3.onclick = closen;
close4.onclick = closen;










var holder = document.querySelector('.holder');


document.addEventListener('DOMContentLoaded', function () {
    holder.style.display = 'grid';

    setTimeout(function () {
        holder.style.display = 'none';
    }, 2000);
});


