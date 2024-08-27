document.addEventListener('DOMContentLoaded', function() {
    const tableBodys = document.getElementById('tableBodys');
    let studentDatas = localStorage.getItem('studentDatas');

    if (studentDatas) {
        studentDatas = studentDatas.split('|');

        studentDatas.forEach((students, index) => {
            const rows = tableBodys.insertRow(index);
            const studentValues = students.split(',');

            studentValues.forEach((value, i) => {
                const cells = rows.insertCell(i);
                cells.textContent = value;
            });

            // Add a cell for the cancel button
            const cancelCells = rows.insertCell(studentValues.length);
            const cancelButtons = document.createElement('button');
            cancelButtons.textContent = 'Cancel';
            cancelButtons.addEventListener('click', () => {
                // Remove the student from the data array
                studentDatas.splice(index, 1);
                // Update localStorage
                localStorage.setItem('studentDatas', studentDatas.join('|'));
                // Remove the row from the table
                tableBodys.deleteRow(index);
                // Reload the page to re-index the rows
                location.reload();
            });
            cancelCells.appendChild(cancelButtons);
        });
    }
});
