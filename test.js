function array_diff(a, b) {
var c = [];
  for ( var i = 0  ; i < a.length() ; i++ ) {
    if  ( b.includes(a[i]) ) {
     
    } else { 
        c.push(a[i])    ;
    }
    return c;
}