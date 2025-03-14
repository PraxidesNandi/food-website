import CategoryCard from "./CategoryCard";


const data =[
    {
        id: 0,
        name:'Fresh Fruits',
        count: '9 products',
        img: '/images/fruits.webp'
    },
    {
        id: 1,
        name:'Fresh vegs',
        count: '8 products',
        img: '/images/vegs.webp'
    },
    {
    id: 2,
        name:'Canned Goods',
        count: '10 products',
        img: '/images/canned.jpg'
    },
    {
        id: 3,
        name:'Bread & Bakery',
        count: '12 products',
        img: '/images/bread.jpg'
    },
    {
        id: 4,
        name:'Fishes',
        count: '10 products',
        img: '/images/fish.jpg'
    },
    {
        id: 5,
        name:'Eggs & Dairy',
        count: '7 products',
        img: '/images/eggs.jpg'
    },
    {
      id: 6,
      name:'Soft Drinks',
      count: '5 products',
      img: '/images/drinks.jpg'
    },
    
    {
      id: 7,
      name:'Cereals',
      count: '9 products',
      img: '/images/cereal.jpg'
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
