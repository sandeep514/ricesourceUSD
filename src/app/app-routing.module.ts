import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsloginGuard } from './islogin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prices',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./prices/prices.module').then( m => m.PricesPageModule),
    canActivate: [IsloginGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'port',
    loadChildren: () => import('./port/port.module').then( m => m.PortPageModule)
  },
  {
    path: 'contactmodal',
    loadChildren: () => import('./contactmodal/contactmodal.module').then( m => m.ContactmodalPageModule)
  },
  {
    path: 'ricechart',
    loadChildren: () => import('./ricechart/ricechart.module').then( m => m.RicechartPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'gallerydetails',
    loadChildren: () => import('./gallerydetails/gallerydetails.module').then( m => m.GallerydetailsPageModule)
  },
  {
    path: 'imageprev',
    loadChildren: () => import('./imageprev/imageprev.module').then( m => m.ImageprevPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'termsandcondition',
    loadChildren: () => import('./termsandcondition/termsandcondition.module').then( m => m.TermsandconditionPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'verifyotp',
    loadChildren: () => import('./verifyotp/verifyotp.module').then( m => m.VerifyotpPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./chat-detail/chat-detail.module').then( m => m.ChatDetailPageModule)
  },
  {
    path: 'admin/chat',
    loadChildren: () => import('./admin/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'admin/chatdetails',
    loadChildren: () => import('./admin/chatdetails/chatdetails.module').then( m => m.ChatdetailsPageModule)
  },  {
    path: 'planpage',
    loadChildren: () => import('./planpage/planpage.module').then( m => m.PlanpagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'updatepassword',
    loadChildren: () => import('./updatepassword/updatepassword.module').then( m => m.UpdatepasswordPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'versionmodal',
    loadChildren: () => import('./versionmodal/versionmodal.module').then( m => m.VersionmodalPageModule)
  },
  {
    path: 'priceusd',
    loadChildren: () => import('./priceusd/priceusd.module').then( m => m.PriceusdPageModule)
  },
  {
    path: 'oceanfreights',
    loadChildren: () => import('./oceanfreights/oceanfreights.module').then( m => m.OceanfreightsPageModule)
  },
  {
    path: 'quality-details',
    loadChildren: () => import('./quality-details/quality-details.module').then( m => m.QualityDetailsPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'bid',
    loadChildren: () => import('./bid/bid.module').then( m => m.BidPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'mybids',
    loadChildren: () => import('./mybids/mybids.module').then( m => m.MybidsPageModule)
  },
  {
    path: 'otherservices',
    loadChildren: () => import('./otherservices/otherservices.module').then( m => m.OtherservicesPageModule)
  }



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
