import {render} from './index'

export let activeKoala = null

export let selectKoala = koala => {
    activeKoala = koala
    render()
}