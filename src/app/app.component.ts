import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authServise: AuthService) {}

  ngOnInit() {
    this.authServise.autoAuthUser();
  }
}
