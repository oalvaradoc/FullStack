import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/provider/compra.service';
import { Compra } from 'src/app/provider/compra.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styles: []
})
export class CompraListComponent implements OnInit {

  constructor(private service:CompraService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshLista();
  }

  poblarFormulario(pd:Compra)
  {
    this.service.formData = Object.assign({},pd);
  }

  onDelete(idVentaPk)
  {
    if (confirm('¿ Esta seguro de eliminar este registro ?')) {
    this.service.DeleteCompra(idVentaPk)
    .subscribe(res=>
      {
        this.service.refreshLista();
        this.toastr.warning('Eliminado con Exito','Compra');
      },
        err=>{console.log(err)
      }
      )
    }
  }


}
