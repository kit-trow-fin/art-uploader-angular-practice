import { Component, Input } from '@angular/core';
import { ArtworksService } from './artworks.service';
import { ArtworkComponent } from './artwork/artwork.component';

@Component({
  imports: [ArtworkComponent],
  selector: 'app-artworks',
  styleUrl: './artworks.component.css',
  templateUrl: './artworks.component.html',
})

export class ArtworksComponent {
  // @Input({required: true}) artworks!: Artwork[]

  constructor(private artworksService: ArtworksService){}

  get Artworks(){
    return this.artworksService.getArtworks();
  }

}
