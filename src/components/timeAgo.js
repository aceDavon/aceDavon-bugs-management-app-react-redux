import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const Iso = parseISO(timestamp);
    const date = formatDistanceToNow(Iso);
    timeAgo = `${date} ago`;
  }

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
