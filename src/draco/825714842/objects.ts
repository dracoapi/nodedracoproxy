import Serializer from './serializer';
import Deserializer from './deserializer';
import * as enums from './enums';
import * as long from 'long';

export class AuthData {
    __type = 'AuthData';
    authType: enums.AuthType; // AuthType
    profileId: string; // string
    tokenId: string; // string

    public constructor(init?: Partial<AuthData>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.authType);
        serializer.writeUtf8String(this.profileId);
        serializer.writeDynamicObject(this.tokenId, 'string');
    }
    deserialize(deserializer: Deserializer) {
        this.authType = deserializer.readByte();
        this.profileId = deserializer.readUtf8String();
        this.tokenId = deserializer.readDynamicObject();
    }
}

export class BuffConfig {
    __type = 'BuffConfig';
    durationMs: long; // long
    isOffer: boolean; // bool
    type: enums.BuffType; // BuffType
    valuePercent: number; // int

    public constructor(init?: Partial<BuffConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt64(this.durationMs);
        serializer.writeBoolean(this.isOffer);
        serializer.writeByte(this.type);
        serializer.writeInt32(this.valuePercent);
    }
    deserialize(deserializer: Deserializer) {
        this.durationMs = deserializer.readInt64();
        this.isOffer = deserializer.readBoolean();
        this.type = deserializer.readByte();
        this.valuePercent = deserializer.readInt32();
    }
}

export class ExtraPack {
    __type = 'ExtraPack';
    price: number; // int
    wizardBattles: number; // int

    public constructor(init?: Partial<ExtraPack>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.price);
        serializer.writeInt32(this.wizardBattles);
    }
    deserialize(deserializer: Deserializer) {
        this.price = deserializer.readInt32();
        this.wizardBattles = deserializer.readInt32();
    }
}

export class FActiveObject {
    __type = 'FActiveObject';
    allianceType: enums.AllianceType; // AllianceType
    arenaId: string; // string
    combinedName: number; // int
    coords: GeoCoords; // GeoCoords
    creatureAlias: string; // string
    creatureCp: number; // int
    creatureName: enums.CreatureType; // CreatureType
    level: number; // int
    lost: boolean; // bool
    timeLeft: number; // float
    weaklyBonus: number; // int

    public constructor(init?: Partial<FActiveObject>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceType, 'enums.AllianceType');
        serializer.writeUtf8String(this.arenaId);
        serializer.writeInt32(this.combinedName);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.creatureAlias, 'string');
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureName);
        serializer.writeInt32(this.level);
        serializer.writeBoolean(this.lost);
        serializer.writeFloat(this.timeLeft);
        serializer.writeInt32(this.weaklyBonus);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.arenaId = deserializer.readUtf8String();
        this.combinedName = deserializer.readInt32();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.creatureAlias = deserializer.readDynamicObject();
        this.creatureCp = deserializer.readInt32();
        this.creatureName = deserializer.readByte();
        this.level = deserializer.readInt32();
        this.lost = deserializer.readBoolean();
        this.timeLeft = deserializer.readFloat();
        this.weaklyBonus = deserializer.readInt32();
    }
}

export class FActiveObjectsUpdate {
    __type = 'FActiveObjectsUpdate';
    arenaQuantity: number; // int
    coins: number; // int
    dust: number; // int
    increasedTribute: boolean; // bool
    libraryAvailableCharges: number; // int
    libraryPoints: number; // int
    libraryQuantity: number; // int
    libraryRequired: number; // int
    libraryTotalCharges: number; // int
    libraryTotalCooldown: number; // float
    libraryWaitCooldown: number; // int
    loot: FLoot; // FLoot
    maxArenas: number; // int
    objectList: FActiveObject[]; // FActiveObject[]
    timeToNextTributeCollection: number; // float
    totalArenas: number; // int
    tributeCooldown: number; // float

    public constructor(init?: Partial<FActiveObjectsUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.arenaQuantity);
        serializer.writeInt32(this.coins);
        serializer.writeInt32(this.dust);
        serializer.writeBoolean(this.increasedTribute);
        serializer.writeInt32(this.libraryAvailableCharges);
        serializer.writeInt32(this.libraryPoints);
        serializer.writeInt32(this.libraryQuantity);
        serializer.writeInt32(this.libraryRequired);
        serializer.writeInt32(this.libraryTotalCharges);
        serializer.writeFloat(this.libraryTotalCooldown);
        serializer.writeInt32(this.libraryWaitCooldown);
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeInt32(this.maxArenas);
        serializer.writeStaticList(this.objectList, true, 'FActiveObject');
        serializer.writeFloat(this.timeToNextTributeCollection);
        serializer.writeInt32(this.totalArenas);
        serializer.writeFloat(this.tributeCooldown);
    }
    deserialize(deserializer: Deserializer) {
        this.arenaQuantity = deserializer.readInt32();
        this.coins = deserializer.readInt32();
        this.dust = deserializer.readInt32();
        this.increasedTribute = deserializer.readBoolean();
        this.libraryAvailableCharges = deserializer.readInt32();
        this.libraryPoints = deserializer.readInt32();
        this.libraryQuantity = deserializer.readInt32();
        this.libraryRequired = deserializer.readInt32();
        this.libraryTotalCharges = deserializer.readInt32();
        this.libraryTotalCooldown = deserializer.readFloat();
        this.libraryWaitCooldown = deserializer.readInt32();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.maxArenas = deserializer.readInt32();
        this.objectList = deserializer.readStaticList('FActiveObject', true);
        this.timeToNextTributeCollection = deserializer.readFloat();
        this.totalArenas = deserializer.readInt32();
        this.tributeCooldown = deserializer.readFloat();
    }
}

export class FAllianceChooseRequest {
    __type = 'FAllianceChooseRequest';
    bonus: number; // int
    oneOption: boolean; // bool
    recommendedType: enums.AllianceType; // AllianceType

    public constructor(init?: Partial<FAllianceChooseRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.bonus);
        serializer.writeBoolean(this.oneOption);
        serializer.writeDynamicObject(this.recommendedType, 'enums.AllianceType');
    }
    deserialize(deserializer: Deserializer) {
        this.bonus = deserializer.readInt32();
        this.oneOption = deserializer.readBoolean();
        this.recommendedType = deserializer.readDynamicObject();
    }
}

export class FAltar {
    __type = 'FAltar';
    ownerId: string; // string
    sharedWithEmptyPassword: boolean; // bool

    public constructor(init?: Partial<FAltar>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.ownerId);
        serializer.writeBoolean(this.sharedWithEmptyPassword);
    }
    deserialize(deserializer: Deserializer) {
        this.ownerId = deserializer.readUtf8String();
        this.sharedWithEmptyPassword = deserializer.readBoolean();
    }
}

export class FAltarDetails {
    __type = 'FAltarDetails';
    buildingId: string; // string
    coords: GeoCoords; // GeoCoords
    ownerNickname: string; // string
    recipeLevel: number; // int
    recipeName: enums.RecipeType; // RecipeType
    runeOwnerNames: Map<number, string>; // Map<int, string>
    runeOwners: Map<number, string>; // Map<int, string>

    public constructor(init?: Partial<FAltarDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.buildingId);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeUtf8String(this.ownerNickname);
        serializer.writeInt32(this.recipeLevel);
        serializer.writeByte(this.recipeName);
        serializer.writeStaticMap(this.runeOwnerNames, true, true, 'int', 'string');
        serializer.writeStaticMap(this.runeOwners, true, true, 'int', 'string');
    }
    deserialize(deserializer: Deserializer) {
        this.buildingId = deserializer.readUtf8String();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.ownerNickname = deserializer.readUtf8String();
        this.recipeLevel = deserializer.readInt32();
        this.recipeName = deserializer.readByte();
        this.runeOwnerNames = deserializer.readStaticMap('int', 'string', true, true);
        this.runeOwners = deserializer.readStaticMap('int', 'string', true, true);
    }
}

export class FArena {
    __type = 'FArena';
    allianceType: enums.AllianceType; // AllianceType
    combinedName: number; // int
    protectionTtl: number; // float

    public constructor(init?: Partial<FArena>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceType, 'enums.AllianceType');
        serializer.writeInt32(this.combinedName);
        serializer.writeFloat(this.protectionTtl);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.combinedName = deserializer.readInt32();
        this.protectionTtl = deserializer.readFloat();
    }
}

export class FArenaBattleResult {
    __type = 'FArenaBattleResult';
    allyArena: boolean; // bool
    combinedName: number; // int
    creaturesDefeated: number; // int
    currentPrestige: number; // int
    level: number; // int
    loot: FLoot; // FLoot
    nextLevelPrestige: number; // int
    prestigeBonusKillAll: number; // int
    prestigeBonusKillStronger: number; // int
    prestigeChange: number; // int
    prestigeEarned: number; // int
    resultScreenDelay: number; // float
    userExpBonusKillAll: number; // int
    userExpBonusKillStronger: number; // int
    userExpGained: number; // int
    victory: boolean; // bool

    public constructor(init?: Partial<FArenaBattleResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.allyArena);
        serializer.writeInt32(this.combinedName);
        serializer.writeInt32(this.creaturesDefeated);
        serializer.writeInt32(this.currentPrestige);
        serializer.writeInt32(this.level);
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeInt32(this.nextLevelPrestige);
        serializer.writeInt32(this.prestigeBonusKillAll);
        serializer.writeInt32(this.prestigeBonusKillStronger);
        serializer.writeInt32(this.prestigeChange);
        serializer.writeInt32(this.prestigeEarned);
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeInt32(this.userExpBonusKillAll);
        serializer.writeInt32(this.userExpBonusKillStronger);
        serializer.writeInt32(this.userExpGained);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer: Deserializer) {
        this.allyArena = deserializer.readBoolean();
        this.combinedName = deserializer.readInt32();
        this.creaturesDefeated = deserializer.readInt32();
        this.currentPrestige = deserializer.readInt32();
        this.level = deserializer.readInt32();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.nextLevelPrestige = deserializer.readInt32();
        this.prestigeBonusKillAll = deserializer.readInt32();
        this.prestigeBonusKillStronger = deserializer.readInt32();
        this.prestigeChange = deserializer.readInt32();
        this.prestigeEarned = deserializer.readInt32();
        this.resultScreenDelay = deserializer.readFloat();
        this.userExpBonusKillAll = deserializer.readInt32();
        this.userExpBonusKillStronger = deserializer.readInt32();
        this.userExpGained = deserializer.readInt32();
        this.victory = deserializer.readBoolean();
    }
}

export class FArenaDetails {
    __type = 'FArenaDetails';
    allianceChooseRequest: FAllianceChooseRequest; // FAllianceChooseRequest
    buildingType: enums.BuildingType; // BuildingType
    canAddDefender: boolean; // bool
    canAttack: boolean; // bool
    capturableGeoPointsLimitReached: boolean; // bool
    combinedName: number; // int
    coords: GeoCoords; // GeoCoords
    currentExp: number; // int
    defenders: FDefenderDetails[]; // FDefenderDetails[]
    id: string; // string
    lastUpdateTime: long; // long
    level: number; // int
    libraryBlockedCooldown: number; // int
    minUseLevel: number; // int
    nextLevelExp: number; // int
    ownerAlliance: enums.AllianceType; // AllianceType
    possibleDefendersCount: number; // int
    protectionRemainingTime: number; // float
    remoteBuildingControlChargesMaxCount: number; // int
    remoteBuildingControlChargesUsed: number; // int
    remoteBuildingControlCooldown: number; // int
    restrictedForAllianceToCapture: enums.AllianceType; // AllianceType
    restrictedForAllianceToCaptureRemainingTime: number; // float

    public constructor(init?: Partial<FArenaDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceChooseRequest, 'FAllianceChooseRequest');
        serializer.writeByte(this.buildingType);
        serializer.writeBoolean(this.canAddDefender);
        serializer.writeBoolean(this.canAttack);
        serializer.writeBoolean(this.capturableGeoPointsLimitReached);
        serializer.writeInt32(this.combinedName);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeInt32(this.currentExp);
        serializer.writeStaticList(this.defenders, true, 'FDefenderDetails');
        serializer.writeUtf8String(this.id);
        serializer.writeInt64(this.lastUpdateTime);
        serializer.writeInt32(this.level);
        serializer.writeInt32(this.libraryBlockedCooldown);
        serializer.writeInt32(this.minUseLevel);
        serializer.writeInt32(this.nextLevelExp);
        serializer.writeDynamicObject(this.ownerAlliance, 'enums.AllianceType');
        serializer.writeInt32(this.possibleDefendersCount);
        serializer.writeFloat(this.protectionRemainingTime);
        serializer.writeInt32(this.remoteBuildingControlChargesMaxCount);
        serializer.writeInt32(this.remoteBuildingControlChargesUsed);
        serializer.writeInt32(this.remoteBuildingControlCooldown);
        serializer.writeDynamicObject(this.restrictedForAllianceToCapture, 'enums.AllianceType');
        serializer.writeFloat(this.restrictedForAllianceToCaptureRemainingTime);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceChooseRequest = deserializer.readDynamicObject();
        this.buildingType = deserializer.readByte();
        this.canAddDefender = deserializer.readBoolean();
        this.canAttack = deserializer.readBoolean();
        this.capturableGeoPointsLimitReached = deserializer.readBoolean();
        this.combinedName = deserializer.readInt32();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.currentExp = deserializer.readInt32();
        this.defenders = deserializer.readStaticList('FDefenderDetails', true);
        this.id = deserializer.readUtf8String();
        this.lastUpdateTime = deserializer.readInt64();
        this.level = deserializer.readInt32();
        this.libraryBlockedCooldown = deserializer.readInt32();
        this.minUseLevel = deserializer.readInt32();
        this.nextLevelExp = deserializer.readInt32();
        this.ownerAlliance = deserializer.readDynamicObject();
        this.possibleDefendersCount = deserializer.readInt32();
        this.protectionRemainingTime = deserializer.readFloat();
        this.remoteBuildingControlChargesMaxCount = deserializer.readInt32();
        this.remoteBuildingControlChargesUsed = deserializer.readInt32();
        this.remoteBuildingControlCooldown = deserializer.readInt32();
        this.restrictedForAllianceToCapture = deserializer.readDynamicObject();
        this.restrictedForAllianceToCaptureRemainingTime = deserializer.readFloat();
    }
}

export class FArenaWithBattleUpdate {
    __type = 'FArenaWithBattleUpdate';
    arenaWithBattle: Set<string>; // Set<string>

    public constructor(init?: Partial<FArenaWithBattleUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticHashSet(this.arenaWithBattle, true, 'string');
    }
    deserialize(deserializer: Deserializer) {
        this.arenaWithBattle = deserializer.readStaticHashSet('string', true);
    }
}

