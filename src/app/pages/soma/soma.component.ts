import { Component } from '@angular/core';
import { SomaService } from '../../service';

@Component({
  selector: 'app-soma',
  standalone: true,
  imports: [],
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent {
  private res : number = 0;
  constructor(private somaService: SomaService) {}

  somarBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.somaService.somar(n1, n2);
    }

    get resultado(): string {
      return this.res.toString();
      }
}
