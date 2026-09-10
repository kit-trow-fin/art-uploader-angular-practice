import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ArtworksComponent } from './artworks/artworks.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, ArtworksComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('art-uploader');
}
