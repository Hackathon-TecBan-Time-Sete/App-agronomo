import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

import * as mapboxgl from 'mapbox-gl'



@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements OnInit {


  mapa: mapboxgl.Map;

  constructor() { }

  ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXVndXN0b2JvbmRhbmNhIiwiYSI6ImNrYmU1NmYycDBpYncyc253enA4dnlidnIifQ.20woFSBsekSkzHhCdtz1Pw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-47.8294755, -20.4188716],
    zoom: 13
    });
     
    var marker = new mapboxgl.Marker()
    .setLngLat([-47.8294755, -20.4188716])
    .addTo(map);
  }
}



