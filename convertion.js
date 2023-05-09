

export function handleConversion() {

    const fromSelect = document.getElementById("calFrom");
    const toSelect = document.getElementById("calTo");
    const fromUnit = fromSelect.options[fromSelect.selectedIndex].text;
    const toUnit = toSelect.options[toSelect.selectedIndex].text;
    const inputValue = parseFloat(document.getElementById("from-input").value);
    let outputValue;
  
    // Perform the conversion based on the selected units
    switch(fromUnit) {
      case "Meter":
        switch(toUnit) {
          case "Meter":
            outputValue = inputValue ;
            break;
  
          case "Kilometer":
            outputValue = inputValue / 1000;
            break;
          case "Centimeter":
            outputValue = inputValue * 100;
            break;
          case "Millimeter":
            outputValue = inputValue * 1000;
            break;
          case "Micrometer":
            outputValue = inputValue * 1000000;
            break;
          case "Nanometer":
            outputValue = inputValue * 1000000000;
            break;
          case "Mile":
            outputValue = inputValue / 1609.344;
            break;
          case "Yard":
            outputValue = inputValue * 1.0936133;
            break;
          case "Foot":
            outputValue = inputValue * 3.2808399;
            break;
          case "Inch":
            outputValue = inputValue * 39.3700787;
            break;
          case "Light Year":
            outputValue = inputValue / 9460730472580800;
            break;
          default:
            outputValue = inputValue;
        }
        break;
      case "Kilometer":
        switch(toUnit) {
          case "Kilometer":
            outputValue = inputValue ;
            break;
          case "Meter":
            outputValue = inputValue * 1000;
            break;
          case "Centimeter":
            outputValue = inputValue * 100000;
            break;
          case "Millimeter":
            outputValue = inputValue * 1000000;
            break;
          case "Micrometer":
            outputValue = inputValue * 1000000000;
            break;
          case "Nanometer":
            outputValue = inputValue * 1000000000000;
            break;
          case "Mile":
            outputValue = inputValue / 1.609344;
            break;
          case "Yard":
            outputValue = inputValue * 1093.6132983;
            break;
          case "Foot":
            outputValue = inputValue * 3280.839895;
            break;
          case "Inch":
            outputValue = inputValue * 39370.07874;
            break;
          case "Light Year":
            outputValue = inputValue / 9460730472581;
            break;
          default:
            outputValue = inputValue;
        }
        break;
      case "Centimeter":
        switch(toUnit) {
          case "Centimeter":
            outputValue = inputValue;
            break;
          
          case "Kilometer":
            outputValue = inputValue / 100000;
            break;
          case "Meter":
            outputValue = inputValue / 100;
            break;
          case "Millimeter":
            outputValue = inputValue * 10;
            break;
          case "Micrometer":
            outputValue = inputValue * 10000;
            break;
          case "Nanometer":
            outputValue = inputValue * 10000000;
            break;
          case "Mile":
            outputValue = inputValue / 160934.4;
            break;
          case "Yard":
            outputValue = inputValue / 91.44;
            break;
          case "Foot":
            outputValue = inputValue / 30.48;
            break;
          case "Inch":
            outputValue = inputValue / 2.54;
            break;
          case "Light Year":
            outputValue = inputValue / 946073047258100000;
            break;
        }
        break
      case "Millimeter":
        switch(toUnit) {
          case "Millimeter":
            outputValue = inputValue;
            break;
          case "Kilometer":
            outputValue = inputValue / 1000000;
            break;
          case "Meter":
            outputValue = inputValue / 1000;
            break;
          case "Centimeter":
            outputValue = inputValue / 10;
            break;
          case "Micrometer":
            outputValue = inputValue * 1000;
            break;
          case "Nanometer":
            outputValue = inputValue * 1000000;
            break;
          case "Mile":
            outputValue = inputValue / 1609344;
            break;
          case "Yard":
            outputValue = inputValue / 914.4;
            break;
          case "Foot":
            outputValue = inputValue / 304.8;
            break;
          case "Inch":
            outputValue = inputValue / 25.4;
            break;
          case "Light Year":
            outputValue = inputValue / 9460730472581000000;
            break;
        }
        break;
      // Other cases here
      case "Micrometer":
        switch(toUnit) {
          case "Micrometer":
            outputValue = inputValue;
            break;
          case "Kilometer":
            outputValue = inputValue / 1000000000;
            break;
          case "Meter":
            outputValue = inputValue / 1000000;
            break;
          case "Centimeter":
            outputValue = inputValue / 10000;
            break;
          case "Millimeter":
            outputValue = inputValue / 1000;
            break;
          case "Nanometer":
            outputValue = inputValue * 1000;
            break;
          case "Mile":
            outputValue = inputValue / 1609344000;
            break;
          case "Yard":
            outputValue = inputValue / 914400;
            break;
          case "Foot":
            outputValue = inputValue / 304800;
            break;
          case "Inch":
            outputValue = inputValue / 25400;
            break;
          case "Light Year":
            outputValue = inputValue / 946073047258100000000;
            break;
        }
        break;
      case "Nanometer":
        switch(toUnit) {
          case "Nanometer":
            outputValue = inputValue;
            break;
          case "Kilometer":
            outputValue = inputValue / 1000000000000;
            break;
          case "Meter":
            outputValue = inputValue / 1000000000;
            break;
          case "Centimeter":
            outputValue = inputValue / 10000000;
            break;
          case "Millimeter":
            outputValue = inputValue / 1000000;
            break;
          case "Micrometer":
            outputValue = inputValue / 1000;
            break;
          case "Mile":
            outputValue = inputValue / 1609344000000;
            break;
          case "Yard":
            outputValue = inputValue / 914400000;
            break;
          case "Foot":
            outputValue = inputValue / 304800000;
            break;
          case "Inch":
            outputValue = inputValue / 25400000;
            break;
          case "Light Year":
            outputValue = inputValue / 946073047258100000000000;
            break;
        }
        break;
      case "Inch":
        switch(toUnit) {
          case "Inch":
            outputValue = inputValue;
            break;
          case "Kilometer":
            outputValue = inputValue * 0.0000254 / 1000;
            break;
          case "Meter":
            outputValue = inputValue * 0.0254;
            break;
          case "Centimeter":
            outputValue = inputValue * 2.54;
            break;
          case "Millimeter":
            outputValue = inputValue * 25.4;
            break;
          case "Micrometer":
            outputValue = inputValue * 25400;
            break;
          case "Nanometer":
            outputValue = inputValue * 25400000;
            break;
          case "Mile":
            outputValue = inputValue / 63360;
            break;
          case "Yard":
            outputValue = inputValue / 36;
            break;
          case "Foot":
            outputValue = inputValue / 12;
            break;
          case "Light Year":
            outputValue = inputValue * 2.684782406739659e-18;
            break;
        }
        break;
      case "Mile":
        switch(toUnit) {
          case "Mile":
            outputValue = inputValue;
            break;
          case "Kilometer":
            outputValue = inputValue * 1.609344;
            break;
          case "Meter":
            outputValue = inputValue * 1609.344;
            break;
          case "Centimeter":
            outputValue = inputValue * 160934.4;
            break;
          case "Millimeter":
            outputValue = inputValue * 1609344;
            break;
          case "Micrometer":
            outputValue = inputValue * 1609344000;
            break;
          case "Nanometer":
            outputValue = inputValue * 1609344000000;
            break;
          case "Yard":
            outputValue = inputValue * 1760;
            break;
          case "Foot":
            outputValue = inputValue * 5280;
            break;
          case "Inch":
            outputValue = inputValue * 63360;
            break;
          case "Light Year":
            outputValue = inputValue / 5878499811421.695;
            break;
        }
        break;
        case "Yard":
          switch(toUnit) {
            case "Yard":
            outputValue = inputValue;
            break;
            case "Kilometer":
              outputValue = inputValue / 1093.6133;
              break;
            case "Meter":
              outputValue = inputValue * 0.9144;
              break;
            case "Centimeter":
              outputValue = inputValue * 91.44;
              break;
            case "Millimeter":
              outputValue = inputValue * 914.4;
              break;
            case "Micrometer":
              outputValue = inputValue * 914400;
              break;
            case "Nanometer":
              outputValue = inputValue * 914400000;
              break;
            case "Mile":
              outputValue = inputValue / 1760;
              break;
            case "Foot":
              outputValue = inputValue * 3;
              break;
            case "Inch":
              outputValue = inputValue * 36;
              break;
            case "Light Year":
              outputValue = inputValue / 30856775812800000;
              break;
          }
          break;
          case "Light Year":
            switch(toUnit) {
              case "Light Year":
                outputValue = inputValue;
                break;
              case "Kilometer":
                outputValue = inputValue * 9.461e+12;
                break;
              case "Meter":
                outputValue = inputValue * 9.461e+15;
                break;
              case "Centimeter":
                outputValue = inputValue * 9.461e+17;
                break;
              case "Millimeter":
                outputValue = inputValue * 9.461e+18;
                break;
              case "Micrometer":
                outputValue = inputValue * 9.461e+21;
                break;
              case "Nanometer":
                outputValue = inputValue * 9.461e+24;
                break;
              case "Mile":
                outputValue = inputValue * 5.878e+12;
                break;
              case "Yard":
                outputValue = inputValue * 1.035e+16;
                break;
              case "Foot":
                outputValue = inputValue * 3.106e+16;
                break;
              case "Inch":
                outputValue = inputValue * 3.727e+17;
                break;
            }
            break;
        case "Celsius":
        switch(toUnit) {
          case "Celsius":
            outputValue = inputValue;
            break;
          
          case "Fahrenheit":
            outputValue = inputValue * 1.8 + 32;
            break;
          case "Kelvin":
            outputValue = inputValue + 273.15;
            break;
        }
        break;
      case "Fahrenheit":
        switch(toUnit) {
          case "Fahrenheit":
            outputValue = (inputValue );
            break;
          
          case "Celsius":
            outputValue = (inputValue - 32) / 1.8;
            break;
          case "Kelvin":
            outputValue = (inputValue + 459.67) / 1.8;
            break;
        }
        break;
      case "Kelvin":
        switch(toUnit) {
          case "Kelvin":
            outputValue = (inputValue );
            break;
          case "Celsius":
            outputValue = inputValue - 273.15;
            break;
          case "Fahrenheit":
            outputValue = inputValue * 1.8 - 459.67;
            break;
        }
            break;
            case "Square Meter":
              switch(toUnit) {
                case "Square Meter":
                  outputValue = inputValue
                  break;
                case "Square Kilometer":
                  outputValue = inputValue / 1000000;
                  break;
                case "Square Mile":
                  outputValue = inputValue / 2589988.11;
                  break;
               
              }
              break;
            case "Square Kilometer":
              switch(toUnit) {
                case "Square Kilometer":
                  outputValue = inputValue ;
                  break;
                case "Square Meter":
                  outputValue = inputValue * 1000000;
                  break;
                case "Square Mile":
                  outputValue = inputValue / 2.58998811;
                  break;
                
              }
              break;
            case "Square Mile":
              switch(toUnit) {
                case "Square Mile":
                  outputValue = inputValue ;
                  break;
  
                case "Square Meter":
                  outputValue = inputValue * 2589988.11;
                  break;
                case "Square Kilometer":
                  outputValue = inputValue * 2.58998811;
                  break;
               
              }
              break;
              case "Cubic Meter":
                switch (toUnit) {
                  case "Cubic Meter":
                  outputValue = inputValue ;
                  break;
                  case "Cubic Kilometer":
                    outputValue = inputValue / 1e+9;
                    break;
                  case "Liter":
                    outputValue = inputValue * 1000;
                    break;
                  case "Milliliter":
                    outputValue = inputValue * 1e+6;
                    break;
                  case "Gallon":
                    outputValue = inputValue * 264.172;
                    break;
                  case "Quart":
                    outputValue = inputValue * 1056.69;
                    break;
                  
                 
      
                }
                break;
                case "Cubic Kilometer":
                  switch(toUnit) {
                    case "Cubic Kilometer":
                      outputValue = inputValue 
                      break;
                    case "Cubic Meter":
                      outputValue = inputValue * 1000000000;
                      break;
                    case "Liter":
                      outputValue = inputValue * 1e+12;
                      break;
                    case "Milliliter":
                      outputValue = inputValue * 1e+15;
                      break;
                    case "Gallon":
                      outputValue = inputValue * 2.609e+11;
                      break;
                    case "Quart":
                      outputValue = inputValue * 1.0436e+12;
                      break;
                   
                  }
                  break;
            case "Liter":
              switch(toUnit) {
                case "Liter":
                  outputValue = inputValue ;
                  break;
                case "Cubic Meter":
                  outputValue = inputValue / 1000;
                  break;
                case "Cubic Kilometer":
                  outputValue = inputValue / 1e+12;
                  break;
                case "Milliliter":
                  outputValue = inputValue * 1000;
                  break;
                case "Gallon":
                  outputValue = inputValue / 3.785411784;
                  break;
                case "Quart":
                  outputValue = inputValue / 0.946352946;
                  break;
                
                  
                }
                break;
                case "Milliliter":
                  switch(toUnit) {
                    case "Milliliter":
                      outputValue = inputValue ;
                      break;
                    case "Cubic Meter":
                      outputValue = inputValue / 1000000;
                      break;
                    case "Cubic Kilometer":
                      outputValue = inputValue / 1e+15;
                      break;
                    case "Liter":
                      outputValue = inputValue / 1000;
                      break;
                    case "Gallon":
                      outputValue = inputValue / 3785.411784;
                      break;
                    case "Quart":
                      outputValue = inputValue / 946.352946;
                      break;
                    
                  }
                  break;
                  case "Gallon":
                    switch (toUnit) {
                      case "Gallon":
                        outputValue = inputValue ;
                        break;
                      case "Cubic Meter":
                        outputValue = inputValue * 0.00378541;
                        break;
                      case "Cubic Kilometer":
                        outputValue = inputValue * 9.006623848e-13;
                        break;
                      case "Liter":
                        outputValue = inputValue * 3.78541;
                        break;
                      case "Milliliter":
                        outputValue = inputValue * 3785.41;
                        break;
                      case "Quart":
                        outputValue = inputValue * 4;
                        break;
                      
                    }
                    break;
                    case "Quart":
                      switch(toUnit) {
                        case "Quart":
                        outputValue = inputValue ;
                        break;
                        case "Cubic Meter":
                          outputValue = inputValue / 1056.688;
                          break;
                        case "Cubic Kilometer":
                          outputValue = inputValue / 2.642173e+15;
                          break;
                        case "Liter":
                          outputValue = inputValue * 0.946353;
                          break;
                        case "Milliliter":
                          outputValue = inputValue * 946.352946;
                          break;
                        case "Gallon":
                          outputValue = inputValue / 4;
                          break;
                        
                      }
                      break;
                      case "Kilogram":
                        switch(toUnit) {
                          case "Kilogram":
                            outputValue = inputValue ;
                            break;
                          case "Gram":
                            outputValue = inputValue * 1000;
                            break;
                          case "Milligram":
                            outputValue = inputValue * 1e+6;
                            break;
                          case "Pound":
                            outputValue = inputValue * 2.20462;
                            break;
                        }
                        break;
                      case "Gram":
                        switch(toUnit) {
                          case "Gram":
                            outputValue = inputValue ;
                            break;
                          case "Kilogram":
                            outputValue = inputValue / 1000;
                            break;
                          case "Milligram":
                            outputValue = inputValue * 1000;
                            break;
                          case "Pound":
                            outputValue = inputValue * 0.00220462;
                            break;
                        }
                        break;
                      case "Milligram":
                        switch(toUnit) {
                          case "Milligram":
                            outputValue = inputValue ;
                            break;
                          case "Kilogram":
                            outputValue = inputValue / 1e+6;
                            break;
                          case "Gram":
                            outputValue = inputValue / 1000;
                            break;
                          case "Pound":
                            outputValue = inputValue * 2.20462e-6;
                            break;
                        }
                        break;
                      case "Pound":
                        switch(toUnit) {
                          case "Pound":
                            outputValue = inputValue ;
                            break;
                          case "Kilogram":
                            outputValue = inputValue / 2.20462;
                            break;
                          case "Gram":
                            outputValue = inputValue / 0.00220462;
                            break;
                          case "Milligram":
                            outputValue = inputValue / 2.20462e-6;
                            break;
                        }
                        break;
                
                   
                  
                
    default:
      outputValue = inputValue;
      
  }
  //before make the display the output make sure it has value
  if (outputValue ){
  
    document.getElementById("to-input").value = outputValue;
    document.getElementById("calResults").innerHTML=`<p>
      <font color="red"><b>Result:</b></font>
      ${outputValue}
      </p>`;
  }
  
  
    
  }
  