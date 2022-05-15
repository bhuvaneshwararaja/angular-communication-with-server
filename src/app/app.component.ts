import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { RentalListService } from './rental-list.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops$;
  rentalList:any = [];

  constructor(private movieService: MovieService, 
    private rentalListService: RentalListService) {
  }

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.updateRentalList()
  }


  updateRentalList(){
    this.rentalListService.getRentalList().subscribe(res => {
      this.rentalList = res
    })
  }
  addToRentalList(flop) {
    flop.id = undefined
    this.rentalListService.addRentalMovies(flop).subscribe(res => {
        this.updateRentalList()
    })  
   }

   deleteRentalItem(movieId){
        this.rentalListService.deleteRentalItem(movieId).subscribe(res =>{
            this.updateRentalList()
        })
   }

}
