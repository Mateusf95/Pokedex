import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = []
  constructor(private httpClient: HttpClient) { 
    this.carregarPokemon();
  }
  async carregarPokemon() {
    const requisicao = await this.httpClient.get<any>('http://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
    this.pokemons = requisicao.results;
    console.log(requisicao.results)
  }
}
