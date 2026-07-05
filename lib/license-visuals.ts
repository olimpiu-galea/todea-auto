export type VehicleVisual = "moto" | "auto" | "truck" | "bus" | "help";

export const LICENSE_VISUAL: Record<string, VehicleVisual> = {
  A: "moto",
  A1: "moto",
  A2: "moto",
  "A1 automat": "moto",
  B: "auto",
  "B automat": "auto",
  BE: "auto",
  B96: "auto",
  C: "truck",
  CE: "truck",
  D: "bus",
  "Nu știu încă": "help",
};

export const LICENSE_ICON: Record<VehicleVisual, string> = {
  moto: "/images/icons/moto.png",
  auto: "/images/icons/auto.png",
  truck: "/images/icons/truck.png",
  bus: "/images/icons/bus.png",
  help: "/images/icons/help.png",
};

export const LICENSE_ICON_ALT: Record<VehicleVisual, string> = {
  moto: "Motociclete",
  auto: "Autoturisme",
  truck: "Camioane",
  bus: "Autobuze",
  help: "Nespecificat",
};
