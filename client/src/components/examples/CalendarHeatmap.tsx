import { CalendarHeatmap } from "../CalendarHeatmap";

export default function CalendarHeatmapExample() {
  const generateMockData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 83; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const total = 5;
      const count = Math.floor(Math.random() * (total + 1));
      
      data.push({
        date: dateStr,
        count,
        total,
      });
    }
    
    return data;
  };

  return (
    <div className="p-6 max-w-4xl">
      <CalendarHeatmap data={generateMockData()} />
    </div>
  );
}
