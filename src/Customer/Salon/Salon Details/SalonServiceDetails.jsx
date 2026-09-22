import React, { useState } from "react";

const SalonServiceDetails = () => {
    const[selectedCategpry, setSelectedCategory] = useState(null)
    const handleCategoryClick = () => {}
    return(
        <div className="lg:flex gap-5 h-[90vh] mt-10">
            <section>
                {[1,1,1,1,1].map((item,index)=><CategoryCard
                selectedCategpry={selectedCategpry}
                item={index}
                handleCategoryClick={handleCategoryClick}/>)}
            </section>
        </div>
    )
}

export default SalonServiceDetails;