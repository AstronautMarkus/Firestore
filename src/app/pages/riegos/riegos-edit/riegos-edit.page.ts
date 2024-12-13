import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc, updateDoc, collection, collectionData } from '@angular/fire/firestore';
import { ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-riegos-edit',
  templateUrl: './riegos-edit.page.html',
  styleUrls: ['./riegos-edit.page.scss'],
})
export class RiegosEditPage implements OnInit {
  riegoId!: string;   // ID del riego
  riego: any = {};    // Datos del riego
  isLoading = true;   // Estado de carga
  plantas: Observable<any[]>;    // Lista de plantas
  encargados: Observable<any[]>; // Lista de encargados

  constructor(
    private firestore: Firestore,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Cargar colecciones relacionadas
    const plantasCollection = collection(this.firestore, 'plantas');
    this.plantas = collectionData(plantasCollection, { idField: 'id' });

    const encargadosCollection = collection(this.firestore, 'encargados');
    this.encargados = collectionData(encargadosCollection, { idField: 'id' });
  }

  ngOnInit() {
    // Obtener el ID del riego desde la URL
    this.riegoId = this.route.snapshot.paramMap.get('id')!;
    this.cargarRiego();
  }

  async cargarRiego() {
    try {
      const riegoDocRef = doc(this.firestore, `riegos/${this.riegoId}`);
      const riegoSnapshot = await getDoc(riegoDocRef);

      if (riegoSnapshot.exists()) {
        this.riego = riegoSnapshot.data();
      } else {
        console.error('El riego no existe.');
        this.router.navigate(['/admin/riegos-list']); // Redirige si no existe
      }
    } catch (error) {
      console.error('Error al cargar el riego:', error);
    } finally {
      this.isLoading = false; // Desactivar indicador de carga
    }
  }

  async guardarCambios() {
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
      const riegoDocRef = doc(this.firestore, `riegos/${this.riegoId}`);
      await updateDoc(riegoDocRef, this.riego);

      const toast = await this.toastCtrl.create({
        message: 'Riego actualizado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();

      this.router.navigate(['/admin/riegos-list']); // Redirigir al listado
    } catch (error) {
      console.error('Error al actualizar el riego:', error);

      const toast = await this.toastCtrl.create({
        message: 'Error al guardar los cambios.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }

  async confirmarCancelar() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Cancelación',
      message: '¿Estás seguro de que deseas cancelar los cambios?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Sí',
          handler: () => {
            this.router.navigate(['/admin/riegos-list']); // Redirige al listado
          },
        },
      ],
    });
    await alert.present();
  }
}
