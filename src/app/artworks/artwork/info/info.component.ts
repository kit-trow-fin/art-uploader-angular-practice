import { Component,Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-info',
  styleUrl: './info.component.css',
  templateUrl: './info.component.html',
})
export class InfoComponent {
  @Input({required: true}) artwork!: Artwork;
}
