let obj;
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  obj = [];
  let values = document.getElementById('values').value.split(',');
  values = [0, 4, 0, 2, 0, 6, 0, 6, 4, 0];

  const left = [];
  const right = [];

  values.map((item, index) => {
    if (index === 0) {
      left.push(parseInt(item));
    } else {
      left.push(Math.max(left[index - 1], parseInt(item)));
    }
  });

  values.reverse().map((item, index) => {
    if (index === 0) {
      right.push(parseInt(item));
    } else {
      right.push(Math.max(right[index - 1], parseInt(item)));
    }
  });
  right.reverse();

  let waterUnits = 0;
  for (let i = 0; i < values.length; i++) {
    waterUnits += Math.min(left[i], right[i]) - values[i];
  }
  console.log(waterUnits);
});
