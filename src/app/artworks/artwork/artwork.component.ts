import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-artwork',
  styleUrl: './artwork.component.css',
  templateUrl: './artwork.component.html',
})

export class ArtworkComponent {
  @Input({required: true}) artwork!: Artwork;
}
