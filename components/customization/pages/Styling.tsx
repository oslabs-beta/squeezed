import { React } from '../../../deps.tsx';
// import { setup, tw } from '../../../deps.tsx';

type submitForm = {
  text: string;
};

const Styling: any = (props: any) => {

  const [inputText, setInputText] = (React as any).useState('');
  const [textAlign, setTextAlign] = (React as any).useState('');
  const [textDecoration, setTextDecoration] = (React as any).useState('');
  const [backgroundColor, setBackgroundColor] = (React as any).useState('');
  const [color, setColor] = (React as any).useState('');
  const [margin, setMargin] = (React as any).useState('');
  const [width, setWidth] = (React as any).useState('');
  const [height, setHeight] = (React as any).useState('');
  const [padding, setPadding] = (React as any).useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`form submitted`);

    // if (this.validateForm()) {
    //   const submitSuccess: boolean = await this.submitForm();
    //   this.setState({ submitSuccess });
    // }
  };

//   /**
//    * Executes the validation rules for all the fields on the form and sets the error state
//    * @returns {boolean} - Whether the form is valid or not
//    */
//    const validateForm(): boolean {
//     // TODO - validate form
//     return true;
//   }

//   /**
//    * Submits the form to the http api
//    * @returns {boolean} - Whether the form submission was successful or not
//    */
//    const async submitForm(): Promise<boolean> {
//     // TODO - submit the form
//     return true;
//   }

    return (
      <form onSubmit={handleSubmit}>

        <label htmlFor="inputText">Text</label>  
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter text"
          className="input"
        /> 
        <br />

        <label htmlFor="textAlign">Text Align</label>
        <select onChange={e => setTextAlign(e.target.value)}>
          <option>center</option>
          <option>right</option>
          <option>left</option>
          <option>justify</option>
          <option>justify</option>
        </select>
        <br />

        <label htmlFor="textDecoration">Text Decoration</label>
        <select onChange={e => setTextDecoration(e.target.value)}>
          <option>overline</option>
          <option>line-through</option>
          <option>underline</option>
          <option>none</option>
        </select>
        <br />

        <label htmlFor="backgroundColor">Background Color</label>  
        <input
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          type="text"
          placeholder="Enter hex color code"
          className="input"
        /> 
        <br />

        <label htmlFor="color">Text Color</label>  
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="Enter hex color code"
          className="input"
        /> 
        <br />

        <label htmlFor="margin">Margin</label>  
        <input
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          type="text"
          placeholder="Enter margin value"
          className="input"
        /> 
        <br />

        <label htmlFor="height">Height</label>  
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="text"
          placeholder="Enter height"
          className="input"
        /> 
        <br />

        <label htmlFor="width">Width</label>  
        <input
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          type="text"
          placeholder="Enter width"
          className="input"
        /> 
        <br />

        <label htmlFor="padding">Padding</label>  
        <input
          value={padding}
          onChange={(e) => setPadding(e.target.value)}
          type="text"
          placeholder="Enter padding"
          className="input"
        /> 
        <br />

        <button type="submit" className="btn">
          Submit
        </button>

      </form>
    );
};

export default Styling;
