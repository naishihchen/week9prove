function calculateRate() {
    let mailWeight = document.getElementById("mail-weight").value;
    var mailType = undefined;
    var radios = document.getElementsByTagName('input');

    var baseRate = 0.00;
    var weightRate = 0.00;
    var finalPrice = 0.00;

    var output = document.getElementById("output");

    for(i = 0; i < radios.length; i++) { 
                  
      if(radios[i].type == "radio") { 
                
        if(radios[i].checked) {
          mailType = radios[i].value; 
        }
      } 
    }

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

        output.innerHTML = "The final price of your parcel is $" + finalPrice.toFixed(2);

        break;
      case 'letters-metered':

        baseRate = 0.35;

        if (mailWeight < 4) {
          weightRate = 0.15 * mailWeight;
        } else {
          weightRate = 0.15 * 4;
        }
        
        finalPrice = baseRate + weightRate;

        output.innerHTML = "The final price of your parcel is $" + finalPrice.toFixed(2);
        break;
      case 'large-envelopes-flat':

        baseRate = 0.80;

        if (mailWeight < 13) {
          weightRate = 0.20 * mailWeight;
        } else {
          weightRate = 0.20 * 13;
        }
        
        finalPrice = baseRate + weightRate;

        output.innerHTML = "The final price of your parcel is $" + finalPrice.toFixed(2);

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

        output.innerHTML = "The final price of your parcel is $" + finalPrice.toFixed(2);

        break;
      default:
        output.innerHTML = "Sorry, an error has occurred. Please consult the error logs.";
        break;
    }

}