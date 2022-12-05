import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Location } from '@angular/common';

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

  @Input() drawer!: MatDrawer;

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
      name: 'Região',
      route: '/',
      icon: 'explore',
      description: 'Veja com base na sua região'
    },
    {
      name: 'Conta',
      route: '/',
      icon: 'account_circle',
      description: 'Veja e edite suas informações'
    },
  ];

  ngOnInit(): void {
    //Verifico se a rote foi mudada e fecho o drawer:
    this.location.onUrlChange(_ => {
      this.drawer.close();
    })
  }

  constructor(
    private location: Location
  ) { }
}
