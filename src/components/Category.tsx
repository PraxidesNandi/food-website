import CategoryCard from "./CategoryCard";


const data =[
    {
        id: 0,
        name:'Fresh Fruits',
        count: '9 products',
        img: '/food-website/images/fruits.webp'
    },
    {
        id: 1,
        name:'Fresh vegs',
        count: '8 products',
        img: '/food-website/images/vegs.webp'
    },
    {
    id: 2,
        name:'Canned Goods',
        count: '10 products',
        img: '/food-website/images/canned.jpg'
    },
    {
        id: 3,
        name:'Bread & Bakery',
        count: '12 products',
        img: '/food-website/images/bread.jpg'
    },
    {
        id: 4,
        name:'Fishes',
        count: '10 products',
        img: '/food-website/images/fish.jpg'
    },
    {
        id: 5,
        name:'Eggs & Dairy',
        count: '7 products',
        img: '/food-website/images/eggs.jpg'
    },
    {
      id: 6,
      name:'Soft Drinks',
      count: '5 products',
      img: '/food-website/images/drinks.jpg'
    },
    
    {
      id: 7,
      name:'Cereals',
      count: '9 products',
      img: '/food-website/images/cereal.jpg'
    },


];

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
                <CategoryCard 
                key={el.id}
                img={el.img} 
                name={el.name}
                count={el.count}
                 />
            ))}
        </div>
      
    </div>
  )
}

export default Category
