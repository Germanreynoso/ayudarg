"use client";

import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import styles from "@/app/profile/profile.module.css";
import { useEffect, useState } from "react";

interface Contact {
    name: string;
    relation: string;
    phone: string;
}

interface ProfileProps {
    name: string;
    location: string;
    image: string;
    emergencyInfo: string;
    importantNotes: string;
    contacts: Contact[];
    medicalData: { label: string; value: string }[];
}

export default function ProfileTemplate({
    name,
    location,
    image,
    emergencyInfo,
    importantNotes,
    contacts,
    medicalData
}: ProfileProps) {
    const [qrValue, setQrValue] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setQrValue(window.location.href);
        }
    }, []);

    const handleDownloadQR = () => {
        const svg = document.getElementById("qr-svg");
        if (!svg) return;
        
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new (window as any).Image();
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `qr-${name.toLowerCase().replace(/\s+/g, "-")}.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <div className={styles.body}>
            <div className={styles.phoneContainer}>
                <div className={styles.emergencyBanner}>
                    <h1><i className="fas fa-exclamation-circle"></i> AYUDA POR FAVOR</h1>
                </div>

                <div className={styles.profileHeader}>
                    <div className={styles.avatarContainer}>
                        <Image 
                            src={image} 
                            alt={name} 
                            fill 
                            priority
                            sizes="180px"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h2 className={styles.patientName}>{name}</h2>
                    <div className={styles.locationTag}>
                        <i className="fas fa-map-marker-alt"></i> {location}
                    </div>
                </div>

                <div className={styles.actionCard}>
                    <div className={styles.contactButtons}>
                        {contacts.length > 0 && (
                            <>
                                <a href={`tel:${contacts[0].phone}`} className={styles.btnMini} style={{ backgroundColor: "#2a9d8f" }}>
                                    <i className="fas fa-phone-alt"></i> Llamar
                                </a>
                                <a 
                                    href={`https://wa.me/${contacts[0].phone.replace(/\+/g, "")}?text=Hola,%20acabo%20de%20encontrar%20a%20${encodeURIComponent(name)}...`} 
                                    className={styles.btnMini} 
                                    style={{ backgroundColor: "#25D366" }}
                                >
                                    <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </>
                        )}
                    </div>

                    <div className={styles.qrWrapper}>
                        {qrValue && (
                            <QRCode 
                                id="qr-svg"
                                value={qrValue} 
                                size={150} 
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                viewBox={`0 0 256 256`}
                            />
                        )}
                        <div className={styles.downloadBadge} onClick={handleDownloadQR} title="Descargar QR">
                            <i className="fas fa-download"></i>
                        </div>
                    </div>
                    <span className={styles.qrLabel}>Identificación Única</span>
                </div>

                <div className={styles.infoCard}>
                    <h2><i className="fas fa-heart"></i> Información de Emergencia</h2>
                    <p style={{ marginTop: "8px", fontSize: "0.95rem", lineHeight: "1.5", color: "#4a5568" }}>
                        {emergencyInfo}
                    </p>
                    {importantNotes && (
                        <div style={{ marginTop: "15px", padding: "10px", backgroundColor: "rgba(230, 57, 70, 0.1)", borderRadius: "10px", borderLeft: "4px solid #e63946" }}>
                            <strong style={{ color: "#e63946", fontSize: "0.85rem", textTransform: "uppercase" }}>Importante:</strong>
                            <p style={{ fontSize: "0.9rem", color: "#1d3557", marginTop: "5px" }}>{importantNotes}</p>
                        </div>
                    )}
                </div>

                <div className={styles.dataTable}>
                    <h3 style={{ fontSize: "1rem", marginBottom: "10px", color: "#666" }}>Contactos de Emergencia</h3>
                    {contacts.map((contact, idx) => (
                        <div key={idx} className={styles.dataRow}>
                            <span className={styles.dataLabel}>{contact.name} ({contact.relation})</span>
                            <span className={styles.dataValue}>
                                <a href={`tel:${contact.phone}`} style={{ color: "inherit", textDecoration: "none" }}>{contact.phone}</a>
                            </span>
                        </div>
                    ))}
                    
                    <h3 style={{ fontSize: "1rem", marginTop: "20px", marginBottom: "10px", color: "#666" }}>Datos Adicionales</h3>
                    {medicalData.map((data, idx) => (
                        <div key={idx} className={styles.dataRow}>
                            <span className={styles.dataLabel}>{data.label}</span>
                            <span className={styles.dataValue}>{data.value}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.footerTag}>
                    Proyecto Identificación Solidaria <br />
                    Tucumán, Argentina - 2025 <br />
                    <Link 
                        href="/" 
                        style={{ color: "inherit", textDecoration: "underline", marginTop: "10px", display: "inline-block" }}
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
