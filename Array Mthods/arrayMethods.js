const peaples =[
    {
      serialNumber: 1,
      firstName: 'Rahul',
      lastName: 'Mishra',
      birthYear: 1993,
      yearOfPassing: null,
      gender: 'Male',
      cityName: '',
      stateName: 'Gujarat',
      email: ''
    },
    {
      serialNumber: 2,
      firstName: 'Amit',
      lastName: 'Chopra',
      birthYear: 1999,
      yearOfPassing: 2053,
      gender: 'Male',
      cityName: '',
      stateName: 'West Bengal',
      email: ''
    },
    {
      serialNumber: 3,
      firstName: 'Priya',
      lastName: 'Kapoor',
      birthYear: 1969,
      yearOfPassing: 2024,
      gender: 'Female',
      cityName: '',
      stateName: 'Maharashtra',
      email: ''
    },
    {
      serialNumber: 4,
      firstName: 'Rohit',
      lastName: 'Singh',
      birthYear: 1982,
      yearOfPassing: null,
      gender: 'Male',
      cityName: 'Delhi',
      stateName: 'Delhi',
      email: ''
    },
    {
      serialNumber: 5,
      firstName: 'Neha',
      lastName: 'Gupta',
      birthYear: 1972,
      yearOfPassing: 2004,
      gender: 'Female',
      cityName: '',
      stateName: 'Tamil Nadu',
      email: 'neha.gupta@gmail.com'
    },
    {
      serialNumber: 6,
      firstName: 'Vikas',
      lastName: 'Kapoor',
      birthYear: 1991,
      yearOfPassing: null,
      gender: 'Female',
      cityName: '',
      stateName: 'Telangana',
      email: 'vikas.kapoor@outlook.com'
    },
    {
      serialNumber: 7,
      firstName: 'Priya',
      lastName: 'Patel',
      birthYear: 1998,
      yearOfPassing: 2019,
      gender: 'Female',
      cityName: '',
      stateName: 'Tamil Nadu',
      email: 'priya.patel@rediffmail.com'
    },
    {
      serialNumber: 8,
      firstName: 'Amit',
      lastName: 'Kapoor',
      birthYear: 1983,
      yearOfPassing: null,
      gender: 'Male',
      cityName: '',
      stateName: 'Karnataka',
      email: ''
    },
    {
      serialNumber: 9,
      firstName: 'Vivek',
      lastName: 'Chopra',
      birthYear: 1984,
      yearOfPassing: null,
      gender: 'Female',
      cityName: 'Delhi',
      stateName: 'Delhi',
      email: 'vivek.chopra@outlook.com'
    },
    {
      serialNumber: 10,
      firstName: 'Neha',
      lastName: 'Kapoor',
      birthYear: 1999,
      yearOfPassing: null,
      gender: 'Male',
      cityName: '',
      stateName: 'West Bengal',
      email: 'neha.kapoor@gmail.com'
    }
  ];

// console.table(peaples);
// filter method

// let birthYear = peaples.filter(people=>people.birthYear>1985)

  
// console.table(birthYear);

// let firstName = peaples.filter(people=>people.firstName=='Neha')

// console.table(firstName);

// let cityName = peaples.filter(people=>people.cityName =='Delhi');

// console.table(cityName);

// let stateName = peaples.filter(people=>people.stateName==='West Bengal');

// console.table(stateName);


// let passingYear = peaples.filter(people=>people.yearOfPassing>2019);

// console.table(passingYear);

// let passingYear = peaples.filter(people=>people.yearOfPassing==null);

// console.table(passingYear);


// array Map
// let updatedCityName = peaples.map(person=>{
//     if(person.cityName===''){

//         return{...person, cityName:'Mumbai'};
//     }
//     return person;
    
// // console.log(person);

    
// })


// console.table(updatedCityName);

// let mergAddress = peaples.map(peaple=>`${peaple.cityName} ${peaple.stateName}`

// );

// console.table(mergAddress);


// array sort




peaples.sort((a,b)=> a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()));

// console.table(peaples);


peaples.sort((a,b)=>a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()));


// console.table(peaples);


peaples.sort((a,b)=>a.stateName.toLowerCase().localeCompare(b.stateName.toLowerCase()))

// console.table(peaples);

peaples.sort((a,b)=>a.birthYear-b.birthYear)

// console.table(peaples);

peaples.sort((a,b)=>a.yearOfPassing - b.yearOfPassing)


// console.table(peaples);

let str = 'hello , world , i am , here';

// console.log(str);

let arr1=str.split(',')
// console.log(arr1);
































