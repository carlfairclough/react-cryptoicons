import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ARN: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M11.76 14.102a.97.97 0 01-.035 1.278l3.874 6.9a1.008 1.008 0 01.86.005l3.762-6.788a.976.976 0 01-.025-1.532l-4.074-7.4c-.056-.024-.072-.015-.08-.001zm-.41 1.534a1.01 1.01 0 01-.496.06l-2.492 4.387c.238.503.52.984.844 1.438.763.18 2.713.644 5.851 1.396a.974.974 0 01.181-.356zm-.539-1.883a1.02 1.02 0 01.586.073L15.559 6.5c-3.12.05-5.731.635-7.835 1.754zm-.42.176L7.335 8.483a.889.889 0 00-.332.748l.462 7.382a9.464 9.464 0 00.671 2.953l2.29-4.03a.977.977 0 01-.033-1.607zm6.6 8.998L22.88 21.4c.272-.397.514-.813.724-1.245l-2.474-4.494a1.013 1.013 0 01-.496.024l-3.818 6.887c.08.104.141.224.175.355zm-.741 1.2v2.361a.914.914 0 00.244-.11l3.623-2.313a9.661 9.661 0 002.336-2.092l-5.456 1.415a.993.993 0 01-.747.74zm-.454 0a.992.992 0 01-.75-.753 2530.22 2530.22 0 00-5.409-1.29 9.664 9.664 0 002.246 1.981l3.623 2.314c.09.058.189.098.29.121zm5.37-10.334l3.08-5.555c-2.062-1.09-4.609-1.668-7.641-1.735l3.997 7.262a1.016 1.016 0 01.564.028zm.383.241a.973.973 0 01-.027 1.402l2.313 4.203a9.465 9.465 0 00.7-3.025l.463-7.383a.89.89 0 00-.36-.769zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-20.765a.55.55 0 01.541.533v1.954l2.886 1.778-.353.711-2.533-.89v1.955l.722.533v.533L16 17.987l-1.263.355v-.533l.722-.533v-1.954l-2.577.844-.31-.667 2.887-1.777v-1.954a.55.55 0 01.541-.533z"/></svg>
)
          
ARN.defaultProps = {
  color: '#000',
  size: 32,
}
          