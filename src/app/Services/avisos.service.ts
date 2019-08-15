import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string;
  visible: boolean;

  constructor() {
    this.mensaje = '';
    this.visible = false;
  }

  showMenssage(mensaje: string){
    this.mensaje = mensaje;
    this.visible = true;
    this.waitToHide();
  }

  hideMenssage(){
    this.visible = false;
    this.mensaje = '';
  }

  waitToHide(){
    setTimeout(() => {
      this.hideMenssage();
    }, 2000);
  }
}
