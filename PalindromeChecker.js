function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const charArray = str.split("");
  return (charArray.join('')==[...charArray].reverse().join(''))?true:false;
}

palindrome("eye");
