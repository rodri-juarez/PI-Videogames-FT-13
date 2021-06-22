import { IconContext } from "react-icons";
import {
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
    RiNumber6,
    RiNumber7,
  } from "react-icons/ri";


export default function BottomPagination({ number }) {

   const iconNumber= {
       1: <RiNumber1 />,
       2: <RiNumber2 />,
       3: <RiNumber3 />,
       4: <RiNumber4 />,
       5: <RiNumber5 />,
       6: <RiNumber6 />,
       7: <RiNumber7 />,
       
   }

   const iconDefault = <RiNumber1 />;

  const icon = iconNumber[number] ? iconNumber[number] : iconDefault;


    return (
<IconContext.Provider
        /* value={{ style: { fontSize: "20px", color: "rgb(125, 125, 125)" } }} */
      >
        <div
          style={{
            marginRight: "5px",
          }}
        >
          {icon}
        </div>
      </IconContext.Provider>

    )
}