// Sparta Javascript Prompt Calculator

// Added a prompt to ask the user to choose between advanced and basic calculator


var BasicCalculator = function(num1, num2) {
  this.num1 = parseFloat(prompt("Enter first value:"));
  this.num2 = parseFloat(prompt("Enter second value:"));
  this.op = function() {
    var operation = prompt("Choose an operation to perform. (+), (-), (*), (/)")
    switch (operation) {
      case "+":
        this.add();
        break;
      case "-":
        this.subtract();
        break;
      case "*":
        this.multiply();
        break;
      case "/":
        this.divide();
        break;
      default:
    }
  }
  this.add = function() {
    result = this.num1 + this.num2;
    console.log(result);
    alert("The sum of " + this.num1 + " and " + this.num2 + " is " + result);
  }
  this.subtract = function() {
    result = this.num1 - this.num2;
    console.log(result);
    alert("The difference of " + this.num1 + " and " + this.num2 + " is " + result);
  }
  this.multiply = function() {
    result = this.num1 * this.num2;
    console.log(result);
    alert("The product of " + this.num1 + " and " + this.num2 + " is " + result);
  }

  this.divide = function() {
    if (this.num2 == 0) {
      var another = prompt("Can not divide a number by 0. Please select another number");
      this.num2 = another;
      result = this.num1 / this.num2;
      console.log(result);
      alert("The quotient of " + this.num1 + " and " + this.num2 + " is " + result);
    } else {
      result = this.num1 / this.num2;
      console.log(result);
      alert("The quotient of " + this.num1 + " and " + this.num2 + " is " + result);
    }
  }
}



//Basic calculator (B)

//Add
//multiply
//divide
//subtract

var AdvancedCalculator = function(num1, num2) {
  this.num1 = parseFloat(prompt("Enter first value:"));
  this.num2 = parseFloat(prompt("Enter second value:"));
  this.op = function() {
     var operation = prompt("Choose an operation to perform. (m)odulus, (p)ower, (s)quare root, (b)MI");
    // var promptChange = function() {
    //   if (operation == "b") {
    //     this.num1 = parseFloat(prompt("Enter your weight (kg):"));
    //     this.num2 = parseFloat(prompt("Enter your height (meters):"));
    //   } else {
    //     this.num1 = parseFloat(prompt("Enter first value:"));
    //     this.num2 = parseFloat(prompt("Enter second value:"));
    //   }
    // }
    // promptChange();
    switch (operation) {
      case "m":
        this.modulus();
        break;
      case "p":
        this.power();
        break;
      case "s":
        this.sqrRoot();
        break;
      case "b":
        this.bmi();
        break;
      default:
        operation = alert("Please choose a valid operation. (m)odulus, (p)ower, (s)quare root, (b)MI ")
    }
  }

  this.modulus = function() {
    if (this.num2 == 0) {
      var another = prompt("Can not divide a number by 0. Please select another number");
      this.num2 = another;
      result = this.num1 % this.num2;
      console.log(result);
      alert("The remainder of " + this.num1 + " divided by " + this.num2 + " is " + result);
    } else {
      result = this.num1 % this.num2;
      console.log(result);
      alert("The remainder of " + this.num1 + " divided by " + this.num2 + " is " + result);
    }
  }

  this.power = function() {
    result = Math.pow(this.num1, this.num2);
    console.log(result);
    alert("The result of " + this.num1 + " raised to " + this.num2 + " is " + result);
  }
  this.sqrRoot = function() {
    result1 = Math.sqrt(this.num1);
    result2 = Math.sqrt(this.num2);
    console.log(result1, result2);
    alert("The square root of " + this.num1 + " is " + result1 + " & the square root of " + this.num2 + " is " + result2);
  }
  this.bmi = function() {
    result = parseFloat((this.num1 / (this.num2 * this.num2)));
    result = result.toFixed(2);
    console.log(result);
    alert("Your BMI is " + result);
  }


}


// Advanced Calculator (A)
//Modulus
//Power
//Sqr root
//BMI

var whichCalculator = prompt("Which calculator would you like to use?  (a) for advanced and (b) for basic ");




if(whichCalculator == "a"){
  var ac = new AdvancedCalculator();
  ac.op();
  document.getElementById('title').innerHTML = "Advanced Calculator";
}
else if (whichCalculator == "b") {
  var bc = new BasicCalculator();
    bc.op();
    document.getElementById('title').innerHTML = "Basic Calculator"
}
else{
  prompt("Your choice is invalid. Please choose one of the following (a) for advanced and (b) for basic ");
}
