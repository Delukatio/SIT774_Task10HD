const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;
const saltRounds = 10;
let pointsToAdd = 10;

let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database("HDTask");


const transporter = nodemailer.createTransport({
    service: '',
    auth: {
    user: '',
    pass: ''
}
});

app.use(session({
    secret: 'deakinunisit774',
    resave: false,
    saveUninitialized: true,
}));

app.get('/profile', (req, res) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            return res.render('profile', {title: "Welcome", userId: rows[0].id, username: rows[0].username, points: rows[0].points, email: rows[0].email });
        });
    }
    else
    {
        return res.redirect('/login');
    }
})

app.get('/changedetails', (req, res) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            return res.render('index', {title: "Welcome", userId: rows[0].id, username: rows[0].username, points: rows[0].points });
        });
    }
    else
    {
        return res.redirect('/login');
    }
})

app.use(express.urlencoded({ extended: false }));

app.get('/login', (req, res, next) => {
    if(req.session.userId) {
        return res.redirect('/profile')
    }
    else
    {
        return res.render('login', { title: 'Welcome', error: '' });
    }
});

app.get('/', (req, res, next) => {
    if(req.session.userId) {
        return res.redirect('/profile')
    }
    else
    {
        return res.render('index', { title: 'Welcome' });
    }
});

app.post('/login', (req, res, next) => {
    let inputusername = req.body.username;
    let inputpassword = req.body.password;


    db.all('SELECT * FROM Users WHERE username = ?', [inputusername], (err, rows) => {
        if(rows.length > 0)
        {
            let hashedPassword = rows[0].password;
            bcrypt.compare(inputpassword, hashedPassword, (err, result) => {
            if(result)
                {
                    console.log("Success");
                    req.session.userId = rows[0].id;
                    req.session.save();
                    return res.redirect('/profile');
                }
            else
            {
                console.log("Invalid Password");
                return res.render('login', { title: 'User not found', error: "Invalid Password"});
            }
        });
        }
        else
        {
            console.log("This user does not exist!");
            return res.render('login', { title: 'User not found', error: "Username does not exist" });
        }
    });


});


