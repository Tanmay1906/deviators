"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { iosResources } from "@/data/resources/ios";
import DisplayTeam from "@/components/DisplayTeam";

export default function IosLearnPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-purple-950 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl">
            iOS Development Learning Resources
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-gray-300">
            A curated list of resources, challenges, and tutorials to boost your
            iOS development skills.
          </p>
        </motion.div>

        <div className="space-y-10">
          {iosResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-purple-800 bg-gray-900/80 shadow-lg"
            >
              <Card>
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-semibold text-purple-400">
                      {resource.name}
                    </CardTitle>
                    <Link href={resource.url} target="_blank">
                      <Button className="bg-purple-700 hover:bg-purple-600">
                        Go to Resource
                      </Button>
                    </Link>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="overview">
                      <AccordionTrigger>
                        <h2 className="text-lg font-semibold text-purple-300">
                          Overview
                        </h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mt-4 text-gray-300">
                          {resource.overview}
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="topics-covered">
                      <AccordionTrigger>
                        <h2 className="text-lg font-semibold text-purple-300">
                          Topics Covered
                        </h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="ml-4 mt-4 list-disc space-y-2 text-gray-300">
                          {resource.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="goal">
                      <AccordionTrigger>
                        <h2 className="text-lg font-semibold text-purple-300">
                          Goal
                        </h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mt-4 text-gray-300">{resource.goal}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-sm text-gray-400"
        >
          <p className="mb-4 text-lg text-gray-300">
            For further assistance, contact the Deviators iOS team.
          </p>
          <DisplayTeam keyword="ios" />
        </motion.div>
      </div>
    </div>
  );
}
