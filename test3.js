function test3() {
    Q = {};
  Q.objective = { };
  Q.objective.one = [];
  Q.objective.two = [];
  
  q = { };
  q.quest = '{Bsk1}  มีค่าอะไร ';
  q.ans = '{asdb1}';
  Q.objective.two.push( q );
  
  q = { };
  q.quest = '{bsk1}  เป็นตัวแปรประเภทอะไร ';
  q.ans = 'Bool';
  q.inspected = {'reg': /^bool$/, 'modifiers':'i'};
  Q.objective.two.push( q );
  
  q = { };
  q.quest = '{Bsk2}  มีค่าอะไร';
  q.ans = '{asdb2}';
  Q.objective.one.push( q );
  
  q = { };
  q.quest = '{bsk2}  เป็นตัวแปรประเภทอะไร ';
  q.ans ='Int';
  q.inspected = {'reg': /^int$/, 'modifiers':'i'};
  Q.objective.one.push( q );
  }
  