import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-encargados-edit',
  templateUrl: './encargados-edit.page.html',
  styleUrls: ['./encargados-edit.page.scss'],
})
export class EncargadosEditPage implements OnInit {
  encargadoId!: string; // ID del encargado
  encargado: any;       // Datos del encargado

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    // Obtener el ID del encargado desde la URL
    this.encargadoId = this.route.snapshot.paramMap.get('id')!;
    this.cargarEncargado();
  }

  async cargarEncargado() {
    try {
      const encargadoDocRef = doc(this.firestore, `encargados/${this.encargadoId}`);
      const encargadoSnapshot = await getDoc(encargadoDocRef);

      if (encargadoSnapshot.exists()) {
        this.encargado = encargadoSnapshot.data();
      } else {
        console.error('El encargado no existe.');
        this.router.navigate(['/admin/encargados-list']); // Redirige si no existe
      }
    } catch (error) {
      console.error('Error al cargar el encargado:', error);
    }
  }

  async guardarCambios() {
    try {
      const encargadoDocRef = doc(this.firestore, `encargados/${this.encargadoId}`);
      await updateDoc(encargadoDocRef, this.encargado);

      const toast = await this.toastCtrl.create({
        message: 'Encargado actualizado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();

      this.router.navigate(['/admin/encargados-list']); // Redirigir al listado
    } catch (error) {
      console.error('Error al guardar cambios:', error);

      const toast = await this.toastCtrl.create({
        message: 'Error al guardar los cambios.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }
}
