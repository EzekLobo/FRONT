// src/app/services/communication.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private categoriaSelecionadaSource = new Subject<string>();
  categoriaSelecionada$ = this.categoriaSelecionadaSource.asObservable();

  private veiculoSelecionadoSource = new Subject<any>();
  veiculoSelecionado$ = this.veiculoSelecionadoSource.asObservable();

  constructor() {}

  enviarCategoriaSelecionada(categoria: string): void {
    this.categoriaSelecionadaSource.next(categoria);
  }

  enviarVeiculoSelecionado(veiculo: any): void {
    this.veiculoSelecionadoSource.next(veiculo);
  }
}
