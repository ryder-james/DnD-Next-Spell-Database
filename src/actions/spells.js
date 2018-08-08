import {
    FETCH_SPELLS
} from './types';

export function fetchSpellList() {
    const response = {
        data: [
            {
                "_id": "58c9eb75c9e7ce9f7214efaa",
                "index": 1,
                "name": "Acid Arrow",
                "desc": [
                    "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
                ],
                "higher_level": [
                    "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
                ],
                "page": "phb 259",
                "range": "90 feet",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "Powdered rhubarb leaf and an adder’s stomach.",
                "ritual": "no",
                "duration": "Instantaneous",
                "concentration": "no",
                "casting_time": "1 action",
                "level": 2,
                "school": {
                    "url": "http://dnd5eapi.co/api/magic-schools/5",
                    "name": "Evocation"
                },
                "classes": [
                    {
                        "name": "Wizard",
                        "url": "http://dnd5eapi.co/api/classes/12"
                    }
                ],
                "subclasses": [
                    {
                        "url": "http://dnd5eapi.co/api/subclasses/2",
                        "name": "Lore"
                    },
                    {
                        "url": "http://dnd5eapi.co/api/subclasses/4",
                        "name": "Land"
                    }
                ],
                "url": "http://dnd5eapi.co/api/spells/1"
            },
            {
                "_id": "5a52bc3a559f00418e532f2e",
                "index": 2,
                "name": "Acid Splash",
                "desc": [
                    "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.",
                    "This spellâ€™s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
                ],
                "page": "phb 211",
                "range": "60 feet",
                "components": [
                    "V",
                    "S"
                ],
                "ritual": "no",
                "duration": "Instantaneous",
                "concentration": "no",
                "casting_time": "1 action",
                "level": 0,
                "school": {
                    "url": "http://www.dnd5eapi.co/api/magic-schools/2",
                    "name": "Conjuration"
                },
                "classes": [
                    {
                        "name": "Sorcerer",
                        "url": "http://www.dnd5eapi.co/api/classes/10"
                    },
                    {
                        "name": "Wizard",
                        "url": "http://www.dnd5eapi.co/api/classes/12"
                    }
                ],
                "subclasses": [
                    {
                        "url": "http://www.dnd5eapi.co/api/subclasses/2",
                        "name": "Lore"
                    }
                ],
                "url": "http://www.dnd5eapi.co/api/spells/2"
            }
        ]
    }

    return {
        type: FETCH_SPELLS,
        payload: response.data
    }
}