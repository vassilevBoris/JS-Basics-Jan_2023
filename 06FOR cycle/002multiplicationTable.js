function multiplicationTablea(arg) {
    let n = Number(arg[0]);
    for(let i = 1; i <= 10; i++){
       console.log(`${i} * ${n} = ${i * n}`);
       }
  }
  multiplicationTablea(["5"]);