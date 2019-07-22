import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Array<string> = [];

  constructor(private afStorage: FileService) { }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    for (let i = 1; i < 24; i++) {
      this.afStorage.getImgUrl(i).subscribe(data => {
        this.images.push(data);
      });
    }
  }

}
