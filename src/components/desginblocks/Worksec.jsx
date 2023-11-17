import React, { useEffect, useState } from "react";
import img1 from "../media/1.png";
import img2 from "../media/2.png";
import img3 from "../media/3.png";
import img4 from "../media/4.png";
import img5 from "../media/5.png";
import img6 from "../media/6.png";
import img7 from "../media/7.png";
import img8 from "../media/8.png";
import img9 from "../media/9.png";
import img10 from "../media/10.png";
import img11 from "../media/11.png";
import Card from "../desginblocks/Card";
function Worksec() {
  const data = [
    {
      Route: "",
      coverimg: img1,
      covertext: "Eternal Wait",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img2,
      covertext: "Despairing Guardian",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img3,
      covertext: "Edge of Existance",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img4,
      covertext: "Eternal Fire",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img5,
      covertext: "Little Nightmares",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img6,
      covertext: "Nature's Resurgence",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img7,
      covertext: "Steaming Forest",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img8,
      covertext: "Roman Artifact",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img9,
      covertext: "The Fate of Japan",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
    {
      Route: "",
      coverimg: img10,
      covertext: "Separate Ways",
      headingvideo:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      headingtext: "Miami Marlins",
      headingsubtext: "Neon Ballpark",
      projectname: "Miami Marlins",
      date: "March 2023",
      roles: [
        "3D Design",
        "Modeling",
        "Texturing",
        "Shading",
        "Rendering",
        "LED Board Technician",
        "Video Playback Operator",
      ],
      collab: [
        {
          name: "Javier Castellanos",
          role: "Senior Producer, Motion Graphics",
        },
        { name: "MadLabs", role: "LED Board Hardware" },
      ],
      overview: [
        {
          heading: "Part 1 - 3D Neon Ballpark Rendering:",
          para: "In order to build upon their 2022 theme of the neon city, the Miami Marlins decided to shift the focus from the city to the inside of the ballpark for 2023. Javier approached me with some initial ideas, and we brainstormed together before diving into the task of creating the most impressive graphics package the Marlins had ever seen. I meticulously modeled the detail of the ballpark. Leveraging the power of Blender, I used geometry nodes to instance the crowd on the seating. Together with Javier, we did the material creation, animation, and rendering to complete the project.",
        },
        {
          heading: "Part 2 - LED Video Production",
          para: "Dylan and I assembled the boards in the pillar configuration that was preplanned. Then I calibrated the panels and created the software scene for driving the visuals. Thanks to the collaboration between Javier, myself, and MadLabs, The Miami Marlins were able to produce high-quality LED videos that featured the players against a backdrop of neon visuals, which tied in perfectly with the 3D neon ballpark renders.",
        },
      ],
      heading2: "3D Rendering",
      heading2sub: "Neon Ballpark",
      heading2video:
        "https://carbon-media.accelerator.net/0000000m9X0/cR1AClxK0jRbnArKdQSAqe;video.mp4",
      images: [
        "https://carbon-media.accelerator.net/0000000m9X0/lDFvS5dmDK1c448oRG2LnA;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/6VTum9I2Pmrbz6i6pIwV3d;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/60Eol8bx8Cdc0KvsbFULJC;550x309.jpeg?auto=webp",
        "https://carbon-media.accelerator.net/0000000m9X0/2ApnIqxOucDdEbypzeEsFb;550x309.jpeg?auto=webp",
      ],
      videos: ["", ""],
      sliderimg: { img1: "", img2: "" },
    },
  ];
  return (
    <div className="row  shadow  m-0 mt-5 pt-5 justify-content-start h- px-md-5 px-4 ">
      {/*  <div className="col-lg-12 col-12 mt-5 py-5 pb-0 px-3  ">
        <div className="display-3 text-light mb-3 ">
          Works of <span className="text-main"> OPRAN STUDIO</span>
        </div>
        <p className="fw-lighta text-light">
          Step into our virtual gallery and explore the diverse landscapes,
          characters, and stories that make up the tapestry of Opran Studio's 3D
          artistry. It's more than just a portfolio; it's an invitation to
          experience the limitless possibilities of the digital canvas.
        </p>
      </div>
  */}
      <div className="col-12 py-0 px-0 ">
        <div className="row justify-content-center">
          {data.map((datas) => {
            return <Card data={datas} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Worksec;
