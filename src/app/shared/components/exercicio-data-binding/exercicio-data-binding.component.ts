import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string | undefined;
  @Input() color: string | undefined;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://3.bp.blogspot.com/-C-4MIiCbHbI/XLjzqORTYcI/AAAAAAAAL00/bnMMrFuQtJYRmHUxahYhTSxAZOrJ6RwlgCLcBGAs/s1600/Gatinho-lindo-1.jpg'
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'um texto acessível';

  valorDoInput = '';

  valorContador = 10;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled)
    }, 3000);
  }

  ngOnInit(): void {
  }

  getImageURL() {
    return this.imageURL;
  }

  onCLick($event:any) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event:any) {
    this.valorDoInput = $event.target.value;
    console.log('$event');
  }
  passouMouse() {
    console.log('alguém passou mouse');
  }

  onClickBotaoEmissor($event:any) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit('fui clicado!!!');
  }

}
