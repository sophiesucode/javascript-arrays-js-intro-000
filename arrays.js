var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

const array = [1]



function addElementToBeginningOfArray(foo) {
  return ['foo', ...array];
};
var addEl='foo'
function destructivelyAddElementToBeginningOfArray(addEl){
 array.unshift('addEl');
};
