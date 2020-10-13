import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(id: string): Leader {
    return LEADERS.filter((lead) => (lead.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((lead) => lead.featured)[0];
  }

  getLeaders(): Leader[] {
    return LEADERS;
  }
}
