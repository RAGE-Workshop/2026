---
layout: home
year: 2026
date: "May 11th, 2026"
deadline: "February 3rd, 2026, Anywhere on Earth"
notification: "March 2nd, 2026, end of the day"
camera-ready: "March 9th, 2026, Anywhere on Earth"
location: "Saint Malo, France"
cover: /assets/img/saint-malo-cover.jpg
caption: The 5th Real-time And intelliGent Edge computing workshop
submission: https://easychair.org/conferences/?conf=rage2026
hosted: CPS-IoT Week 2026
hosted-url: https://cps-iot-week2026.inria.fr/
---

## Call for papers

The edge computing paradigm is becoming increasingly popular as it facilitates real-time computation, reduces energy consumption and carbon footprint, and fosters security and privacy preservation by processing the data closer to its origin, thereby drastically reducing the amount of data sent to the cloud. On the application side, there is a growing interest in using edge computing as a key pillar to support decentralized artificial intelligence by implementing federated learning and adaptive deep learning inference at the edge. However, many edge applications tightly interact with the surrounding environment and are required to deliver a result (e.g., perform actuation or send a message through a 5G network) within a predefined deadline. Therefore, a key requirement in edge computing is the need to be predictable across the edge-to-cloud continuum while also efficiently utilizing system resources.

However, meeting the above requirements is non-trivial. Modern edge devices can be very diverse, ranging from hand-held devices to large in-premise servers, and can include complex embedded platforms with multiple heterogeneous cores and hardware accelerators such as GPUs, TPUs, and FPGAs. This complexity introduces considerable challenges when trying to guarantee timing requirements of real-time applications: for example, due to scheduling policies implemented by the hardware accelerators (often not publicly disclosed by vendors) or due to the memory contention experienced by applications when accessing main memory concurrently in a multi-core setup. Secondly, network transmission time (TSN over Ethernet to 5G links) can lead to variability in the end-to-end latencies incurred by edge applications. Thirdly, a distributed infrastructure is naturally exposed to security attacks potentially able to compromise the execution of one or multiple devices or threaten their corresponding communications.

Furthermore, the operating system (OS) also plays a crucial role in enabling the edge computing paradigm, but quite often at the price of increasing the difficulty in deriving timing guarantees: for example, think of a complex deep neural network that needs to leverage a Linux-based OS (which is far more complicated than a real-time operating system), since it provides all the software stacks (e.g., TensorRT) and device drivers to interact with NVIDIA GPUs.

The complexity of the problem is further increased by the usage of middleware frameworks, which simplify the development of applications but at the cost of introducing scheduling policies in addition to the one offered by the underlying operating system, hindering predictability. Some relevant examples are ROS in the context of robotics, TensorFlow for artificial intelligence, TensorRT for efficient deep neural network inference on GPUs, and others. Virtualization technologies are also becoming crucial in implementing the edge paradigm, but again, at the expense of creating a more complex operating environment, where guaranteeing temporal properties is a challenging endeavor. These problems are common to many application domains, including cyber-physical systems, future-generation autonomous driving applications, robotics, Industry 4.0, smart buildings, and more.

In this workshop, we solicit the submission of work-in-progress papers. Workshop topics include, but are not limited to:
- Real-time edge computing
- QoS mechanisms for temporal isolation in light-weight virtualization mechanisms (Docker, WebAssembly)
- Mechanisms for end-to-end latency guarantees in the edge-to-cloud continuum
- Methods for functional decomposition between the edge and cloud
- Predictability in middleware frameworks (ROS, TensorFlow, TensorRT, and more)
- Real-time edge computing use cases
- Real-time network protocols for edge computing
- Real-time distributed artificial intelligence
- Resource scheduling and allocation in embedded real-time systems
- Predictable and efficient parallel applications
- Energy- and power-aware allocation in the edge-to-cloud Continuum
- Timing predictability for artificial intelligence
- Security and safety verification techniques for edge computing and infrastructures
- Software/hardware/communication mechanisms, analysis, and/or tools supporting security in edge computing or in critical infrastructures

## Workshop format

The workshop will include the following three types of contributions:
- Submissions of workshop papers, which will be peer-reviewed by the workshop’s technical program committee. Accepted papers will be presented with an envisioned time slot of 15 minutes (including the Q&A).
- Invited talks from expert speakers from both academia and industry, with slots of 30-45 minutes, depending on the number of talks.
- An open discussion that will include experts both from academia and industry as well as the workshop’s audience to further support the discussion and community building in the workshop.

We plan for a full-day workshop.

