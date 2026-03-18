import axios from "axios";

// ✅ FIXED BASE URL
const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})

/**
 * @description Generate interview report
 */
export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {
    try {
        const formData = new FormData()
        formData.append("jobDescription", jobDescription)
        formData.append("selfDescription", selfDescription)
        formData.append("resume", resumeFile)

        const response = await api.post("/interview", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        return response.data
    } catch (err) {
        console.log("Generate Report Error:", err?.response?.data || err.message)
        return null
    }
}

/**
 * @description Get interview report by ID
 */
export const getInterviewReportById = async (interviewId) => {
    try {
        const response = await api.get(`/interview/report/${interviewId}`)
        return response.data
    } catch (err) {
        console.log("Get Report Error:", err?.response?.data || err.message)
        return null
    }
}

/**
 * @description Get all interview reports
 */
export const getAllInterviewReports = async () => {
    try {
        const response = await api.get("/interview")
        return response.data
    } catch (err) {
        console.log("Get All Reports Error:", err?.response?.data || err.message)
        return { interviewReports: [] }   // ✅ prevents crash
    }
}

/**
 * @description Generate resume PDF
 */
export const generateResumePdf = async ({ interviewReportId }) => {
    try {
        const response = await api.post(`/interview/resume/pdf/${interviewReportId}`, null, {
            responseType: "blob"
        })

        return response.data
    } catch (err) {
        console.log("Resume PDF Error:", err?.response?.data || err.message)
        return null
    }
}