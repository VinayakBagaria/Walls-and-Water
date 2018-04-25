let obj = [];
let values = document.getElementById('values').value.split(',');
values = [0, 4, 0, 2, 0, 6, 0, 6, 4, 0, 2, 1];

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

values = values.reverse();

const maxBar = Math.max(...values);

document.getElementById('inputData').innerHTML = `[${values}]`;

let wrapper = '';

let waterUnits = 0;
for (let i = 0; i < values.length; i++) {
    const wu = Math.min(left[i], right[i]) - values[i];
    waterUnits += wu;

    wrapper += `<div class="block ${i + 1}">`;

    for (let j = 0; j < maxBar - values[i] - wu; j++) {
        wrapper += `
                <div class="remaining"></div>
            `;
    }

    for (let j = 0; j < wu; j++) {
        wrapper += `
                <div class="water"></div>
            `;
    }

    for (let j = 0; j < values[i]; j++) {
        wrapper += `
                <div class="bar"></div>
            `;
    }

    wrapper += '</div>';
}
console.log(wrapper);
document.getElementById('container').innerHTML = wrapper;
