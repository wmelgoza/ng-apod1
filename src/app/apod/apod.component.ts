import { Component, OnInit } from '@angular/core';

import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) {}

  apod:Apod;

  ngOnInit() {
    this.getApod();
  }

  getApod(): void{
    let date = new Date().toISOString().slice(0,10);

    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;
      }
    );

  }
}
