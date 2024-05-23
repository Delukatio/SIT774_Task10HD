let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('HDTask');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT, points INTEGER DEFAULT 500)");
    db.run("CREATE TABLE IF NOT EXISTS Messages (messageid INTEGER PRIMARY KEY AUTOINCREMENT, user1id INTEGER, user2id INTEGER, message TEXT)");
    db.close();


})