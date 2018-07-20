import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
    public config: PerfectScrollbarConfigInterface = {};
    // This is for Notifications
    notifications: Object[] = [{
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Evento belezura',
      subject: 'bla bla bla',
      time: '9:10'
    }, {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Análise de diagnóstico',
      subject: 'bla bla',
      time: '9:10'
    }];

    // This is for Mymessages
    mymessages: Object[] = [{
      useravatar: 'assets/images/users/1.png',
      status: 'online',
      from: 'Wescley Sudre',
      subject: 'bla bla!',
      time: '9:30'
    }, {
      useravatar: 'assets/images/users/1.png',
      status: 'busy',
      from: 'Wescley Sudre',
      subject: 'bla bla!',
      time: '9:30'
    }, {
      useravatar: 'assets/images/users/1.png',
      status: 'away',
      from: 'Wescley Sudre',
      subject: 'bla bla!',
      time: '9:30'
    }, {
      useravatar: 'assets/images/users/1.png',
      status: 'offline',
      from: 'Wescley Sudre',
      subject: 'bla bla!',
      time: '9:30'
    }];
}
