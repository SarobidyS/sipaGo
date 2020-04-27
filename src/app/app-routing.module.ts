import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: '',
    loadChildren: () => import('./tabs-for-connected/tabs-for-connected.module').then(m => m.TabsForConnectedPageModule)
  },
  { path: 'tabs-for-connected/:username', loadChildren: './tabs-for-connected/tabs-for-connected.module#TabsForConnectedPageModule' },
  { path: 'tab-fb', loadChildren: './tab-fb/tab-fb.module#TabFbPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
