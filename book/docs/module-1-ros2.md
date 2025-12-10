---
id: module-1-ros2
title: "Module 1 — ROS 2: Robotic Nervous System"
sidebar_label: "ROS 2"
---

# Module 1 — ROS 2 (Robotic Nervous System)
<div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
  <button onClick={() => window.translateToUrdu()} style={{ padding: "10px", cursor: "pointer" }}>
    Urdu Translation
  </button>
  
  <button onClick={() => window.personalizeContent()} style={{ padding: "10px", cursor: "pointer" }}>
    Personalize Content
  </button>
</div>


## Learning Outcomes
- Understand ROS 2 architecture: nodes, topics, services, actions
- Write a simple Python publisher/subscriber using `rclpy`
- Practice humanoid description with URDF

## ROS 2 Nodes
A **Node** is a process that performs computation. Each robot can have multiple nodes communicating with each other.

### Example: Simple Publisher
```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        self.timer = self.create_timer(1.0, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello Robot!'
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    node = MinimalPublisher()
    rclpy.spin(node)
    rclpy.shutdown()
