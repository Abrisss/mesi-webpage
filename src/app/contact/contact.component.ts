import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  lat = 47.505983;
  lng = 19.070909;
  zoom = 15;
  title = 'Rózsa pszichológiai központ';

  constructor(private metaService: Meta) {
  }

  ngOnInit() {
    this.metaService.addTag({property: 'description', content: 'Elérhetőség'});
  }

  ngOnDestroy() {
    this.metaService.removeTag('property=\'description\'');
  }

}
