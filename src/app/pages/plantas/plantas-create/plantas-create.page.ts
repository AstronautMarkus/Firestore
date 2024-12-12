import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantas-create',
  templateUrl: './plantas-create.page.html',
  styleUrls: ['./plantas-create.page.scss'],
})
export class PlantasCreatePage implements OnInit {
  planta = {
    nombre: '',
    especie: '',
    frecuenciaRiego: '',
    ubicacion: '',
    encargadoId: '',
  };

  constructor(private firestore: Firestore, private toastCtrl: ToastController, private router: Router) {}

  ngOnInit() {}

  async crearPlanta() {
    if (!this.planta.nombre || !this.planta.especie || !this.planta.frecuenciaRiego || !this.planta.ubicacion || !this.planta.encargadoId) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, complete todos los campos.',
        duration: 2000,
        color: 'warning',
      });
      await toast.present();
      return;
    }
    try {
      const plantasCollection = collection(this.firestore, 'plantas');
      await addDoc(plantasCollection, this.planta);

      // Mostrar un mensaje de éxito
      const toast = await this.toastCtrl.create({
        message: 'Planta creada exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
      this.router.navigate(['/admin']); // Volver a la página de administración

      // Limpiar el formulario
      this.planta = {
        nombre: '',
        especie: '',
        frecuenciaRiego: '',
        ubicacion: '',
        encargadoId: '',
      };
    } catch (error) {
      console.error('Error al crear planta:', error);

      // Mostrar un mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Error al crear la planta. Inténtalo nuevamente.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

    // Redirigir a la pagina principal admin
    volverAlInicio() {
      this.router.navigate(['/admin']);
    }

}
