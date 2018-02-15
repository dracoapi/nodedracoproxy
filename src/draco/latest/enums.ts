export enum AllianceType {
    RED,
    BLUE,
}

export enum ArtifactName {
    NONE,
    ARTIFACT_TELEPATHY_1,
    ARTIFACT_TELEPATHY_2,
    ARTIFACT_TELEPATHY_3,
    ARTIFACT_TELEPATHY_4,
    ARTIFACT_TELEPATHY_5,
    ARTIFACT_ADDITIONAL_MONSTER_1,
    ARTIFACT_STOP_CD_REDUCE_1,
    ARTIFACT_STOP_CD_REDUCE_2,
    ARTIFACT_STOP_CD_REDUCE_3,
    ARTIFACT_STOP_CD_REDUCE_4,
    ARTIFACT_STOP_CD_REDUCE_5,
    ARTIFACT_ARENA_POWERUP_AFTER_CAPTURE_1,
    ARTIFACT_ARENA_LIMIT_INCREASE_1,
    ARTIFACT_ARENA_LIMIT_INCREASE_2,
    ARTIFACT_ARENA_LIMIT_INCREASE_3,
    ARTIFACT_ARENA_XP_FOR_TRAINING_INCREASE_1,
    ARTIFACT_ARENA_XP_FOR_TRAINING_INCREASE_2,
    ARTIFACT_ARENA_XP_FOR_TRAINING_INCREASE_3,
    ARTIFACT_ARENA_XP_FOR_TRAINING_INCREASE_4,
    ARTIFACT_ARENA_XP_FOR_TRAINING_INCREASE_5,
    ARTIFACT_RADAR_IMPROVE,
    ARTIFACT_TRIBUTE_TIME_LIMIT_INCREASE_1,
    ARTIFACT_TRIBUTE_TIME_LIMIT_INCREASE_2,
    ARTIFACT_TRIBUTE_TIME_LIMIT_INCREASE_3,
    ARTIFACT_TRIBUTE_TIME_LIMIT_INCREASE_4,
    ARTIFACT_TRIBUTE_TIME_LIMIT_INCREASE_5,
    ARTIFACT_BUDDY_DISTANCE_REDUCE_1,
    ARTIFACT_BUDDY_DISTANCE_REDUCE_2,
    ARTIFACT_BUDDY_DISTANCE_REDUCE_3,
    ARTIFACT_BUDDY_DISTANCE_REDUCE_4,
    ARTIFACT_BUDDY_DISTANCE_REDUCE_5,
    ARTIFACT_ROOST_1,
    ARTIFACT_EXPERIENCE_1,
    ARTIFACT_EXPERIENCE_2,
    ARTIFACT_EXPERIENCE_3,
    ARTIFACT_EXPERIENCE_4,
    ARTIFACT_EXPERIENCE_5,
    ARTIFACT_EXTRA_WEEKLY_QUEST_1,
    ARTIFACT_CHANGE_SPECIALIZATION_1,
    ARTIFACT_DECOY_1,
    ARTIFACT_DECOY_2,
    ARTIFACT_DECOY_3,
    ARTIFACT_DECOY_4,
    ARTIFACT_DECOY_5,
    ARTIFACT_OMIT_EASY_QUESTS_1,
    ARTIFACT_PINK_GLASSES_1,
    ARTIFACT_TAX_ALL_ARENAS_1,
    ARTIFACT_LIBRARY_CD_REDUCE_1,
    ARTIFACT_DUST_BONUS_1,
    ARTIFACT_DUST_BONUS_2,
    ARTIFACT_DUST_BONUS_3,
    ARTIFACT_DUST_BONUS_4,
    ARTIFACT_DUST_BONUS_5,
    ARTIFACT_BUFFS_FREEZE_DURING_SUPER_VISION_1,
    ARTIFACT_ARENA_TAX_FOR_ADDITIONAL_MONSTER_1,
    ARTIFACT_DURATION_EXTENDER_1,
}

