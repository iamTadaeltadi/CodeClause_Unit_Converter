//checks the from units and to units selected and checks if the input values is inserted in valid
import { handleConversion } from "./convertion.js"
export function validate(){

    document.getElementById("to-input").value = "";
  
    const fromInput = document.getElementById("from-input");
    const fromSelect = document.getElementById("calFrom");
    const toSelect = document.getElementById("calTo");
  
    if (fromSelect.selectedIndex !== -1 & toSelect.selectedIndex !== -1) {
      if (isNaN(fromInput.value)) {
        // Value is not a number
        alert("Please enter a valid number");
      } else {
        handleConversion();
      }
  
     
    } 
    
  
  }