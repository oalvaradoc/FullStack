import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ComprasComponent } from './compras/compras.component';
import { CompraComponent } from './compras/compra/compra.component';
import { CompraListComponent } from './compras/compra-list/compra-list.component';
import { CompraService } from './provider/compra.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    CompraComponent,
    CompraListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
