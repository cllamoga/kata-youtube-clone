import { SideRow } from "../../models/sideRow.model";

export const SIDE_BAR_ROWS: SideRow[] = [
  {
    icon: 'home',
    option: true,
    text: 'Home',
    url: '#'
  },
  {
    icon: 'slow_motion_video',
    option: true,
    text: 'Shorts',
    url: '#'
  },
  {
    icon: 'subscriptions',
    option: true,
    text: 'Subscription',
    url: '#'
  },
  {option: false},
  {
    icon: 'video_library',
    option: true,
    text: 'Library',
    url: '#'
  },
  {
    icon: 'history',
    option: true,
    text: 'History',
    url: '#'
  },
  {option: false}
];
