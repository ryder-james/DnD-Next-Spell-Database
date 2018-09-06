import {
    FETCH_SPELLS,
    SEARCH_SPELLS,
    CHANGE_SPELL,
    CHANGE_QUERY
} from '../actions/types'

import { queryEditor } from '../actions/helper';
import { searchDomains } from '../constants';

const INIT_STATE = {
    spellList: [],
    selectedSpell: null,
    searchQuery: "",
    staticSpellList: []
}

const filter = (spells, searchTerms) => {
    const results = [];
    const skipList = [];

    spells.map(spell => {
        spell.classes.forEach(className => {
            searchTerms.forEach(searchClassName => {
                if (!skipList.includes(spell.index)) {
                    if (className.name == searchClassName.label) {
                        results.push(spell);
                        skipList.push(spell.index);
                    }
                }
            });
        });
    });

    return results;
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
            let results = [];
            let searchQuery = searchData.query;

            switch (searchData.domain) {
                case searchDomains.name:
                    searchQuery = queryEditor(searchQuery);
                    action.spells.map(spell => {
                        if (spell.name.includes(searchQuery)) {
                            results.push(spell);
                        }
                    });
                    break;
                case searchDomains.classes:
                    if (searchQuery.length == 0) {
                        var spellList = action.spells;
                        return {
                            ...state,
                            spellList
                        }
                    }
                    results = filter(action.spells, searchQuery);
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