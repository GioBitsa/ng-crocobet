import { Component } from '@angular/core';
import { NavigationListItem } from 'src/app/models/navigationList';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  navigationList: NavigationListItem[] = [
    {
      src: '../../assets/images/navigationLinks/sport.svg',
      text: 'sport',
    },
    {
      src: '../../assets/images/navigationLinks/live.svg',
      text: 'Live',
    },
    {
      src: '../../assets/images/navigationLinks/slots.svg',
      text: 'slots',
    },
    {
      src: '../../assets/images/navigationLinks/casino.svg',
      text: 'casino',
    },
    {
      src: '../../assets/images/navigationLinks/ufo.svg',
      text: 'ufo',
    },
    {
      src: '../../assets/images/navigationLinks/games.svg',
      text: 'games',
    },
    {
      src: '../../assets/images/navigationLinks/poker.svg',
      text: 'poker',
    },
    {
      src: '../../assets/images/navigationLinks/virtual.svg',
      text: 'virtual',
    },
    {
      src: '../../assets/images/navigationLinks/promo.svg',
      text: 'promos',
    },
  ];
}
