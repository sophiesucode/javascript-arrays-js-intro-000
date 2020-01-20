var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

//return new array and not alter original one......use the spread operator to create a new array in place, rather than modifying the original one
//expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
//const moreCats = ["foo", ...array]
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
