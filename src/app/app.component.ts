import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir({ valor, destino }: any) {
    console.log({ valor, destino })
    const transferencia = {valor, destino, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
