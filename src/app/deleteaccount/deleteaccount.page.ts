import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuController, NavController } from "@ionic/angular";
import { error } from "util";
import { RestService } from "../rest.service";

@Component({
  selector: "app-deleteaccount",
  templateUrl: "./deleteaccount.page.html",
  styleUrls: ["./deleteaccount.page.scss"],
})
export class DeleteaccountPage implements OnInit {
  userId: any;
  name: any;
  email: any;
  expired_on: any;
  isExpired: any;
  planName: any;
  planMonths: any;
  userRole: any;
  availableRoles = {
    4: "Seller",
    5: "Buyer",
    6: "Supplier",
    7: "Broker",
    8: "Guest",
  };
  countries: any;
  selectedCountries: any;
  state: any;
  selectedState: any;
  city: any;
  selectedCity: any;

  data: any;
  error: any = "false";
  errorMessage: any;
  defaultPort: any;

  apptype: any;
  reasons = {
    0: "Tedious Sign-up process",
    1: "Installed a Competitor's App",
    2: "Addictive App",
    3: "Unused App",
  };
  selectedReasonIndex = '';

  constructor(
    public route: ActivatedRoute,
    public restSer: RestService,
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
    this.userId = this.route.snapshot.paramMap.get("id");
    this.name = localStorage.getItem("name");
    // this.email = localStorage.getItem("email");
    this.expired_on = localStorage.getItem("expired_on");
    this.isExpired = localStorage.getItem("isExpired");

    if (localStorage.getItem("apptype") == "USD") {
      this.userRole = this.availableRoles[localStorage.getItem("usd_role")];
    } else {
      this.userRole = this.availableRoles[localStorage.getItem("role")];
    }

    this.apptype = localStorage.getItem("apptype");
    this.defaultPort = localStorage.getItem("defalutPort");
    console.log(this.userRole);
  }

  getProfileDetails() {}
  showMenu() {
    console.log("jknk");
    this.menuCtrl.close();
    this.menuCtrl.open();
  }
  ngOnInit() {
  }
  
  gotohome() {
    if (
      localStorage.getItem("usd_role") != "0" &&
      localStorage.getItem("is_usd_active") != "0" &&
      localStorage.getItem("isExpiryUSD") == "false"
    ) {
      localStorage.setItem("apptype", "USD");
      this.navCtrl.navigateForward(["priceusd"]);
    } else {
      localStorage.setItem("apptype", "OTHER");
      this.navCtrl.navigateForward(["prices"]);
    }
  }
 
  
  openModel() {
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
  uninstallReason(reasonIndex){
	this.selectedReasonIndex = reasonIndex;
  }
  deleteAccount(){
	if( this.selectedReasonIndex != undefined && this.selectedReasonIndex != '' && this.selectedReasonIndex != null){
		if( this.email != undefined && this.email != '' && this.email != null ){
			if( this.email == localStorage.getItem("email")){
				this.restSer.deleteUser(localStorage.getItem("id")).then(
					(res: any) => {
					  if (res.status == true) {
						this.defaultPort = this.selectedCity;
						localStorage.clear();
						this.menuCtrl.close();
						this.navCtrl.navigateForward(['login']);

						this.restSer.presentToast("Account deleted successfully.");
					  }
					},
					(err: any) => {
					  console.log(err);
					}
				  );
			}else{
				this.restSer.presentToast("Please check your email id and try again.");
			}
		}else{
			this.restSer.presentToast("Please confirm your email id.");
		}
	}else{
		this.restSer.presentToast("Please select a reason.");
	}
  }
}
