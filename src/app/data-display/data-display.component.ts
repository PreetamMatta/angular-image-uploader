import { Component, OnInit } from '@angular/core';
import { HttpGetService } from '../http-get.service';
import { API_URLS } from '../api.constants';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  fetchedData: any;

  constructor(private httpGetService: HttpGetService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const apiUrl = API_URLS.get;
    this.httpGetService.fetchDataFromAPI(apiUrl).subscribe(
      (data: any) => {
        this.fetchedData = data;
        console.log('Fetched Data:', this.fetchedData);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
