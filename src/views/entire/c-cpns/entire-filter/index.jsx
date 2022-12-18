import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
const EntireFilter = memo((props) => {
  const [selectItems,setSelectItems] = useState([])
  function itemClickHandle(item){
    // console.log(item);
    const newItems = [...selectItems]
    if(newItems.includes(item)){
      const itemIndex = newItems.findIndex(filterItem => filterItem=== item)
      newItems.splice(itemIndex,1)

    }else{
      newItems.push(item)
    }
   
    setSelectItems(newItems)

  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div className={classNames("item",{active:selectItems.includes(item)})} key={index}
            onClick={e => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
