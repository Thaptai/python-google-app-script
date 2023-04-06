// @ts-ignore
python_Obj = class extends commonProject.GenPNG_Obj {
    constructor() {
      super();
  
    }
  }
  
  python_Obj.prototype.newVariable = function () {
    var v_ = {};
    var nameList = generate_variable(100);
    var decimal = ['1.3', '2.1', '5.1', '2.5', '7.4', '1.2', '5.2', '8.8', '5.4', '1.7', '3.1', '3.4']
    var number1 = [];
    for (let i = 10; i < 100; ++i) number1.push(i);
    var number2 = [2, 3, 4, 5, 6, 7, 8, 9]
  
    /*ตัวแปร ข้อที่1*/
    v_.As = commonProject.randShift(nameList);
    v_.Jg = commonProject.randShift(nameList);
    v_.ef = commonProject.randShift(nameList);
    v_.s77 = commonProject.randShift(number1);
    v_.s10 = commonProject.randShift(number1);
    v_.s2 = commonProject.randShift(number1);
    v_.s7 = commonProject.randShift(number1);
    v_.s1 = commonProject.randShift(number1);
    v_.s14 = commonProject.randShift(number1);
    v_.s50 = commonProject.randShift(number1);
    v_.fe = commonProject.randShift(nameList);
    v_.he = random4()
    v_.op1 = operators()
    v_.op2 = operators2()
  
    /*ตัวแปร ข้อที่2*/
    v_.A1 = commonProject.randShift(nameList);
    v_.A2 = commonProject.randShift(nameList);
    v_.AN1 = commonProject.randShift(decimal);
    v_.AN2 = commonProject.randShift(decimal);
    v_.num1 = commonProject.randShift(decimal);
    v_.num2 = commonProject.randShift(number2);
    v_.num3 = commonProject.randShift(number1);
    v_.num4 = commonProject.randShift(number1);
    v_.ask1 = commonProject.randShift(nameList);
    v_.ask2 = commonProject.randShift(nameList);
    v_.he2 = random4()
    v_.op3 = operators()
    v_.op4 = operators()
    v_.op5 = operators()
  
    /*ตัวแปร ข้อที่3*/
    v_.B1 = commonProject.randShift(nameList);
    v_.B2 = commonProject.randShift(nameList);
    v_.BN1 = commonProject.randShift(number1);
    v_.BN2 = commonProject.randShift(number1);
    v_.numB1 = commonProject.randShift(number1);
    v_.numB2 = commonProject.randShift(number1);
    v_.numB3 = commonProject.randShift(number1);
    v_.Bsk1 = commonProject.randShift(nameList);
    v_.Bsk2 = commonProject.randShift(nameList);
    v_.he3 = random4()
    v_.he4 = random4()
    v_.op8 = operators2()
    v_.op9 = operators2()
  
    v_.Line1 = '{ask1} =  {A2} + {num4}';
    v_.Line1 = commonProject.toStrings(v_.Line1);
    v_.Line1 = v_.Line1.format(v_)
  
  
    /*ตัวแปร ข้อที่4*/
    v_.C1 = commonProject.randShift(nameList);
    v_.C2 = commonProject.randShift(nameList);
    v_.CN1 = commonProject.randShift(number1);
    v_.CN2 = commonProject.randShift(number1);
    v_.numc1 = commonProject.randShift(number1);
    v_.numc2 = commonProject.randShift(number1);
    v_.numc3 = commonProject.randShift(number1);
    v_.Csk1 = commonProject.randShift(nameList);
    v_.Csk2 = commonProject.randShift(nameList);
    v_.he5 = random4()
    v_.he6 = random4()
    v_.op10 = operators2()
    v_.op11 = operators()
  
  
    /*ข้อที่1*/
    if (cal(v_.s77, v_.s2, v_.he)) {
      v_.Asx = String(v_.s1)
      v_.Jg1 = calOp(v_.s77, v_.s7, v_.op1)
    }
    else {
      v_.Asx = String(v_.s1) + String(v_.s14)
      v_.Jg1 = v_.s77
    }
    v_.s770 = calOp(v_.Jg1, v_.s10, v_.op2);
    v_.s770Type = isInt(v_.s770) ? 'Int' : "Float";
    v_.s1150 = v_.Asx + String(v_.s50)
  
  
    /*ข้อที่2*/
    if (cal(v_.AN1, v_.AN2, v_.he2)) {
      v_.Asx1 = (v_.AN2)
      v_.Jg2 = calOp(v_.AN1, v_.num1, v_.op3)
    }
    else {
      v_.Asx1 = calOp(v_.AN2, v_.num2, v_.op4)
      v_.Jg2 = v_.AN1
    }
  
    const ran1 = Math.floor(Math.random() * 2);
    if (ran1) {
      v_.asd1 = calOp(parseFloat(v_.Asx1), parseFloat(v_.num4), v_.op5)
      v_.asd2 = (cal(v_.Asx1, v_.num3, v_.he2))
  
      v_.pattern1_1 = `${v_.ask1} =  ${v_.A2} ${v_.op5} ${v_.num4}`;
      v_.pattern1_2 = `${v_.ask2} = ${v_.A1} ${v_.he2} ${v_.num3}`;
    } else {
      v_.asd2 = (cal(v_.Asx1, v_.num3, v_.he2))
      v_.asd1 = calOp(parseFloat(v_.Asx1), parseFloat(v_.num4), v_.op5)
  
      v_.pattern1_1 = `${v_.ask2} = ${v_.A1} ${v_.he2} ${v_.num3}`;
      v_.pattern1_2 = `${v_.ask1} =  ${v_.A2} ${v_.op5} ${v_.num4}`;
    }
  
  
    /*ช้อที่3*/
    v_.BM1 = v_.BN1
    if (cal(v_.BN1, v_.BN2, v_.he3)) {
      v_.Asx2 = (v_.BN1)
      v_.Asx3 = (v_.BN2)
  
      v_.BM1 = calOp(v_.BN2, v_.numB1, v_.op9)
    }
  
    const ran2 = Math.floor(Math.random() * 2);
    if (ran2) {
      v_.asdb1 = (cal(v_.BN2, v_.numB2, v_.he4))
      v_.asdb2 = calOp(v_.BM1, v_.numB3, v_.op8)
  
      v_.pattern2_1 = `${v_.Bsk1} = ${v_.B2} ${v_.he4} ${v_.numB2}`
      v_.pattern2_2 = `${v_.Bsk2} = ${v_.B1} ${v_.op8} ${v_.numB3}`
    } else {
      v_.asdb2 = calOp(v_.BM1, v_.numB3, v_.op8)
      v_.asdb1 = (cal(v_.BN2, v_.numB2, v_.he4))
  
      v_.pattern2_1 = `${v_.Bsk2} = ${v_.B1} ${v_.op8} ${v_.numB3}`
      v_.pattern2_2 = `${v_.Bsk1} = ${v_.B2} ${v_.he4} ${v_.numB2}`
    }
  
  
  
    /*ข้อที่ 4 */
    v_.BM2 = v_.CN2
  
    if (cal(v_.CN1, v_.CN2, v_.he5)) {
      v_.Asx10 = (v_.BN1)
      v_.Asx11 = (v_.BN2)
  
      v_.BM2 = calOp(v_.CN2, v_.numc1, v_.op11)
    }
  
    v_.csdb1 = String(v_.CN1) + String(v_.numc2)
    v_.csdb2 = calOp(v_.BM2, v_.numc3, v_.op10)
    v_.csdb2Type = isInt(v_.csdb2) ? 'Int' : 'Float';
  
    v_ = genQuestion5(v_, nameList);
  
    this.variable = v_;
  }
  
  
  
  
  
  
  
  
  