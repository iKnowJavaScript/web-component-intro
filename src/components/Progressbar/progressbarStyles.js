import { css } from "lit-element";

export const style = css`
  .progress-bar {
    width: 50%;
    height: 30px;
    background-color: #edf2f4;
    border-radius: 5px;
    color: #fff;
    margin: auto;
    margin-top: 50px;
  }
  .progress-bar-inner {
    height: 100%;
    line-height: 30px;
    background: #2b2d42;
    text-align: center;
    border-radius: 5px;
    width: 0%;
    transition: width 0.25s;
  }
`;
