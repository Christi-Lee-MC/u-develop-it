const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Sql745417!',
    database: 'election'
  },
  console.log('Connected to the election database.')
);
app.use(express.json());

// this is test route to be sure connected.
// commented out so I can reference in future
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});
  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

