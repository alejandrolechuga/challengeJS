/**
* @todo Basic operations
* @todo Display results
*/
(function(window, document, undefined) {
  "use strict";

  var Calculator = function () {
    this.firstvalue = 0;
    this.secondvalue = 0;
    this.currentoperator;
    this.performing = false;
  };

  Calculator.prototype = {
    input: function (number) {
      if (this.performing) {
        this.secondavalue = number;
      } else {
        this.firstvalue = number;
        this.performing = true;
      }
    },

    clear: function () {
      this.firstvalue = 0;
      this.secondavalue = 0;
    },

    result: function () {
      var result = 0;
       switch (this.currentoperator) {
        case "+" : 
          this.currentoperator = "+";
          result = this.firstvalue + this.secondavalue;
        break;
        case "-" :
          this.currentoperator = "-";
          result = this.firstvalue - this.secondavalue;
        break;
        case "/" :
          this.currentoperator = "/";
          result = this.firstvalue / this.secondavalue;
        break;
        case "*" :
          this.currentoperator = "*";
          result = this.firstvalue * this.secondavalue;
        break;
      }
      return result;
    },

    display : function (fncallback) {
      
    },

    operation : function (operator) {
      this.currentoperator = operator;
    }
  };
  var calc = new Calculator();
  calc.input(0);
  calc.operation("*");
  calc.input(2342);
  console.log("RESULT", calc.result());
  calc.clear();
}(this, document));