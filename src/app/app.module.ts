import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InViewportModule } from 'ng-in-viewport';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DataProtectionComponent,
    FooterComponent,
    ImprintComponent,
    MenuComponent,
    PortfolioContentComponent,
    ProjectsComponent,
    SkillsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
