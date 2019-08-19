import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Correo } from 'src/app/Interfaces/correo';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: Correo;

  constructor(private route: ActivatedRoute) { 
    this.correo = {
      id: "",
      titulo: "",
      cuerpo: "",
      emisor: ""
    }
  }

  ngOnInit() {
    const datosRecibidos = this.route.snapshot.paramMap.get('correo');
    if(datosRecibidos){
      this.correo = JSON.parse(datosRecibidos);
    }
   
  }

}
