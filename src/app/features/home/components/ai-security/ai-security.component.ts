import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ai-security',
    templateUrl: './ai-security.component.html',
    styleUrls: ['./ai-security.component.scss'],
    standalone: true
})
export class AiSecurityComponent implements OnInit {
    ngOnInit() {
        // Aseguramos que las animaciones se reinicien
        const container = document.querySelector('.security-container');
        if (container) {
            container.classList.remove('animate-from-top');
            void (container as HTMLElement).offsetWidth; // Type casting para resolver el error
            container.classList.add('animate-from-top');
        }
    }
} 