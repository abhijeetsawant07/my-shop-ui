import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SharedModule } from './modules/shared/shared.module';
import { WipComponent } from './wip/wip.component';
import { LayoutModule } from '@angular/cdk/layout';

//import { InMemOrderService } from './services/in-memory-order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    SharedModule,
    LayoutModule
    //HttpClientInMemoryWebApiModule.forRoot(InMemOrderService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
