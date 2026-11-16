import React from "react";
import { notFound } from "next/navigation";
import { siteContent } from "@/data/content";
import ProjectDetailClient from "@/components/sections/ProjectDetailClient";

export function generateStaticParams() {
  return siteContent.projects.items.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = siteContent.projects.items.some((p) => p.slug === slug);

  if (!exists) {
    notFound();
  }

  return <ProjectDetailClient slug={slug} />;
}
