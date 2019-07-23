import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IStat } from '../models/stats.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(private afs: AngularFirestore) { }

  public getStatistics(): Observable<IStat[]> {
    return this.afs.collection('statistics').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IStat;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
}
