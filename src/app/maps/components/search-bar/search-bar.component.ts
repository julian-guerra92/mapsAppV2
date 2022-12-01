import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService) { }

  //Método para que se demore un poco el envío del valor de búsqueda
  onQuerychange(query: string = '') {
    if(this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query);
    }, 1000);
  }

}
