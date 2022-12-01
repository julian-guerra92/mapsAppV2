import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFuZ3VlcnJhOTIiLCJhIjoiY2w2emt0aG54MDJheTN1cWYzamFnMnVuMyJ9.ELg7-hBy1UjG8BYoWZlI8Q';

if(!navigator.geolocation){
  alert('Navegador no soporta la geolocalización');
  throw new Error('Navegador no soporta la geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
