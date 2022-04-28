import React from 'react';

const FoodItem = (props) => {
    return (
        <div class="relative">
            <div class="relative group">
                <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img class="w-full" src={props.img} alt="" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button class="dark:bg-gray-800 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                        Add to bag
                    </button>
                </div>
            </div>
            <p class="font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{props.title}</p>
            <p class="font-semibold text-xl leading-5 text-gray-800 mt-4">${props.price}</p>
            <p class="font-semibold text-xl leading-5 text-gray-700 mt-4">{props.weight} grams</p>
        </div>
    )
}

export default FoodItem;