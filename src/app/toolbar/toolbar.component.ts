import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { ToolbarModule } from './toolbar.module';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, RouterOutlet, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, MatButtonModule, MatToolbar, SliderComponent, FooterComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  opened = false;
  currentSlide = 0;
  slides: HTMLCollectionOf<Element>;

  @ViewChild('sliderVideo') sliderVideo: ElementRef<HTMLVideoElement>;

  constructor() {
    this.sliderVideo = {} as ElementRef<HTMLVideoElement>;
    this.slides = {} as HTMLCollectionOf<Element>;
  }

  showSlide(index: number) {
    if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide = index;
    }

    const offset = -this.currentSlide * 100;
    (
      this.slides[0].parentElement as HTMLElement
    ).style.transform = `translateY(${offset}%)`;

    //video playback
    if (this.currentSlide === 2) {
      this.sliderVideo.nativeElement.play();
    } else {
      this.sliderVideo.nativeElement.pause();
      this.sliderVideo.nativeElement.currentTime = 0; // Reset video
    }
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  ngOnInit() {
    this.slides = document.getElementsByClassName('slide');
    this.showSlide(this.currentSlide);
  }

}
