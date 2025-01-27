import React from 'react';
import styled from 'styled-components'

function Subheader() {
  return (
    <SubHeader>
<div class="container" data-aos="slide-left" >
  <ul class="responsive-table">
    <li class="table-header">
    
      <div class="col col-2">Image</div>
      <div class="col col-3">Name</div>
      <div class="col col-4">Title</div>
      <div class="col col-4">Summary</div>
    </li>
  </ul>
</div>
    </SubHeader>
  )
}

export default Subheader;

const SubHeader = styled.div` 
body {
  font-family: 'lato', sans-serif;
}
.container {
  /* max-width: 1000px; */
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}



.responsive-table {
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  .col-1 {
    flex-basis: 10%;
   
  }
  .col-2 {
    flex-basis: 10%;
  }
  .col-3 {
    flex-basis: 30%;
  }
  .col-4 {
    flex-basis: 25%;
  }
  
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row{
      
    }
    li {
      display: block;
    }
    .col {
      
      flex-basis: 100%;
      
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
}
`