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
  return array[index]
}
