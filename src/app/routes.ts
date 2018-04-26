import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import LoginFeature from './login';

const routes: Routes = [
  { path : '', component: HomeComponent, pathMatch : 'full'}
];

// LoginFeature.addGuard(routes, []);

export {routes};
