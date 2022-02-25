import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  lista:any;
  constructor(private Pedido:PedidoService ) { }

  ngOnInit(): void {
   this.actualizar('pendiente')
  }
  borrar($event:any,item:any){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de cancelar pedido?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        item.estado='Cancelado';
        this.Pedido.edit(item.id,item);
        Swal.fire(
          'Cancelado!',
          'Su item fue cancelado.',
          'success'
        )
      }
    })
  }
  atender($event:any,item:any){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de atender pedido?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, atender!'
    }).then((result) => {
      if (result.isConfirmed) {
        item.estado='Proceso';
        this.Pedido.edit(item.id,item);
        Swal.fire(
          'Proceso!',
          'Su item esta en Proceso.',
          'success'
        )
      }
    })
  }
  actualizar(estado:string){
    this.Pedido.getAll(estado).snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map((item:any)=>{
          console.log("dato",item.payload.doc.data());
           return Object.assign(
            { 
              id:item.payload.doc.id,
              cliente:item.payload.doc.data().cliente,
              fecha:item.payload.doc.data().fecha,
              total:item.payload.doc.data().total,
              detalle:item.payload.doc.data().detalle,
              estado:item.payload.doc.data().estado,
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }

}
