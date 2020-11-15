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

  	let mailWeight = req.body.mailweight;
    var mailType = req.body.mailtypes;

    var baseRate = 0.00;
    var weightRate = 0.00;
    var finalPrice = 0.00;

    var output = "";

    console.log(mailWeight);
    console.log(mailType); 

    switch(mailType) {
      case 'letters-stamped':
        
        baseRate = 0.40;

        if (mailWeight < 4) {
          weightRate = 0.15 * mailWeight;
        } else {
          weightRate = 0.15 * 4;
        }

        finalPrice = baseRate + weightRate;

        output = "The final price of your parcel is $" + finalPrice.toFixed(2);

        break;
      case 'letters-metered':

        baseRate = 0.35;

        if (mailWeight < 4) {
          weightRate = 0.15 * mailWeight;
        } else {
          weightRate = 0.15 * 4;
        }
        
        finalPrice = baseRate + weightRate;

        output = "The final price of your parcel is $" + finalPrice.toFixed(2);
        break;
      case 'large-envelopes-flat':

        baseRate = 0.80;

        if (mailWeight < 13) {
          weightRate = 0.20 * mailWeight;
        } else {
          weightRate = 0.20 * 13;
        }
        
        finalPrice = baseRate + weightRate;

        output = "The final price of your parcel is $" + finalPrice.toFixed(2);

        break;
      case 'first-class-retail':

        if (mailWeight < 5) {
          finalPrice = 3.80;
        } else if (mailWeight < 9) {
          finalPrice = 4.60;
        } else if (mailWeight < 13) {
          finalPrice = 5.3;
        } else {
          finalPrice = 5.9;
        }

        output = "The final price of your parcel is $" + finalPrice.toFixed(2);

        break;
      default:
        output = "Sorry, an error has occurred. Please consult the error logs.";
        break;
    }

  	res.render('pages/postRates', {
  		data: output
  	})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))