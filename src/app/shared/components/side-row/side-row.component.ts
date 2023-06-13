import { Component, Input } from '@angular/core';
import { SideRow } from '../../models/sideRow.model';

@Component({
  selector: 'shared-side-row',
  templateUrl: './side-row.component.html',
  styleUrls: ['./side-row.component.css']
})
export class SideRowComponent {
  @Input()
  public sideRow! : SideRow;
}
