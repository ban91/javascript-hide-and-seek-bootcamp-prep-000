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
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}