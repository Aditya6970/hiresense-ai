import React, { useState, useEffect } from 'react'
import '../style/interview.scss'
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate, useParams } from 'react-router-dom'

const NAV_ITEMS = [
    { id: 'technical', label: 'Technical Questions' },
    { id: 'behavioral', label: 'Behavioral Questions' },
    { id: 'roadmap', label: 'Road Map' }
]

// ── Sub-components ─────────────────────────────────────────
const QuestionCard = ({ item, index }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='q-card'>
            <div className='q-card__header' onClick={() => setOpen(!open)}>
                <span className='q-card__index'>Q{index + 1}</span>
                <p className='q-card__question'>{item.question}</p>
            </div>

            {open && (
                <div className='q-card__body'>
                    <p><strong>Intention:</strong> {item.intention}</p>
                    <p><strong>Answer:</strong> {item.answer}</p>
                </div>
            )}
        </div>
    )
}

const RoadMapDay = ({ day }) => (
    <div className='roadmap-day'>
        <h3>Day {day.day}: {day.focus}</h3>
        <ul>
            {day.tasks.map((task, i) => (
                <li key={i}>{task}</li>
            ))}
        </ul>
    </div>
)

// ── Main Component ─────────────────────────────────────────
const Interview = () => {

    const [activeNav, setActiveNav] = useState('technical')
    const [feedback, setFeedback] = useState("")   // ✅ ADDED

    const { report, getReportById, loading, getResumePdf } = useInterview()
    const { interviewId } = useParams()

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        }
    }, [interviewId])

    if (loading || !report) {
        return (
            <main className='loading-screen'>
                <h1>Loading your interview plan...</h1>
            </main>
        )
    }

    const scoreColor =
        report.matchScore >= 80 ? 'score--high' :
        report.matchScore >= 60 ? 'score--mid' : 'score--low'

    return (
        <div className='interview-page'>

            {/* 🔥 AI Feedback Button */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <button
                    onClick={() => setFeedback("Good answer 👍 Try adding real-life examples.")}
                    className='generate-btn'
                >
                    Get AI Feedback 🤖
                </button>

                {feedback && (
                    <div style={{
                        marginTop: "10px",
                        background: "#022c22",
                        color: "#4ade80",
                        padding: "10px",
                        borderRadius: "10px"
                    }}>
                        <strong>AI Feedback:</strong> {feedback}
                    </div>
                )}
            </div>

            <div className='interview-layout'>

                {/* ── Left Nav ── */}
                <nav className='interview-nav'>
                    <p>Sections</p>
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={activeNav === item.id ? 'active' : ''}
                            onClick={() => setActiveNav(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}

                    <button
                        onClick={() => getResumePdf(interviewId)}
                        className='button primary-button'
                    >
                        Download Resume
                    </button>
                </nav>

                {/* ── Center Content ── */}
                <main className='interview-content'>

                    {activeNav === 'technical' && (
                        <section>
                            <h2>Technical Questions</h2>
                            {report.technicalQuestions.map((q, i) => (
                                <QuestionCard key={i} item={q} index={i} />
                            ))}
                        </section>
                    )}

                    {activeNav === 'behavioral' && (
                        <section>
                            <h2>Behavioral Questions</h2>
                            {report.behavioralQuestions.map((q, i) => (
                                <QuestionCard key={i} item={q} index={i} />
                            ))}
                        </section>
                    )}

                    {activeNav === 'roadmap' && (
                        <section>
                            <h2>Preparation Roadmap</h2>
                            {report.preparationPlan.map((day) => (
                                <RoadMapDay key={day.day} day={day} />
                            ))}
                        </section>
                    )}

                </main>

                {/* ── Right Sidebar ── */}
                <aside className='interview-sidebar'>
                    <h3>Match Score</h3>
                    <p className={scoreColor}>{report.matchScore}%</p>

                    <h3>Skill Gaps</h3>
                    {report.skillGaps.map((gap, i) => (
                        <span key={i}>{gap.skill}</span>
                    ))}
                </aside>

            </div>
        </div>
    )
}

export default Interview