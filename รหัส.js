function test() {

    function randShift(a) {
  
      if (a.length > 1) {
        var i = Math.round((Math.random() * a.length * 100)) % a.length;
        if (i != 0) {
          var tmp = a[i];
          a[i] = a[0];
          a[0] = tmp;
        }
      }
      return a.shift();
    }
  
    intValue = [12, 61, 5, 45];
    Q = {};
    Q.variable = {};
    Q.variable.v1 = ['Fd', 'Fe', 'ee', 'in'];
    Q.variable.val1 = randShift(intValue);
    Q.variable.v2 = ['kW', 'Hd', 'En', 'Rn'];
    Q.variable.val2 = intValue.shift();
    val3 = [5, 7, 51, 9]
  
    type1 = ['str({val3})']
  
    Q.variable.compare1 = ['==', '>', '<', '<=', '>=', '!=']
    Q.variable.operators = ['+', '-', '*', '/', '%', '//', '**'];
    Q.objective = {};
    Q.objective.one = [];
    q = {};
    q.quest = '{v1} มีค่าเท่าไร ';
    q.ans = { 'eval': '{val2}{operators} {intValue} ', 'fixed': 3 };
    Q.objective.one.push(q);
  
  }
  