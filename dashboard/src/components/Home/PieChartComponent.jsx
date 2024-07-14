import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Product A", value: 400, color: "#8884d8" },
  { name: "Product B", value: 300, color: "#82ca9d" },
  { name: "Product C", value: 300, color: "#ffc658" },
  { name: "Product D", value: 200, color: "#f4511e" },
  { name: "Product E", value: 100, color: "#9e9e9e" },
];

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
