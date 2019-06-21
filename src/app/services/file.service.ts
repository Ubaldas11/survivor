import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
  constructor(private storage: AngularFireStorage) {}

  public getImgUrl(nameWithoutFormat: string): Observable<string> {
    const ref = this.storage.ref(`gallery/${nameWithoutFormat}.jpg`);
    return ref.getDownloadURL();
  }

  public getVideoUrl(nameWithoutFormat: string): Observable<string> {
    const ref = this.storage.ref(`videos/${nameWithoutFormat}.mp4`);
    return ref.getDownloadURL();
  }
}
