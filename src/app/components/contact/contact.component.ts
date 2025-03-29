import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fa-map-marker',
      title: 'Address',
      content: '123 Medical Center Drive, Healthcare City, HC 12345'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'info@livedoc.com'
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.formData);
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
