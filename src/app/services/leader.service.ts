import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(id: string): Promise<Leader> {
    return new Promise (resolve => {
      //Simulate server latency with two-second delay
      setTimeout(() => resolve(LEADERS.filter((lead) => (lead.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise (resolve => {
      //Simulate server latency with two-second delay
      setTimeout(() => resolve(LEADERS.filter((lead) => lead.featured)[0]), 2000);
    });
  }

  getLeaders(): Promise<Leader[]> {
    return new Promise (resolve => {
      //Simulate server latency with two-second delay
      setTimeout(() => resolve(Promise.resolve(LEADERS)), 2000);
    });
  }
}
