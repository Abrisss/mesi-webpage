import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmailService {

  // private url = 'https://api.mailgun.net/v3/sandbox489ebce6b1d84d53a8a30b98a04221a4.mailgun.org/messages';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private url2 =
    'https://api:key-f84da6698040eed2990e177d41666e91@api.mailgun.net/v3/sandbox489ebce6b1d84d53a8a30b98a04221a4.mailgun.org/messages';
  private receiverAddress = 'menyhartabraham@gmail.com';

  constructor(private httpClient: HttpClient) {
  }

  postMessage(senderName: string, senderAddress: string, senderText: string): Observable<any> {
    return this.httpClient.post(this.url2, this.createBody(senderName, senderAddress, senderText));
  }

  private createBody(senderName: string, senderAddress: string, senderText: string) {
    return {
      from: senderName + '<' + senderAddress + '>',
      to: this.receiverAddress,
      text: senderText
    };
  }

}
