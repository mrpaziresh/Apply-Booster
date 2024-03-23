import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})

export class IconGeneratorService {
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.registerSvgIconSet('assets/icons/outlined.svg');
    }

    private registerSvgIconSet(url: string): void {
        this.matIconRegistry.addSvgIconSet(this.domSanitizer.bypassSecurityTrustResourceUrl(url));
    }
    
}