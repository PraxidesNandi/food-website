import FeatureCard from '../components/FeatureCard'; // Adjust path as needed

import { LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid, LiaPhoneSolid } from "react-icons/lia";



const data =[
    {
        title:'Free Shipping',
        icon: <LiaShippingFastSolid />,

    },
    {
        title:'Best Price Guarantee',
        icon: <LiaMoneyBillWaveSolid/>,
    },
    {
        title:'Free Curbside Pickup',
        icon: <LiaGiftSolid/>
    },
    {
        title:'Support 24/7',
        icon: <LiaPhoneSolid/>,
    },

];

const Feature = () => {
    return (
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((el)=>(
                    <FeatureCard key={el.title} title={el.title} icon={el.icon} />
                ))}
            </div>
        </div>
    );
};

export default Feature;