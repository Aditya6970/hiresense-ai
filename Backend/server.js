require("dotenv").config()

const app = require("./src/app")
const connectToDB = require("./src/config/database")
const cors = require("cors")

// 🔍 DEBUG ENV VARIABLES
console.log("🔐 JWT_SECRET:", process.env.JWT_SECRET)
console.log("🌐 MONGO_URI:", process.env.MONGO_URI ? "Loaded ✅" : "Not Loaded ❌")
console.log("🤖 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Loaded ✅" : "Not Loaded ❌")

// ✅ CONNECT DATABASE
connectToDB()

// ✅ CORS FIX
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// ✅ PORT
const PORT = process.env.PORT || 3000

// ✅ START SERVER
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`)
})