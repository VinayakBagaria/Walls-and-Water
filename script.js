let obj = [{}];

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  let values = document.getElementById('values');
  values = values.value.split(',').map(item => parseInt(item));
  makeObject(values);
});

function makeObject(values) {}
