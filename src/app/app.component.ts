import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

type Transferencia = {
  valor: number,
  destino: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(
    private service: TransferenciaService
  ) {}

  transferir(event: Transferencia) {
    this.service.adicionar(event)
  }
}
