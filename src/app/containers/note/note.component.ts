import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Note} from '../../model/note.model';
import { NoteserviceService } from '../../services/note-service.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  createNoteform:FormGroup;
  card = false;



  // note: Note = new Note();


  constructor(private router: Router,private formBuilder:FormBuilder ,
    private snackBar: MatSnackBar, private noteservice:NoteserviceService) { }
  // title = new FormControl(null, Validators.required)
  // description = new FormControl(null, Validators.required)

  ngOnInit() {


    this.createNoteform = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });

  }
  cardSwap1() {

    this.card = !this.card;
    console.log(this.card);
    console.log("card swapped")
  }
  // cardSwap() {
  //   console.log("card swapped again")
  //   let note = { title: this.title.value, description: this.description.value }
  //   if (!this.title.value && !this.description.value) {
  //     this.card = !this.card;
  //     console.log(this.card);
  //   } error => {
  //     console.log("error", error);
  //     this.snackBar.open("failed to add note", "ok", { duration: 5000 })
  //   }
  // }

  onSubmit() {
    console.log("inside submit");
    
      console.log("Close button clicked and no error");
      this.noteservice.createNote(this.createNoteform.value).subscribe(response => {
        console.log('Response ', response);
        this.snackBar.open('Note Created', 'Ok', { duration: 3000 });
    },
    error => {
      console.log(error);
      this.snackBar.open('not creatrd', 'ok', { duration: 4000});
    });
  


}

}