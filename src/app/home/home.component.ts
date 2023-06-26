import { Component, OnInit } from '@angular/core';
import { PhotoFetchingService } from '../shared/photo-fetching.service';
import { map, tap } from 'rxjs';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photo: Photo = {
    description: 'placeholder text',
    alt_description: '',
    urls: {
      regular: '',
    },
  };

  constructor(private photoFetch: PhotoFetchingService) {}

  ngOnInit(): void {
    this.showNewPhoto();
  }

  showNewPhoto() {
    this.photoFetch.getPhoto().subscribe((data) => (this.photo = data));
  }
}
