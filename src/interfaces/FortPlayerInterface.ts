export default interface FortPlayerInterface {
   status: number
   data: Data
}

export interface Data {
   account: Account
   battlePass: BattlePass
   image: any
   stats: Stats
}

export interface Account {
   id: string
   name: string
}

export interface BattlePass {
   level: number
   progress: number
}

export interface Stats {
   all: All
   keyboardMouse: KeyboardMouse
   gamepad: Gamepad
   touch: Touch
}

export interface All {
   overall: Overall
   solo: Solo
   duo: Duo
   trio: any
   squad: Squad
   ltm: Ltm
}

export interface Overall {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top5: number
   top6: number
   top10: number
   top12: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Solo {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top10: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Duo {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top5: number
   top12: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Squad {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top6: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Ltm {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface KeyboardMouse {
   overall: Overall2
   solo: Solo2
   duo: Duo2
   trio: any
   squad: Squad2
   ltm: Ltm2
}

export interface Overall2 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top5: number
   top6: number
   top10: number
   top12: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Solo2 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top10: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Duo2 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top5: number
   top12: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Squad2 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top6: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Ltm2 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Gamepad {
   overall: Overall3
   solo: Solo3
   duo: Duo3
   trio: any
   squad: Squad3
   ltm: Ltm3
}

export interface Overall3 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top5: number
   top6: number
   top10: number
   top12: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Solo3 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top10: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Duo3 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top5: number
   top12: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Squad3 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top6: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Ltm3 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Touch {
   overall: Overall4
   solo: Solo4
   duo: Duo4
   trio: any
   squad: Squad4
   ltm: Ltm4
}

export interface Overall4 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top5: number
   top6: number
   top10: number
   top12: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Solo4 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top10: number
   top25: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Duo4 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top5: number
   top12: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Squad4 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   top3: number
   top6: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}

export interface Ltm4 {
   score: number
   scorePerMin: number
   scorePerMatch: number
   wins: number
   kills: number
   killsPerMin: number
   killsPerMatch: number
   deaths: number
   kd: number
   matches: number
   winRate: number
   minutesPlayed: number
   playersOutlived: number
   lastModified: string
}
