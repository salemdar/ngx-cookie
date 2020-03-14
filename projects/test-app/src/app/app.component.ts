import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  cookieValue: any;
  objectCookieValue: any;
  hasCookieTrue: boolean;
  hasCookieFalse: boolean;

  private key = 'myCookie';
  private objectKey = 'myObjectCookie';

  constructor(private cookieService: CookieService) {}

  setCookies() {
    this.cookieService.put(this.key, 'myValue');
    this.cookieService.putObject(this.objectKey, {myKey: 'myValue'});
  }

  getCookies() {
    this.cookieValue = this.cookieService.get(this.key);
    this.objectCookieValue = this.cookieService.getObject(this.objectKey);
    this.hasCookieTrue = this.cookieService.hasKey(this.key) && this.cookieService.hasKey(this.objectKey);
    this.hasCookieFalse = this.cookieService.hasKey('nonExistentKey');
  }

}
