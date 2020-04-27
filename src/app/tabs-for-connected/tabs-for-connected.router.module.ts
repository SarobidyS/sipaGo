import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsForConnectedPage } from './tabs-for-connected.page';
import { AuthGuardService } from '../services/auth-guard.service' 

const routes: Routes = [
  {
    path: 'tabs-for-connected',
    component: TabsForConnectedPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard/:username',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ],
        canActivate: [AuthGuardService]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab3/:username',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'parametre',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../parametre/parametre.module').then(m => m.ParametrePageModule)
          }
        ]
      },
      {
        path: 'notif/:username',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notif/notif.module').then(m => m.NotifPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs-for-connected/dashboard/:username',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-for-connected/dashboard/:username',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsForConnectedPageRoutingModule {}
