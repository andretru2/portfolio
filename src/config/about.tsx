import type { About } from "@/types";

export const about: About = {
  backgroundImg: "",
  title: "Hola!",

  description: (
    <div className="flex flex-col gap-m">
      <p>
        I am Andrés, originally from Colombia but now living
        in NYC and loving it! After a rewarding career as a
        full-stack senior software engineer in the textile
        industry, I am embarking on a new journey to
        specialize in front-end development. My focus is on
        companies and organizations at the forefront of
        innovation, making a positive impact in the world —
        anywhere I can contribute to restoring our planet
        and creating a more sustainable future.
      </p>
      <p>
        I am not just seeking a job — I am seeking a chance
        to be part of something special, to work with a team
        that shares my vision for a better world. Whether
        it's creating beautiful apps or crafting engaging
        and inspiring websites, I thrive on the opportunity
        to make a difference while doing what I love.
      </p>
      <p>
        Beyond my professional ambitions, I am very active.
        I love waking up early and going to see the sunrise
        while walking in Central Park. The peace and joy I
        experience from being in nature is indescribable. My
        wife even jokes that I have more photos of sunrises
        and sunsets than of her :)
      </p>
      <p>
        I know I have the potential to inspire and change
        lives, and I am deeply inspired by the
        transformative possibilities that lie ahead. If my
        goals align with your mission, I welcome the
        opportunity to connect.
      </p>
    </div>
  ),

  image: "/profile.jpg",
  signature: "/signature.png",
  stats: [
    {
      id: 1,
      value: "NYC",
      label: "based",
    },
    {
      id: 2,
      value: "+13",
      label: "Years of experience",
    },
    {
      id: 3,
      value: "+30",
      label: "Successful projects",
    },
    {
      id: 4,
      value: "Bilingual",
      label: "Languages",
    },
  ],
  passions: [
    "Coding",
    "Design",
    "Music",
    "Traveling",
    "Learning",
    "Universe",
    "Consciousness",
    "Life",
    "Death",
    "Tennis",
    "Chess",
    "Reading",
    "Sunrises",
    "Sunsets",
    "Trees",
    "Hiking",
  ],
};
