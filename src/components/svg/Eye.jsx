import './Eye.css'

const Eye = (props) => (
  <svg
    viewBox="-20 -200 320 400"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g class="eye" strokeWidth={25} fill="none">
      <g class="eye-lashes" stroke="currentColor">
        <line x1={140} x2={140} y1={105} y2={170} />
        <line x1={70} x2={10} y1={75} y2={130} />
        <line x1={210} x2={270} y1={75} y2={130} />
      </g>
      <path class="eye-bottom" d="m0,0q140,190 280,0" stroke="currentColor" />
      <path class="eye-top" d="m0,0q140,190 280,0" stroke="currentColor" />
      <circle
        class="eye-pupil"
        cx={140}
        cy={0}
        r={40}
        fill="currentColor"
        stroke="none"
      />
    </g>
  </svg>
);
export default Eye;