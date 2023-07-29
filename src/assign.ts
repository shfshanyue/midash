type ObjectWithAnyProperties = { [key: string]: any };

export function assign(target: ObjectWithAnyProperties | null , ...sources: Array<ObjectWithAnyProperties | null | undefined>): ObjectWithAnyProperties {
    if (target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    sources.forEach(source => {
        if (source != null) {
            Object.assign(target, source);
        }
    });

    return target;
}