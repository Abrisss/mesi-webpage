import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class EmailService {

  private url = 'https://api.elasticemail.com/v2/email/send';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  private receiverAddress = 'menyhartabraham@gmail.com';
  private payload = new FormData();


  constructor(private httpClient: HttpClient) {
  }

  postMessage(senderName: string, senderAddress: string, senderText: string): Observable<any> {
    // return this.httpClient.get(this.url,
    //   this.createBody(senderName, senderAddress, senderText), {
    //     headers: this.createHeader()
    //   });
    return this.httpClient.get(this.url,
      {
        params: this.createParams(),
      });
  }

  private createBody(senderName: string, senderAddress: string, senderText: string): URLSearchParams {
    // return this.payload.append('apikey', '92b468f2-f05f-4876-a3cc-39245de05a43');
    // return {apikey: '92b468f2-f05f-4876-a3cc-39245de05a43'};
    //   fromName: 'senderName',
    //   from: 'me',
    //   msgTo: this.receiverAddress,
    //   bodyText: senderText,
    //   subject: 'mizu',
    //   isTransactional: true
    // };
    const body = new URLSearchParams();
    body.set('apikey', '92b468f2-f05f-4876-a3cc-39245de05a43');
    return body;
  }

  private createParams(): HttpParams {
    let httpParams = new HttpParams();
    // httpParams.append('Authorization', this.key);
    httpParams = httpParams.append('apikey', '92b468f2-f05f-4876-a3cc-39245de05a43');
    httpParams = httpParams.append('from', 'menyhartemese@gmail.com');
    httpParams = httpParams.append('fromName', 'Mesike');
    httpParams = httpParams.append('msgTo', this.receiverAddress);
    httpParams = httpParams.append('subject', 'megeszel');
    httpParams = httpParams.append('bodyText', 'Miert nem nezzuk meg az eget?');
    httpParams = httpParams.append('bodyHtml', 'Miert nem nezzuk meg az eget?');
    httpParams = httpParams.append('template', 'second');
    // httpParams = httpParams.append('Access-Control-Allow-Origin', 'http://localhost:8200');
    return httpParams;
  }


}
