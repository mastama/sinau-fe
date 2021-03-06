const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;

// app.use(cors());
app.use(express.static("views/assets"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// static files
app.use(express.static('public'));
app.use('/', express.static('/public'));

// set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  res.render('pages/hpBeforeLogin/index');
});

// contact routes
app.get('/contact', (req, res) => {
  res.render('pages/contactUs/index');
});

// home routes
app.get('/home', (req, res) => {
  res.render('pages/home/index');
});

//routes setalah login
app.get('/dashboard', (req, res) => {
  res.render('pages/dashboard/index');
});

// presensi guru routes
app.get('/presensi-guru', (req, res) => {
  res.render('pages/presensi/index');
});

// classes routes
app.get('/classes', (req, res) => {
  res.render('pages/classes/index');
});

// login
app.get('/login', (req, res) => {
  res.render('pages/login/index');
});

// register
app.get('/register', (req, res) => {
  res.render('pages/register/index');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
