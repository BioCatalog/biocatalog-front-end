import { Slot } from "expo-router";
import "@/global.css";
import Header from "@/components/layout/header";
import React from "react";

export default function Layout() {
    return (
        <>
            <Slot />
        </>
    )
}