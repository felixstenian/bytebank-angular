import { Transferencia } from './../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(
    private service: TransferenciaService
  ) { }

  ngOnInit(): void {
    // this.transferencias = this.service.transferencias // Recebendo lista de transferencia de um array no service
    this.service.getTransferencias().subscribe((transferencias: Transferencia[]) => { // Recebendo lista de transferencias da api pelo metodo get no service
      console.log(transferencias)
      this.transferencias = transferencias
    })
  }

}
