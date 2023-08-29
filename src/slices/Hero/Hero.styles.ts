"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;

  img {
    width: 100%;
    height: auto;
  }
`;
