import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[]
  private url = 'http://localhost:3000/transferencias'

  constructor(
    private httpClient: HttpClient
  ) {
    this.listaTransferencia = []
  }

  get transferencias() {
    return this.listaTransferencia
  }

  getTransferencias(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia)

    // this.listaTransferencia.push(transferencia) // Adicionando transferencia recebida como parametro no array
    return this.httpClient.post<Transferencia>(this.url, transferencia) // Adicionando nova transferencia na api
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date()
  }

}
