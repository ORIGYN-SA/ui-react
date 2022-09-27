import React from 'react';
import { SnackBarProps } from './SnackProvider';
import Button from '../Button';


export const Layouts = {

  oneLine: function (props: SnackBarProps) {
    return (
      <div className="snackbar">{props.message}</div>
    );
  },
  twoLines: function (props: SnackBarProps) {
    return (
      <div className="snackbar">{props.message}</div>
    );
  },
  oneLineIcon: function (props: SnackBarProps) {
    return (
      <div className="snackbar">
        <div className="container">
          <div className="svgBox">
            {props.icon}
          </div>
          <div>
            <p>
              {props.message}
            </p>
          </div>
        </div>
      </div>
    );
  },
  oneLineButton: function (props: SnackBarProps) {
    return (
      <div className="snackbar">
        <div className="container">
          <div className="textBox">
            <p>
              {props.message}
            </p>
          </div>
          <div>
            <Button
              onClick={() => {
                props.action();
              }}
            >
              {props.actionText}
            </Button>
          </div>
        </div>
      </div>
    );
  },
  twoLinesButton: function (props: SnackBarProps) {
    return (
      <div className="snackbar">
        <div className="container-block ">
          <div>
            <p>
              {props.message}
            </p>
          </div>
          <div>
            <Button
              className="button-right"
              onClick={() => {
                props.action();
              }}
            >
              {props.actionText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export type layoutType = keyof typeof Layouts;