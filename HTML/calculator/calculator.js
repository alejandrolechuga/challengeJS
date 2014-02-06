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
  };

  calculator.prototype = {
    input: function (number) {

    },

    result :function () {
       switch (operator) {
        case "+" : 
          this.currentoperator = "+";
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