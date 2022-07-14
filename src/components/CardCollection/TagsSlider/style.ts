import styled from "styled-components";

export const St = {
  SliderWrapper: styled.ul`
    max-width: 20.1rem;
    height: 2.3rem;

    overflow: scroll;
    white-space: nowrap;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
