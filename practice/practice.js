// Array of user objects
const users = [
    { firstName: "Amit", lastName: "Sharma", email: "amit.sharma@example.com", city: "Delhi", phone: "9876543210" },
    { firstName: "Priya", lastName: "Verma", email: "priya.verma@example.com", city: "Mumbai", phone: "9123456789" },
    { firstName: "Rahul", lastName: "Singh", email: "rahul.singh@example.com", city: "Bengaluru", phone: "9001234567" },
    { firstName: "Sneha", lastName: "Nair", email: "sneha.nair@example.com", city: "Chennai", phone: "9887766554" },
    { firstName: "Vikram", lastName: "Patel", email: "vikram.patel@example.com", city: "Ahmedabad", phone: "9012345678" },
    { firstName: "Neha", lastName: "Kumar", email: "neha.kumar@example.com", city: "Pune", phone: "9878901234" },
    { firstName: "Rajesh", lastName: "Chaudhary", email: "rajesh.chaudhary@example.com", city: "Lucknow", phone: "9023456789" },
    { firstName: "Divya", lastName: "Joshi", email: "divya.joshi@example.com", city: "Jaipur", phone: "9876547890" },
    { firstName: "Arjun", lastName: "Deshmukh", email: "arjun.deshmukh@example.com", city: "Nagpur", phone: "9998887777" },
    { firstName: "Anita", lastName: "Bhatia", email: "anita.bhatia@example.com", city: "Kolkata", phone: "9123456780" }
];

// Function to display all users in the table
function displayUsers(usersToDisplay) {
    const tableBody = document.querySelector("#userTable tbody");
    
    // Clear existing rows
    tableBody.innerHTML = '';

    // Loop through the users and create table rows
    usersToDisplay.forEach(user => {
        const row = document.createElement('tr');

        // First Name
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = user.firstName;
        row.appendChild(firstNameCell);

        // Last Name
        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = user.lastName;
        row.appendChild(lastNameCell);

        // Email
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        // Phone
        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phone;
        row.appendChild(phoneCell);

        // City
        const cityCell = document.createElement('td');
        cityCell.textContent = user.city;
        row.appendChild(cityCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Function to filter users based on input
function filterUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Filter users by name or city
    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm) ||
        user.city.toLowerCase().includes(searchTerm)
    );
    
    // Display the filtered users
    displayUsers(filteredUsers);
}

// Display all users initially
displayUsers(users);
