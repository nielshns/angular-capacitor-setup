import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.2cool4school.app',
  appName: '2cool4school',
  webDir: 'dist/2cool4school',
  server: {
    androidScheme: 'https'
  }
};

export default config;
