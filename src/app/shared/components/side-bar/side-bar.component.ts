import { Component, Input } from '@angular/core';
import { SIDE_BAR_ROWS } from './side-bar.constants';
import { SideRow } from '../../models/sideRow.model';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  private optionsBar : SideRow[] = SIDE_BAR_ROWS;

  @Input()
  public rowsSideBar : SideRow[] = this.optionsBar;
}
