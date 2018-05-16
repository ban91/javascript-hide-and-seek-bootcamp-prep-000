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
  const lis = document.querySelectorAll('.ranked-list');
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
}
}

function deepestChild(){
  var start = document.getElementById('grand-node');
  var child = start.child[0];
  
  while(child)
  child = start;
  start = start.child[0];
  return child;
}