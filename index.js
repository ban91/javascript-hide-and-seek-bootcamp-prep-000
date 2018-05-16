function getFirstSelector(selector){
  const match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  var test = document.getElementById('nested');
  var testA = nested.querySelector('.target');
  return testA
}