export class FArtifactsUpdate {
    __type = 'FArtifactsUpdate';
    artifacts: enums.ArtifactName[]; // ArtifactName[]
    artifactsBagSize: number; // int
    artifactsSlots: number; // int
    avaUpdate: FAvaUpdate; // FAvaUpdate
    hasBonusSetFirst: boolean; // bool
    hasBonusSetSecond: boolean; // bool
    putOn: enums.ArtifactName[]; // ArtifactName[]

    public constructor(init?: Partial<FArtifactsUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.artifacts, true, 'ArtifactName');
        serializer.writeInt32(this.artifactsBagSize);
        serializer.writeInt32(this.artifactsSlots);
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeBoolean(this.hasBonusSetFirst);
        serializer.writeBoolean(this.hasBonusSetSecond);
        serializer.writeStaticList(this.putOn, true, 'ArtifactName');
    }
    deserialize(deserializer: Deserializer) {
        this.artifacts = deserializer.readStaticList('ArtifactName', true);
        this.artifactsBagSize = deserializer.readInt32();
        this.artifactsSlots = deserializer.readInt32();
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.hasBonusSetFirst = deserializer.readBoolean();
        this.hasBonusSetSecond = deserializer.readBoolean();
        this.putOn = deserializer.readStaticList('ArtifactName', true);
    }
}

export class FAttackArenaRequest {
    __type = 'FAttackArenaRequest';
    buildingRequest: FBuildingRequest; // FBuildingRequest
    coords: GeoCoords; // GeoCoords
    selectedCreatures: string[]; // string[]

    public constructor(init?: Partial<FAttackArenaRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.buildingRequest, 'FBuildingRequest');
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeStaticList(this.selectedCreatures, true, 'string');
    }
    deserialize(deserializer: Deserializer) {
        this.buildingRequest = deserializer.readStaticObject('FBuildingRequest') as FBuildingRequest;
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.selectedCreatures = deserializer.readStaticList('string', true);
    }
}

export class FAuthData {
    __type = 'FAuthData';
    info: FUserInfo; // FUserInfo

    public constructor(init?: Partial<FAuthData>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.info, 'FUserInfo');
    }
    deserialize(deserializer: Deserializer) {
        this.info = deserializer.readStaticObject('FUserInfo') as FUserInfo;
    }
}

export class FAvaUpdate {
    __type = 'FAvaUpdate';
    activationRadius: number; // double
    alliance: enums.AllianceType; // AllianceType
    altarCoords: GeoCoords; // GeoCoords
    artifactDustFactor: number; // float
    artifacts: enums.ArtifactName[]; // ArtifactName[]
    buddy: FBuddy; // FBuddy
    buffs: FBuff[]; // FBuff[]
    candies: Map<enums.CreatureType, number>; // Map<enums.CreatureType, int>
    coins: number; // int
    creatureStorageSize: number; // int
    currentExperience: number; // int
    dungeonId: string; // string
    dust: number; // int
    eggsHatchedCount: number; // int
    emulatorCheckDisabled: boolean; // bool
    exp: number; // float
    freshNewsDate: long; // long
    hasUnhandledAdvices: boolean; // bool
    incenseDuration: long; // long
    incenseGenMonstersGroupName: string; // string
    incenseLeftTime: long; // long
    isArtifactsBagFull: boolean; // bool
    isBagFull: boolean; // bool
    isEggBagFull: boolean; // bool
    level: number; // int
    monstersCaughtCount: number; // int
    nextLevelExperience: number; // int
    recipeLevels: Map<enums.RecipeType, number>; // Map<enums.RecipeType, int>
    registerDate: long; // long
    stopFieldDuration: long; // long
    stopFieldLeftTime: long; // long
    superVisionCenter: GeoCoords; // GeoCoords
    superVisionDuration: long; // long
    superVisionLeftTime: long; // long
    totalDistanceF: number; // float
    wearArtifacts: enums.ArtifactName[]; // ArtifactName[]

    public constructor(init?: Partial<FAvaUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDouble(this.activationRadius);
        serializer.writeDynamicObject(this.alliance, 'enums.AllianceType');
        serializer.writeDynamicObject(this.altarCoords, 'GeoCoords');
        serializer.writeFloat(this.artifactDustFactor);
        serializer.writeStaticList(this.artifacts, true, 'ArtifactName');
        serializer.writeDynamicObject(this.buddy, 'FBuddy');
        serializer.writeStaticList(this.buffs, true, 'FBuff');
        serializer.writeStaticMap(this.candies, true, true, 'CreatureType', 'int');
        serializer.writeInt32(this.coins);
        serializer.writeInt32(this.creatureStorageSize);
        serializer.writeInt32(this.currentExperience);
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.eggsHatchedCount);
        serializer.writeBoolean(this.emulatorCheckDisabled);
        serializer.writeFloat(this.exp);
        serializer.writeInt64(this.freshNewsDate);
        serializer.writeBoolean(this.hasUnhandledAdvices);
        serializer.writeInt64(this.incenseDuration);
        serializer.writeUtf8String(this.incenseGenMonstersGroupName);
        serializer.writeInt64(this.incenseLeftTime);
        serializer.writeBoolean(this.isArtifactsBagFull);
        serializer.writeBoolean(this.isBagFull);
        serializer.writeBoolean(this.isEggBagFull);
        serializer.writeInt32(this.level);
        serializer.writeInt32(this.monstersCaughtCount);
        serializer.writeInt32(this.nextLevelExperience);
        serializer.writeStaticMap(this.recipeLevels, true, true, 'RecipeType', 'int');
        serializer.writeInt64(this.registerDate);
        serializer.writeInt64(this.stopFieldDuration);
        serializer.writeInt64(this.stopFieldLeftTime);
        serializer.writeDynamicObject(this.superVisionCenter, 'GeoCoords');
        serializer.writeInt64(this.superVisionDuration);
        serializer.writeInt64(this.superVisionLeftTime);
        serializer.writeFloat(this.totalDistanceF);
        serializer.writeStaticList(this.wearArtifacts, true, 'ArtifactName');
    }
    deserialize(deserializer: Deserializer) {
        this.activationRadius = deserializer.readDouble();
        this.alliance = deserializer.readDynamicObject();
        this.altarCoords = deserializer.readDynamicObject();
        this.artifactDustFactor = deserializer.readFloat();
        this.artifacts = deserializer.readStaticList('ArtifactName', true);
        this.buddy = deserializer.readDynamicObject();
        this.buffs = deserializer.readStaticList('FBuff', true);
        this.candies = deserializer.readStaticMap('CreatureType', 'int', true, true);
        this.coins = deserializer.readInt32();
        this.creatureStorageSize = deserializer.readInt32();
        this.currentExperience = deserializer.readInt32();
        this.dungeonId = deserializer.readDynamicObject();
        this.dust = deserializer.readInt32();
        this.eggsHatchedCount = deserializer.readInt32();
        this.emulatorCheckDisabled = deserializer.readBoolean();
        this.exp = deserializer.readFloat();
        this.freshNewsDate = deserializer.readInt64();
        this.hasUnhandledAdvices = deserializer.readBoolean();
        this.incenseDuration = deserializer.readInt64();
        this.incenseGenMonstersGroupName = deserializer.readUtf8String();
        this.incenseLeftTime = deserializer.readInt64();
        this.isArtifactsBagFull = deserializer.readBoolean();
        this.isBagFull = deserializer.readBoolean();
        this.isEggBagFull = deserializer.readBoolean();
        this.level = deserializer.readInt32();
        this.monstersCaughtCount = deserializer.readInt32();
        this.nextLevelExperience = deserializer.readInt32();
        this.recipeLevels = deserializer.readStaticMap('RecipeType', 'int', true, true);
        this.registerDate = deserializer.readInt64();
        this.stopFieldDuration = deserializer.readInt64();
        this.stopFieldLeftTime = deserializer.readInt64();
        this.superVisionCenter = deserializer.readDynamicObject();
        this.superVisionDuration = deserializer.readInt64();
        this.superVisionLeftTime = deserializer.readInt64();
        this.totalDistanceF = deserializer.readFloat();
        this.wearArtifacts = deserializer.readStaticList('ArtifactName', true);
    }
}

export class FBagItem {
    __type = 'FBagItem';
    count: number; // int
    removable: boolean; // bool
    stack: boolean; // bool
    type: enums.ItemType; // ItemType

    public constructor(init?: Partial<FBagItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.count);
        serializer.writeBoolean(this.removable);
        serializer.writeBoolean(this.stack);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.count = deserializer.readInt32();
        this.removable = deserializer.readBoolean();
        this.stack = deserializer.readBoolean();
        this.type = deserializer.readByte();
    }
}

export class FBagUpdate {
    __type = 'FBagUpdate';
    allowedItemsSize: number; // int
    items: FBagItem[]; // FBagItem[]
    lockedRunes: Map<enums.ItemType, number>; // Map<enums.ItemType, int>

    public constructor(init?: Partial<FBagUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.allowedItemsSize);
        serializer.writeStaticList(this.items, true, 'FBagItem');
        serializer.writeStaticMap(this.lockedRunes, true, true, 'ItemType', 'int');
    }
    deserialize(deserializer: Deserializer) {
        this.allowedItemsSize = deserializer.readInt32();
        this.items = deserializer.readStaticList('FBagItem', true);
        this.lockedRunes = deserializer.readStaticMap('ItemType', 'int', true, true);
    }
}

export class FBaseItemUpdate {
    __type = 'FBaseItemUpdate';

    public constructor(init?: Partial<FBaseItemUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
    }
    deserialize(deserializer: Deserializer) {
    }
}

export class FBaseLootItem {
    __type = 'FBaseLootItem';
    qty: number; // int

    public constructor(init?: Partial<FBaseLootItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
    }
}

export class FBuddy {
    __type = 'FBuddy';
    alias: string; // string
    candyType: enums.CreatureType; // CreatureType
    creature: enums.CreatureType; // CreatureType
    currentWalkedF: number; // float
    distanceForCandies: number; // int
    id: string; // string
    totalCandies: number; // int
    totalWalkedF: number; // float

    public constructor(init?: Partial<FBuddy>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alias, 'string');
        serializer.writeByte(this.candyType);
        serializer.writeByte(this.creature);
        serializer.writeFloat(this.currentWalkedF);
        serializer.writeInt32(this.distanceForCandies);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.totalCandies);
        serializer.writeFloat(this.totalWalkedF);
    }
    deserialize(deserializer: Deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.candyType = deserializer.readByte();
        this.creature = deserializer.readByte();
        this.currentWalkedF = deserializer.readFloat();
        this.distanceForCandies = deserializer.readInt32();
        this.id = deserializer.readUtf8String();
        this.totalCandies = deserializer.readInt32();
        this.totalWalkedF = deserializer.readFloat();
    }
}

export class FBuff {
    __type = 'FBuff';
    buffType: enums.BuffType; // BuffType
    duration: long; // long
    timeLeft: long; // long
    timeToActivation: long; // long
    valuePercent: number; // int

    public constructor(init?: Partial<FBuff>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.buffType);
        serializer.writeInt64(this.duration);
        serializer.writeInt64(this.timeLeft);
        serializer.writeInt64(this.timeToActivation);
        serializer.writeInt32(this.valuePercent);
    }
    deserialize(deserializer: Deserializer) {
        this.buffType = deserializer.readByte();
        this.duration = deserializer.readInt64();
        this.timeLeft = deserializer.readInt64();
        this.timeToActivation = deserializer.readInt64();
        this.valuePercent = deserializer.readInt32();
    }
}

export class FBuilding {
    __type = 'FBuilding';
    altar: FAltar; // FAltar
    arena: FArena; // FArena
    available: boolean; // bool
    casted: boolean; // bool
    coords: GeoCoords; // GeoCoords
    dungeonId: string; // string
    expirationTime: long; // long
    id: string; // string
    pitstop: FPitstop; // FPitstop
    type: enums.BuildingType; // BuildingType

    public constructor(init?: Partial<FBuilding>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.altar, 'FAltar');
        serializer.writeDynamicObject(this.arena, 'FArena');
        serializer.writeBoolean(this.available);
        serializer.writeBoolean(this.casted);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeInt64(this.expirationTime);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.pitstop, 'FPitstop');
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.altar = deserializer.readDynamicObject();
        this.arena = deserializer.readDynamicObject();
        this.available = deserializer.readBoolean();
        this.casted = deserializer.readBoolean();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.dungeonId = deserializer.readDynamicObject();
        this.expirationTime = deserializer.readInt64();
        this.id = deserializer.readUtf8String();
        this.pitstop = deserializer.readDynamicObject();
        this.type = deserializer.readByte();
    }
}

export class FBuildingRequest {
    __type = 'FBuildingRequest';
    coords: GeoCoords; // GeoCoords
    dungeonId: string; // string
    id: string; // string

    public constructor(init?: Partial<FBuildingRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.dungeonId = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
    }
}

export class FBuildingUpdate {
    __type = 'FBuildingUpdate';
    tileBuildings: Map<FTile, FTileState>; // Map<FTile, FTileState>

    public constructor(init?: Partial<FBuildingUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.tileBuildings, true, true, 'FTile', 'FTileState');
    }
    deserialize(deserializer: Deserializer) {
        this.tileBuildings = deserializer.readStaticMap('FTile', 'FTileState', true, true);
    }
}

export class FCatchCreatureResult {
    __type = 'FCatchCreatureResult';
    avaUpdate: FAvaUpdate; // FAvaUpdate
    ballType: enums.ItemType; // ItemType
    candies: number; // int
    candyType: enums.CreatureType; // CreatureType
    catchChance: number; // float
    catching: FCatchingConfig; // FCatchingConfig
    caught: boolean; // bool
    creadex: FCreadex; // FCreadex
    creature: enums.CreatureType; // CreatureType
    dust: number; // int
    expAccurate: number; // int
    expCreatureExisting: number; // int
    expCreatureNew: number; // int
    expSpin: number; // int
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot
    runAway: boolean; // bool
    streakDust: number; // int
    userCreature: FUserCreature; // FUserCreature

