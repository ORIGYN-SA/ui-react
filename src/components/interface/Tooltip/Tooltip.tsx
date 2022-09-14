import styled, {css} from "styled-components";

export type TooltipProps ={
side?: "right" | "left" | "up" | "down"
on?: "on" | "off"
}

const right = css`${({theme}) => `
    margin-left: 5px;
`}`;

const left = css`${({theme}) => `
    margin-left: 5px;
`}`;


const up = css`${({theme}) => `
    margin-left: 5px;
`}`;


const low = css`${({theme}) => `
    margin-left: 5px;
`}`;



const Tooltip = styled.tooltip<TooltipProps> `


  position: absolute;
  left: 0px;
  top: 0px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  
  display: inline-block;
}

tooltip.left
{
  margin-left: -5px;
}

tooltip.top
{
  margin-top: -5px;
}

tooltip.bottom
{
  margin-top: 5px;
}

tooltip .tooltip-arrow
{
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}

tooltip.right .tooltip-arrow
{
  top: 50%;
  left: auto;
  margin-left: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}



tooltip.top .tooltip-arrow
{
  top: auto;
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

tooltip.left .tooltip-arrow
{
  top: 50%;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
  right: -5px;
  left: auto;
}

tooltip.bottom .tooltip-arrow
{
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

tooltip .tooltip-arrow
{
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-right-color: transparent;
  border-style: solid;
}

tooltip .tooltip-label
{
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 4px;
}

tooltip.on
{
  display: block;
}

tooltip.off
{
  display: none;
}
`

//   return (
//   <div id="tooltip" className="on right">
//   <div className="tooltip-arrow"></div><div className="tooltip-inner">ToolTip Component</div>
//  </div>;
//   )
// }
// componentDidMount()



// componentWillUnmount()





// ReactDOM.render(<ToolTip />, document.getElementById("app"));


// {

export default Tooltip;
