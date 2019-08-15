import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false;
  @Input() correo: any;
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService) { }

  ngOnInit() {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
    
    if(this.correo != undefined){
      this.nuevoCorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo, 
        destinatario: this.correo.emisor
      });
    }
  }

  get formulario() { return this.nuevoCorreo.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.nuevoCorreo.invalid) {
      return;
    }

    let correo = this.nuevoCorreo.value;
    correo.leido = false;
    correo.emisor = 'correoEmisor1@openWebinar.inv';

    this.onReset();
    this.servicioAvisos.showMenssage(`Correo enviado a ${correo.emisor}`);
  }

  onReset() {
    this.submitted = false;
    this.nuevoCorreo.reset();
    this.accionRealizada.emit();
  }

  cancel(){
    this.onReset();
    this.servicioAvisos.showMenssage("Envio Cancelado");
  }

}