export enum ArtifactType {
    ARTIFACT_REMOTE_BUILDING_CONTROL,
    ARTIFACT_ARENA_EXTRA_CREATURE,
    ARTIFACT_STOP_COOLDOWN,
    ARTIFACT_ARENA_EXTRA_START_LEVELS,
    ARTIFACT_TAXABLE_ARENAS,
    ARTIFACT_ARENA_FRIENDLY_EXTRA_EXP,
    ARTIFACT_ARENA_EXTRA_COLLECTION_TIME,
    ARTIFACT_RADAR_FILTER,
    ARTIFACT_BUDDY_BOOST,
    ARTIFACT_ROOST,
    ARTIFACT_EXPERIENCE,
    ARTIFACT_EXTRA_WEEKLY_QUEST,
    ARTIFACT_CHANGE_SPECIALIZATION,
    ARTIFACT_DECOY,
    ARTIFACT_OMIT_EASY_QUESTS,
    ARTIFACT_PINK_GLASSES,
    ARTIFACT_TAX_ALL_ARENAS,
    ARTIFACT_LIBRARY_CD_REDUCE,
    ARTIFACT_DUST_BONUS,
    ARTIFACT_BUFFS_FREEZE_DURING_SUPER_VISION,
    ARTIFACT_ARENA_TAX_FOR_ADDITIONAL_MONSTER,
    ARTIFACT_DURATION_EXTENDER,
}

export enum AuthType {
    DEVICE,
    GOOGLE,
    FACEBOOK,
    DEV,
}

export enum BuffType {
    ATTACKER_CP_BOOST,
    BEST_BALL_LUCK,
    BEST_POTION_LUCK,
    TWO_EXTRA_ITEMS_IN_STOP_LOOT,
    INCENSE_BOOST,
    INCENCE,
    EXPERIENCE_BOOSTER,
    SUPER_VISION,
    DOUBLE_DROP_FROM_STOPS,
    PERSONAL_STOP_FIELD,
    ACTIVATION_RADIUS_IMPROVE,
    SYSTEM_MAINTENANCE,
    TOWER_ELEMENTAL_DUNGEON,
    TOWER_ELEMENTAL_WATER,
    TOWER_ELEMENTAL_WIND,
    TOWER_ELEMENTAL_FIRE,
    TOWER_ELEMENTAL_EARTH,
}

export enum BuildingType {
    STOP,
    ARENA,
    OBELISK,
    LIBRARY,
    MOCK,
    PORTAL,
    DUNGEON_STOP,
    ALTAR,
    ROOST,
    ELEMENTAL_FIRE,
    ELEMENTAL_WATER,
    ELEMENTAL_WIND,
    ELEMENTAL_EARTH,
    ELEMENTAL_DUNGEON,
}

export enum ClientPlatform {
    ANDROID,
    IOS,
    UNITY,
    UNKNOWN,
}

