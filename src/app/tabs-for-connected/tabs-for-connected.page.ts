import { Component, OnInit } from '@angular/core';
import { nameOfUsers } from '../../providers/users/usersProvider'; 

@Component({
  selector: 'app-tabs-for-connected',
  templateUrl: './tabs-for-connected.page.html',
  styleUrls: ['./tabs-for-connected.page.scss'],
})
export class TabsForConnectedPage {
  username: any;
  constructor(
    public nameUser : nameOfUsers
  ) { 
    this.username = nameUser.theUsername;
  }

}
