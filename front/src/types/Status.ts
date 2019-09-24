export interface Status {
    isRunning: boolean
    error?: {
        message: string
    }
    lastUpdated?: Date
}
