import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }
  getTransacoes(page: number) {
    //==========SIMULAR ERRO==========================
    // const error = throwError('Erro genérico');
    // return timer(3000).pipe(mergeMap(() => error));
    //================================================//

    // return throwError(new Error('Erro genérico.'));
  //return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`); // VERSÃO COM TEMPLATE STRING
  return this.http.get<Transacao[]>(this.API_URL + '/transacoes', {
    params: {
      _page: String(page),
    }
  });
  }
}
