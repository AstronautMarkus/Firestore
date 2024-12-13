import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-riegos-detail',
  templateUrl: './riegos-detail.page.html',
  styleUrls: ['./riegos-detail.page.scss'],
})
export class RiegosDetailPage implements OnInit {
  riegoId!: string;       // ID del riego
  riego: any;             // Datos del riego
  encargadoNombre = '';   // Nombre del encargado
  plantaNombre = '';      // Nombre de la planta
  isLoading = true;       // Estado de carga
  observaciones = '';     // Observaciones del riego

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    // Obtener el ID del riego desde la URL
    this.riegoId = this.route.snapshot.paramMap.get('id')!;
    this.cargarRiego();
  }

  async cargarRiego() {
    try {
      // Cargar los datos del riego
      const riegoDocRef = doc(this.firestore, `riegos/${this.riegoId}`);
      const riegoSnapshot = await getDoc(riegoDocRef);

      if (riegoSnapshot.exists()) {
        this.riego = riegoSnapshot.data();
        this.observaciones = this.riego.observaciones || ''; // Cargar observaciones

        // Cargar los nombres de encargado y planta
        if (this.riego.encargadoId) {
          this.cargarEncargadoNombre(this.riego.encargadoId);
        }
        if (this.riego.plantaId) {
          this.cargarPlantaNombre(this.riego.plantaId);
        }
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

  async cargarEncargadoNombre(encargadoId: string) {
    try {
      const encargadoDocRef = doc(this.firestore, `encargados/${encargadoId}`);
      const encargadoSnapshot = await getDoc(encargadoDocRef);

      if (encargadoSnapshot.exists()) {
        this.encargadoNombre = encargadoSnapshot.data()['nombre'];
      }
    } catch (error) {
      console.error('Error al cargar el nombre del encargado:', error);
    }
  }

  async cargarPlantaNombre(plantaId: string) {
    try {
      const plantaDocRef = doc(this.firestore, `plantas/${plantaId}`);
      const plantaSnapshot = await getDoc(plantaDocRef);

      if (plantaSnapshot.exists()) {
        this.plantaNombre = plantaSnapshot.data()['nombre'];
      }
    } catch (error) {
      console.error('Error al cargar el nombre de la planta:', error);
    }
  }

  volverAlListado() {
    this.router.navigate(['/admin/riegos-list']);
  }
}
