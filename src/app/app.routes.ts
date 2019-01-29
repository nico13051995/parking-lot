import { Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "detail", component: DetailComponent}
];
