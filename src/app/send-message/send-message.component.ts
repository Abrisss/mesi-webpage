import {Component, OnInit} from '@angular/core';
import {EmailService} from '../shared/email/email.service';
import {EmailTemplate} from '../types/email-template';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
  providers: [EmailService]
})
export class SendMessageComponent implements OnInit {
  private emailTemplate: EmailTemplate;

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.emailTemplate = new EmailTemplate('', '', '', '');
  }


  sendMessage(): void {
    console.log(this.emailTemplate);
    this.emailService.sendMessage(this.emailTemplate);
  }
}
