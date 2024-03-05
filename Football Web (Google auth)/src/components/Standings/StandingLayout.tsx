import React, { useState, useEffect } from "react";
import axios from "axios";
import { League, Team } from "./StandingLayout.types";
import { leagues } from "../../constants/constants";
import TableLayout from "./TableLayout";
import Alert from "../../utils/Alert";
import { useSession } from "@descope/react-sdk";

const StandingLayout: React.FC = () => {
  const [league, setLeague] = useState<League | null>({
    code: 'PL',
    name: "Premier League"
  });
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [ apiError, setApiError] = useState({
    type: "",
    status: false,
    message: ""
  })
  const { isAuthenticated, isSessionLoading } = useSession();


  const fetchStandingData = async() => {
    if (!league) return;
    setLoading(true); // set loading to true before making the API call
    try{
      const {data} = await axios.get(
        `https://api.football-data.org/v2/competitions/${league.code}/standings`,
        {
          headers: {
            "X-Auth-Token": import.meta.env.VITE_APP_FOOTBALL_API_TOKEN,
          },
        }
      );
      setLoading(false)
      if(data?.standings?.length){
        setTeams(data.standings[0].table);
      }
    } catch(err: any){
      const error = err?.response?.data
      setLoading(false);
      if(error){
        console.log(error)
        setApiError({
          type: "error",
          status: true,
          message: error?.message
        })
      }
    }
  }


  useEffect(() => {
    setTeams([]);
    setApiError({
      type: "",
      status: false,
      message: ""
    })
    fetchStandingData();

  }, [league]);

  return (
    <div className="container mx-auto py-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800">House Of Football</h1>
        <p className="text-gray-600">Choose a league to view the standings:</p>
        <div className="flex justify-center mt-4">
          {leagues.map((l) => (
            <button
              key={l.code}
              onClick={() => setLeague(l)}
              className={`${
                league?.code === l.code
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              } px-4 py-2 rounded-md mx-2 transition-colors`}
            >
              {l.name}
            </button>
          ))}
        </div>
      </div>
      {apiError?.status && <Alert type={apiError.type} message={apiError.message}/>}
      {league && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">{league.name} Standings</h2>
          {loading ? ( // show spinner when loading is true
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
            </div>
          ) : (
           <TableLayout teams={teams}/>
          )}
        </div>
      )}
    </div>
  );
};

export default StandingLayout;
