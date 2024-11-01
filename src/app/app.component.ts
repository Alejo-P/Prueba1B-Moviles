import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.showSplashScreen(); // Mostrar el splash screen
  }

  // Método para mostrar el splash screen
  async showSplashScreen() {
    await SplashScreen.show({
      autoHide: true, // Ocultar automáticamente el splash screen
      showDuration: 3000 // Duración de la animación de entrada
    });
  }
}
