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
