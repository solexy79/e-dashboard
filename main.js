let greeting = new Date().getHours();
console.log(greeting);

if (greeting == 0 || greeting < 12){
  greeting = 'morning';
}else if(greeting == 12 || greeting < 17){
  greeting = 'afternoon';
}else if(greeting == 17 || greeting < 20){
  greeting = 'evening';
}else{
  greeting = 'night';
}


// for the typing animation
const heading = 'Hi Chandan, have a good' + greeting +'!' ;
let i = 0;

const typing = () => {
  if (i < heading.length){
    document.querySelector('.lead').innerHTML += heading.charAt(i);
    i++;

    setTimeout(typing, 160);
  }
}

typing()


// for the fade in effect
const row = document.querySelector('.row');


document.addEventListener('DOMContentLoaded', () => {
  row.style.cssText = 'opacity: 1; left: 3%; visibility: visible';
})