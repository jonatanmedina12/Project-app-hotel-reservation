import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../../feature/common/header/components/top-header/top-header.component";
import { BodyLandingUseComponent } from "../../../feature/common/landing-body/components/body-landing-use/body-landing-use.component";
import { AboutComponent } from "../../../feature/common/about-section/components/about/about.component";
import { ServicesSectionUserComponent } from "../../../feature/common/services-section/components/services-section-user/services-section-user.component";
import { FooterComponent } from "../../../feature/common/footer/components/footer/footer.component";

@Component({
  selector: 'app-main-layout-initial',
  standalone: true,
  imports: [TopHeaderComponent, BodyLandingUseComponent, AboutComponent, ServicesSectionUserComponent, FooterComponent],
  templateUrl: './main-layout-initial.component.html',
  styleUrl: './main-layout-initial.component.scss'
})
export class MainLayoutInitialComponent {

}
