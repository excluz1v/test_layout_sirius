import styled from "@emotion/styled";
import { FunctionComponent } from "react";

type StarSizeType = {
  height: string;
  width: string;
};

const starSize: StarSizeType = {
  height: "10vw",
  width: "10vw",
};

type DivProps = {
  orderNumber: number;
};

const Wrapper = styled.div<DivProps>`
  position: absolute;
  top: ${(props) =>
    props.orderNumber
      ? `calc(${props.orderNumber * -1} * ${starSize.width})`
      : "0"};
  left: ${(props) =>
    props.orderNumber ? `${props.orderNumber * 25}%` : "25%"};
  width: ${starSize.width};
  height: ${starSize.height};
  background-image: url("/star.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: "slideInDown" 5s linear infinite;
  font-size: 3vw;
`;

type StarComponentProps = {
  orderNumber: number;
};
export const Star: FunctionComponent<StarComponentProps> = (props) => (
  <>
    <Wrapper orderNumber={props.orderNumber}>{props.children}</Wrapper>
  </>
);
