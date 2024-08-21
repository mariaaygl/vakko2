import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageKadinComponent } from './pages/page-kadin/page-kadin.component';
import { AppRoutingModule } from './app-routing.module';
import { PageErkekComponent } from './pages/page-erkek/page-erkek.component';
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { SliderComponent } from './slider/slider.component';
import { PageShoesBagsComponent } from './pages/pages-shoes-bags/page-shoes-bags.component';
import { PageVakkkoHakkindaComponent } from './pages/page-vakkko-hakkinda/page-vakkko-hakkinda.component';

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent, PageKadinComponent, PageErkekComponent, PageShoesBagsComponent, PageV2kDesignersComponent,
    PageMareComponent, PageCoutureComponent, PageWeddingComponent, PageHomeComponent, PageKozmetikComponent, PageVakkoramaComponent,
    PageVakkoHotelComponent, PageLatelierComponent, PageOutletComponent, FooterComponent, SliderComponent,PageVakkkoHakkindaComponent

  ],
  imports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSnackBarModule, MatButtonToggleModule,
    MatBottomSheetModule, MatDialogModule, MatMenuModule, MatListModule, MatDividerModule, MatExpansionModule, MatSidenavModule, MatFormFieldModule, MatIconModule, MatNativeDateModule, MatDatepickerModule, FormsModule, MatRadioModule, MatSelectModule,
    MatInputModule, MatChipsModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatBadgeModule, AppRoutingModule, MatCommonModule, BrowserAnimationsModule, BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
