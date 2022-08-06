import Slider from "react-slick";
import styled from "styled-components";

export const Root = styled.section`
  margin-top: 1.2rem;
`;

export const HeaderWrapper = styled.header``;

export const Title = styled.h2``;

export const Desc = styled.p``;

export const SliderWrapper = styled.article`
  touch-action: pan-x;

  width: 100%;

  & .slick-list {
    height: 15.3rem;

    padding: 0.4rem 1.6rem;
  }

  & .slick-track {
    scroll-snap-type: x mandatory;
  }
`;

export const SliderExtended = styled(Slider)``;
