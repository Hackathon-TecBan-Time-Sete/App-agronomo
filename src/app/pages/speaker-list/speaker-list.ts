import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  profilePic = '/assets/img/speakers/agricultor.jpg'

  constructor(public confData: ConferenceData) { }

  ionViewDidEnter() {

    this.confData.getSpeakers().subscribe(
      data => {
        if(this.speakers.length == 0) {
          this.speakers.push(data)
        }
        
        console.log('RETORNO API', this.speakers)
      }
    )
  }
}
