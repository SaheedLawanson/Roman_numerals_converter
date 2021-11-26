function convertToRoman(num) {

  // Create roman numerals dictionary from highest to lowest
  let romanDict = {"M": 1000, "CM": 900, 
                  "D": 500, "CD": 400, "C": 100, 
                  "XC": 90, "L": 50, "XL": 40, 
                  "X":10, "IX": 9, "VIII": 8, "VII":7,
                   "VI": 6, "V": 5, "IV": 4, 
                  "III": 3, "II": 2, "I": 1}

  // var roman_num is our return value
  let roman_num = ""

  // Loop through values in the dictionary
  for (let key in romanDict) {
    // Pick the numeral value that's closest to the num variable
    //    and add it to end of the roman_num variable
      while(num >= romanDict[key]) {
        roman_num += key
      
      // Subtract that value from the num variable and 
      //    go back to the loop until num = 0
        num -= romanDict[key]
      }
    }

  return roman_num;
}

convertToRoman(3999);