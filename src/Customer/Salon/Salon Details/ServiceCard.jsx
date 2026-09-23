import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

const ServiceCard = () => {
    return(
    <div className="w-full">
        <div className="flex items-center justify-between gap-5">
            <div className="space-y-1 w-[60%]">
                <h1 className="text-2xl font-semibold">Man Beard</h1>
                <p className="text-gray-500 text-sm">Stylish men beard</p>
                <div className="flex items-center gap-5">
                <p>Rs 399</p>
                <FiberManualRecord sx ={{ fontSize: "10px", color: "gray" }} />
                <p>45 mins</p>
                </div>
            </div>
            <div className="space-y-3">
                <img className="w-32 h-32 object-cover rounded-md" src="https://tse3.mm.bing.net/th/id/OIP.4xT8AKt-SOJzh47sVBpcpQHaFj?r=0&pid=Api&h=220&P=0" alt=""/>
                <button fullWidth variant="outlined">Add</button>
            </div>
        </div>

    </div>
    );
}

export default ServiceCard;