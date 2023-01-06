const billAmount = document.querySelector(".bill-amount");
const cashGiven=document.querySelector(".cash-given");
const checkButton=document.querySelector("check-button");
const noOfNotes=document.querySelectorAll(".no-of-notes");


const availableNotes=[2000, 500, 100, 20, 10, 0];

checkButton.addEventListener("click",function validateBillandCashAmount(){
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const returnedAmount= cashGiven.value -billAmount.value;
            calculateChange(returnedAmount)
        }else{
            showMessage("Do you wanna wash plates?")
        }
    }else{
        showMessage("Invalid Bill amount");
    }
});



function calculateChange(returnedAmount){
    for(let i=0; i< availableNotes.length; i++){
        const numberOfNotes= Math.trunc(returnedAmount/availableNotes[i])
        //2500/2000=1

        returnedAmount%=availableNotes[i];
        //2500/2000=500(amount left to be returned)

        noOfNotes[i].textContent=numberOfNotes;
        //showing the no of notes 
    }

}
function hideMessage() {
    message.style.display = "none";
  }