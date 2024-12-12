import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-encargados-list',
  templateUrl: './encargados-list.page.html',
  styleUrls: ['./encargados-list.page.scss'],
})
export class EncargadosListPage implements OnInit {
  encargados$!: Observable<any[]>;
  isLoading = true;

  constructor(
    private firestore: Firestore,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    const encargadosCollection = collection(this.firestore, 'encargados');
    this.encargados$ = collectionData(encargadosCollection, { idField: 'id' });

    this.encargados$.subscribe(() => {
      this.isLoading = false; // Desactivar indicador de carga
    });
  }

  // Confirmar eliminación
  async confirmarEliminar(encargadoId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este encargado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarEncargado(encargadoId);
          },
        },
      ],
    });
    await alert.present();
  }

  // Editar encargado
  editarEncargado(encargadoId: string) {
    this.router.navigate(['/admin/encargados-edit', encargadoId]);
  }

  // Ver detalles del encargado

  verDetalle(encargadoId: string) {
    this.router.navigate(['/admin/encargados-detail', encargadoId]);
  }
  
  

  // Eliminar encargado
  async eliminarEncargado(encargadoId: string) {
    try {
      const encargadoDocRef = doc(this.firestore, `encargados/${encargadoId}`);
      await deleteDoc(encargadoDocRef);

      // Mostrar mensaje de éxito
      const toast = await this.toastCtrl.create({
        message: 'Encargado eliminado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      console.error('Error al eliminar encargado:', error);

      // Mostrar mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Error al eliminar el encargado.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }
}
