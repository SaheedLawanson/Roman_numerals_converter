Built with
- JavaScript


Overview

The objective of the roman_numeral_converter project is to convert integers into roman numerals

The convertToNum function takes a single argument: num of the int data type which is the integer
to be converted into a roman numeral


Algorithm

1.	A roman numeral dictionary is defined (from highest to lowest), the keys are the roman 
	numerals and the values are the numerical equivalent in cardinal numbers e.g. 1, 2, 3, 4, 5 etc.
2.	An empty string called "roman_num" is initialized
3.	A for loop iterates through all the keys in the dictionary and searches for the first value
	that is lower or equal to the num variable
4.	Once the value is found, it is added to the end of the "roman_num" variable, the value is 
	subtracted and the loop continues until the "num" parameter is 0
5.	The "roman_num" variable is returned
