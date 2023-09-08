// Import MySQL and Express
const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'AngryCuddle5',
    database: 'checkin_db'
  },
  console.log(`Connected to the checkin_db database.`)
);

// QUERY CHECK
db.query('SELECT * FROM host', function (err, employees) {
  if (err) {
    console.error(err);
  } else {
    console.log(employees);
  }
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
