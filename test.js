let sqlite3 = require('sqlite3').verbose();

// Open the database
let db = new sqlite3.Database('HDTask');

// Query the Messages table and output the data
db.all('SELECT * FROM messages', (err, rows) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Messages:");
    rows.forEach((row) => {
        console.log(`ID: ${row.id}, User1ID: ${row.user1id}, User2ID: ${row.user2id}, Message: ${row.message}`);
    });
});

// Close the database
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Database connection closed.');
});