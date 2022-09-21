import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SLabel = styled.div`
  background: #151515;
  border-radius: 0.5rem;
  color: #43b8ca;
  display: none;
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  height: 1em;
  padding: 1rem;
  position: absolute;
`;
export const LineChart = ({ data, height = 350, width = 700 }) => {
  const canvasRef = useRef(null);
  const [label, setLabel] = useState({
    content: "",
    display: "none",
    top: "0px",
    left: "0px",
  });
  let ctx;

  const vData = 4;
  const speed = 2;
  const t = 1 / 7; // 0 = no curve
  const offset = 50.5;

  const chartHeight = height - 2 * offset;
  const chartWidth = width;

  let valuesRy = [];
  let propsRy = [];
  let posDots = [];
  let posFlat = [];

  const dataSetup = () => {
    for (const prop in data) {
      valuesRy.push(data[prop]);
      propsRy.push(prop);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    ctx.font = "14px Montserrat";
    const grd = ctx.createLinearGradient(0, 0, 0, height / 2);

    let frames = 0;
    let animationFrameId;

    dataSetup();

    const A = {
      x: 0,
      y: 0,
    };
    const B = {
      x: 0,
      y: offset + chartHeight,
    };
    const C = {
      x: chartWidth,
      y: offset + chartHeight,
    };

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#E3E3E3";
    // ctx.moveTo(A.x, A.y); // Linie Oy
    ctx.lineTo(B.x, B.y); // Linie Ox
    ctx.lineTo(C.x, C.y);
    ctx.stroke();

    // vertical ( A - B )
    const aStep = (chartHeight - 50) / vData;

    const Max = Math.ceil(arrayMax(valuesRy) / 10) * 10;
    const Min = Math.floor(arrayMin(valuesRy) / 10) * 10;
    const aStepValue = (Max - Min) / vData;
    const verticalUnit = aStep / aStepValue;

    let a = [];
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let i = 0; i <= vData; i++) {
      if (i == 0) {
        a[i] = {
          x: A.x,
          y: A.y + 25,
          val: Max,
        };
      } else {
        a[i] = {};
        a[i].x = a[i - 1].x;
        a[i].y = a[i - 1].y + aStep;
        a[i].val = a[i - 1].val - aStepValue;
      }
      // drawCoords(a[i], 3, 0); // Deseneaza indicatoare si text pentru Oy (vertical)
    }

    //horizontal ( B - C )
    let b = [];
    ctx.textAlign = "center";
    ctx.textBaseline = "hanging";
    const bStep = chartWidth / (valuesRy.length - 1); // valuesRy.length + 1 pentru padding in lateral

    for (let i = 0; i < valuesRy.length; i++) {
      if (i == 0) {
        b[i] = {
          x: B.x,
          y: B.y,
          val: propsRy[0],
        };
        b[i].textOffset = -10;
      } else {
        b[i] = {};
        b[i].x = b[i - 1].x + bStep;
        b[i].y = b[i - 1].y;
        b[i].val = propsRy[i];
        if (i == valuesRy.length - 1) {
          b[i].textOffset = 10;
        } else {
          b[i].textOffset = 0;
        }
      }
      drawCoords(b[i], b[i].textOffset, 3); // Deseneaza indicatoare si text pentru Oy (vertical)
    }
    [posDots, posFlat] = generateDotsPosition(b, verticalUnit);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#43B8CA";
    ctx.fillStyle = "#5F5F5F";
    const animateChart = () => {
      animationFrameId = window.requestAnimationFrame(animateChart);
      frames += speed;
      ctx.clearRect(0, 0, width, height - 60);

      for (var i = 0; i < posFlat.length; i++) {
        if (posFlat[i].y > posDots[i].y) {
          posFlat[i].y -= speed;
        }
      }
      drawCurve(posFlat, grd);
      for (var i = 0; i < posFlat.length; i++) {
        // datele de la top
        // ctx.fillText(posDots[i].val, posFlat[i].x, posFlat[i].y - 25);
        ctx.beginPath();
        // We need the dot offset for the first and the last one, as they overflow out of the Chart
        let dotOffset = 0;
        if (i === 0) dotOffset = 3.5;
        else if (i === posFlat.length - 1) dotOffset = -3.5;
        ctx.arc(posFlat[i].x + dotOffset, posFlat[i].y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
      if (frames >= Max * verticalUnit) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
    animationFrameId = window.requestAnimationFrame(animateChart);
  }, []);

  // Draw legenda Ox si Oy
  const drawCoords = (o, offX, offY) => {
    ctx.beginPath();
    ctx.moveTo(o.x - offX, o.y - offY);
    //ctx.lineTo(o.x + offX, o.y + offY);
    ctx.stroke();
    ctx.fillStyle = "#5F5F5F";

    ctx.fillText(o.val, o.x - 2 * offX, o.y + 2 * offY);
  };

  const drawCurve = (p, grd) => {
    var pc = controlPoints(p);

    ctx.beginPath();
    //ctx.moveTo(p[0].x, B.y- 25);
    ctx.lineTo(p[0].x, p[0].y);
    ctx.quadraticCurveTo(pc[1][1].x, pc[1][1].y, p[1].x, p[1].y);

    if (p.length > 2) {
      // Central curves are cubic Bezier
      for (var i = 1; i < p.length - 2; i++) {
        ctx.bezierCurveTo(
          pc[i][0].x,
          pc[i][0].y,
          pc[i + 1][1].x,
          pc[i + 1][1].y,
          p[i + 1].x,
          p[i + 1].y
        );
      }
      // The first & the last curve are quadratic Bezier
      var n = p.length - 1;
      ctx.quadraticCurveTo(pc[n - 1][0].x, pc[n - 1][0].y, p[n].x, p[n].y);
    }

    //ctx.lineTo(p[p.length-1].x, B.y- 25);
    ctx.stroke();
    ctx.save();
    ctx.fillStyle = grd; // pentru gradient
    ctx.fill();
    ctx.restore();
  };
  const controlPoints = (p) => {
    // given the points array p calculate the control points
    var pc = [];
    for (var i = 1; i < p.length - 1; i++) {
      var dx = p[i - 1].x - p[i + 1].x; // difference x
      var dy = p[i - 1].y - p[i + 1].y; // difference y
      // the first control point
      var x1 = p[i].x - dx * t;
      var y1 = p[i].y - dy * t;
      var o1 = {
        x: x1,
        y: y1,
      };

      // the second control point
      var x2 = p[i].x + dx * t;
      var y2 = p[i].y + dy * t;
      var o2 = {
        x: x2,
        y: y2,
      };

      // building the control points array
      pc[i] = [];
      pc[i].push(o1);
      pc[i].push(o2);
    }
    return pc;
  };
  const generateDotsPosition = (b, verticalUnit) => {
    let posDots = [];
    let posFlat = [];

    for (const key of Object.keys(data)) {
      const i = posDots.length;
      posDots.push({
        x: b[i].x,
        y: b[i].y - data[key] * verticalUnit - 25,
      });

      posFlat.push({
        x: b[i].x,
        y: b[i].y - 25,
      });
    }

    return [posDots, posFlat];
  };
  function arrayMax(array) {
    return Math.max.apply(Math, array);
  }

  function arrayMin(array) {
    return Math.min.apply(Math, array);
  }

  const getMousePosition = (canvasRef, e) => {
    const canvas = canvasRef.current;
    const ClientRect = canvas.getBoundingClientRect();
    return {
      x: Math.round(e.clientX - ClientRect.left),
      y: Math.round(e.clientY - ClientRect.top),
    };
  };

  const onChartMouseMove = (e: any) => {
    setLabel({
      display: "none",
      content: "",
      top: "0px",
      left: "0px",
    });

    const m = getMousePosition(canvasRef, e);
    for (let i = 0; i < posDots.length; i++) {
      console.log(posDots[i]);
      ctx.beginPath();
      ctx.arc(posDots[i].x, posDots[i].y, 20, 0, 2 * Math.PI);
      if (ctx.isPointInPath(m.x, m.y)) {
        console.log(" hit a point");
        setLabel({
          display: "block",
          top: m.y + 10 + "px",
          left: m.x + 10 + "px",
          content: "<strong>" + propsRy[i] + "</strong>: " + valuesRy[i] + "$",
        });
        break;
      }
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        onMouseMove={(e) => onChartMouseMove(e)}
        style={{
          border: "1px solid #E3E3E3",
          borderBottom: 0,
          borderTop: 0,
        }}
      />
      <SLabel
        style={{
          display: label.display,
          top: label.top,
          left: label.left,
        }}
        dangerouslySetInnerHTML={{ __html: label.content }}
      />
    </>
  );
};
