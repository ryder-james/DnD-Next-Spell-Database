import {
    FETCH_SPELLS,
    CHANGE_SPELL,
    CHANGE_QUERY
} from './types';

import { 
    fetchHardSpellList,
    queryEditor
} from './helper'

import axios from 'axios';

export function fetchSpellList(query, endpoint = "spells") {
    query ? query = queryEditor(query) : "";

    const url = `http://www.dnd5eapi.co/api/${endpoint}/${query ? `?name=${query}` : ""}`;

    return function (dispatch) {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: FETCH_SPELLS,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchHardSpellList());
            })
    }
}

export function changeSelectedSpell(spell) {
    return {
        type: CHANGE_SPELL,
        payload: spell
    }
}

export function changeSearchQuery(searchQuery) {
    return {
        type: CHANGE_QUERY,
        payload: searchQuery
    }
}