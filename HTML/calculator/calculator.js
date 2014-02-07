/**
* @todo Basic operations
* @todo Display results
*/
(function(window, document, undefined) {
  "use strict";

  var calculator = function () {
    this.firstvalue = 0;
    this.secondvalue = 0;
    this.currentoperator;
    this.performing = false;
  };

  calculator.prototype = {
    input: function (number) {
      if (this.performing) {
        this.secondavalue = number;
      } else {
        this.firstvalue = number;
      }
    },
    clear: function () {

    },
    result :function () {
       switch (operator) {
        case "+" : 
        break;
        case "-" :
        break;
        case "/" :
        break;
        case "*" :
        break;
      }
      return currentvalue;
    },

    operation : function (operator) {
      this.currentoperator = operator;
    }
  };
  calculator.input(0);
  calculator.operation("+");
  calculator.input(2342);
  calculator.result();
}(this, document));