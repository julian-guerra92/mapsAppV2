import { style } from '@angular/animations';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
    `
    .map-container {
      position: fixed;
      top: 0px;
      right: 0px;
      width: 100%;
      height: 100%;
    }
    `
  ]
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation) throw Error('No hay placeService.userLocation');
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesService.userLocation,
      zoom: 14
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo(map);
    
    this.mapService.setMap(map);

  }

}