export enum CreatureType {
    MONSTER_WATER_1,
    MONSTER_WATER_2,
    MONSTER_WATER_3,
    MONSTER_WATER_4,
    MONSTER_WATER_5,
    MONSTER_WATER_6,
    MONSTER_WATER_7,
    MONSTER_WATER_8,
    MONSTER_WATER_9,
    MONSTER_WATER_10,
    MONSTER_WATER_11,
    MONSTER_WATER_12,
    MONSTER_WATER_13,
    MONSTER_WATER_14,
    MONSTER_WATER_15,
    MONSTER_WATER_16,
    MONSTER_WATER_17,
    MONSTER_WATER_18,
    MONSTER_WATER_19,
    MONSTER_WATER_20,
    MONSTER_WATER_21,
    MONSTER_WATER_22,
    MONSTER_WATER_23,
    MONSTER_WATER_24,
    MONSTER_WATER_25,
    MONSTER_FIRE_1,
    MONSTER_FIRE_2,
    MONSTER_FIRE_3,
    MONSTER_FIRE_4,
    MONSTER_FIRE_5,
    MONSTER_FIRE_6,
    MONSTER_FIRE_7,
    MONSTER_FIRE_8,
    MONSTER_FIRE_9,
    MONSTER_FIRE_10,
    MONSTER_FIRE_11,
    MONSTER_FIRE_12,
    MONSTER_FIRE_13,
    MONSTER_FIRE_14,
    MONSTER_FIRE_15,
    MONSTER_FIRE_16,
    MONSTER_FIRE_17,
    MONSTER_FIRE_18,
    MONSTER_FIRE_19,
    MONSTER_FIRE_20,
    MONSTER_FIRE_21,
    MONSTER_FIRE_22,
    MONSTER_FIRE_23,
    MONSTER_FIRE_24,
    MONSTER_FIRE_25,
    MONSTER_EARTH_1,
    MONSTER_EARTH_2,
    MONSTER_EARTH_3,
    MONSTER_EARTH_4,
    MONSTER_EARTH_5,
    MONSTER_EARTH_6,
    MONSTER_EARTH_7,
    MONSTER_EARTH_8,
    MONSTER_EARTH_9,
    MONSTER_EARTH_10,
    MONSTER_EARTH_11,
    MONSTER_EARTH_12,
    MONSTER_EARTH_13,
    MONSTER_EARTH_14,
    MONSTER_EARTH_15,
    MONSTER_EARTH_16,
    MONSTER_EARTH_17,
    MONSTER_EARTH_18,
    MONSTER_EARTH_19,
    MONSTER_EARTH_20,
    MONSTER_EARTH_21,
    MONSTER_EARTH_22,
    MONSTER_EARTH_23,
    MONSTER_EARTH_24,
    MONSTER_EARTH_25,
    MONSTER_WIND_1,
    MONSTER_WIND_2,
    MONSTER_WIND_3,
    MONSTER_WIND_4,
    MONSTER_WIND_5,
    MONSTER_WIND_6,
    MONSTER_WIND_7,
    MONSTER_WIND_8,
    MONSTER_WIND_9,
    MONSTER_WIND_10,
    MONSTER_WIND_11,
    MONSTER_WIND_12,
    MONSTER_WIND_13,
    MONSTER_WIND_14,
    MONSTER_WIND_15,
    MONSTER_WIND_16,
    MONSTER_WIND_17,
    MONSTER_WIND_18,
    MONSTER_WIND_19,
    MONSTER_WIND_20,
    MONSTER_WIND_21,
    MONSTER_WIND_22,
    MONSTER_WIND_23,
    MONSTER_WIND_24,
    MONSTER_WIND_25,
    MONSTER_DUNGEON_1,
    MONSTER_DUNGEON_2,
    MONSTER_DUNGEON_3,
    MONSTER_DUNGEON_4,
    MONSTER_DUNGEON_5,
    MONSTER_DUNGEON_6,
    MONSTER_DUNGEON_7,
    MONSTER_DUNGEON_8,
    MONSTER_DUNGEON_9,
    MONSTER_DUNGEON_10,
    MONSTER_DUNGEON_11,
    MONSTER_DUNGEON_12,
    MONSTER_DUNGEON_13,
    MONSTER_DUNGEON_14,
    MONSTER_DUNGEON_15,
    MONSTER_DUNGEON_16,
    MONSTER_DUNGEON_17,
    MONSTER_DUNGEON_18,
    MONSTER_DUNGEON_19,
    MONSTER_DUNGEON_20,
    MONSTER_DUNGEON_21,
    MONSTER_DUNGEON_22,
    MONSTER_DUNGEON_23,
    MONSTER_DUNGEON_24,
    MONSTER_DUNGEON_25,
    MONSTER_DUNGEON_XMAS_1,
    MONSTER_DUNGEON_XMAS_2,
    MONSTER_DUNGEON_XMAS_4,
    MONSTER_DUNGEON_XMAS_5,
    MONSTER_DUNGEON_XMAS_3,
    MONSTER_DUNGEON_XMAS_6,
    MONSTER_EARTH_XMAS_1,
    MONSTER_EARTH_XMAS_3,
    MONSTER_EARTH_XMAS_2,
    MONSTER_EARTH_XMAS_4,
    MONSTER_WATER_XMAS_1,
    MONSTER_WATER_XMAS_3,
    MONSTER_WATER_XMAS_4,
    MONSTER_WATER_XMAS_2,
    MONSTER_WATER_XMAS_5,
    MONSTER_WIND_XMAS_1,
    MONSTER_WIND_XMAS_3,
    MONSTER_WIND_XMAS_5,
    MONSTER_WIND_XMAS_2,
    MONSTER_WIND_XMAS_4,
    MONSTER_WIND_XMAS_6,
    MONSTER_FIRE_XMAS_1,
    MONSTER_FIRE_XMAS_3,
    MONSTER_FIRE_XMAS_2,
    MONSTER_FIRE_XMAS_4,
    MONSTER_FIRE_XMAS_5,
    MONSTER_EARTH_VIRAL,
    MONSTER_WATER_LOV_1,
    MONSTER_WATER_LOV_2,
    MONSTER_WATER_LOV_3,
    MONSTER_WATER_LOV_4,
    MONSTER_WIND_LOV_1,
    MONSTER_WIND_LOV_2,
    MONSTER_WIND_LOV_3,
    MONSTER_WIND_LOV_4,
    MONSTER_WIND_LOV_5,
    MONSTER_FIRE_LOV_1,
    MONSTER_FIRE_LOV_2,
    MONSTER_FIRE_LOV_3,
    MONSTER_EARTH_LOV_1,
    MONSTER_EARTH_LOV_2,
    MONSTER_EARTH_LOV_3,
    MONSTER_EARTH_LOV_4,
    MONSTER_EARTH_LOV_5,
    MONSTER_DUNGEON_LOV_1,
    MONSTER_DUNGEON_LOV_2,
    MONSTER_DUNGEON_LOV_3,
    MONSTER_DUNGEON_LOV_4,
}

