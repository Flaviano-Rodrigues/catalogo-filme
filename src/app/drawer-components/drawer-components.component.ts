import { Component } from '@angular/core';

export interface Section {
  name: string;
  route: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-drawer-components',
  templateUrl: './drawer-components.component.html',
  styleUrls: ['./drawer-components.component.scss']
})
export class DrawerComponentsComponent {
  rotas: Section[] = [
    {
      name: 'Home',
      route: '/',
      icon: 'home',
      description: 'Tela inicial'
    }
  ];
  options: Section[] = [
    {
      name: 'Notificações',
      route: '/',
      icon: 'notifications',
      description: 'Acompanhe as notificações'
    },
    {
      name: 'Conta',
      route: '/',
      icon: 'account_circle',
      description: 'Veja e edite suas informações'
    },
  ];
}
