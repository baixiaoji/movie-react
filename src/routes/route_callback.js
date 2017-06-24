import store from "../store"
import { fetchFilm } from "../actions/fetchFilm"

export function OnFilmEnter(){
    store.dispatch(fetchFilm())
}
// export function OnRouterChange(){
//     store.dispatch(fetchSummary())
// }