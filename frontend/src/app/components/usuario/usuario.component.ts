import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  lista:Usuario[] = [];
  constructor(private Usuario:UsuarioService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Usuario.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              usuario:item.payload.doc.data().usuario,
              nombre:item.payload.doc.data().nombre,
              apellidos:item.payload.doc.data().apellidos,
              correo:item.payload.doc.data().correo,
              telefono:item.payload.doc.data().telefono
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Usuario){
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
        this.Usuario.delete((String)(prod.key));
        Swal.fire(
          'Borrado!',
          'Su item fue borrardo.',
          'success'
        )
      }
    })
  }
  buscar(){
    this.Usuario.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              usuario:item.payload.doc.data().usuario,
              nombre:item.payload.doc.data().nombre,
              apellidos:item.payload.doc.data().apellidos,
              correo:item.payload.doc.data().correo,
              telefono:item.payload.doc.data().telefono
            }
          );

        })
      });
  }

}
