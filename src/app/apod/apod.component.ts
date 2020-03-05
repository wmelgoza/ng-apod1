import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  constructor(
    private apodService: ApodService,
    private router: ActivatedRoute
    ) {}

  apod:Apod;
  date:string;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.getApod(params['date']);
    });
    }

    getApod(date:string): void{

      if(!date){
        date = new Date().toISOString().slice(0,10);
      }

      this.apodService.getApod(date).subscribe(
        (response:any)=>{
          this.apod = response;
          this.date = this.randomDate(new Date(1995,5,16), new Date());
          console.log(this.date);
        }
      );

    }

    randomDate(start, end): string{
      let date = new Date(
        start.getTime() + Math.random() *
          (end.getTime() - start.getTime())
      );

      return new Date(date).toISOString().slice(0,10);
    }

  }