    public constructor(init?: Partial<FCatchCreatureResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.ballType, 'enums.ItemType');
        serializer.writeInt32(this.candies);
        serializer.writeDynamicObject(this.candyType, 'enums.CreatureType');
        serializer.writeFloat(this.catchChance);
        serializer.writeDynamicObject(this.catching, 'FCatchingConfig');
        serializer.writeBoolean(this.caught);
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeDynamicObject(this.creature, 'enums.CreatureType');
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.expAccurate);
        serializer.writeInt32(this.expCreatureExisting);
        serializer.writeInt32(this.expCreatureNew);
        serializer.writeInt32(this.expSpin);
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeBoolean(this.runAway);
        serializer.writeInt32(this.streakDust);
        serializer.writeDynamicObject(this.userCreature, 'FUserCreature');
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.ballType = deserializer.readDynamicObject();
        this.candies = deserializer.readInt32();
        this.candyType = deserializer.readDynamicObject();
        this.catchChance = deserializer.readFloat();
        this.catching = deserializer.readDynamicObject();
        this.caught = deserializer.readBoolean();
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readDynamicObject();
        this.dust = deserializer.readInt32();
        this.expAccurate = deserializer.readInt32();
        this.expCreatureExisting = deserializer.readInt32();
        this.expCreatureNew = deserializer.readInt32();
        this.expSpin = deserializer.readInt32();
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.runAway = deserializer.readBoolean();
        this.streakDust = deserializer.readInt32();
        this.userCreature = deserializer.readDynamicObject();
    }
}

export class FCatchingConfig {
    __type = 'FCatchingConfig';
    catchChances: Map<enums.ItemType, number>; // Map<enums.ItemType, float>
    chanceToAttack: number; // float
    chanceToJump: number; // float
    distance: number; // float
    endCamPosDistance: number; // float
    endCamPosHeight: number; // float
    flyTime: number; // float
    height: number; // float
    lookAtHeight: number; // float
    maxDistance: number; // float
    maxHeight: number; // float
    moveCheckCooldownSeconds: number; // float
    offsetDistance: number; // float
    offsetHeight: number; // float
    scale: number; // float
    scaleCollider: number; // float
    sightRadiusDecreaseTimeSeconds: number; // float
    sightRadiusMax: number; // float
    sightRadiusMin: number; // float
    startCamPosDistance: number; // float
    startCamPosHeight: number; // float

    public constructor(init?: Partial<FCatchingConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.catchChances, true, true, 'ItemType', 'float');
        serializer.writeFloat(this.chanceToAttack);
        serializer.writeFloat(this.chanceToJump);
        serializer.writeFloat(this.distance);
        serializer.writeFloat(this.endCamPosDistance);
        serializer.writeFloat(this.endCamPosHeight);
        serializer.writeFloat(this.flyTime);
        serializer.writeFloat(this.height);
        serializer.writeFloat(this.lookAtHeight);
        serializer.writeFloat(this.maxDistance);
        serializer.writeFloat(this.maxHeight);
        serializer.writeFloat(this.moveCheckCooldownSeconds);
        serializer.writeFloat(this.offsetDistance);
        serializer.writeFloat(this.offsetHeight);
        serializer.writeFloat(this.scale);
        serializer.writeFloat(this.scaleCollider);
        serializer.writeFloat(this.sightRadiusDecreaseTimeSeconds);
        serializer.writeFloat(this.sightRadiusMax);
        serializer.writeFloat(this.sightRadiusMin);
        serializer.writeFloat(this.startCamPosDistance);
        serializer.writeFloat(this.startCamPosHeight);
    }
    deserialize(deserializer: Deserializer) {
        this.catchChances = deserializer.readStaticMap('ItemType', 'float', true, true);
        this.chanceToAttack = deserializer.readFloat();
        this.chanceToJump = deserializer.readFloat();
        this.distance = deserializer.readFloat();
        this.endCamPosDistance = deserializer.readFloat();
        this.endCamPosHeight = deserializer.readFloat();
        this.flyTime = deserializer.readFloat();
        this.height = deserializer.readFloat();
        this.lookAtHeight = deserializer.readFloat();
        this.maxDistance = deserializer.readFloat();
        this.maxHeight = deserializer.readFloat();
        this.moveCheckCooldownSeconds = deserializer.readFloat();
        this.offsetDistance = deserializer.readFloat();
        this.offsetHeight = deserializer.readFloat();
        this.scale = deserializer.readFloat();
        this.scaleCollider = deserializer.readFloat();
        this.sightRadiusDecreaseTimeSeconds = deserializer.readFloat();
        this.sightRadiusMax = deserializer.readFloat();
        this.sightRadiusMin = deserializer.readFloat();
        this.startCamPosDistance = deserializer.readFloat();
        this.startCamPosHeight = deserializer.readFloat();
    }
}

export class FCatchingCreature {
    __type = 'FCatchingCreature';
    aggressive: boolean; // bool
    candyType: enums.CreatureType; // CreatureType
    catching: FCatchingConfig; // FCatchingConfig
    cp: number; // int
    element: enums.ElementType; // ElementType
    feedFoodType: enums.ItemType; // ItemType
    feedLeftTime: number; // int
    id: string; // string
    isCreatureStorageFull: boolean; // bool
    items: Map<enums.ItemType, number>; // Map<enums.ItemType, int>
    name: enums.CreatureType; // CreatureType
    quality: number; // float

    public constructor(init?: Partial<FCatchingCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.aggressive);
        serializer.writeByte(this.candyType);
        serializer.writeDynamicObject(this.catching, 'FCatchingConfig');
        serializer.writeInt32(this.cp);
        serializer.writeByte(this.element);
        serializer.writeDynamicObject(this.feedFoodType, 'enums.ItemType');
        serializer.writeInt32(this.feedLeftTime);
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.isCreatureStorageFull);
        serializer.writeStaticMap(this.items, true, true, 'ItemType', 'int');
        serializer.writeByte(this.name);
        serializer.writeFloat(this.quality);
    }
    deserialize(deserializer: Deserializer) {
        this.aggressive = deserializer.readBoolean();
        this.candyType = deserializer.readByte();
        this.catching = deserializer.readDynamicObject();
        this.cp = deserializer.readInt32();
        this.element = deserializer.readByte();
        this.feedFoodType = deserializer.readDynamicObject();
        this.feedLeftTime = deserializer.readInt32();
        this.id = deserializer.readUtf8String();
        this.isCreatureStorageFull = deserializer.readBoolean();
        this.items = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.name = deserializer.readByte();
        this.quality = deserializer.readFloat();
    }
}

export class FChest {
    __type = 'FChest';
    coords: GeoCoords; // GeoCoords
    id: string; // string

    public constructor(init?: Partial<FChest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.id = deserializer.readUtf8String();
    }
}

export class FChestUpdate {
    __type = 'FChestUpdate';
    chests: FChest[]; // FChest[]

    public constructor(init?: Partial<FChestUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.chests, true, 'FChest');
    }
    deserialize(deserializer: Deserializer) {
        this.chests = deserializer.readStaticList('FChest', true);
    }
}

export class FClientInfo {
    __type = 'FClientInfo';
    deviceModel: string; // string
    googleAdvertisingId: string; // string
    googleTrackingEnabled: boolean; // bool
    iOsAdvertisingIdentifier: string; // string
    iOsAdvertisingTrackingEnabled: boolean; // bool
    iOsVendorIdentifier: string; // string
    language: string; // string
    platform: string; // string
    platformVersion: string; // string
    revision: string; // string
    screenHeight: number; // int
    screenWidth: number; // int

    public constructor(init?: Partial<FClientInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.deviceModel);
        serializer.writeDynamicObject(this.googleAdvertisingId, 'string');
        serializer.writeBoolean(this.googleTrackingEnabled);
        serializer.writeDynamicObject(this.iOsAdvertisingIdentifier, 'string');
        serializer.writeBoolean(this.iOsAdvertisingTrackingEnabled);
        serializer.writeDynamicObject(this.iOsVendorIdentifier, 'string');
        serializer.writeUtf8String(this.language);
        serializer.writeUtf8String(this.platform);
        serializer.writeUtf8String(this.platformVersion);
        serializer.writeUtf8String(this.revision);
        serializer.writeInt32(this.screenHeight);
        serializer.writeInt32(this.screenWidth);
    }
    deserialize(deserializer: Deserializer) {
        this.deviceModel = deserializer.readUtf8String();
        this.googleAdvertisingId = deserializer.readDynamicObject();
        this.googleTrackingEnabled = deserializer.readBoolean();
        this.iOsAdvertisingIdentifier = deserializer.readDynamicObject();
        this.iOsAdvertisingTrackingEnabled = deserializer.readBoolean();
        this.iOsVendorIdentifier = deserializer.readDynamicObject();
        this.language = deserializer.readUtf8String();
        this.platform = deserializer.readUtf8String();
        this.platformVersion = deserializer.readUtf8String();
        this.revision = deserializer.readUtf8String();
        this.screenHeight = deserializer.readInt32();
        this.screenWidth = deserializer.readInt32();
    }
}

export class FClientLogRecord {
    __type = 'FClientLogRecord';
    clientTime: number; // float
    logName: string; // string
    message: string; // string

    public constructor(init?: Partial<FClientLogRecord>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeFloat(this.clientTime);
        serializer.writeUtf8String(this.logName);
        serializer.writeUtf8String(this.message);
    }
    deserialize(deserializer: Deserializer) {
        this.clientTime = deserializer.readFloat();
        this.logName = deserializer.readUtf8String();
        this.message = deserializer.readUtf8String();
    }
}

export class FClientRequest {
    __type = 'FClientRequest';
    coordsWithAccuracy: GeoCoordsWithAccuracy; // GeoCoordsWithAccuracy
    currentUtcOffsetSeconds: number; // int
    time: long; // long

    public constructor(init?: Partial<FClientRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coordsWithAccuracy, 'GeoCoordsWithAccuracy');
        serializer.writeInt32(this.currentUtcOffsetSeconds);
        serializer.writeInt64(this.time);
    }
    deserialize(deserializer: Deserializer) {
        this.coordsWithAccuracy = deserializer.readStaticObject('GeoCoordsWithAccuracy') as GeoCoordsWithAccuracy;
        this.currentUtcOffsetSeconds = deserializer.readInt32();
        this.time = deserializer.readInt64();
    }
}

export class FCollectorRatingRecord {
    __type = 'FCollectorRatingRecord';
    level: number; // int
    nickName: string; // string
    openCreaturesCount: number; // int
    place: number; // int
    score: number; // float
    topQualityCreaturesCount: number; // int
    topQualityPoweredupCreaturesCount: number; // int

    public constructor(init?: Partial<FCollectorRatingRecord>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickName);
        serializer.writeInt32(this.openCreaturesCount);
        serializer.writeInt32(this.place);
        serializer.writeFloat(this.score);
        serializer.writeInt32(this.topQualityCreaturesCount);
        serializer.writeInt32(this.topQualityPoweredupCreaturesCount);
    }
    deserialize(deserializer: Deserializer) {
        this.level = deserializer.readInt32();
        this.nickName = deserializer.readUtf8String();
        this.openCreaturesCount = deserializer.readInt32();
        this.place = deserializer.readInt32();
        this.score = deserializer.readFloat();
        this.topQualityCreaturesCount = deserializer.readInt32();
        this.topQualityPoweredupCreaturesCount = deserializer.readInt32();
    }
}

export class FCollectorRatingTop {
    __type = 'FCollectorRatingTop';
    topRecords: FCollectorRatingRecord[]; // FCollectorRatingRecord[]

    public constructor(init?: Partial<FCollectorRatingTop>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.topRecords, true, 'FCollectorRatingRecord');
    }
    deserialize(deserializer: Deserializer) {
        this.topRecords = deserializer.readStaticList('FCollectorRatingRecord', true);
    }
}

export class FConfig {
    __type = 'FConfig';
    actionInfoShowDuration: number; // float
    activeTimeAllowedInBackgroundDuration: number; // float
    aggressiveChanceToAttack: number; // float
    aggressiveChanceToJump: number; // float
    aggressiveChancesCooldownTime: number; // float
    altarAvailableFromLevel: number; // int
    angularDrag: number; // float
    arenaLayerLevels: number[]; // int[]
    arenaLevelsThreshold: number[]; // int[]
    artifactSellPrice: Map<enums.ArtifactName, number>; // Map<enums.ArtifactName, int>
    avatarMoveExtrapolationMaxRunawayDistance: number; // float
    avatarMoveMaxDistanceRun: number; // int
    avatarMoveMaxMoveDuration: number; // float
    avatarMoveReturnToRealPositionDuration: number; // float
    avatarMoveReturnToRealPositionTimeout: number; // float
    avatarMoveRunSpeed: number; // int
    ballCurve: number; // float
    bottomSwipeScreenPart: number; // float
    buildingsVisionRadius: number; // int
    cameraFieldOfView: number; // float
    catchPopup: Map<number, string>; // Map<float, string>
    clientTexts: Map<string, string>; // Map<string, string>
    collectorRatingButtonVisibleToAll: boolean; // bool
    congratulationLayerLevels: number[]; // int[]
    creaturesDelayVisibility: number; // int
    dailyQuestAvailableFromLevel: number; // int
    defenderBaseAttackBeforeChargedMax: number; // int
    defenderBaseAttackBeforeChargedMin: number; // int
    delayForCheckMaxSpeedToPlay: number; // float
    delayToDisableGameBecauseOfLowGPSAccuracy: number; // float
    desiredGpsAccuracy: number; // float
    distanceToLoadTiles: number; // float
    distanceToUnloadTiles: number; // float
    emulatorCheckEnabled: boolean; // bool
    encounterDelayBeforeExtraEncounter: number; // int
    encounterNeededActiveUserTime: number[]; // int[]
    fogEndDistance: number; // float
    fogStartDistance: number; // float
    goOrbitDistance: number; // float
    goOrbitDistanceMax: number; // float
    goOrbitDistanceMin: number; // float
    goOrbitHeightMaxLimit: number; // float
    goOrbitHeightMinLimit: number; // float
    goOrbitOffsetMax: number; // float
    goOrbitOffsetMin: number; // float
    highSpeedDurationRequiredForWarning: number; // float
    mapServer: string; // string
    mapVersion: number; // int
    maxAngularVelocity: number; // int
    maxClientPauseDuration: number; // float
    maxSpeedForUse: number; // float
    maxSpeedToPlay: number; // int
    mentorChooseEnabled: boolean; // bool
    mentorshipEnabled: boolean; // bool
    monsterLevelPerUserLevel: number; // float
    monsterMaxLevel: number; // int
    newsCheckIntervalSeconds: number; // float
    notEmulatorModelHashes: Set<Buffer>; // Set<Buffer>
    oppositeDodgeTimeoutSeconds: number; // float
    personalizationPriceMap: Map<enums.PersonalizedStop, number>; // Map<enums.PersonalizedStop, int>
    potionConfig: PotionConfig; // PotionConfig
    radarVisionRadius: number; // double
    recipes: Map<enums.RecipeType, object[]>; // Map<enums.RecipeType, object[]>
    requestRetryDelay: number; // float
    screenDifferentSwipeDivision: number; // float
    spinGain: number; // float
    stopLootStreakDuration: number; // float
    stopUsageHintTillLevel: number; // int
    superVisionEffectInterval: number; // float
    superVisionRadius: number; // int
    throwSensitivity: number; // float
    timeLimitPerDefender: number; // float
    topSwipeScreenPart: number; // float
    updateRequestCooldownSeconds: number; // int
    updateRequestIgnoreWorseAccuracyCooldownSeconds: number; // int
    updateRequestMinimalDistance: number; // int
    updateRequestPeriodSeconds: number; // int
    weeklyQuestAvailableFromLevel: number; // int
    wizardAvailableFromLevel: number; // int
    worldScreenBuffDisplayMaxDurationTimeSeconds: number; // float
    xVelocityFactor: number; // float
    xVelocityFactorSpin: number; // float
    yVelocityFactor: number; // float

