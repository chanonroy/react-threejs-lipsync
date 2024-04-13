"use client";

import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Canvas } from "react-three-fiber";

export default function Experience() {
  return (
    <Canvas>
      <OrbitControls />
      <Avatar />
    </Canvas>
  );
}
