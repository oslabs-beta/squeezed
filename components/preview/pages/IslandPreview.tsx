import { React } from '../../../deps.tsx';

const IslandPreview: any = (props: any) => {
  const {elementsArr, setElementsArr} = props;
  let htmlElement: unknown;
  let htmlText: unknown;
  let htmlTextAlign: unknown;
  let htmlTextDecoration: unknown;
  let htmlBackground: unknown;
  let htmlColor: unknown;
  let htmlMargin: unknown;
  let htmlWidth: unknown;
  let htmlHeight: unknown;
  let htmlPadding: unknown;
  let htmlFontSize: unknown;
  let htmlFontWeight: unknown;

  const testArray:string[]=[];
  elementsArr.forEach((ele: { [s: string]: unknown; }|ArrayLike<unknown>) => {
    for (let key in ele){
      htmlElement = Object.values(ele)[1]
      htmlText = Object.values(ele)[2]
      htmlTextAlign = Object.values(ele)[3]
      htmlTextDecoration = Object.values(ele)[4]
      htmlBackground = Object.values(ele)[5]
      htmlColor = Object.values(ele)[6]
      htmlMargin = Object.values(ele)[7]
      htmlWidth = Object.values(ele)[8]
      htmlHeight = Object.values(ele)[9]
      htmlPadding = Object.values(ele)[10]
      htmlFontSize = Object.values(ele)[11]
      htmlFontWeight = Object.values(ele)[12]
    }
    testArray.push(`<${htmlElement} style='color:${htmlColor};background-color:${htmlBackground};height:${htmlHeight};width:${htmlWidth};text-align:${htmlTextAlign};margin:${htmlMargin};text-decoration:${htmlTextDecoration};padding:${htmlPadding};font-size:${htmlFontSize};font-weight:${htmlFontWeight}'>${htmlText}</${htmlElement}>`)
    
  })
console.log(73, testArray)
  let html = testArray.map((e,i) => (e)).join(' ');
  console.log(74, html)
  return (
    <div style={{height: '100%', width: '100%'}}>
      <iframe  height='750px' width='100%' frameBorder="0" srcDoc = {html}></iframe>
    </div>
  )
}

export default IslandPreview;

