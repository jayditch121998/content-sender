
# 📦 Excel Upload & URL Sender API

This Node.js + Express API allows you to upload an Excel (`.xlsx`) file containing a list of file URLs. It extracts the URLs and sends them as `POST` requests to a target API endpoint with authentication.

---

## 🚀 Features

- Upload `.xlsx` files containing URLs
- Parses Excel using `xlsx`
- Sends each URL to an external API (`/api/content/send`)
- Supports dynamic `type` parameter per upload
- Built with modular controllers and services



## 📁 Project Structure


```
src/
├── routes/              # Express routes
├── controllers/         # Route logic
├── services/            # Excel parser and API sender logic
├── app.js               # App setup
uploads/                 # Temp uploaded files
.env                     # Environment config
```

## 🧪 API Usage

### `POST /api/upload-excel`

**Form-data fields**:

| Field | Type  | Required | Description                |
|-------|-------|----------|----------------------------|
| file  | File  | ✅ Yes   | `.xlsx` file with URLs     |
| type  | Text  | ✅ Yes   | Content type (e.g., `image`) |

**Sample Excel file**:

| file_url                |
|-------------------------|
| https://domain.com/1.jpg|
| https://domain.com/2.jpg|



## 🔐 Environment Variables

Create a `.env` file in the root:

```env
URL=http://127.0.0.1:8000/api/content/send
AUTH_TOKEN=your-api-token-here
```

## 🛠️ Setup

```bash
npm install
npm run dev
```

## 🧾 Tech Stack

* Node.js
* Express.js
* Multer (file upload)
* xlsx (Excel parsing)
* Axios (HTTP requests)


## 👨‍💻 Author

**Jayditch Balansi**
Backend | Laravel & Node.js | API Integrations
🔗 [GitHub](https://github.com/jayditch121998)
📧 [balansijayditch@gmail.com](balansijayditch@gmail.com)
