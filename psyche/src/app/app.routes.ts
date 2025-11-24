// Código que se ve en la imagen:
import { Routes } from '@angular/router';
import { PaginaInicio } from './vistas/pagina-inicio/pagina-inicio';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';

export const routes: Routes = [
  { path: '', component: PaginaInicio },
  // ... otras rutas ...
  { path: '**', redirectTo: '' }
];
