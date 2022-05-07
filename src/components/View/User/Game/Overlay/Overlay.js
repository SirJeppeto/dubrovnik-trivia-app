import './Overlay.css';

const Overlay = (props) => {
  
  return (
    <div className="Overlay">
      <div className='Overlay__start'>
        <p className='Overlay__start__scores' onClick={(event) => {event.stopPropagation(); props.toggleScreen();}}>scores &#62;</p>
        <p className='Overlay__start__name'>du trivia</p>
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.28 230.28" onClick={() => {props.setStartShow(false)}}>
                <g id="circle">
            <path className="cls-1" d="M150,97.16A52.84,52.84,0,1,0,202.84,150,52.84,52.84,0,0,0,150,97.16Zm0,93.56A40.72,40.72,0,1,1,190.72,150,40.71,40.71,0,0,1,150,190.72Z" transform="translate(-34.86 -34.86)"/>
          </g>
          <path id="play" className="cls-1" d="M172.94,143.45l-27.56-15.92A7.57,7.57,0,0,0,134,134.09v31.82a7.57,7.57,0,0,0,11.35,6.56l27.56-15.92A7.56,7.56,0,0,0,172.94,143.45Z" transform="translate(-34.86 -34.86)"/>
          <g id="arrows" className="arrows">
            <path className="cls-2" d="M161.93,67.48,134.74,83.17a7.46,7.46,0,0,1-11.2-6.44V69.11a57.46,57.46,0,0,0-57.47,57.47H49A74.58,74.58,0,0,1,123.54,52V45.32a7.47,7.47,0,0,1,11.2-6.45l27.19,15.7A7.45,7.45,0,0,1,161.93,67.48Z" transform="translate(-34.86 -34.86)"/>
            <path className="cls-2" d="M138.07,232.52l27.19-15.69a7.46,7.46,0,0,1,11.2,6.44v7.62a57.46,57.46,0,0,0,57.47-57.47H251A74.58,74.58,0,0,1,176.46,248v6.68a7.47,7.47,0,0,1-11.2,6.45l-27.19-15.7A7.45,7.45,0,0,1,138.07,232.52Z" transform="translate(-34.86 -34.86)"/>
            <path className="cls-2" d="M232.52,161.93l-15.69-27.19a7.46,7.46,0,0,1,6.44-11.2h7.62a57.46,57.46,0,0,0-57.47-57.47V49A74.58,74.58,0,0,1,248,123.54h6.68a7.47,7.47,0,0,1,6.45,11.2l-15.7,27.19A7.45,7.45,0,0,1,232.52,161.93Z" transform="translate(-34.86 -34.86)"/>
            <path className="cls-2" d="M67.48,138.07l15.69,27.19a7.46,7.46,0,0,1-6.44,11.2H69.11a57.46,57.46,0,0,0,57.47,57.47V251A74.58,74.58,0,0,1,52,176.46H45.32a7.47,7.47,0,0,1-6.45-11.2l15.7-27.19A7.45,7.45,0,0,1,67.48,138.07Z" transform="translate(-34.86 -34.86)"/>
          </g>
          <g id="play-2" data-name="play" className="cls-3">
            <rect className="cls-1" x="97.61" y="91.51" width="11.53" height="47.26" rx="5.76"/>
            <rect className="cls-1" x="123.25" y="91.51" width="11.53" height="47.26" rx="5.76"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Overlay;