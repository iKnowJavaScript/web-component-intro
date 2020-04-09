import { css } from "lit-element";

export const style = css`
  .progress-bar {
    width: 50%;
    height: 30px;
    background-color: var(--main-loader-bg, --main-btn-bg);
    border-radius: 5px;
    color: var(--main-btn-color, white);
    margin: auto;
    margin-top: 50px;
  }
  .progress-bar-inner {
    height: 100%;
    line-height: 30px;
    background: var(--main-btn-bg, green);
    text-align: center;
    border-radius: 5px;
    width: 0%;
    transition: width 0.25s;
  }
`;
