import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from "./Hero";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
  })
  export class InMemoryDataService implements InMemoryDataService {
    createDb() {
      const heroes = [
        { id: 11, name: 'Seiya', rank: 'Saint', attak: 'PegasusRyusenken'},       
        { id: 12, name: 'Vegeta',rank: 'Saiyajin',attak: 'Final Flash'},
        { id: 13, name: 'Ichigo',rank: 'Chien',attak: 'Getsuga'},        
        { id: 14, name: 'Saber',rank: 'Heroic',attak: 'Excalibur'},         
        { id: 15, name: 'SuperGirl',rank: 'Kryptonien',attak: 'HeatVision'},
        { id: 16, name: 'Sasuke',rank: 'Ninja',attak: 'MangekyouSharingan'},
        { id: 17, name: 'SuperMan',rank: 'Kryptonien',attak: 'Cold Breath'},
        ];
        return {heroes};
    }
     // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
    genId(heroes: Hero[]): number {
      return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
  }