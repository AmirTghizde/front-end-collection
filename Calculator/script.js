
const buttons = document.querySelectorAll('.btn');
let display = document.getElementById('display');
const reset = document.getElementById('reset');


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    var buttonValue = event.target.getAttribute('value');
    display.value += buttonValue;
  });
}
reset.addEventListener('click', function () {
  display.value = '';
})
