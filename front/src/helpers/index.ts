export function flatten<T>(obj: { [key: string]: T } = {}): T[] {
    return Object.keys(obj).map(key => obj[key])
}