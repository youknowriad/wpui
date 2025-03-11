import { useState } from "react";
import { DatePicker } from "@wordpress/components";

export default function CalendarPreview() {
  const [date, setDate] = useState<string | null>(null);

  return (
    <DatePicker currentDate={date} onChange={(newDate) => setDate(newDate)} />
  );
}
