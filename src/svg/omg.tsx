import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const OMG: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.671 12C5.423 12 4 13.695 4 15.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C11.345 13.683 9.922 12 7.67 12zm16.687.002c-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266v-3.916h-3.41v1.26h2.102l-.027.172c-.184.95-.928 1.396-1.867 1.396-1.423 0-2.216-1.046-2.216-2.553 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39l-.026-.19c-.26-1.554-1.505-2.416-3.164-2.416zm-10.331.176H12.3v7.323h1.245v-5.159l1.884 5.159h1.224l1.882-5.159v5.159h1.276v-7.323h-1.725l-2.03 5.598-2.03-5.598zm-6.356 1.13c1.433 0 2.293 1.089 2.293 2.537 0 1.447-.858 2.538-2.293 2.538-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541z"/></svg>
)
          
OMG.defaultProps = {
  color: '#000',
  size: 32,
}
          