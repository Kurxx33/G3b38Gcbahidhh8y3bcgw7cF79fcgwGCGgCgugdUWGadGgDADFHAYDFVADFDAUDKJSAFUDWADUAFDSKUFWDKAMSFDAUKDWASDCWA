const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // 1 minute for demonstration
}));

// Serve static files
app.use(express.static('public'));

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Replace this with actual authentication logic
    if (username === 'user' && password === 'pass') {
        req.session.loggedIn = true;
        req.session.username = username;
        return res.json({ success: true });
    }
    res.json({ success: false });
});

// Logout endpoint
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Check session endpoint
app.get('/session', (req, res) => {
    if (req.session.loggedIn) {
        return res.json({ loggedIn: true, username: req.session.username });
    }
    res.json({ loggedIn: false });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
