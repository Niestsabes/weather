import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _isInit: boolean = false;

  constructor(
    private storage: Storage
  ) {}


  public get<T>(key: string): Observable<T> {
    if (!this._isInit) {
      return this.init().pipe(switchMap(() => this.get<T>(key)));
    }
    return from(this._storage.get(key)).pipe(
      catchError(err => of([])),
      map((data: any) => data as T)
    );
  }

  public set(key: string, value: any): void {
    this._storage?.set(key, value);
  }

  private init(): Observable<Storage> {
    return from(this.storage.create()).pipe(tap(
      storage => { this._storage = storage; this._isInit = true; }
    ));
  }
}
