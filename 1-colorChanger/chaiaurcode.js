const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target === grey) {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === white) {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === blue) {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target === yellow) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
