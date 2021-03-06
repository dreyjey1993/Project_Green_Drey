import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { DatabasePlantsPage } from '../database-plants/database-plants';
import { ProfilePage } from '../profile/profile';
import { IdentifyPage } from '../identify/identify';
import { AddUserPlantPage } from '../add-user-plant/add-user-plant';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = IdentifyPage;
  tab3Root = ProfilePage;
  tab4Root = AddUserPlantPage;
  tab5Root = DatabasePlantsPage;
  tab6Root = AboutPage;
  tab7Root = SettingsPage;


  constructor() {

  }
}
