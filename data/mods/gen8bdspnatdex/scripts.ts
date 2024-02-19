export const Scripts: ModdedBattleScriptsData = {
	gen: 8,
	inherit: 'gen8bdsp',
	side: {
		canDynamaxNow() {
			// Dynamaxing is not in BDSP
			return false;
		},
	},
};
