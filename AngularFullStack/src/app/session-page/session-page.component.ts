import { Component, OnInit } from '@angular/core';
import { ISuperhuman } from '../models/superhuman';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.css']
})
export class SessionPageComponent implements OnInit {

  firstDisplay = '';
  secondDisplay = '';
  thirdDisplay = '';

  constructor(private myAjax: AjaxService) { }

  ngOnInit() {
  }

  firstButton() {
    console.log('first button clicked');

    this.myAjax.infoRequest().subscribe(
      data => {
        console.log(data);

        const ourField = 'username';
        this.firstDisplay = this.firstDisplay + ' ' + data[ourField];
      }
    );
  }

  secondButton() {
    console.log('second button clicked');

    this.myAjax.loginRequest().subscribe(
      data => {
        console.log(data);

        const ourField = 'message';
        this.secondDisplay = this.secondDisplay + ' ' + data[ourField];
      }
    );
  }

  thirdButton() {
    console.log('third button clicked');

    this.myAjax.logoutRequest().subscribe(
      data => {
        console.log(data);

        const ourField = 'message';
        this.thirdDisplay = this.thirdDisplay + ' ' + data[ourField];
      }
    );
  }

}
