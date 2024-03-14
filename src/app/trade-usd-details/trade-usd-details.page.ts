import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ImageprevPage } from '../imageprev/imageprev.page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trade-usd-details',
  templateUrl: './trade-usd-details.page.html',
  styleUrls: ['./trade-usd-details.page.scss'],
})
export class TradeUsdDetailsPage implements OnInit {

  galleryData: any;
  galleryId: any;
  tradeDetails: any;
  spec: any;
  userFirstName: any;
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: true,
    pagination: false,
    speed: 600,
    autoplay: true,
    loop: false
  };
  public notifs: any;
  public todayDate: any;
  public imageUrl: any;
  public showImage: any = false;
  public ShownImage: any;


  constructor(public actRoute: ActivatedRoute, public apiser: RestService, public modalCtrl: ModalController, public alertController: AlertController, public location: Location) {
    let tradeData = this.actRoute.snapshot.paramMap.get('tradeDetail');
    console.log(tradeData)

    this.tradeDetails = JSON.parse(tradeData);
    console.log(this.tradeDetails)

    this.imageUrl = this.apiser.imageUrl;
    // this.getTradeDetails(this.galleryId);

    this.userFirstName = localStorage.getItem('name')[0];
  }

  ngOnInit() {
  }

  getTradeDetails(galleryId) {
    this.apiser.presentLoader("Loading trade details...");
    this.apiser.getTradeData(galleryId).then((res: any) => {
      console.log('trade details');
      console.log(res);

      this.apiser.loaderCtrl.dismiss();
      this.galleryData = res.data;
      this.spec = res.data.specification;

      console.log(this.spec);

    }, (err: any) => {

    });
  }
  parseDate = (date) => {
    var someDate = new Date(date);
    // someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
    return (someDate.getDate() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear());
  }

  async openModal(image) {
    let modal = await this.modalCtrl.create({
      component: ImageprevPage,
      componentProps: { img: image }
    });
    await modal.present();
  }
  generateDate = (date) => {
    var someDate = new Date(date);
    return someDate.getDay() + '/' + (someDate.getMonth() + 1) + '/' + someDate.getFullYear();
  }
  //intrested/trade
  userShowInterest = (tradeId, $event) => {
    $event.currentTarget.classList.add('hide');
    $event.currentTarget.parentNode.parentNode.children[1].classList.remove('hide');
    // $event.currentTarget.parentNode.parentNode.children[2].classList.remove('hide');

    // return false;

    let postedData = {
      tradeId: tradeId,
      userId: localStorage.getItem('id')
    }
    this.apiser.tradeInterest(postedData).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  }
  back() {
    this.location.back();
  }

  async acceptHotDeal(bidId) {
    const alert = await this.alertController.create({
      message: 'Kindly confirm your interest',
      buttons: [

        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.apiser.presentLoader('Please wait');
            this.apiser.acceptHotDeal({ 'user_id': localStorage.getItem('id'), 'bid_id': bidId }).then((res: any) => {
              // this.getListBids();
              console.log(res)
              this.apiser.dismissLoader()
            }, (err: any) => {
              console.log(err)
              this.apiser.dismissLoader()
            });
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
          },
        }
      ],
      cssClass: "confirm"

    });
    await alert.present()

    return false;


  }

  openImage(imagePrefix, destination, image) {
    this.showImage = true;
    this.ShownImage = imagePrefix + '' + destination + '/' + image;
  }

  closeImage() {
    this.showImage = false;
  }
}