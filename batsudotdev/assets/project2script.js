// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the JSON data
    fetch('data/summer_camp_data.json')
        .then(response => response.json())
        .then(data => {
            // Accessing information about the first child
            const firstChild = data.children[0];

            // Accessing the DOM elements
            const childNameElement = document.getElementById('childName');
            const childAgeElement = document.getElementById('childAge');

            // Displaying information in the HTML page
            childNameElement.textContent = `First child's name: ${firstChild.name.firstName} ${firstChild.name.lastName}`;
            childAgeElement.textContent = `First child's age: ${firstChild.age}`;

            // Manipulating the JSON data - Adding a new child
            const newChild = {
                childID: 987654321,
                name: { firstName: "Emma", lastName: "Smith" },
                age: 9,
                gender: "Female",
                address: { street: "789 Avenue", city: "Thunder Bay", province: "Ontario", zip: "L2B 3C4" },
                dietaryRestrictions: { allergy: "Milk", restrictions: "None" },
                medicalInformation: { medication: "Asthma inhaler", medicalCondition: "Asthma" },
                contact: { parentsName: "Michael Smith", parentPhone: "555-555-5555" },
                emergencyContact: { emergencyName: "Michael Smith", emergencyNumber: "123-456-7890" },
                campProgram: "Nature Explorer",
            };

            data.children.push(newChild);

            // Log the updated data to the console
            console.log("Updated Data:", data);

            // Serialize the data to JSON
            const jsonData = JSON.stringify(data, null, 2);

            // Log the serialized data to the console for debugging
            console.log("Serialized Data:", jsonData);

            // Deserialize JSON back to a JavaScript object
            const parsedData = JSON.parse(jsonData);

            // Checking if the deserialized data is the same as the original data
            console.log("Is data equal to parsedData?", JSON.stringify(data) === JSON.stringify(parsedData));

            // Display information about the new child in the HTML page
            const newChildInfoElement = document.getElementById('newChildInfo');
            newChildInfoElement.innerHTML = `
                <b>New Child Information</b>
                <p>Name: ${newChild.name.firstName} ${newChild.name.lastName}</p>
                <p>Age: ${newChild.age}</p>
                <!-- Add more details as needed -->
            `;

            // Display serialized JSON data in the HTML page
            const serializedDataElement = document.getElementById('serializedData');
            serializedDataElement.textContent = jsonData;
        })
        .catch(error => console.error('Error fetching data:', error));
});
