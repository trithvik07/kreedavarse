import React from "react";
import { useSelector } from "react-redux";

const Badminton = () => {
  const {score} = useSelector(state=>state.user)
  return (
    <div className="bg-blue-500 h-[100vh]">
      <div className="grid grid-cols-3 gap-8 mx-60 pt-5">
      <div className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>IT-1 vs IT-3</p>
          <p>IT-1 : 2 set</p>
          <p>IT-3 : 1 set</p>
        </div>
        {score && score.filter((score)=>score.sports==="badminton").map((data)=>(<div key = {data.score1} className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>{data.team1} vs {data.team2}</p>
          <p>{data.team1} : {data.score1}</p>
          <p>{data.team2} : {data.score2}</p>
        </div>
        ))}
        

      </div>
      <div className="grid grid-cols-2 gap-8 mx-8 mt-10">
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold">
          A match that will never be forgetten
          </h2>
          <p className="text-md mt-4">
          The highly anticipated badminton match between ECE-3 and Civil-2 was filled with excitement and drama as both teams fought hard for the win. In the first set, a national-level player from Civil-2 made an excellent comeback, rallying from 19-9 down to ultimately win 19-21. Civil-2 took a 1-0 lead in the match, but their victory was short-lived as ECE-3 came back strong in the second set, leveling the score. The third set was a battle of wits and skills as both teams fought for every point. However, it was ECE-3 who came out on top, defeating Civil-2 by a huge margin and securing their victory in the match. The players of ECE-3 displayed excellent teamwork and determination, much to the delight of their fans. The loss for Civil-2 was a disappointment, but they can take solace in the fact that they fought hard and gave their all in the match. The team will look to bounce back in their next game, and the players will no doubt take the lessons learned from this match and use them to improve their performance. Overall, the match was a showcase of the talent and skill of the players, and a testament to the high standard of badminton in the country. Fans and spectators are already looking forward to the next big game, and the excitement is sure to be just as intense as this match was.
          </p>
        </div>
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold text-center">
          The deadly duo defeat mighty Guna
          </h2>
          <p className="text-md mt-4">
          The Badminton final between Cse-3 and Ece-3 was played. It was an intense match between the teams. Each team won a single match and the double was the decider. The doubles match was equally thrilling, as the CSE-3 team of Virat and Raghav took on the ECE-3 team of Guna and Ajay. The match was closely contested, with both teams showing impressive skill and teamwork on the court. However, in the end, it was Virat and Raghav who came out on top, securing the doubles win for CSE-3. With the win in both singles and doubles, CSE-3 secured the overall victory in the tournament. The team and their fans celebrated the hard-fought victory, while ECE-3 congratulated them on their success. The match was a showcase of the incredible talent and sportsmanship that both teams possess, and it is sure to go down in the annals of college sports history as one of the most exciting and closely-contested badminton tournaments of all time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Badminton;
