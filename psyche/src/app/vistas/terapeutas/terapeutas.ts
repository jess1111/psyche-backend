import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terapeutas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './terapeutas.html',
  styleUrls: ['./terapeutas.scss']
})
export class TerapeutasComponent {
  terapeutas = [
    {
      nombre: 'Dra. María González',
      especialidad: 'Psicóloga Clínica',
      descripcion: 'Especialista en terapia cognitivo-conductual con más de 10 años de experiencia en el tratamiento de ansiedad y depresión.',
      areas: ['Ansiedad', 'Depresión', 'Terapia Individual']
    },
    {
      nombre: 'Dr. Carlos Martínez',
      especialidad: 'Psicólogo de Pareja y Familia',
      descripcion: 'Experto en terapia sistémica familiar y de pareja, ayudando a fortalecer vínculos y mejorar la comunicación.',
      areas: ['Terapia de Pareja', 'Terapia Familiar', 'Mediación']
    },
    {
      nombre: 'Lic. Ana Rodríguez',
      especialidad: 'Psicóloga Infantil',
      descripcion: 'Dedicada al bienestar emocional de niños y adolescentes, con enfoque en desarrollo y adaptación.',
      areas: ['Psicología Infantil', 'Adolescentes', 'Orientación Familiar']
    }
  ];
}
