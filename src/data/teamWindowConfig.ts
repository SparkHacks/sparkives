export const teamWindowConfig = {
  // special case for 2023! webdev/outreach were combined into media
  2023: [
    { id: "win-2023-directors", label: "Directors", teamKey: "directors", title: "2023 Directors", x: 260, y: 280, width: "820px", color: "orange" },
    { id: "win-2023-comms", label: "Comms", teamKey: "communications", title: "2023 Communications Team", x: 300, y: 320, width: "860px", color: "pink" },
    { id: "win-2023-logistics", label: "Logistics", teamKey: "logistics", title: "2023 Logistics Team", x: 300, y: 320, width: "920px", color: "green" },
    { id: "win-2023-experience", label: "Experience", teamKey: "experience", title: "2023 Experience Team", x: 380, y: 400, width: "920px", color: "yellow" },
    { id: "win-2023-media", label: "Media", teamKey: "media", title: "2023 Media Team", x: 340, y: 360, width: "920px", color: "purple" },
  ],
  2024: [
    { id: "win-2024-directors", label: "Directors", teamKey: "directors", title: "2024 Directors", x: 260, y: 280, width: "820px", color: "orange" },
    { id: "win-2024-comms", label: "Comms", teamKey: "communications", title: "2024 Communications Team", x: 300, y: 320, width: "860px", color: "pink" },
    { id: "win-2024-logistics", label: "Logistics", teamKey: "logistics", title: "2024 Logistics Team", x: 300, y: 320, width: "920px", color: "green" },
    { id: "win-2024-outreach", label: "Outreach", teamKey: "outreach", title: "2024 Outreach Team", x: 340, y: 360, width: "920px", color: "red" },
    { id: "win-2024-experience", label: "Experience", teamKey: "experience", title: "2024 Experience Team", x: 380, y: 400, width: "920px", color: "yellow" },
    { id: "win-2024-webdev", label: "Web Dev", teamKey: "webdev", title: "2024 Web Development Team", x: 420, y: 440, width: "980px", color: "blue" },
  ],
  2025: [
    { id: "win-2025-directors", label: "Directors", teamKey: "directors", title: "2025 Directors", x: 260, y: 280, width: "820px", color: "orange" },
    { id: "win-2025-comms", label: "Comms", teamKey: "communications", title: "2025 Communications Team", x: 300, y: 320, width: "860px", color: "pink" },
    { id: "win-2025-logistics", label: "Logistics", teamKey: "logistics", title: "2025 Logistics Team", x: 300, y: 320, width: "920px", color: "green" },
    { id: "win-2025-outreach", label: "Outreach", teamKey: "outreach", title: "2025 Outreach Team", x: 340, y: 360, width: "920px", color: "red" },
    { id: "win-2025-experience", label: "Experience", teamKey: "experience", title: "2025 Experience Team", x: 380, y: 400, width: "920px", color: "yellow" },
    { id: "win-2025-webdev", label: "Web Dev", teamKey: "webdev", title: "2025 Web Development Team", x: 420, y: 440, width: "980px", color: "blue" },
  ],
  2026: [
    { id: "win-2026-directors", label: "Directors", teamKey: "directors", title: "2026 Directors", x: 320, y: 340, width: "820px", color: "orange" },
    { id: "win-2026-comms", label: "Comms", teamKey: "communications", title: "2026 Communications Team", x: 360, y: 380, width: "860px", color: "pink" },
    { id: "win-2026-logistics", label: "Logistics", teamKey: "logistics", title: "2026 Logistics Team", x: 360, y: 380, width: "920px", color: "green" },
    { id: "win-2026-outreach", label: "Outreach", teamKey: "outreach", title: "2026 Outreach Team", x: 400, y: 420, width: "920px", color: "red" },
    { id: "win-2026-experience", label: "Experience", teamKey: "experience", title: "2026 Experience Team", x: 440, y: 460, width: "920px", color: "yellow" },
    { id: "win-2026-webdev", label: "Web Dev", teamKey: "webdev", title: "2026 Web Development Team", x: 480, y: 500, width: "980px", color: "blue" },
  ],
  // 2027's outreach was split back into design and media teams!
  2027: [
    { id: "win-2027-directors", label: "Directors", teamKey: "directors", title: "2027 Directors", x: 320, y: 340, width: "820px", color: "orange" },
    { id: "win-2027-comms", label: "Comms", teamKey: "communications", title: "2027 Communications Team", x: 360, y: 380, width: "860px", color: "pink" },
    { id: "win-2027-logistics", label: "Logistics", teamKey: "logistics", title: "2027 Logistics Team", x: 360, y: 380, width: "920px", color: "green" },
    { id: "win-2027-media", label: "Media", teamKey: "media", title: "2027 Media Team", x: 400, y: 420, width: "920px", color: "red" },
    { id: "win-2027-design", label: "Design", teamKey: "design", title: "2027 Design Team", x: 400, y: 420, width: "920px", color: "blue" },
    { id: "win-2027-experience", label: "Experience", teamKey: "experience", title: "2027 Experience Team", x: 440, y: 460, width: "920px", color: "yellow" },
    { id: "win-2027-webdev", label: "Web Dev", teamKey: "webdev", title: "2027 Web Development Team", x: 480, y: 500, width: "980px", color: "purple" },
  ],
  // add future years here!
} as const;