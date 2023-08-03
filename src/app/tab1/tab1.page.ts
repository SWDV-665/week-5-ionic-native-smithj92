import { Component } from '@angular/core';
//import { NavController } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
//import { AlertController } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Milk",
      quantity: 3
    },
  ];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async removeItem(item: any, index: number) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + index + "...",
      duration: 3000
    });
    await toast.present();
    
    this.items.splice(index, 1);
  }

  async shareItem(item: any, index: number) {
    console.log("Sharing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Sharing Item - ' + index + "...",
      duration: 3000
    });
    await toast.present();
    

  }
  
  async editItem(item: any, index: number) {
    console.log("Editing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item - ' + index + "...",
      duration: 3000
    });
    await toast.present();
    this.showEditItemPrompt(item, index)
    
  }


  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Item',
      message: 'Please enter an item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await prompt.present();
  }

  async showEditItemPrompt(item: any, index: number) {
    const prompt = await this.alertCtrl.create({
      header: 'Edit Item',
      message: 'Please edit an item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.items[index] = item;
          }
        }
      ]
    });
    await prompt.present();
  }

}
