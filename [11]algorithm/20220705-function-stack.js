function one() {
  console.log('this is one function');
  two();
}
function two() {
  console.log('this is two function');
  three();
}
function three() {
  console.log('this is three function');
  four();
}
function four() {
  console.log('this is four function');
}
one();
