import { Status } from '.'

export interface StatusesState {
    readonly loadgames: Status
    readonly addgame: Status
    readonly loadgenres: Status
    readonly [key: string]: Status
}
