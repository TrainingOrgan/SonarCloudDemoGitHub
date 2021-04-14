import { Component, OnInit } from '@angular/core';
import { ISuperhuman } from '../models/superhuman';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  firstDisplay: ISuperhuman= {'shumanId': 0, 'name': '', 'superpower': '', 'bounty': 0};
  secondDisplay: ISuperhuman[];
  thirdDisplay = '';
  singularSearch: number;
  singularInsert: ISuperhuman= {'shumanId': 0, 'name': '', 'superpower': '', 'bounty': 0};

  constructor(private myAjax: AjaxService) { }
  

  ngOnInit() {
  }

  firstButton() {
    console.log('first button clicked');

    this.myAjax.firstRequest(this.singularSearch).subscribe(
      data => {
        this.firstDisplay =  data;
        console.log(data);
		
        // console.log(data);//sonar 0
		// console.log(data);//sonar 1
		// console.log(data);//sonar 2
		// console.log(data);//sonar 3 
      }
    );
  }

  secondButton() {
    console.log('second button clicked');

    this.myAjax.secondRequest().subscribe(
      data => {
        console.log(data);

        this.secondDisplay = data;
		
        // console.log(data);//sonar 0
		// console.log(data);//sonar 1
		// console.log(data);//sonar 2
		// console.log(data);//sonar 3 
      }
    );
  }

  thirdButton() {
    console.log('third button clicked');


    this.myAjax.thirdRequest(this.singularInsert).subscribe(
      data => {
        // console.log(data);//sonar 0
		// console.log(data);//sonar 1
		// console.log(data);//sonar 2
		// console.log(data);//sonar 3 

        const ourField = 'message';
        this.thirdDisplay =data[ourField];
      }
    );
  }

}
