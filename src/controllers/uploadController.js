const fs = require('fs')
const path = require('path')
const excelService = require('../services/excelService')
const senderService = require('../services/senderService')

exports.handleUpload = async (req, res) => {
  try {
    const type = req.body.type 
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' })

    const filePath = path.join(__dirname, '../../', req.file.path)
    const urls = excelService.extractUrls(filePath)

    console.log(`Found ${urls.length} URLs. Sending them...`)

    const results = []

    for (const url of urls) {
      try {
        const response = await senderService.sendUrlToApi(url, type)
        console.log(`✅ Sent ${url} → Status: ${response.status}`)
        results.push({ url, status: response.status })
      } catch (err) {
        console.error(`❌ Failed ${url}`, err.message)
        results.push({ url, error: err.message })
      }
    }

    fs.unlinkSync(filePath)

    return res.json({
      message: 'File processed, URLs sent',
      total: urls.length,
      results
    })
  } catch (error) {
    console.error('Error in uploadController:', error)
    return res.status(500).json({ message: 'Failed to process and send URLs' })
  }
}
