import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-plantas-detail',
  templateUrl: './plantas-detail.page.html',
  styleUrls: ['./plantas-detail.page.scss'],
})
export class PlantasDetailPage implements OnInit {
  plantaId!: string; // ID de la planta
  planta: any;       // Datos de la planta

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
      } else {
        console.error('La planta no existe.');
        this.router.navigate(['/admin/plantas-list']); // Redirige si no existe
      }
    } catch (error) {
      console.error('Error al cargar la planta:', error);
    }
  }

  volverAlListado() {
    this.router.navigate(['/admin/plantas-list']);
  }
}
