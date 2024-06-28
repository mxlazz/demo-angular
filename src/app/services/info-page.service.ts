import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  info: InfoPage = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Lee el archivo JSON
    this.http.get('assets/data/data-page.json').subscribe((resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo() {
    this.http
      .get('https://angular-html-f06bf-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.cargada = true;
        this.equipo = resp;
      });
  }
}
