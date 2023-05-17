// import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2px 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  z-index: 9999;
  background-color: #000;

  -webkit-transition: all 0.5s ease;
  -moz-transition: position 10s;
  -ms-transition: position 10s;
  -o-transition: position 10s;
  transition: all 0.5s ease;

  @media screen and (max-width: 767px) {
    padding: 5px 5px;
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    animation: smoothScroll 1s forwards;
  }

  .noFixed {
    position: relative !important;
    top: 0;
    left: 0;
    animation: smoothScroll 1s forwards;
  }
  @keyframes smoothScroll {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderItem = styled.div`
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  :hover {
    border-style: solid;
    border-color: #E0B246;
  }
`;

export const Action = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background: #E0B246;
  border: 2px solid #E0B246;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const OutlinedAction = styled.div`
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background: #000;
  border: 2px solid #E0B246;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Carousel = styled.div`
  width: 100%;
`