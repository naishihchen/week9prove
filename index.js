const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function calculateRate() {
	let mailWeight = document.getElementById("mail-weight").value;
	var mailType = undefined;
	var radios = document.getElementsByTagName('input');

	for(i = 0; i < ele.length; i++) { 
                  
        if(ele[i].type="radio") { 
                
            if(ele[i].checked) {
                mailType = ele[i].value; 
            }
        } 
    }

    console.log(mailWeight);
    console.log(mailType); 
}