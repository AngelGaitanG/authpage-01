import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ai-solutions',
    templateUrl: './ai-solutions.component.html',
    styleUrls: ['./ai-solutions.component.scss'],
    standalone: true
})
export class AiSolutionsComponent implements OnInit {
    ngOnInit() {
        const container = document.querySelector('.solutions-container');
        if (container) {
            container.classList.remove('animate-from-top');
            void (container as HTMLElement).offsetWidth;
            container.classList.add('animate-from-top');
        }
    }
} 