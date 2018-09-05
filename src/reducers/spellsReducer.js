import {
    FETCH_SPELLS,
    SEARCH_SPELLS,
    CHANGE_SPELL,
    CHANGE_QUERY
} from '../actions/types'

import { searchDomains, queryEditor } from '../actions/helper';

const INIT_STATE = {
    spellList: [],
    selectedSpell: null,
    searchQuery: "",
    staticSpellList: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_SPELLS:
            var spellList = action.payload;

            spellList.sort((a, b) => {
                return a.index - b.index;
            });

            const staticSpellList = spellList;

            localStorage.setItem("staticSpellList", JSON.stringify(staticSpellList));

            return {
                ...state,
                spellList,
                staticSpellList
            }

        case SEARCH_SPELLS:
            const searchData = action.payload;
            const results = [];

            switch (searchData.domain) {
                case searchDomains.name:
                    action.spells.map(spell => {
                        if (spell.name.includes(queryEditor(searchData.query))) {
                            results.push(spell);
                        }
                    });
                    break;
            }

            if (results.length == 0) {
                results.push("no-result")
            }

            var spellList = results;

            return {
                ...state,
                spellList
            }

        case CHANGE_SPELL:
            const spell = action.payload;
            return {
                ...state,
                selectedSpell: spell
            }
        case CHANGE_QUERY:
            const query = action.payload;
            return {
                ...state,
                searchQuery: query
            }
        default:
            return state;
    }
}