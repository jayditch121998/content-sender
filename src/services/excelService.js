exports.extractUrls = (filePath) => {
  const XLSX = require('xlsx')
  const workbook = XLSX.readFile(filePath)
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const data = XLSX.utils.sheet_to_json(sheet)

  // Make it more flexible: pick either 'url' or 'file_url'
  const urls = data
    .map(row => row.url || row.file_url)  // 👈 check both possibilities
    .filter(Boolean)

  return urls
}
