import React from "react";
import { useSelector } from "react-redux";

const Cricket = () => {
  const {score} = useSelector(state=>state.user)
  return (
    <div className="bg-blue-500 h-[100vh]">
      <div className="grid grid-cols-3 gap-8 mx-60 pt-5">
      <div className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>IT-1 vs IT-2</p>
          <p>IT-1 : 120/3</p>
          <p>IT-2 : 90/10</p>
        </div>
        {score && score.filter((score)=>score.sports==="cricket").map((data)=>(<div key = {data.score1} className="flex w-2/3 items-center flex-col bg-slate-600 justify-center h-52 mx-42 rounded-lg">
          <p>{data.team1} vs {data.team2}</p>
          <p>{data.team1} : {data.score1}</p>
          <p>{data.team2} : {data.score2}</p>
        </div>
        ))}
        

      </div>
      <div className="grid grid-cols-2 gap-8 mx-8 mt-10">
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold">
            CBIT IT-1 falls short as ECE-3 wins Cricket Final
          </h2>
          <p className="text-md mt-4">
            Hyderabad, India - In a closely contested final, the ECE-3 team
            emerged victorious over IT-1 in the annual cricket tournament at
            CBIT. The match, held at the college's sports grounds, saw both
            teams put up a strong performance, but ultimately it was ECE-3 who
            came out on top.One of the highlights of the match was the
            incredible performance of ECE-3 player Varun Vinod, who scored an
            impressive 100 runs not once, but four times in a row. His
            outstanding performance played a crucial role in securing the win
            for his team. IT-1 put up a valiant effort, but ultimately fell
            short of their opponents. Despite the loss, the team can hold their
            heads high as they have been the runner-ups for 4 consecutive years.
            The ECE-3 team, led by captain Rohan Sharma, can now look forward to
            the inter-college tournament where they will represent CBIT. The
            college management and students congratulated the ECE-3 team for
            their victory and wished them all the best for the upcoming
            tournament. It was a nail-biting finish to an exciting tournament,
            and fans of both teams can look forward to more thrilling matches in
            the future.
          </p>
        </div>
        <div className="bg-red-700 p-4 flex items-center flex-col rounded-2xl">
          <h2 className="text-2xl font-semibold text-center">
            IT-1 and IT-2 faced off in a highly anticipated second-round cricket
            knockout match
          </h2>
          <p className="text-md mt-4">
            IT-1 made the bold decision to chase and take first strike, and
            Sravan of IT-2 made quick runs to put early pressure on the
            opposition. However, IT-1 fought back with consecutive wickets and
            managed to keep the scoring rate in check. Despite Rahul's best
            efforts, IT-2 fell short in their pursuit of the target set by IT-1.
            The match was a nail-biter until the end, with both teams giving it
            their all. In the end, it was IT-1 who emerged victorious, much to
            the delight of their fans. The match was a testament to the skills
            and tenacity of both teams, and the sportsmanship displayed on the
            field was truly impressive. The players of IT-1 will now look ahead
            to the next round, where they will look to continue their winning
            streak. The loss for IT-2, while disappointing, will serve as a
            valuable learning experience for the team, and they will look to
            come back stronger in their next match.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cricket;
