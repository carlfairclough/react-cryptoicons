import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const EBST: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M9.928 16.574H7.123L4 19.072h6.522A8.05 8.05 0 0017.954 24C22.398 24 26 20.418 26 16s-3.602-8-8.046-8a8.049 8.049 0 00-7.46 4.996H4l3.123 2.498h2.8a8.076 8.076 0 00.005 1.08zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.537-15.851v.306c0 .102-.006.204-.02.306H15.48a2.262 2.262 0 00.849 1.617c.244.198.52.354.829.469s.63.172.964.172c.578 0 1.067-.105 1.465-.316.399-.21.726-.5.983-.87l1.543 1.224c-.913 1.225-2.237 1.838-3.972 1.838-.72 0-1.382-.112-1.986-.335a4.693 4.693 0 01-1.571-.948 4.269 4.269 0 01-1.041-1.502c-.251-.593-.376-1.266-.376-2.019 0-.74.125-1.413.376-2.019s.594-1.122 1.031-1.55c.437-.427.955-.759 1.552-.995s1.244-.354 1.938-.354c.643 0 1.237.105 1.783.316s1.019.523 1.418.937c.398.415.71.932.935 1.55s.337 1.343.337 2.173zm-2.314-1.034a2.8 2.8 0 00-.125-.842 1.923 1.923 0 00-.395-.708c-.18-.204-.408-.367-.685-.488s-.6-.182-.973-.182c-.694 0-1.282.208-1.765.622a2.261 2.261 0 00-.8 1.598z"/></svg>
)
          
EBST.defaultProps = {
  color: '#000',
  size: 32,
}
          