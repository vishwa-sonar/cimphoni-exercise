import DashboardConsumer from "./DashboardConsumer";
import DashboardProvider from "./DashboardProvider";
import Details from "./[id]/page";

const Dashboard: React.FC = () => {
  return (
    <div>
      <DashboardProvider>
        <DashboardConsumer />
        <Details />
      </DashboardProvider>
    </div>
  );
};

export default Dashboard;
