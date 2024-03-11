import { Component } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
title : string = 'Welcome to residence component'
residence={id:1,name:'Residence olfa',surface:450}
}
