import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { docData } from '@angular/fire/firestore';


@Component({
  selector: 'app-riegos-list',
  templateUrl: './riegos-list.page.html',
  styleUrls: ['./riegos-list.page.scss'],
})
export class RiegosListPage implements OnInit {
  riegos$: Observable<any[]> = of([]); // Initialize with an empty observable array
  isLoading = true; // Estado de carga
  hasRiegos = false; // Estado de existencia de riegos
  encargadosMap: { [key: string]: string } = {};
  plantasMap: { [key: string]: string } = {};
  encargadoNombre = '';     // Nombre del encargado
  private pendingFetches = 0;

  constructor(
    private firestore: Firestore,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener riegos desde Firestore
    const riegosCollection = collection(this.firestore, 'riegos');
    this.riegos$ = collectionData(riegosCollection, { idField: 'id' });

    // Desactivar el estado de carga cuando se reciban los datos
    this.riegos$.subscribe(riegos => {
      this.pendingFetches = riegos.length * 2; // Two fetches per riego (encargado and planta)
      this.hasRiegos = riegos.length > 0;
      if (riegos.length === 0) {
        this.isLoading = false;
      }
      riegos.forEach(riego => {
        this.fetchEncargadoNombre(riego.encargadoId);
        this.fetchPlantaNombre(riego.plantaId);
      });
    });
  }

  fetchEncargadoNombre(encargadoId: string) {
    const encargadoDocRef = doc(this.firestore, `encargados/${encargadoId}`);
    docData(encargadoDocRef).subscribe((data: any) => {
      this.encargadosMap[encargadoId] = data ? data.nombre : 'Nombre no encontrado';
      this.checkLoadingState();
    });
  }

  fetchPlantaNombre(plantaId: string) {
    const plantaDocRef = doc(this.firestore, `plantas/${plantaId}`);
    docData(plantaDocRef).subscribe((data: any) => {
      this.plantasMap[plantaId] = data ? data.nombre : 'Nombre no encontrado';
      this.checkLoadingState();
    });
  }

  checkLoadingState() {
    this.pendingFetches--;
    if (this.pendingFetches === 0) {
      this.isLoading = false;
    }
  }

  // Confirmar eliminación
  async confirmarEliminar(riegoId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este riego?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarRiego(riegoId);
          },
        },
      ],
    });
    await alert.present();
  }

  // Eliminar riego
  async eliminarRiego(riegoId: string) {
    try {
      const riegoDocRef = doc(this.firestore, `riegos/${riegoId}`);
      await deleteDoc(riegoDocRef);

      // Mostrar mensaje de éxito
      const toast = await this.toastCtrl.create({
        message: 'Riego eliminado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      console.error('Error al eliminar riego:', error);

      // Mostrar mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Error al eliminar riego.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

  // Redirigir a la página de edición
  editarPlanta(riegoId: string) {
    this.router.navigate(['/admin/riegos-edit', riegoId]);
  }

  // Redirigir a la página de detalles
  verDetalle(riegoId: string) {
    this.router.navigate(['/admin/riegos-detail', riegoId]);
  }

  // Redirigir a la página de creación de nuevo riego
  crearNuevoRiego() {
    this.router.navigate(['/admin/riegos-create']);
  }

  // Redirigir a la pagina principal admin
  volverAlInicio() {
    this.router.navigate(['/admin']);
  }

}
