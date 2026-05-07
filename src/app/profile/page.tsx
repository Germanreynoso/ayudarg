import ProfileTemplate from "@/components/ProfileTemplate";

export default function PedroProfile() {
    return (
        <ProfileTemplate 
            name="Pedro Gerardo Reynoso"
            location="San Miguel de Tucumán"
            image="/pedro_reynoso_v2.png"
            emergencyInfo="Pedro puede estar desorientado. Por favor, háblele con tono suave y manténgalo en un lugar seguro hasta que llegue asistencia médica o su familiar Silvia Arias."
            importantNotes=""
            contacts={[
                { name: "Silvia Arias", relation: "Familiar", phone: "+543814028779" }
            ]}
            medicalData={[
                { label: "Obra Social", value: "Ospe" },
                { label: "Domicilio", value: "Av Independencia 3200" }
            ]}
        />
    );
}
