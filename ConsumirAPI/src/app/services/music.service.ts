import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Music } from "../models/music.model";

@Injectable(
    {
        providedIn:'root'
    }
)

export class MusicService{

    private url = environment.api;

    constructor(private httpclient:HttpClient){}

    obterMusicas(){
        return this.httpclient.get<Music[]>(this.url + '/musics' )
    }
}