const data = ["Sayali Deshmukh", "Fatema Hussain", "Kevin Ng", "Maharajan Rathakrishnan", "Gowtham Ravichandran", "Dharmendra Sharma", "Stephen Totten"];
const autocomplete = document.getElementById("host");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
  let results = [];
  const userInput = this.value;
  resultsHTML.innerHTML = "";

  if (userInput.length > 0) {
    // Make an AJAX/Fetch request to fetch data from the MySQL database
    fetch(`http://localhost:3001/api/getData?input=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        results = data;
        resultsHTML.style.display = "block";

        for (let i = 0; i < results.length; i++) {
          resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
};

resultsHTML.onclick = function (event) {
  const setValue = event.target.innerText;
  autocomplete.value = setValue;
  this.innerHTML = "";
};

document.addEventListener('DOMContentLoaded', function () {
    
    const checkInForm = document.getElementById('checkInForm');
    const checkInList = document.getElementById('checkInList');

    checkInForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const reason = document.getElementById('reason').value;
        const host = document.getElementById('host').value;

        // Create a new check-in entry
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.innerHTML = `<strong>${name}</strong> - ${reason}, hosted by ${host}`;
        
        // Append the entry to the list
        checkInList.appendChild(entry);

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('reason').value = '';
        document.getElementById('host').value = '';

        // Redirect to the success page
        window.location.href = 'success.html';
    });
});
