export type FalselyValue = false | 0 | '' | null | undefined

export const compact = <T>(arr: (T | FalselyValue)[]) => {
    return arr.filter((item): item is T => {
        return !!item
    })
}
