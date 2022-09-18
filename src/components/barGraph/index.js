import "chart.js/auto"
import { Chart } from "react-chartjs-2"

const Index = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <Chart
        type="bar"
        style={{ maxWidth: "900px", maxHeight: "700px" }}
        data={{
          labels: ["Total", "Presentes", "Ausentes  "],
          datasets: [
            {
              id: 1,
              label: "6ª Ano A",
              data: [10, 5, 5],
            },
          ],
        }}
      />
    </div>
  )
}

export default Index
