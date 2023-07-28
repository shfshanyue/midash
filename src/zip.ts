export function zip(...arrays: any[][]): any[][] {
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    return Array.from({length: maxLength}, (_, i) => arrays.map(arr => arr[i]));
}