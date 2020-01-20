var chocolateBars =['snickers','hundred grand','kitkat', 'skittles'];

//return new array and not alter original one......use the spread operator to create a new array in place, rather than modifying the original one
//expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
const oldArray=[1]
const addElementToBeginningOfArray(oldArray,'foo'){
  return ['foo',...oldArray];
};
//const moreCats = ["foo", ...array]