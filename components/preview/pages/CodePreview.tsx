import { React } from '../../../deps.tsx';



const CodePreview: any = (props: any) => {
const {elementsArr, setElementsArr} = props;
// const [copySuccess, setCopySuccess] = React.useState('');
//   const textAreaRef = React.useRef('');

//   function copyToClipboard(e) {
//     textAreaRef.current.select();
//     document.execCommand('copy');
//     // This is just personal preference.
//     // I prefer to not show the whole text area selected.
//     e.target.focus();
//     setCopySuccess('Copied!');
//   };
// const {inputText, setInputText, textAlign, setTextAlign, textDecoration, setTextDecoration, backgroundColor, setBackgroundColor, color, setColor, margin, setMargin,width, setWidth, height, setHeight, padding, setPadding, }= props;
// console.log("elementsArr inside code preview", elementsArr);
let testArray: string[]= [];
const htmlTags = elementsArr.map((elements: any, index: any) =>{
  let eleFirst:any;
  let eleSecond:any;
  let midText: any;
  let endBr: any;
  if(elementsArr[index].element === 'div') {
    eleFirst = `<div `
    endBr = '>'
    eleSecond = `</div>`
    
  }
  if(elementsArr[index].element === 'paragraph') {
    eleFirst = `<p `
    endBr = '>'
    eleSecond = `</p>`
  }
  if(elementsArr[index].element === 'img') {
    eleFirst = `<img `
    endBr = ' src='
    eleSecond = `/>`
  }
  if(elementsArr[index].element === 'button') {
    eleFirst = `<button`
    endBr = '>'
    eleSecond = `</button>`
  }
  if(elementsArr[index].element === 'form') {
    eleFirst = `<form `
    endBr = '>'
    eleSecond= `</form>`
  }
  if(elementsArr[index].element === 'ol') {
    eleFirst = `<ol `
    endBr = '>'
    eleSecond = `</ol>`
  }
  if(elementsArr[index].element === 'ul') {
    eleFirst = `<ul `
    endBr = '>'
    eleSecond = `</ul>`
  }
  if(elementsArr[index].element === 'h1') {
    eleFirst = `<h1 `
    endBr = '>'
    eleSecond =`</h1>`
  }
  if(elementsArr[index].element === 'h2') {
    eleFirst = `<h2 `
    endBr = '>'
    eleSecond =`</h2>`
  }
  if(elementsArr[index].element === 'h3') {
    eleFirst = `<h3 `
    endBr = '>'
    eleSecond =`</h3>`
  }
  if(elementsArr[index].element === 'footer') {
    eleFirst = `<footer `
    endBr = '>'
    eleSecond =`</footer>`
  }
  if(elementsArr[index].element === 'span') {
    eleFirst = `<span `
    endBr = '>'
    eleSecond =`</span>`
  }
  if(elementsArr[index].element === 'menu') {
    eleFirst = `<menu `
    endBr = '>'
    eleSecond =`</menu>`
  }
  if(elementsArr[index].element === 'input') {
    eleFirst = `<input `
    endBr = '>'
    eleSecond =`</input>`
  }
  if(elementsArr[index].element === 'label') {
    eleFirst = `<label `
    endBr = '>'
    eleSecond =`</label>`
  }
  if(elementsArr[index].element === 'link') {
    eleFirst = `<link `
    endBr = ''
   eleSecond = `/>`
  }
  if(elementsArr[index].element === 'title') {
    eleFirst = `<title `
    endBr = '>'
   eleSecond = `</title>`
  }
  if(elementsArr[index].element === 'area') {
    eleFirst = `<area `
    endBr = '>'
   eleSecond = `</area>`
  }
  // console.log(1, elementsArr[index].textAlign)
  let bracket = ''
  let classTag = ''
  let bracket2 =''
  let tw=''
  let slash = ''
  if (elementsArr[index].padding !== '' || elementsArr[index].textAlign !== undefined || elementsArr[index].backgroundColor !== '' || elementsArr[index].color !== '' || elementsArr[index].margin !== '' || elementsArr[index].height !== '' || elementsArr[index].height !== '' || elementsArr[index].padding !== '' || elementsArr[index].width !== ''){
    classTag = `class=`
    bracket='{'
    tw= 'tw`'
    slash= '`'
    bracket2='}'
  }

  let text1= ''
  if (elementsArr[index].textAlign !== '' && elementsArr[index].textAlign !== undefined){
    text1= 'text-'
  }

  let bg= ''
  if (elementsArr[index].backgroundColor !== ''){
    bg= 'bg-'
  }

  let color= ''
  if (elementsArr[index].color !== ''){
    color= 'text-'
  }

  let m = ''
  if (elementsArr[index].margin !== ''){
    m = 'm-'
  }

  let h = ''
  if (elementsArr[index].height !== ''){
    h = 'h-'
  }
  let w = ''
  if (elementsArr[index].width !== ''){
    w = 'w-'
  }

  let p = ''
  if (elementsArr[index].padding !== ''){
    p = 'p-'
  }
  let fs = ''
  if (elementsArr[index].fontSize !== ''){
    fs = 'text-'
  }
  let fw = ''
  if (elementsArr[index].fontWeight !== ''){
    fw = 'font-'
  }
  let cn = ''
  // console.log(1000, elementsArr[index].className)
  if (elementsArr[index].className !== undefined && elementsArr[index].className !== ''){
    cn = 'className='
  } else {
    elementsArr[index].className= index
  
  }
  testArray.push(`${eleFirst} ${cn}"${elementsArr[index].className}" ${classTag}${bracket}${tw}${bg}${elementsArr[index].backgroundColor}${color}${elementsArr[index].color}${m}${elementsArr[index].margin}${w}${elementsArr[index].width}${h}${elementsArr[index].height}${p}${elementsArr[index].padding}${fs}${elementsArr[index].fontSize}${text1}${fw}${elementsArr[index].fontWeight}${elementsArr[index].textDecoration}${text1}${elementsArr[index].textAlign}${slash}${bracket2} id="${index}"${endBr} ${elementsArr[index].text} ${eleSecond}`)


  
  return (
    <div id={index}><span style={{color: '#5FD389'}}>{eleFirst} {cn}{elementsArr[index].className} </span><span style={{color:'#37CFE0'}}>{classTag}</span> <span style={{color:'white'}}>{bracket}</span><span style={{color:'#5FD389'}}> {tw}</span><span style={{color:'#37CFE0'}}> {elementsArr[index].textDecoration} {bg} {elementsArr[index].backgroundColor} {color}{elementsArr[index].color} {m}{elementsArr[index].margin}  {w}{elementsArr[index].width} {h}{elementsArr[index].height} {p}{elementsArr[index].padding} {fs}{elementsArr[index].fontSize} {text1}{elementsArr[index].textAlign} {fw}{elementsArr[index].fontWeight} </span><span style={{color: '#5FD389'}}> {slash}</span> <span style={{color:'white'}}> {bracket2}</span> <span style={{color: '#FDE086'}}> id='{index}'</span><span style={{color: '#5FD389'}}>{endBr}</span><span style={{color: 'white'}}> {elementsArr[index].text}</span> <span style={{color: '#5FD389'}}>{eleSecond}</span></div>
    )
    
  })
  let html = testArray.map((e,i) => (e)).join('\n');
  
  // console.log('testtt', Array)
  return (
    <div id='codePreview'>
      
      <link rel={'stylesheet'} href={'./static/css/codePreview.css'} />
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> h</span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'preact'</span>;</p>
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> PageProps </span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'$fresh/server.ts'</span> ;</p>
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> useEffect, useState </span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'preact/hooks'</span>;</p>
      <p id='import'><span style={{color: '#FF5581'}}>import</span> {'{'}<span style={{color:'#ffff76'}}> tw </span> {'}'} <span style={{color: '#FF5581'}}> from</span> <span style={{color:'#ffff76'}}>'twind'</span>;</p>
      <p id='export'><span style={{color: '#FF5581'}}>export default function </span> <span style={{color: '#37CFE0'}}>App </span>(<span style={{color: '#8B7FDA'}}>props: PageProps</span>) <span style={{color:'white'}} >{'{'}</span></p>
      <p id= 'return'><span style={{color: '#FF5581'}}>return </span>(</p>
      <p id='mainOpeningTag'><span style={{color: '#8B7FDA'}}>{'<main>'}</span></p>
      <div id='htmlTags'><span style={{color: 'pink'}}>{htmlTags}</span></div>
      <p id='mainClosingTag'><span style={{color: '#8B7FDA'}}>{'</main>'}</span></p>
      <p id='paren'>);</p>
      <p id='endingCurly'>{'}'};</p>
      <div className="tooltip">
      <button  id='btn'
    onClick={() => 
      
      navigator.clipboard.writeText(`
      import { h } from 'preact';
      
      import { PageProps } from '$fresh/server.ts' ;
      
      import { useEffect, useState } from 'preact/hooks';
      
      import { tw } from 'twind';
      
      export default function App (props: PageProps) {
      
        return (
      
          <main>
      
              ${html} 
       
          </main>

        );
       
       };`
       )}
  >

  <p id='clip'>&#128203;</p>
  </button>
  
  <span className="tooltiptext">Click to copy!</span>
</div>
      </div>
  )
  }
 export default CodePreview;
 
