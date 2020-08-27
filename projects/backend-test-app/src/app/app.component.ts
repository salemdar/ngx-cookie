import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { APP_ID, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CookieDict, CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'backend-test-app';
  cookieValue!: string;
  objectCookieValue?: object;
  hasCookieTrue!: boolean;
  hasCookieFalse!: boolean;
  allCookies: CookieDict = {};

  private key = 'myCookie';
  private objectKey = 'myObjectCookie';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string,
    private cookieService: CookieService) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=====${appId}`);
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      // only set cookies on server to check if SSR works. Turn off javascript to see if getter works on ssr also
      this.setCookies();
    }
    this.getCookies();
  }

  setCookies(): void {
    this.cookieService.put(this.key, 'myValue');
    this.cookieService.putObject(this.objectKey, {myKey: 'myValue'});
  }

  getCookies(): void {
    this.cookieValue = this.cookieService.get(this.key);
    this.objectCookieValue = this.cookieService.getObject(this.objectKey);
    this.hasCookieTrue = this.cookieService.hasKey(this.key) && this.cookieService.hasKey(this.objectKey);
    this.hasCookieFalse = this.cookieService.hasKey('nonExistentKey');
    this.allCookies = this.cookieService.getAll();
  }
}
