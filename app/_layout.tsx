import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SQLiteProvider } from "expo-sqlite";
import initializeDatabase, { refactorDatabase } from "@/database/initializeDatabase";
import { AuthProvider } from "@/context/auth";

export default function Layout() {
    return (
        <GluestackUIProvider>
            <SQLiteProvider databaseName="biocatalog.db" onInit={initializeDatabase}>
                <AuthProvider><Slot /></AuthProvider>
            </SQLiteProvider>
        </GluestackUIProvider>
    )
}