import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss']
})
export class ContactoComponent {
  formularioContacto: FormGroup;
  mensajeEnviado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      tipoCita: ['online', Validators.required],
      mensaje: ['']
    });
  }

  enviarFormulario() {
    if (this.formularioContacto.valid) {
      console.log('Formulario enviado:', this.formularioContacto.value);
      this.mensajeEnviado = true;
      this.formularioContacto.reset({ tipoCita: 'online' });

      setTimeout(() => {
        this.mensajeEnviado = false;
      }, 5000);
    } else {
      this.formularioContacto.markAllAsTouched();
    }
  }
}
