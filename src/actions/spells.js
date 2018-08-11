import {
    FETCH_SPELLS,
    CHANGE_SPELL
} from './types';

import { 
    fetchHardSpellList,
    queryEditor
} from './helper'

import axios from 'axios';

export function fetchSpellList(query, endpoint = "spells") {
    query ? query = queryEditor(query) : "";

    const url = `http://www.dnd5eapi.co/api/${endpoint}/${query ? `?name=${query}` : ""}`;
    console.log(url);

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