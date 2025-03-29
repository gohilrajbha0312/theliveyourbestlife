import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroTitle = 'Your Health is Our Priority';
  heroSubtitle = 'We provide the best medical services for you and your family';
  imagePath: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imagePath = this.sanitizer.bypassSecurityTrustUrl('file:///C:/Users/gohil/Downloads/work/jeenal_orignal.jpg');
  }
}
