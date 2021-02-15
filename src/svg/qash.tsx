import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const QASH: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-27C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5zm10.44 10.55l-.89.009-.004-.373.891-.008.004.372zm-.228-1.923l-.883.123-.051-.37.882-.122.052.37zm-.76-2.342l.154.34-.811.368-.154-.339.81-.369zM24.34 9.59l.246.28-.67.588-.245-.28.669-.588zm-1.305-1.393l.282.244-.581.674-.283-.243.582-.675zM21.48 6.938l.312.203-.485.747-.312-.202.485-.748zm-1.77-.873l.361.095-.226.861-.361-.095.227-.86zm-1.945-.478l.371.03-.074.888-.371-.031.074-.887zm-2.014-.235h.372v.891h-.372v-.891zm-1.654.235l.074.887-.372.032-.074-.888.372-.031zm-1.946.478l.226.861-.36.095-.227-.86.36-.096zm-1.769.873l.485.748-.313.202-.485-.747.313-.203zm-1.555 1.26l.581.674-.282.243-.581-.674.282-.244zm-1.304 1.39l.67.588-.247.28-.669-.587.246-.28zm-1.111 1.696l.81.369-.153.34-.811-.37.154-.339zm-.709 1.973l.883.122-.052.37-.882-.123.051-.37zm-.276 1.92l.89.008-.003.373-.89-.009.003-.372zm.082 2.092l.886-.09.037.37-.886.09-.037-.37zm.403 1.894l.868-.202.085.363-.868.202-.085-.363zm.971 2.263l-.184-.324.773-.442.185.324-.774.442zm1.262 1.587l-.271-.256.613-.647.27.256-.612.647zM9.57 24.28l-.303-.216.517-.726.303.217-.517.725zm1.664 1.111l-.33-.173.414-.788.33.173-.414.788zm1.841.708l-.368-.062.147-.878.368.062-.147.878zm1.609.302l-.007-.891.373-.004.007.891-.373.004zM6.74 16c0-5.106 4.154-9.26 9.26-9.26s9.26 4.154 9.26 9.26-4.154 9.26-9.26 9.26S6.74 21.106 6.74 16zm9.986 10.481l-.012.001-.081-.886.371-.034.012-.002.081.887-.371.034zm1.985-.418l-.155-.877.367-.065.155.878-.367.064zm1.894-.654l-.305-.837.35-.127.305.837-.35.127zm1.681-1.03l-.55-.7.292-.232.551.7-.293.231zm1.434-1.397l-.64-.618.258-.269.64.62-.258.267zm1.172-1.505l-.72-.525.22-.301.72.524-.22.302zm.952-1.79l-.842-.294.123-.352.841.294-.122.351zm.525-2.03l-.89-.04.017-.373.89.041-.017.372zm-6.833 3.075l-.278-.28-.539-.546c.625-.594 1.021-1.193.957-2.574-.005-.108.006-1.483.006-1.592l-.003-1.033c.003-2.55-.62-3.706-2.338-4.115-.195-.047-1.133-.07-1.337-.07h-.09c-.204 0-1.267.023-1.462.07-1.718.409-2.341 1.565-2.338 4.115l-.003 1.032c0 .109.01 1.485.006 1.592-.117 2.556 1.337 3.342 2.91 3.284h1.739a2.77 2.77 0 001.316-.267l.632.64.278.281c.159.15.402.158.549.012.147-.145.143-.388-.006-.549zm-2.659-.928l-.081-.001-.015-.001h-1.783a2.237 2.237 0 01-.081.002c-.374 0-.911-.095-1.344-.549-.466-.488-.689-.896-.644-1.886.004-.07.004-.071-.003-1.313a117.056 117.056 0 010-1.015c0-.426.002-.276.002-.335-.002-1.13.126-2.112.401-2.555.163-.264.445-.56 1.299-.766.168-.025 1.028-.051 1.285-.051h.092c.258 0 .993.026 1.162.051.853.206 1.135.502 1.298.766.275.443.403 1.425.402 2.555l.002.335.001.698-.002.317c-.007 1.242-.006 1.244-.003 1.313.045.99-.177 1.398-.643 1.886l-.074.073-.499-.505-.277-.28c-.159-.152-.402-.159-.55-.013-.146.145-.142.388.007.548l.278.281.356.36c-.19.057-.387.086-.586.085z"/></svg>
)
          
QASH.defaultProps = {
  color: '#000',
  size: 32,
}
          