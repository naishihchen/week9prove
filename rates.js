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