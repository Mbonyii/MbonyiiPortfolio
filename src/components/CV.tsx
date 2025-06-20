import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, User, Book, Code } from "lucide-react";

const CV = () => {
  const education = [
    {
      degree: "ISC2 Certified in Cybersecurity (CC)",
      institution: "ISC2",
      period: "2024 - In Progress",
      description: "Comprehensive cybersecurity certification covering security principles, incident response, and risk management."
    }
  ];

  const experience = [
    {
      role: "Frontend Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description: "Developing responsive web applications using React, Next.js, and TypeScript. Focus on user experience and modern design patterns."
    }
  ];

  const certifications = [
    "ISC2 Certified in Cybersecurity (CC) - In Progress",
    "React Development",
    "TypeScript Fundamentals",
    "Next.js Framework"
  ];

  return (
    <section id="cv" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Background
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in technology, education, and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-6 pb-6">
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <Book size={24} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Education & Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-6 pb-6">
                  <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-purple-400 font-medium">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
              <CardTitle className="text-white text-2xl">Skills & Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-4 py-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CV Download */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Card className="bg-gradient-to-r from-blue-700/80 to-purple-700/80 border-blue-500/40 shadow-xl backdrop-blur-md inline-block">
            <CardHeader>
              <CardTitle className="text-white text-3xl font-extrabold mb-2 drop-shadow-lg">View My CV</CardTitle>
              <CardDescription className="text-blue-100 text-lg font-medium drop-shadow-sm">
                Get a comprehensive overview of my experience, skills, and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <a
                  href="/Mbonyii_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-bold px-10 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FileText className="mr-2" size={24} />
                    View CV (PDF)
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CV;