    public constructor(init?: Partial<FConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeFloat(this.actionInfoShowDuration);
        serializer.writeFloat(this.activeTimeAllowedInBackgroundDuration);
        serializer.writeFloat(this.aggressiveChanceToAttack);
        serializer.writeFloat(this.aggressiveChanceToJump);
        serializer.writeFloat(this.aggressiveChancesCooldownTime);
        serializer.writeInt32(this.altarAvailableFromLevel);
        serializer.writeFloat(this.angularDrag);
        serializer.writeStaticArray(this.arenaLayerLevels, true, 'int');
        serializer.writeStaticArray(this.arenaLevelsThreshold, true, 'int');
        serializer.writeStaticMap(this.artifactSellPrice, true, true, 'ArtifactName', 'int');
        serializer.writeFloat(this.avatarMoveExtrapolationMaxRunawayDistance);
        serializer.writeInt32(this.avatarMoveMaxDistanceRun);
        serializer.writeFloat(this.avatarMoveMaxMoveDuration);
        serializer.writeFloat(this.avatarMoveReturnToRealPositionDuration);
        serializer.writeFloat(this.avatarMoveReturnToRealPositionTimeout);
        serializer.writeInt32(this.avatarMoveRunSpeed);
        serializer.writeFloat(this.ballCurve);
        serializer.writeFloat(this.bottomSwipeScreenPart);
        serializer.writeInt32(this.buildingsVisionRadius);
        serializer.writeFloat(this.cameraFieldOfView);
        serializer.writeStaticMap(this.catchPopup, true, true, 'float', 'string');
        serializer.writeStaticMap(this.clientTexts, true, true, 'string', 'string');
        serializer.writeBoolean(this.collectorRatingButtonVisibleToAll);
        serializer.writeStaticArray(this.congratulationLayerLevels, true, 'int');
        serializer.writeInt32(this.creaturesDelayVisibility);
        serializer.writeInt32(this.dailyQuestAvailableFromLevel);
        serializer.writeInt32(this.defenderBaseAttackBeforeChargedMax);
        serializer.writeInt32(this.defenderBaseAttackBeforeChargedMin);
        serializer.writeFloat(this.delayForCheckMaxSpeedToPlay);
        serializer.writeFloat(this.delayToDisableGameBecauseOfLowGPSAccuracy);
        serializer.writeFloat(this.desiredGpsAccuracy);
        serializer.writeFloat(this.distanceToLoadTiles);
        serializer.writeFloat(this.distanceToUnloadTiles);
        serializer.writeBoolean(this.emulatorCheckEnabled);
        serializer.writeInt32(this.encounterDelayBeforeExtraEncounter);
        serializer.writeStaticArray(this.encounterNeededActiveUserTime, true, 'int');
        serializer.writeFloat(this.fogEndDistance);
        serializer.writeFloat(this.fogStartDistance);
        serializer.writeFloat(this.goOrbitDistance);
        serializer.writeFloat(this.goOrbitDistanceMax);
        serializer.writeFloat(this.goOrbitDistanceMin);
        serializer.writeFloat(this.goOrbitHeightMaxLimit);
        serializer.writeFloat(this.goOrbitHeightMinLimit);
        serializer.writeFloat(this.goOrbitOffsetMax);
        serializer.writeFloat(this.goOrbitOffsetMin);
        serializer.writeFloat(this.highSpeedDurationRequiredForWarning);
        serializer.writeUtf8String(this.mapServer);
        serializer.writeInt32(this.mapVersion);
        serializer.writeInt32(this.maxAngularVelocity);
        serializer.writeFloat(this.maxClientPauseDuration);
        serializer.writeFloat(this.maxSpeedForUse);
        serializer.writeInt32(this.maxSpeedToPlay);
        serializer.writeBoolean(this.mentorChooseEnabled);
        serializer.writeBoolean(this.mentorshipEnabled);
        serializer.writeFloat(this.monsterLevelPerUserLevel);
        serializer.writeInt32(this.monsterMaxLevel);
        serializer.writeFloat(this.newsCheckIntervalSeconds);
        serializer.writeStaticHashSet(this.notEmulatorModelHashes, true, 'Buffer');
        serializer.writeFloat(this.oppositeDodgeTimeoutSeconds);
        serializer.writeStaticMap(this.personalizationPriceMap, true, true, 'PersonalizedStop', 'int');
        serializer.writeStaticObject(this.potionConfig, 'PotionConfig');
        serializer.writeDouble(this.radarVisionRadius);
        serializer.writeStaticMap(this.recipes, true, true, 'RecipeType', 'List<>');
        serializer.writeFloat(this.requestRetryDelay);
        serializer.writeFloat(this.screenDifferentSwipeDivision);
        serializer.writeFloat(this.spinGain);
        serializer.writeFloat(this.stopLootStreakDuration);
        serializer.writeInt32(this.stopUsageHintTillLevel);
        serializer.writeFloat(this.superVisionEffectInterval);
        serializer.writeInt32(this.superVisionRadius);
        serializer.writeFloat(this.throwSensitivity);
        serializer.writeFloat(this.timeLimitPerDefender);
        serializer.writeFloat(this.topSwipeScreenPart);
        serializer.writeInt32(this.updateRequestCooldownSeconds);
        serializer.writeInt32(this.updateRequestIgnoreWorseAccuracyCooldownSeconds);
        serializer.writeInt32(this.updateRequestMinimalDistance);
        serializer.writeInt32(this.updateRequestPeriodSeconds);
        serializer.writeInt32(this.weeklyQuestAvailableFromLevel);
        serializer.writeInt32(this.wizardAvailableFromLevel);
        serializer.writeFloat(this.worldScreenBuffDisplayMaxDurationTimeSeconds);
        serializer.writeFloat(this.xVelocityFactor);
        serializer.writeFloat(this.xVelocityFactorSpin);
        serializer.writeFloat(this.yVelocityFactor);
    }
    deserialize(deserializer: Deserializer) {
        this.actionInfoShowDuration = deserializer.readFloat();
        this.activeTimeAllowedInBackgroundDuration = deserializer.readFloat();
        this.aggressiveChanceToAttack = deserializer.readFloat();
        this.aggressiveChanceToJump = deserializer.readFloat();
        this.aggressiveChancesCooldownTime = deserializer.readFloat();
        this.altarAvailableFromLevel = deserializer.readInt32();
        this.angularDrag = deserializer.readFloat();
        this.arenaLayerLevels = deserializer.readStaticArray('int', true);
        this.arenaLevelsThreshold = deserializer.readStaticArray('int', true);
        this.artifactSellPrice = deserializer.readStaticMap('ArtifactName', 'int', true, true);
        this.avatarMoveExtrapolationMaxRunawayDistance = deserializer.readFloat();
        this.avatarMoveMaxDistanceRun = deserializer.readInt32();
        this.avatarMoveMaxMoveDuration = deserializer.readFloat();
        this.avatarMoveReturnToRealPositionDuration = deserializer.readFloat();
        this.avatarMoveReturnToRealPositionTimeout = deserializer.readFloat();
        this.avatarMoveRunSpeed = deserializer.readInt32();
        this.ballCurve = deserializer.readFloat();
        this.bottomSwipeScreenPart = deserializer.readFloat();
        this.buildingsVisionRadius = deserializer.readInt32();
        this.cameraFieldOfView = deserializer.readFloat();
        this.catchPopup = deserializer.readStaticMap('float', 'string', true, true);
        this.clientTexts = deserializer.readStaticMap('string', 'string', true, true);
        this.collectorRatingButtonVisibleToAll = deserializer.readBoolean();
        this.congratulationLayerLevels = deserializer.readStaticArray('int', true);
        this.creaturesDelayVisibility = deserializer.readInt32();
        this.dailyQuestAvailableFromLevel = deserializer.readInt32();
        this.defenderBaseAttackBeforeChargedMax = deserializer.readInt32();
        this.defenderBaseAttackBeforeChargedMin = deserializer.readInt32();
        this.delayForCheckMaxSpeedToPlay = deserializer.readFloat();
        this.delayToDisableGameBecauseOfLowGPSAccuracy = deserializer.readFloat();
        this.desiredGpsAccuracy = deserializer.readFloat();
        this.distanceToLoadTiles = deserializer.readFloat();
        this.distanceToUnloadTiles = deserializer.readFloat();
        this.emulatorCheckEnabled = deserializer.readBoolean();
        this.encounterDelayBeforeExtraEncounter = deserializer.readInt32();
        this.encounterNeededActiveUserTime = deserializer.readStaticArray('int', true);
        this.fogEndDistance = deserializer.readFloat();
        this.fogStartDistance = deserializer.readFloat();
        this.goOrbitDistance = deserializer.readFloat();
        this.goOrbitDistanceMax = deserializer.readFloat();
        this.goOrbitDistanceMin = deserializer.readFloat();
        this.goOrbitHeightMaxLimit = deserializer.readFloat();
        this.goOrbitHeightMinLimit = deserializer.readFloat();
        this.goOrbitOffsetMax = deserializer.readFloat();
        this.goOrbitOffsetMin = deserializer.readFloat();
        this.highSpeedDurationRequiredForWarning = deserializer.readFloat();
        this.mapServer = deserializer.readUtf8String();
        this.mapVersion = deserializer.readInt32();
        this.maxAngularVelocity = deserializer.readInt32();
        this.maxClientPauseDuration = deserializer.readFloat();
        this.maxSpeedForUse = deserializer.readFloat();
        this.maxSpeedToPlay = deserializer.readInt32();
        this.mentorChooseEnabled = deserializer.readBoolean();
        this.mentorshipEnabled = deserializer.readBoolean();
        this.monsterLevelPerUserLevel = deserializer.readFloat();
        this.monsterMaxLevel = deserializer.readInt32();
        this.newsCheckIntervalSeconds = deserializer.readFloat();
        this.notEmulatorModelHashes = deserializer.readStaticHashSet('Buffer', true);
        this.oppositeDodgeTimeoutSeconds = deserializer.readFloat();
        this.personalizationPriceMap = deserializer.readStaticMap('PersonalizedStop', 'int', true, true);
        this.potionConfig = deserializer.readStaticObject('PotionConfig') as PotionConfig;
        this.radarVisionRadius = deserializer.readDouble();
        this.recipes = deserializer.readStaticMap('RecipeType', 'List<>', true, true);
        this.requestRetryDelay = deserializer.readFloat();
        this.screenDifferentSwipeDivision = deserializer.readFloat();
        this.spinGain = deserializer.readFloat();
        this.stopLootStreakDuration = deserializer.readFloat();
        this.stopUsageHintTillLevel = deserializer.readInt32();
        this.superVisionEffectInterval = deserializer.readFloat();
        this.superVisionRadius = deserializer.readInt32();
        this.throwSensitivity = deserializer.readFloat();
        this.timeLimitPerDefender = deserializer.readFloat();
        this.topSwipeScreenPart = deserializer.readFloat();
        this.updateRequestCooldownSeconds = deserializer.readInt32();
        this.updateRequestIgnoreWorseAccuracyCooldownSeconds = deserializer.readInt32();
        this.updateRequestMinimalDistance = deserializer.readInt32();
        this.updateRequestPeriodSeconds = deserializer.readInt32();
        this.weeklyQuestAvailableFromLevel = deserializer.readInt32();
        this.wizardAvailableFromLevel = deserializer.readInt32();
        this.worldScreenBuffDisplayMaxDurationTimeSeconds = deserializer.readFloat();
        this.xVelocityFactor = deserializer.readFloat();
        this.xVelocityFactorSpin = deserializer.readFloat();
        this.yVelocityFactor = deserializer.readFloat();
    }
}

export class FCreadex {
    __type = 'FCreadex';
    entries: FCreadexEntry[]; // FCreadexEntry[]

    public constructor(init?: Partial<FCreadex>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.entries, true, 'FCreadexEntry');
    }
    deserialize(deserializer: Deserializer) {
        this.entries = deserializer.readStaticList('FCreadexEntry', true);
    }
}

export class FCreadexChain {
    __type = 'FCreadexChain';
    caught: boolean; // bool
    creature: enums.CreatureType; // CreatureType
    seen: boolean; // bool

    public constructor(init?: Partial<FCreadexChain>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.caught);
        serializer.writeByte(this.creature);
        serializer.writeBoolean(this.seen);
    }
    deserialize(deserializer: Deserializer) {
        this.caught = deserializer.readBoolean();
        this.creature = deserializer.readByte();
        this.seen = deserializer.readBoolean();
    }
}

export class FCreadexEntry {
    __type = 'FCreadexEntry';
    caughtQuantity: number; // int
    chain: FCreadexChain[]; // FCreadexChain[]
    element: enums.ElementType; // ElementType
    name: enums.CreatureType; // CreatureType
    seen: boolean; // bool
    tier: number; // int

    public constructor(init?: Partial<FCreadexEntry>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.caughtQuantity);
        serializer.writeDynamicList(this.chain, true, 'FCreadexChain');
        serializer.writeByte(this.element);
        serializer.writeByte(this.name);
        serializer.writeBoolean(this.seen);
        serializer.writeInt32(this.tier);
    }
    deserialize(deserializer: Deserializer) {
        this.caughtQuantity = deserializer.readInt32();
        this.chain = deserializer.readDynamicList('FCreadexChain', true);
        this.element = deserializer.readByte();
        this.name = deserializer.readByte();
        this.seen = deserializer.readBoolean();
        this.tier = deserializer.readInt32();
    }
}

export class FCreatureRequest {
    __type = 'FCreatureRequest';
    id: string; // string
    veryFirst: boolean; // bool

    public constructor(init?: Partial<FCreatureRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.veryFirst);
    }
    deserialize(deserializer: Deserializer) {
        this.id = deserializer.readUtf8String();
        this.veryFirst = deserializer.readBoolean();
    }
}

export class FCreatureUpdate {
    __type = 'FCreatureUpdate';
    inRadar: FWildCreature[]; // FWildCreature[]
    wilds: FWildCreature[]; // FWildCreature[]

