import { Entities } from '.'

export interface State {
    readonly entities: Entities
    readonly form: {
        [key: string]: any
    }
}
