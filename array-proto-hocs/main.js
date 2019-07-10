function sum(a,b) {
  return a + b;
}

function compareArrays(arr1, arr2) {
 return arr1.every((element, index) => element === arr2[index]);
}

function memoize(fn, limit) {
  const results = [];

  return function(...args) {
    const compareResult = results.find(element => compareArrays(element.args, args));
    if (compareResult != undefined) {
      //console.log('args already exist');
      return compareResult.result;
    } else {
      const functionResult = fn.apply(null, args);
      results.push({args: args, result: functionResult});
      if (results.length > limit) {
        results.shift();
      }
      //console.log(results);
      return functionResult;
    }  
  }
}

const foo = memoize(sum, 5);

foo(10, 10);
foo(10, 20);
foo(10, 30);
foo(10, 40);
foo(10, 50);
foo(10, 60);
foo(10, 40);
foo(10, 70);