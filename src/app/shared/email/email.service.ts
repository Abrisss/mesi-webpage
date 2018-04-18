import {Injectable} from '@angular/core';
import {EmailTemplate} from '../../types/email-template';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendMessage(email: EmailTemplate): void {
    this.http.post('api:sendEmail', email);
  }
}
