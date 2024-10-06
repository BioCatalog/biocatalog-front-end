import { Slot } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SQLiteProvider } from "expo-sqlite";
import initializeDatabase from "@/database/initializeDatabase";

export default function Layout() {
    return (
        <GluestackUIProvider>
            <SQLiteProvider databaseName="biocatalog" onInit={initializeDatabase}>
                <Slot />
            </SQLiteProvider>
        </GluestackUIProvider>
    )
}