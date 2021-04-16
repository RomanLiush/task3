import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [color, setColor] = useState('');
    const [isDot, setDot] = useState(false);
    const [width, setWidth] = useState(2);

    const widthArr = [];
    useEffect(() => {
        widthArr.push(1);
        console.log(widthArr, 'EFFECT')
    }, [width])

    const canvas = document.getElementById('canvas');
    const colorID = document.getElementById('color');
    const ctx = canvas.getContext("2d");

    let str = '';
    const theColor = colorID !== null ? str = colorID.value : str === '';

    let dotted = '';
    (isDot === false) ? dotted = 0.1 : dotted = 1;

    if (colorID) {
        colorID.addEventListener("input",  () => {
            setColor(colorID.value)
            document.getElementById('canvas').innerHTML = colorID.value;
        }, false);
    }
    for (let i = -100; i < 100; i += dotted) {
        ctx.fillStyle=color;
        ctx.fillRect(250 + i * 10,250 - Math.pow(i,2),width,3);
    }

  return (
    <div className="App">
      <input className={'colorGraph'}
             id={'color'}
             placeholder={'Change color'}
             type={'color'}
             onClick={() => {
                 setColor(theColor);
             }}
      />

      <div className={'widthGraph'}
           onClick={() => {
               setWidth(width + 1);
           }}
      > Increase the width</div>

      <div className={'widthGraph'}
           onClick={() => {
               setWidth(width - widthArr.length - 3);
           }}
      > Reduce the width</div>

        <div className={'dottedLineGraph'}
           onClick={() => {
               setDot(prevState => !prevState);
           }}
      >Change line</div>
    </div>
  );
}

export default App;
