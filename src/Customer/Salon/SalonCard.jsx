import React from "react";
import StarIcon from "@mui/icons-material/Star";

const SalonCard = () => {
    return(
        <div>
            <div className="w-56 md:w-80 rounded-md bg-slate-100">
                <img className="w-full h-[15rem] object-cover rounded-t-md" src="https://www.nokta.pk/uploads/shops/shop_10_1771893888_45186e00.png" alt=""/>
                <div className="p-5 space-y-2">
                    <h1>Saum Salon</h1>
                    <div className="text-white text-sm p-1 bg-greeen-700 rounded-full w-10 flex items-center justify-center gap-1">
                        4.5 <StarIcon sx={{fontSize:"16px"}}></StarIcon>
                    </div>
                    <p>Professional haircut and ..</p>
                    <p>saum house, Bihar</p>
                </div>
            </div>
        </div>
    )
}

export default SalonCard;