import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css']
})
export class FooterComponent {

    public autor: any = {nombre:'Ineale', apellido:'Burbano'};
}
