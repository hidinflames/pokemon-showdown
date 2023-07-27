/**
 * Gen 2 moves
 */

export const Moves: {[k: string]: ModdedMoveData} = {
// New Moves
brickbreak: {
	num: 280,
	accuracy: 100,
	basePower: 75,
	category: "Physical",
	name: "Brick Break",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	onTryHit(pokemon) {
		// will shatter screens through sub, before you hit
		pokemon.side.removeSideCondition('reflect');
		pokemon.side.removeSideCondition('lightscreen');
	},
	secondary: null,
	target: "normal",
	type: "Fighting",
	contestType: "Cool",
	gen: 2,
},
gunkshot: {
	num: 441,
	accuracy: 80,
	basePower: 120,
	category: "Physical",
	name: "Gunk Shot",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 30,
		status: 'psn',
	},
	target: "normal",
	type: "Poison",
	contestType: "Tough",
	gen: 2,
},
closecombat: {
	num: 370,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Close Combat",
	pp: 5,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	self: {
		boosts: {
			def: -1,
			spd: -1,
		},
	},
	secondary: null,
	target: "normal",
	type: "Fighting",
	contestType: "Tough",
	gen: 2,
},
psychoboost: {
	num: 354,
	accuracy: 90,
	basePower: 140,
	category: "Special",
	name: "Psycho Boost",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	self: {
		boosts: {
			spa: -2,
		},
	},
	secondary: null,
	target: "normal",
	type: "Psychic",
	contestType: "Clever",
	gen: 2,
},
drillrun: {
	num: 529,
	accuracy: 95,
	basePower: 80,
	category: "Physical",
	name: "Drill Run",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	critRatio: 2,
	secondary: null,
	target: "normal",
	type: "Ground",
	contestType: "Tough",
	gen: 2,
},
roost: {
	num: 355,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Roost",
	pp: 10,
	priority: 0,
	flags: {snatch: 1, heal: 1},
	heal: [1, 2],
	self: {
		volatileStatus: 'roost',
	},
	condition: {
		duration: 1,
		onResidualOrder: 25,
		onStart(target) {
			if (!target.terastallized) {
				this.add('-singleturn', target, 'move: Roost');
			} else if (target.terastallized === "Flying") {
				this.add('-hint', "If a Flying Terastallized Pokemon uses Roost, it remains Flying-type.");
			}
		},
		onTypePriority: -1,
		onType(types, pokemon) {
			this.effectState.typeWas = types;
			return types.filter(type => type !== 'Flying');
		},
	},
	secondary: null,
	target: "self",
	type: "Flying",
	contestType: "Clever",
	gen: 2,
},
hurricane: {
	num: 542,
	accuracy: 80,
	basePower: 110,
	category: "Physical",
	name: "Hurricane",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, distance: 1, wind: 1},
	onModifyMove(move, pokemon, target) {
		switch (target?.effectiveWeather()) {
		case 'raindance':
		case 'primordialsea':
			move.accuracy = true;
			break;
		case 'sunnyday':
		case 'desolateland':
			move.accuracy = 50;
			break;
		}
	},
	secondary: {
		chance: 30,
		volatileStatus: 'confusion',
	},
	target: "any",
	type: "Flying",
	contestType: "Tough",
	gen: 2,
},
nastyplot: {
	num: 417,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Nasty Plot",
	pp: 20,
	priority: 0,
	flags: {snatch: 1},
	boosts: {
		spa: 2,
	},
	secondary: null,
	target: "self",
	type: "Dark",
	zMove: {effect: 'clearnegativeboost'},
	contestType: "Clever",
	gen: 2,
},
bravebird: {
	num: 413,
	accuracy: 100,
	basePower: 120,
	category: "Physical",
	name: "Brave Bird",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
	recoil: [33, 100],
	secondary: null,
	target: "any",
	type: "Flying",
	contestType: "Cool",
	gen: 2,
},
mysticalfire: {
	num: 595,
	accuracy: 100,
	basePower: 75,
	category: "Special",
	name: "Mystical Fire",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 100,
		boosts: {
			spa: -1,
		},
	},
	target: "normal",
	type: "Fire",
	contestType: "Beautiful",
	gen: 2,
},
earthpower: {
	num: 414,
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	name: "Earth Power",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, nonsky: 1},
	secondary: {
		chance: 10,
		boosts: {
			spd: -1,
		},
	},
	target: "normal",
	type: "Ground",
	contestType: "Beautiful",
	gen: 2,
},
suckerpunch: {
	num: 389,
	accuracy: 100,
	basePower: 70,
	category: "Special",
	name: "Sucker Punch",
	pp: 5,
	priority: 1,
	flags: {contact: 1, protect: 1, mirror: 1},
	onTry(source, target) {
		const action = this.queue.willMove(target);
		const move = action?.choice === 'move' ? action.move : null;
		if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
			return false;
		}
	},
	secondary: null,
	target: "normal",
	type: "Dark",
	contestType: "Clever",
	gen: 2,
},
shadowsneak: {
	num: 425,
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	name: "Shadow Sneak",
	pp: 30,
	priority: 1,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Ghost",
	contestType: "Clever",
	gen: 2,
},
iceshard: {
	num: 420,
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	name: "Ice Shard",
	pp: 30,
	priority: 1,
	flags: {protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Ice",
	contestType: "Beautiful",
	gen: 2,
},
focusblast: {
	num: 411,
	accuracy: 80,
	basePower: 110,
	category: "Physical",
	name: "Focus Blast",
	pp: 5,
	priority: 0,
	flags: {bullet: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 10,
		boosts: {
			def: -1,
		},
	},
	target: "normal",
	type: "Fighting",
	contestType: "Cool",
	gen: 2,
},
bugbuzz: {
	num: 405,
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	name: "Bug Buzz",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1},
	secondary: {
		chance: 10,
		boosts: {
			spd: -1,
		},
	},
	target: "normal",
	type: "Bug",
	contestType: "Beautiful",
	gen: 2,
},
airslash: {
	num: 403,
	accuracy: 95,
	basePower: 75,
	category: "Physical",
	name: "Air Slash",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1, distance: 1, slicing: 1},
	secondary: {
		chance: 30,
		volatileStatus: 'flinch',
	},
	target: "any",
	type: "Flying",
	contestType: "Cool",
	gen: 2,
},
bulletpunch: {
	num: 418,
	accuracy: 100,
	basePower: 40,
	category: "Physical",
	name: "Bullet Punch",
	pp: 30,
	priority: 1,
	flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
	secondary: null,
	target: "normal",
	type: "Steel",
	contestType: "Tough",
	gen: 2,
},
flashcannon: {
	num: 430,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Flash Cannon",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 10,
		boosts: {
			def: -1,
		},
	},
	target: "normal",
	type: "Steel",
	contestType: "Beautiful",
	gen: 2,
},
psycheout: {
	num: 876,
	accuracy: 100,
	basePower: 40,
	category: "Special",
	name: "Psyche Out",
	pp: 30,
	priority: 1,
	flags: {protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Psychic",
	contestType: "Clever",
	gen: 2,
},
stoneedge: {
	num: 444,
	accuracy: 80,
	basePower: 100,
	category: "Physical",
	name: "Stone Edge",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	critRatio: 2,
	secondary: null,
	target: "normal",
	type: "Rock",
	contestType: "Tough",
	gen: 2,
},
electroweb: {
	num: 527,
	accuracy: 95,
	basePower: 55,
	category: "Special",
	name: "Electroweb",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	secondary: {
		chance: 100,
		boosts: {
			spe: -1,
		},
	},
	target: "allAdjacentFoes",
	type: "Electric",
	contestType: "Beautiful",
	gen: 2,
},
dragonpulse: {
	num: 406,
	accuracy: 100,
	basePower: 85,
	category: "Special",
	name: "Dragon Pulse",
	pp: 10,
	priority: 0,
	flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
	secondary: null,
	target: "any",
	type: "Dragon",
	contestType: "Beautiful",
	gen: 2,
},
aquajet: {
	num: 453,
	accuracy: 100,
	basePower: 40,
	category: "Special",
	name: "Aqua Jet",
	pp: 20,
	priority: 1,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Water",
	contestType: "Cool",
	gen: 2,
},
xscissor: {
	num: 404,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "X-Scissor",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	secondary: null,
	target: "normal",
	type: "Bug",
	contestType: "Cool",
	gen: 2,
},
scald: {
	num: 503,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Scald",
	pp: 15,
	priority: 0,
	flags: {protect: 1, mirror: 1, defrost: 1},
	thawsTarget: true,
	secondary: {
		chance: 30,
		status: 'brn',
	},
	target: "normal",
	type: "Water",
	contestType: "Tough",
	gen: 2,
},
leafblade: {
	num: 348,
	accuracy: 100,
	basePower: 90,
	category: "Special",
	name: "Leaf Blade",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1, slicing: 1},
	critRatio: 2,
	secondary: null,
	target: "normal",
	type: "Grass",
	contestType: "Cool",
	gen: 2,
},
dualwingbeat: {
	num: 814,
	accuracy: 90,
	basePower: 40,
	category: "Physical",
	name: "Dual Wingbeat",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	multihit: 2,
	secondary: null,
	target: "normal",
	type: "Flying",
	gen: 2,
},
shadowclaw: {
	num: 421,
	accuracy: 100,
	basePower: 70,
	category: "Physical",
	name: "Shadow Claw",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	critRatio: 2,
	secondary: null,
	target: "normal",
	type: "Ghost",
	contestType: "Cool",
	gen: 2,
},
leafstorm: {
	num: 437,
	accuracy: 90,
	basePower: 130,
	category: "Special",
	name: "Leaf Storm",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	self: {
		boosts: {
			spa: -2,
		},
	},
	secondary: null,
	target: "normal",
	type: "Grass",
	contestType: "Beautiful",
	gen: 2,
},
dragonclaw: {
	num: 337,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Dragon Claw",
	pp: 15,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Dragon",
	contestType: "Cool",
	gen: 2,
},
dracometeor: {
	num: 434,
	accuracy: 90,
	basePower: 130,
	category: "Special",
	name: "Draco Meteor",
	pp: 5,
	priority: 0,
	flags: {protect: 1, mirror: 1},
	self: {
		boosts: {
			spa: -2,
		},
	},
	secondary: null,
	target: "normal",
	type: "Dragon",
	contestType: "Beautiful",
	gen: 2,
},
liquidation: {
	num: 710,
	accuracy: 100,
	basePower: 85,
	category: "Special",
	name: "Liquidation",
	pp: 10,
	priority: 0,
	flags: {contact: 1, protect: 1, mirror: 1},
	secondary: {
		chance: 20,
		boosts: {
			def: -1,
		},
	},
	target: "normal",
	type: "Water",
	contestType: "Cool",
},
darkpulse: {
	num: 399,
	accuracy: 100,
	basePower: 80,
	category: "Special",
	name: "Dark Pulse",
	pp: 15,
	priority: 0,
	flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
	secondary: {
		chance: 20,
		volatileStatus: 'flinch',
	},
	target: "any",
	type: "Dark",
	contestType: "Cool",
},
// Old Moves
aeroblast: {
	inherit: true,
	critRatio: 3,
},
beatup: {
	inherit: true,
	onModifyMove(move, pokemon) {
		move.type = '???';
		move.category = 'Special';
		move.allies = pokemon.side.pokemon.filter(ally => !ally.fainted && !ally.status);
		move.multihit = move.allies.length;
	},
},
bellydrum: {
	inherit: true,
	onHit(target) {
		if (target.boosts.atk >= 6) {
			return false;
		}
		if (target.hp <= target.maxhp / 2) {
			this.boost({atk: 2}, null, null, this.dex.conditions.get('bellydrum2'));
			return false;
		}
		this.directDamage(target.maxhp / 2);
		const originalStage = target.boosts.atk;
		let currentStage = originalStage;
		let boosts = 0;
		let loopStage = 0;
		while (currentStage < 6) {
			loopStage = currentStage;
			currentStage++;
			if (currentStage < 6) currentStage++;
			target.boosts.atk = loopStage;
			if (target.getStat('atk', false, true) < 999) {
				target.boosts.atk = currentStage;
				continue;
			}
			target.boosts.atk = currentStage - 1;
			break;
		}
		boosts = target.boosts.atk - originalStage;
		target.boosts.atk = originalStage;
		this.boost({atk: boosts});
	},
},
bide: {
	inherit: true,
	condition: {
		duration: 3,
		durationCallback(target, source, effect) {
			return this.random(3, 5);
		},
		onLockMove: 'bide',
		onStart(pokemon) {
			this.effectState.totalDamage = 0;
			this.add('-start', pokemon, 'move: Bide');
		},
		onDamagePriority: -101,
		onDamage(damage, target, source, move) {
			if (!move || move.effectType !== 'Move' || !source) return;
			this.effectState.totalDamage += damage;
			this.effectState.lastDamageSource = source;
		},
		onBeforeMove(pokemon, target, move) {
			if (this.effectState.duration === 1) {
				this.add('-end', pokemon, 'move: Bide');
				if (!this.effectState.totalDamage) {
					this.add('-fail', pokemon);
					return false;
				}
				target = this.effectState.lastDamageSource;
				if (!target) {
					this.add('-fail', pokemon);
					return false;
				}
				if (!target.isActive) {
					const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
					if (!possibleTarget) {
						this.add('-miss', pokemon);
						return false;
					}
					target = possibleTarget;
				}
				const moveData = {
					id: 'bide',
					name: "Bide",
					accuracy: 100,
					damage: this.effectState.totalDamage * 2,
					category: "Physical",
					priority: 0,
					flags: {contact: 1, protect: 1},
					effectType: 'Move',
					type: 'Normal',
				} as unknown as ActiveMove;
				this.actions.tryMoveHit(target, pokemon, moveData);
				pokemon.removeVolatile('bide');
				return false;
			}
			this.add('-activate', pokemon, 'move: Bide');
		},
		onMoveAborted(pokemon) {
			pokemon.removeVolatile('bide');
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'move: Bide', '[silent]');
		},
	},
},
counter: {
	inherit: true,
	damageCallback(pokemon, target) {
		const lastAttackedBy = pokemon.getLastAttackedBy();
		if (!lastAttackedBy?.move || !lastAttackedBy.thisTurn) return false;

		// Hidden Power counts as physical
		if (this.getCategory(lastAttackedBy.move) === 'Physical' && target.lastMove?.id !== 'sleeptalk') {
			return 2 * lastAttackedBy.damage;
		}
		return false;
	},
	beforeTurnCallback() {},
	onTry() {},
	condition: {},
	priority: -1,
},
crabhammer: {
	inherit: true,
	critRatio: 3,
},
crosschop: {
	inherit: true,
	critRatio: 3,
},
curse: {
	inherit: true,
	condition: {
		onStart(pokemon, source) {
			this.add('-start', pokemon, 'Curse', '[of] ' + source);
		},
		onAfterMoveSelf(pokemon) {
			this.damage(pokemon.baseMaxhp / 4);
		},
	},
},
detect: {
	inherit: true,
	priority: 2,
},
dig: {
	inherit: true,
	onPrepareHit(target, source) {
		return source.status !== 'slp';
	},
	condition: {
		duration: 2,
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onInvulnerability(target, source, move) {
			if (move.id === 'earthquake' || move.id === 'magnitude' || move.id === 'fissure') {
				return;
			}
			if (['attract', 'curse', 'foresight', 'meanlook', 'mimic', 'nightmare', 'spiderweb', 'transform'].includes(move.id)) {
				// Oversight in the interaction between these moves and the Lock-On effect
				return false;
			}
			if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
			return false;
		},
		onSourceBasePower(basePower, target, source, move) {
			if (move.id === 'earthquake' || move.id === 'magnitude') {
				return this.chainModify(2);
			}
		},
	},
},
doubleedge: {
	inherit: true,
	recoil: [25, 100],
},
encore: {
	inherit: true,
	condition: {
		durationCallback() {
			return this.random(3, 7);
		},
		onStart(target) {
			const lockedMove = target.lastMoveEncore?.id || '';
			const moveIndex = lockedMove ? target.moves.indexOf(lockedMove) : -1;
			if (moveIndex < 0 || target.lastMoveEncore?.flags['failencore'] || target.moveSlots[moveIndex].pp <= 0) {
				// it failed
				return false;
			}
			this.effectState.move = lockedMove;
			this.add('-start', target, 'Encore');
		},
		onOverrideAction(pokemon) {
			return this.effectState.move;
		},
		onResidualOrder: 13,
		onResidual(target) {
			const lockedMoveIndex = target.moves.indexOf(this.effectState.move);
			if (lockedMoveIndex >= 0 && target.moveSlots[lockedMoveIndex].pp <= 0) {
				// early termination if you run out of PP
				target.removeVolatile('encore');
			}
		},
		onEnd(target) {
			this.add('-end', target, 'Encore');
		},
		onDisableMove(pokemon) {
			if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
				return;
			}
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== this.effectState.move) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
	},
},
endure: {
	inherit: true,
	priority: 2,
},
explosion: {
	inherit: true,
	noSketch: true,
},
flail: {
	inherit: true,
	noDamageVariance: true,
	willCrit: false,
},
fly: {
	inherit: true,
	onPrepareHit(target, source) {
		return source.status !== 'slp';
	},
	condition: {
		duration: 2,
		onInvulnerability(target, source, move) {
			if (move.id === 'gust' || move.id === 'twister' || move.id === 'thunder' || move.id === 'whirlwind') {
				return;
			}
			if (move.id === 'earthquake' || move.id === 'magnitude' || move.id === 'fissure') {
				// These moves miss even during the Lock-On effect
				return false;
			}
			if (['attract', 'curse', 'foresight', 'meanlook', 'mimic', 'nightmare', 'spiderweb', 'transform'].includes(move.id)) {
				// Oversight in the interaction between these moves and the Lock-On effect
				return false;
			}
			if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
			return false;
		},
		onSourceBasePower(basePower, target, source, move) {
			if (move.id === 'gust' || move.id === 'twister') {
				return this.chainModify(2);
			}
		},
	},
},
focusenergy: {
	inherit: true,
	condition: {
		onStart(pokemon) {
			this.add('-start', pokemon, 'move: Focus Energy');
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
	},
},
foresight: {
	inherit: true,
	onTryHit(target) {
		if (target.volatiles['foresight']) return false;
	},
	condition: {
		onStart(pokemon) {
			this.add('-start', pokemon, 'Foresight');
		},
		onNegateImmunity(pokemon, type) {
			if (pokemon.hasType('Ghost') && ['Normal', 'Fighting'].includes(type)) return false;
		},
		onModifyBoost(boosts) {
			if (boosts.evasion && boosts.evasion > 0) {
				boosts.evasion = 0;
			}
		},
	},
},
frustration: {
	inherit: true,
	basePowerCallback(pokemon) {
		return Math.floor(((255 - pokemon.happiness) * 10) / 25) || null;
	},
},
healbell: {
	inherit: true,
	onHit(target, source) {
		this.add('-cureteam', source, '[from] move: Heal Bell');
		for (const pokemon of target.side.pokemon) {
			pokemon.clearStatus();
		}
	},
},
highjumpkick: {
	inherit: true,
	onMoveFail(target, source, move) {
		if (target.runImmunity('Fighting')) {
			const damage = this.actions.getDamage(source, target, move, true);
			if (typeof damage !== 'number') throw new Error("Couldn't get High Jump Kick recoil");
			this.damage(this.clampIntRange(damage / 8, 1), source, source, move);
		}
	},
},
jumpkick: {
	inherit: true,
	onMoveFail(target, source, move) {
		if (target.runImmunity('Fighting')) {
			const damage = this.actions.getDamage(source, target, move, true);
			if (typeof damage !== 'number') throw new Error("Couldn't get Jump Kick recoil");
			this.damage(this.clampIntRange(damage / 8, 1), source, source, move);
		}
	},
},
karatechop: {
	inherit: true,
	critRatio: 3,
},
leechseed: {
	inherit: true,
	onHit() {},
	condition: {
		onStart(target) {
			this.add('-start', target, 'move: Leech Seed');
		},
		onAfterMoveSelfPriority: 2,
		onAfterMoveSelf(pokemon) {
			if (!pokemon.hp) return;
			const leecher = this.getAtSlot(pokemon.volatiles['leechseed'].sourceSlot);
			if (!leecher || leecher.fainted || leecher.hp <= 0) {
				return;
			}
			const toLeech = this.clampIntRange(pokemon.maxhp / 8, 1);
			const damage = this.damage(toLeech, pokemon, leecher);
			if (damage) {
				this.heal(damage, leecher, pokemon);
			}
		},
	},
},
lightscreen: {
	inherit: true,
	condition: {
		duration: 5,
		// Sp. Def boost applied directly in stat calculation
		onSideStart(side) {
			this.add('-sidestart', side, 'move: Light Screen');
		},
		onSideResidualOrder: 9,
		onSideEnd(side) {
			this.add('-sideend', side, 'move: Light Screen');
		},
	},
},
lockon: {
	inherit: true,
	onTryHit(target) {
		if (target.volatiles['foresight'] || target.volatiles['lockon']) return false;
	},
	condition: {
		duration: 2,
		onSourceAccuracy(accuracy, target, source, move) {
			if (move && source === this.effectState.target && target === this.effectState.source) return true;
		},
	},
},
lowkick: {
	inherit: true,
	accuracy: 90,
	basePower: 50,
	basePowerCallback() {
		return 50;
	},
	secondary: {
		chance: 30,
		volatileStatus: 'flinch',
	},
},
meanlook: {
	inherit: true,
	flags: {reflectable: 1, mirror: 1},
},
metronome: {
	inherit: true,
	flags: {failencore: 1},
	noMetronome: [
		"Counter", "Destiny Bond", "Detect", "Endure", "Metronome", "Mimic", "Mirror Coat", "Protect", "Sketch", "Sleep Talk", "Struggle", "Thief",
	],
	noSketch: true,
},
mimic: {
	inherit: true,
	accuracy: 100,
	noSketch: true,
	flags: {protect: 1, bypasssub: 1, allyanim: 1, failencore: 1, noassist: 1},
},
mindreader: {
	inherit: true,
	onTryHit(target) {
		if (target.volatiles['foresight'] || target.volatiles['lockon']) return false;
	},
},
mirrorcoat: {
	inherit: true,
	damageCallback(pokemon, target) {
		const lastAttackedBy = pokemon.getLastAttackedBy();
		if (!lastAttackedBy?.move || !lastAttackedBy.thisTurn) return false;

		// Hidden Power counts as physical
		if (this.getCategory(lastAttackedBy.move) === 'Special' && target.lastMove?.id !== 'sleeptalk') {
			return 2 * lastAttackedBy.damage;
		}
		return false;
	},
	beforeTurnCallback() {},
	onTry() {},
	condition: {},
	priority: -1,
},
mirrormove: {
	inherit: true,
	flags: {failencore: 1},
	onHit(pokemon) {
		const noMirror = ['metronome', 'mimic', 'mirrormove', 'sketch', 'sleeptalk', 'transform'];
		const target = pokemon.side.foe.active[0];
		const lastMove = target?.lastMove && target?.lastMove.id;
		if (!lastMove || (!pokemon.activeTurns && !target.moveThisTurn)) {
			return false;
		}
		if (noMirror.includes(lastMove) || pokemon.moves.includes(lastMove)) {
			return false;
		}
		this.actions.useMove(lastMove, pokemon);
	},
	noSketch: true,
},
mist: {
	num: 54,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Mist",
	pp: 30,
	priority: 0,
	flags: {},
	volatileStatus: 'mist',
	condition: {
		onStart(pokemon) {
			this.add('-start', pokemon, 'Mist');
		},
		onTryBoost(boost, target, source, effect) {
			if (source && target !== source) {
				let showMsg = false;
				let i: BoostID;
				for (i in boost) {
					if (boost[i]! < 0) {
						delete boost[i];
						showMsg = true;
					}
				}
				if (showMsg && !(effect as ActiveMove).secondaries) {
					this.add('-activate', target, 'move: Mist');
				}
			}
		},
	},
	secondary: null,
	target: "self",
	type: "Ice",
},
moonlight: {
	inherit: true,
	onHit(pokemon) {
		if (this.field.isWeather(['sunnyday', 'desolateland'])) {
			this.heal(pokemon.maxhp);
		} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
			this.heal(pokemon.baseMaxhp / 4);
		} else {
			this.heal(pokemon.baseMaxhp / 2);
		}
	},
},
morningsun: {
	inherit: true,
	onHit(pokemon) {
		if (this.field.isWeather(['sunnyday', 'desolateland'])) {
			this.heal(pokemon.maxhp);
		} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
			this.heal(pokemon.baseMaxhp / 4);
		} else {
			this.heal(pokemon.baseMaxhp / 2);
		}
	},
},
nightmare: {
	inherit: true,
	condition: {
		noCopy: true,
		onStart(pokemon) {
			if (pokemon.status !== 'slp') {
				return false;
			}
			this.add('-start', pokemon, 'Nightmare');
		},
		onAfterMoveSelfPriority: 1,
		onAfterMoveSelf(pokemon) {
			if (pokemon.status === 'slp') this.damage(pokemon.baseMaxhp / 4);
		},
	},
},
outrage: {
	inherit: true,
	onMoveFail(target, source, move) {
		source.addVolatile('lockedmove');
	},
	onAfterMove(pokemon) {
		if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
			pokemon.removeVolatile('lockedmove');
		}
	},
},
painsplit: {
	inherit: true,
	accuracy: 100,
},
perishsong: {
	inherit: true,
	condition: {
		duration: 4,
		onEnd(target) {
			this.add('-start', target, 'perish0');
			target.faint();
		},
		onResidualOrder: 4,
		onResidual(pokemon) {
			const duration = pokemon.volatiles['perishsong'].duration;
			this.add('-start', pokemon, 'perish' + duration);
		},
	},
},
petaldance: {
	inherit: true,
	onMoveFail(target, source, move) {
		source.addVolatile('lockedmove');
	},
	onAfterMove(pokemon) {
		if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
			pokemon.removeVolatile('lockedmove');
		}
	},
},
poisongas: {
	inherit: true,
	ignoreImmunity: false,
},
poisonpowder: {
	inherit: true,
	ignoreImmunity: false,
},
protect: {
	inherit: true,
	priority: 2,
},
psywave: {
	inherit: true,
	damageCallback(pokemon) {
		return this.random(1, pokemon.level + Math.floor(pokemon.level / 2));
	},
},
pursuit: {
	inherit: true,
	onModifyMove() {},
	condition: {
		duration: 1,
		onBeforeSwitchOut(pokemon) {
			this.debug('Pursuit start');
			let alreadyAdded = false;
			for (const source of this.effectState.sources) {
				if (source.speed < pokemon.speed || (source.speed === pokemon.speed && this.random(2) === 0)) {
					// Destiny Bond ends if the switch action "outspeeds" the attacker, regardless of host
					pokemon.removeVolatile('destinybond');
				}
				if (!this.queue.cancelMove(source) || !source.hp) continue;
				if (!alreadyAdded) {
					this.add('-activate', pokemon, 'move: Pursuit');
					alreadyAdded = true;
				}
				// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
				// If it is, then Mega Evolve before moving.
				if (source.canMegaEvo || source.canUltraBurst) {
					for (const [actionIndex, action] of this.queue.entries()) {
						if (action.pokemon === source && action.choice === 'megaEvo') {
							this.actions.runMegaEvo(source);
							this.queue.list.splice(actionIndex, 1);
							break;
						}
					}
				}
				this.actions.runMove('pursuit', source, source.getLocOf(pokemon));
			}
		},
	},
},
razorleaf: {
	inherit: true,
	critRatio: 3,
},
razorwind: {
	inherit: true,
	accuracy: 75,
	critRatio: 3,
	onPrepareHit(target, source) {
		return source.status !== 'slp';
	},
},
reflect: {
	inherit: true,
	condition: {
		duration: 5,
		// Defense boost applied directly in stat calculation
		onSideStart(side) {
			this.add('-sidestart', side, 'Reflect');
		},
		onSideResidualOrder: 9,
		onSideEnd(side) {
			this.add('-sideend', side, 'Reflect');
		},
	},
},
rest: {
	inherit: true,
	onTry(pokemon) {
		if (pokemon.hp < pokemon.maxhp) return;
		this.add('-fail', pokemon);
		return null;
	},
	onHit(target, source, move) {
		if (target.status !== 'slp') {
			if (!target.setStatus('slp', source, move)) return;
		} else {
			this.add('-status', target, 'slp', '[from] move: Rest');
		}
		target.statusState.time = 3;
		target.statusState.startTime = 3;
		target.statusState.source = target;
		this.heal(target.maxhp);
	},
	secondary: null,
},
return: {
	inherit: true,
	basePowerCallback(pokemon) {
		return Math.floor((pokemon.happiness * 10) / 25) || null;
	},
},
reversal: {
	inherit: true,
	noDamageVariance: true,
	willCrit: false,
},
roar: {
	inherit: true,
	onTryHit() {
		for (const action of this.queue) {
			// Roar only works if it is the last action in a turn, including when it's called by Sleep Talk
			if (action.choice === 'move' || action.choice === 'switch') return false;
		}
	},
	priority: -1,
},
safeguard: {
	inherit: true,
	condition: {
		duration: 5,
		durationCallback(target, source, effect) {
			if (source?.hasAbility('persistent')) {
				this.add('-activate', source, 'ability: Persistent', effect);
				return 7;
			}
			return 5;
		},
		onSetStatus(status, target, source, effect) {
			if (!effect || !source) return;
			if (effect.id === 'yawn') return;
			if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
			if (target !== source) {
				this.debug('interrupting setStatus');
				if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					this.add('-activate', target, 'move: Safeguard');
				}
				return null;
			}
		},
		onTryAddVolatile(status, target, source, effect) {
			if (!effect || !source) return;
			if (effect.effectType === 'Move' && effect.infiltrates && !target.isAlly(source)) return;
			if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
				if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
				return null;
			}
		},
		onSideStart(side) {
			this.add('-sidestart', side, 'Safeguard');
		},
		onSideResidualOrder: 8,
		onSideEnd(side) {
			this.add('-sideend', side, 'Safeguard');
		},
	},
},
selfdestruct: {
	inherit: true,
	noSketch: true,
},
sketch: {
	inherit: true,
	flags: {bypasssub: 1, failencore: 1, noassist: 1},
	onHit() {
		// Sketch always fails in Link Battles
		this.add('-nothing');
	},
},
skullbash: {
	inherit: true,
	onPrepareHit(target, source) {
		return source.status !== 'slp';
	},
},
skyattack: {
	inherit: true,
	critRatio: 1,
	onPrepareHit(target, source) {
		return source.status !== 'slp';
	},
	secondary: null,
},
slash: {
	inherit: true,
	critRatio: 3,
},
sleeptalk: {
	inherit: true,
	flags: {failencore: 1, nosleeptalk: 1},
	onHit(pokemon) {
		const moves = [];
		for (const moveSlot of pokemon.moveSlots) {
			const moveid = moveSlot.id;
			const move = this.dex.moves.get(moveid);
			if (moveid && !move.flags['nosleeptalk'] && !move.flags['charge']) {
				moves.push(moveid);
			}
		}
		let randomMove = '';
		if (moves.length) randomMove = this.sample(moves);
		if (!randomMove) return false;
		this.actions.useMove(randomMove, pokemon);
	},
	noSketch: true,
},
solarbeam: {
	inherit: true,
	onPrepareHit(target, source) {
		return source.status !== 'slp';
	},
	// Rain weakening done directly in the damage formula
	onBasePower() {},
},
spiderweb: {
	inherit: true,
	flags: {reflectable: 1, mirror: 1},
},
spikes: {
	inherit: true,
	condition: {
		// this is a side condition
		onSideStart(side) {
			if (!this.effectState.layers || this.effectState.layers === 0) {
				this.add('-sidestart', side, 'Spikes');
				this.effectState.layers = 1;
			} else {
				return false;
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.runImmunity('Ground')) return;
			const damageAmounts = [0, 3];
			this.damage(damageAmounts[this.effectState.layers] * pokemon.maxhp / 24);
		},
	},
},
substitute: {
	inherit: true,
	condition: {
		onStart(target) {
			this.add('-start', target, 'Substitute');
			this.effectState.hp = Math.floor(target.maxhp / 4);
			delete target.volatiles['partiallytrapped'];
		},
		onTryPrimaryHitPriority: -1,
		onTryPrimaryHit(target, source, move) {
			if (move.stallingMove) {
				this.add('-fail', source);
				return null;
			}
			if (target === source) {
				this.debug('sub bypass: self hit');
				return;
			}
			if (move.id === 'twineedle') {
				move.secondaries = move.secondaries!.filter(p => !p.kingsrock);
			}
			if (move.drain) {
				this.add('-miss', source);
				this.hint("In Gen 2, draining moves always miss against Substitute.");
				return null;
			}
			if (move.category === 'Status') {
				const SubBlocked = ['leechseed', 'lockon', 'mindreader', 'nightmare', 'painsplit', 'sketch'];
				if (move.id === 'swagger') {
					// this is safe, move is a copy
					delete move.volatileStatus;
				}
				if (
					move.status || (move.boosts && move.id !== 'swagger') ||
					move.volatileStatus === 'confusion' || SubBlocked.includes(move.id)
				) {
					this.add('-activate', target, 'Substitute', '[block] ' + move.name);
					return null;
				}
				return;
			}
			let damage = this.actions.getDamage(source, target, move);
			if (!damage) {
				return null;
			}
			damage = this.runEvent('SubDamage', target, source, move, damage);
			if (!damage) {
				return damage;
			}
			if (damage > target.volatiles['substitute'].hp) {
				damage = target.volatiles['substitute'].hp as number;
			}
			target.volatiles['substitute'].hp -= damage;
			source.lastDamage = damage;
			if (target.volatiles['substitute'].hp <= 0) {
				target.removeVolatile('substitute');
			} else {
				this.add('-activate', target, 'Substitute', '[damage]');
			}
			if (move.recoil) {
				this.damage(1, source, target, 'recoil');
			}
			this.runEvent('AfterSubDamage', target, source, move, damage);
			return this.HIT_SUBSTITUTE;
		},
		onEnd(target) {
			this.add('-end', target, 'Substitute');
		},
	},
},
swagger: {
	inherit: true,
	onTryHit(target, pokemon) {
		if (target.boosts.atk >= 6 || target.getStat('atk', false, true) === 999) {
			this.add('-miss', pokemon);
			return null;
		}
	},
},
synthesis: {
	inherit: true,
	onHit(pokemon) {
		if (this.field.isWeather(['sunnyday', 'desolateland'])) {
			this.heal(pokemon.maxhp);
		} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
			this.heal(pokemon.baseMaxhp / 4);
		} else {
			this.heal(pokemon.baseMaxhp / 2);
		}
	},
},
thief: {
	inherit: true,
	onAfterHit() {},
	secondary: {
		chance: 100,
		onHit(target, source) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			const yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
	},
},
thrash: {
	inherit: true,
	onMoveFail(target, source, move) {
		source.addVolatile('lockedmove');
	},
	onAfterMove(pokemon) {
		if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
			pokemon.removeVolatile('lockedmove');
		}
	},
},
toxic: {
	inherit: true,
	ignoreImmunity: false,
},
transform: {
	inherit: true,
	noSketch: true,
},
triattack: {
	inherit: true,
	onHit(target, source, move) {
		move.statusRoll = ['par', 'frz', 'brn'][this.random(3)];
	},
	secondary: {
		chance: 20,
		onHit(target, source, move) {
			if (move.statusRoll) {
				target.trySetStatus(move.statusRoll, source);
			}
		},
	},
},
triplekick: {
	inherit: true,
	multiaccuracy: false,
	multihit: [1, 3],
},
whirlwind: {
	inherit: true,
	onTryHit() {
		for (const action of this.queue) {
			// Whirlwind only works if it is the last action in a turn, including when it's called by Sleep Talk
			if (action.choice === 'move' || action.choice === 'switch') return false;
		}
	},
	priority: -1,
},
};
