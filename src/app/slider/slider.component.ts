import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  currentSlide = 0;
  slides: Element[] = []; // array for slides

  @ViewChild('sliderVideo') sliderVideo: ElementRef<HTMLVideoElement> | null = null;

  constructor() { }

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
      (this.slides[0] as HTMLElement).parentElement as HTMLElement
    ).style.transform = `translateY(${offset}%)`;

    //video playback
    if (this.sliderVideo) {
      if (this.currentSlide === 2) {
        this.sliderVideo.nativeElement.play();
      } else {
        this.sliderVideo.nativeElement.pause();
        this.sliderVideo.nativeElement.currentTime = 0;
      }
    }
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  ngOnInit() {
    const slidesCollection = document.getElementsByClassName('slide');
    this.slides = Array.from(slidesCollection);
    this.showSlide(this.currentSlide);
  }
}
