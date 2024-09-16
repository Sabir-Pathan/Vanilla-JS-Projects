const persons = [
    { SrNumber: 1, firstName: "Amit", lastName: "Sharma", emailId: "amit.sharma@example.com", city: "Delhi", stateName: "Delhi", jobTitle: "Software Engineer", phoneNumber: "9876543210" },
    { SrNumber: 2, firstName: "Priya", lastName: "Verma", emailId: "priya.verma@example.com", city: "Mumbai", stateName: "Maharashtra", jobTitle: "Data Analyst", phoneNumber: "9123456789" },
    { SrNumber: 3, firstName: "Rahul", lastName: "Singh", emailId: "rahul.singh@example.com", city: "Bengaluru", stateName: "Karnataka", jobTitle: "Project Manager", phoneNumber: "9001234567" },
    { SrNumber: 4, firstName: "Sneha", lastName: "Nair", emailId: "sneha.nair@example.com", city: "Chennai", stateName: "Tamil Nadu", jobTitle: "Graphic Designer", phoneNumber: "9887766554" },
    { SrNumber: 5, firstName: "Vikram", lastName: "Patel", emailId: "vikram.patel@example.com", city: "Ahmedabad", stateName: "Gujarat", jobTitle: "Mechanical Engineer", phoneNumber: "9012345678" },
    { SrNumber: 6, firstName: "Neha", lastName: "Kumar", emailId: "neha.kumar@example.com", city: "Pune", stateName: "Maharashtra", jobTitle: "HR Manager", phoneNumber: "9878901234" },
    { SrNumber: 7, firstName: "Rajesh", lastName: "Chaudhary", emailId: "rajesh.chaudhary@example.com", city: "Lucknow", stateName: "Uttar Pradesh", jobTitle: "Civil Engineer", phoneNumber: "9023456789" },
    { SrNumber: 8, firstName: "Divya", lastName: "Joshi", emailId: "divya.joshi@example.com", city: "Jaipur", stateName: "Rajasthan", jobTitle: "Marketing Manager", phoneNumber: "9876547890" },
    { SrNumber: 9, firstName: "Arjun", lastName: "Deshmukh", emailId: "arjun.deshmukh@example.com", city: "Nagpur", stateName: "Maharashtra", jobTitle: "Business Analyst", phoneNumber: "9998887777" },
    { SrNumber: 10, firstName: "Anita", lastName: "Bhatia", emailId: "anita.bhatia@example.com", city: "Kolkata", stateName: "West Bengal", jobTitle: "Financial Consultant", phoneNumber: "9123456780" },
    { SrNumber: 11, firstName: "Suresh", lastName: "Mishra", emailId: "suresh.mishra@example.com", city: "Patna", stateName: "Bihar", jobTitle: "Operations Manager", phoneNumber: "9876546543" },
    { SrNumber: 12, firstName: "Meena", lastName: "Singh", emailId: "meena.singh@example.com", city: "Bhopal", stateName: "Madhya Pradesh", jobTitle: "Software Tester", phoneNumber: "9988776655" },
    { SrNumber: 13, firstName: "Ravi", lastName: "Gupta", emailId: "ravi.gupta@example.com", city: "Chandigarh", stateName: "Punjab", jobTitle: "Architect", phoneNumber: "9112233445" },
    { SrNumber: 14, firstName: "Nidhi", lastName: "Thakur", emailId: "nidhi.thakur@example.com", city: "Hyderabad", stateName: "Telangana", jobTitle: "Business Consultant", phoneNumber: "9554433221" },
    { SrNumber: 15, firstName: "Karan", lastName: "Kapoor", emailId: "karan.kapoor@example.com", city: "Indore", stateName: "Madhya Pradesh", jobTitle: "Product Manager", phoneNumber: "9665544332" },
    { SrNumber: 16, firstName: "Tina", lastName: "Agarwal", emailId: "tina.agarwal@example.com", city: "Kochi", stateName: "Kerala", jobTitle: "UX Designer", phoneNumber: "9877766554" },
    { SrNumber: 17, firstName: "Piyush", lastName: "Mehta", emailId: "piyush.mehta@example.com", city: "Surat", stateName: "Gujarat", jobTitle: "Network Engineer", phoneNumber: "9322233445" },
    { SrNumber: 18, firstName: "Ritika", lastName: "Pandey", emailId: "ritika.pandey@example.com", city: "Kanpur", stateName: "Uttar Pradesh", jobTitle: "Content Writer", phoneNumber: "9233445566" },
    { SrNumber: 19, firstName: "Manoj", lastName: "Joshi", emailId: "manoj.joshi@example.com", city: "Coimbatore", stateName: "Tamil Nadu", jobTitle: "Quality Analyst", phoneNumber: "9443322110" },
    { SrNumber: 20, firstName: "Sonal", lastName: "Reddy", emailId: "sonal.reddy@example.com", city: "Visakhapatnam", stateName: "Andhra Pradesh", jobTitle: "HR Executive", phoneNumber: "9878887766" },
    { SrNumber: 21, firstName: "Rohit", lastName: "Khan", emailId: "rohit.khan@example.com", city: "Noida", stateName: "Uttar Pradesh", jobTitle: "Digital Marketer", phoneNumber: "9123344556" },
    { SrNumber: 22, firstName: "Harish", lastName: "Chopra", emailId: "harish.chopra@example.com", city: "Vadodara", stateName: "Gujarat", jobTitle: "Supply Chain Manager", phoneNumber: "9311122334" },
    { SrNumber: 23, firstName: "Sunita", lastName: "Das", emailId: "sunita.das@example.com", city: "Guwahati", stateName: "Assam", jobTitle: "Teacher", phoneNumber: "9455566777" },
    { SrNumber: 24, firstName: "Vivek", lastName: "Sen", emailId: "vivek.sen@example.com", city: "Thiruvananthapuram", stateName: "Kerala", jobTitle: "System Analyst", phoneNumber: "9966544332" },
    { SrNumber: 25, firstName: "Ayesha", lastName: "Begum", emailId: "ayesha.begum@example.com", city: "Mysuru", stateName: "Karnataka", jobTitle: "Pharmacist", phoneNumber: "9877766551" },
    { SrNumber: 26, firstName: "Gaurav", lastName: "Yadav", emailId: "gaurav.yadav@example.com", city: "Faridabad", stateName: "Haryana", jobTitle: "Electronics Engineer", phoneNumber: "9344455663" },
    { SrNumber: 27, firstName: "Seema", lastName: "Kohli", emailId: "seema.kohli@example.com", city: "Agra", stateName: "Uttar Pradesh", jobTitle: "Lawyer", phoneNumber: "9766554433" },
    { SrNumber: 28, firstName: "Ashok", lastName: "Desai", emailId: "ashok.desai@example.com", city: "Rajkot", stateName: "Gujarat", jobTitle: "Civil Engineer", phoneNumber: "9223344556" },
    { SrNumber: 29, firstName: "Poonam", lastName: "Rana", emailId: "poonam.rana@example.com", city: "Shimla", stateName: "Himachal Pradesh", jobTitle: "Travel Consultant", phoneNumber: "9887776655" },
    { SrNumber: 30, firstName: "Deepak", lastName: "Raj", emailId: "deepak.raj@example.com", city: "Jodhpur", stateName: "Rajasthan", jobTitle: "Web Developer", phoneNumber: "9445566770" },
    { SrNumber: 31, firstName: "Ankita", lastName: "Bose", emailId: "ankita.bose@example.com", city: "Kolkata", stateName: "West Bengal", jobTitle: "Accountant", phoneNumber: "9334455667" },
    { SrNumber: 32, firstName: "Aditya", lastName: "Shekhar", emailId: "aditya.shekhar@example.com", city: "Patna", stateName: "Bihar", jobTitle: "Software Developer", phoneNumber: "9122334455" },
    { SrNumber: 33, firstName: "Nisha", lastName: "Malhotra", emailId: "nisha.malhotra@example.com", city: "Delhi", stateName: "Delhi", jobTitle: "Event Planner", phoneNumber: "9876123456" },
    { SrNumber: 34, firstName: "Gopal", lastName: "Mundra", emailId: "gopal.mundra@example.com", city: "Pune", stateName: "Maharashtra", jobTitle: "Chartered Accountant", phoneNumber: "9123344455" },
    { SrNumber: 35, firstName: "Ishita", lastName: "Raj", emailId: "ishita.raj@example.com", city: "Jaipur", stateName: "Rajasthan", jobTitle: "Financial Advisor", phoneNumber: "9876789012" },
    { SrNumber: 36, firstName: "Rajeev", lastName: "Kumar", emailId: "rajeev.kumar@example.com", city: "Noida", stateName: "Uttar Pradesh", jobTitle: "Content Manager", phoneNumber: "9111223344" },
    { SrNumber: 37, firstName: "Anjali", lastName: "Chopra", emailId: "anjali.chopra@example.com", city: "Gurgaon", stateName: "Haryana", jobTitle: "IT Consultant", phoneNumber: "9433221100" },
    { SrNumber: 38, firstName: "Shivani", lastName: "Bhardwaj", emailId: "shivani.bhardwaj@example.com", city: "Chandigarh", stateName: "Punjab", jobTitle: "HR Coordinator", phoneNumber: "9456789123" },
    { SrNumber: 39, firstName: "Tarun", lastName: "Mishra", emailId: "tarun.mishra@example.com", city: "Bhopal", stateName: "Madhya Pradesh", jobTitle: "Legal Advisor", phoneNumber: "9876544433" },
    { SrNumber: 40, firstName: "Priyansh", lastName: "Rathi", emailId: "priyansh.rathi@example.com", city: "Nagpur", stateName: "Maharashtra", jobTitle: "Investment Banker", phoneNumber: "9877899988" },
    { SrNumber: 41, firstName: "Sara", lastName: "Ahmed", emailId: "sara.ahmed@example.com", city: "Lucknow", stateName: "Uttar Pradesh", jobTitle: "Social Media Manager", phoneNumber: "9123458899" },
    { SrNumber: 42, firstName: "Vishal", lastName: "Purohit", emailId: "vishal.purohit@example.com", city: "Surat", stateName: "Gujarat", jobTitle: "Logistics Manager", phoneNumber: "9344123456" },
    { SrNumber: 43, firstName: "Rekha", lastName: "Naik", emailId: "rekha.naik@example.com", city: "Bengaluru", stateName: "Karnataka", jobTitle: "Legal Assistant", phoneNumber: "9444455566" },
    { SrNumber: 44, firstName: "Rahul", lastName: "Desai", emailId: "rahul.desai@example.com", city: "Hyderabad", stateName: "Telangana", jobTitle: "Research Analyst", phoneNumber: "9887766555" },
    { SrNumber: 45, firstName: "Smita", lastName: "Rao", emailId: "smita.rao@example.com", city: "Vijayawada", stateName: "Andhra Pradesh", jobTitle: "Business Analyst", phoneNumber: "9887771234" },
    { SrNumber: 46, firstName: "Deepika", lastName: "Shah", emailId: "deepika.shah@example.com", city: "Pune", stateName: "Maharashtra", jobTitle: "Interior Designer", phoneNumber: "9778890012" },
    { SrNumber: 47, firstName: "Abhishek", lastName: "Seth", emailId: "abhishek.seth@example.com", city: "Indore", stateName: "Madhya Pradesh", jobTitle: "HR Executive", phoneNumber: "9223345566" },
    { SrNumber: 48, firstName: "Shruti", lastName: "Deshmukh", emailId: "shruti.deshmukh@example.com", city: "Pune", stateName: "Maharashtra", jobTitle: "Graphic Designer", phoneNumber: "9441123345" },
    { SrNumber: 49, firstName: "Arjun", lastName: "Pandey", emailId: "arjun.pandey@example.com", city: "Mumbai", stateName: "Maharashtra", jobTitle: "Sales Manager", phoneNumber: "9113344556" },
    { SrNumber: 50, firstName: "Ankush", lastName: "Mehta", emailId: "ankush.mehta@example.com", city: "Ahmedabad", stateName: "Gujarat", jobTitle: "Mechanical Engineer", phoneNumber: "9332244556" }
  ];
  

