import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoFetchingService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<Photo>('https://api.unsplash.com/photos/random', {
      headers: {
        'Accept-Version': 'v1',
        Authorization: 'Client-ID vcTd1g3erIg3xyik2LjiBebd-MuHYzuJoTZZBlXNdkQ',
      },
    });
  }
}
