import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AiSolutionsComponent } from './components/ai-solutions/ai-solutions.component';
import { AiProcessingComponent } from './components/ai-processing/ai-processing.component';
import { AiSecurityComponent } from './components/ai-security/ai-security.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AiSolutionsComponent,
    AiProcessingComponent,
    AiSecurityComponent
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoSlideInterval: any;
  isMobileView: boolean = false;

  slides = [
    { component: 'solutions', title: 'AI Solutions' },
    { component: 'processing', title: 'Real-Time Processing' },
    { component: 'security', title: 'Advanced Security' }
  ];

  ngOnInit() {
    this.startAutoSlide();
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngOnDestroy() {
    this.stopAutoSlide();
    window.removeEventListener('resize', () => this.checkScreenSize());
    document.body.classList.remove('mobile-view');
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000000); // Cambia cada  segundos
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    // Agregamos una clase al body para manejar estilos globales
    document.body.classList.toggle('mobile-view', this.isMobileView);
  }
}
