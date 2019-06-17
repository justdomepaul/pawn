import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    // https://image.flaticon.com/icons/svg/60/60720.svg
    this.matIconRegistry.addSvgIcon(
      'phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/phone.svg')
    );
    // https://image.flaticon.com/icons/svg/61/61021.svg
    this.matIconRegistry.addSvgIcon(
      'directions',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/directions.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'lineLogo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/lineLogo.svg')
    );
  }
}

