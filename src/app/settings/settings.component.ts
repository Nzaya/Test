import { Component, OnInit} from '@angular/core';

interface Medication {
  name: string;
  hours: string;
  schedule: { [day: number]: boolean };
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  medications: Medication[] = [
    {
      name: 'Medication 1',
      hours: '2:00 AM',
      schedule: {} // Add schedule data for each day here
    },
    {
      name: 'Medication 2',
      hours: '10:00 AM',
      schedule: {} // Add schedule data for each day here
    },
    {
      name: 'Medication 3',
      hours: '12:00 PM',
      schedule: {
        2: true,
        4:true
      } 
    },
    {
      name: 'Medication A',
      hours: '10:00 AM',
      schedule: {
        23: true,
        16:true
      } 
    },
    {
      name: 'Medication 4',
      hours: '4:00 AM',
      schedule: {
        19:true,
        12:true
      }
    },
    
  ];
  days = Array.from({length:30}, (_, i) => i+1);

  

  constructor() {}

  
  ngOnInit(): void {}

  

}
