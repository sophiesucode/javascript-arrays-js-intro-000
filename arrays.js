var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

const array = [1]



function addElementToBeginningOfArray(foo) {
  return ['foo', ...array];
};

function destructivelyAddElementToBeginningOfArray(foo){
 array.unshift('foo');
 return array;
};
var boo='foo'
function addElementToEndOfArray(array, boo){
  return [...array, 'boo'];
}
