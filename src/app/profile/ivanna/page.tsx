import ProfileTemplate from "@/components/ProfileTemplate";

export default function IvannaProfile() {
    return (
        <ProfileTemplate 
            name="Ivanna Gutiérrez"
            location="San Miguel de Tucumán"
            image="/ivanna_profile.png"
            emergencyInfo="Tengo epilepsia. Puedo presentar episodios de desconexión, desorientación, deambulación y pérdida de memoria. Si me ves confundida, caminando sin rumbo, sin responder bien o sin recordar dónde estoy, por favor no me dejes sola. Acompañame a un lugar seguro y comunicate con mis contactos."
            importantNotes="No me sujetes con fuerza, no me des agua ni medicación por boca durante el episodio. Si convulsiono, protegé mi cabeza y llamá a emergencias."
            contacts={[
                { name: "Matías", relation: "Marido", phone: "+543816530520" },
                { name: "Elena", relation: "Mamá", phone: "+543815931868" },
                { name: "Nahuel", relation: "Hijo", phone: "+543814650776" }
            ]}
            medicalData={[
                { label: "Condición", value: "Epilepsia" },
                { label: "Alerta", value: "Episodios de desorientación" }
            ]}
        />
    );
}
