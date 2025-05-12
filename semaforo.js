





// const PASAR = 'green';
// const CUIDADO = 'yellow';
// const PARAR = 'red';
// let _state = [PASAR, CUIDADO, PARAR]; //Posibles valores
// let _statePosition = 0; //Esto es el estado
// const INTERVALO = 2000;
// const TRAFFIC_LIGHT = document.querySelector('#semaforo');

// const _setState = (_state, INTERVALO) => {

//   _state.forEach((light, index) => {
//     setTimeout(() => {
//       TRAFFIC_LIGHT.style.backgroundColor = light;
//     }, index * INTERVALO); 
//   });

//   setTimeout(() => {
//     _setState(_state, INTERVALO); 
//   }, _state.length * INTERVALO);
// };

// const semaforo = () => {
//   _setState(_state, INTERVALO);
// };

// window.onload = semaforo;


const RED = 'red';
const GREEN = 'green';
const YELLOW = 'yellow';

let state = RED;

function startTrafficLight() {
  _renderState();
  setInterval(() => {
    state = _getShiftedState();
    _renderState();
  }, 3000)
}

const _getShiftedState = () => {
  if(state === RED) {
    return GREEN;
  }
  if(state === YELLOW) {
    return RED;
  }
  if(state === GREEN) {
    return YELLOW;
  }
}

const _renderState = () => {
 const redLight = document.querySelector('.red');
 const yellowLight = document.querySelector('.yellow');
 const greenLight = document.querySelector('.green');
 redLight.classList.remove('active');
 yellowLight.classList.remove('active');
 greenLight.classList.remove('active');
  if(state === RED) {
    redLight.classList.add('active');
    return;
  }
  if(state === YELLOW) {
    yellowLight.classList.add('active');
    return;
  }
  if(state === GREEN) {
    greenLight.classList.add('active');
    return;
  }  
}