import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Deal } from '../../interfaces/deal-interface';

const apiUrl = "https://cheapshark-game-deals.p.rapidapi.com/deals";
const options = {
  headers:
  {
    'x-rapidapi-host': 'cheapshark-game-deals.p.rapidapi.com',
    'x-rapidapi-key': '4e7ec78a7bmsh0dfda4247254bd2p1f492cjsn971adfd5404e'
  },
  params: {
    pageSize: '10'
  }
}


@Injectable({providedIn: 'root'})
export class DealsService {
  
  constructor(private httpClient: HttpClient) { }
  

  getDeals() : Observable<Deal[]> {
    return this.httpClient.get<Deal[]>(apiUrl, options)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0) {
      console.error('An error occued:', error.error);
    }

    else {
      console.error(`Error returned status ${error.status}:`, error.error);
    }

    return throwError(() => new Error('Something bad happened!'));
  }
}