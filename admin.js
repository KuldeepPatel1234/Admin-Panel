const jobListings = [];

document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;
    const contactEmail = document.getElementById('contactEmail').value;

    const job = {
        title: jobTitle,
        description: description,
        location: location,
        salary: salary,
        contactEmail: contactEmail
    };

    jobListings.push(job);
    displayJobListings();
    this.reset(); // Reset the form
});

function displayJobListings() {
    const tbody = document.querySelector('#jobListings tbody');
    tbody.innerHTML = ''; // Clear existing listings

    jobListings.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${job.title}</td>
            <td>${job.description}</td>
            <td>${job.location}</td>
            <td>${job.salary}</td>
            <td>${job.contactEmail}</td>
        `;
        tbody.appendChild(row);
    });
}

function searchJobs() {
    const searchLocation = document.getElementById('searchLocation').value.toLowerCase();
    const resultsDiv = document.getElementById('jobResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    const filteredJobs = jobListings.filter(job => job.location.toLowerCase().includes(searchLocation));

    if (filteredJobs.length > 0) 
     {
        filteredJobs.forEach(job =>  )
        {
            const jobDiv = document.createElement('div');
            jobDiv.innerHTML = ``;
        }
     }
}
