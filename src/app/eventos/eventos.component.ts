import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}


  onClick(event:any) {
    console.log('Se ha pulsado el botón');
    console.log(event);
  }

  onChange(event:any) {
    console.log(event.target.value);
  }

}
