import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { ProductsService } from './products.service';
import { FbService } from './login.service';
import { DollarPipe } from './currencypipe';

@NgModule({
  declarations: [
    DollarPipe,
    LoginComponent,
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FbService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
