//Calculate Tip

//class definition
class TipCalc {

    constructor() {
        this.billAmt = 0;
        this.tipPercent = 0;
        this.numOfPeople = 0;
    }


    calculateTip() {
        //get inputs when the object is created and button is clicked to execute calculateTip method
        this.billAmt = document.getElementById("bill").value;
        this.tipPercent = document.getElementById("tip").value;
        this.numOfPeople = document.getElementById("people").value;

        //validate inputs (Basically exception handling)
        if (this.billAmt === 0 || this.tipPercent == 0 || this.numOfPeople === 0) {
            alert("Please enter values");
            return;
        }

        //Calculate tip
        var total = (this.billAmt * this.tipPercent) / (this.numOfPeople * 100);

        var totalPerPerson = this.billAmt / this.numOfPeople + total;
        //round to two decimal places
        //next line allows us to always have two digits after decimal point
        total = total.toFixed(2);
        totalPerPerson = totalPerPerson.toFixed(2);
        //Display the tip
        document.getElementById("tipPerPerson").innerHTML = "$" + total;
        document.getElementById("totalTip").innerHTML = "$" + totalPerPerson;
    }

}

//object of class
let ob = new TipCalc();

//click to call function
document.querySelector('#calculate').addEventListener('click', ob.calculateTip);

