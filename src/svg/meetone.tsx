import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const MEETONE: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.916 21.379c.427-1.927.854-3.9 1.282-5.823.112-.449.224-.954.336-1.515.056.225.056.281.112.393a805.586 805.586 0 003.112 9.934L9.916 21.38zm7.234 3.048l.05-.176c1.066-3.253 2.076-6.507 3.141-9.76.057-.113.113-.281.169-.45.056.169.112.225.112.337.474 2.318.998 4.587 1.525 6.853l-4.997 3.196zm5.616-2.069a.553.553 0 00.268-.014c.393-.112.561-.449.449-.954-.505-2.131-.954-4.32-1.459-6.451-.28-1.122-.504-2.3-.785-3.422a.62.62 0 00-.304-.428l.024-.02-4.488-6.732s-.393-.505-1.01 0l-4.6 6.9.065.033a1.227 1.227 0 00-.177.415c-.056.45-.169.898-.28 1.347-.618 2.805-1.291 5.61-1.908 8.414-.056.337 0 .617.28.786a.664.664 0 00.364.11l6.146 3.866c.123.278.329.4.615.4.22 0 .392-.073.516-.233l6.284-4.017zm-2.843-10.57a9.214 9.214 0 01-.086.29c-1.01 3.142-2.02 6.34-3.03 9.48-.224.786-.505 1.515-.729 2.3h-.168c-1.229-4.02-2.513-8.096-3.797-12.116l3.853-5.835 3.957 5.882z"/></svg>
)
          
MEETONE.defaultProps = {
  color: '#000',
  size: 32,
}
          