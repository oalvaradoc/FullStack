import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/provider/compra.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styles: []
})
export class CompraComponent implements OnInit {

  constructor(private service:CompraService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form != null)
      form.resetForm();
      this.service.formData = { idVentaPk:0,placaVenta:'',modeloPlacaVenta:'',nomCliente:'', idCliente:'',celCliente:'',dirCliente:'',mailCliente:''}
  }

  onSubmit(form:NgForm)
  {
    if(this.service.formData.idVentaPk==0)
      this.insertRecord(form)
      else
      this.updateRecord(form)
  }   

  insertRecord(form: NgForm)
  {
    this.service.PostCompra()
    .subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info('Enviado satisfactoriamente','Compra');
        this.service.refreshLista();
        
      },
      err=> {
        console.log(err)})
  }
  updateRecord(form: NgForm)
  {
    this.service.PutCompra()
    .subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info('Enviado satisfactoriamente','Compra');
        this.service.refreshLista();
      },
      err=> {console.log(err
        )})
  }
}
