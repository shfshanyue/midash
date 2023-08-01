export function assign(target: object | null, ...sources: Array<object | null>): object {
    if (target === null || target === undefined) {
        target = {};
    }

    sources = sources.filter(source => source !== null && source !== undefined);
    return Object.assign(target, ...sources);
}