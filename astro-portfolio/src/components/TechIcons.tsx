import React from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiOllama,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiLangchain,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { Network, Database, Cpu, Layers } from 'lucide-react';

interface TechIconProps {
  id: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ id, className = 'w-6 h-6' }) => {
  switch (id) {
    case 'nextjs':
      return <SiNextdotjs className={`${className} text-white`} />;
    case 'react':
      return <SiReact className={`${className} text-[#58c4dc]`} />;
    case 'typescript':
      return <SiTypescript className={`${className} text-[#3178c6]`} />;
    case 'tailwind':
      return <SiTailwindcss className={`${className} text-[#38bdf8]`} />;
    case 'python':
      return <SiPython className={`${className} text-[#ffd43b]`} />;
    case 'fastapi':
      return <SiFastapi className={`${className} text-[#05998b]`} />;
    case 'java':
      return <FaJava className={`${className} text-[#f89820]`} />;
    case 'postgresql':
      return <SiPostgresql className={`${className} text-[#336791]`} />;
    case 'ollama':
      return <SiOllama className={`${className} text-white`} />;
    case 'rag-vector':
      return <Network className={`${className} text-[#a78bfa]`} />;
    case 'mcp-protocol':
      return <Layers className={`${className} text-[#38bdf8]`} />;
    case 'docker':
      return <SiDocker className={`${className} text-[#2496ed]`} />;
    case 'kubernetes':
      return <SiKubernetes className={`${className} text-[#326ce5]`} />;
    case 'linux':
      return <SiLinux className={`${className} text-[#facc15]`} />;
    default:
      return <Cpu className={`${className} text-zinc-300`} />;
  }
};
