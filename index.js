function receivesAFunction(callback) {
  console.log(callback());
}
receivesAFunction(callback);

function returnsANamedFunction() {
  return function fn() {};
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
  return () => {};
}

returnsAnAnonymousFunction()