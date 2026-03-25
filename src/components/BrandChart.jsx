import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function BrandChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} >
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey="brand"  />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" />
      </BarChart>
    </ResponsiveContainer>
  );
}