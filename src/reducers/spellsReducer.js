import {
    FETCH_SPELLS,
    FETCH_SPELL_URL
} from '../actions/types'

const INIT_STATE = {
    spellList: [],
    requestedSpell: {}
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_SPELLS:
            const spellList = action.payload.results;
            return {
                ...state,
                spellList
            }
        case FETCH_SPELL_URL:
            const requestedSpell = action.payload;
            return {
                ...state,
                requestedSpell
            }
        default:
            return state;
    }
}