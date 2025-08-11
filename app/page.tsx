"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function GamePortfolio() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => prev + 10)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const openModal = (content: string) => {
    setModalContent(content)
    setShowModal(true)
  }

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-blue-500" },
    { name: "React", level: 90, color: "bg-cyan-500" },
    { name: "TypeScript", level: 85, color: "bg-indigo-500" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Python", level: 75, color: "bg-yellow-500" },
    { name: "CSS/Tailwind", level: 88, color: "bg-purple-500" },
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

  const ProjectSection = ({ title, projects, emoji }: { title: string; projects: any[]; emoji: string }) => (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {emoji} {title} {emoji}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-2 border-cyan-400 p-6 hover:border-yellow-400 transition-colors hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded font-bold ${
                      project.status === "COMPLETED" ? "bg-green-500 text-black" : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
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
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white font-mono relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-green-400 animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-purple-400 animate-pulse"></div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-95 border-b-2 border-cyan-400 p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex gap-6">
            <div className="text-cyan-400 font-bold">LEVEL: {currentLevel}</div>
            <div className="text-yellow-400 font-bold">SCORE: {score.toLocaleString()}</div>
            <div className="text-red-400">❤️ ❤️ ❤️</div>
          </div>
          <div className="text-green-400 animate-pulse font-bold">PORTFOLIO.EXE</div>
        </div>
      </div>

      <div className="pt-20 px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="border-4 border-cyan-400 bg-slate-800 bg-opacity-95 p-8 rounded-lg shadow-2xl shadow-cyan-400/20">
              <h1 className="text-6xl font-bold mb-4 text-cyan-400 animate-pulse">SAMARPITA DAS</h1>
              <p className="text-xl text-gray-300 mb-6">&gt; Full Stack Developer & Game Enthusiast</p>
              <div className="text-lg text-gray-300 space-y-2">
                <p>&gt; pre final year btech</p>
                <p>&gt; Specializing in Web Development Quests</p>
                <p>&gt; Ready for New Adventures!</p>
              </div>
              <Button
                onClick={() =>
                  openModal(
                    "Welcome to my portfolio! I'm a passionate developer who loves creating digital experiences.",
                  )
                }
                className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 text-lg border-2 border-cyan-400"
              >
                PRESS START
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">⚡ POWER-UPS ACQUIRED ⚡</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-slate-800 border-2 border-cyan-400 p-6 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <div className="w-full bg-slate-700 rounded-full h-4 border border-cyan-400">
                      <div
                        className={`h-full rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-cyan-400 font-bold">{skill.level}%</div>
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
            <h2 className="text-4xl font-bold mb-8 text-white">🎯 GET IN TOUCH 🎯</h2>
            <Card className="bg-slate-800 border-4 border-yellow-400 p-8 shadow-lg shadow-yellow-400/20">
              <div className="space-y-6">
                <p className="text-xl text-gray-300">Ready to team up for your next project?</p>
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

        <footer className="py-12 text-center border-t-2 border-cyan-400 bg-slate-800 bg-opacity-50">
          <div className="space-y-4">
            <p className="text-cyan-400 text-xl font-bold">COMPLETED</p>
            <p className="text-gray-300">Thanks for playing through my portfolio</p>
            <p className="text-gray-400">© 2025 Samarpita Das - All Rights Reserved</p>
          </div>
        </footer>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <Card className="bg-slate-800 border-4 border-cyan-400 p-8 max-w-md w-full shadow-lg shadow-cyan-400/20">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">SYSTEM MESSAGE</h3>
              <p className="text-gray-300 whitespace-pre-line">{modalContent}</p>
              <Button
                onClick={() => setShowModal(false)}
                className="w-full bg-red-500 hover:bg-red-400 text-white font-bold"
              >
                CLOSE [ESC]
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