export enum DungeonShapeType {
    CIRCLE,
    SQUARE,
    RECTANGLE,
}

export enum ElementType {
    WATER,
    WIND,
    FIRE,
    EARTH,
    DUNGEON,
}

export enum EventLogType {
    CREATURE_CAUGHT,
    EGG_HATCHED,
    ROOST_EGG_HATCHED,
    CHEST_OPENED,
    ENCOUNTER_VICTORY,
    ENCOUNTER_LOOSE,
    ARENA_LOST_CONTROL,
    LIBRARY_LIST_CONTROL,
    LEVEL_UP,
    BUDDY_FOUND_CANDY,
    DAILY_QUEST_COMPLETED,
    WEEKLY_QUEST_COMPLETED,
    WIZARD_BATTLE_LIMIT_ENHANCED,
    ITEM_BOUGHT,
    ARTIFACT_BOUGHT,
    HARD_CURRENCY_BOUGHT,
    UPGRADE_BAG_BOUGHT,
    UPGRADE_STORAGE_BOUGHT,
    WIZARD_EXTRA_BATTLES,
    MENTORSHIP_AWARD_CREATURE,
    MENTORSHIP_AWARD_CANDIES,
    MENTORSHIP_STUDENT_AWARD,
}

export enum FNicknameValidationError {
    IS_EMPTY,
    TOO_SHORT,
    TOO_LONG,
    INVALID_CHAR,
    DUPLICATE,
}

export enum InAppEventType {
    APP_FIRST_START,
    EVENT_1_NEAR_AIM,
    EVENT_2_FAR_AIM,
    PURCHASE_SUCCESS,
    PURCHASE_FAIL,
}

export enum InstantUseItem {
    LIBRARY_COOLDOWN_REDUCE,
    ARENA_TRIBUTE_COOLDOWN_REDUCE,
    WIZARD_BATTLE_COOLDOWN_REDUCE,
}

