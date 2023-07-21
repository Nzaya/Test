import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  medications = [
    { name: 'Medication 1', hours: '8 hours', schedule: { 2: '' } },
    { name: 'Medication a', hours: '10 hours', schedule: { 2: '' } },
    { name: 'Medication b', hours: '16 hours', schedule: { 2: '' } },
    { name: 'Medication 2', hours: '12 hours', schedule: {} },
    // Add more medications as needed
  ];
  days = Array.from({length:30}, (_, i) => i+1);


  constructor() { }

  
  ngOnInit(): void {
 
   
  
  }

}
