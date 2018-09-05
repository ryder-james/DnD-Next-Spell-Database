import {
    FETCH_SPELLS,
    SEARCH_SPELLS,
    CHANGE_SPELL,
    CHANGE_QUERY
} from './types';

import { 
    fetchHardSpellList,
    PROXY_URL
} from './helper'

import axios from 'axios';

export function fetchSpellList() {
    const url = PROXY_URL + 'http://www.dnd5eapi.co/api/spells';

    const storedSpells = JSON.parse(localStorage.getItem("staticSpellList"));

    if (storedSpells && storedSpells.length != 0) {
        return {
            type: FETCH_SPELLS,
            payload: storedSpells
        }
    }

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
                console.log(err, "fetching hard spell list");
                dispatch(fetchHardSpellList());
            })
    }
}

export function searchSpellList(query, domain) {
    return (dispatch, getState) => {
        const { staticSpellList } = getState().spellList;

        dispatch ({
            type: SEARCH_SPELLS,
            spells: staticSpellList,
            payload: {
                query,
                domain
            }
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