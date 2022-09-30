class vehicle
{
 constructor(make,model,year)
 {
     this.make = make;
     this.model = model;
     this.year = year;
 }
     Infortmation()
     {
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
     }
 
}

let MyCar = new vehicle("Alfa","Romeo","2002");

MyCar.Infortmation();

class Cars extends vehicle{
    constructor(make,model,year,doors)
    {
        super(make,model,year);
        this.doors = doors;
    }

    Infortmation()
    {
        super.Infortmation();
        console.log(this.doors);
    }

}

let car = new Cars("Alfa","Romeo","2992","3");

car.Infortmation();
