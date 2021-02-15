import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const FIL: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.068-19.092l-4.217-.618-.237 1.615 4.12.603a31.19 31.19 0 00-.124.715l-.176 1.063-4.096-.6-.222 1.617 4.036.592c-.909 4.494-1.628 6.44-2.535 7.45-.091.106-.378.264-.625.293-.341.04-.62-.131-.831-.63a1.686 1.686 0 00-.541-.722 1.245 1.245 0 00-.89-.242c-.205-.028-.587.251-.688.601-.136.47.174.97.947 1.455 1.515.95 2.97.657 4.267-.497.779-.694 1.488-1.741 1.664-2.18.455-.88 1.1-3.106 1.588-5.184l4.233.62.237-1.615-4.137-.606a31.625 31.625 0 00.126-.714l.175-1.064 4.096.6.222-1.617-4.036-.59c.61-3.012 1.048-4.465 1.524-5.258.137-.226.27-.398.484-.635l.235-.26c.09-.106.378-.264.625-.293.34-.04.62.132.83.63.136.32.32.559.542.722.288.212.59.271.89.242.205.028.587-.251.688-.6.136-.471-.174-.97-.947-1.455l-.133.211.133-.211c-1.515-.951-2.97-.658-4.267.497-.78.693-1.489 1.742-1.664 2.18-.475.917-.924 2.322-1.296 3.885z"/></svg>
)
          
FIL.defaultProps = {
  color: '#000',
  size: 32,
}
          