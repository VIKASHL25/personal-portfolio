import {
    Code,
    Brain,
    Server,
    Layout,
    Database,
    Zap,
    Mail,
    Sparkles,
    Cpu,
    MessageSquare,
    Calculator,
    Video,
    ShoppingBag,
    Users,
    GraduationCap,
    Sprout,
     
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
    SiFastapi,
    SiDjango,
    SiStreamlit,
    SiMysql,
    SiGit,
    SiVercel,
    SiHtml5,
    SiCss3,
    SiLangchain,
    SiLeetcode,
    SiMongodb,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { Scale } from 'lucide-react';
import { GiCricketBat } from "react-icons/gi";



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
            { name: "C", icon: SiC },
            { name: "Data Structures & Algorithms", icon: SiLeetcode }
        ]
    },
    {
        category: "Machine Learning",
        icon: Brain,
        items: [
            { name: "Deep Learning", icon: Brain },
            { name: "Gen AI", icon: Sparkles },
            { name: "Tensorflow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Scikit-learn", icon: SiScikitlearn },
            { name: "Pandas", icon: SiPandas },
            { name: "NumPy", icon: SiNumpy },
            { name: "LangChain", icon: SiLangchain },
            { name: "LangGraph", icon: SiLangchain },
            { name: "LLM", icon: Brain }
        ]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "FastAPI", icon: SiFastapi },
            { name: "Django", icon: SiDjango },
            { name: "REST APIs", icon: TbApi }
        ]
    },
    {
        category: "Frontend",
        icon: Layout,
        items: [
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "Streamlit", icon: SiStreamlit }
        ]
    },
    {
        category: "DevOps & Tools",
        icon: Database,
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "Git", icon: SiGit },
            { name: "Vercel", icon: SiVercel },
            {name: "MongoDb", icon: SiMongodb}
        ]
    },
];

export const projects = [
    {
    title: "Nyaya-Sahayak (AI Legal Assistant)",
    tech: "Python, Streamlit, MongoDB, ChromaDB, LangChain, LLM (Groq)",
    desc: "A document-centric AI legal assistant that uses RAG and LLMs to analyze legal documents, simplify complex terms, detect risks, and enable conversational querying with specialized agents.",
    icon: Scale,
    link: "https://github.com/VIKASHL25/nyaya-sahayak.git"
},
    
    {
        title: "DRONA: Cricket Tactical Intelligence Engine",
        tech: "Python, Streamlit, LLM, Matplotlib, RapidAPI",
        desc: "An AI-powered cricket analytics system that provides real-time match insights, win probability predictions, and strategic field placement recommendations using simulation models and LLM-based coaching.",
        icon: GiCricketBat,
        link: "https://github.com/VIKASHL25/DRONACricketAI.git"
    },
    {
        title: "AI Tax Guide",
        tech: "Python, React.js, NLP",
        desc: "An intelligent financial assistant integrating LLMs to interpret tax queries. Features automated income deduction calculations and real-time filing guidance.",
        icon: Zap,
        link: "https://github.com/VIKASHL25/AI-TAX-GUIDE.git"
    },

    {
        title: "Visual Language Summarizer",
        tech: "Ollama VLM, Streamlit, Python",
        desc: "Computer vision system utilizing Ollama's VLM to generate context-aware textual summaries from complex imagery with prompt optimization.",
        icon: Sparkles,
        link: "https://github.com/VIKASHL25/Image-Summarization-Using-Ollama-VLM.git"
    },

    {
        title: "RAG Conversation Engine",
        tech: "Python, LangChain, LLM",
        desc: "An architectural blueprint for RAG systems, enabling context-aware AI conversations with custom knowledge bases.",
        icon: MessageSquare,
        link: "https://github.com/VIKASHL25/Rag-conversation-engine.git"
    },
    {
        title: "AI SQL Chatbot",
        tech: "Python, SQL, LLM, LangChain",
        desc: "An autonomous agent capable of translating natural language queries into complex SQL commands for database interaction.",
        icon: Database,
        link: "https://github.com/VIKASHL25/AI-sql-chatbot.git"
    },

    {
        title: "YouTube RAG System",
        tech: "Python, OpenAI, YouTube API",
        desc: "IntelFlow: A content intelligence system that retrieves and synthesizes information directly from YouTube video transcripts.",
        icon: Video,
        link: "https://github.com/VIKASHL25/youtube-rag-system.git"
    },
    {
        title: "Smart Retail ML",
        tech: "Python, Computer Vision",
        desc: "A retail analytics solution using machine learning to interpret customer behavior and optimize store layouts from visual data.",
        icon: ShoppingBag,
        link: "https://github.com/VIKASHL25/smart-retail-ml.git"
    },

    {
        title: "Customer Churn Prediction",
        tech: "Python, Scikit-learn, Pandas",
        desc: "A predictive classifier identifying at-risk customers to enable proactive retention strategies using historical data patterns.",
        icon: Users,
        link: "https://github.com/VIKASHL25/Customer-churn-prediction.git"
    },

];
