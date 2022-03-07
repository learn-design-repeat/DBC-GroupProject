import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateinstrumentComponent } from './createinstrument/createinstrument.component';
import { HomeListComponent } from './home-list/home-list.component';
import { FormsModule } from '@angular/forms';
import { UpdatealbumComponent } from './updatealbum/updatealbum.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    AboutComponent,
    CreateinstrumentComponent,
    HomeListComponent,
    UpdatealbumComponent,
    CartComponent,
    DetailsComponent,
    ColorPickerComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomepageComponent },
        { path: 'shoes', component: HomeListComponent },
        { path: 'about', component: AboutComponent },
        { path: 'details/:id', component: DetailsComponent },
        { path: 'create', component: CreateinstrumentComponent },
        { path: 'Update/:instrumentid', component: UpdatealbumComponent },
        { path: 'cart', component: CartComponent }
      ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
