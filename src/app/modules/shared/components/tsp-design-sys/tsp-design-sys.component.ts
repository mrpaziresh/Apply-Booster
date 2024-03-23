import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconGeneratorService } from 'src/app/services/icons-service/icons.service';

@Component({
  selector: 'tsp-design-sys',
  templateUrl: './tsp-design-sys.component.html',
  styleUrls: ['./tsp-design-sys.component.scss']
})

export class TspDesignsysComponent implements OnInit {

  ahmadiFormGroup: FormGroup = new FormGroup({
    'salam': new FormControl(null, Validators.required),
    'byby': new FormControl(null, Validators.required),
    'dydy': new FormControl(null, Validators.required),
    'fyfy': new FormControl(null,[ Validators.required,
                            Validators.pattern('[0-9]+')] ),
  });
  constructor(
  ) { }
  loremica: string = '';
  binding: string = '';

  ngOnInit() { }


  onDateChange(event: any) {
    console.log(event);
    console.log(this.loremica);
    
    
  }
}
