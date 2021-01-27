  import { Component, NgZone, ɵangular_packages_core_core_bj } from '@angular/core';  
  import { element } from '@angular/core/src/render3';
  import { Employees } from './employees.interface';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    employees  :Employees[];
    chosensort:string ="name[a-z]";
    chosenMod: string = "";
    chosendept:string ="All";
    public ProductDetails: object = []; 
    uniquedepartments=[]; 
    constructor( )
    {
      
    this.employees  = [
      {
        name: "manasa",
        age: 40,
        email: "one@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "arvind",
        age: 10,
        email: "Two@gmail.com",
        departments: ["Computer"],
      },
    
      {
        name: "jyothi",
        age: 10,
        email: "Three@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "chaitanya",
        age: 60,
        email: "Four@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "employee",
        age: 70,
        email: "Five@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "employee",
        age: 70,
        email: "Six@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
    
  }

    reload()
    {
     
      this.ProductDetails= this.employees.sort((a,b) => a.name.localeCompare(b.name));
      this.uniquedepartments=[]
       for (const i of this.employees ) 
        this.uniquedepartments.push(...i.departments)
      this.uniquedepartments = this.uniquedepartments.filter((item, i, ar) => ar.indexOf(item) === i);
      if(!(this.uniquedepartments.includes("All")))
        this.uniquedepartments.push("All")
      
    }
    Search(){
      console.log(this.chosendept)
      console.log(this.chosenMod)
      if(!(this.chosenMod))
       {
       if(this.chosendept!="All")
      {
        let obj=[]; 
        this.employees.filter((m)=>
        {
          for (const i of m.departments) {
            if(this.chosendept===i)
                obj.push(m) 
          }
        })
        obj=obj.sort((a,b) => a.name.localeCompare(b.name));
      this.ProductDetails=obj;
     }
     return this.ProductDetails
      }
      

      else
      {
        console.log("yes")
        let obj=[]
        if(this.chosendept=="All")
      {
        console.log("yeah")

      for (const i of this.employees) {

        if(this.chosenMod.toLowerCase()==i.name)
        {
          obj.push(i)
        }
      }
      obj=obj.sort((a,b) => a.name.localeCompare(b.name));

        this.ProductDetails=obj
        }
    
      else
      {
        let obj=[];
        this.employees.filter((m)=>
        {
          for (const i of m.departments) {
            if(this.chosendept===i && this.chosenMod.toLowerCase()==m.name)
                obj.push(m)
             
          }
        })
        obj=obj.sort((a,b) => a.name.localeCompare(b.name));

    this.ProductDetails=obj;
    }
      }
      return this.ProductDetails
      }
      


      sort()
      {
        switch(this.chosensort)
        {
          case "name[a-z]":
          {
            let obj=this.employees.sort((a,b) => a.name.localeCompare(b.name));
 
            console.log(obj);
            this.ProductDetails =obj
            return this.ProductDetails
          }
          case  "name[z-a]":
            {
              let obj=this.employees.sort((a,b) => b.name.localeCompare(a.name));
 
            console.log(obj);
            this.ProductDetails =obj
            return this.ProductDetails 
            }
            case  "Age":
            {
              let obj=this.employees.sort((a,b) => a.age-b.age);
 
            console.log(obj);
            this.ProductDetails =obj
            return this.ProductDetails 
            }
            case  "Email":
            {
              let obj=this.employees.sort((a,b) => a.email.localeCompare(b.email));
 
            console.log(obj);
            this.ProductDetails =obj
            return this.ProductDetails 
            }
        }
      }
  }