    public constructor(init?: Partial<FCreatureUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.inRadar, true, 'FWildCreature');
        serializer.writeStaticList(this.wilds, true, 'FWildCreature');
    }
    deserialize(deserializer: Deserializer) {
        this.inRadar = deserializer.readStaticList('FWildCreature', true);
        this.wilds = deserializer.readStaticList('FWildCreature', true);
    }
}

export class FDailyQuest {
    __type = 'FDailyQuest';
    count: number; // int
    elementType: enums.ElementType; // ElementType
    id: string; // string
    nextDailyQuestIn: number; // int
    pitstopPath: IdAndCoords[]; // IdAndCoords[]
    progress: number; // int
    type: enums.QuestType; // QuestType

    public constructor(init?: Partial<FDailyQuest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.count);
        serializer.writeDynamicObject(this.elementType, 'enums.ElementType');
        serializer.writeDynamicObject(this.id, 'string');
        serializer.writeInt32(this.nextDailyQuestIn);
        serializer.writeDynamicList(this.pitstopPath, true, 'IdAndCoords');
        serializer.writeInt32(this.progress);
        serializer.writeDynamicObject(this.type, 'enums.QuestType');
    }
    deserialize(deserializer: Deserializer) {
        this.count = deserializer.readInt32();
        this.elementType = deserializer.readDynamicObject();
        this.id = deserializer.readDynamicObject();
        this.nextDailyQuestIn = deserializer.readInt32();
        this.pitstopPath = deserializer.readDynamicList('IdAndCoords', true);
        this.progress = deserializer.readInt32();
        this.type = deserializer.readDynamicObject();
    }
}

export class FDefenderDetails {
    __type = 'FDefenderDetails';
    allianceType: enums.AllianceType; // AllianceType
    creatureAlias: string; // string
    creatureCp: number; // int
    creatureName: enums.CreatureType; // CreatureType
    elementType: enums.ElementType; // ElementType
    ownerLevel: number; // int
    ownerName: string; // string
    userAppearance: number; // int

    public constructor(init?: Partial<FDefenderDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.allianceType);
        serializer.writeDynamicObject(this.creatureAlias, 'string');
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureName);
        serializer.writeByte(this.elementType);
        serializer.writeInt32(this.ownerLevel);
        serializer.writeUtf8String(this.ownerName);
        serializer.writeInt32(this.userAppearance);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readByte();
        this.creatureAlias = deserializer.readDynamicObject();
        this.creatureCp = deserializer.readInt32();
        this.creatureName = deserializer.readByte();
        this.elementType = deserializer.readByte();
        this.ownerLevel = deserializer.readInt32();
        this.ownerName = deserializer.readUtf8String();
        this.userAppearance = deserializer.readInt32();
    }
}

export class FDungeonUpdate {
    __type = 'FDungeonUpdate';
    coords: GeoCoords; // GeoCoords
    rotation: number; // float
    size: number; // int
    type: enums.DungeonShapeType; // DungeonShapeType

    public constructor(init?: Partial<FDungeonUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeFloat(this.rotation);
        serializer.writeInt32(this.size);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.rotation = deserializer.readFloat();
        this.size = deserializer.readInt32();
        this.type = deserializer.readByte();
    }
}

export class FEgg {
    __type = 'FEgg';
    eggType: enums.ItemType; // ItemType
    id: string; // string
    incubatorId: string; // string
    incubatorType: enums.ItemType; // ItemType
    isEggForRoost: boolean; // bool
    isHatching: boolean; // bool
    passedDistance: number; // float
    totalDistance: number; // float
    totalIncubationTime: long; // long

    public constructor(init?: Partial<FEgg>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.eggType);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.incubatorId, 'string');
        serializer.writeDynamicObject(this.incubatorType, 'enums.ItemType');
        serializer.writeBoolean(this.isEggForRoost);
        serializer.writeBoolean(this.isHatching);
        serializer.writeFloat(this.passedDistance);
        serializer.writeFloat(this.totalDistance);
        serializer.writeInt64(this.totalIncubationTime);
    }
    deserialize(deserializer: Deserializer) {
        this.eggType = deserializer.readByte();
        this.id = deserializer.readUtf8String();
        this.incubatorId = deserializer.readDynamicObject();
        this.incubatorType = deserializer.readDynamicObject();
        this.isEggForRoost = deserializer.readBoolean();
        this.isHatching = deserializer.readBoolean();
        this.passedDistance = deserializer.readFloat();
        this.totalDistance = deserializer.readFloat();
        this.totalIncubationTime = deserializer.readInt64();
    }
}

export class FEncounterBattleResult {
    __type = 'FEncounterBattleResult';
    loot: FLoot; // FLoot
    resultScreenDelay: number; // float
    victory: boolean; // bool

    public constructor(init?: Partial<FEncounterBattleResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer: Deserializer) {
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.resultScreenDelay = deserializer.readFloat();
        this.victory = deserializer.readBoolean();
    }
}

export class FEncounterDetails {
    __type = 'FEncounterDetails';
    coords: GeoCoords; // GeoCoords
    creatureCp: number; // int
    creatureElementType: enums.ElementType; // ElementType
    creatureName: enums.CreatureType; // CreatureType
    extraEncounter: boolean; // bool
    id: string; // string
    level: number; // int

    public constructor(init?: Partial<FEncounterDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureElementType);
        serializer.writeByte(this.creatureName);
        serializer.writeBoolean(this.extraEncounter);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.level);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.creatureCp = deserializer.readInt32();
        this.creatureElementType = deserializer.readByte();
        this.creatureName = deserializer.readByte();
        this.extraEncounter = deserializer.readBoolean();
        this.id = deserializer.readUtf8String();
        this.level = deserializer.readInt32();
    }
}

export class FEncounterUpdate {
    __type = 'FEncounterUpdate';
    attacker: FFightCreature; // FFightCreature
    defender: FFightCreature; // FFightCreature

    public constructor(init?: Partial<FEncounterUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.attacker, 'FFightCreature');
        serializer.writeStaticObject(this.defender, 'FFightCreature');
    }
    deserialize(deserializer: Deserializer) {
        this.attacker = deserializer.readStaticObject('FFightCreature') as FFightCreature;
        this.defender = deserializer.readStaticObject('FFightCreature') as FFightCreature;
    }
}

export class FFeedMonsterResult {
    __type = 'FFeedMonsterResult';
    feedLiveTime: long; // long

    public constructor(init?: Partial<FFeedMonsterResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt64(this.feedLiveTime);
    }
    deserialize(deserializer: Deserializer) {
        this.feedLiveTime = deserializer.readInt64();
    }
}

export class FFightCreature {
    __type = 'FFightCreature';
    alias: string; // string
    attacker: boolean; // bool
    baseCp: number; // int
    chargedSkill: string; // string
    chargedSkillAim: boolean; // bool
    chargedSkillAngle: number; // int
    chargedSkillDps: number; // float
    chargedSkillQuality: enums.SkillQuality; // SkillQuality
    chargedSkillSpeed: number; // float
    chargedSkillTtl: number; // float
    cp: number; // int
    decreasedDmgTo: enums.ElementType; // ElementType
    distance: number; // float
    dodgeAngle: number; // float
    dodgeDamageRatio: number; // float
    dodgeMoveTime: number; // float
    energySegments: number; // int
    height: number; // float
    holdTimeForChargedSkill: number; // float
    hp: number; // float
    id: string; // string
    incomingEnergyOnAttack: number; // float
    increasedDmgTo: enums.ElementType; // ElementType
    mainSkill: string; // string
    mainSkillAim: boolean; // bool
    mainSkillAngle: number; // int
    mainSkillDps: number; // float
    mainSkillQuality: enums.SkillQuality; // SkillQuality
    mainSkillSpeed: number; // float
    mainSkillTtl: number; // float
    maxEnergy: number; // float
    name: enums.CreatureType; // CreatureType
    rightElementAttackCoef: number; // float
    scale: number; // float
    specAttackCoef: number; // float
    startCamPosDistance: number; // float
    startCamPosHeight: number; // float
    totalHp: number; // float
    type: enums.ElementType; // ElementType
    wrongElementAttackCoef: number; // float

    public constructor(init?: Partial<FFightCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alias, 'string');
        serializer.writeBoolean(this.attacker);
        serializer.writeInt32(this.baseCp);
        serializer.writeUtf8String(this.chargedSkill);
        serializer.writeBoolean(this.chargedSkillAim);
        serializer.writeInt32(this.chargedSkillAngle);
        serializer.writeFloat(this.chargedSkillDps);
        serializer.writeByte(this.chargedSkillQuality);
        serializer.writeFloat(this.chargedSkillSpeed);
        serializer.writeFloat(this.chargedSkillTtl);
        serializer.writeInt32(this.cp);
        serializer.writeByte(this.decreasedDmgTo);
        serializer.writeFloat(this.distance);
        serializer.writeFloat(this.dodgeAngle);
        serializer.writeFloat(this.dodgeDamageRatio);
        serializer.writeFloat(this.dodgeMoveTime);
        serializer.writeInt32(this.energySegments);
        serializer.writeFloat(this.height);
        serializer.writeFloat(this.holdTimeForChargedSkill);
        serializer.writeFloat(this.hp);
        serializer.writeUtf8String(this.id);
        serializer.writeFloat(this.incomingEnergyOnAttack);
        serializer.writeByte(this.increasedDmgTo);
        serializer.writeUtf8String(this.mainSkill);
        serializer.writeBoolean(this.mainSkillAim);
        serializer.writeInt32(this.mainSkillAngle);
        serializer.writeFloat(this.mainSkillDps);
        serializer.writeByte(this.mainSkillQuality);
        serializer.writeFloat(this.mainSkillSpeed);
        serializer.writeFloat(this.mainSkillTtl);
        serializer.writeFloat(this.maxEnergy);
        serializer.writeByte(this.name);
        serializer.writeFloat(this.rightElementAttackCoef);
        serializer.writeFloat(this.scale);
        serializer.writeFloat(this.specAttackCoef);
        serializer.writeFloat(this.startCamPosDistance);
        serializer.writeFloat(this.startCamPosHeight);
        serializer.writeFloat(this.totalHp);
        serializer.writeByte(this.type);
        serializer.writeFloat(this.wrongElementAttackCoef);
    }
    deserialize(deserializer: Deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.attacker = deserializer.readBoolean();
        this.baseCp = deserializer.readInt32();
        this.chargedSkill = deserializer.readUtf8String();
        this.chargedSkillAim = deserializer.readBoolean();
        this.chargedSkillAngle = deserializer.readInt32();
        this.chargedSkillDps = deserializer.readFloat();
        this.chargedSkillQuality = deserializer.readByte();
        this.chargedSkillSpeed = deserializer.readFloat();
        this.chargedSkillTtl = deserializer.readFloat();
        this.cp = deserializer.readInt32();
        this.decreasedDmgTo = deserializer.readByte();
        this.distance = deserializer.readFloat();
        this.dodgeAngle = deserializer.readFloat();
        this.dodgeDamageRatio = deserializer.readFloat();
        this.dodgeMoveTime = deserializer.readFloat();
        this.energySegments = deserializer.readInt32();
        this.height = deserializer.readFloat();
        this.holdTimeForChargedSkill = deserializer.readFloat();
        this.hp = deserializer.readFloat();
        this.id = deserializer.readUtf8String();
        this.incomingEnergyOnAttack = deserializer.readFloat();
        this.increasedDmgTo = deserializer.readByte();
        this.mainSkill = deserializer.readUtf8String();
        this.mainSkillAim = deserializer.readBoolean();
        this.mainSkillAngle = deserializer.readInt32();
        this.mainSkillDps = deserializer.readFloat();
        this.mainSkillQuality = deserializer.readByte();
        this.mainSkillSpeed = deserializer.readFloat();
        this.mainSkillTtl = deserializer.readFloat();
        this.maxEnergy = deserializer.readFloat();
        this.name = deserializer.readByte();
        this.rightElementAttackCoef = deserializer.readFloat();
        this.scale = deserializer.readFloat();
        this.specAttackCoef = deserializer.readFloat();
        this.startCamPosDistance = deserializer.readFloat();
        this.startCamPosHeight = deserializer.readFloat();
        this.totalHp = deserializer.readFloat();
        this.type = deserializer.readByte();
        this.wrongElementAttackCoef = deserializer.readFloat();
    }
}

export class FFightItem {
    __type = 'FFightItem';
    attackerDamageReceived: number; // float
    attackerId: string; // string
    defenderDamageReceived: number; // float
    defenderId: string; // string

    public constructor(init?: Partial<FFightItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeFloat(this.attackerDamageReceived);
        serializer.writeUtf8String(this.attackerId);
        serializer.writeFloat(this.defenderDamageReceived);
        serializer.writeUtf8String(this.defenderId);
    }
    deserialize(deserializer: Deserializer) {
        this.attackerDamageReceived = deserializer.readFloat();
        this.attackerId = deserializer.readUtf8String();
        this.defenderDamageReceived = deserializer.readFloat();
        this.defenderId = deserializer.readUtf8String();
    }
}

export class FFightRequest {
    __type = 'FFightRequest';
    battleId: string; // string
    chargedAttacksByAi: number; // int
    dodges: number; // int
    items: FFightItem[]; // FFightItem[]
    leaveBattle: boolean; // bool
    successfulDodges: number; // int
    timeout: boolean; // bool

    public constructor(init?: Partial<FFightRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.battleId, 'string');
        serializer.writeInt32(this.chargedAttacksByAi);
        serializer.writeInt32(this.dodges);
        serializer.writeStaticList(this.items, true, 'FFightItem');
        serializer.writeBoolean(this.leaveBattle);
        serializer.writeInt32(this.successfulDodges);
        serializer.writeBoolean(this.timeout);
    }
    deserialize(deserializer: Deserializer) {
        this.battleId = deserializer.readDynamicObject();
        this.chargedAttacksByAi = deserializer.readInt32();
        this.dodges = deserializer.readInt32();
        this.items = deserializer.readStaticList('FFightItem', true);
        this.leaveBattle = deserializer.readBoolean();
        this.successfulDodges = deserializer.readInt32();
        this.timeout = deserializer.readBoolean();
    }
}

export class FFightUpdate {
    __type = 'FFightUpdate';
    attackers: FFightCreature[]; // FFightCreature[]
    autoChangeAttackerHpPercent: number; // float
    battleId: string; // string
    defenderNickname: string; // string
    defenders: FFightCreature[]; // FFightCreature[]
    dodgeChance: number; // float

