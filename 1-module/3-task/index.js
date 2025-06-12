function ucFirst(str) {
  if(typeof str != 'string'||!str.trim()) return str;
  else return str[0].toUpperCase() + str.slice(1); 
}
