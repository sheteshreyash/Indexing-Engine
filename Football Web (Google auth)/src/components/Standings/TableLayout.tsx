import React from "react";
import { Team } from "./StandingLayout.types";
import { useNavigate } from "react-router-dom";

const TableLayout = ({ teams }: any) => {
  const Navigate = useNavigate();

  const handleTeamClick = (teamDetail: Team) => {
    Navigate(`/leagues/teams/${teamDetail?.team?.id}`)
  }
  return (
    <table className="table-fixed mt-4 w-full rounded-md overflow-hidden shadow-md">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="w-1/12 py-3">Pos</th>
          <th className="w-3/12 py-3">Team</th>
          <th className="w-1/12 py-3">Pld</th>
          <th className="w-1/12 py-3">W</th>
          <th className="w-1/12 py-3">D</th>
          <th className="w-1/12 py-3">L</th>
          <th className="w-1/12 py-3">Pts</th>
        </tr>
      </thead>
      <tbody>
        {teams?.length > 0 &&
          teams.map((team: Team) => {
            const { id, name, crestUrl } = team.team;
            const { position, playedGames, won, draw, lost, points } = team;
            return (
              <tr key={id} onClick={()=>handleTeamClick(team)} className="transition-colors hover:bg-blue-50">
                <td className="px-4 py-3 text-center">{position}</td>
                <td className="px-4 py-3 flex items-center">
                  <img
                    src={crestUrl}
                    alt={`${name} crest`}
                    className="w-8 h-8 mr-2"
                  />
                  <span>{name}</span>
                </td>
                <td className="px-4 py-3 text-center">{playedGames}</td>
                <td className="px-4 py-3 text-center">{won}</td>
                <td className="px-4 py-3 text-center">{draw}</td>
                <td className="px-4 py-3 text-center">{lost}</td>
                <td className="px-4 py-3 text-center">{points}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableLayout;
