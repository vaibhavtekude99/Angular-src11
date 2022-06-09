import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelRequest } from 'src/app/pojo/TravelRequest';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';
@Injectable({
  providedIn: 'root'
})
export class TravelRequestDetailsService 
{
  baseURL: string = "http://localhost:8080/travelRequestDetails";
  //http://localhost:8080/travelRequestDetails/getallapprovedrequests

  employeeDetails:EmployeeDetails;
  constructor(private http: HttpClient) {
    this.employeeDetails = JSON.parse(sessionStorage.getItem('employee') || '{}');
   }


  getAllTravelRequestDetails(employeeId:number): Observable<TravelRequest[]>
   {
     console.log('inside getAllTravelRequest');
    return this.http.get<TravelRequest[]>(this.baseURL+'/getallrequestbyemployeeid/'+this.employeeDetails.employeeId);
   }
   getAllTravelRequests(): Observable<TravelRequest[]>
   {
     console.log('inside getAllTravelRequests of Project Manager');
     console.log(this.employeeDetails.employeeId);
    return this.http.get<TravelRequest[]>(this.baseURL+'/getallrequestbymanagerno/'+this.employeeDetails.employeeId);
   }

   getAllAprovedTravelRequest()
   {
    console.log('inside getAlApprovedTravelRequests of Project Manager');
    console.log(this.employeeDetails.employeeId);
   return this.http.get<TravelRequest[]>(this.baseURL+'/getallapprovedrequests');
   }


  addNewTravelRequest(travelRequest: TravelRequest): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + '/travelrequest', travelRequest);
  }

  getSingleTravelRequestDetailById(loginId: number): Observable<TravelRequest> {
    console.log(loginId);
    console.log("inside service get Single Employe by loginId method")
    return this.http.get<TravelRequest>(this.baseURL + '/travelrequest');
  }



}

