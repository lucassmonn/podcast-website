import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { PlataformsComponent } from './components/plataforms/plataforms.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { AllepisodesComponent } from './pages/allepisodes/allepisodes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    EpisodesComponent,
    AboutComponent,
    DonateComponent,
    PlataformsComponent,
    FooterComponent,
    HomeComponent,
    VideoComponent,
    EpisodeComponent,
    AllepisodesComponent,
    NotfoundComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