    public constructor(init?: Partial<FFightUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.attackers, true, 'FFightCreature');
        serializer.writeFloat(this.autoChangeAttackerHpPercent);
        serializer.writeUtf8String(this.battleId);
        serializer.writeDynamicObject(this.defenderNickname, 'string');
        serializer.writeStaticList(this.defenders, true, 'FFightCreature');
        serializer.writeFloat(this.dodgeChance);
    }
    deserialize(deserializer: Deserializer) {
        this.attackers = deserializer.readStaticList('FFightCreature', true);
        this.autoChangeAttackerHpPercent = deserializer.readFloat();
        this.battleId = deserializer.readUtf8String();
        this.defenderNickname = deserializer.readDynamicObject();
        this.defenders = deserializer.readStaticList('FFightCreature', true);
        this.dodgeChance = deserializer.readFloat();
    }
}

export class FHatchedEggs {
    __type = 'FHatchedEggs';
    egg: FEgg; // FEgg
    incubatorId: string; // string
    loot: FLoot; // FLoot

    public constructor(init?: Partial<FHatchedEggs>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.egg, 'FEgg');
        serializer.writeUtf8String(this.incubatorId);
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer: Deserializer) {
        this.egg = deserializer.readStaticObject('FEgg') as FEgg;
        this.incubatorId = deserializer.readUtf8String();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FHatchingResult {
    __type = 'FHatchingResult';
    avaUpdate: FAvaUpdate; // FAvaUpdate
    creadex: FCreadex; // FCreadex
    creature: FUserCreature; // FUserCreature
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot

    public constructor(init?: Partial<FHatchingResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeStaticObject(this.creature, 'FUserCreature');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticObject('FUserCreature') as FUserCreature;
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FInAppEventUpdate {
    __type = 'FInAppEventUpdate';
    events: InAppEventInfo[]; // InAppEventInfo[]

    public constructor(init?: Partial<FInAppEventUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.events, true, 'InAppEventInfo');
    }
    deserialize(deserializer: Deserializer) {
        this.events = deserializer.readStaticList('InAppEventInfo', true);
    }
}

export class FIncubator {
    __type = 'FIncubator';
    eggId: string; // string
    incubatorId: string; // string
    itemType: enums.ItemType; // ItemType
    roostBuildingId: string; // string
    slotIndex: number; // int
    usagesLeft: number; // int

    public constructor(init?: Partial<FIncubator>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.eggId, 'string');
        serializer.writeUtf8String(this.incubatorId);
        serializer.writeDynamicObject(this.itemType, 'enums.ItemType');
        serializer.writeDynamicObject(this.roostBuildingId, 'string');
        serializer.writeInt32(this.slotIndex);
        serializer.writeInt32(this.usagesLeft);
    }
    deserialize(deserializer: Deserializer) {
        this.eggId = deserializer.readDynamicObject();
        this.incubatorId = deserializer.readUtf8String();
        this.itemType = deserializer.readDynamicObject();
        this.roostBuildingId = deserializer.readDynamicObject();
        this.slotIndex = deserializer.readInt32();
        this.usagesLeft = deserializer.readInt32();
    }
}

export class FIngameNotifications {
    __type = 'FIngameNotifications';
    notifications: FNotification[]; // FNotification[]

    public constructor(init?: Partial<FIngameNotifications>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.notifications, true, 'FNotification');
    }
    deserialize(deserializer: Deserializer) {
        this.notifications = deserializer.readStaticList('FNotification', true);
    }
}

export class FItemCreatureGroup {
    __type = 'FItemCreatureGroup';
    active: boolean; // bool
    creature: enums.CreatureType; // CreatureType
    items: Map<enums.ItemType, number>; // Map<enums.ItemType, int>
    price: number; // int

    public constructor(init?: Partial<FItemCreatureGroup>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.active);
        serializer.writeDynamicObject(this.creature, 'enums.CreatureType');
        serializer.writeStaticMap(this.items, true, true, 'ItemType', 'int');
        serializer.writeInt32(this.price);
    }
    deserialize(deserializer: Deserializer) {
        this.active = deserializer.readBoolean();
        this.creature = deserializer.readDynamicObject();
        this.items = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.price = deserializer.readInt32();
    }
}

export class FJournalRecord {
    __type = 'FJournalRecord';
    date: long; // long
    details: Map<string, string>; // Map<string, string>
    type: enums.EventLogType; // EventLogType

    public constructor(init?: Partial<FJournalRecord>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt64(this.date);
        serializer.writeStaticMap(this.details, true, true, 'string', 'string');
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.date = deserializer.readInt64();
        this.details = deserializer.readStaticMap('string', 'string', true, true);
        this.type = deserializer.readByte();
    }
}

export class FJournalUpdate {
    __type = 'FJournalUpdate';
    records: FJournalRecord[]; // FJournalRecord[]

    public constructor(init?: Partial<FJournalUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.records, true, 'FJournalRecord');
    }
    deserialize(deserializer: Deserializer) {
        this.records = deserializer.readStaticList('FJournalRecord', true);
    }
}

export class FLoot {
    __type = 'FLoot';
    lootList: FBaseLootItem[]; // FBaseLootItem[]
    streakIndex: number; // int

    public constructor(init?: Partial<FLoot>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.lootList, false, 'FBaseLootItem');
        serializer.writeDynamicObject(this.streakIndex, 'int');
    }
    deserialize(deserializer: Deserializer) {
        this.lootList = deserializer.readStaticList('FBaseLootItem', false);
        this.streakIndex = deserializer.readDynamicObject();
    }
}

export class FLootItemArtifact {
    __type = 'FLootItemArtifact';
    qty: number; // int
    artifact: enums.ArtifactName; // ArtifactName

    public constructor(init?: Partial<FLootItemArtifact>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.artifact);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.artifact = deserializer.readByte();
    }
}

export class FLootItemBuff {
    __type = 'FLootItemBuff';
    qty: number; // int
    buff: BuffConfig; // BuffConfig

    public constructor(init?: Partial<FLootItemBuff>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeStaticObject(this.buff, 'BuffConfig');
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.buff = deserializer.readStaticObject('BuffConfig') as BuffConfig;
    }
}

export class FLootItemCandy {
    __type = 'FLootItemCandy';
    qty: number; // int
    candyType: enums.CreatureType; // CreatureType
    fromBuddy: boolean; // bool

    public constructor(init?: Partial<FLootItemCandy>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.candyType);
        serializer.writeBoolean(this.fromBuddy);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.candyType = deserializer.readByte();
        this.fromBuddy = deserializer.readBoolean();
    }
}

export class FLootItemCoins {
    __type = 'FLootItemCoins';
    qty: number; // int

    public constructor(init?: Partial<FLootItemCoins>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
    }
}

export class FLootItemDust {
    __type = 'FLootItemDust';
    qty: number; // int
    isStreak: boolean; // bool

    public constructor(init?: Partial<FLootItemDust>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeBoolean(this.isStreak);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.isStreak = deserializer.readBoolean();
    }
}

export class FLootItemExp {
    __type = 'FLootItemExp';
    qty: number; // int

    public constructor(init?: Partial<FLootItemExp>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
    }
}

export class FLootItemInstantUseItem {
    __type = 'FLootItemInstantUseItem';
    qty: number; // int
    item: enums.InstantUseItem; // InstantUseItem

    public constructor(init?: Partial<FLootItemInstantUseItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.item);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.item = deserializer.readByte();
    }
}

export class FLootItemItem {
    __type = 'FLootItemItem';
    qty: number; // int
    isStreak: boolean; // bool
    item: enums.ItemType; // ItemType

    public constructor(init?: Partial<FLootItemItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeBoolean(this.isStreak);
        serializer.writeByte(this.item);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.isStreak = deserializer.readBoolean();
        this.item = deserializer.readByte();
    }
}

export class FLootItemRecipe {
    __type = 'FLootItemRecipe';
    qty: number; // int
    level: number; // int
    recipe: enums.RecipeType; // RecipeType

    public constructor(init?: Partial<FLootItemRecipe>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeInt32(this.level);
        serializer.writeByte(this.recipe);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.level = deserializer.readInt32();
        this.recipe = deserializer.readByte();
    }
}

export class FMentorshipAwardUpdate {
    __type = 'FMentorshipAwardUpdate';
    creadex: FCreadex; // FCreadex
    creatureType: enums.CreatureType; // CreatureType
    gotCandiesCount: number; // int
    gotDragon: boolean; // bool
    userCreature: FUserCreature; // FUserCreature

    public constructor(init?: Partial<FMentorshipAwardUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeByte(this.creatureType);
        serializer.writeInt32(this.gotCandiesCount);
        serializer.writeBoolean(this.gotDragon);
        serializer.writeDynamicObject(this.userCreature, 'FUserCreature');
    }
    deserialize(deserializer: Deserializer) {
        this.creadex = deserializer.readDynamicObject();
        this.creatureType = deserializer.readByte();
        this.gotCandiesCount = deserializer.readInt32();
        this.gotDragon = deserializer.readBoolean();
        this.userCreature = deserializer.readDynamicObject();
    }
}

export class FMentorshipInfo {
    __type = 'FMentorshipInfo';
    canBeMentor: boolean; // bool
    canChooseMentor: boolean; // bool
    hasParentMentor: boolean; // bool
    levelRequiredToBeMentor: number; // int
    ownMentorCode: string; // string
    parentMentorId: string; // string
    parentMentorNickname: string; // string
    students: FStudent[]; // FStudent[]
    wasKickedByParentMentor: boolean; // bool

    public constructor(init?: Partial<FMentorshipInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.canBeMentor);
        serializer.writeBoolean(this.canChooseMentor);
        serializer.writeBoolean(this.hasParentMentor);
        serializer.writeInt32(this.levelRequiredToBeMentor);
        serializer.writeUtf8String(this.ownMentorCode);
        serializer.writeUtf8String(this.parentMentorId);
        serializer.writeUtf8String(this.parentMentorNickname);
        serializer.writeStaticList(this.students, true, 'FStudent');
        serializer.writeBoolean(this.wasKickedByParentMentor);
    }
    deserialize(deserializer: Deserializer) {
        this.canBeMentor = deserializer.readBoolean();
        this.canChooseMentor = deserializer.readBoolean();
        this.hasParentMentor = deserializer.readBoolean();
        this.levelRequiredToBeMentor = deserializer.readInt32();
        this.ownMentorCode = deserializer.readUtf8String();
        this.parentMentorId = deserializer.readUtf8String();
        this.parentMentorNickname = deserializer.readUtf8String();
        this.students = deserializer.readStaticList('FStudent', true);
        this.wasKickedByParentMentor = deserializer.readBoolean();
    }
}

export class FNewsArticle {
    __type = 'FNewsArticle';
    activeNewsIds: Set<string>; // Set<string>
    activeOfferCurrent: number; // int
    activeOfferTotal: number; // int
    body: string; // string
    freshNewsDate: long; // long
    id: string; // string
    title: string; // string

    public constructor(init?: Partial<FNewsArticle>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticHashSet(this.activeNewsIds, true, 'string');
        serializer.writeInt32(this.activeOfferCurrent);
        serializer.writeInt32(this.activeOfferTotal);
        serializer.writeUtf8String(this.body);
        serializer.writeInt64(this.freshNewsDate);
        serializer.writeUtf8String(this.id);
        serializer.writeUtf8String(this.title);
    }
    deserialize(deserializer: Deserializer) {
        this.activeNewsIds = deserializer.readStaticHashSet('string', true);
        this.activeOfferCurrent = deserializer.readInt32();
        this.activeOfferTotal = deserializer.readInt32();
        this.body = deserializer.readUtf8String();
        this.freshNewsDate = deserializer.readInt64();
        this.id = deserializer.readUtf8String();
        this.title = deserializer.readUtf8String();
    }
}

export class FNicknameValidationResult {
    __type = 'FNicknameValidationResult';
    error: enums.FNicknameValidationError; // FNicknameValidationError
    suggestedNickname: string; // string

    public constructor(init?: Partial<FNicknameValidationResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.error, 'enums.FNicknameValidationError');
        serializer.writeDynamicObject(this.suggestedNickname, 'string');
    }
    deserialize(deserializer: Deserializer) {
        this.error = deserializer.readDynamicObject();
        this.suggestedNickname = deserializer.readDynamicObject();
    }
}

export class FNotification {
    __type = 'FNotification';
    message: string; // string
    title: string; // string
    type: string; // string

    public constructor(init?: Partial<FNotification>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.message);
        serializer.writeUtf8String(this.title);
        serializer.writeUtf8String(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.message = deserializer.readUtf8String();
        this.title = deserializer.readUtf8String();
        this.type = deserializer.readUtf8String();
    }
}

export class FObeliskDetails {
    __type = 'FObeliskDetails';
    coords: GeoCoords; // GeoCoords
    dailyQuest: FDailyQuest; // FDailyQuest
    fragment: FWeeklyQuestFragment; // FWeeklyQuestFragment
    id: string; // string
    justOpened: boolean; // bool
    weeklyQuest: FWeeklyQuest; // FWeeklyQuest

    public constructor(init?: Partial<FObeliskDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.dailyQuest, 'FDailyQuest');
        serializer.writeDynamicObject(this.fragment, 'FWeeklyQuestFragment');
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.justOpened);
        serializer.writeDynamicObject(this.weeklyQuest, 'FWeeklyQuest');
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.dailyQuest = deserializer.readDynamicObject();
        this.fragment = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
        this.justOpened = deserializer.readBoolean();
        this.weeklyQuest = deserializer.readDynamicObject();
    }
}

export class FOpenChestResult {
    __type = 'FOpenChestResult';
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot

