import PlantInfoSection from "@/components/sections/PlantInfoSection";


export default function ProcessedPlantPage() {
  return (
    <PlantInfoSection
      title="Processed Plant"
      bgImage="/images/plant/processed.jpg"
      leftItems={[
        "Establishment: June 2015",
        "Location: Uzilab, Mawna, Gazipur",
        "Production Capacity: 01 MT/hr",
        "Cold Room: 2",
      ]}
      rightItems={[
        "Blast Freezing Room: 1",
        "Flake Ice Machine",
        "Water Plant: WTP & ETP",
        "Security: Footbath, Pest Control, etc.",
      ]}
    />
  );
}
