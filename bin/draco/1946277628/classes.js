"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classIds = {
    '-128': 'FMentorshipInfo',
    '-127': 'FNewsArticle',
    '-126': 'FNicknameValidationError',
    '-125': 'FNicknameValidationResult',
    '-124': 'FNotification',
    '-123': 'FObeliskDetails',
    '-122': 'FOpenChestResult',
    '-121': 'FPickItemsResponse',
    '-120': 'FPitstop',
    '-119': 'FPrice',
    '-118': 'FPurchaseResult',
    '-117': 'FQuestCompleted',
    '-116': 'FQuestUpdate',
    '-115': 'FRecipeConfig',
    '-114': 'FResistModifyDetails',
    '-113': 'FResistModifyResult',
    '-112': 'FScoutRequest',
    '-111': 'FServiceError',
    '-110': 'FShopConfig',
    '-109': 'FShopConfigRequest',
    '-108': 'FSpellCastDone',
    '-107': 'FSpellEffectsUpdate',
    '-106': 'FStartEncounterRequest',
    '-105': 'FStudent',
    '-104': 'FTile',
    '-103': 'FTileState',
    '-102': 'FTips',
    '-101': 'FTransferMonsterToCandiesResponse',
    '-100': 'FUpdate',
    '-99': 'FUpdateNicknameResult',
    '-98': 'FUpdateRequest',
    '-97': 'FUserCreature',
    '-96': 'FUserCreatureUpdate',
    '-95': 'FUserCreaturesList',
    '-94': 'FUserHatchingInfo',
    '-93': 'FUserInfo',
    '-92': 'FWeeklyQuest',
    '-91': 'FWeeklyQuestFragment',
    '-90': 'FWildCreature',
    '-89': 'FWizardBattleInfo',
    '-88': 'FWizardBattleRating',
    '-87': 'FWizardBattleRatingListRecord',
    '-86': 'FWizardBattleResult',
    '-85': 'GeoCoords',
    '-84': 'GeoCoordsWithAccuracy',
    '-83': 'IdAndCoords',
    '-82': 'Tile',
    '4': 'object',
    '5': 'bool',
    '6': 'sbyte',
    '7': 'short',
    '8': 'int',
    '9': 'long',
    '10': 'float',
    '11': 'double',
    '12': 'string',
    '13': 'List<>',
    '14': 'Set<>',
    '15': 'Map',
    '16': 'Map',
    '17': 'ContestStage',
    '18': 'AllianceType',
    '19': 'ArtifactName',
    '20': 'ArtifactType',
    '21': 'BuffConfig',
    '22': 'BuffType',
    '23': 'BuildingType',
    '24': 'CreatureType',
    '25': 'DungeonShapeType',
    '26': 'ElementType',
    '27': 'EventLogType',
    '28': 'InAppEventInfo',
    '29': 'InAppEventType',
    '30': 'InstantUseItem',
    '31': 'ItemType',
    '32': 'PersonalizedStop',
    '33': 'PotionConfig',
    '34': 'QuestComplexity',
    '35': 'QuestType',
    '36': 'RecipeType',
    '37': 'SaleSetConfig',
    '38': 'SaleSetType',
    '39': 'ExtraPack',
    '40': 'ProductGroup',
    '41': 'ProductLot',
    '42': 'SkillQuality',
    '43': 'SpellType',
    '44': 'AuthData',
    '45': 'AuthType',
    '46': 'LogDetailsType',
    '47': 'FClientInfo',
    '48': 'FRegistrationInfo',
    '49': 'ClientPlatform',
    '50': 'ClientScreen',
    '51': 'FActiveObject',
    '52': 'FActiveObjectsUpdate',
    '53': 'FAllianceChooseRequest',
    '54': 'FAltar',
    '55': 'FAltarDetails',
    '56': 'FArena',
    '57': 'FArenaBattleResult',
    '58': 'FArenaDetails',
    '59': 'FDefenderDetails',
    '60': 'FArenaWithBattleUpdate',
    '61': 'FArtifactsUpdate',
    '62': 'FAttackArenaRequest',
    '63': 'FAuthData',
    '64': 'FAvaUpdate',
    '65': 'FBagItem',
    '66': 'FBagUpdate',
    '67': 'FBaseItemUpdate',
    '68': 'FBaseLootItem',
    '69': 'FBaseRatingRecord',
    '70': 'FBuddy',
    '71': 'FBuff',
    '72': 'FBuilding',
    '73': 'FBuildingRequest',
    '74': 'FBuildingUpdate',
    '75': 'FCatchCreatureResult',
    '76': 'FCatchingConfig',
    '77': 'FCatchingCreature',
    '78': 'FChest',
    '79': 'FChestUpdate',
    '80': 'FClientLogRecord',
    '81': 'FClientRequest',
    '82': 'FCollectorRating',
    '83': 'FCollectorRatingListRecord',
    '84': 'FConfig',
    '85': 'FContest',
    '86': 'FContestBattle',
    '87': 'FContestParticipant',
    '88': 'FContestRating',
    '89': 'FContestRatingAward',
    '90': 'FContestRatingListRecord',
    '91': 'FContestStats',
    '92': 'FContestUpdate',
    '93': 'FCreadex',
    '94': 'FCreadexChain',
    '95': 'FCreadexEntry',
    '96': 'FCreatureRequest',
    '97': 'FCreatureUpdate',
    '98': 'FDailyQuest',
    '99': 'FDungeonUpdate',
    '100': 'FEgg',
    '101': 'FEncounterBattleResult',
    '102': 'FEncounterDetails',
    '103': 'FEncounterUpdate',
    '104': 'FFeedMonsterResult',
    '105': 'FFightCreature',
    '106': 'FFightItem',
    '107': 'FFightRequest',
    '108': 'FFightUpdate',
    '109': 'FHatchedEggs',
    '110': 'FHatchingResult',
    '111': 'FInAppEventUpdate',
    '112': 'FIncubator',
    '113': 'FIngameNotifications',
    '114': 'FItemCreatureGroup',
    '115': 'FJournalUpdate',
    '116': 'FJournalRecord',
    '117': 'FLoot',
    '118': 'FLootItemArtifact',
    '119': 'FLootItemBuff',
    '120': 'FLootItemCandy',
    '121': 'FLootItemCoins',
    '122': 'FLootItemDust',
    '123': 'FLootItemExp',
    '124': 'FLootItemInstantUseItem',
    '125': 'FLootItemItem',
    '126': 'FLootItemRecipe',
    '127': 'FMentorshipAwardUpdate',
};
exports.primitiveIds = {
    '1': 'sbyte',
    '2': 'short',
    '3': 'int',
    '4': 'long',
    '5': 'float',
    '6': 'double',
    '7': 'bool',
};
//# sourceMappingURL=classes.js.map