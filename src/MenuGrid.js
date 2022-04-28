import React, { useState } from 'react';
import foods from './foodData';
import FoodItem from './FoodItem';
import maxBeauty from './CalculatePrice';
import swal from 'sweetalert';

const shuffled_foods = foods
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const MenuGrid = () => {
    const [vals, setVals] = useState({
        weight: '',
        popup: false
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let foodsForMaxPrice = maxBeauty(shuffled_foods, vals.weight);
        let totalPrice = 0;
        let totalWeight = 0;
        foodsForMaxPrice.forEach(i => {
            totalPrice += i.price;
            totalWeight += i.weight;
        });
        let strFoods = '';
        foodsForMaxPrice.forEach(food => {
            strFoods += (food.title + ": $" + food.price);
            strFoods += "\n";
        })
        let alertText = 'Your max purchase is: $' + totalPrice + "\n\n" + strFoods + "\nTotal Weight: " + totalWeight + " grams";
        swal({
            title: "Max Price Calculation!",
            text: alertText
        });
    }

    const handleChange = (event) => {
        setVals({
            ...vals,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div class="2xl:container 2xl:mx-auto">
            <div class="bg-gray-50 dark:bg-gray-900 text-center lg:py-5 md:py-8 py-6">
                <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">Greedy Buffet 1.0</p>
            </div>
            <div class="py-2 lg:px-10 md:px-6 px-4">
                <p class="font-normal text-sm leading-3 text-gray-600 dark:text-gray-300">Find max price of meals you can eat</p>
                <hr class="w-full bg-gray-200 my-6" />
    
                <div class="flex justify-between items-center">
                    <div class="flex space-x-3 justify-center items-center text-gray-800 dark:text-white">
                      <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1.svg" alt="toggler" />
                      <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1dark.svg" alt="toggler" />
                        <p class="font-normal text-base leading-4 text-gray-800 dark:text-white">Filter</p>
                    </div>
                    <p class="cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600 dark:text-gray-300">Showing {foods.length} products</p>
                </div>
    
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    {shuffled_foods.map(food => (
                        <FoodItem
                            title={food.title}
                            price={food.price}
                            weight={food.weight}
                            img={food.img}
                        />
                    ))}
                </div>
    
                <form>
                    <div className='flex items-center justify-center lg:mt-15 md:mt-12 mt-10 mb-48'>
                        <div class="bg-gray-50 p-1 ">
                            {/* <label className="pr-3 text-base font-semibold leading-none text-gray-800">What is max weight?</label>
                            <input name="weight" type="number" value={vals.weight} onChange={handleChange} className="placeholder-gray-400" placeholder="Your Weight Limit" /> */}
                            <input name="weight" type="number" value={vals.weight} onChange={handleChange}
                                    class="focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:bg-transparent 
                                    dark:placeholder-gray-400  focus:outline-none px-2 border-b border-gray-200 
                                    leading-4 text-base placeholder-gray-600 py-4 w-full" placeholder="Max Weight? (in grams)   " />
                        </div>
                        <button onClick={handleSubmit} class="hover:bg-gray-700 
                                        dark:text-gray-300 focus:ring-2 focus:ring-offset-2 
                                        focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto 
                                        w-full text-white font-medium text-base leading-4">
                            Maximize Price
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MenuGrid;