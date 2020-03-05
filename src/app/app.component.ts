import { Component } from '@angular/core';

import { ApodService } from '../api/apod.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NASA APOD';
}
