import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-encargados-detail',
  templateUrl: './encargados-detail.page.html',
  styleUrls: ['./encargados-detail.page.scss'],
})
export class EncargadosDetailPage implements OnInit {
  encargadoId!: string; // ID del encargado
  encargado: any;       // Datos del encargado
  isLoading = true;     // Estado de carga

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore
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
    } finally {
      // Desactivar indicador de carga
      this.isLoading = false;
    }
  }

  volverAlListado() {
    this.router.navigate(['/admin/encargados-list']);
  }
}
