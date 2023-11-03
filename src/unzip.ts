export function unzip(data: any[][]): any[][] {
  const maxLength = Math.max(...data.map(row => row.length))
  return Array.from({ length: maxLength }, (_, i) => data.map(row => row[i]))
}
