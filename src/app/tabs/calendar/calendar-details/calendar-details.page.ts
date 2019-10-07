import { Component, OnInit } from '@angular/core';
import { Platform, NavParams } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.page.html',
  styleUrls: ['./calendar-details.page.scss'],
})
export class CalendarDetailsPage implements OnInit {
  calName = '';
  events = [];

  constructor(public navParams: NavParams, private calendar: Calendar, private platform: Platform) {
    this.calName = this.navParams.get('name')

    // if(this.platform.is('ios')){
    //   this.calendar.findAllEventsInNamedCalendar(this.calName).then(data => {
    //     this.events = data;
    //   })
    // } else if (this.platform.is('android')){
    //   let start = new Date();
    //   let end = new Date();
    //   end.setDate(end.getDate() + 31)
    //   this.calendar.listEventsInRange(start, end).then(data => {
    //     this.events = data;
    //   })
    // } else {
    //   return
    // }
  }

  ngOnInit() {
  }

}
