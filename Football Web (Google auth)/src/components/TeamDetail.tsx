import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TeamDetail = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [teamData, setTeamData] = useState<any>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          `https://api.football-data.org/v2/teams/${id}`,
          {
            headers: {
              "X-Auth-Token": import.meta.env.VITE_APP_FOOTBALL_API_TOKEN,
            },
          }
        );
        setTeamData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTeamData();
  }, [id]);

  const handleBackBtnClick = () => {
    Navigate("/leagues");
  };

  console.log(teamData);
  return (
    <div className="container mx-auto py-8">
      <button
        onClick={handleBackBtnClick}
        className="flex items-center px-4 py-2 mb-4 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20v-2z"
          />
        </svg>
        <span>Back</span>
      </button>
      <h1 className="text-2xl font-bold mb-4">Team Detail</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-beige rounded-lg shadow p-4 hover:bg-beige-dark hover:shadow-lg cursor-pointer">
          {teamData && (
            <>
              <h2 className="text-lg font-bold mb-2 text-limegreen-600">
                Logo
              </h2>
              <img
                src={teamData.crestUrl}
                alt={teamData.crestUrl}
                className="w-20 h-20 mr-2"
              />
            </>
          )}
        </div>
        <div className="bg-cyan rounded-lg shadow p-4 hover:bg-cyan-dark hover:shadow-lg cursor-pointer">
          {teamData && (
            <>
              <h2 className="text-lg font-bold mb-2 text-limegreen-600">
               Club Name
              </h2>
              <p className="text-4xl font-semibold">{teamData.name}</p>
            </>
          )}
        </div>
        <div className="bg-darkturquoise  rounded-lg shadow p-4 hover:bg-cyan-dark hover:shadow-lg cursor-pointer">
          {teamData && (
            <>
              <h2 className="text-lg font-bold mb-2 text-limegreen-600">
                Founded
              </h2>
              <p className="text-4xl font-semibold">{teamData.founded}</p>
            </>
          )}
        </div>

        <div className="bg-red-400 rounded-lg shadow p-4 hover:bg-darkturquoise-dark hover:shadow-lg cursor-pointer">
          {teamData && (
            <>
              <h2 className="text-lg font-bold mb-2 text-skyblue-600">
                Country
              </h2>
              <p className="text-4xl font-semibold">{teamData.area.name}</p>
            </>
          )}
        </div>
        <div className="bg-springgreen rounded-lg shadow p-4 hover:bg-springgreen-dark hover:shadow-lg cursor-pointer">
          {teamData && (
            <>
              <h2 className="text-lg font-bold mb-2 text-skyblue-600">Venue</h2>
              <p className="text-4xl font-semibold">{teamData.venue}</p>
            </>
          )}
        </div>
      </div>
      <table className="table-fixed mt-12 w-full rounded-md overflow-hidden shadow-md">
        <thead className=" bg-cyan">
          <tr>
            <th className="w-1/12 py-3">Name</th>
            <th className="w-3/12 py-3">Nationality</th>
            <th className="w-1/12 py-3">Country Of Birth</th>
            <th className="w-1/12 py-3">Position</th>
            <th className="w-1/12 py-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {teamData?.squad?.length > 0 &&
            teamData?.squad.map((team: any) => {
              const { id, name, nationality, position, countryOfBirth, role } =
                team;
              return (
                <tr key={id} className="transition-colors hover:bg-blue-50">
                  <td className="px-4 py-3 text-center">{name}</td>
                  <td className="px-4 py-3 text-center">{nationality}</td>
                  <td className="px-4 py-3 text-center">{countryOfBirth}</td>
                  <td className="px-4 py-3 text-center">{position}</td>
                  <td className="px-4 py-3 text-center">{role}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TeamDetail;
