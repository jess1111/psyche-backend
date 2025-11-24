import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importamos los componentes (Fíjate que ya no dice .component en el nombre de la clase)
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Aquí registramos los componentes para poder usarlos en el HTML
  imports: [RouterOutlet, NavegacionComponent, PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // Asegúrate de que apunte a styles.scss global o app.component.scss si existe
})
export class AppComponent {
  title = 'psyche';
}
