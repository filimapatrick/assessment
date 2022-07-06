import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';



function ProductComponent() {
  const products = useSelector((state) => state.allProducts.currentPageProducts);
  const renderList = products.map((product, index) => {
    const { id, title, author,summary } = product;
    return (
      <CardStyled key={id}>

<div class="container">
 
  <ul class="responsive-table"  data-aos="slide-right">
    
    <li class="table-row">
      <div class="col col-2" data-label="Photo"> <img src={author.avatar} alt={title} /></div>
      <div class="col col-3" data-label="Name">{author.name}</div>
      <div class="col col-4" data-label="Title">{title}</div>
      <div class="col col-4" data-label="Summary">{summary}</div>
      
    </li>

  </ul>
</div>
       
       
      </CardStyled>
    );
  });
  return renderList;
}

const CardStyled = styled.div`
  
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
    flex-basis: 25%;
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

`;

export default ProductComponent;
