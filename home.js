
import { validate } from './validate.js';
import { units } from './units.js';


const menuItems = document.querySelectorAll('#menu ul li a');
const tableBody = document.getElementById("table");
let unitMeasurenents;


menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const selectedMenuItem = menuItem.innerText;
    var id = event.target.id;
    unitMeasurenents=units[id];
    tableBody.innerHTML=`<tr>
    <td>
        <label for="from-input">From:</label>
    </td>
    <td>
        <label for="to-input">To:</label>
    </td>
</tr>
<tr>

    <td>
        <input type="text" id="from-input">
    </td>
    <td>
        <input type="text" id="to-input" readonly>
    </td>
</tr>`

      const row = document.createElement("tr");
      const calFromTd = document.createElement("td");
      const calFromSelect = document.createElement("select");
      calFromSelect.name = "calFrom";
      calFromSelect.id = `calFrom`;
      calFromSelect.className = "ucselect";
      calFromSelect.size =unitMeasurenents.length ;

      unitMeasurenents.forEach(unit=>{
      const option = document.createElement("option");
      option.value =  unit.value;
      option.textContent = unit.label;
      calFromSelect.appendChild(option);
    })

    const calToTd = document.createElement("td");
    const calToSelect = document.createElement("select");
      calToSelect.name = "calTo";
      calToSelect.id = `calTo`;
      calToSelect.className = "ucselect";
      calToSelect.size =unitMeasurenents.length ;

    unitMeasurenents.forEach(unit=>{
      
    const option = document.createElement("option");
    option.value =  unit.value;
    option.textContent = unit.label;
    calToSelect.appendChild(option);
  })

    calFromTd.appendChild(calFromSelect);
    row.appendChild(calFromTd);
    calToTd.appendChild(calToSelect);
    row.appendChild(calToTd);
    tableBody.appendChild(row)


    const fromInput = document.getElementById("from-input");
    const fromSelect = document.getElementById("calFrom");
  const toSelect = document.getElementById("calTo");
  fromInput.addEventListener("input", function() {
   
      validate()
   
  });
  
  fromSelect.addEventListener("change", function() {
    validate()
   
  });
  
  toSelect.addEventListener("change", function() {
    validate()
    
  });
  
      
      
      

    



  
    
  });

  
});









