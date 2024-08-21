import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageV2kDesignersComponent } from './pages/page-v2k-designers/page-v2k-designers.component';
import { PageMareComponent } from './pages/page-mare/page-mare.component';
import { PageCoutureComponent } from './pages/page-couture/page-couture.component';
import { PageWeddingComponent } from './pages/page-wedding/page-wedding.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageKozmetikComponent } from './pages/page-kozmetik/page-kozmetik.component';
import { PageVakkoramaComponent } from './pages/page-vakkorama/page-vakkorama.component';
import { PageVakkoHotelComponent } from './pages/page-vakko-hotel/page-vakko-hotel.component';
import { PageLatelierComponent } from './pages/page-latelier/page-latelier.component';
import { PageOutletComponent } from './pages/page-outlet/page-outlet.component';
import { PageKadinComponent } from './pages/page-kadin/page-kadin.component';
import { PageErkekComponent } from './pages/page-erkek/page-erkek.component';
import { PageShoesBagsComponent } from './pages/pages-shoes-bags/page-shoes-bags.component';
import { PageVakkkoHakkindaComponent } from './pages/page-vakkko-hakkinda/page-vakkko-hakkinda.component';

const routes: Routes = [
  { path: 'page-kadin', component: PageKadinComponent },
  { path: 'page-erkek', component: PageErkekComponent },
  { path: 'page-shoes-bags', component: PageShoesBagsComponent },
  { path: 'page-v2-designers', component: PageV2kDesignersComponent },
  { path: 'page-mare', component: PageMareComponent },
  { path: 'page-couture', component: PageCoutureComponent },
  { path: 'page-wedding', component: PageWeddingComponent },
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-kozmetik', component: PageKozmetikComponent },
  { path: 'page-vakkorama', component: PageVakkoramaComponent },
  { path: 'page-vakko-hotel', component: PageVakkoHotelComponent },
  { path: 'page-latelier', component: PageLatelierComponent },
  { path: 'page-outlet', component: PageOutletComponent },
  {path: 'page-vakko-hakkinda', component:PageVakkkoHakkindaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


