import { BarChart } from "@mui/x-charts/BarChart";
import { useMembersContext } from "../../context/MembersContext";

export default function BasicBars() {
  const { members, loading } = useMembersContext();

  const nameData = members.map((member) => member.name);
  const balanceData = members.map((member) => member.balance);
  const overdraftData = members.map((member) => member.overdraft);

  if (loading) return <div>Loading...</div>;

  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: nameData }]}
      series={[
        { data: balanceData, label: "Balance" },
        { data: overdraftData, label: "Overdraft" },
      ]}
      width={800}
      height={400}
    />
  );
}
