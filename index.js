const app = require('./src/app')
const port = process.env.PORT || 4000
require('dotenv').config()

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
