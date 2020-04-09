import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[]=[
    {id:1, nombre:'Cristina',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},
    {id:2, nombre:'Nicole',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},
    {id:3, nombre:'Inés',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},
    {id:4, nombre:'Alejandra',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},
    {id:5, nombre:'Marcelo',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},
    {id:6, nombre:'Angelo',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},
    {id:7, nombre:'Judith_Cristina',apellido:'Burbano', email:'cristina@espe.edu.ec', createAt:'2020-04-09'},];
  constructor() { }

  ngOnInit(): void {
  }

}
