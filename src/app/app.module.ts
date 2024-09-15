import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AboutComponent } from './components/about/about.component';
// import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { InViewportDirective } from './directives/in-viewport.directive';

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent, -> NOT NECESSARY
    // SkillsComponent, -> NOT NECESSARY
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SkeletonComponent,
    InViewportDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
