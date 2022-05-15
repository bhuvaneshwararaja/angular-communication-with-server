import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {

  constructor(private http: HttpClient) {

  }

  addRentalMovies(flop){
    return this.http.post('http://localhost:3000/rentalList',flop)
  }
  getRentalList(){
    return this.http.get('http://localhost:3000/rentalList')
  }

  deleteRentalItem(movieId){
    return this.http.delete('http://localhost:3000/rentalList/'+movieId)
  }

}