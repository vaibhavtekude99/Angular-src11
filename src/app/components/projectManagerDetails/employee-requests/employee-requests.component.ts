import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';
import { TravelRequest } from 'src/app/pojo/TravelRequest';
import { TravelRequestDetailsService } from 'src/app/services/travelRequestDetailsService/travel-request-details.service';

@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.component.html',
  styleUrls: ['./employee-requests.component.css']
})
export class EmployeeRequestsComponent implements OnInit {

  // employeeDetails : EmployeeDetails =  new EmployeeDetails();
  // travelRequest:TravelRequest=new TravelRequest();
  constructor(private travelRequestService:TravelRequestDetailsService) { }

  ngOnInit(): void {
  // this.employeeDetails = JSON.parse(sessionStorage.getItem('employee') || '{}');

    this.getAll();
  }
 allTravelRequests: TravelRequest []=[];

 getAll()
 {
  this.travelRequestService.getAllTravelRequests().subscribe(data=>{
    this.allTravelRequests=data;
    console.log(this.allTravelRequests);
  });
 }




}
