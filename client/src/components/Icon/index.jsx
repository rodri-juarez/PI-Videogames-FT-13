import { IconContext } from "react-icons";
import {
  GiBroadsword,
  GiBrain,
  GiArson,
  GiCard10Clubs,
  GiCarWheel,
  GiCube,
  GiBackup,
  GiPistolGun,
} from "react-icons/gi";

export default function Icon({ name }) {
  const iconGenres = {
    RPG: <GiBackup />,
    Strategy: <GiBrain />,
    Action: <GiBroadsword />,
    Indie: <GiArson />,
    Adventure: <GiArson />,
    Shooter: <GiPistolGun />,
    Casual: <GiCube />,
    Simulation: <GiBrain />,
    Arcade: <GiCube />,
    Puzzle: <GiCube />,
    Platformer: <GiBrain />,
    Racing: <GiCarWheel />,
    "Massively Multiplayer": <GiArson />,
    Sports: <GiBrain />,
    Fighting: <GiArson />,
    Family: <GiArson />,
    "Board Games": <GiCard10Clubs />,
    Educational: <GiBrain />,
    Card: <GiCard10Clubs />,
  };

  const iconDefault = <GiCube />;

  const icon = iconGenres[name] ? iconGenres[name] : iconDefault;

  return (
    <>
      <IconContext.Provider
        value={{ style: { fontSize: "22px", color: "rgb(140, 140, 140)" } }}
      >
        <div
          style={{
            marginRight: "5px",
          }}
        >
          {icon}
        </div>
      </IconContext.Provider>
    </>
  );
}
