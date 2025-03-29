import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fa-heart',
      title: 'Health & Lifestyle Coaching',
      description: 'Personalized guidance to help you achieve your health and lifestyle goals through sustainable habits and positive changes.',
      image: 'assets/images/services/health-lifestyle.jpg'
    },
    {
      icon: 'fa-apple-alt',
      title: 'Nutrition & Diet Guidance',
      description: 'Expert nutrition advice and personalized meal planning to support your health goals and dietary needs.',
      image: 'assets/images/services/nutrition-diet.jpg'
    },
    {
      icon: 'fa-running',
      title: 'Fitness & Movement Coaching',
      description: 'Customized fitness programs and movement guidance to improve strength, flexibility, and overall physical well-being.',
      image: 'assets/images/services/fitness-movement.jpg'
    },
    {
      icon: 'fa-brain',
      title: 'Mental & Emotional Well-being',
      description: 'Support and strategies for managing stress, anxiety, and emotional challenges to maintain mental health.',
      image: 'assets/images/services/mental-wellness.jpg'
    },
    {
      icon: 'fa-balance-scale',
      title: 'Work-Life Balance & Productivity',
      description: 'Guidance on managing time effectively, setting boundaries, and creating harmony between work and personal life.',
      image: 'assets/images/services/work-life-balance.jpg'
    },
    {
      icon: 'fa-spa',
      title: 'Holistic Wellness Approaches',
      description: 'Comprehensive wellness strategies that address mind, body, and spirit for optimal health and vitality.',
      image: 'assets/images/services/holistic-wellness.jpg'
    }
  ];
}
