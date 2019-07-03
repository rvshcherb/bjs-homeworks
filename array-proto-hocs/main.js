function compareArrays(arr1, arr2) {
  if(arr1.length === arr2.length) {
    const compareArr = arr1.map(element => arr2.indexOf(element));
    if (!compareArr.includes(-1)) {
      const resultArr = compareArr
      .map(element => element < compareArr[compareArr.indexOf(element) + 1]);
      resultArr.pop(); 
      if (resultArr.includes(false)) {
        return false
      } else {
        return true;
      }
    } else {
      return false
    }
  } else {
    return false;
  }
}

function sum(a,b) {
  return a + b;
}

function memoize(fn, limit) {
  const results = [];

  return function(...args) {
    let functionResult;
    let argsAlreadyExist = false;

    
    results.map(result => {
      if(compareArrays(result.args, args) === true) {
        argsAlreadyExist = true;
        functionResult = result.result;
        console.log(`Arguments (${args}) already in "results". No data added.`);
      }
    });

    if (argsAlreadyExist === false) {
      console.log(`New arguments (${args}) added.`)
      if (results.length >= limit) {
        results.shift();
        results.push({args: args, result: fn.apply(null, args)});
        functionResult = fn.apply(null, args);
      } else {
        results.push({args: args, result: fn.apply(null, args)});
        functionResult = fn.apply(null, args);
      }
    } 

    console.log(results);
    console.log(`result: ${functionResult} \n`);
    return functionResult;
  }
}

const foo = memoize(sum, 5);
foo(10, 20);
foo(10, 20);
foo(30, 40);
foo(40, 50);
foo(10, 20);
foo(50, 60);
foo(60, 70);
foo(30, 40);
foo(50, 60);
foo(50, 60);
foo(10, 20);
foo(10, 10);
foo(100, 10);
foo(200, 10);
foo(50, 60);
foo(50, 60);


