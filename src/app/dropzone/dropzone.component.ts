import { Component, HostListener, Input } from '@angular/core';
import { HttpPutService } from '../http-put.service';
import { HttpGetService } from '../http-get.service';
import { API_URLS } from '../api.constants'; // Import the API_URLS constant

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css'],
})
export class DropzoneComponent {
  @Input() isImageUploaded!: boolean;
  selectedFile: File | null = null;
  displayImage: string | ArrayBuffer | null = null;
  isUploading = false;
  // isImageUploaded = false;

  constructor(
    private httpPutService: HttpPutService,
    private httpGetService: HttpGetService
  ) {}

  @HostListener('dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    const files: FileList = event.dataTransfer.files;
    this.handleFile(files[0]);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.handleFile(file);
  }

  handleFile(file: File) {
    if (
      (file && file.type === 'image/jpeg') ||
      file.type === 'application/pdf'
    ) {
      this.selectedFile = file;
      this.displayImage = URL.createObjectURL(file);
    }
  }

  uploadImage() {
    if (this.selectedFile) {
      const apiUrl = API_URLS.put;
      this.isUploading = true;

      this.httpPutService.uploadImageToAPI(apiUrl, this.selectedFile).subscribe(
        (response: any) => {
          console.log('Upload Response:', response);
          this.isImageUploaded = true; // Set the flag to true
          setTimeout(() => {
            this.fetchData();
          }, 6000);
        },
        (error: any) => {
          console.error('Error uploading image:', error);
          this.isUploading = false;
        }
      );
    }
  }

  fetchData() {
    const apiUrl = API_URLS.get; // Use the GET API URL from constants
    this.httpGetService.fetchDataFromAPI(apiUrl).subscribe(
      (data: any) => {
        console.log('Fetched Data after Upload:', data);
        // Update fetched data if needed
      },
      (error: any) => {
        console.error('Error fetching data after Upload:', error);
      }
    );
  }
}
