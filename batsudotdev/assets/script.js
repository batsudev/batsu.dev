document.addEventListener('DOMContentLoaded', function () {
    // Fetch and parse XML data
    fetch('data/summer_camp_data.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');

            // Extract information for Child 1
            const child1Info = extractChildInfo(xmlDoc, '123456789');
            displayChildInfo('Child 1', child1Info);

            // Extract information for Child 2
            const child2Info = extractChildInfo(xmlDoc, '13579753');
            displayChildInfo('Child 2', child2Info);
        });
});

function extractChildInfo(xmlDoc, childId) {
    const childElement = xmlDoc.querySelector(`Child[ID="${childId}"]`);
    
    return {
        name: childElement.querySelector('Name FirstName').textContent + ' ' + childElement.querySelector('Name LastName').textContent,
        age: childElement.querySelector('Age').textContent,
        gender: childElement.querySelector('Gender').textContent,
        allergies: childElement.querySelector('DietaryRestrictions Allergy').textContent,
        selectedCamp: childElement.querySelector('CampProgram SelectedCamp').textContent
    };
}

function displayChildInfo(childName, childInfo) {
    const childInfoContainer = document.getElementById('childInfo');
    const childDiv = document.createElement('div');
    childDiv.innerHTML = `
        <h2>${childName}</h2>
        <p><strong>Name:</strong> ${childInfo.name}</p>
        <p><strong>Age:</strong> ${childInfo.age}</p>
        <p><strong>Gender:</strong> ${childInfo.gender}</p>
        <p><strong>Allergies:</strong> ${childInfo.allergies}</p>
        <p><strong>Selected Camp:</strong> ${childInfo.selectedCamp}</p>
        <hr>
    `;
    childInfoContainer.appendChild(childDiv);
}