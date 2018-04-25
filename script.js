// get i/p and format to array
let values = document.getElementById('values').value.split(',');
values = [3, 1, 4];

const left = [];
const right = [];

// parseInt(val) reqd as each is String
// get a left max array for each position
values.map((item, index) => {
  if (index === 0) {
    left.push(parseInt(item));
  } else {
    left.push(Math.max(left[index - 1], parseInt(item)));
  }
});
/*
get a right max array for each position,
going in reverse order, and then reverse the array
*/
values.reverse().map((item, index) => {
  if (index === 0) {
    right.push(parseInt(item));
  } else {
    right.push(Math.max(right[index - 1], parseInt(item)));
  }
});
right.reverse();
/*
reverse back the values - it was used to calculate right array */
values.reverse();
/*
get the max bar length from the original array via spread operator shorthand
*/
const maxBar = Math.max(...values);
// variable which holds the dynamic div
let container = '';
// total water units value
let waterUnits = 0;

for (let i = 0; i < values.length; i++) {
  // get the water level above 'i'th bar
  const wu = Math.min(left[i], right[i]) - values[i];
  // add to the total
  waterUnits += wu;

  // a block represents 1 column
  container += `<div class="block">`;
  // empty space calculation
  for (let j = 0; j < maxBar - values[i] - wu; j++) {
    container += `
                <div class="remaining"></div>
            `;
  }
  // water blocks
  for (let j = 0; j < wu; j++) {
    container += `
                <div class="water"></div>
            `;
  }
  // actual bar at this position
  for (let j = 0; j < values[i]; j++) {
    container += `
                <div class="bar"></div>
            `;
  }
  // ending div to each block
  container += '</div>';
}
// print out the result to the container div
document.getElementById('container').innerHTML = container;

// show the array output and units
document.getElementById(
  'inputData'
).innerHTML = `[${values}] = ${waterUnits} units`;
