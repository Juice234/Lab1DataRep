class BMI
{
    // constructor used to initilize Data in the class
    constructor(height,weight)
    {
     this.height = height;
     this.weight = weight;   
    };
    //Formula to calculate the bmi
    calculateBMI()
    {
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//class
let myBMI = new BMI(2,70);

console.log(myBMI.calculateBMI());
