import {Component, OnInit} from '@angular/core';
import {EmailService} from '../shared/email/email.service';
import {EmailTemplate} from '../types/email-template';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
  providers: [EmailService]
})
export class SendMessageComponent implements OnInit {
  emailTemplate: EmailTemplate;
  emailForm: FormGroup;

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.emailTemplate = new EmailTemplate('', '', '', '');
    this.emailForm = new FormGroup({
      'name': new FormControl(this.emailTemplate.name, Validators.required),
      'email': new FormControl(this.emailTemplate.email, [Validators.required, Validators.email]),
      'subject': new FormControl(this.emailTemplate.subject),
      'text': new FormControl(this.emailTemplate.text, Validators.required)
    });
  }

  get name() {
    return this.emailForm.get('name');
  }

  get email() {
    return this.emailForm.get('email');
  }

  get text() {
    return this.emailForm.get('text');
  }

  sendMessage(): void {
    this.emailService.sendMessage(this.emailTemplate);
  }
}
