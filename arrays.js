var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

const array = [1]



function addElementToBeginningOfArray(array,foo) {
  return ['foo', ...array];
};

function destructivelyAddElementToBeginningOfArray(foo){
 array.unshift('foo');
 return array;
};
var boo='foo'
function addElementToEndOfArray(array, boo){
  return [...array, 'foo'];
}
