function generateTable() {
    let from = parseInt(document.getElementById('fromNum').value);
    let to = parseInt(document.getElementById('toNum').value);
    let output = document.getElementById('output');
    output.innerHTML = '';


    for (let i = from; i <= to; i++) {
        let table = document.createElement('table');
        table.className = 'mult-table';

        for (let j = 1; j <= 10; j++) {
            let row = document.createElement('tr');

            let cell = document.createElement('td');
            cell.textContent = i + ' x ' + j + ' = ' + (i * j);

            row.appendChild(cell);
            table.appendChild(row);
        }

        output.appendChild(table);
    }
}