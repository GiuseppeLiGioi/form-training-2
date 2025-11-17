import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="new1" options={{ title: "New1" }} />
      <Tabs.Screen name="new2" options={{ title: "New2" }} />
    </Tabs>
  );
}
