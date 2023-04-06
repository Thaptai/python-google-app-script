// random variable name
function generate_variable(number) {
    let arr = []
    let pt = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ";
    let i = 0
  
    while (i != number) {
      let rd = "";
      for (let j = 0; j < 2; ++j) {
        rd += pt[Math.floor(Math.random() * pt.length)];
      }
  
      if (arr.indexOf(rd) == -1) {
        arr.push(rd);
        i++;
      }
    }
    return arr;
  }
  
  // Random operation
  function random4() {
    let operations = ['>', '<', '<=', '>=', '=='];
    let opeartion = operations[Math.floor(Math.random() * 4)];
    return opeartion
  }
  
  // Compare variable
  function cal(n1, n2, op) {
    switch (op) {
      case '>': return n1 > n2;
      case '<': return n1 < n2;
      case '==': return n1 == n2;
      case '<=': return n1 <= n2;
      case '>=': return n1 >= n2;
      case '!=': return n1 != n2;
    }
  }
  
  // สุ่มตัวเครื่องหมาย
  function operators() {
    let operator = ['+', '-', '*', '/'];
    operator = operator[Math.floor(Math.random() * 4)];
    return operator
  }
  
  // สุ่มตัวเครื่องหมาย ไม่มีหาร
  function operators2() {
    let operator = ['+', '-', '*'];
    operator = operator[Math.floor(Math.random() * 3)];
    return operator
  }
  
  // Check number is Integer or not
  function isInt(n) {
    return n % 1 === 0;
  }
  
  function stringIsFloat(n) {
    return (n + '').indexOf('.') != -1;
  }
  
  // Calculate two number with operator
  function calOp(n1, n2, op) {
    n1 = stringIsFloat(n1) ? parseFloat(n1) : parseInt(n1);
    n2 = stringIsFloat(n2) ? parseFloat(n2) : parseInt(n2);
    let caled;
    switch (op) {
      case '+': caled = n1 + n2; break;
      case '-': caled = n1 - n2; break;
      case '*': caled = n1 * n2; break;
      case '/': caled = n1 / n2; break;
    }
    
    try {
      return isInt(caled) ? caled : caled.toFixed(3);
    } catch(e) {
      console.log('---------->', caled);
    }
  }
  
  // Check data type for show
  function genDataType(e) {
    // check data is number
    if (Number(e)) return Number(e);
    // check data is boolean
    if (e === 'true' || e === 'false') return e;
    // if data is string
    return `"${e}"`;
  }