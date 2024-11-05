import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-open-wpp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './open-wpp.component.html',
  styleUrls: ['./open-wpp.component.css']
})
export class OpenWppComponent {
  telefono: string = '';

  async openWhatsApp() {
    const message = 'Hola, me gustaría obtener más información.';
    const url = `https://wa.me/${this.telefono}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
