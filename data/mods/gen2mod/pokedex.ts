export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	venusaur: {
		num: 3,
		name: "Venusaur",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 92, def: 88, spa: 110, spd: 110, spe: 80 },
		abilities: {0: "No Ability"},
		heightm: 2,
		weightkg: 100,
		color: "Green",
		prevo: "Ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
	charizard: {
		num: 6,
		name: "Charizard",
		types: ["Fire", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 100, def: 80, spa: 120, spd: 85, spe: 100 },
		abilities: {0: "No Ability"},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Red",
		prevo: "Charmeleon",
		evoLevel: 36,
		eggGroups: ["Monster", "Dragon"],
	},
	blastoise: {
		num: 9,
		name: "Blastoise",
		types: ["Water", "Steel"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 79, atk: 93, def: 110, spa: 100, spd: 110, spe: 78 },
		abilities: {0: "No Ability"},
		heightm: 1.6,
		weightkg: 85.5,
		color: "Blue",
		prevo: "Wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
	},
};
