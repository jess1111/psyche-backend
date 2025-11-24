import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.scss']
})
export class ServiciosComponent {
  servicios = [
    {
      icono: '👤',
      titulo: 'Terapia Individual',
      descripcion: 'Espacio confidencial y personalizado para trabajar tus desafíos emocionales.',
      beneficios: [
        'Manejo de ansiedad y estrés',
        'Tratamiento de depresión',
        'Fortalecimiento de autoestima',
        'Desarrollo personal y autoconocimiento',
        'Gestión de duelo y pérdidas'
      ]
    },
    {
      icono: '💞',
      titulo: 'Terapia de Pareja',
      descripcion: 'Fortalece tu relación y mejora la comunicación con tu pareja.',
      beneficios: [
        'Mejora de la comunicación',
        'Resolución de conflictos',
        'Reconstrucción de la confianza',
        'Fortalecimiento del vínculo afectivo',
        'Manejo de crisis relacionales'
      ]
    },
    {
      icono: '👨‍👩‍👧‍👦',
      titulo: 'Terapia Familiar',
      descripcion: 'Abordaje integral de las dinámicas familiares para mejorar la convivencia.',
      beneficios: [
        'Mejora de la comunicación familiar',
        'Resolución de conflictos intergeneracionales',
        'Fortalecimiento de vínculos',
        'Adaptación a cambios familiares',
        'Establecimiento de límites saludables'
      ]
    },
    {
      icono: '🧠',
      titulo: 'Evaluación Psicológica',
      descripcion: 'Evaluaciones profesionales para diagnóstico y orientación terapéutica.',
      beneficios: [
        'Evaluación de personalidad',
        'Diagnóstico clínico',
        'Orientación vocacional',
        'Evaluación neuropsicológica',
        'Informes profesionales'
      ]
    }
  ];
}
