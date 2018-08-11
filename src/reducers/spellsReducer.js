import {
    FETCH_SPELLS,
    CHANGE_SPELL,
    CHANGE_QUERY
} from '../actions/types'

const INIT_STATE = {
    spellList: [],
    selectedSpell: null,
    searchQuery: ""
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_SPELLS:
            const spellList = action.payload.results;
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