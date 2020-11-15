const express = require('express');
const path = require('path');
var parser = require('body-parser');
const PORT = process.env.PORT || 5000;

express()
  .use(parser.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, 'public')))
  .use(parser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getRates', (req, res) => res.render('pages/getRates'))
  .post('/postRates', (req, res) => {
  	console.log(req.body);
  	var formInputs = {
  			mailWeight: req.body.mailweight,
  			mailType: req.body.mailtypes
  		}
  	res.render('pages/postRates', {
  		data: formInputs
  	})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))