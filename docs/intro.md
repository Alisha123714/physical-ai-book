---
id: intro
title: Introduction to Physical AI & Humanoid Robotics
sidebar_label: Introduction
---

# Welcome to Physical AI & Humanoid Robotics

<div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
  <button onClick={() => translateToUrdu()} style={{ padding: "10px", cursor: "pointer" }}>Urdu Translation</button>
  <button onClick={() => personalizeContent()} style={{ padding: "10px", cursor: "pointer" }}>Personalize Content</button>
</div>


## Overview
This course introduces **Physical AI** – AI that exists in the physical world. You will learn how to:

- Bridge the gap between AI models and real-world robots.
- Simulate humanoid robots in Gazebo and Unity.
- Use NVIDIA Isaac for AI-powered perception and control.
- Integrate GPT/LLMs for conversational robotics.

## Course Goals
- Master ROS 2 for robot control.
- Simulate and deploy humanoid robots.
- Implement vision, language, and action pipelines.
- Build a capstone project: Autonomous Humanoid Robot.

## Key Tools
- **ROS 2** (Robotic Operating System)
- **Gazebo & Unity** (Simulation)
- **NVIDIA Isaac** (AI-Robot Brain)
- **LLMs + Whisper** (Voice-to-Action)

## Course Banner
<!-- Image path fixed; make sure this file exists in book/static/images/ -->
<img src="/images/intro-banner.png" alt="Course Banner" style={{ width: "100%", height: "auto", marginTop: "20px" }} />

---

## Buttons JS Functions (Add this in `book/src/pages/index.js` or separate JS file)

```js
function translateToUrdu() {
  alert("Urdu translation feature coming soon!");
}

function personalizeContent() {
  alert("Personalization feature coming soon!");
}
