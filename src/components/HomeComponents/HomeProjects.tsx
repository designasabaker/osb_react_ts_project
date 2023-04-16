import React from "react";
import {HomePageStories, HomePageProducts} from '../../data/HomePageData';

export const HomeProjects = () => {
    return (
        <div id={"homeStories"} className={"grid grid-cols-1 px-6 lg:px-48 lg:grid-cols-2 w-full mt-16 "}>
            {HomePageProducts.map((section, index: number) => (
                <div className={`w-full h-auto m-0 px-12 flex flex-col justify-start`} key={index}>
                    <div className="w-full pr-3 py-3 flex flex-col justify-start">
                        <h1 className="text-xl md:text-2xl text-textBlack flex items-center py-3">{section.title}</h1>
                        <p className="text-sm text-osbDeepBlue lg:flex items-center">{section.caption}</p>
                    </div>
                    {/* products part */}
                    <div className={"flex flex-col py-6 justify-start"}>
                        {!!section.contents && section.contents.map((product, index: number) => (
                            <div className={"m-0 mb-1 p-3 flex flex-row justify-start bg-lightGrayBlue rounded-sm"} key={index}>
                                <div className={"mr-3"}>
                                    {!!product.img && <img className={"w-16 h-16 overflow-hiddenobject-contain"} src={product.hasOwnProperty("img") ? product.img : ""} alt={product.title}/>}
                                </div>
                                <div>
                                    <h1 className={"text-md font-heading"}>{product.title}</h1>
                                    <p className={"text-sm"}>{product.content}</p>
                                </div>
                            </div>))}
                    </div>
                </div>
            ))}
        </div>
    );
}