import {
    Code,
    Brain,
    Server,
    Layout,
    Database,
    Zap,
    Mail,
    Sparkles,
    Cpu
} from 'lucide-react';

// Import brand icons from react-icons
import {
    SiPython,
    SiCplusplus,
    SiC,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiOpencv,
    SiFastapi,
    SiDjango,
    SiStreamlit,
    SiReact,
    SiTailwindcss,
    SiMysql,
    SiGit,
    SiDocker,
    SiVercel
} from 'react-icons/si';
import { FaJava, FaServer } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

export const personalInfo = {
    name: "Vikas HL",
    role: "B.E. Student & AI Enthusiast",
    tagline: "Architecting intelligence with Python, Deep Learning & scalable Backend systems.",
    email: "vikaslokesh360@gmail.com",
    phone: "+91 8867018071",
    location: "Bangalore, India",
    linkedin: "https://linkedin.com/in/vikas-h-l-396081293",
    github: "https://github.com/VIKASHL25",
    leetcode: "https://leetcode.com/u/Vikashl/",
    instagram: "https://instagram.com/_vikashl",
};

export const skills = [
    {
        category: "Languages",
        icon: Code,
        items: [
            { name: "Python", icon: SiPython },
            { name: "Java", icon: FaJava },
            { name: "C++", icon: SiCplusplus },
            { name: "C", icon: SiC }
        ]
    },
    {
        category: "Machine Learning",
        icon: Brain,
        items: [
            { name: "Tensorflow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Scikit-learn", icon: SiScikitlearn },
            { name: "Pandas", icon: SiPandas },
            { name: "NumPy", icon: SiNumpy },
            { name: "OpenCV", icon: SiOpencv }
        ]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "FastAPI", icon: SiFastapi },
            { name: "Django", icon: SiDjango },
            { name: "REST APIs", icon: TbApi },
            { name: "Microservices", icon: FaServer }
        ]
    },
    {
        category: "Frontend",
        icon: Layout,
        items: [
            { name: "Streamlit", icon: SiStreamlit },
            { name: "React.js", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ]
    },
    {
        category: "DevOps & Tools",
        icon: Database,
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "Git", icon: SiGit },
            { name: "Docker", icon: SiDocker },
            { name: "Vercel", icon: SiVercel }
        ]
    },
];

export const projects = [
    {
        title: "AI Tax Guide",
        tech: "Python, React.js, NLP",
        desc: "An intelligent financial assistant integrating LLMs to interpret tax queries. Features automated income deduction calculations and real-time filing guidance.",
        icon: Zap,
        link: "https://github.com/VIKASHL25/AI-TAX-GUIDE.git"
    },
    {
        title: "AI Gmail Analyzer",
        tech: "Python, Gmail API, Data Viz",
        desc: "Productivity tool that mines inbox data to visualize communication patterns. Automates classification and summarization of high-volume email streams.",
        icon: Mail,
        link: "https://github.com/VIKASHL25/AI-Powered-Gmail-Analyzer.git"
    },
    {
        title: "Visual Language Summarizer",
        tech: "Ollama VLM, Streamlit, Python",
        desc: "Computer vision system utilizing Ollama's VLM to generate context-aware textual summaries from complex imagery with prompt optimization.",
        icon: Sparkles,
        link: "https://github.com/VIKASHL25/Image-Summarization-Using-Ollama-VLM.git"
    },
    {
        title: "Deep Colorization GAN",
        tech: "PyTorch, GANs, CNN",
        desc: "Generative Adversarial Network capable of hallucinating realistic colors for grayscale historical archives using Lab color-space transformation.",
        icon: Cpu,
        link: "https://github.com/VIKASHL25/Black-and-white-image-colorization.git"
    }
];
