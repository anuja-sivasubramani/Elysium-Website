document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById('tableBody');

    // Retrieve student data from localStorage
    let studentData = localStorage.getItem('studentData');
    if (!studentData) {
        studentData = [];
    } else {
        studentData = studentData.split('|');
    }

    // Function to create table rows from student data
    function renderTable() {
        tableBody.innerHTML = ''; // Clear existing table rows

        studentData.forEach(dataString => {
            const data = dataString.split(',');
            
            // Create a new row for the table
            let newRow = document.createElement('tr');

            // Populate the row with data
            newRow.innerHTML = `
                <td>${data[0]}</td>
                <td>${data[1]}</td>
                <td>${data[2]}</td>
                <td>${data[3]}</td>
                <td>${data[4]}</td>
                <td>${data[5]}</td>
                <td>${data[6]}</td>
                <td>${data[7]}</td>
                <td>${data[8]}</td>
                <td>${data[9]}</td>
                <td>${data[10]}</td>
                <td>${data[11]}</td> <!-- Display file names directly -->
                <td>${data[12]}</td> <!-- Display file names directly -->
                <td>${data[13]}</td> <!-- Display file names directly -->
                <td>${data[14]}</td> <!-- Display file names directly -->
                <td>${data[15]}</td> <!-- Display file names directly -->
                <td>${data[16]}</td> <!-- Display file names directly -->
                <td>${data[17]}</td> <!-- Display file names directly -->
                <td>${data[18]}</td> <!-- Display file names directly -->
                <td>${data[19]}</td> <!-- Display file names directly -->
                <td>${data[20]}</td> <!-- Display file names directly -->
                <td><button onclick="cancel(this)">Cancel</button></td>
            `;

            // Append the new row to the table
            tableBody.appendChild(newRow);
        });
    }

    // Initial rendering of the table
    renderTable();
});

function cancel(button) {
    // Find the row to delete
    const row = button.closest('tr');
    
    // Get the student's data from the row cells
    const cells = row.getElementsByTagName('td');
    const studentDataString = Array.from(cells).slice(0, -1).map(cell => cell.textContent).join(',');

    // Remove the row from the DOM
    row.remove();

    // Retrieve student data from localStorage
    let studentData = localStorage.getItem('studentData');
    if (studentData) {
        studentData = studentData.split('|');
        
        // Find and remove the specific student data string
        studentData = studentData.filter(data => data !== studentDataString);

        // Update localStorage with the new data
        localStorage.setItem('studentData', studentData.join('|'));
    }
}