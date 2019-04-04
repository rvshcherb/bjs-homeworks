function getSolutions(a,b,c) {
  let D = Math.pow(b,2) - 4 * a * c;
  let result = new Object;
  let roots = [];

  if (D < 0) {
    result.D = D;
  } else if (D == 0) {
    let x1 = -b / 2 * a;
    result.D = D;
    roots.push(x1);
    result.roots = roots;
    console.log(roots);
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    result.D = D;
    roots.push(x1,x2);
    result.roots = roots;
    console.log(roots);
  }
  return result;
}

console.log(getSolutions(1,-4,-5));

function showSolutionMessge(a,b,c) {
  console.log(`вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`)
}