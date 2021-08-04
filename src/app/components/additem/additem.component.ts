import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  title: string = '';
  price: number = 0;
  quantity: number = 0;

  magicianForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.magicianForm = this.formBuilder.group({
      title: formBuilder.control(''),
      price: formBuilder.control(0),
      quantity: formBuilder.control(0)
    });
  }

  public onSubmit() {
    console.log(this.magicianForm.value)
  }

  ngOnInit(): void {
  }

}

