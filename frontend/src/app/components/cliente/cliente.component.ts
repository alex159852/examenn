import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  lista:Cliente[] = [];
  constructor(private Cliente:ClienteService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Cliente.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              nombre:item.payload.doc.data().nombre,
              apellidos:item.payload.doc.data().apellidos,
              ci:item.payload.doc.data().ci,
              direccion:item.payload.doc.data().direccion,
              telefono:item.payload.doc.data().telefono

            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Cliente){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de Borrar?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Cliente.delete((String)(prod.key));
        Swal.fire(
          'Borrado!',
          'Su item fue borrardo.',
          'success'
        )
      }
    })
  }
  buscar(){
    this.Cliente.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              nombre:item.payload.doc.data().nombre,
              apellidos:item.payload.doc.data().apellidos,
              ci:item.payload.doc.data().ci,
              direccion:item.payload.doc.data().direccion,
              telefono:item.payload.doc.data().telefono
            }
          );

        })
      });
  }
 
}