export enum ItemType {
    MAGIC_BALL_SIMPLE,
    MAGIC_BALL_NORMAL,
    MAGIC_BALL_GOOD,
    LURE,
    INCENSE,
    EGG_KM_0,
    EGG_KM_2,
    EGG_KM_5,
    EGG_KM_10,
    SHOVEL,
    POTION_HEAL_1,
    POTION_HEAL_2,
    POTION_HEAL_3,
    POTION_HEAL_4,
    POTION_RESURRECTION_1,
    POTION_RESURRECTION_2,
    INCUBATOR_1,
    INCUBATOR_3,
    INCUBATOR_PERPETUAL,
    SUPER_VISION,
    RUNE_1,
    RUNE_2,
    RUNE_3,
    RUNE_4,
    RUNE_5,
    RUNE_6,
    FOOD_CATCH_CHANCE,
    FOOD_MORE_DUST,
    FOOD_CALM_DOWN,
    FOOD_MORE_CANDIES,
    EXPERIENCE_BOOSTER,
    INCUBATOR_10,
    INCUBATOR_20,
    INCUBATOR_50,
}

export enum LogDetailsType {
    CREATURE_CP,
    CREATURE_NAME,
    CREATURE_ALIAS,
    EGG_DISTANCE,
    ARTIFACT,
    LOOT_ARTIFACTS,
    LOOT_ITEMS,
    LOOT_INSTANT_USE_ITEMS,
    LOOT_RECIPE,
    LOOT_CANDY,
    LOOT_DUST,
    LOOT_BUFF,
    LOOT_EXP,
    LOOT_COIN,
    LEVEL,
    BUILDING_NAME,
    CANDY_TYPE,
    QUEST_TYPE,
    ITEM_TYPE,
    QUANTITY,
    COINS,
    PRICE,
}

export enum PersonalizedStop {
    BALLS,
    HEALS,
    RESURRECTIONS,
    EGGS,
    FOODS,
}

export enum QuestComplexity {
    EASY,
    MIDDLE,
    HARD,
}

export enum QuestType {
    WIN_ARENA_MONSTER,
    OPEN_EGGS,
    COLLECT_ARENA_TRIBUTE,
    CAPTURE_LIBRARY,
    CAPTURE_WILD_MONSTER,
    CAPTURE_WILD_MONSTER_ELEMENT,
    FIND_DUNGEON_WITH_ROOST,
    CAPTURE_ALL_IN_DUNGEON,
    OPEN_CHEST,
    CHAIN_OF_STOP,
}

export enum RecipeType {
    RECIPE_ACTIVATION_RADIUS_IMPROVE_1,
    RECIPE_PERSONAL_STOP_FIELD_1,
    RECIPE_PROTECT_ALLY_ARENA_1,
    RECIPE_CREATE_DUNGEON_PORTAL_1,
    RECIPE_RECAPTURE_ENEMY_PLACES_1,
    RECIPE_DOUBLE_DROP_FROM_STOPS_1,
    RECIPE_TOWER_ELEMENTAL_FIRE,
    RECIPE_TOWER_ELEMENTAL_WATER,
    RECIPE_TOWER_ELEMENTAL_WIND,
    RECIPE_TOWER_ELEMENTAL_EARTH,
    RECIPE_TOWER_ELEMENTAL_DUNGEON,
}

export enum SaleSetType {
    SET_1,
    SET_2,
    SET_3,
}

export enum SkillQuality {
    NORMAL,
    GOOD,
    BEST,
}

export enum SpellType {
    ACTIVATION_RADIUS,
    STOP_FIELD,
    PROTECT_ARENA,
    CREATE_PORTAL,
    ARMAGEDDON,
    DOUBLE_DROP,
    TOWER_ELEMENTAL_FIRE,
    TOWER_ELEMENTAL_WATER,
    TOWER_ELEMENTAL_WIND,
    TOWER_ELEMENTAL_EARTH,
    TOWER_ELEMENTAL_DUNGEON,
}

