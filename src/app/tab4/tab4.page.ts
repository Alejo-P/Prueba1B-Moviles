import { Component } from '@angular/core';
import { DeviceStorage, writeResult } from '../storage/deviceStorage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  public texto:string = "";
  public nombre:string = "";
  public resultado:writeResult = {isSaved:false, message:""};

  constructor(public deviceStorage: DeviceStorage, private toastController: ToastController) { }

  async guardarTexto():Promise<void> {
    if (this.texto === "" || this.nombre === "") {
      return;
    }
    // Guardar el texto en un archivo de texto
    this.resultado = await this.deviceStorage.writeFile(`${this.nombre}.txt`, this.texto);

    // Mostrar toast con el mensaje de resultado
    const toast = await this.toastController.create({
      message: this.resultado.message,
      duration: 3000,
      color: this.resultado.isSaved ? 'success' : 'danger'
    });
    await toast.present();

  }

}