    public constructor(init?: Partial<FOpenChestResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer: Deserializer) {
        this.levelUpLoot = deserializer.readDynamicObject();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FPickItemsResponse {
    __type = 'FPickItemsResponse';
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot

    public constructor(init?: Partial<FPickItemsResponse>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer: Deserializer) {
        this.levelUpLoot = deserializer.readDynamicObject();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FPitstop {
    __type = 'FPitstop';
    cooldown: boolean; // bool
    lureBy: string; // string
    lureTimeLeft: long; // long
    personalized: enums.PersonalizedStop; // PersonalizedStop

    public constructor(init?: Partial<FPitstop>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.cooldown);
        serializer.writeDynamicObject(this.lureBy, 'string');
        serializer.writeInt64(this.lureTimeLeft);
        serializer.writeDynamicObject(this.personalized, 'enums.PersonalizedStop');
    }
    deserialize(deserializer: Deserializer) {
        this.cooldown = deserializer.readBoolean();
        this.lureBy = deserializer.readDynamicObject();
        this.lureTimeLeft = deserializer.readInt64();
        this.personalized = deserializer.readDynamicObject();
    }
}

export class FPurchaseResult {
    __type = 'FPurchaseResult';
    avaUpdate: FAvaUpdate; // FAvaUpdate
    creadex: FCreadex; // FCreadex
    creature: Map<FUserCreature, boolean>; // Map<FUserCreature, bool>

    public constructor(init?: Partial<FPurchaseResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeStaticMap(this.creature, true, true, 'FUserCreature', 'bool');
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticMap('FUserCreature', 'bool', true, true);
    }
}

export class FQuestCompleted {
    __type = 'FQuestCompleted';
    activeObjects: FActiveObjectsUpdate; // FActiveObjectsUpdate
    dailyQuest: FDailyQuest; // FDailyQuest
    goldenEgg: FHatchedEggs; // FHatchedEggs
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot
    weeklyQuest: boolean; // bool

    public constructor(init?: Partial<FQuestCompleted>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.activeObjects, 'FActiveObjectsUpdate');
        serializer.writeDynamicObject(this.dailyQuest, 'FDailyQuest');
        serializer.writeDynamicObject(this.goldenEgg, 'FHatchedEggs');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeBoolean(this.weeklyQuest);
    }
    deserialize(deserializer: Deserializer) {
        this.activeObjects = deserializer.readDynamicObject();
        this.dailyQuest = deserializer.readDynamicObject();
        this.goldenEgg = deserializer.readDynamicObject();
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.weeklyQuest = deserializer.readBoolean();
    }
}

export class FQuestUpdate {
    __type = 'FQuestUpdate';
    completed: FQuestCompleted; // FQuestCompleted
    highlightBuilding: IdAndCoords; // IdAndCoords
    path: IdAndCoords[]; // IdAndCoords[]

    public constructor(init?: Partial<FQuestUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.completed, 'FQuestCompleted');
        serializer.writeDynamicObject(this.highlightBuilding, 'IdAndCoords');
        serializer.writeDynamicList(this.path, true, 'IdAndCoords');
    }
    deserialize(deserializer: Deserializer) {
        this.completed = deserializer.readDynamicObject();
        this.highlightBuilding = deserializer.readDynamicObject();
        this.path = deserializer.readDynamicList('IdAndCoords', true);
    }
}

export class FRecipeConfig {
    __type = 'FRecipeConfig';
    duration: number; // int
    percent: number; // int
    runes: enums.ItemType[]; // ItemType[]

    public constructor(init?: Partial<FRecipeConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.duration);
        serializer.writeInt32(this.percent);
        serializer.writeStaticList(this.runes, true, 'ItemType');
    }
    deserialize(deserializer: Deserializer) {
        this.duration = deserializer.readInt32();
        this.percent = deserializer.readInt32();
        this.runes = deserializer.readStaticList('ItemType', true);
    }
}

export class FRegistrationInfo {
    __type = 'FRegistrationInfo';
    age: string; // string
    email: string; // string
    gender: string; // string
    regType: string; // string
    socialId: string; // string

    public constructor(init?: Partial<FRegistrationInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.age);
        serializer.writeUtf8String(this.email);
        serializer.writeUtf8String(this.gender);
        serializer.writeUtf8String(this.regType);
        serializer.writeUtf8String(this.socialId);
    }
    deserialize(deserializer: Deserializer) {
        this.age = deserializer.readUtf8String();
        this.email = deserializer.readUtf8String();
        this.gender = deserializer.readUtf8String();
        this.regType = deserializer.readUtf8String();
        this.socialId = deserializer.readUtf8String();
    }
}

export class FScoutRequest {
    __type = 'FScoutRequest';
    clientRequest: FClientRequest; // FClientRequest
    scoutCoords: GeoCoords; // GeoCoords

    public constructor(init?: Partial<FScoutRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.clientRequest, 'FClientRequest');
        serializer.writeStaticObject(this.scoutCoords, 'GeoCoords');
    }
    deserialize(deserializer: Deserializer) {
        this.clientRequest = deserializer.readStaticObject('FClientRequest') as FClientRequest;
        this.scoutCoords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
    }
}

export class FServiceError {
    __type = 'FServiceError';
    args: object[]; // object[]
    cause: string; // string

    public constructor(init?: Partial<FServiceError>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticArray(this.args, false, 'object');
        serializer.writeUtf8String(this.cause);
    }
    deserialize(deserializer: Deserializer) {
        this.args = deserializer.readStaticArray('object', false);
        this.cause = deserializer.readUtf8String();
    }
}

export class FShopConfig {
    __type = 'FShopConfig';
    artifacts: Map<enums.ArtifactName, number>; // Map<enums.ArtifactName, int>
    bagUpgrade: ProductLot; // ProductLot
    coins: Map<string, ProductLot>; // Map<string, ProductLot>
    creatureStorageUpgrade: ProductLot; // ProductLot
    creatures: Map<string, FItemCreatureGroup>; // Map<string, FItemCreatureGroup>
    extraPacks: Map<string, ExtraPack>; // Map<string, ExtraPack>
    marketFees: Map<string, number>; // Map<string, float>
    products: ProductGroup[]; // ProductGroup[]
    saleSets: SaleSetConfig[]; // SaleSetConfig[]

    public constructor(init?: Partial<FShopConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.artifacts, true, true, 'ArtifactName', 'int');
        serializer.writeStaticObject(this.bagUpgrade, 'ProductLot');
        serializer.writeStaticMap(this.coins, true, true, 'string', 'ProductLot');
        serializer.writeStaticObject(this.creatureStorageUpgrade, 'ProductLot');
        serializer.writeStaticMap(this.creatures, true, true, 'string', 'FItemCreatureGroup');
        serializer.writeStaticMap(this.extraPacks, true, true, 'string', 'ExtraPack');
        serializer.writeStaticMap(this.marketFees, true, true, 'string', 'float');
        serializer.writeStaticList(this.products, true, 'ProductGroup');
        serializer.writeStaticList(this.saleSets, true, 'SaleSetConfig');
    }
    deserialize(deserializer: Deserializer) {
        this.artifacts = deserializer.readStaticMap('ArtifactName', 'int', true, true);
        this.bagUpgrade = deserializer.readStaticObject('ProductLot') as ProductLot;
        this.coins = deserializer.readStaticMap('string', 'ProductLot', true, true);
        this.creatureStorageUpgrade = deserializer.readStaticObject('ProductLot') as ProductLot;
        this.creatures = deserializer.readStaticMap('string', 'FItemCreatureGroup', true, true);
        this.extraPacks = deserializer.readStaticMap('string', 'ExtraPack', true, true);
        this.marketFees = deserializer.readStaticMap('string', 'float', true, true);
        this.products = deserializer.readStaticList('ProductGroup', true);
        this.saleSets = deserializer.readStaticList('SaleSetConfig', true);
    }
}

export class FSpellCastDone {
    __type = 'FSpellCastDone';
    altarCoords: GeoCoords; // GeoCoords
    spellType: enums.SpellType; // SpellType

    public constructor(init?: Partial<FSpellCastDone>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.altarCoords, 'GeoCoords');
        serializer.writeByte(this.spellType);
    }
    deserialize(deserializer: Deserializer) {
        this.altarCoords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.spellType = deserializer.readByte();
    }
}

export class FSpellEffectsUpdate {
    __type = 'FSpellEffectsUpdate';
    hitArenas: Set<string>; // Set<string>

    public constructor(init?: Partial<FSpellEffectsUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticHashSet(this.hitArenas, true, 'string');
    }
    deserialize(deserializer: Deserializer) {
        this.hitArenas = deserializer.readStaticHashSet('string', true);
    }
}

export class FStartEncounterRequest {
    __type = 'FStartEncounterRequest';
    attackerId: string; // string
    defenderId: string; // string

    public constructor(init?: Partial<FStartEncounterRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.attackerId);
        serializer.writeUtf8String(this.defenderId);
    }
    deserialize(deserializer: Deserializer) {
        this.attackerId = deserializer.readUtf8String();
        this.defenderId = deserializer.readUtf8String();
    }
}

export class FStudent {
    __type = 'FStudent';
    allianceType: enums.AllianceType; // AllianceType
    level: number; // int
    nickname: string; // string
    userId: string; // string

    public constructor(init?: Partial<FStudent>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceType, 'enums.AllianceType');
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickname);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.level = deserializer.readInt32();
        this.nickname = deserializer.readUtf8String();
        this.userId = deserializer.readUtf8String();
    }
}

export class FTile {
    __type = 'FTile';
    dungeonId: string; // string
    tile: Tile; // Tile

    public constructor(init?: Partial<FTile>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeStaticObject(this.tile, 'Tile');
    }
    deserialize(deserializer: Deserializer) {
        this.dungeonId = deserializer.readDynamicObject();
        this.tile = deserializer.readStaticObject('Tile') as Tile;
    }
}

export class FTileState {
    __type = 'FTileState';
    buildings: FBuilding[]; // FBuilding[]
    time: long; // long

    public constructor(init?: Partial<FTileState>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.buildings, true, 'FBuilding');
        serializer.writeInt64(this.time);
    }
    deserialize(deserializer: Deserializer) {
        this.buildings = deserializer.readStaticList('FBuilding', true);
        this.time = deserializer.readInt64();
    }
}

export class FTips {
    __type = 'FTips';
    laterAvailable: boolean; // bool
    messages: string[]; // string[]
    nextAvailable: boolean; // bool

    public constructor(init?: Partial<FTips>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.laterAvailable);
        serializer.writeStaticList(this.messages, true, 'string');
        serializer.writeBoolean(this.nextAvailable);
    }
    deserialize(deserializer: Deserializer) {
        this.laterAvailable = deserializer.readBoolean();
        this.messages = deserializer.readStaticList('string', true);
        this.nextAvailable = deserializer.readBoolean();
    }
}

export class FTransferMonsterToCandiesResponse {
    __type = 'FTransferMonsterToCandiesResponse';
    loot: FLoot; // FLoot

    public constructor(init?: Partial<FTransferMonsterToCandiesResponse>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer: Deserializer) {
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FUpdate {
    __type = 'FUpdate';
    items: FBaseItemUpdate[]; // FBaseItemUpdate[]
    speed: number; // float

    public constructor(init?: Partial<FUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.items, false, 'FBaseItemUpdate');
        serializer.writeDynamicObject(this.speed, 'float');
    }
    deserialize(deserializer: Deserializer) {
        this.items = deserializer.readStaticList('FBaseItemUpdate', false);
        this.speed = deserializer.readDynamicObject();
    }
}

export class FUpdateNicknameResult {
    __type = 'FUpdateNicknameResult';
    userInfo: FUserInfo; // FUserInfo
    validationResult: FNicknameValidationResult; // FNicknameValidationResult

    public constructor(init?: Partial<FUpdateNicknameResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.userInfo, 'FUserInfo');
        serializer.writeDynamicObject(this.validationResult, 'FNicknameValidationResult');
    }
    deserialize(deserializer: Deserializer) {
        this.userInfo = deserializer.readDynamicObject();
        this.validationResult = deserializer.readDynamicObject();
    }
}

export class FUpdateRequest {
    __type = 'FUpdateRequest';
    blackScreen: boolean; // bool
    clientPlatform: enums.ClientPlatform; // ClientPlatform
    clientRequest: FClientRequest; // FClientRequest
    configCacheHash: Buffer; // Buffer
    language: string; // string
    tilesCache: Map<FTile, long>; // Map<FTile, long>
    updateBuilding: FBuildingRequest; // FBuildingRequest
    updateBuildingIfModifiedSince: long; // long

    public constructor(init?: Partial<FUpdateRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.blackScreen);
        serializer.writeByte(this.clientPlatform);
        serializer.writeStaticObject(this.clientRequest, 'FClientRequest');
        serializer.writeBuffer(this.configCacheHash);
        serializer.writeDynamicObject(this.language, 'string');
        serializer.writeStaticMap(this.tilesCache, true, true, 'FTile', 'long');
        serializer.writeDynamicObject(this.updateBuilding, 'FBuildingRequest');
        serializer.writeInt64(this.updateBuildingIfModifiedSince);
    }
    deserialize(deserializer: Deserializer) {
        this.blackScreen = deserializer.readBoolean();
        this.clientPlatform = deserializer.readByte();
        this.clientRequest = deserializer.readStaticObject('FClientRequest') as FClientRequest;
        this.configCacheHash = deserializer.readBuffer();
        this.language = deserializer.readDynamicObject();
        this.tilesCache = deserializer.readStaticMap('FTile', 'long', true, true);
        this.updateBuilding = deserializer.readDynamicObject();
        this.updateBuildingIfModifiedSince = deserializer.readInt64();
    }
}

export class FUserCreature {
    __type = 'FUserCreature';
    alias: string; // string
    attackValue: number; // int
    baseCp: number; // int
    candyType: enums.CreatureType; // CreatureType
    chargedSegments: number; // int
    chargedSkill: string; // string
    chargedSkillDps: number; // float
    cp: number; // int
    creadexIndex: number; // int
    dps: number; // float
    elementType: enums.ElementType; // ElementType
    gotchaTime: long; // long
    group: number; // int
    hp: number; // float
    id: string; // string
    improvable: boolean; // bool
    improveCandiesCost: number; // int
    improveDustCost: number; // int
    isArenaDefender: boolean; // bool
    isAttacker: boolean; // bool
    isLibraryDefender: boolean; // bool
    level: number; // int
    mainSkill: string; // string
    mainSkillDps: number; // float
    mainSkillEps: number; // float
    name: enums.CreatureType; // CreatureType
    permanent: boolean; // bool
    possibleEvolutions: Map<enums.CreatureType, number>; // Map<enums.CreatureType, int>
    staminaValue: number; // int
    totalHp: number; // float

