"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode } from "lucide-react";

import "photoswipe/dist/photoswipe.css";

import CyberRoadmap from "./_components/CyberRoadmap";
import DisplayTeam from "@/components/DisplayTeam";
import DsaOnlineResources from "./_components/CyberResources";

export default function CyberResources() {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (localStorage) {
      setSelectedTab(localStorage.getItem("cyberSelectedTab") || "roadmap");
    } else {
      setSelectedTab("roadmap");
    }
  }, []);

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-purple-950 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-4 text-balance"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Cyber Security Resources
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-gray-300">
            A collection of resources to help you learn and practice Cyber
            Security.
          </p>
          <p className="text-md mx-auto max-w-2xl text-center text-gray-400">
            <strong>Disclaimer:</strong> The resources provided here are for
            educational purposes only. We do not endorse any illegal activities
            or hacking
          </p>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={(e) => {
            setSelectedTab(e);
            localStorage.setItem("cyberSelectedTab", e);
          }}
          className="space-y-8"
        >
          <div className="h-20 md:h-24 lg:h-auto">
            <TabsList className="mb-10 flex flex-wrap justify-center gap-2 bg-transparent p-1 text-gray-300 sm:gap-4 lg:mb-0">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.key}
                  className="px-4 py-2 text-sm data-[state=active]:bg-purple-700 sm:px-6 sm:py-3 sm:text-base"
                >
                  <tab.icon className="mr-2 h-4 w-4 sm:mr-3 sm:h-5 sm:w-5" />
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <motion.div
            key={selectedTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
          >
            {tabs.map((tab, index) => (
              <TabsContent key={index} value={tab.key} className="space-y-4">
                <Card className="border-purple-800 bg-black/50 transition-all duration-300 hover:bg-black/60">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">
                      {tab.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {tab.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>{tab.content && <tab.content />}</CardContent>
                </Card>
              </TabsContent>
            ))}
          </motion.div>
        </Tabs>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 text-center text-sm text-gray-400"
        >
          <p className="mb-4 text-lg text-gray-300">
            For further assistance, contact the Deviators web dev team:
          </p>
          <DisplayTeam keyword="cyber" />
        </motion.div>
      </div>
    </div>
  );
}

const tabs = [
  {
    key: "roadmap",
    name: "Roadmap",
    title: "Data Structures and Algorithms Roadmap",
    description:
      "A comprehensive roadmap to master Data Structures and Algorithms.",
    content: CyberRoadmap,
    icon: FileCode,
  },
  {
    key: "resourcesa",
    name: "Resources",
    title: "Data Structures and Algorithms Resources",
    description:
      "A collection of resources to help you learn and practice Data Structures and Algorithms.",
    content: DsaOnlineResources,
    icon: FileCode,
  },
];
