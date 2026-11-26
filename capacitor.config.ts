import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.agroceresbinova.portfolio',
  appName: 'Portfólio Agroceres Binova',
  webDir: '.',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
