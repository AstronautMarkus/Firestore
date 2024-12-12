import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.page.html',
  styleUrls: ['./plantas-list.page.scss'],
})
export class PlantasListPage implements OnInit {
  plantas$!: Observable<any[]>;
  isLoading = true; // Add loading state

  constructor(
    private firestore: Firestore,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    const plantasCollection = collection(this.firestore, 'plantas');
    this.plantas$ = collectionData(plantasCollection, { idField: 'id' });
    this.plantas$.subscribe(() => {
      this.isLoading = false; // Set loading state to false when data is loaded
    });
  }

  // Confirmar eliminación
  async confirmarEliminar(plantaId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta planta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarPlanta(plantaId);
          },
        },
      ],
    });
    await alert.present();
  }

  // Eliminar planta
  async eliminarPlanta(plantaId: string) {
    try {
      const plantaDocRef = doc(this.firestore, `plantas/${plantaId}`);
      await deleteDoc(plantaDocRef);

      // Mostrar mensaje de éxito
      const toast = await this.toastCtrl.create({
        message: 'Planta eliminada exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      console.error('Error al eliminar planta:', error);

      // Mostrar mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Error al eliminar la planta.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

  // Redirigir a la página de edición
  editarPlanta(plantaId: string) {
    this.router.navigate(['/admin/plantas-edit', plantaId]);
  }
  
}
