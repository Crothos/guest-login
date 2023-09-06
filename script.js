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
    });
});
