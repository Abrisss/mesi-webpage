import {Component, OnInit} from '@angular/core';
import {EmailService} from '../shared/email/email.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
  providers: [EmailService]
})
export class SendMessageComponent implements OnInit {

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
  }

  postMessage(): void {
    this.emailService.postMessage('Mesi', 'mesi0628@gmail.com', 'Love you :)').subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
