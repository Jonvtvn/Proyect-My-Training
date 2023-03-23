import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },

  {
    path: 'legs',
    children: [
      {
        path:'',
        loadChildren: () => import('./pages/legs/legs.module').then( m => m.LegsPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: ':Id/:Nombre/:Imagen/:Gif/:Descripcion',
        loadChildren: () => import('./pages/exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule),
        canActivate: [IngresadoGuard]
      }
    ]
  },

  {
    path: 'abdomen',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/abdomen/abdomen.module').then( m => m.AbdomenPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: ':Id/:Nombre/:Imagen/:Gif/:Descripcion',
        loadChildren: () => import('./pages/exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule),
        canActivate: [IngresadoGuard]
      }
    ]
  },

  {
    path: 'arms',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/arms/arms.module').then( m => m.ArmsPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: ':Id/:Nombre/:Imagen/:Gif/:Descripcion',
        loadChildren: () => import('./pages/exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule),
        canActivate: [IngresadoGuard]
      }

    ]
  },

  {
    path: 'exercise-detail',
    loadChildren: () => import('./pages/exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'imc',
    loadChildren: () => import('./pages/imc/imc.module').then( m => m.ImcPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'my-list',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/my-list/my-list.module').then( m => m.MyListPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: ':Id/:Nombre/:Imagen/:Gif/:Descripcion',
        loadChildren: () => import('./pages/exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule),
        canActivate: [IngresadoGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
