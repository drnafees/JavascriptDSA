function rot13(str) {
  //string to ASCII code array
  const arr = str.split('').map(char=>char.charCodeAt(0));
  //shift ascii codes by 13 places and convert back to letters
  arr.forEach((c, i)=>{
    if (c>64 && c<91) {
      if (c<78) {
        c+=13;
      } else {
        c-=13;
      }
    }
    arr[i] = String.fromCharCode(c);
  })

  //return character array as string
  return arr.join('');
}

rot13("SERR PBQR PNZC");
