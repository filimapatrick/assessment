import React from 'react';
import styled from 'styled-components';

import 'aos/dist/aos.css';

function Header() {
  return (
    <HeaderStyle>
      <article className="flatline_header" data-aos="zoom-in">
        <header>
          <img src="./logo192.png" alt="flatline_header" />
          <h1 className="flatline__title">
            <span className="flat">FlatLine </span>
            <span className="flat">Agency</span>
          </h1>
        </header>
      </article>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  .flatline_header {
    max-width: 100%;
    width: 100%;
    border-radius: 12px;

    header {
      --start: 15%;

      height: 130px;
      background-image: repeating-radial-gradient(
          circle at var(--start),
          transparent 0%,
          transparent 10%,
          rgba(54, 89, 219, 0.33) 10%,
          rgba(54, 89, 219, 0.33) 17%
        ),
        linear-gradient(to right, #5b7cfa, #3659db);
      color: #fff;
      position: relative;
      border-radius: 12px 12px 0 0;
      overflow: hidden;

      .flatline__title {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: calc(var(--start) * 0.75);
        transform: translateY(-50%);
        text-transform: uppercase;
        margin: 0;

        header img {
          object-fit: contain;
        }
      }
    }
  }

  .flatline_header {
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.4);
  }
`;
export default Header;
