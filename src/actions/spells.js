import {
    FETCH_SPELLS
} from './types';

import axios from 'axios';

// export function fetchSpellList() {
//     const response = {
//         data: [
//             {
//                 "_id": "58c9eb75c9e7ce9f7214efaa",
//                 "index": 1,
//                 "name": "Acid Arrow",
//                 "desc": [
//                     "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
//                 ],
//                 "higher_level": [
//                     "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
//                 ],
//                 "page": "phb 259",
//                 "range": "90 feet",
//                 "components": [
//                     "V",
//                     "S",
//                     "M"
//                 ],
//                 "material": "Powdered rhubarb leaf and an adder’s stomach.",
//                 "ritual": "no",
//                 "duration": "Instantaneous",
//                 "concentration": "no",
//                 "casting_time": "1 action",
//                 "level": 2,
//                 "school": {
//                     "url": "http://dnd5eapi.co/api/magic-schools/5",
//                     "name": "Evocation"
//                 },
//                 "classes": [
//                     {
//                         "name": "Wizard",
//                         "url": "http://dnd5eapi.co/api/classes/12"
//                     }
//                 ],
//                 "subclasses": [
//                     {
//                         "url": "http://dnd5eapi.co/api/subclasses/2",
//                         "name": "Lore"
//                     },
//                     {
//                         "url": "http://dnd5eapi.co/api/subclasses/4",
//                         "name": "Land"
//                     }
//                 ],
//                 "url": "http://dnd5eapi.co/api/spells/1"
//             }
//         ]
//     }

    export function fetchSpellList() {
        return function (dispatch) {
            const token = localStorage.getItem("token");
            const headers = { headers: { authorization: token } }
            axios.get("http://dnd5eapi.co/api/spells", headers)
                .then(response => {
                    dispatch({
                        type: FETCH_SPELLS,
                        payload: response.data
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    // return {
    //     type: FETCH_SPELLS,
    //     payload: response.data
    // }
// }