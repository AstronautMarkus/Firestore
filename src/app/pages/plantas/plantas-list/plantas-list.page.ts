import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.page.html',
  styleUrls: ['./plantas-list.page.scss'],
})
export class PlantasListPage implements OnInit {
  plantas$!: Observable<any[]>;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const plantasCollection = collection(this.firestore, 'plantas');
    this.plantas$ = collectionData(plantasCollection, { idField: 'id' });
  }
}
