import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductoComponent } from "src/app/components/producto/producto.component";
import { MenuComponent } from "../menu/menu.component";
import { MenuModule } from "../menu/menu.module";
import { AdminLayoutComponent } from "./admin-layout.component";
import { AdminLayoutRoutesR } from "./admin-layout.routing";
//import { AdminLayoutRoutes } from "./admin-layout.routing";
import {MotosComponent}from "src/app/components/motos/motos.component";
import { MotonuevaComponent } from "src/app/components/motos/motonueva/motonueva.component"; 
import { ClienteComponent } from "src/app/components/cliente/cliente.component";
import { ClientenuevoComponent } from "src/app/components/cliente/clientenuevo/clientenuevo.component";
import { UsuarioComponent } from "src/app/components/usuario/usuario.component";
import { UsuarionuevoComponent } from "src/app/components/usuario/usuarionuevo/usuarionuevo.component";

@NgModule({
    imports: [
        CommonModule,
        //RouterModule.forChild(
        AdminLayoutRoutesR,
        //AdminLayoutRoutesR,
        //AdminLayoutRoutes//),
        FormsModule,
        MenuModule
        //RouterModule
    ],
    exports: [RouterModule],
    declarations: [
        AdminLayoutComponent,
        ProductoComponent,
        MotosComponent,
        MotonuevaComponent,
        ClienteComponent,
        ClientenuevoComponent,
        UsuarioComponent,
        UsuarionuevoComponent
       // MenuComponent
    ]
})
export class AdminLayoutmodule{}