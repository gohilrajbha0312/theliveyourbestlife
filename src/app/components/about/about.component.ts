import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '10k+', label: 'Happy Patients' },
    { number: '24/7', label: 'Medical Support' }
  ];
}
