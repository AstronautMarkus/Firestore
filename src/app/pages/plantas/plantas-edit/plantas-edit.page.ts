import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-plantas-edit',
  templateUrl: './plantas-edit.page.html',
  styleUrls: ['./plantas-edit.page.scss'],
})
export class PlantasEditPage implements OnInit {
  plantaId!: string; // ID de la planta
  planta: any = {};  // Datos de la planta

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    // Obtener el ID de la URL
    this.plantaId = this.route.snapshot.paramMap.get('id')!;
    this.cargarPlanta();
  }

  async cargarPlanta() {
    try {
      const plantaDocRef = doc(this.firestore, `plantas/${this.plantaId}`);
      const plantaSnapshot = await getDoc(plantaDocRef);

      if (plantaSnapshot.exists()) {
        this.planta = plantaSnapshot.data();
      } else {
        console.error('La planta no existe.');
        this.router.navigate(['/admin']); // Redirige si no existe
      }
    } catch (error) {
      console.error('Error al cargar planta:', error);
    }
  }

  async guardarCambios() {
    try {
      const plantaDocRef = doc(this.firestore, `plantas/${this.plantaId}`);
      await updateDoc(plantaDocRef, this.planta);

      // Mostrar mensaje de éxito
      const toast = await this.toastCtrl.create({
        message: 'Cambios guardados exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();

      // Redirigir al listado después de guardar
      this.router.navigate(['/admin/plantas-list']);
    } catch (error) {
      console.error('Error al guardar cambios:', error);

      // Mostrar mensaje de error
      const toast = await this.toastCtrl.create({
        message: 'Error al guardar los cambios.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }
}
