class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getName() {
    console.log(this.name.toUpperCase());
    }
    getSalary() {
    console.log(this.salary);
    }
    getHireDate() {
    console.log(this.hireDate);
    }
}
class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log("Hello, my name is " + this.name + " and I was hired on " + this.hireDate + ". My salary is, " + this.salary + " and I am in charge of " + this.descriptionOfJob + ".")

    }
}

let Jacob = new Manager("Jacob", 60000, "May 5, 2021", "running the store");

Jacob.jobDescription();

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience() {
        console.log("Hello, my name is " + this.name + " I was hired on " + this.hireDate + ". My salary is, " + this.salary + " and I have " + this.experience + " years of experience!")

    }
}

let Danielle = new Designer("Danielle", 50000, "February 24, 2022", 23);

Danielle.yearsExperience();

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degree) {
        super(name, salary, hireDate);
        this.degree = degree;
    }
    degreeCompleted() {
        console.log("Hello, my name is " + this.name + " and I was hired on " + this.hireDate + ". My salary is, " + this.salary + " and I completed my " + this.degree + ".")
    }
}

let Isabella = new SalesAssociate("Isabella", 30000, "December 5, 2021", "Business degree");

Isabella.degreeCompleted();