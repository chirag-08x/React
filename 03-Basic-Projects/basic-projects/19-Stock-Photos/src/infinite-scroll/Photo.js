import React from "react";
import styled from "styled-components";

const Photo = (props) => {
  const {
    urls: { regular },
    likes,
    user: {
      name,
      portfolio_url,
      profile_image: { medium },
    },
  } = props;

  return (
    <Wrapper className="single-img-container">
      <img src={regular} alt="" className="big-img" />
      <div className="img-footer">
        <div className="user-info">
          <h5>{name}</h5>
          <p>{likes} likes</p>
        </div>
        <a
          href={portfolio_url}
          style={{ cursor: portfolio_url ? "cursor" : null }}
          target="_blank"
          rel="noreferrer"
        >
          <img src={medium} alt={name} />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  overflow: hidden;

  &:hover {
    .img-footer {
      transform: translateY(0);
    }
  }

  .big-img {
    height: 17.5rem;
  }

  .img-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    transition: var(--transition);

    .user-info {
      h5 {
        color: var(--clr-white);
        letter-spacing: 1px;
        font-size: 1rem;
      }

      p {
        color: var(--clr-white);
      }
    }

    /* a {
      cursor: pointer;
    } */

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export default Photo;
