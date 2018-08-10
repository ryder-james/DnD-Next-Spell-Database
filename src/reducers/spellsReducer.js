import {
    FETCH_SPELLS,
    CHANGE_SPELL
} from '../actions/types'

const INIT_STATE = {
    spellList: [],
    selectedSpell: ""
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
            const url = action.payload;
            return {
                ...state,
                selectedSpell: url
            }
        default:
            return state;
    }
}