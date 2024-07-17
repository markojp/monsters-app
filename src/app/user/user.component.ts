import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CardListComponent } from '../card-list/card-list.component';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CardListComponent, SearchBoxComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userList: User[] = [];
  userService: UserService = inject(UserService);
  filteredUsers: User[] = [];

  constructor() {
    this.getAllUsers();
  }

  private async getAllUsers() {
    this.userList = await this.userService.getAllUsers();
    this.filteredUsers = this.userList;
  }

  GetSearchField(text: string) {
    this.filterResults(text);
  }

  private filterResults(text: string) {
    if (!text) {
      this.filteredUsers = this.userList;
    }

    this.filteredUsers = this.userList.filter((user: User) => {
      return user.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    });
  }
}
