import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { CookieBackendModule } from 'ngx-cookie-backend';
import { AppComponent } from './app.component';

import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CookieBackendModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
