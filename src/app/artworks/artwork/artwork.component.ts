import { Component, Input } from '@angular/core';
import { ImageComponent } from './image/image.component';

@Component({
  imports: [ImageComponent],
  selector: 'app-artwork',
  styleUrl: './artwork.component.css',
  templateUrl: './artwork.component.html',
})

export class ArtworkComponent {
  @Input({required: true}) artwork!: Artwork;
}
