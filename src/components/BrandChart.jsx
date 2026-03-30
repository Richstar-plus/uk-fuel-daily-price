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
<ResponsiveContainer width="100%" height={300}>
  <BarChart 
    data={data}
    margin={{ top: 10, right: 10, left: -20, bottom: 60 }}
  >
    <CartesianGrid strokeDasharray="3 3" />

    <XAxis
      dataKey="brand"
      interval={0}
      angle={-35}
      textAnchor="end"
      tick={{ fontSize: 10 }}
    />

    <YAxis tick={{ fontSize: 10 }} />

    <Tooltip />

    <Bar 
      dataKey="price"
      fill="#3b82f6"
      barSize={12}       // makes rectangles small
      maxBarSize={14}
    />
  </BarChart>
</ResponsiveContainer>
  );
}