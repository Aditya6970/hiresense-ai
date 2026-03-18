import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>

        {/* 🔥 Add this */}
        <div style={{ background: "#0f172a", color: "white", minHeight: "100vh" }}>
          
          <h1 style={{ textAlign: "center", padding: "10px", color: "#6366f1" }}>
            HireSense AI 🚀
          </h1>

          <RouterProvider router={router} />

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Made by Aditya Rai
          </p>

        </div>

      </InterviewProvider>
    </AuthProvider>
  )
}









export default App
