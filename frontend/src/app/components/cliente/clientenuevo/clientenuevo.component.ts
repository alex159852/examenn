import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import {  ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-clientenuevo',
  templateUrl: './clientenuevo.component.html',
  styleUrls: ['./clientenuevo.component.css']
})
export class ClientenuevoComponent implements OnInit {
  item:Cliente=new Cliente();
  seccion='cliente';
  edit:boolean=false;
  constructor(private dbProd:ClienteService,
      private router:Router,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params.id){
        this.edit=true;
        this.item.key=params.id
        this.dbProd.getItem(params.id).snapshotChanges().subscribe(a=>{
          console.log(a.payload.data());
          let prod:any;
          prod=a.payload.data();
          this.item= Object.assign(
            { 
              key:a.payload.id,
              nombre:prod.nombre,
              apellidos:prod.apellidos,
              ci:prod.ci,
              direccion:prod.direccion,
              telefono:prod.telefono,
            }
          );
        });
        //editar producto
      }else
      {
        this.edit=false;
        console.log("nuevo!!!!")
        //nuevo producto
      }
    });
  }
  enviar(){
    if(this.edit){
      this.dbProd.edit((String)(this.item.key),this.item);
    }else{

      this.dbProd.add(this.item).then(a=>{
        console.log("datos server",a);
      });
    }
    Swal.fire({ title: 'Datos guardados',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {}
        this.router.navigate(['/'+this.seccion]);
    });
    
  } 
  salir(){}

}
