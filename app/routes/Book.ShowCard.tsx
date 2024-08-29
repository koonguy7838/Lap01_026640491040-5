import { useState } from "react";
import { data_Book } from "./data";
// import Navbar from "./Template/Nav";

export default function CardBook(){
    const dataBook = data_Book;

    function Bestseller(
        {active}:{active:boolean}
    ){
        if(active){
            return <p className="text-yellow-600">Bestseller</p>
        }else{
            return ""
        }
    }

    function Flashsell(
        {active}:{active:boolean}
    ){
        if(active){
            return <p className="text-red-600">Flashsell</p>
        }else{
            return ""
        }
    }

    return(
        <div>
        <div className="font-sans p-12 rounded-xl">   
        <h1 className="text-4xl mb-4">รายการโครงงาน</h1>
            {
                dataBook.map(item => (
                    <div key={item.Code}> 
                            <a href={`/Book/detail/${item.Code}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.Cover} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.Title}</h5>
                                    <p>ISBN : {item.Code}</p>
                                    <p>ผู้เขียน : {item.Author}</p>
                                    <p>สำนักพิมพ์ : {item.Pubishing}</p>
                                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Description}</p> */}
                                    <div className="grid md:grid-cols-2">
                                        <div>
                                            <Bestseller active={item.Bestseller} />
                                            <Flashsell active={item.Flashsale} />
                                            <p>{item.Flashsale}</p>
                                        </div>
                                        <div>
                                            <p>Price : {item.Price}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        )
                    )
                    
            }
        </div>
        </div>
    );
}