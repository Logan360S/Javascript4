
class NumberList {
    constructor (numberArr) {
        this.numberArr = numberArr;
    }
    

    #validate (numberArr) {
        for (const i of numberArr) {
            if (isNaN(i)) {
                return false;
            }
        }
        return true;
    }

    isValid () {
        return this.#validate(this.numberArr);
    }

    mean () {
        let sum = this.numberArr.reduce(function (previousValue, currentValue) {
            return parseFloat(previousValue, 10) + parseFloat(currentValue, 10);
        }, 0);
        return sum / this.numberArr.length;
    }

    

    variance () {
        let average = this.mean();

        let diff = this.numberArr.reduce(function(previousValue, currentValue) {
            return parseFloat(previousValue,10) + ((parseFloat(currentValue,10)-average) ** 2);

        },0);
        
        return diff;
    }

    squareRoot () {
        return Math.sqrt(this.variance());
    }

}

let buttonArr = new Array();

buttonArr = document.getElementsByClassName("button");

for (const button of buttonArr) {
    let inputString = "";
    button.addEventListener('click', function () {
        let numberArr = document.getElementById("inputField").value.split(" ");
        
        let numList = new NumberList (numberArr);
        
        if (numList.isValid()) {
            if (button.id==="mean") {
                output(numList.mean());

            } else if (button.id==="variance") {
                output(numList.variance());

            } else if (button.id==="standardDev") {
                output(numList.squareRoot());
            }
            
        } else {
            output("Please provide only numbers", true);
        }


    })
}


function output (text, error) {
    const output = document.getElementById("output");

    if (error) {
        output.style.color = "red";
    }
    
    output.innerHTML= text.toLocaleString(undefined, {minimumFractionDigits:2});
}
