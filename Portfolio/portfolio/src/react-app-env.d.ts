/// <reference types="react-scripts" />

declare module 'react-icons/fa' {
  import { ComponentType } from 'react';
  
  interface IconProps {
    className?: string;
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export const FaUser: ComponentType<IconProps>;
  export const FaLightbulb: ComponentType<IconProps>;
  export const FaHeart: ComponentType<IconProps>;
  export const FaRocket: ComponentType<IconProps>;
  export const FaEnvelope: ComponentType<IconProps>;
  export const FaLinkedin: ComponentType<IconProps>;
  export const FaGithub: ComponentType<IconProps>;
  export const FaCheckCircle: ComponentType<IconProps>;
  export const FaArrowRight: ComponentType<IconProps>;
  export const FaComments: ComponentType<IconProps>;
  export const FaFileAlt: ComponentType<IconProps>;
  export const FaArrowDown: ComponentType<IconProps>;
  export const FaCode: ComponentType<IconProps>;
  export const FaCogs: ComponentType<IconProps>;
}
