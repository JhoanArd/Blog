import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private uiData: HeaderData = {
    title: 'Sobre mi',
    subtitle: 'Este soy yo!',
    thumbnail: '/assets/noche.jpg'
  }

  constructor(private headerService: HeaderService) {
    headerService.uiData.set(this.uiData)
  }

}
