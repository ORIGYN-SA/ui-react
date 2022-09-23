import React, { useState } from "react";
import styled from "styled-components";
import { LineChart } from "./LineChart";

const SGraph = styled.div<{ width: string }>`
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  ${({ width }) => `
    width: ${width};
  `}
`;
const SFrames = styled.div`
  display: flex;
  flex-direction: row;
`;

const SFrame = styled.div<{ isSelected?: boolean }>`
  align-self: center;
  margin: 10px;
  padding: 0.5rem 1rem;
  text-align: center;

  ${({ isSelected }) => `${
    isSelected
      ? `
    background: #f2f2f2;
    border-radius: 999px;
    cursor: pointer;
  `
      : ""
  }
  &:hover {
    background: #f2f2f2;
    border-radius: 999px;
    cursor: pointer;
  }
`}
`;

const SGraphHeader = styled.div`
  display: flex;
  height: 76px;
  justify-content: space-between;
  padding: 24px;
`;

const SOverline = styled.div`
  color: #5f5f5f;
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 20px;
`;

const SToken = styled.div`
  font-family: "Montserrat";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.25px;
  line-height: 32px;
`;

const SPriceChange = styled.div<{ trend: "up" | "down" }>`
  ${({ trend }) => `color: ${trend === "up" ? "#43B8CA" : "red"}`};
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 24px;
`;

export const GraphHeader = ({ token, priceChange }: GraphHeaderProps) => {
  const frames = ["1W", "2W", "1M", "2M", "3M", "1Y", "ALL"];
  const [selectedFrame, setSelectedFrame] = useState(frames.length - 1);
  return (
    <SGraphHeader>
      <div>
        <SOverline>Overline</SOverline>
        <SToken>{token}</SToken>
        <SPriceChange trend="up">{priceChange}%</SPriceChange>
      </div>
      <SFrames>
        {frames.map((frame, index) => (
          <SFrame
            isSelected={selectedFrame === index}
            onClick={() => setSelectedFrame(index)}
          >
            {frame}
          </SFrame>
        ))}
      </SFrames>
    </SGraphHeader>
  );
};
export const Graph = ({ data, token, width }: GraphProps) => {
  const keys = Object.keys(data);
  const lastKey = keys[keys.length - 1];
  const preLastKey = keys[keys.length - 2];
  const priceChange = 1 - data[lastKey] / data[preLastKey];

  return (
    <SGraph width={width}>
      <GraphHeader token={token} priceChange={priceChange} />
      <LineChart data={data} />
    </SGraph>
  );
};

type GraphProps = {
  data: any;
  token: string;
  width: string;
};
type GraphHeaderProps = {
  priceChange: number;
  token: string;
};
