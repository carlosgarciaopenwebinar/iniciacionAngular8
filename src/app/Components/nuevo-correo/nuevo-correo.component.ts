import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from 'src/app/Services/avisos.service';
import { GmailService } from 'src/app/Services/gmail.service';

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

  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService, private gmail: GmailService) { }

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

    const texto = correo.cuerpo;
    const destinatario = correo.destinatario;
    const asunto = correo.titulo;

    this.onReset();
    
    this.gmail.sendMessage(texto, destinatario, asunto).subscribe(
      (response) => {
        console.log("respuesta envio", response);
        this.servicioAvisos.showMenssage(`Correo enviado a ${correo.destinatario}`);
      },
      (error) => {
        this.servicioAvisos.showMenssage(`Fallo en el envio`);
      }
    );
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
