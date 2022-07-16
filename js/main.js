document.getElementById('normal').addEventListener('click', function () {
  buttonClick('normal');
})
document.getElementById('fire').addEventListener('click', function () {
  buttonClick('fire');
})
document.getElementById('water').addEventListener('click', function () {
  buttonClick('water');
})
document.getElementById('grass').addEventListener('click', function () {
  buttonClick('grass');
})
document.getElementById('electric').addEventListener('click', function () {
  buttonClick('electric');
})
document.getElementById('ice').addEventListener('click', function () {
  buttonClick('ice');
})
document.getElementById('fighting').addEventListener('click', function () {
  buttonClick('fighting');
})
document.getElementById('poison').addEventListener('click', function () {
  buttonClick('poison');
})
document.getElementById('ground').addEventListener('click', function () {
  buttonClick('ground');
})
document.getElementById('flying').addEventListener('click', function () {
  buttonClick('flying');
})
document.getElementById('psychic').addEventListener('click', function () {
  buttonClick('psychic');
})
document.getElementById('bug').addEventListener('click', function () {
  buttonClick('bug');
})
document.getElementById('rock').addEventListener('click', function () {
  buttonClick('rock');
})
document.getElementById('ghost').addEventListener('click', function () {
  buttonClick('ghost');
})
document.getElementById('dark').addEventListener('click', function () {
  buttonClick('dark');
})
document.getElementById('dragon').addEventListener('click', function () {
  buttonClick('dragon');
})
document.getElementById('steel').addEventListener('click', function () {
  buttonClick('steel');
})
document.getElementById('fairy').addEventListener('click', function () {
  buttonClick('fairy');
})

// Reload page on next page click
document.getElementById('nextGuess').addEventListener('click', function reloadPage() {
  window.location.reload()
})

let data;
let counterArr = [];

async function makeReq() {  
  const randomNum = Math.floor(Math.random() * 18) + 1;
  console.log(randomNum);
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${randomNum}`);
  data = await res.json();

  console.log(data);

  let counters = data.damage_relations.double_damage_from;

  counters.forEach(element => {
    counterArr.push(element.name);
  });
  
  document.querySelector("#typeName").textContent = data.name;
  }catch(error){
    console.log(error)
  }
}

makeReq()

function buttonClick(type) {
    
    for(let i = 0; i < counterArr.length; i++) {
      if(counterArr[i] === type) {
        // console.log('Correct');
        document.querySelector('h3').innerText = 'Correct answer!';
        document.getElementById('nextGuess').classList.remove('invisible');
        return;
    }else{
        // console.log('Wrong');
        document.querySelector('h3').innerText = 'Wrong answer!'
    }
  }
}
