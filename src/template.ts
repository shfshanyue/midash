export const template = (
    str: string,
    data: Record<string, any>,
    regex = /\{\{(.+?)\}\}/g
) => {
    return Array.from(str.matchAll(regex)).reduce((acc, match) => {
        return acc.replace(match[0], data[match[1].trim()])
    }, str)
}
