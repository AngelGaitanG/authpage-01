import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const HOME_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'features',
                loadComponent: () => import('./components/features/features.component')
                    .then(m => m.FeaturesComponent)
            }
        ]
    }
]
