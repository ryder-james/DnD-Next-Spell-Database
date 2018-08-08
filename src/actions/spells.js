import {
    FETCH_SPELLS,
    FETCH_SPELL_URL
} from './types';

import axios from 'axios';

export function fetchSpellFromURL(URL) {
    return function (dispatch) {
        axios.get(URL)
            .then(response => {
                dispatch({
                    type: FETCH_SPELL_URL,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchHardSpellList());
            })
    }
}

export function fetchSpellList(endpoint = "spells", query) {
    return function (dispatch) {
        axios.get(`http://www.dnd5eapi.co/api/${endpoint}/${query ? `?=${query}` : ""}`)
            .then(response => {
                dispatch({
                    type: FETCH_SPELLS,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchHardSpellList());
            })
    }
}

function fetchHardSpellList() {
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
            },
            {
                "_id": "5a52bc3a559f00418e532f2f",
                "index": 3,
                "name": "Aid",
                "desc": [
                    "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each targetâ€™s hit point maximum and current hit points increase by 5 for the duration."
                ],
                "higher_level": [
                    "When you cast this spell using a spell slot of 3rd level or higher, a targetâ€™s hit points increase by an additional 5 for each slot level above 2nd."
                ],
                "page": "phb 211",
                "range": "30 feet",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "A tiny strip of white cloth.",
                "ritual": "no",
                "duration": "8 hours",
                "concentration": "no",
                "casting_time": "1 action",
                "level": 2,
                "school": {
                    "url": "http://www.dnd5eapi.co/api/magic-schools/1",
                    "name": "Abjuration"
                },
                "classes": [
                    {
                        "name": "Cleric",
                        "url": "http://www.dnd5eapi.co/api/classes/3"
                    },
                    {
                        "name": "Paladin",
                        "url": "http://www.dnd5eapi.co/api/classes/7"
                    }
                ],
                "subclasses": [
                    {
                        "url": "http://www.dnd5eapi.co/api/subclasses/2",
                        "name": "Lore"
                    }
                ],
                "url": "http://www.dnd5eapi.co/api/spells/3"
            },
            {
                "_id": "5a52bc3a559f00418e532f32",
                "index": 5,
                "name": "Alter Self",
                "desc": [
                    "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.",
                    "Aquatic Adaptation.",
                    " You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.",
                    "Change Appearance.",
                    " You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also canâ€™t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you canâ€™t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.",
                    "Natural Weapons.",
                    " You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
                ],
                "page": "phb 211",
                "range": "Self",
                "components": [
                    "V",
                    "S"
                ],
                "ritual": "no",
                "duration": "Up to 1 hour",
                "concentration": "yes",
                "casting_time": "1 action",
                "level": 2,
                "school": {
                    "name": "Transmutation",
                    "url": "http://www.dnd5eapi.co/api/magic-schools/8"
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
                "url": "http://www.dnd5eapi.co/api/spells/5"
            },
            {
                "_id": "5a52bc3a559f00418e532f33",
                "index": 6,
                "name": "Animal Messenger",
                "desc": [
                    "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as â€œa man or woman dressed in the uniform of the town guardâ€� or â€œa red-haired dwarf wearing a pointed hat.â€� You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.",
                    "When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesnâ€™t reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell."
                ],
                "higher_level": [
                    "If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."
                ],
                "page": "phb 212",
                "range": "30 feet",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "A morsel of food.",
                "ritual": "yes",
                "duration": "24 hours",
                "concentration": "no",
                "casting_time": "1 action",
                "level": 2,
                "school": {
                    "name": "Enchantment",
                    "url": "http://www.dnd5eapi.co/api/magic-schools/4"
                },
                "classes": [
                    {
                        "name": "Bard",
                        "url": "http://www.dnd5eapi.co/api/classes/2"
                    },
                    {
                        "name": "Druid",
                        "url": "http://www.dnd5eapi.co/api/classes/4"
                    },
                    {
                        "name": "Ranger",
                        "url": "http://www.dnd5eapi.co/api/classes/8"
                    }
                ],
                "subclasses": [
                    {
                        "url": "http://www.dnd5eapi.co/api/subclasses/2",
                        "name": "Lore"
                    }
                ],
                "url": "http://www.dnd5eapi.co/api/spells/6"
            },
            {
                "_id": "5a52bc3a559f00418e532f35",
                "index": 8,
                "name": "Animate Dead",
                "desc": [
                    "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creatureâ€™s game statistics).",
                    "On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
                    "The creature is under your control for 24 hours, after which it stops obeying any command youâ€™ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one."
                ],
                "higher_level": [
                    "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
                ],
                "page": "phb 212",
                "range": "10 feet",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "A drop of blood, a piece of flesh, and a pinch of bone dust.",
                "ritual": "no",
                "duration": "Instantaneous",
                "concentration": "no",
                "casting_time": "1 minute",
                "level": 3,
                "school": {
                    "url": "http://www.dnd5eapi.co/api/magic-schools/7",
                    "name": "Necromancy"
                },
                "classes": [
                    {
                        "name": "Cleric",
                        "url": "http://www.dnd5eapi.co/api/classes/3"
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
                "url": "http://www.dnd5eapi.co/api/spells/8"
            },
            {
                "_id": "5a52bc3a559f00418e532f38",
                "index": 13,
                "name": "Arcane Eye",
                "desc": [
                    "You create an invisible, magical eye within range that hovers in the air for the duration.",
                    "You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.",
                    "As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it canâ€™t enter another plane of existence. A solid barrier blocks the eyeâ€™s movement, but the eye can pass through an opening as small as 1 inch in diameter."
                ],
                "page": "phb 214",
                "range": "30 feet",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "A bit of bat fur.",
                "ritual": "no",
                "duration": "Up to 1 hour",
                "concentration": "yes",
                "casting_time": "1 action",
                "level": 4,
                "school": {
                    "url": "http://www.dnd5eapi.co/api/magic-schools/3",
                    "name": "Divination"
                },
                "classes": [
                    {
                        "name": "Cleric",
                        "url": "http://www.dnd5eapi.co/api/classes/3"
                    },
                    {
                        "name": "Wizard",
                        "url": "http://www.dnd5eapi.co/api/classes/12"
                    }
                ],
                "subclasses": [],
                "url": "http://www.dnd5eapi.co/api/spells/13"
            },
            {
                "_id": "5a52bc3a559f00418e532f3d",
                "index": 17,
                "name": "Arcanist's Magic Aura",
                "desc": [
                    "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isnâ€™t being carried or worn by another creature.",
                    "When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.",
                    "False Aura.",
                    " You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the objectâ€™s magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.",
                    "Mask.",
                    " You change the way the target appears to spells and magical effects that detect creature types, such as a paladinâ€™s Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
                ],
                "page": "phb 263",
                "range": "Touch",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "A small square of silk.",
                "ritual": "no",
                "duration": "24 hours",
                "concentration": "no",
                "casting_time": "1 action",
                "level": 2,
                "school": {
                    "url": "http://www.dnd5eapi.co/api/magic-schools/6",
                    "name": "Illusion"
                },
                "classes": [
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
                "url": "http://www.dnd5eapi.co/api/spells/17"
            }
        ]
    }

    return {
        type: FETCH_SPELLS,
        payload: response.data
    }
}

// export function fetchSpellList() {
//     return {
//         type: FETCH_SPELLS,
//         payload: fetch("http://dnd5eapi.co/api/spells/", {headers: localStorage.getItem("token")})
//     }
// }