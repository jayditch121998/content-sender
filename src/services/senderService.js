const axios = require('axios')

exports.sendUrlToApi = async (url, content_type) => {
  console.log('content_type: ', content_type);
  const service_code = content_type == 'image' ? process.env.IMAGE_SERVICE_CODE : process.env.VIDEO_SERVICE_CODE
  const postData = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    service_code: service_code,
    contributor: "anubissss",
    content: {
      type: content_type,
      url: url,
      notes: ""
    },
    additional: {

    }
  }
  console.log('process.env.SEND_TO: ', process.env.SEND_TO);
  const response = await axios.post(
    // 'http://127.0.0.1:8000/api/content/send',
    process.env.SEND_TO,
    `data=${encodeURIComponent(JSON.stringify(postData))}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      maxRedirects: 20
    }
  )

  return response
}
