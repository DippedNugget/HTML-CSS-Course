/*SHOWPAGE SELECTION displays a section when nav is clicked
  ITEMONCLICK displays item and price alert
  DISPLAYALERT displays "email" since website doesnt have server side fuction*/
function showPageSection(id){ 
    let listOfIds = ["home", "about-us", "menu", "contact"];
    for(i=0; i<listOfIds.length; i++){
        if(listOfIds[i] == id){
            document.getElementById(id).style.visibility = "visible";
        }  else {
            document.getElementById(listOfIds[i]).style.visibility = "hidden";
        }
    }
}
    
function itemOnClick(idOfItem, idOfAmount){
  let item = document.getElementById(idOfItem).innerHTML;
  let amount = document.getElementById(idOfAmount).innerHTML;
  let alertMessage = "Item: " + item + " Pizza" + "\n" + "Price: " + amount;
  alert(alertMessage);
}

function displayAlert(){
    let emailAddress = document.getElementById("email").value;
    let subjectLine = document.getElementById("subject").value;
    let messageBody = document.getElementById("body").value;

    let alertMessage = "Email: " + emailAddress + "\n" + "Subject: " + subjectLine + "\n" + "Body: " + messageBody;

    alert(alertMessage);
}