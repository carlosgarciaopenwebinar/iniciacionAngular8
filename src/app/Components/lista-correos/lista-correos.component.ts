import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/Services/gmail.service';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];
  columnsToDisplay: string[] = ['Emisor', 'Asunto', 'Acciones'];
  displayedColumns: string[] = ['emisor', 'titulo', 'id'];
  dataSource = new MatTableDataSource<any>();
  expandedElement: any | null;

  constructor(private gmail: GmailService, private router: Router, private servicioAvisos: AvisosService) {
    this.correos = [];
  }

  ngOnInit() {
    this.getRecibidos();
  }

  accionRespuestaRapida() {
    this.expandedElement = null;
  }

  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      (response) => {
        const mensajes = response.messages;
        
        mensajes.forEach(element => {
          this.getMensaje(element.id);
        });
      },
      (error) => this.error(error)
    );
  }

  getMensaje(id: string){
    this.gmail.getMessage(id).subscribe(
      (response) => {
        const emisor = response.payload.headers.find(e => e.name === "From");
        const subject = response.payload.headers.find(e => e.name === "Subject");

        const mensage = {
          id: response.id,
          cuerpo: response.snippet,
          emisor: emisor? emisor.value : undefined,
          titulo: subject? subject.value : undefined,
        };
        this.dataSource.data.push(mensage);
        this.dataSource._updateChangeSubscription();
      },
      (error) => this.error(error)
    );
  }

  error(error){
    this.servicioAvisos.showMenssage("Se ha producido un error", 'Error');
  }

  verDetalle(correo){
    this.router.navigate(['/mail', {correo: JSON.stringify(correo)}]);
  }
}