// // Array of user objects
// const users = [
//     { firstName: "Amit", lastName: "Sharma", email: "amit.sharma@example.com", city: "Delhi", phone: "9876543210" },
//     { firstName: "Priya", lastName: "Verma", email: "priya.verma@example.com", city: "Mumbai", phone: "9123456789" },
//     { firstName: "Rahul", lastName: "Singh", email: "rahul.singh@example.com", city: "Bengaluru", phone: "9001234567" },
//     { firstName: "Sneha", lastName: "Nair", email: "sneha.nair@example.com", city: "Chennai", phone: "9887766554" },
//     { firstName: "Vikram", lastName: "Patel", email: "vikram.patel@example.com", city: "Ahmedabad", phone: "9012345678" },
//     { firstName: "Neha", lastName: "Kumar", email: "neha.kumar@example.com", city: "Pune", phone: "9878901234" },
//     { firstName: "Rajesh", lastName: "Chaudhary", email: "rajesh.chaudhary@example.com", city: "Lucknow", phone: "9023456789" },
//     { firstName: "Divya", lastName: "Joshi", email: "divya.joshi@example.com", city: "Jaipur", phone: "9876547890" },
//     { firstName: "Arjun", lastName: "Deshmukh", email: "arjun.deshmukh@example.com", city: "Nagpur", phone: "9998887777" },
//     { firstName: "Anita", lastName: "Bhatia", email: "anita.bhatia@example.com", city: "Kolkata", phone: "9123456780" }
// ];

// // Function to display all users in the table
// function displayUsers(usersToDisplay) {
//     const tableBody = document.querySelector("#userTable tbody");
    
//     // Clear existing rows
//     tableBody.innerHTML = '';

//     // Loop through the users and create table rows
//     usersToDisplay.forEach(user => {
//         const row = document.createElement('tr');

//         // First Name
//         const firstNameCell = document.createElement('td');
//         firstNameCell.textContent = user.firstName;
//         row.appendChild(firstNameCell);

//         // Last Name
//         const lastNameCell = document.createElement('td');
//         lastNameCell.textContent = user.lastName;
//         row.appendChild(lastNameCell);

//         // Email
//         const emailCell = document.createElement('td');
//         emailCell.textContent = user.email;
//         row.appendChild(emailCell);

//         // Phone
//         const phoneCell = document.createElement('td');
//         phoneCell.textContent = user.phone;
//         row.appendChild(phoneCell);

//         // City
//         const cityCell = document.createElement('td');
//         cityCell.textContent = user.city;
//         row.appendChild(cityCell);

//         // Append the row to the table body
//         tableBody.appendChild(row);
//     });
// }

// // Function to filter users based on input
// function filterUsers() {
//     const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
//     // Filter users by name or city
//     const filteredUsers = users.filter(user => 
//         user.firstName.toLowerCase().includes(searchTerm) ||
//         user.lastName.toLowerCase().includes(searchTerm) ||
//         user.city.toLowerCase().includes(searchTerm)
//     );
    
//     // Display the filtered users
//     displayUsers(filteredUsers);
// }

// // Display all users initially
// displayUsers(users);



// ########################## map() Method Practice###############################

// let arrnum = [10,11,12,13,14,15,21,31,41,51,60,70,80,90];

// let names = ['amit' , 'priya' , 'rahul' , 'sneha']

// const users = [
//     { firstName: "Amit", lastName: "Sharma", email: "amit.sharma@example.com", city: "Delhi", phone: "9876543210" },
//     { firstName: "Priya", lastName: "Verma", email: "priya.verma@example.com", city: "Mumbai", phone: "9123456789" },
//     { firstName: "Rahul", lastName: "Singh", email: "rahul.singh@example.com", city: "Bengaluru", phone: "9001234567" },
//     { firstName: "Sneha", lastName: "Nair", email: "sneha.nair@example.com", city: "Chennai", phone: "9887766554" },
//     { firstName: "Vikram", lastName: "Patel", email: "vikram.patel@example.com", city: "Ahmedabad", phone: "9012345678" },
//     { firstName: "Neha", lastName: "Kumar", email: "neha.kumar@example.com", city: "Pune", phone: "9878901234" },
//     { firstName: "Rajesh", lastName: "Chaudhary", email: "rajesh.chaudhary@example.com", city: "Lucknow", phone: "9023456789" },
//     { firstName: "Divya", lastName: "Joshi", email: "divya.joshi@example.com", city: "Jaipur", phone: "9876547890" },
//     { firstName: "Arjun", lastName: "Deshmukh", email: "arjun.deshmukh@example.com", city: "Nagpur", phone: "9998887777" },
//     { firstName: "Anita", lastName: "Bhatia", email: "anita.bhatia@example.com", city: "Kolkata", phone: "9123456780" }
// ];

// // 1) har element ko 5 se multiply kar ke new array return karo.
// function multiply (arr) {
//     return arr.map(num=>num*5);
// }

// // console.log(multiply(arrnum));

// // 2)add 20 each array element and retur new array

// function addition (num) {
//     return num.map(num=>num+20);
// }

// // console.log(addition(arrnum));


// // 3)capital first letter of names
 
// function capitalFirstLetter (nameArray) {
//     return nameArray.map(name=>name.charAt(0).toUpperCase() + name.slice(1) )
// }

// // console.log(capitalFirstLetter(names));

// // 4)display users city name

// function displayCity (users)
// {
//     return users.map(user=>user.city)
// }

// // console.log(displayCity(users));

// // 5)Add 20% each value

// function AddTax (value){
//     return value.map(value=>value+value*0.2)
// }

// // console.log(AddTax(arrnum));

