import { Component, Input } from '@angular/core';
import { ImageComponent } from './image/image.component';
import { InfoComponent } from './info/info.component';

@Component({
  imports: [ImageComponent, InfoComponent],
  selector: 'app-artwork',
  styleUrl: './artwork.component.css',
  templateUrl: './artwork.component.html',
})

export class ArtworkComponent {
  @Input({required: true}) artwork!: Artwork;
}
