import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 47.505983;
  lng = 19.070909;
  zoom = 15;
  title = 'Rózsa pszichológiai központ';

  constructor() {
  }

  ngOnInit() {
  }

}
