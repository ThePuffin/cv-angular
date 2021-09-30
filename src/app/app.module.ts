import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CareerComponent } from './components/career/career.component';
import { FormationComponent } from './components/formation/formation.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CareerComponent,
    FormationComponent,
    PersonalDataComponent,
    ShowroomComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
