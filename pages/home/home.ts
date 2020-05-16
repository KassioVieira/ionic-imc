import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  peso: number;
  altura: number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  handlerButtonClick(){
    if(!this.altura || !this.peso){
      this.showAlert("Os campos são de preenchimento obrigatório")
    }else{
      const alturaMetro = this.altura /100;
      const imc = (this.peso/ (alturaMetro * alturaMetro))
      this.showAlert(this.messages(imc))
    }

  }

  messages(imc) {
    if (imc <= 16 || imc > 16 && imc < 16.9) {
      return "Muito abaixo do peso"
    } else if (imc >= 17 && imc <= 18.49) {
      return "Abaixo do peso"
    } else if (imc >= 18.50 && imc <= 24.99) {
      return "Peso normal"
    } else if (imc >= 25 && imc <= 29.99) {
      return "Acima do peso"
    } else if (imc >= 30 && imc <= 34.99) {
      return "Obesidade Grau I"
    } else if (imc >= 35 && imc <= 40) {
      return "Obesidade Grau II"
    } else if (imc > 40) {
      return "Obesidade Grau III"
    }
  }

  showAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
