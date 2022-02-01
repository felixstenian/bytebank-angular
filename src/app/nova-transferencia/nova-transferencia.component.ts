import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(
    private service: TransferenciaService
  ) {}

  transferir() {
    console.log('Solicitada nova trasnferência.')

    // this.aoTransferir.emit({
    //   valor: this.valor,
    //   destino: this.destino
    // })

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }

    this.service.adicionar(valorEmitir).subscribe(
      (response) => {
        console.log(response)
        this.limparCampor()
      },
      (error) => console.error(error)
    )
  }

  limparCampor() {
    this.valor = 0;
    this.destino = 0;
  }

}
