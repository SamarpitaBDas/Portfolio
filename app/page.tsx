"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Moon, Sun, Download } from "lucide-react"

export default function GamePortfolio() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState("")
  const [isDark, setIsDark] = useState(true)
  const [showResumeButton, setShowResumeButton] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => prev + 10)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const openModal = (content: string, isWelcome = false) => {
    setModalContent(content)
    setShowModal(true)
    setShowResumeButton(isWelcome)
  }

  const downloadResume = () => {
    // Create a simple resume content
    const resumeContent = `SAMARPITA DAS - FULL STACK DEVELOPER
======================================

LEVEL: 25 Software Engineer
SPECIALIZATION: Web Development Quests

POWER-UPS (SKILLS):
• JavaScript - 95%
• React - 90% 
• TypeScript - 85%
• Node.js - 80%
• Python - 75%
• CSS/Tailwind - 88%

COMPLETED QUESTS:
• E-Commerce Platform (React, Next.js, Tailwind)
• Portfolio Website (Next.js, Framer Motion, CSS)
• Task Management App (Next.js, PostgreSQL, Prisma)
• 2D Platformer Game (JavaScript, Canvas API, WebGL)

IN PROGRESS:
• AI Chat Bot (Python, TensorFlow, FastAPI)
• Puzzle Adventure (Unity, C#, Mobile)

CONTACT:
Email: john.doe@example.com
LinkedIn: linkedin.com/in/johndoe
GitHub: github.com/johndoe

© 2025 Samarpita Das - Game Developer Portfolio`

    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const skills = [
    { name: "JavaScript", level: 95, color: isDark ? "bg-blue-500" : "bg-blue-600" },
    { name: "React", level: 90, color: isDark ? "bg-cyan-500" : "bg-cyan-600" },
    { name: "TypeScript", level: 85, color: isDark ? "bg-indigo-500" : "bg-indigo-600" },
    { name: "Node.js", level: 80, color: isDark ? "bg-green-500" : "bg-green-600" },
    { name: "Python", level: 75, color: isDark ? "bg-yellow-500" : "bg-yellow-600" },
    { name: "CSS/Tailwind", level: 88, color: isDark ? "bg-purple-500" : "bg-purple-600" },
  ]

  const websites = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping website with responsive design",
      tech: ["React", "Next.js", "Tailwind"],
      status: "COMPLETED",
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio with interactive animations",
      tech: ["Next.js", "Framer Motion", "CSS"],
      status: "COMPLETED",
    },
  ]

  const applications = [
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      tech: ["Next.js", "PostgreSQL", "Prisma"],
      status: "COMPLETED",
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing",
      tech: ["Python", "TensorFlow", "FastAPI"],
      status: "IN PROGRESS",
    },
  ]

  const games = [
    {
      title: "2D Platformer Game",
      description: "Retro-style platformer with pixel art graphics",
      tech: ["JavaScript", "Canvas API", "WebGL"],
      status: "COMPLETED",
    },
    {
      title: "Puzzle Adventure",
      description: "Brain-teasing puzzle game with multiple levels",
      tech: ["Unity", "C#", "Mobile"],
      status: "IN PROGRESS",
    },
  ]

  const theme = {
    dark: {
      bg: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900",
      cardBg: "bg-slate-800",
      border: "border-cyan-400",
      text: "text-white",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      accent: "text-cyan-400",
      headerBg: "bg-slate-900",
      footerBg: "bg-slate-800",
      modalBg: "bg-slate-800"
    },
    light: {
      bg: "bg-gradient-to-b from-[#F3FDFB] via-[#BFD7ED] to-[#DCC6E0]",
      cardBg: "bg-[#F3FDFB]",
      border: "border-[#A7C7E7]",
      text: "text-[#4A4A4A]",
      textSecondary: "text-[#4A4A4A]",
      textMuted: "text-gray-600",
      accent: "text-[#A7C7E7]",
      headerBg: "bg-[#F3FDFB]",
      footerBg: "bg-[#F3FDFB]",
      modalBg: "bg-[#F3FDFB]"
    }
  }

  const currentTheme = isDark ? theme.dark : theme.light

  const ProjectSection = ({ title, projects, emoji }: { title: string; projects: any[]; emoji: string }) => (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${currentTheme.text}`}>
          {emoji} {title} {emoji}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${currentTheme.cardBg} border-2 ${currentTheme.border} p-6 hover:border-yellow-400 transition-colors hover:shadow-lg hover:shadow-cyan-400/20`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className={`text-xl font-bold ${currentTheme.text}`}>{project.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded font-bold ${
                      project.status === "COMPLETED" ? "bg-green-500 text-black" : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className={currentTheme.textSecondary}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-2 py-1 ${isDark ? 'bg-blue-600' : 'bg-[#A7C7E7]'} text-white text-xs rounded`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() =>
                    openModal(
                      `Project: ${project.title}\n\n${project.description}\n\nTechnologies: ${project.tech.join(", ")}`,
                    )
                  }
                  className={`w-full ${isDark ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-[#A7C7E7] hover:bg-[#BFD7ED]'} text-white font-bold`}
                >
                  VIEW DETAILS
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} font-mono relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-4 h-4 ${isDark ? 'bg-cyan-400' : 'bg-[#A7C7E7]'} animate-pulse`}></div>
        <div className={`absolute top-20 right-20 w-3 h-3 ${isDark ? 'bg-yellow-400' : 'bg-[#F7C8C8]'} animate-bounce`}></div>
        <div className={`absolute bottom-20 left-20 w-5 h-5 ${isDark ? 'bg-green-400' : 'bg-[#DCC6E0]'} animate-ping`}></div>
        <div className={`absolute bottom-10 right-10 w-4 h-4 ${isDark ? 'bg-purple-400' : 'bg-[#BFD7ED]'} animate-pulse`}></div>
      </div>

      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.headerBg} bg-opacity-95 border-b-2 ${currentTheme.border} p-4`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex gap-6">
            <div className={`${currentTheme.accent} font-bold`}>LEVEL: {currentLevel}</div>
            <div className={`${isDark ? 'text-yellow-400' : 'text-[#F7C8C8]'} font-bold`}>SCORE: {score.toLocaleString()}</div>
            <div className="text-red-400">❤️ ❤️ ❤️</div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 ${isDark ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-[#DCC6E0] hover:bg-[#F7C8C8]'} text-white`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <div className={`${isDark ? 'text-green-400' : 'text-[#A7C7E7]'} animate-pulse font-bold`}>PORTFOLIO.EXE</div>
          </div>
        </div>
      </div>

      <div className="pt-20 px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className={`border-4 ${currentTheme.border} ${currentTheme.cardBg} bg-opacity-95 p-8 rounded-lg shadow-2xl shadow-cyan-400/20`}>
              <h1 className={`text-6xl font-bold mb-4 ${currentTheme.accent} animate-pulse`}>SAMARPITA DAS</h1>
              <p className={`text-xl ${currentTheme.textSecondary} mb-6`}>&gt; Full Stack Developer & Game Enthusiast</p>
              <div className={`text-lg ${currentTheme.textSecondary} space-y-2`}>
                <p>&gt; pre final lyear student ( B.Tech )</p>
                <p>&gt; Specializing in Web Development Quests</p>
                <p>&gt; Ready for New Adventures!</p>
              </div>
              <Button
                onClick={() =>
                  openModal(
                    "Welcome to my portfolio! I'm a passionate developer who loves creating digital experiences. Ready to embark on this journey together?",
                    true
                  )
                }
                className={`mt-6 ${isDark ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-[#A7C7E7] hover:bg-[#BFD7ED]'} text-white font-bold px-8 py-3 text-lg border-2 ${currentTheme.border}`}
              >
                PRESS START
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-12 ${currentTheme.text}`}>⚡ POWER-UPS ACQUIRED ⚡</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className={`${currentTheme.cardBg} border-2 ${currentTheme.border} p-6 hover:shadow-lg hover:shadow-cyan-400/20`}
                >
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold ${currentTheme.text}`}>{skill.name}</h3>
                    <div className={`w-full ${isDark ? 'bg-slate-700' : 'bg-[#BFD7ED]'} rounded-full h-4 border ${currentTheme.border}`}>
                      <div
                        className={`h-full rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className={`text-right ${currentTheme.accent} font-bold`}>{skill.level}%</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ProjectSection title="WEBSITES" projects={websites} emoji="🌐" />
        <ProjectSection title="APPLICATIONS" projects={applications} emoji="💻" />
        <ProjectSection title="GAMES" projects={games} emoji="🎮" />

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${currentTheme.text}`}>🎯 GET IN TOUCH 🎯</h2>
            <Card className={`${currentTheme.cardBg} border-4 ${isDark ? 'border-yellow-400' : 'border-[#F7C8C8]'} p-8 shadow-lg ${isDark ? 'shadow-yellow-400/20' : 'shadow-[#F7C8C8]/20'}`}>
              <div className="space-y-6">
                <p className={`text-xl ${currentTheme.textSecondary}`}>Ready to team up for your next project?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    onClick={() =>
                      openModal(
                        "Email: john.doe@example.com\n\nFeel free to reach out for any opportunities or collaborations!",
                      )
                    }
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3"
                  >
                    📧 EMAIL
                  </Button>
                  <Button
                    onClick={() =>
                      openModal("LinkedIn: linkedin.com/in/johndoe\n\nConnect with me for professional networking!")
                    }
                    className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3"
                  >
                    💼 LINKEDIN
                  </Button>
                  <Button
                    onClick={() =>
                      openModal("GitHub: github.com/johndoe\n\nCheck out my code repositories and contributions!")
                    }
                    className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-3"
                  >
                    🐙 GITHUB
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <footer className={`py-12 text-center border-t-2 ${currentTheme.border} ${currentTheme.footerBg} bg-opacity-50`}>
          <div className="space-y-4">
            <p className={`${currentTheme.accent} text-xl font-bold`}>COMPLETED!</p>
            <p className={currentTheme.textSecondary}>Thanks for playing through my portfolio</p>
            <p className={currentTheme.textMuted}>© 2025 Samarpita Das - All Rights Reserved</p>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <Card className={`${currentTheme.modalBg} border-4 ${currentTheme.border} p-8 max-w-md w-full shadow-lg shadow-cyan-400/20`}>
            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${currentTheme.accent}`}>SYSTEM MESSAGE</h3>
              <p className={`${currentTheme.textSecondary} whitespace-pre-line`}>{modalContent}</p>
              <div className="space-y-2">
                {showResumeButton && (
                  <Button
                    onClick={downloadResume}
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    DOWNLOAD RESUME
                  </Button>
                )}
                <Button
                  onClick={() => {
                    setShowModal(false)
                    setShowResumeButton(false)
                  }}
                  className="w-full bg-red-500 hover:bg-red-400 text-white font-bold"
                >
                  CLOSE [ESC]
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}