import React from "react";
import { useSelector } from "react-redux";

const Volleyball = () => {
  const {score} = useSelector(state=>state.user)
  return (
    <div className="bg-blue-500 h-[100vh]">
      <div className="grid grid-cols-3 gap-8 mx-60 pt-5">
      <div className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>IT-1 vs IT-2</p>
          <p>IT-1 : 10</p>
          <p>ECE-3 : 15</p>
        </div>
        {score && score.filter((score)=>score.sports==="volleyball").map((data)=>(<div key = {data.score1} className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>{data.team1} vs {data.team2}</p>
          <p>{data.team1} : {data.score1}</p>
          <p>{data.team2} : {data.score2}</p>
        </div>
        ))}
        

      </div>
      <div className="grid grid-cols-2 gap-8 mx-8 mt-10">
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold">
          CBIT hosts a thrilling volleyball match between Civil-1 and ECE-3
          </h2>
          <p className="text-md mt-4">
          The stage was set and the crowd was ready as Civil-1 and ECE-3 faced off in a highly-anticipated volleyball match at CBIT. Both teams had been preparing for this match for weeks and tensions were high as they stepped onto the court. The match began with a strong showing from Civil-1, who took an early lead with their powerful serves and precise shots. ECE-3, however, quickly adapted to their opponents' playing style and began to close the gap. The first set was a back-and-forth battle, with both teams showing off their skills and determination. In the end, it was ECE-3 who emerged victorious, winning the first set 25-19. The second set was even more intense, with both teams fighting tooth and nail for every point. The score was tied several times, and the crowd was on the edge of their seats as the match went into double overtime. In the end, it was ECE-3 who came out on top, winning the second set 29-27 and securing their victory in the match. The players and fans of ECE-3 celebrated their victory on the court, while Civil-1 graciously accepted their defeat. Despite the loss, Civil-1 can hold their heads high, knowing that they put up a strong fight against a worthy opponent. This match was a testament to the dedication and hard work of both teams, and the sportsmanship and camaraderie displayed by all players was truly inspiring. The match was a great success and it was an honor to host such a thrilling event.
          </p>
        </div>
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold text-center">
          Guna Drags ECE-3 to Finals in Thrilling Volleyball Semi-Final Match
          </h2>
          <p className="text-md mt-4">
          In a closely contested volleyball semi-final match, Guna's efforts led ECE-3 to a win against CSE-4, securing their place in the final. The match was filled with excitement and tension as both teams fought hard to gain the upper hand. Despite Karthik's valiant efforts for CSE-4, ECE-3's strong teamwork and Guna's outstanding performance proved to be the difference in the match. Guna's powerful serves and precise spikes kept CSE-4 on the back foot, and their excellent defense prevented any comeback from the opposing team. The win marks ECE-3's progression to the finals, where they will face a tough challenge from the winner of the other semi-final match. The final promises to be a thrilling encounter, with both teams determined to come out on top.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volleyball;
