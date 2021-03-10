import { HttpClient } from "@angular/common/http";
import { Component,OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { data, FormControl } from "./form-data";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None, // disable ViewEncapsulation
})
export class AppComponent implements OnInit {

  title = "primeng";
  rows = [
    {
      No: " 1",
      Name: "Hydrogen",
      Weight: "1.0079",
      Symbol: "H"
    },
    {
      No: "2",
      Name: "Helium",
      Weight: "4.0026",
      Symbol: "He"
    },
    {
      No: "3",
      Name: "Lithium",
      Weight: "6.941",
      Symbol: "Li"
    },
    {
      No: "4",
      Name: "Beryllium",
      Weight: "9.0122",
      Symbol: "Be"
    }
  ];

  cols = [
    // { field: 'vin', header: 'Vin' },
    { field: "id", header: "ID" },
    { field: "email", header: "Email" },
    { field: "first_name", header: "FIRST NAME" },
    { field: "last_name", header: "last name" },
    { field: "avatar", header: "pic" }

  ];
  selectedRows: any[];
  constructor(private http:HttpClient){}
  ngOnInit() {
    this.http.get('https://reqres.in/api/users?page=1').subscribe(res=>{ 
      this.rows=res.data})
  
  }

  selectRow(checkValue) {
    if (checkValue) {
      this.selectedRows = this.cars.filter(value => value.year < 2000);
    } else {
      this.selectedRows = [];
    }
  }
}