// import { h } from "preact";

// import { PageProps } from "$fresh/server.ts";

// import { useEffect, useState } from "preact/hooks";

// import { tw } from "twind";

// export default function App(props: PageProps) {

// return (

// <main>

// <h2 id=0> </h2>
// <img id=1 />
// <img class = { tw` bg-r text-r m-r w-r h-r p-r `} id=2 frrrr />
// </main>

// );

// }


// pink: #FF5581
// GREEB: #5FD389
// YELLOW: #FDE086
// BLYE: #37CFE0
// PURPLE: #8B7FDA









// import { h } from 'preact';
      
// import { PageProps } from '$fresh/server.ts' ;

// import { useEffect, useState } from 'preact/hooks';

// import { tw } from 'twind';

// export default function App (props: PageProps) {

//   return (

//     <main>

//         <img  "undefined"  id="0" src=  />
// <h2  "undefined"  id="1">  </h2> 
 
//     </main>

//   );
 
//  };


// import { h } from 'preact';
      
// import { PageProps } from '$fresh/server.ts' ;

// import { useEffect, useState } from 'preact/hooks';

// import { tw } from 'twind';

// export default function App (props: PageProps) {

//   return (

//     <main>

//         <img  "undefined"  id="0" src=  /> 
// <h2  "undefined"  id="1">  </h2> 
 
//     </main>

//   );
 
//  };


// import { h } from 'preact';
      
// import { PageProps } from '$fresh/server.ts' ;

// import { useEffect, useState } from 'preact/hooks';

// import { tw } from 'twind';

// export default function App (props: PageProps) {

//   return (

//     <main>

//         <img  "undefined"  id="0" src=  />
// <h2  "undefined"  id="1">  </h2> 
 
//     </main>

//   );
 
//  };











