import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-image',
  styleUrl: './image.component.css',
  templateUrl: './image.component.html',
})

export class ImageComponent {
  @Input({required: true}) artwork!: Artwork;
}
