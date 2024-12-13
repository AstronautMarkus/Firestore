import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-plantas-detail',
  templateUrl: './plantas-detail.page.html',
  styleUrls: ['./plantas-detail.page.scss'],
})
export class PlantasDetailPage implements OnInit {
  plantaId!: string;        // ID de la planta
  planta: any;              // Datos de la planta
  encargadoNombre = '';     // Nombre del encargado
  isLoading = true;         // Estado de carga

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore
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

        // Cargar el nombre del encargado si existe un encargadoId
        if (this.planta.encargadoId) {
          this.cargarEncargadoNombre(this.planta.encargadoId);
        }
      } else {
        console.error('La planta no existe.');
        this.router.navigate(['/admin/plantas-list']); // Redirige si no existe
      }
    } catch (error) {
      console.error('Error al cargar la planta:', error);
    } finally {
      this.isLoading = false; // Desactivar indicador de carga
    }
  }

  async cargarEncargadoNombre(encargadoId: string) {
    try {
      const encargadoDocRef = doc(this.firestore, `encargados/${encargadoId}`);
      const encargadoSnapshot = await getDoc(encargadoDocRef);

      if (encargadoSnapshot.exists()) {
        this.encargadoNombre = encargadoSnapshot.data()['nombre'];
      } else {
        console.error('El encargado no existe.');
      }
    } catch (error) {
      console.error('Error al cargar el nombre del encargado:', error);
    }
  }

  volverAlListado() {
    this.router.navigate(['/admin/plantas-list']);
  }
}
