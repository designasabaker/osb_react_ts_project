import React from "react";
import {HomePageStories, HomePageProducts} from '../../data/HomePageData';

export const HomeStories = () => {
    return (
        <div id={"homeStories"} className={"flex flex-col item-center w-full mt-16 "}>
            {HomePageStories.contents.map((story, index: number) => (
                // one section like "Our Ingredients.tsx"
                <div className={`w-full h-auto mt-16 py-0 px-3 lg:px-48 flex flex-col lg:flex-row justify-center items-center border-b-2 border-lightGrayBlue ${index % 2 === 1 ? 'flex-row' : 'flex-row-reverse'} `} key={index}>
                    {!!story.img && (<div className="w-2/3 lg:w-1/2 overflow-hidden flex flex-row justify-center">
                        <img className="max-h-full max-w-full object-contain px-6" src={story.img} alt={story.title} />
                    </div>)}
                    <div className="w-full lg:w-1/2 m-0 px-12 flex flex-col justify-center">
                        <h1 className="text-xl md:text-2xl text-textBlack flex items-center py-3">{story.title}</h1>
                        <p className="text-sm text-osbDeepBlue lg:flex items-center">{story.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}