import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-se1',
  templateUrl: './se1.page.html',
  styleUrls: ['./se1.page.scss'],
})
export class SE1Page implements OnInit {
  item: string = 'Uso de checkBox'
  data = [
  {
    name: 'primary',
    selected: true
  },
  {
    name: 'secondary',
    selected: true
  },
  {
    name: 'danger',
    selected: true
  },
  {
    name: 'warning',
    selected: true
  },
  {
    name: 'success',
    selected: true
  }
  ];
  
  constructor(private actionSheetCtrl:ActionSheetController  ) { }

  ngOnInit() {
  }


  //Funcion del Boton
  onClick(){
    this.presentActionSheet();
  }

  //Funcion onCheck
  onCheck(item: any){
    console.log(this.item);
  }


  // Crear Fuciones
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
