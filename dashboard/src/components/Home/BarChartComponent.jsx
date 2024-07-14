import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Janvier", ventes: 65 },
  { name: "Février", ventes: 59 },
  { name: "Mars", ventes: 80 },
  { name: "Avril", ventes: 81 },
  { name: "Mai", ventes: 56 },
  { name: "Juin", ventes: 55 },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ventes" fill="#4F46E5" />
      {/* Exemple de trois couleurs différentes pour les barres */}
      <Bar dataKey="ventes" fill="#82ca9d" />
      <Bar dataKey="ventes" fill="#ffc658" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
