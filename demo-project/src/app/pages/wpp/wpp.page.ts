import { Component } from '@angular/core';
import { OpenWppComponent } from '../../component/open-wpp/open-wpp.component';
@Component({
  selector: 'app-wpp',
  standalone: true,
  imports: [OpenWppComponent],
  templateUrl: './wpp.page.html',
  styleUrl: './wpp.page.css'
})
export class WppPage {

}
