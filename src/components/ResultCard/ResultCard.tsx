import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import TableComponent from "../TableComponent/TableComponent";
import Subtitle from "../Subtitle/Subtitle";

interface Stat {
  label: string;
  value: string | number;
  highlight?: boolean;
}

interface Column {
  field: string;
  headerName: string;
  [key: string]: string | number | boolean | undefined | null | object;
}

interface ResultCardProps {
  title: string;
  stats: Stat[];
  columns: Column[];
  data: Record<string, string | number | boolean | null>[];
}

const ResultCard = ({ title, stats, columns, data }: ResultCardProps) => {
  return (
    <Card variant="outlined" sx={{ height: "100%", borderRadius: 2 }}>
      <CardContent>
        <Subtitle title={title} />
        <Divider sx={{ mb: 2 }} />

        {/* Stats Row */}
        <Box sx={{ mb: 3, display: "flex", gap: 4, flexWrap: "wrap" }}>
          {stats.map((stat, index) => (
            <Box key={index}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                {stat.label}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: stat.highlight ? "bold" : "medium",
                  color: stat.highlight ? "primary.main" : "text.primary",
                }}
              >
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <TableComponent columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default ResultCard;
