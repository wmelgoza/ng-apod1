import { Component, OnInit } from '@angular/core';

import { ApodService } from '../api/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) {}

  ngOnInit() {
    this.apodService.getApod().subscribe(
      (response:any)=>{
        console.log(response);
      }
    );
  }

}
