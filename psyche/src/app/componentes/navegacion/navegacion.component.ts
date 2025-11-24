import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Importante para que funcionen los links
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {

}
