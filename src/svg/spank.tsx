import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SPANK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-7.541-9.859l.785 2.53 1.412-.425-.044-.143 1.499 2.189 1.224-.814-.104-.15L15.328 27l.93-1.13-.161-.128 2.54.96.529-1.358-.135-.05 2.654.182.103-1.45-.205-.015 2.652-.603-.333-1.417-.24.055 2.398-1.365-.738-1.26-.23.132L27 17.537l-1.08-.992-.18.19 1.23-2.482-1.328-.638-.107.218.436-2.712-1.459-.228-.03.19-.43-2.672-1.458.228.01.065L21.46 6.39l-1.327.638.038.076-1.786-1.886-1.08.992.09.094L15.101 5l-.738 1.26.165.094-2.629-.598-.332 1.417.249.056-2.752.19.102 1.45.308-.02-2.629.994.53 1.358.28-.107-2.2 1.756.929 1.13.145-.116L5 16.098l1.224.813.098-.144-.797 2.57 1.411.426.046-.148v2.667H8.46zm0-1.728v-2.43h-.97l.723-2.331-.933-.282 1.385-2.023-.811-.539 1.922-1.533-.616-.75 2.289-.865-.36-.923 2.432-.167-.07-.969 2.37.539.217-.928 2.105 1.197.476-.812 1.663 1.757.69-.633 1.074 2.17.846-.406.386 2.4.939-.147-.386 2.401.982.154-1.083 2.186.898.432-1.683 1.778.73.67-2.13 1.212.494.844-2.387.543.219.935-2.436-.168-.066.94-2.276-.861-.338.867-1.888-1.507-.609.74-1.362-1.99-.798.53-.716-2.309zm7.25-2.725a.93.93 0 01-.389.793c-.26.186-.62.279-1.082.279-1.243 0-1.865-.522-1.865-1.565h-1.95c0 .61.156 1.147.467 1.61.315.463.77.83 1.366 1.098a4.838 4.838 0 001.982.396c1.045 0 1.876-.232 2.494-.695.617-.468.926-1.11.926-1.929 0-.735-.252-1.35-.758-1.844-.505-.493-1.31-.907-2.416-1.24-.6-.182-1.055-.377-1.366-.584-.307-.208-.46-.466-.46-.773 0-.329.132-.593.395-.792.263-.204.633-.305 1.108-.305.492 0 .874.12 1.146.363.272.238.408.574.408 1.007h1.943a2.7 2.7 0 00-.44-1.52 2.826 2.826 0 00-1.224-1.032c-.527-.247-1.127-.37-1.801-.37-.67 0-1.274.112-1.814.337-.535.225-.947.54-1.237.942a2.284 2.284 0 00-.427 1.364c0 .982.535 1.764 1.606 2.344.393.212.926.428 1.6.649.674.216 1.14.424 1.399.623.26.195.389.476.389.844zm5.93-5.798l-2.249-.32-1.167 7.064 1.543.108zm-1.634 7.566l-2.068-.5-.471 2.322 2.052.599z" fill-rule="evenodd"/></svg>
)
          
SPANK.defaultProps = {
  color: '#000',
  size: 32,
}
          