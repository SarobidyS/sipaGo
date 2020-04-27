import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsForConnectedPage } from './tabs-for-connected.page';

import { TabsForConnectedPageRoutingModule } from './tabs-for-connected.router.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsForConnectedPageRoutingModule
  ],
  declarations: [TabsForConnectedPage]
})
export class TabsForConnectedPageModule {}
