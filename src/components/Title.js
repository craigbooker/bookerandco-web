import React from 'react'
// import styled from 'styled-components'

const Title = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className="underline"></div>
    </div>
  )
}

export default Title

// export default styled(Title)`
//   text-transform: uppercase;
//   font-size: 2.3rem;
//   margin-bottom: 2rem;

//   h4 {
//     text-transform: uppercase;
//     text-align: center;
//     letter-spacing: 7px;
//     color: var(--primaryColor);
//   }

//   .title {
//     color: var(--mainBlack);
//   }

//   span {
//     display: block;
//   }

//   @media (min-width: 576px) {
//     span {
//       display: inline-block;
//       margin: 0 0.35rem;
//     }
//   }
// `
