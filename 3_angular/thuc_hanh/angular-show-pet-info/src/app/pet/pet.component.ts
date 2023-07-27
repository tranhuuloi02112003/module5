import {Component, OnInit} from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://static.wixstatic.com/media/8bebf2_22a60eb8748546dabd8932587224672d~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20210811_181145.jpg'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
