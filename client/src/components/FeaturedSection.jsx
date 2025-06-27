import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets";

const FeaturedSection = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="flex items-center  justify-between  relative pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p>Now Streaming</p>
        <button
          onClick={() => navigate("/movies")}
          className="flex items-center gap-2 text-sm group cursor-pointer"
        >
          {" "}
          View All
          <ArrowRight className="w-4.5 h-4.5 transition group-hover:translate-x-0.5" />{" "}
        </button>
      </div>
      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
       {dummyShowsData.slice(0,4).map((show)=>(
        <MovieCard key={show._id} movie={show}/>
       ))}
      </div>
      <div className="flex justify-center  mt-20 ">
        <button onClick={()=>{navigate("/movies"); scrollTo(0,0)}} className="bg-primary hover:bg-primary-dull transition-all cursor-pointer py-3 px-10 mb-10 rounded-xl font-medium text-md">
            Show more 
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
