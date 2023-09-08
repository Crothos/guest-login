const data = ["Sayali Deshmukh", "Fatema Hussain", "Kevin Ng", "Maharajan Rathakrishnan", "Gowtham Ravichandran", "Dharmendra Sharma", "Stephen Totten"];
const autocomplete = document.getElementById("host");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
      results = getResults(userInput);
      resultsHTML.style.display = "block";
      for (i = 0; i < results.length; i++) {
        resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
      }
    }
  };

  function getResults(input) {
    const results = [];
    for (i = 0; i < data.length; i++) {
      if (input === data[i].slice(0, input.length)) {
        results.push(data[i]);
      }
    }
    return results;
  }

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
