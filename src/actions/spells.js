import {
    FETCH_SPELLS,
    CHANGE_SPELL,
    CHANGE_QUERY,
	PROXY_URL
} from './types';

import { 
    fetchHardSpellList,
    queryEditor
} from './helper'

import axios from 'axios';

export function fetchSpellList(query, endpoint = "spells") {
    query ? query = queryEditor(query) : "";

    const url = PROXY_URL + `http://www.dnd5eapi.co/api/${endpoint}/${query ? `?name=${query}` : ""}`;

    return function (dispatch) {
        axios.get(url)
            .then(response => {
                const unfetchedSpells = response.data.results;
                const result = [];
                unfetchedSpells.map((spell, index) => {
                    axios.get(spell.url)
                        .then (response => {
                            result.push(response.data);
                            if (index == unfetchedSpells.length - 1) {
                                dispatch({
                                    type: FETCH_SPELLS,
                                    payload: result
                                })
                            }
                        })
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