import React from "react";
import { Metric } from "../../../Types";
import { Table } from "../../../Types";
// used to get a table's metrics and loading state
export const useTable = ({ table }: { table: Table }) => {
  const { columns, id } = table;
  const [metrics, setMetrics] = React.useState<Metric[]>([]);
  const cellWidth = 100 / columns.length; // used for dynamic table cell style widths

  // Generating Metrics Dictionary for speed
  const metricsDictionary: { [key: string]: any } = {};
  metrics.forEach((metric) => {
    if (!metricsDictionary[metric.column]) {
      metricsDictionary[metric.column] = metric.currentValue;
    } else {
      const displayValue =
        metricsDictionary[metric.column] < metric.currentValue
          ? `${metricsDictionary[metric.column]} - ${metric.currentValue}`
          : `${metric.currentValue} - ${metricsDictionary[metric.column]}`;

      metricsDictionary[metric.column] = displayValue;
    }
  });

  React.useEffect(() => {
    const url = `https://interview.torodata.io/metrics/${id}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: Metric[]) => {
        setMetrics(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return { cellWidth, metricsDictionary };
};
