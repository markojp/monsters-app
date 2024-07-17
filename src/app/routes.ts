import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: UserComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'User Details Page',
  },
];

export default routeConfig;
