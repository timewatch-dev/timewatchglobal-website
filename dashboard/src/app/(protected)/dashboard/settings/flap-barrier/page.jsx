"use client";

import React from "react";
import StaticBreadcrumb from "@/components/DynamicBreadcrumb";
import FlapBarrierSettingsForm from "@/features/flapBarrierSettings/components/FlapBarrierSettingsForm";

export default function FlapBarrierSettingsPage() {
  return (
    <div className="p-6">
      <StaticBreadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Flap Barrier Settings" },
        ]}
      />
      <h1 className="font-bold text-2xl text-foreground mt-2 mb-6">
        Flap Barrier Settings
      </h1>
      <FlapBarrierSettingsForm />
    </div>
  );
}
