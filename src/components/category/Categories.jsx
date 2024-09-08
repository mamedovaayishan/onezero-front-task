// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategories } from '../../features/categorySlice';

// const Categories = () => {
//   const dispatch = useDispatch();
//   const { categories, status, error } = useSelector((state) => state.categories);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchCategories());
//     }
//   }, [dispatch, status]);

//   if (status === 'loading') {
//     return <div>Yüklənir...</div>;
//   }


//   if (status === 'failed') {
//     return <div>Xəta: {error}</div>;
//   }

//   return (
//     <>
//         <div className="category-buttons">
//       {categories.length > 0 ? (
//         categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => dispatch(filterByCategory(category.id))}
//           >  
//             {category.name}
//           </button>
//         ))
//       ) : (
//         <div>Kateqoriya yoxdur.</div>
//       )}
//     </div>
//     </>

//   );
// };

// export default Categories;