app.get('/reviews/', (req, res, next) => {
    db.all('SELECT * FROM Reviews', (err, rows) => {
        res.render('reviews', { title: 'Reviews', entries: rows });
    });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static('public_html'));
app.use(morgan('common'));

app.get('/signup', (req, res, next) => {
    if(req.session.userId) {
        return res.redirect('/profile')
    }
    else
    {
        return res.render('signup', { title: "Sign Up", error: ""});
    }
});

app.get('/startjourney', (req, res, next) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            res.render('journey1', {title: "Journey Part 1", username: rows[0].username, points: rows[0].points });
            let userId = req.session.userId;
            db.run(`UPDATE Users SET points = points + ? WHERE id = ?`, [pointsToAdd, req.session.userId], (err) => {
                  console.log(`User ${userId} has had their points increased by 10!`);
              });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

app.get('/journeytwo', (req, res, next) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            res.render('journey2', {title: "Journey Part 2", username: rows[0].username, points: rows[0].points });
            let userId = req.session.userId;
            db.run(`UPDATE Users SET points = points + ? WHERE id = ?`, [pointsToAdd, req.session.userId], (err) => {
                  console.log(`User ${userId} has had their points increased by 10!`);
              });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

app.get('/journeythree', (req, res, next) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            res.render('journey3', {title: "Journey Part 3", username: rows[0].username, points: rows[0].points });
            let userId = req.session.userId;
            db.run(`UPDATE Users SET points = points + ? WHERE id = ?`, [pointsToAdd, req.session.userId], (err) => {
                  console.log(`User ${userId} has had their points increased by 10!`);
              });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

app.get('/journeyfour', (req, res, next) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            res.render('journey4', {title: "Journey Part 4", username: rows[0].username, points: rows[0].points });
            let userId = req.session.userId;
            db.run(`UPDATE Users SET points = points + ? WHERE id = ?`, [pointsToAdd, req.session.userId], (err) => {
                  console.log(`User ${userId} has had their points increased by 10!`);
              });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

app.get('/journeyfinal', (req, res, next) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            res.render('journey5', {title: "Journey Final Part", username: rows[0].username, points: rows[0].points });
            let userId = req.session.userId;
            db.run(`UPDATE Users SET points = points + ? WHERE id = ?`, [pointsToAdd, req.session.userId], (err) => {
                  console.log(`User ${userId} has had their points increased by 10!`);
              });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

function sendWelcomeEmail(email, username) {
    const mailOptions = {
        from: '',
        to: email,
        subject: 'Welcome to my small account system!',
        text: `Hi ${username},\n\n Thanks so much for checking out my account project.\nI wasn't originally intending to include email confirmation but I thought eh, might as well add it! \n\nKind Regards,\nLuka Stjepanovic (Owner)`,
        html: `<p>Hi ${username},</p><p>Thanks so much for checking out my account project.</p><p>I wasn't originally intending to include email confirmation but I thought eh, might as well add it!</p><p>Kind Regards,<br>Luka Stjepanovic (Owner)</p>`
    };
    transporter.sendMail(mailOptions);
}

app.post('/signup', (req, res, next) => {
    let inputusername = req.body.username;
    let inputpassword = req.body.password;
    let inputemail = req.body.email;

    console.log(`Data includes: ${inputusername} and ${inputpassword}`);

    if (inputusername.length == 0) 
    {
        return res.render('signup', {title: "Missing Username?", error: "You have not entered a username!"});
    } 
    else if (inputpassword.length == 0) 
    {
        return res.render('signup', {title: "Missing Password?", error: "You have not entered a password!"});
    }
    else if ((inputemail.length == 0) || (inputemail.indexOf("@") == -1) || (inputemail.indexOf(".") == -1)) 
    {
        return res.render('signup', {title: "Missing Email?", error: "You have not entered an email!"});
    }

    db.all('SELECT * FROM Users WHERE username = ? OR email = ?', [inputusername, inputemail], (err, rows) => {
        if (rows.length > 0) {
            console.log("Username or email already exists...");
            res.render('signup', {title: "Username or email already exists!", error: "Username or email already exists!"});
        } else {
            bcrypt.hash(inputpassword, saltRounds, (err, hash) => {
                    db.run('INSERT INTO Users (username, password, email) VALUES (?, ?, ?)', [inputusername, hash, inputemail], function(err) {
                    console.log("Success");
                    sendWelcomeEmail(inputemail, inputusername);
                    return res.render('signupresults', {title: "Sign Up Successful", errors: false, inputusername});
                });
                console.log('The Hashed Password:', hash);
            });

        }
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    return res.redirect('/');
});



app.get('/messages', (req, res) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            return res.render('messages', {title: "Messages", userId: rows[0].id, username: rows[0].username, points: rows[0].points, email: rows[0].email, error: '' });
        });
    }
    else
    {
        return res.redirect('/login');
    }
});

app.get('/viewmessages', (req, res) => {
    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err1, rows1) => {
            db.all('SELECT Messages.message, Users.username FROM Messages JOIN Users ON Messages.user1id = Users.id WHERE Messages.user2id = ?', [req.session.userId], (err2, rows2) => {
                res.render('viewmessages', {title: 'Your Messages', messages: rows2, username: rows1[0].username, points: rows1[0].points});
            });
        });
    }
    else {
        return res.redirect('/login');
    }
});

app.get('/feedback', (req, res) => {
    let users;
    db.all('SELECT * FROM Users', (err, rows) => {
        users = rows;
    });
    db.all('SELECT * FROM Messages', (err, rows) => {
        return res.render('feedback', { title: 'Messages', messages: rows, comments: users});
    });
});

app.post('/messages', (req, res, next) => {
    let toUsername = req.body.username;
    let toUserId;
    let message = req.body.message;
    let username;
    let points;

    if(req.session.userId) {
        db.all('SELECT * FROM Users WHERE id = ?', [req.session.userId], (err, rows) => {
            username = rows[0].username;
            points = rows[0].points;
        });
    }
    console.log(`Data includes: ${toUsername} and ${message}`);

    if (toUsername.length == 0) 
    {
        return res.render('messages', {title: "Missing Username?", error: "You have not entered a username to send a message to!", username, points});
    } 
    else if (message.length == 0) 
    {
        return res.render('messages', {title: "Missing Message?", error: "You have not entered a message!", username, points});
    }

    db.all('SELECT * FROM Users WHERE username = ?', [toUsername], (err, rows) => {
        if (rows.length > 0) 
        {
            toUserId = rows[0].id;
            let stmt = db.run('INSERT INTO Messages (user1id, user2id, message) VALUES (?, ?, ?)', [req.session.userId, toUserId, message], function(err) {
                console.log("Success");
                return res.render('messages', {title: "Successfully sent a message!", error: 'Your message has been submitted', username, points});
            });
        } 
        else 
        {
            res.render('messages', {title: "The user you are trying to send a message to does not exist!", error: "The user you are trying to send a message to does not exist!", username, points});
            console.log("Failed to send message - User does not exist");
            return;
        }
    });
});

app.use( (req, res) => {
    return res.status(404).send('404: The specified file has not been found!<br><b>Perhaps you entered the url wrong?</b>');
});
app.use((error, req, res, next) => {
    return res.status(500).send('500: Something has broken! The web server is suffering! :( Details:  ' + error.toString());
});


app.listen(port, ()=> {
console.log(`Web server running at: http://localhost:${port}`);
console.log(`Type Ctrl+C to shut down the web server`);
});