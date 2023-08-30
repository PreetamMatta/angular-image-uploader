import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isImageUploaded = false; // Initialize the flag for image uploading

  // This method will be called from the DropzoneComponent to set the flag
  setImageUploaded(value: boolean) {
    this.isImageUploaded = value;
  }
}
