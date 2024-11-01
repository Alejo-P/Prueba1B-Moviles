import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.pruebaB1Moviles',
  appName: 'pruebaB1Moviles',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // Duración de la animación de entrada (Usada en otro lado de la aplicacion)
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      // Fondo gris claro
      backgroundColor: "#f2f2f2", 
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    },
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
