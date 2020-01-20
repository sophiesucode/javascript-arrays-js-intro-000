var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

const array = [1]



function addElementToBeginningOfArray(foo) {
  return ['foo', ...array];
};

function destructivelyAddElementToBeginningOfArray(foo,[array]){
  array.unshift('foo');
  return array;
};
