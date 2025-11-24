import { Routes } from '@angular/router';
import { PaginaInicio } from './vistas/pagina-inicio/pagina-inicio';
import { ContactoComponent } from './vistas/contacto/contacto';
import { ServiciosComponent } from './vistas/servicios/servicios';
import { TerapeutasComponent } from './vistas/terapeutas/terapeutas';

export const routes: Routes = [
  { path: '', component: PaginaInicio },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: TerapeutasComponent },
  { path: '**', redirectTo: '' }
];
