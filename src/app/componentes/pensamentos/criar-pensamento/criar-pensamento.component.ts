import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(private router: Router) { }

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  }

  criarPensamento() {
    alert("Novo pensamento criado!");
  }

  cancelar() {
    alert("Ação cancelada!");

  }
}
