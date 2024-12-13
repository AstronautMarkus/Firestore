import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encargados-create',
  templateUrl: './encargados-create.page.html',
  styleUrls: ['./encargados-create.page.scss'],
})
export class EncargadosCreatePage implements OnInit {
  encargado = {
    nombre: '',
    correo: '',
    telefono: '',
  };

  constructor(private firestore: Firestore, private toastCtrl: ToastController, private router: Router) {}

  ngOnInit() {}

  async crearEncargado() {
    if (!this.encargado.nombre || !this.encargado.correo || !this.encargado.telefono) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, complete todos los campos.',
        duration: 2000,
        color: 'warning',
      });
      await toast.present();
      return;
    }
    try {
      const encargadosCollection = collection(this.firestore, 'encargados');
      await addDoc(encargadosCollection, this.encargado);

      const toast = await this.toastCtrl.create({
        message: 'Encargado creado exitosamente.',
        duration: 2000,
        color: 'success',
      });
      await toast.present();

      this.encargado = { nombre: '', correo: '', telefono: '' }; // Limpiar formulario

      // Redirigir a la lista de encargadosd
      this.router.navigate(['/admin/encargados-list']);
    } catch (error) {
      console.error('Error al crear encargado:', error);

      const toast = await this.toastCtrl.create({
        message: 'Error al crear el encargado.',
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
