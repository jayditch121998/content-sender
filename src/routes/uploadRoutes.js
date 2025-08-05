const express = require('express')
const multer = require('multer')
const uploadController = require('../controllers/uploadController')

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/upload-excel', upload.single('file'), uploadController.handleUpload)

module.exports = router
