let obj;
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    obj = [];
    let values = document.getElementById('values').value.split(',');
    values = [4, 0, 4];

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

    let wrapper = '';

    const maxBar = Math.max(...values);

    let waterUnits = 0;
    for (let i = 0; i < values.length; i++) {
        const wu = Math.min(left[i], right[i]) - values[i];
        waterUnits += wu;

        wrapper += `<div class="block ${i + 1}">`;

        for (let j = 0; j < values[i]; j++) {
            wrapper += `
                <div class="bar"></div>
            `;
        }

        for (let j = 0; j < wu; j++) {
            wrapper += `
                <div class="water"></div>
            `;
        }

        for (let j = 0; j < maxBar - values[i] - wu; j++) {
            wrapper += `
                <div class="remaining"></div>
            `;
        }

        wrapper += '</div>';
    }
    console.log(wrapper);
    document.getElementById('container').innerHTML = wrapper;
});
