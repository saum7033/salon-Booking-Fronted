
import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BookingCard = () => {
    return (
        <div className="p-5 rounded-md bg-slate-100 flex items-center justify-between">

            {/* LEFT SIDE - Booking Details */}
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Som Salon</h1>

                <div>
                    <li>hair cut</li>
                    <li>massage therapy</li>
                    <li>hair color</li>
                </div>

                <div>
                    <p>
                        Time & Date <ArrowRightAlt /> 2025-01-16
                    </p>

                    <p>12:00:00 To 12:45:00</p>
                </div>
            </div>

            {/* RIGHT SIDE - Image, Price & Status */}
            <div className="space-y-2 flex flex-col items-center">

                <img
                    className="h-28 w-28 object-cover rounded-md"
                    src="https://tse4.mm.bing.net/th/id/OIP.Qjv6_G3T2Ygx8WFsqpAmUwHaHa?r=0&pid=Api&h=220&P=0"
                    alt="Som Salon"
                />

                <p className="text-center">Rs 399</p>

                <Button
                    variant="outlined"
                    color="error"
                >
                    Cancelled
                </Button>

            </div>

        </div>
    );
};

export default BookingCard;
