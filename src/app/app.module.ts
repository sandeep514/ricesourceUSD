import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeDetection } from "@ionic-native/theme-detection/ngx";
import { SampleEntryComponent } from './sample-entry/sample-entry.component';
import { SendCourierComponent } from './send-courier/send-courier.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MillStatusComponent } from './mill-status/mill-status.component';
import { PopoverComponent } from './popover/popover.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { BrokLoginComponent } from './brok-login/brok-login.component';
import { SplashscreenPageModule } from './splashscreen/splashscreen.module';
import { ImageprevPageModule } from './imageprev/imageprev.module';
import { PlanpagePageModule } from './planpage/planpage.module';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { VersionmodalPage } from './versionmodal/versionmodal.page';
// import { IonicSelectableModule } from 'ionic-selectable';
import { IonicSelectableModule } from 'ionic-selectable';
import { UsdconvertmodalPageModule } from './usdconvertmodal/usdconvertmodal.module';
import { TrialperiodPageModule } from './trialperiod/trialperiod.module';
import { Stripe } from '@ionic-native/stripe/ngx';
import { File } from "@ionic-native/file/ngx";

@NgModule({
  	declarations: [
		AppComponent, 
		SampleEntryComponent, 
		SendCourierComponent, 
		MillStatusComponent,
		PopoverComponent,
		BrokLoginComponent
	],
  	entryComponents: [
		SampleEntryComponent,
		SendCourierComponent, 
		MillStatusComponent,
		PopoverComponent,
		BrokLoginComponent
	],
  	imports: [
    	BrowserModule,
		HttpClientModule,
		SplashscreenPageModule,
		ImageprevPageModule,
		FormsModule,
		IonicSelectableModule,
		PlanpagePageModule,
		UsdconvertmodalPageModule,
		TrialperiodPageModule,
    	IonicModule.forRoot({
      		scrollPadding: false,
      		scrollAssist: true,
    	}),
    	AppRoutingModule
  	],
  	providers: [
    	StatusBar,
    	SplashScreen,
		ThemeDetection,
		Camera,
		FirebaseMessaging,
		Stripe,
		File,
		VersionmodalPage,
    	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    	{ provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true }
  	],
  	bootstrap: [AppComponent]
})
export class AppModule {}
