const Responsibilities ={
    "SDE1": "Scrum",
    "SDE2":  ["Scrum","Grooming"],
    "SDE3":  ["Scrum","Grooming","Architecture_Design"],
    "PO": ["Grooming","UX_Design"],
    "HR": ["payroll-meeting","Fun_Activities"],
    "TOPS": ["Scrum","Grooming","Security_Analysis"]
}

class Employee{
    constructor(empname,emprole){
        this.empname=empname;
        this.emprole=emprole;
    }
}