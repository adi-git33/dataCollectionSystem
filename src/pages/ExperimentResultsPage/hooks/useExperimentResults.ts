import { useHistoryStore } from "../../../store/useHistoryStore";

export const useExperimentResults = () => {
  const { lastSession } = useHistoryStore();

  const page1Columns = [
    { field: "buttonType", headerName: "Button Type" },
    { field: "value", headerName: "Value" },
    { field: "timestamp", headerName: "Timestamp" },
  ];

  const page2Columns = [
    { field: "count", headerName: "Click Count" },
    { field: "timestamp", headerName: "Timestamp" },
  ];

  const page1Data = lastSession?.page1Clicks
    .filter((click) => click.buttonType !== "submit")
    .map((click) => ({
      buttonType: click.buttonType,
      value: click.value,
      timestamp: new Date(click.timestamp).toLocaleString(),
    })) || [];

  const page2Data = lastSession?.page2BucketClicks.map((timestamp, index) => ({
    count: index + 1,
    timestamp: new Date(timestamp).toLocaleString(),
  })) || [];

  const formatDuration = (ms: number | null) => {
    if (ms === null) return "N/A";
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const formatTime = (isoString: string | null) => {
    if (!isoString) return "N/A";
    return new Date(isoString).toLocaleString();
  };

  const page1SubmitClick = lastSession?.page1Clicks.find(
    (c) => c.buttonType === "submit"
  );

  const calculatePart1Duration = () => {
    if (!lastSession?.startTime || !page1SubmitClick?.timestamp) return null;
    const start = new Date(lastSession.startTime).getTime();
    const end = new Date(page1SubmitClick.timestamp).getTime();
    return end - start;
  };

  const part1Stats = [
    {
      label: "Total Duration",
      value: formatDuration(calculatePart1Duration()),
      highlight: true,
    },
    {
      label: "First Click",
      value: formatTime(lastSession?.page1FirstClick || null),
    },
    {
      label: "Submit Time",
      value: formatTime(page1SubmitClick?.timestamp || null),
    },
  ];

  const part2Stats = [
    {
      label: "Total Bucket Duration",
      value: formatDuration(lastSession?.page2TotalDuration || null),
      highlight: true,
    },
    {
      label: "First Click",
      value: formatTime(lastSession?.page2FirstClick || null),
    },
    {
      label: "Submit Time",
      value: formatTime(lastSession?.page2SubmitTime || null),
    },
  ];

  return {
    lastSession,
    page1Columns,
    page2Columns,
    page1Data,
    page2Data,
    part1Stats,
    part2Stats,
  };
};