// element selector
let tableData = document.getElementById('userdata'); //Selecting table body
// console.log(tableData);

// ##############################################

// loop on All user data
// variable declaration for store received looped data
let personInformation = ''; //asign value null

persons.forEach(user=>{
// console.log(user.firstName);


  return personInformation += `<tr>
  <td>${user.SrNumber}</td>
  <td>${user.firstName}</td>
  <td>${user.lastName}</td>
  <td>${user.emailId}</td>
  <td>${user.city}</td>
<td>${user.stateName}</td>
<td>${user.jobTitle}</td>
<td>${user.phoneNumber}</td>
 </tr> `;
});
// console.log(personInformation);

tableData.innerHTML = personInformation; // adding data in table

// ######################################################

// Apllying filter for search user

//variable declaration

let filteredUser ='';
let filteredPersonInformation = '';

// element selection
let srchFirstName = document.getElementById('Firstname');
// console.log(srchFirstName);


//adding event

srchFirstName.addEventListener('input',()=>{
  // console.log(srchFirstName.value); // grab input value

  filteredUser = persons.filter(newUser=>{

   return newUser.firstName.startsWith(srchFirstName.value)
  })
  // console.log(filteredUser); received new array as per search name

  filteredUser.forEach(user=>{

    return filteredPersonInformation +=`<tr>
  <td>${user.SrNumber}</td>
  <td>${user.firstName}</td>
  <td>${user.lastName}</td>
  <td>${user.emailId}</td>
  <td>${user.city}</td>
<td>${user.stateName}</td>
<td>${user.jobTitle}</td>
<td>${user.phoneNumber}</td>
 </tr> `;

  })
  
  tableData.innerHTML = filteredPersonInformation; // show user data 
  
})