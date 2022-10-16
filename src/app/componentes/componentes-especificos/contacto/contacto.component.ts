import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  datos!:string;
  formGroup!: FormGroup;
  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){}

  
  ngOnInit(): void {
    console.log('iniciando compoenent');
    this.formGroup= new FormGroup({
      username: new FormControl('', Validators.required),
      useremail: new FormControl('',Validators.email),
      usermensaje: new FormControl('',Validators.required)

    });    
  }  
  onSubmit() {
    this.datos=this.formGroup.value.username;
  }
}
