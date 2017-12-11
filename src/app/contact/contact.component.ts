import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private metaService: Meta) {
  }

  ngOnInit() {
    this.metaService.addTag({property: 'description', content: 'Elérhetőség'});
  }

  ngOnDestroy() {
    this.metaService.removeTag('property=\'description\'');
  }

}
