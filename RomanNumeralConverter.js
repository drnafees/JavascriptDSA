function convertToRoman(num) {
 let roman = "";
 const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
 }
 for (const n in romanNumerals) {
   while (num >= romanNumerals[n]) {
     roman+=n;
     num-=romanNumerals[n];
   }
 }
 console.log(roman);
 return roman;
}

convertToRoman(36);
