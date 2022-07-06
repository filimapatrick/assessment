import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Sort } from '../Redux/actions/productsActions';

function Category() {
  const dispatch = useDispatch();
  const categories = [
    "Surveys and Forms",
    "Digital Marketing",
    "Platform News and Updates",
    "Tips and Best Practise",
    "Data Management",
    "Marketing Analytics",
    "Landing Pages",
    "Ecommerce",
    "Email Marketing",
    "Marketing Automation",
  ]

  return (
    <Sorting>
      <div className="select">
        <select onChange={(e) => {
          dispatch(Sort(e.target.value))
        }}>
         
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </Sorting>

  );

}

export default Category;



const Sorting = styled.div` 
  margin-top:2rem;
select{
    height:30px;
    border:2px solid gray;
    margin-left:3rem;
    border-radius:4px;
    font-size:16px;
}

`