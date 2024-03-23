import { Component } from '@angular/core';
import { IconGeneratorService } from './services/icons-service/icons.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AB-Front';
  constructor(
    private iconsService: IconGeneratorService,
  ){}
}

