import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ParkingRate } from './parking-rate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RateCalculatorService {

  private parkingRateWebApiUrl = 'http://localhost:56886/api/ParkingRateCalculator/calculaterate';  // URL to web api
  constructor(
    private http: HttpClient) { }


  /** GET hero by id. Will 404 if id not found */
  getRates(entryDate: Date,exitDate:Date): Observable<ParkingRate> {
    const url = `${this.parkingRateWebApiUrl}?entryDateTime=${entryDate}&exitDateTime=${exitDate}`;
    return this.http.get<ParkingRate>(url).pipe(
      tap(_ => this.log(`fetched entry date=${entryDate} & exit date=${exitDate}`)),
      catchError(this.handleError<ParkingRate>(`entry date=${entryDate} & exit date=${exitDate}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('RateCalculatorService: ' + message);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
