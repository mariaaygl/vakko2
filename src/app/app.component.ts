import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import {RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

//CommonModule,RouterModule and RouterOutlet can be used to route some links(or paths).
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatListModule, MatMenuModule, MatButtonModule, SliderComponent, FooterComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vakko';

  opened = true;
  isExpanded = false;
  categories = [
    { name: 'KADIN', link: '/page-kadin' },
    { name: 'ERKEK', link: '/page-erkek' },
    { name: 'SHOES & BAGS', link: '/page-shoes-bags' },
    { name: 'V2K DESIGNERS', link: '/page-v2-designers' },
    { name: 'MARE', link: '/page-mare' },
    { name: 'COUTURE', link: '/page-couture' },
    { name: 'WEDDING', link: '/page-wedding' },
    { name: 'HOME', link: '/page-home"' },
    { name: 'KOZMETİK', link: '/page-kozmetik' },
    { name: 'VAKKORAMA', link: '/page-vakkorama' },
    { name: 'VAKKO HOTEL & RESIDENCE', link: '/page-vakko-hotel' },
    { name: 'L ATELIER', link: '/page-latelier' },
    { name: 'OUTLET', link: '/page-outlet' },
    { name:'VAKKO HAKKINDA', link: '/page-vakko-hakkinda'}

  ];

  onSelectCategory(category: any) {
    this.isExpanded = true;
    this.opened = true;
  }

  closeSidenav() {
    this.opened = false;
    this.isExpanded = false;
  }
}
