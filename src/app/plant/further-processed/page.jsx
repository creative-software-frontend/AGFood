import PlantInfoSection from "@/components/sections/PlantInfoSection";


export default function FurtherProcessedPlantPage() {
  return (
    <PlantInfoSection
      title="Further Processed"
      bgImage="/images/plant/further-processed.jpg"
      leftItems={[
        "Establishment: June 2016",
        "Location: Doniachala, Mouchak, Gazipur",
        "Production Capacity: 4.5 MT/Day",
        "Cold Room: 2 Nos",
      ]}
      rightItems={[
        "Blast Freezing Room: 2 Nos",
        "Flake Ice Machine",
        "Security: Pest Control, etc.",
        "Water Plant: WTP & ETP",
      ]}
    />
  );
}
