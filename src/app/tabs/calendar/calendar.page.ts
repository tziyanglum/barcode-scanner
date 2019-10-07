import { Component, OnInit } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";
import { Calendar } from "@ionic-native/calendar/ngx";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.page.html",
  styleUrls: ["./calendar.page.scss"]
})
export class CalendarPage implements OnInit {
  calendars = [];

  constructor(public navController: NavController, private calendar: Calendar, private platform: Platform) {
    if (this.platform.is("cordova")) {
      console.log("this is a browser");
    } else if (this.platform.is("ios")) {
      console.log("this is a ios device");
    } else {
      console.log("this is something else");
    }

    this.platform.ready().then(() => {
      this.calendar
        .listCalendars()
        .then(data => {
          console.log(data);
          this.calendars = data;
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  addEvent(cal) {
    let date = new Date();
    let options = {
      calendarId: cal.id,
      calendarName: cal.name,
      url: "https://ioniccademy.com",
      firstReminderMinutes: 15
    };
    this.calendar
      .createEventInteractivelyWithOptions(
        "My new Event",
        "Groningen",
        "Some special notes",
        date,
        date,
        options
      )
      .then(data => {});
  }

  openCal(cal) {
  }

  ngOnInit() {}
}
