import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InventoryIcon from "@mui/icons-material/Inventory";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";

export const ListItemSidebar: any[] = [
  {
    id: "dashboard",
    text: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    id: "orders",
    text: "Mis presupuestos",
    icon: AssignmentIcon,
    path: "/presupuesto",
  },
  {
    id: "inventory",
    text: "Mis productos",
    icon: InventoryIcon,
    path: "/productos",
  },
  {
    id: "customers",
    text: "Mis clientes",
    icon: EmojiPeopleIcon,
    path: "/clientes",
  },
];

export const ListItemSidebarPersonal: any[] = [
  {
    id: "company",
    text: "Empresa",
    icon: BusinessIcon,
    path: "/empresa",
  },
  {
    id: "settings",
    text: "Configuración",
    icon: SettingsIcon,
    path: "/configuracion",
  },
];
