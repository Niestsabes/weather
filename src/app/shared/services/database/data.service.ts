import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, from, switchMap, take, tap } from 'rxjs';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private storageReady$ = new BehaviorSubject<boolean>(false);

  constructor(private _storage: Storage) {}

  public initialize(): Observable<unknown> {
    return from(this._storage.defineDriver(CordovaSQLiteDriver))
      .pipe(
        switchMap(() => this._storage.create()),
        tap(() => this.storageReady$.next(true)),
        take(1)
      );
  }

  public get<T = any>(key: string): Observable<T> {
    return this.storageReady$.pipe(
      filter((ready) => ready),
      switchMap(() => from(this._storage.get(key) as Promise<T>))
    );
  }

  public set<T = any>(key: string, value: T): Observable<unknown> {
    return this.storageReady$.pipe(
      filter((ready) => ready),
      switchMap(() => from(this._storage.set(key, value)))
    );
  }

  public remove(key: string): Observable<unknown> {
    return this.storageReady$.pipe(
      filter((ready) => ready),
      switchMap(() => from(this._storage.remove(key)))
    );
  }
}
