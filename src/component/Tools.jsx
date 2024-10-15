import Button from './Button';
import './tools.css';
function Tools({
    changeFontName,
    changeFontSize,
    changeFontColor,
    changeBgColor,
    changeLeftAlign,
    changeRightAlign,
    changeCenterAlign,
    changejustifyAlign,
    indentIncrease,
    indentDecrease,
    saveFile
}) {
    return (
        <div className="tools">
            <div className="font-family">
                <select name="" id="" onChange={changeFontName}>
                <option value="">Font Family</option>
<option value="Bitstream Charter">Bitstream Charter</option>
<option value="C059">C059</option>
<option value="Calibri">Calibri</option>
<option value="Courier 10 Pitch">Courier 10 Pitch</option>
<option value="Courier New, Courier, monospace">Courier</option>
<option value="DejaVu Sans">DejaVu Sans</option>
<option value="DejaVu Sans Mono">DejaVu Sans Mono</option>
<option value="FreeMono">FreeMono</option>
<option value="FreeSans">FreeSans</option>
<option value="FreeSerif">FreeSerif</option>
<option value="Helvetica">Helvetica</option>
<option value="Liberation Mono">Liberation Mono</option>
<option value="Liberation Sans">Liberation Sans</option>
<option value="Liberation Sans Narrow">Liberation Sans Narrow</option>
<option value="Liberation Serif">Liberation Serif</option>
<option value="Nimbus Mono PS">Nimbus Mono PS</option>
<option value="Nimbus Roman">Nimbus Roman</option>
<option value="Nimbus Sans">Nimbus Sans</option>
<option value="Nimbus Sans Narrow">Nimbus Sans Narrow</option>
<option value="P052">P052</option>
<option value="URW Bookman">URW Bookman</option>
<option value="URW Gothic">URW Gothic</option>
<option value="Ubuntu">Ubuntu</option>
<option value="Ubuntu Mono">Ubuntu Mono</option>
<option value="Ubuntu  Ubuntu Thin">Ubuntu  Ubuntu Thin</option>

                 
                </select>
            </div>

            <div className="font-size">
                <select onChange={changeFontSize}>
                    <option value="">Fonr Size</option>
                    <option value="6">6 pt</option>
                    <option value="7">7 pt</option>
                    <option value="8">8 pt</option>
                    <option value="9">9 pt</option>
                    <option value="10">10 pt</option>
                    <option value="11">11 pt</option>
                    <option value="12">12 pt</option>
                    <option value="13">13 pt</option>
                    <option value="14">14 pt</option>
                    <option value="15">15 pt</option>
                    <option value="16">16 pt</option>
                    <option value="18">18 pt</option>
                    <option value="20">20 pt</option>
                    <option value="21">21 pt</option>
                    <option value="22">22 pt</option>
                    <option value="23">23 pt</option>
                    <option value="24">24 pt</option>
                    <option value="26">26 pt</option>
                    <option value="28">28 pt</option>
                    <option value="32">32 pt</option>
                    <option value="36">36 pt</option>
                    <option value="40">40 pt</option>
                    <option value="42">42 pt</option>
                    <option value="44">44 pt</option>
                    <option value="48">48 pt</option>
                    <option value="54">54 pt</option>
                    <option value="60">60 pt</option>
                    <option value="66">66 pt</option>
                    <option value="72">72 pt</option>
                    <option value="80">80 pt</option>
                    <option value="88">88 pt</option>
                    <option value="96">96 pt</option>


                </select>
            </div>

            <div className="font-color">
                <label htmlFor="fc">Color</label>
                <input
                    type="color"
                    name="fc"
                    id="fc"
                    onChange={changeFontColor}
                />
            </div>

            <div className="bg-color">
                <label htmlFor="bg">Background</label>
                <input
                    type="color"
                    name="bg"
                    id="bg"
                    onChange={changeBgColor}
                />
            </div>

            <div className="text-align">
                <p>Text Align</p>
                <div className="btns">
                    <button onClick={changeLeftAlign}>Left </button>
                    <button onClick={changeCenterAlign}>Center </button>
                    <button onClick={changeRightAlign}>Right </button>
                    <button onClick={changejustifyAlign}>justify </button>
                </div>
            </div>
            <div className="indent">
                <p>Indent</p>
               <div className="btns">
               <button onClick={indentIncrease}>Left</button>
               <button onClick={indentDecrease}>Right</button>
               </div>
            </div>
            <Button saveFile={saveFile}/>
        </div>
    );
}

export default Tools;
