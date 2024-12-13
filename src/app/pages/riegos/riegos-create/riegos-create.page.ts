import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { ToastController, AlertController } from '@ionic/angular';
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
  isLoading = true; // Estado de carga

  constructor(
    private firestore: Firestore,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    const plantasCollection = collection(this.firestore, 'plantas');
    this.plantas = collectionData(plantasCollection, { idField: 'id' });

    const encargadosCollection = collection(this.firestore, 'encargados');
    this.encargados = collectionData(encargadosCollection, { idField: 'id' });

    this.plantas.subscribe(plantas => {
      this.hasPlantas = plantas.length > 0;
      this.checkLoadingState();
    });

    this.encargados.subscribe(encargados => {
      this.hasEncargados = encargados.length > 0;
      this.checkLoadingState();
    });
  }

  ngOnInit() {}

  checkLoadingState() {
    if (this.hasPlantas !== undefined && this.hasEncargados !== undefined) {
      this.isLoading = false;
    }
  }

  async crearPlanta() {
    if (!this.riego.plantaId || !this.riego.encargadoId || !this.riego.fecha || !this.riego.observaciones) {
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
        message: 'Error al crear el riego. Inténtalo nuevamente.',
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

  // Manejar la salida del formulario
  async salir() {
    const hasData = this.riego.plantaId || this.riego.encargadoId || this.riego.fecha || this.riego.observaciones;
    if (!hasData) {
      this.router.navigate(['/admin']);
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Confirmar salida',
        message: '¿Está seguro de que desea salir? Se perderán los datos ingresados.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Salir',
            handler: () => {
              this.router.navigate(['/admin']);
            },
          },
        ],
      });
      await alert.present();
    }
  }
}
