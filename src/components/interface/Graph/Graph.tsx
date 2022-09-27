import React, { useEffect, useState } from "react";
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

const frames = [
  { label: "1W", days: 7 },
  { label: "2W", days: 14 },
  { label: "1M", days: 30 },
  { label: "2M", days: 60 },
  { label: "1Y", days: 360 },
  { label: "ALL", days: 900 },
];

export const GraphHeader = ({
  onFrameChange,
  priceChange,
  selectedFrame,
  token,
}: GraphHeaderProps) => {
  return (
    <SGraphHeader>
      <div>
        <SOverline>Overline</SOverline>
        <SToken>{token}</SToken>
        <SPriceChange trend="up">
          {parseFloat(priceChange.toString()).toFixed(3)}%
        </SPriceChange>
      </div>
      <SFrames>
        {frames.map((frame, index) => (
          <SFrame
            isSelected={selectedFrame === index}
            onClick={() => onFrameChange(index)}
            key={frame.days}
          >
            {frame.label}
          </SFrame>
        ))}
      </SFrames>
    </SGraphHeader>
  );
};
export const Graph = ({ data, token, width }: GraphProps) => {
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [filteredData, setFilteredData] = useState({});
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    let dataKeys = Object.keys(data);
    const { days } = frames[selectedFrame];
    const ratio =
      data[dataKeys[dataKeys.length - days]] /
      data[dataKeys[dataKeys.length - 1]];
    const change = ratio > 1 ? -1 * (1 - ratio) : 1 - ratio;
    setPriceChange(change * 100);

    const slicedKeys = dataKeys.slice(-days);
    const newFilteredData = {};
    slicedKeys.forEach((key) => {
      const date = new Date(parseInt(key) * 1000);
      const keyAsDate = `${date.toLocaleString("default", {
        month: "short",
      })} ${date.getDate()} ${date.toLocaleString("default", {
        year: "2-digit",
      })}`;
      newFilteredData[keyAsDate] = data[key];
    });
    setFilteredData({ ...newFilteredData });
  }, [selectedFrame]);

  return (
    <SGraph width={width}>
      <GraphHeader
        token={token}
        priceChange={priceChange}
        selectedFrame={selectedFrame}
        onFrameChange={setSelectedFrame}
      />
      <LineChart data={filteredData} />
    </SGraph>
  );
};

type GraphProps = {
  data: any;
  token: string;
  width: string;
};
type GraphHeaderProps = {
  onFrameChange: (i: number) => void;
  priceChange: number;
  selectedFrame: number;
  token: string;
};
