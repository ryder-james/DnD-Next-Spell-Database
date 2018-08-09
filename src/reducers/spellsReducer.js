import {
    FETCH_SPELLS
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
        default:
            return state;
    }
}