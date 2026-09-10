import { Component } from '@angular/core';
import { ArtworksService } from './artworks.service';

@Component({
  imports: [],
  selector: 'app-artworks',
  styleUrl: './artworks.component.css',
  templateUrl: './artworks.component.html',
})

export class ArtworksComponent {

  constructor(private artworksService: ArtworksService){}

}
