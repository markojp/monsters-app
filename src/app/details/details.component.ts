import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  user: User | undefined;

  constructor() {
    const userId = Number(this.route.snapshot.params['id']);
    this.getUser(userId);
  }

  private async getUser(id: number) {
    this.user = await this.userService.getUserById(id);
  }
}
