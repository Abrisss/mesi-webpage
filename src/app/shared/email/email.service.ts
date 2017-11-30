import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EmailService {

  private url = 'https://api.mailgun.net/v3/sandbox489ebce6b1d84d53a8a30b98a04221a4.mailgun.org/messages';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private receiverAddress = 'menyhartabraham@gmail.com';


  constructor(private httpClient: HttpClient) {
  }

  postMessage(senderName: string, senderAddress: string, senderText: string): Observable<any> {
    return this.httpClient.post(this.proxyUrl + this.url2,
      this.createBody(senderName, senderAddress, senderText), {
        headers: this.createHeader()
      }
    );
  }

  private createBody(senderName: string, senderAddress: string, senderText: string) {
    return {
      from: senderName + '<' + senderAddress + '>',
      to: this.receiverAddress,
      text: senderText
    };
  }

  private createHeader(): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    // httpHeaders.append('Authorization', this.key);
    httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8200');
    return httpHeaders;
  }


}
