import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() user!: User;
}
