"use client";
import { useDashboardContext } from "../DashboardProvider";

const Details: React.FC = () => {
  //   const PromptDetail = useContext(DashboardContext) as unknown as any;
  //   console.log("PromptDetail: ", PromptDetail);
  const { prompts } = useDashboardContext();
  console.log("{prompts}: ", prompts);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>
        {Array.isArray(prompts) &&
          prompts.length > 0 &&
          prompts.map((item) => {
            return <p>{item.name}</p>;
          })}
      </p>
    </div>
  );
};

export default Details;
