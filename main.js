const heading = 'Hi Chandan, have a good evening!' ;
let i = 0;

const typing = () => {
  if (i < heading.length){
    document.querySelector('.lead').innerHTML += heading.charAt(i);
    i++;

    setTimeout(typing, 160);
  }
}

typing()



const row = document.querySelector('.row');


document.addEventListener('DOMContentLoaded', () => {
  row.style.cssText = 'opacity: 1; left: 3%; visibility: visible';
})