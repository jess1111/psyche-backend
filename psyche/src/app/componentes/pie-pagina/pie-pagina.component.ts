import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pie-pagina', // <--- ESTE es el nombre que usamos en el HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-pagina.component.html',
  styleUrl: './pie-pagina.component.scss' // O .scss si lo tienes
})
export class PiePaginaComponent { // Nombre estándar con 'Component' al final
  // Lógica del footer
}
