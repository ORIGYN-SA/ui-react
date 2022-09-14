import React,{useState,useEffect} from "react";
import styled from 'styled-components';

export type RangeSliderProps = {
  disabled?: boolean;
};

const sliderThumbStyles = () => (`
  width: 12px;
  height: 12px;
  background: #151515;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 0 6px #15151514;
`);

const Styles = styled.div`
position: relative;
.slider-parent{
  position: relative;
  width: 100%;
}
  .value {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 22px;
    background: #151515;
    border-radius: 999px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #FEFEFE;
  }
  .thumb-value{
    position:absolute;
    left:0px;
  }
  .slider {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    margin-top:37px;
    outline: none;
    background: #9a9a9a;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles()}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles()}
    }
    &::-ms-thumb {
      ${props => sliderThumbStyles()}
    }
  }
`;

const RangeSlider = ({ disabled }: RangeSliderProps) => {
  function setBubble(rangeMin,rangeMax, bubble, value) {
    const val = value;
    const min = rangeMin ? rangeMin : 0;
    const max = rangeMax ? rangeMax : 100;
    var newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${-10 - newVal * 0.12}px))`;
  }
  
  const rangeInput = document.getElementById("myRange");
  const min = rangeInput ? rangeInput.getAttribute("min") : 0;
  const max = rangeInput ? rangeInput.getAttribute("max") : 100;
  const [value, setValue] = useState(0);
  const handleOnChange = (e) => setValue(e.target.value);
  useEffect(()=>{
  const thumbValue = document.getElementById('Bubble');
  if (thumbValue) {
    setBubble(min,max,thumbValue,value);
  }
})
  return (
    <Styles>
      <div className="slider-parent">
      <output className="value thumb-value" id="Bubble"></output>
      <input type="range" 
      min={0} max={100} 
      value={value} 
      className="slider" 
      onChange={handleOnChange}/>
      </div>
    </Styles>
  );
}
export default RangeSlider;
