class RomanConverter {
  constructor(num) {
    this.num = num;
    this.numeral = "";
  }

  convert() {
    if(this.num >= 900) {
      this.calculate(1000, 900, "C", "M");
    }
    else if(this.num >= 400) {
      this.calculate(500, 400, "C", "D");
    }

    else if(this.num >= 90) {
      this.calculate(100, 90, "X", "C");
    }

    else if(this.num >= 40) {
      this.calculate(50, 40, "X", "L");
    }

    else if(this.num > 8) {
      this.calculate(10, 9, "I", "X");
    }

    else if(this.num > 3) {
      this.calculate(5, 4, "I", "V");
    }

    else if(this.num > 0) {
      this.numeral += "I";
      this.num -= 1;
    }

    if(this.num > 0) {
      this.convert()
    }
    return this.numeral;
  }

  calculate(sub1, sub2, numeral1, numeral2) {
    if(this.num < sub1) {
      this.numeral += numeral1;
      this.num -= sub2;
    } else {
      this.num -= sub1;
    }
    this.numeral += numeral2;
  }
}

function toRoman(num) {
  let romanConverter =  new RomanConverter(num)
  return romanConverter.convert();
}

module.exports = toRoman
