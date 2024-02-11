import React from "react";

const HeadlineCards = () => {
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt='/' />
            </div>
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt='/' />
            </div>
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <div className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</div>
                    <p className="px-2">Tasty Treats</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='/' />
            </div>
        </div>
    );
};

export default HeadlineCards;