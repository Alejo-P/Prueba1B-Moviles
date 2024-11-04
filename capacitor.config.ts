import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.appprueba',
  appName: 'App-Prueba',
  webDir: 'www',
  plugins: {
    App:{
      androidIcon: "icon"
    },
    SplashScreen: {
      launchShowDuration: 0, // Duración de la animación de entrada (Usada en otro lado de la aplicacion)
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#f2f2f2", // Color de fondo del splash screen
      androidSplashResourceName: "splash", // Nombre del archivo de imagen en la carpeta resources de android
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    }
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000'
    }
  }
};

export default config;
