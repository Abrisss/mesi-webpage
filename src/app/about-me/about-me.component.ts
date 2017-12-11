import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {

  constructor(private metaService: Meta, private titleService: Title) {
  }

  ngOnInit() {
    this.metaService.addTag({property: 'description', content: 'Bemutatkozás'});
    this.titleService.setTitle('Bemutatkozás');
  }

  ngOnDestroy() {
    this.metaService.removeTag('property=\'description\'');
  }

}
