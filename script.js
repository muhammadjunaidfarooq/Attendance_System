// Attendance and User Counter
let attendanceCount = 0;
let userCount = 0;

// Handle "Take Attendance" Button
document.getElementById("takeAttendance").addEventListener("click", function () {
    const table = document.getElementById("attendanceTable");

    // Add a new row to the table
    attendanceCount++;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${attendanceCount}</td>
        <td>John Doe</td>
        <td>ID-${1000 + attendanceCount}</td>
        <td>${new Date().toLocaleTimeString()}</td>
    `;
    table.appendChild(row);
});

// Handle "Add New User" Button
document.getElementById("addUserBtn").addEventListener("click", function () {
    const userName = document.getElementById("userName").value;
    const userId = document.getElementById("userId").value;

    // Check for empty fields
    if (userName === "" || userId === "") {
        alert("Please fill in both fields!");
        return;
    }

    // Add user to the database
    userCount++;
    document.getElementById("userCount").innerText = userCount;

    alert(`User Added Successfully:\nName: ${userName}\nID: ${userId}`);

    // Clear input fields
    document.getElementById("userName").value = "";
    document.getElementById("userId").value = "";
});
