import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ai-processing',
    templateUrl: './ai-processing.component.html',
    styleUrls: ['./ai-processing.component.scss'],
    standalone: true
})
export class AiProcessingComponent implements OnInit {
    ngOnInit() {
        const container = document.querySelector('.processing-container');
        if (container) {
            container.classList.remove('animate-from-top');
            void (container as HTMLElement).offsetWidth;
            container.classList.add('animate-from-top');
        }
    }
} 