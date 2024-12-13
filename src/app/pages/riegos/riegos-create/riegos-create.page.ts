import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-riegos-create',
  templateUrl: './riegos-create.page.html',
  styleUrls: ['./riegos-create.page.scss'],
})
export class RiegosCreatePage implements OnInit {

  riego = {
    plantaId: '',
    encargadoId: '',
    fecha: '',
    observaciones: '',
  };

  plantas: Observable<any[]>;
  encargados: Observable<any[]>;

  hasEncargados = false; // Estado de existencia de encargados
  hasPlantas = false; // Estado de existencia de plantas

  constructor(private firestore: Firestore, private toastCtrl: ToastController, private router: Router) {
    const plantasCollection = collection(this.firestore, 'plantas');
    this.plantas = collectionData(plantasCollection, { idField: 'id' });

    const encargadosCollection = collection(this.firestore, 'encargados');
    this.encargados = collectionData(encargadosCollection, { idField: 'id' });

    this.plantas.subscribe(plantas => {
      this.hasPlantas = plantas.length > 0;
    });

    this.encargados.subscribe(encargados => {
      this.hasEncargados = encargados.length > 0;
    });
  }

  ngOnInit() {
  }

  async crearPlanta() {
    if (!this.riego.plantaId || !this.riego.encargadoId || !this.riego.fecha || !this.riego.observaciones ) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, complete todos los campos.',
        duration: 2000,
        color: 'warning',
      });
      await toast.present();
      return;
    }
    try {
      const riegosCollection = collection(this.firestore, 'riegos');
      await addDoc(riegosCollection, this.riego);

      // Mostrar un mensaje de éxito
      const toast = await this.toastCtrl.create({
        message: 'Riego creado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
      this.router.navigate(['/admin']); // Volver a la página de administración

      // Limpiar el formulario
      this.riego = {
        plantaId: '',
        encargadoId: '',
        fecha: '',
        observaciones: '',
      };
    } catch (error) {
      console.error('Error al crear riego:', error);

      // Mostrar un mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Error al crear la planta. Inténtalo nuevamente.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

  volverAlInicio() {
    this.router.navigate(['/admin']);
  }

  // Redirigir a la página de creación de nuevo encargado
  crearNuevoEncargado() {
    this.router.navigate(['/admin/encargados-create']);
  }

  // Redirigir a la página de creación de nueva planta
  crearNuevaPlanta() {
    this.router.navigate(['/admin/plantas-create']);
  }

}
