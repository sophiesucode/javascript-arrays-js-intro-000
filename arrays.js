var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

const array = [1]



function addElementToBeginningOfArray(array,foo) {
  return ['foo', ...array];
};

function destructivelyAddElementToBeginningOfArray(array,foo){
 array.unshift('foo');
 return array;
};
var boo='foo'
function addElementToEndOfArray(array, boo){
  return [...array, 'foo'];
}
function destructivelyAddElementToEndOfArray(array, foo){
  array.push('foo')
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}
 function destructivelyRemoveElementFromBeginningOfArray(array){
   array.push(2,3);
   return array.shift();
 }
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }

 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
 }
