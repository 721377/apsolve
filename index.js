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





const numberElement = document.querySelector(".number");


const tl = gsap.timeline({ repeat: -1 });
tl.to(numberElement, {
  duration: 0.5,
  scaleX: 1.2,
  scaleY: 1.2,
  ease: "power2.inOut",
})
  .to(numberElement, {
    duration: 0.5,
    scaleX: 1,
    scaleY: 1,
    ease: "power2.inOut",
  })
  .to(numberElement, {
    duration: 1,
    textContent:"100%",
    roundProps: "textContent",
    ease: "power2.inOut",
    onComplete: showContentPage,
  });

function showContentPage() {
  gsap.to(".holder", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    ease: "power2.inOut",
  })

}
