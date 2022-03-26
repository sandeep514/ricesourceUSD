import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloginGuard implements CanActivate {
	constructor(public navCtrl:NavController){}

	canActivate( 
		next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
		Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let isLogin = localStorage.getItem('id');
		let isActive = localStorage.getItem('status');
			
		if( isActive == null ){
			this.navCtrl.navigateRoot(['login']);
		}

		if( isLogin == null){
			if( isActive == null ){
				this.navCtrl.navigateRoot(['register']);
			}else{
				return true;
			}
		}else{
			return true;
		}
	}
  
}