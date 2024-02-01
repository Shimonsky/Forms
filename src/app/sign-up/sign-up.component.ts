import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user: User = new User('','','','');

  onSubmit(formData:any):void{
    console.log('User creer:', formData);
  }

    
  
}
