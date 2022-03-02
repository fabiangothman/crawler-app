import React, { useEffect, useState } from 'react';
import { CategoryItemType, ItemType } from './types';

const PrintData = ( props: {
  data: CategoryItemType[],
} ) => {
  const [items, setItems] = useState<ItemType[]>([])

  const getItems = (element: CategoryItemType[], category = "", subCategory = "") => {
    element.forEach(subElement => {
      if (Array.isArray(subElement.child)){
        getItems(
          subElement.child,
          (subElement.level===1) ? subElement.name : category,
          (subElement.level===2) ? subElement.name : subCategory
        );
      } else {
        const newItem: ItemType = {
          pageType: (subElement.child?.pageType) ? subElement.child.pageType : "",
          name: (subElement.child?.name) ? subElement.child.name : "",
          description: (subElement.child?.description) ? subElement.child.description : "",
          price: (subElement.child?.price) ? subElement.child.price : "",
          available: (subElement.child?.available) ? subElement.child.available : false,
          size: (subElement.child?.size) ? subElement.child.size : "",
          image: (subElement.child?.image) ? subElement.child.image : "",
          level: (subElement.child?.level) ? subElement.child.level : -1,
          category,
          subCategory,
        };        
        setItems(items => {
          const updatedItems = [...items, newItem];
          return [...updatedItems]
        });
      }
    });
  }
  
  useEffect(() => {
    getItems(props.data);
  }, [props.data]);
  
  return (
    <table className="list">
      <thead>
        <tr>
          <th>Product name</th>
          <th>Product category</th>
          <th>Product subcategory</th>
          <th>Product description</th>
          <th>Product image</th>
          <th>Product price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr className="item" key={index}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.subCategory ? item.subCategory : 'None'}</td>
            <td>{item.description}</td>
            <td><img src={decodeURI(item.image)} /></td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PrintData;
