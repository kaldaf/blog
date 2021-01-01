import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PostComponent } from './views/post/post.component';
import { PageComponent } from './views/page/page.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    InstagramFeedComponent,
    RecentPostsComponent,
    PostsComponent,
    PostDetailComponent,
    PageDetailComponent,
    HomepageComponent,
    PostComponent,
    PageComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
