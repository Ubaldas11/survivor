import { Image } from './image';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Array<Image> = [];
  downloadTasks: Array<Observable<string>> = [];

  constructor(private afStorage: FileService) { }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    for (let i = 1; i < 25; i++) {
      const downloadTask = this.afStorage.getImgUrl(i);
      this.downloadTasks.push(downloadTask);
      downloadTask.subscribe(data => {
        this.images.push({
          id: i,
          url: data
        });
      });
    }
    forkJoin(this.downloadTasks).subscribe(x => {
      this.images = this.images.sort((a, b) => a.id - b.id);
    });
  }

}
