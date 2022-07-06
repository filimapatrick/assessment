import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { Paginate } from '../Redux/actions/productsActions';

export const Pagination = () => {

      const dispatch = useDispatch();
      const selector = useSelector((state) => state.allProducts.currentPage)
      const totalProducts = useSelector((state) => state.allProducts.products.length)
      return (
            <PaginatedContainer>
                 
                  <Button
                        disabled={selector === 1}
                        onClick={() => {
                              dispatch(Paginate(selector - 1))
                        }}>
                        Prev
                  </Button>

                  <Button
                        disabled={selector === Math.ceil(totalProducts / 10)}
                        onClick={() => {
                              dispatch(Paginate(selector + 1))
                        }}>
                        Next
                  </Button>
            </PaginatedContainer>
      )
}

const PaginatedContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 50px;
     
      max-width: 50vw;
      margin-left: auto;
      margin-right: auto;
`;

const Button = styled.button`
appearance: none;
    background-color: #DADEDF;
    border: 3px solid gray;
    border-radius: 15rem;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    :enabled{
      background: red;
      cursor: pointer;
    }

    :disabled{
     
      cursor: not-allowed;
    }
`; 
