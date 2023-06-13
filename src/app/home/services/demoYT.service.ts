import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DemoYTService {

  private catId = new BehaviorSubject('0');
  categoryId = this.catId.asObservable();

  private newTerm = new BehaviorSubject('');
  term = this.newTerm.asObservable();

  constructor() { }

  changeCategoryId(categoryId: string) {
    this.catId.next(categoryId)
  }

  addQValue(term:string){
    this.newTerm.next(term);
  }
}
