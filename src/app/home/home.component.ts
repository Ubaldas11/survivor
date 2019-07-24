import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl: string;

  constructor(private afStorage: FileService) { }

  ngOnInit() {
    console.log('Gera pradžia, bet teks kasti giliau.');
    this.afStorage.getVideoUrl('saySomething').subscribe(data => {
      this.videoUrl = data;
    });
  }

}
