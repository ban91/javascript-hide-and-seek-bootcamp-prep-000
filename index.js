function getFirstSelector(selector){
  const match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  var test = document.getElementById('nested');
  var testA = nested.querySelector('.target');
  return testA;
}

function increaseRankBy(n){
  const lis = document.querySelector('.ranked-list');
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString();
}
}