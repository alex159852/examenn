import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
import { PedidoComponent } from "src/app/components/pedido/pedido.component";
import { MotosComponent } from "src/app/components/motos/motos.component";
import {MotonuevaComponent} from "src/app/components/motos/motonueva/motonueva.component";
import { ClienteComponent } from "src/app/components/cliente/cliente.component";
import { ClientenuevoComponent } from "src/app/components/cliente/clientenuevo/clientenuevo.component";
import { UsuarioComponent } from "src/app/components/usuario/usuario.component";
import { UsuarionuevoComponent } from "src/app/components/usuario/usuarionuevo/usuarionuevo.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'producto',
        component:ProductoComponent
    },

    {
        path:'productoform',
        component:ProductonuevoComponent
    },
    {
        path:'productoform/:id',
        component:ProductonuevoComponent
    },
    {
        path:'pedidos',
        component:PedidoComponent
    },
    {
        path:'motos',
        component:MotosComponent
    },{
        path:'motosform',
        component:MotonuevaComponent
    },{
        path:'motosform/:id',
        component:MotonuevaComponent
    },{
        path:'cliente',
        component:ClienteComponent
    },{
        path:'clienteform',
        component:ClientenuevoComponent
    },{
        path:'clienteform/:id',
        component:ClientenuevoComponent
    },
   {
        path:'usuario',
        component:UsuarioComponent
    },{
        path:'usuarioform',
        component:UsuarionuevoComponent
    },{
        path:'usuarioform/:id',
        component:UsuarionuevoComponent
    }
    

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}