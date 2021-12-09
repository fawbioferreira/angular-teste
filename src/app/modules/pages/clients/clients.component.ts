import { Component, OnInit } from '@angular/core';
import { Client } from './shared/client.model';
import { ClientsService } from './shared/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getClients();
    this.getClient();
  }

  getClients(){
    this.clientsService.getAll().then((res:any) => {
      this.clients = res.map((e:any) => {
        return {
          ...e.payload.doc.data() as {}
        } as Client;
      });
    });
  }

  getClient(){
    this.clientsService.getOneByCod("6").then((res:any) => {
    })
  }

}
