import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IPlayer } from '../models/player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private afs: AngularFirestore) { }

  public getPlayers(): Observable<IPlayer[]> {
    return this.afs.collection('players').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IPlayer;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  public getPlayer(playerId: string): Observable<IPlayer> {
    return this.afs.collection('players').doc(playerId).valueChanges();
  }

}
