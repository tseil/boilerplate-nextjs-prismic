"use client";

import { PrismicNextLink } from "@prismicio/next";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0 0.5rem;
`;

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled(PrismicNextLink)`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
  }
`;