    public constructor(init?: Partial<FUserCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alias, 'string');
        serializer.writeInt32(this.attackValue);
        serializer.writeInt32(this.baseCp);
        serializer.writeByte(this.candyType);
        serializer.writeInt32(this.chargedSegments);
        serializer.writeUtf8String(this.chargedSkill);
        serializer.writeFloat(this.chargedSkillDps);
        serializer.writeInt32(this.cp);
        serializer.writeInt32(this.creadexIndex);
        serializer.writeFloat(this.dps);
        serializer.writeByte(this.elementType);
        serializer.writeInt64(this.gotchaTime);
        serializer.writeInt32(this.group);
        serializer.writeFloat(this.hp);
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.improvable);
        serializer.writeInt32(this.improveCandiesCost);
        serializer.writeInt32(this.improveDustCost);
        serializer.writeBoolean(this.isArenaDefender);
        serializer.writeBoolean(this.isAttacker);
        serializer.writeBoolean(this.isLibraryDefender);
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.mainSkill);
        serializer.writeFloat(this.mainSkillDps);
        serializer.writeFloat(this.mainSkillEps);
        serializer.writeByte(this.name);
        serializer.writeBoolean(this.permanent);
        serializer.writeStaticMap(this.possibleEvolutions, true, true, 'CreatureType', 'int');
        serializer.writeInt32(this.staminaValue);
        serializer.writeFloat(this.totalHp);
    }
    deserialize(deserializer: Deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.attackValue = deserializer.readInt32();
        this.baseCp = deserializer.readInt32();
        this.candyType = deserializer.readByte();
        this.chargedSegments = deserializer.readInt32();
        this.chargedSkill = deserializer.readUtf8String();
        this.chargedSkillDps = deserializer.readFloat();
        this.cp = deserializer.readInt32();
        this.creadexIndex = deserializer.readInt32();
        this.dps = deserializer.readFloat();
        this.elementType = deserializer.readByte();
        this.gotchaTime = deserializer.readInt64();
        this.group = deserializer.readInt32();
        this.hp = deserializer.readFloat();
        this.id = deserializer.readUtf8String();
        this.improvable = deserializer.readBoolean();
        this.improveCandiesCost = deserializer.readInt32();
        this.improveDustCost = deserializer.readInt32();
        this.isArenaDefender = deserializer.readBoolean();
        this.isAttacker = deserializer.readBoolean();
        this.isLibraryDefender = deserializer.readBoolean();
        this.level = deserializer.readInt32();
        this.mainSkill = deserializer.readUtf8String();
        this.mainSkillDps = deserializer.readFloat();
        this.mainSkillEps = deserializer.readFloat();
        this.name = deserializer.readByte();
        this.permanent = deserializer.readBoolean();
        this.possibleEvolutions = deserializer.readStaticMap('CreatureType', 'int', true, true);
        this.staminaValue = deserializer.readInt32();
        this.totalHp = deserializer.readFloat();
    }
}

export class FUserCreaturesList {
    __type = 'FUserCreaturesList';
    userCreatures: FUserCreature[]; // FUserCreature[]

    public constructor(init?: Partial<FUserCreaturesList>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.userCreatures, true, 'FUserCreature');
    }
    deserialize(deserializer: Deserializer) {
        this.userCreatures = deserializer.readStaticList('FUserCreature', true);
    }
}

export class FUserCreatureUpdate {
    __type = 'FUserCreatureUpdate';
    avaUpdate: FAvaUpdate; // FAvaUpdate
    creadex: FCreadex; // FCreadex
    creature: FUserCreature; // FUserCreature
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot

    public constructor(init?: Partial<FUserCreatureUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeStaticObject(this.creature, 'FUserCreature');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticObject('FUserCreature') as FUserCreature;
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FUserHatchingInfo {
    __type = 'FUserHatchingInfo';
    eggs: FEgg[]; // FEgg[]
    incubators: FIncubator[]; // FIncubator[]
    max: number; // int
    maxRoost: number; // int

    public constructor(init?: Partial<FUserHatchingInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.eggs, true, 'FEgg');
        serializer.writeStaticList(this.incubators, true, 'FIncubator');
        serializer.writeInt32(this.max);
        serializer.writeInt32(this.maxRoost);
    }
    deserialize(deserializer: Deserializer) {
        this.eggs = deserializer.readStaticList('FEgg', true);
        this.incubators = deserializer.readStaticList('FIncubator', true);
        this.max = deserializer.readInt32();
        this.maxRoost = deserializer.readInt32();
    }
}

export class FUserInfo {
    __type = 'FUserInfo';
    alliance: enums.AllianceType; // AllianceType
    avatarAppearanceDetails: number; // int
    devMode: boolean; // bool
    internalUser: boolean; // bool
    newLicense: number; // int
    nickname: string; // string
    sendClientLog: boolean; // bool
    serverTime: long; // long
    showAdvices: boolean; // bool
    userId: string; // string

    public constructor(init?: Partial<FUserInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alliance, 'enums.AllianceType');
        serializer.writeInt32(this.avatarAppearanceDetails);
        serializer.writeBoolean(this.devMode);
        serializer.writeBoolean(this.internalUser);
        serializer.writeInt32(this.newLicense);
        serializer.writeUtf8String(this.nickname);
        serializer.writeBoolean(this.sendClientLog);
        serializer.writeInt64(this.serverTime);
        serializer.writeBoolean(this.showAdvices);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer: Deserializer) {
        this.alliance = deserializer.readDynamicObject();
        this.avatarAppearanceDetails = deserializer.readInt32();
        this.devMode = deserializer.readBoolean();
        this.internalUser = deserializer.readBoolean();
        this.newLicense = deserializer.readInt32();
        this.nickname = deserializer.readUtf8String();
        this.sendClientLog = deserializer.readBoolean();
        this.serverTime = deserializer.readInt64();
        this.showAdvices = deserializer.readBoolean();
        this.userId = deserializer.readUtf8String();
    }
}

export class FWeeklyQuest {
    __type = 'FWeeklyQuest';
    allOpen: boolean; // bool
    completed: boolean; // bool
    currentFragment: number; // int
    digFragments: number[]; // int[]
    extraQuestsAvailable: number; // int
    nextWeeklyQuestIn: number; // int
    openFragments: Map<number, Buffer>; // Map<int, Buffer>
    shovelsAvailable: number; // int
    sideFragmentNumber: number; // int

    public constructor(init?: Partial<FWeeklyQuest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.allOpen);
        serializer.writeBoolean(this.completed);
        serializer.writeInt32(this.currentFragment);
        serializer.writeStaticList(this.digFragments, true, 'int');
        serializer.writeInt32(this.extraQuestsAvailable);
        serializer.writeInt32(this.nextWeeklyQuestIn);
        serializer.writeStaticMap(this.openFragments, true, true, 'int', 'Buffer');
        serializer.writeInt32(this.shovelsAvailable);
        serializer.writeInt32(this.sideFragmentNumber);
    }
    deserialize(deserializer: Deserializer) {
        this.allOpen = deserializer.readBoolean();
        this.completed = deserializer.readBoolean();
        this.currentFragment = deserializer.readInt32();
        this.digFragments = deserializer.readStaticList('int', true);
        this.extraQuestsAvailable = deserializer.readInt32();
        this.nextWeeklyQuestIn = deserializer.readInt32();
        this.openFragments = deserializer.readStaticMap('int', 'Buffer', true, true);
        this.shovelsAvailable = deserializer.readInt32();
        this.sideFragmentNumber = deserializer.readInt32();
    }
}

export class FWeeklyQuestFragment {
    __type = 'FWeeklyQuestFragment';
    data: Buffer; // Buffer
    fragmentNumber: number; // int

    public constructor(init?: Partial<FWeeklyQuestFragment>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBuffer(this.data);
        serializer.writeInt32(this.fragmentNumber);
    }
    deserialize(deserializer: Deserializer) {
        this.data = deserializer.readBuffer();
        this.fragmentNumber = deserializer.readInt32();
    }
}

export class FWildCreature {
    __type = 'FWildCreature';
    chest: boolean; // bool
    coords: GeoCoords; // GeoCoords
    entry: FCreadexEntry; // FCreadexEntry
    id: string; // string
    incenseUserId: string; // string
    isFirstCreature: boolean; // bool
    name: enums.CreatureType; // CreatureType
    relatedBuildingId: string; // string
    scaleCollider: number; // float
    ttl: number; // float

    public constructor(init?: Partial<FWildCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.chest);
        serializer.writeDynamicObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.entry, 'FCreadexEntry');
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.incenseUserId, 'string');
        serializer.writeBoolean(this.isFirstCreature);
        serializer.writeByte(this.name);
        serializer.writeDynamicObject(this.relatedBuildingId, 'string');
        serializer.writeFloat(this.scaleCollider);
        serializer.writeFloat(this.ttl);
    }
    deserialize(deserializer: Deserializer) {
        this.chest = deserializer.readBoolean();
        this.coords = deserializer.readDynamicObject();
        this.entry = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
        this.incenseUserId = deserializer.readDynamicObject();
        this.isFirstCreature = deserializer.readBoolean();
        this.name = deserializer.readByte();
        this.relatedBuildingId = deserializer.readDynamicObject();
        this.scaleCollider = deserializer.readFloat();
        this.ttl = deserializer.readFloat();
    }
}

export class FWizardBattleInfo {
    __type = 'FWizardBattleInfo';
    extraBattles: number; // int
    limit: number; // int
    timeToRefresh: number; // float
    used: number; // int
    userCoins: number; // int

    public constructor(init?: Partial<FWizardBattleInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.extraBattles);
        serializer.writeInt32(this.limit);
        serializer.writeFloat(this.timeToRefresh);
        serializer.writeInt32(this.used);
        serializer.writeInt32(this.userCoins);
    }
    deserialize(deserializer: Deserializer) {
        this.extraBattles = deserializer.readInt32();
        this.limit = deserializer.readInt32();
        this.timeToRefresh = deserializer.readFloat();
        this.used = deserializer.readInt32();
        this.userCoins = deserializer.readInt32();
    }
}

export class FWizardBattleRatingRecord {
    __type = 'FWizardBattleRatingRecord';
    level: number; // int
    nickName: string; // string
    score: number; // float

    public constructor(init?: Partial<FWizardBattleRatingRecord>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickName);
        serializer.writeFloat(this.score);
    }
    deserialize(deserializer: Deserializer) {
        this.level = deserializer.readInt32();
        this.nickName = deserializer.readUtf8String();
        this.score = deserializer.readFloat();
    }
}

export class FWizardBattleRatingTop {
    __type = 'FWizardBattleRatingTop';
    topRecords: FWizardBattleRatingRecord[]; // FWizardBattleRatingRecord[]

    public constructor(init?: Partial<FWizardBattleRatingTop>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.topRecords, true, 'FWizardBattleRatingRecord');
    }
    deserialize(deserializer: Deserializer) {
        this.topRecords = deserializer.readStaticList('FWizardBattleRatingRecord', true);
    }
}

export class FWizardBattleResult {
    __type = 'FWizardBattleResult';
    attackerHps: number[]; // float[]
    attackerTypes: enums.CreatureType[]; // CreatureType[]
    candies: enums.CreatureType[]; // CreatureType[]
    levelUpLoot: FLoot; // FLoot
    loot: FLoot; // FLoot
    resultScreenDelay: number; // float
    rewardPercent: number; // float
    victory: boolean; // bool

    public constructor(init?: Partial<FWizardBattleResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.attackerHps, true, 'float');
        serializer.writeStaticList(this.attackerTypes, true, 'CreatureType');
        serializer.writeStaticList(this.candies, true, 'CreatureType');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeFloat(this.rewardPercent);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer: Deserializer) {
        this.attackerHps = deserializer.readStaticList('float', true);
        this.attackerTypes = deserializer.readStaticList('CreatureType', true);
        this.candies = deserializer.readStaticList('CreatureType', true);
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.resultScreenDelay = deserializer.readFloat();
        this.rewardPercent = deserializer.readFloat();
        this.victory = deserializer.readBoolean();
    }
}

export class GeoCoords {
    __type = 'GeoCoords';
    latitude: number; // double
    longitude: number; // double

    public constructor(init?: Partial<GeoCoords>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDouble(this.latitude);
        serializer.writeDouble(this.longitude);
    }
    deserialize(deserializer: Deserializer) {
        this.latitude = deserializer.readDouble();
        this.longitude = deserializer.readDouble();
    }
}

export class GeoCoordsWithAccuracy {
    __type = 'GeoCoordsWithAccuracy';
    horizontalAccuracy: number; // float
    latitude: number; // double
    longitude: number; // double

    public constructor(init?: Partial<GeoCoordsWithAccuracy>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeFloat(this.horizontalAccuracy);
        serializer.writeDouble(this.latitude);
        serializer.writeDouble(this.longitude);
    }
    deserialize(deserializer: Deserializer) {
        this.horizontalAccuracy = deserializer.readFloat();
        this.latitude = deserializer.readDouble();
        this.longitude = deserializer.readDouble();
    }
}

export class IdAndCoords {
    __type = 'IdAndCoords';
    coords: GeoCoords; // GeoCoords
    id: string; // string

    public constructor(init?: Partial<IdAndCoords>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.id = deserializer.readUtf8String();
    }
}

export class InAppEventInfo {
    __type = 'InAppEventInfo';
    eventItems: Map<string, string>; // Map<string, string>
    eventType: enums.InAppEventType; // InAppEventType
    userId: string; // string

    public constructor(init?: Partial<InAppEventInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.eventItems, true, true, 'string', 'string');
        serializer.writeByte(this.eventType);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer: Deserializer) {
        this.eventItems = deserializer.readStaticMap('string', 'string', true, true);
        this.eventType = deserializer.readByte();
        this.userId = deserializer.readUtf8String();
    }
}

export class PotionConfig {
    __type = 'PotionConfig';
    heals: Map<enums.ItemType, number>; // Map<enums.ItemType, int>
    resurrections: Map<enums.ItemType, number>; // Map<enums.ItemType, float>

    public constructor(init?: Partial<PotionConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.heals, true, true, 'ItemType', 'int');
        serializer.writeStaticMap(this.resurrections, true, true, 'ItemType', 'float');
    }
    deserialize(deserializer: Deserializer) {
        this.heals = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.resurrections = deserializer.readStaticMap('ItemType', 'float', true, true);
    }
}

export class ProductGroup {
    __type = 'ProductGroup';
    itemType: enums.ItemType; // ItemType
    productLots: ProductLot[]; // ProductLot[]

    public constructor(init?: Partial<ProductGroup>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.itemType);
        serializer.writeStaticList(this.productLots, true, 'ProductLot');
    }
    deserialize(deserializer: Deserializer) {
        this.itemType = deserializer.readByte();
        this.productLots = deserializer.readStaticList('ProductLot', true);
    }
}

export class ProductLot {
    __type = 'ProductLot';
    price: number; // int
    qty: number; // int

    public constructor(init?: Partial<ProductLot>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.price);
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.price = deserializer.readInt32();
        this.qty = deserializer.readInt32();
    }
}

export class SaleSetConfig {
    __type = 'SaleSetConfig';
    items: Map<enums.ItemType, number>; // Map<enums.ItemType, int>
    price: number; // int
    type: enums.SaleSetType; // SaleSetType

    public constructor(init?: Partial<SaleSetConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.items, true, true, 'ItemType', 'int');
        serializer.writeInt32(this.price);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.items = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.price = deserializer.readInt32();
        this.type = deserializer.readByte();
    }
}

export class Tile {
    __type = 'Tile';
    x: number; // int
    y: number; // int
    zoom: number; // int

    public constructor(init?: Partial<Tile>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.x);
        serializer.writeInt32(this.y);
        serializer.writeInt32(this.zoom);
    }
    deserialize(deserializer: Deserializer) {
        this.x = deserializer.readInt32();
        this.y = deserializer.readInt32();
        this.zoom = deserializer.readInt32();
    }
}

