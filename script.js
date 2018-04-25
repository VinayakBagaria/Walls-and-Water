let obj;
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  obj = [];
  let values = document.getElementById('values').value.split(',');
  values = [5, 1, 3, 4];

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
  right = right.reverse();
});
