import store from "../store"
import { fetchFilm } from "../actions/fetchFilm"

export function OnFilmEnter(){
    store.dispatch(fetchFilm())
}