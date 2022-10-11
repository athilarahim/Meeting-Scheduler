const Responsibilities ={
    SDE1: ["Scrum"],
    SDE2:  ["Scrum","Grooming"],
    SDE3:  ["Scrum","Grooming","Architecture_Design"],
    PO: ["Grooming","UX_Design"],
    HR: ["payroll-meeting","Fun_Activities"],
    TOPS: ["Scrum","Grooming","Security_Analysis"]
}

class Employee{
    constructor(empname,emprole){
        this.empname=empname;
        this.emprole=emprole;
        this.responsibility=Responsibilities[emprole]
    }
}


const emp1 = new Employee("Athila","SDE1");
const emp2 = new Employee("Sharron","SDE2");
const emp3 = new Employee("Aysha","SDE3");
const emp4 = new Employee("Azhar","PO");
const emp5 = new Employee("Babitha","PO");
const emp6 = new Employee("Akshay","HR");
const emp7 = new Employee("Sabari","TOPS");
const emp8 = new Employee("Hanan","SDE1");
const emp9 = new Employee("Nanda","SDE3");
const emp0 = new Employee("Sriram","TOPS");

var emplist = [];
emplist.push(emp1);
emplist.push(emp2);
emplist.push(emp3);
emplist.push(emp4);
emplist.push(emp5);
emplist.push(emp6);
emplist.push(emp7);
emplist.push(emp8);
emplist.push(emp9);
emplist.push(emp0);



var name1 = document.getElementById("emp1")

for(var i = 0; i < emplist.length; i++) {
    var opt = emplist[i].empname;
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    el.id = opt;
    name1.appendChild(el);
}


function SecondName(){ 
    document.getElementById("emp2").innerHTML=""
let sel = document.getElementById("emp1").value
var name2 = document.getElementById("emp2")

for(var i = 0; i < emplist.length; i++) {
    var opt = emplist[i].empname;
    if(opt==sel)   {
      console.log(sel);
      continue;
    } 
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    name2.appendChild(el);
}
}

function MeetingSchedule(){
    let name1 = document.getElementById("emp1").value;
    let name2 = document.getElementById("emp2").value;
    let meeting = document.getElementById("meeting").value;

    for(var i=0;i<emplist.length;i++){
        if(name1==emplist[i].empname){
            let meet1=emplist[i].responsibility;
            if(meet1.includes(meeting)){
                for(var j=0;j<emplist.length;j++){
                    if(name2==emplist[j].empname){
                        let meet2=emplist[j].responsibility;
                        if(meet2.includes(meeting)){
                            document.querySelector(".show").innerHTML="The meeting can be Scheduled"
                }
                else{
                    document.querySelector(".show").innerHTML= emplist[j].empname+ " cannot enter the meeting"
                }
                }}
    }
    else{
        document.querySelector(".show").innerHTML= emplist[i].empname+ " cannot enter the meeting"
    }

}}}


