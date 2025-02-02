"use client";
import FormationSection from "@/sections/formationSection";
import OverviewSection from "@/sections/overviewSection";
import SkillsSection from "@/sections/skillsSection";
import WorkExperienceSection from "@/sections/workExperienceSection";
import { Grid2 } from "@mui/material";

export default function Home() {
  return (
    <Grid2 container spacing={4}>
      <Grid2>
        <OverviewSection />
      </Grid2>
      <Grid2 container padding={5} pb={0}>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <FormationSection />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <SkillsSection />
        </Grid2>
      </Grid2>

      <Grid2 padding={5} pt={0}>
        <WorkExperienceSection />
      </Grid2>
    </Grid2>
  );
}
