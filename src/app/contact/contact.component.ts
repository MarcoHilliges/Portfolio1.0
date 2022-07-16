import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactFormFB : FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.contactFormFB = this._fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5)
      ], []],

      emailAddress : ['', [
        Validators.required, 
        Validators.minLength(5)
      ], []],

      message : ['', [
        Validators.required, 
        Validators.minLength(5)
      ], []],
    })

    this.contactFormFB.valueChanges.subscribe(console.log)
  }

  ngOnInit(): void {
  }

  sendMessage(){
    alert('Nachricht')
  }

}
