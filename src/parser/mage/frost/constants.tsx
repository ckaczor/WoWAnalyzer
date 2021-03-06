import SPELLS from 'common/SPELLS';

export const BLIZZARD_ORB_REDUCTION = 500;
export const FREEZING_WINDS_ORB_REDUCTION = 2500;
export const PROC_BUFFER = 100;
export const CAST_BUFFER = 100;
export const SPLITTING_ICE_DAMAGE_BONUS = 0.05;
export const GLACIAL_SPIKE_DAMAGE_BONUS = 0.65;
export const ICY_VEINS_BASE_DURATION = 20;
export const BONE_CHILLING_BONUS_PER_STACK = 0.005;
export const LONELY_WINTER_DAMAGE_BONUS = 0.25;

export const SHATTER_DEBUFFS = [
  SPELLS.WINTERS_CHILL,
  SPELLS.FROST_NOVA,
  SPELLS.ICE_NOVA_TALENT,
  SPELLS.GLACIAL_SPIKE_DAMAGE,
  SPELLS.RING_OF_FROST_DAMAGE,
  SPELLS.FREEZE,
];

export const COLD_SNAP_RESETS = [
	SPELLS.ICE_BARRIER,
	SPELLS.FROST_NOVA,
	SPELLS.CONE_OF_COLD,
	SPELLS.ICE_BLOCK,
  ];

  export const WINTERS_CHILL_CASTS = [
    SPELLS.FROSTBOLT,
    SPELLS.EBONBOLT_TALENT,
    SPELLS.GLACIAL_SPIKE_TALENT,
    SPELLS.ICE_LANCE,
    SPELLS.COMET_STORM_TALENT,
    SPELLS.ICE_NOVA_TALENT,
    SPELLS.RAY_OF_FROST_TALENT,
  ];

  export const WINTERS_CHILL_DAMAGE = [
    SPELLS.FROSTBOLT_DAMAGE,
    SPELLS.EBONBOLT_DAMAGE,
    SPELLS.GLACIAL_SPIKE_DAMAGE,
    SPELLS.ICE_LANCE_DAMAGE,
    SPELLS.COMET_STORM_TALENT,
    SPELLS.ICE_NOVA_TALENT,
    SPELLS.RAY_OF_FROST_TALENT,
  ];

  export const WINTERS_CHILL_SPENDERS = [
    SPELLS.ICE_LANCE_DAMAGE,
    SPELLS.GLACIAL_SPIKE_DAMAGE,
    SPELLS.ICE_NOVA_TALENT,
    SPELLS.RAY_OF_FROST_TALENT,
  ];

  export const SPLITTABLE_CASTS = [
  SPELLS.FROSTBOLT,
  SPELLS.ICE_LANCE,
  SPELLS.GLACIAL_SPIKE_TALENT,
  SPELLS.EBONBOLT_TALENT,
];

export const SPLITTABLE_DAMAGE = [
  SPELLS.ICE_LANCE_DAMAGE,
  SPELLS.ICICLE_DAMAGE,
  SPELLS.GLACIAL_SPIKE_DAMAGE,
  SPELLS.EBONBOLT_DAMAGE,
];

export const WINTERS_CHILL_HARDCASTS = [
  SPELLS.FROSTBOLT_DAMAGE,
  SPELLS.EBONBOLT_DAMAGE,
  SPELLS.GLACIAL_SPIKE_DAMAGE,
  SPELLS.RADIANT_SPARK,
];

export const BONE_CHILLING_SPELLS = [
  SPELLS.ICICLE_DAMAGE,
  SPELLS.ICE_LANCE_DAMAGE,
  SPELLS.BLIZZARD_DAMAGE,
  SPELLS.FLURRY_DAMAGE,
  SPELLS.FROSTBOLT_DAMAGE,
  SPELLS.FROZEN_ORB_DAMAGE,
  SPELLS.COMET_STORM_DAMAGE,
  SPELLS.GLACIAL_SPIKE_DAMAGE,
  SPELLS.FROST_NOVA,
  SPELLS.EBONBOLT_DAMAGE,
  SPELLS.CONE_OF_COLD,
  SPELLS.RAY_OF_FROST_TALENT,
  SPELLS.ICE_NOVA_TALENT,
  SPELLS.WATERBOLT,
];

export const LONELY_WINTER_AFFECTED_SPELLS = [
  SPELLS.FROSTBOLT_DAMAGE,
  SPELLS.ICE_LANCE_DAMAGE,
  SPELLS.FLURRY_DAMAGE,
];
