// Import MySQL and Express
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

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


// Define the endpoint to retrieve data
app.get('/api/getData', (req, res) => {
  const userInput = req.query.input; // Get user input from the query parameter

  // Query the database based on the user input
  const query = `SELECT name FROM host WHERE name LIKE ?`;

  db.query(query, [`%${userInput}%`], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const data = results.map((row) => row.name); // Adjust column_name to match your database schema
      res.json(data);
    }
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
