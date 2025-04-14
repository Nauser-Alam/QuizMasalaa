////////////////////////////////////////////  H  T   M   L  /////////////////////////////////////////////////

const DistributedComputing = [
  {
    question: "What is a characteristic feature of a distributed system?",
    answers: [
      { text: "Centralized control", correct: false },
      { text: "Shared memory among processors", correct: false },
      { text: "Message passing between nodes", correct: true },
      { text: "No communication among nodes", correct: false },
    ],
  },
  {
    question: "In distributed computing, each computational entity has:",
    answers: [
      { text: "Shared global memory", correct: false },
      { text: "No memory", correct: false },
      { text: "Local memory", correct: true },
      { text: "Unlimited processing power", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT an example of a distributed system?",
    answers: [
      { text: "ATM network", correct: false },
      { text: "Internet", correct: false },
      { text: "Workgroup-based intranet", correct: false },
      { text: "A single standalone computer", correct: true },
    ],
  },
  {
    question:
      "What is the main method of communication between entities in distributed computing?",
    answers: [
      { text: "Pointers", correct: false },
      { text: "Shared variables", correct: false },
      { text: "Message passing", correct: true },
      { text: "Remote desktop", correct: false },
    ],
  },
  {
    question: "What is fault tolerance in distributed systems?",
    answers: [
      { text: "The system crashes when one node fails", correct: false },
      { text: "One node controls all others", correct: false },
      { text: "System continues working despite node failures", correct: true },
      { text: "No node failures are allowed", correct: false },
    ],
  },
  {
    question: "In distributed systems, each node typically has:",
    answers: [
      { text: "A complete view of the system", correct: false },
      { text: "A partial view of the system", correct: true },
      { text: "No access to resources", correct: false },
      { text: "Master control over others", correct: false },
    ],
  },
  {
    question:
      "Which of the following describes load sharing in distributed computing?",
    answers: [
      { text: "One node processes all data", correct: false },
      { text: "Work is sent to one specific node", correct: false },
      { text: "Tasks are distributed among multiple nodes", correct: true },
      { text: "All nodes are idle", correct: false },
    ],
  },
  {
    question: "Which feature of distributed systems helps in scalability?",
    answers: [
      { text: "Central management", correct: false },
      { text: "Expensive hardware", correct: false },
      { text: "Easy to add nodes with little time", correct: true },
      { text: "Fixed node structure", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a computing-intensive application?",
    answers: [
      { text: "Sending an email", correct: false },
      { text: "Browsing websites", correct: false },
      { text: "Monte Carlo simulation to compute Pi", correct: true },
      { text: "Opening a Word document", correct: false },
    ],
  },
  {
    question:
      "What kind of application is Facebook’s data processing an example of?",
    answers: [
      { text: "Memory-intensive", correct: false },
      { text: "Graphics-intensive", correct: false },
      { text: "Data-intensive", correct: true },
      { text: "Delay-sensitive", correct: false },
    ],
  },
  {
    question: "What does SPOF stand for in distributed computing?",
    answers: [
      { text: "Single Path of Failure", correct: false },
      { text: "Single Point of Failure", correct: true },
      { text: "Shared Process of Fault", correct: false },
      { text: "Secondary Power Of Function", correct: false },
    ],
  },
  {
    question: "Which computing model came first historically?",
    answers: [
      { text: "Grid computing", correct: false },
      { text: "Distributed computing", correct: false },
      { text: "Centralized computing", correct: true },
      { text: "Cloud computing", correct: false },
    ],
  },
  {
    question: "In centralized computing, computing was done using:",
    answers: [
      { text: "Cloud servers", correct: false },
      { text: "Distributed nodes", correct: false },
      { text: "A single processor", correct: true },
      { text: "Multiple personal devices", correct: false },
    ],
  },
  {
    question: "Which of the following is true about distributed computing?",
    answers: [
      { text: "All nodes share one global memory", correct: false },
      { text: "All processing is done on one mainframe", correct: false },
      {
        text: "Nodes operate independently and communicate via messages",
        correct: true,
      },
      { text: "There is no need for inter-node communication", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a property of distributed computing?",
    answers: [
      { text: "Resource sharing", correct: false },
      { text: "Load balancing", correct: false },
      { text: "Central memory access", correct: true },
      { text: "Fault tolerance", correct: false },
    ],
  },
  {
    question: "Which of the following is true about cluster computing?",
    answers: [
      { text: "It requires a cloud setup", correct: false },
      { text: "It is always used in gaming", correct: false },
      {
        text: "It connects multiple computers to work together like one",
        correct: true,
      },
      { text: "It is limited to mobile devices only", correct: false },
    ],
  },
  {
    question: "What is utility computing?",
    answers: [
      { text: "Computing provided at public utility offices", correct: false },
      { text: "Electricity-based computing", correct: false },
      { text: "Pay-as-you-go computing model", correct: true },
      { text: "Free computing service", correct: false },
    ],
  },
  {
    question: "Grid computing is best described as:",
    answers: [
      {
        text: "A virtual supercomputer using loosely connected systems",
        correct: true,
      },
      { text: "Computing only done on mobile devices", correct: false },
      { text: "A type of spreadsheet computation", correct: false },
      { text: "Centralized high-speed processing", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT commonly part of a distributed system setup?",
    answers: [
      { text: "Workstations", correct: false },
      { text: "Server systems", correct: false },
      { text: "Personal Assistance Devices", correct: false },
      { text: "Floppy drives", correct: true },
    ],
  },
  {
    question:
      "What makes distributed computing suitable for parallel computing?",
    answers: [
      { text: "All tasks are done serially", correct: false },
      { text: "No inter-node communication", correct: false },
      { text: "Tasks can be processed concurrently", correct: true },
      { text: "It cannot handle large-scale computation", correct: false },
    ],
  },
];

//    S  ////////////////////////////////////////////////////////////////
const GridComputing = [
  {
    question: "What is Grid Computing primarily used for?",
    answers: [
      { text: "Browsing the web", correct: false },
      { text: "Gaming applications", correct: false },
      {
        text: "Harnessing unused processing cycles across networks",
        correct: true,
      },
      { text: "Designing websites", correct: false },
    ],
  },
  {
    question:
      "Which company describes Grid Computing as virtualization of distributed computing and data resources?",
    answers: [
      { text: "Pcwebopedia", correct: false },
      { text: "IBM", correct: true },
      { text: "Sun Microsystems", correct: false },
      { text: "Intel", correct: false },
    ],
  },
  {
    question:
      "Which of the following best represents Grid Computing as per Sun Microsystems?",
    answers: [
      { text: "A system for fast internet access", correct: false },
      {
        text: "A distributed computing infrastructure with reliable, consistent access to capabilities",
        correct: true,
      },
      { text: "A software development tool", correct: false },
      { text: "A gaming network", correct: false },
    ],
  },
  {
    question:
      "What does the Electrical Power Grid analogy in Grid Computing represent?",
    answers: [
      { text: "Electricity is used only at power plants", correct: false },
      {
        text: "Resources are accessed without knowing their source or nature",
        correct: true,
      },
      { text: "Users must know the source of electricity", correct: false },
      { text: "Only renewable sources are used", correct: false },
    ],
  },
  {
    question: "What do users access in a computing grid environment?",
    answers: [
      { text: "Only files and documents", correct: false },
      {
        text: "Computing resources such as processors and storage",
        correct: true,
      },
      { text: "Social media platforms", correct: false },
      { text: "E-commerce services", correct: false },
    ],
  },
  {
    question: "Grid computing supports sharing of:",
    answers: [
      { text: "Only emails", correct: false },
      { text: "Data, computing power, and applications", correct: true },
      { text: "Web links", correct: false },
      { text: "User passwords", correct: false },
    ],
  },
  {
    question: "What is a virtual organization in grid computing?",
    answers: [
      { text: "A local club", correct: false },
      {
        text: "A set of people from many institutions working to solve a problem",
        correct: true,
      },
      { text: "A fake online business", correct: false },
      { text: "A computer virus", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a reason for using Grid Computing?",
    answers: [
      {
        text: "Scientific and Engineering problems need precise solutions",
        correct: false,
      },
      { text: "Games run faster", correct: true },
      { text: "Experimental methods are costly", correct: false },
      { text: "Need for better data visualization", correct: false },
    ],
  },
  {
    question:
      "What kind of resources does Grid Computing help utilize efficiently?",
    answers: [
      { text: "Unused or underutilized computing resources", correct: true },
      { text: "Brand new CPUs", correct: false },
      { text: "Expensive servers only", correct: false },
      { text: "Cloud-hosted files", correct: false },
    ],
  },
  {
    question: "Which application is least likely to use Grid Computing?",
    answers: [
      { text: "Weather forecasting", correct: false },
      { text: "Reactor simulations", correct: false },
      { text: "Music playlist curation", correct: true },
      { text: "Material characterization", correct: false },
    ],
  },
  {
    question:
      "Which type of grid provides high throughput and secure access to shared processing power?",
    answers: [
      { text: "Computational Grid", correct: true },
      { text: "Data Grid", correct: false },
      { text: "Collaboration Grid", correct: false },
      { text: "Network Grid", correct: false },
    ],
  },
  {
    question: "What does a Data Grid primarily support?",
    answers: [
      { text: "Gaming data sharing", correct: false },
      { text: "Data storage, discovery, and manipulation", correct: true },
      { text: "Programming IDEs", correct: false },
      { text: "Document formatting", correct: false },
    ],
  },
  {
    question: "What is the purpose of a Collaboration Grid?",
    answers: [
      { text: "Secure payment systems", correct: false },
      {
        text: "Supporting remote collaboration for joint projects",
        correct: true,
      },
      { text: "Bluetooth file transfer", correct: false },
      { text: "Video editing", correct: false },
    ],
  },
  {
    question:
      "Which grid type works as a data router between two communication points?",
    answers: [
      { text: "Utility Grid", correct: false },
      { text: "Computational Grid", correct: false },
      { text: "Network Grid", correct: true },
      { text: "Data Grid", correct: false },
    ],
  },
  {
    question:
      "Which grid type offers software and special equipment as services?",
    answers: [
      { text: "Utility Grid", correct: true },
      { text: "Network Grid", correct: false },
      { text: "Data Grid", correct: false },
      { text: "Computational Grid", correct: false },
    ],
  },
  {
    question: "What is the ultimate goal of Utility Grid computing?",
    answers: [
      { text: "Speeding up music downloads", correct: false },
      {
        text: "Running applications and sharing software across devices",
        correct: true,
      },
      { text: "Installing desktop widgets", correct: false },
      { text: "Developing mobile apps", correct: false },
    ],
  },
  {
    question: "How is transparency achieved in grid computing?",
    answers: [
      { text: "By hiding passwords", correct: false },
      {
        text: "Through seamless interaction with underlying layers",
        correct: true,
      },
      { text: "By encrypting everything", correct: false },
      { text: "By logging user behavior", correct: false },
    ],
  },
  {
    question: "What kind of user interaction is expected in Grid Computing?",
    answers: [
      { text: "Direct hardware configuration", correct: false },
      { text: "Knowledge of backend systems", correct: false },
      { text: "Minimal awareness of backend resources", correct: true },
      { text: "Frequent maintenance of network cables", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a problem domain suited for Grid Computing?",
    answers: [
      { text: "Blogging", correct: false },
      { text: "Crystallography and natural disaster modeling", correct: true },
      { text: "Text messaging", correct: false },
      { text: "Spreadsheet calculations", correct: false },
    ],
  },
  {
    question:
      "What is one major benefit of using Grid Computing in scientific research?",
    answers: [
      { text: "Faster cooking", correct: false },
      { text: "Reduced need for expensive experiments", correct: true },
      { text: "High internet speed", correct: false },
      { text: "User entertainment", correct: false },
    ],
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////  Cluster and Utility Computing ///////////////
const Cluster_Utility_Computing = [
  {
    question: "What is Cluster Computing?",
    answers: [
      {
        text: "A type of distributed computing system using interconnected standalone computers",
        correct: true,
      },
      {
        text: "A centralized computing system relying on a single mainframe",
        correct: false,
      },
      {
        text: "A cloud-based resource sharing model",
        correct: false,
      },
      {
        text: "A model that only uses one high-performance computer",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is NOT a type of cluster?",
    answers: [
      { text: "High Availability Cluster", correct: false },
      { text: "Load Balancing Cluster", correct: false },
      { text: "Data Warehouse Cluster", correct: true },
      { text: "Parallel/Distributed Processing Cluster", correct: false },
    ],
  },
  {
    question: "What is the main goal of deploying cluster computing?",
    answers: [
      { text: "To reduce the number of processors in use", correct: false },
      {
        text: "To improve speed and reliability cost-effectively",
        correct: true,
      },
      { text: "To create a backup of data", correct: false },
      { text: "To disconnect distributed systems", correct: false },
    ],
  },
  {
    question: "What are the basic components of a cluster system?",
    answers: [
      { text: "One single powerful server", correct: false },
      {
        text: "Multiple standalone computers, interconnects, middleware, and applications",
        correct: true,
      },
      { text: "Only middleware and OS", correct: false },
      { text: "Only client-server architecture", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT an operational benefit of clustering?",
    answers: [
      { text: "High performance", correct: false },
      { text: "Reduced network connectivity", correct: true },
      { text: "Scalability", correct: false },
      { text: "System availability", correct: false },
    ],
  },
  {
    question:
      "Utility computing is a concept implemented by which computing model?",
    answers: [
      { text: "Grid computing", correct: false },
      { text: "Cloud computing", correct: true },
      { text: "Cluster computing", correct: false },
      { text: "Edge computing", correct: false },
    ],
  },
  {
    question: "What is a key advantage of utility computing?",
    answers: [
      { text: "High initial investment", correct: false },
      { text: "No virtualization", correct: false },
      { text: "Low or no initial cost and pay-per-use model", correct: true },
      { text: "Limited scalability", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a common pricing model in utility computing?",
    answers: [
      { text: "Freeware model", correct: false },
      { text: "Subscription model", correct: true },
      { text: "One-time purchase", correct: false },
      { text: "Permanent license", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a risk associated with utility computing?",
    answers: [
      { text: "Improved uptime", correct: false },
      { text: "Data security concerns", correct: true },
      { text: "No vendor support", correct: false },
      { text: "No usage monitoring", correct: false },
    ],
  },
  {
    question: "What does utility computing primarily solve?",
    answers: [
      { text: "Code redundancy", correct: false },
      { text: "Resource utilization problems", correct: true },
      { text: "User interface issues", correct: false },
      { text: "Power supply issues", correct: false },
    ],
  },
  {
    question:
      "What is a characteristic of the communication network in clusters?",
    answers: [
      { text: "High latency", correct: false },
      { text: "Low latency protocols", correct: true },
      { text: "Disconnected links", correct: false },
      { text: "Unreliable switches", correct: false },
    ],
  },
  {
    question: "Cluster computing systems are typically:",
    answers: [
      { text: "Tightly coupled like SMPs", correct: false },
      {
        text: "Loosely coupled systems with interconnected nodes",
        correct: true,
      },
      { text: "Monolithic and centralized", correct: false },
      { text: "Used only for storage", correct: false },
    ],
  },
  {
    question: "Which component ensures fault tolerance in cluster systems?",
    answers: [
      { text: "Disk-RAID and redundancy mechanisms", correct: true },
      { text: "Single thread handling", correct: false },
      { text: "Limited application layer", correct: false },
      { text: "Non-redundant processors", correct: false },
    ],
  },
  {
    question:
      "What does the 'pay-as-you-go' model in utility computing refer to?",
    answers: [
      { text: "Paying a fixed monthly rate", correct: false },
      { text: "Paying for exact usage only", correct: true },
      { text: "Lifetime free usage", correct: false },
      { text: "Annual payment", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT typically part of utility computing services?",
    answers: [
      { text: "Web service delivery", correct: false },
      { text: "Software as a Service (SaaS)", correct: false },
      { text: "Free software without any charges", correct: true },
      { text: "Outsourcing infrastructure management", correct: false },
    ],
  },
  {
    question:
      "What enables utility computing to provide large-scale resources?",
    answers: [
      { text: "Virtualization", correct: true },
      { text: "Manual deployment", correct: false },
      { text: "Hardware-only expansion", correct: false },
      { text: "Offline access", correct: false },
    ],
  },
  {
    question: "Which benefit is common to both cluster and utility computing?",
    answers: [
      { text: "Redundancy and scalability", correct: true },
      { text: "High latency processing", correct: false },
      { text: "Low resource usage", correct: false },
      { text: "Manual provisioning", correct: false },
    ],
  },
  {
    question: "What kind of environment is targeted by utility computing?",
    answers: [
      { text: "Only academic use", correct: false },
      { text: "Flexible, on-demand computing environments", correct: true },
      { text: "Offline desktop solutions", correct: false },
      { text: "Gaming systems", correct: false },
    ],
  },
  {
    question: "Which is a characteristic of cluster nodes?",
    answers: [
      {
        text: "They are not independently functioning systems",
        correct: false,
      },
      { text: "They are standalone computers working together", correct: true },
      { text: "They must use the same OS always", correct: false },
      { text: "They can’t scale with more nodes", correct: false },
    ],
  },
  {
    question: "How is system availability enhanced in cluster computing?",
    answers: [
      { text: "Through a single point of failure", correct: false },
      { text: "By using redundant systems and applications", correct: true },
      { text: "By reducing the number of nodes", correct: false },
      { text: "By limiting user access", correct: false },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////  CLOUD COMPUTING  ///////////////////////////////////////////////////////////////
const Cloud_Computing = [
  {
    question: "How does NIST define cloud computing?",
    answers: [
      {
        text: "A network infrastructure model for high-speed access",
        correct: false,
      },
      {
        text: "A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources",
        correct: true,
      },
      {
        text: "A protocol for secure data storage",
        correct: false,
      },
      {
        text: "A type of physical server for enterprise applications",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is an essential characteristic of cloud computing?",
    answers: [
      { text: "Centralized desktop access", correct: false },
      { text: "On-demand self-service", correct: true },
      { text: "Manual service provisioning", correct: false },
      { text: "Single-tenant architecture", correct: false },
    ],
  },
  {
    question: "What does broad network access in cloud computing imply?",
    answers: [
      {
        text: "Limited to high-performance systems only",
        correct: false,
      },
      {
        text: "Accessible only via desktop computers",
        correct: false,
      },
      {
        text: "Available over the network through standard mechanisms and accessible by heterogeneous clients",
        correct: true,
      },
      {
        text: "Restricted to wired connections",
        correct: false,
      },
    ],
  },
  {
    question: "What is meant by resource pooling in cloud computing?",
    answers: [
      {
        text: "Resources are dedicated to a single user only",
        correct: false,
      },
      {
        text: "Resources are grouped geographically",
        correct: false,
      },
      {
        text: "Resources are pooled to serve multiple consumers using a multi-tenant model",
        correct: true,
      },
      {
        text: "Resources are distributed across different data centers",
        correct: false,
      },
    ],
  },
  {
    question:
      "What does the 'measured service' characteristic of cloud computing mean?",
    answers: [
      {
        text: "Fixed cost billing system for all users",
        correct: false,
      },
      {
        text: "Manual logging of resource usage",
        correct: false,
      },
      {
        text: "Resource usage is automatically monitored, controlled, and reported",
        correct: true,
      },
      {
        text: "Service is measured by the amount of users only",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which characteristic allows cloud services to scale dynamically?",
    answers: [
      { text: "Broad network access", correct: false },
      { text: "Rapid elasticity", correct: true },
      { text: "Measured service", correct: false },
      { text: "Resource pooling", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a common characteristic of cloud computing?",
    answers: [
      { text: "Homogeneity", correct: false },
      { text: "Massive scale", correct: false },
      { text: "Manual provisioning", correct: true },
      { text: "Service orientation", correct: false },
    ],
  },
  {
    question: "What does SaaS stand for?",
    answers: [
      { text: "Software and Application Access Service", correct: false },
      { text: "Software as a Service", correct: true },
      { text: "Storage as a System", correct: false },
      { text: "Security and Application Service", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of IaaS?",
    answers: [
      { text: "Google Sheets", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "Microsoft Office 365", correct: false },
      { text: "Google Chrome", correct: false },
    ],
  },
  {
    question: "What is an example of a private cloud platform?",
    answers: [
      { text: "Google Docs", correct: false },
      { text: "Amazon EC2", correct: false },
      { text: "Windows Server Hyper-V", correct: true },
      { text: "Dropbox", correct: false },
    ],
  },
  {
    question: "What defines a community cloud?",
    answers: [
      { text: "Operated by a single private organization", correct: false },
      {
        text: "Shared by several organizations supporting a specific goal",
        correct: true,
      },
      { text: "Accessible by the general public", correct: false },
      { text: "Limited to government use only", correct: false },
    ],
  },
  {
    question: "What is cloud bursting?",
    answers: [
      {
        text: "A method to terminate cloud services abruptly",
        correct: false,
      },
      {
        text: "A technique for cleaning cloud storage",
        correct: false,
      },
      {
        text: "Load balancing between clouds in a hybrid model",
        correct: true,
      },
      {
        text: "A process of compressing cloud data",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of hypervisors in virtualization?",
    answers: [
      {
        text: "They connect multiple servers together",
        correct: false,
      },
      {
        text: "They intercept and emulate instructions from virtual machines",
        correct: true,
      },
      {
        text: "They compress data for cloud storage",
        correct: false,
      },
      {
        text: "They manage network access",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is NOT a hypervisor?",
    answers: [
      { text: "KVM", correct: false },
      { text: "Xen", correct: false },
      { text: "VMware", correct: false },
      { text: "Ubuntu", correct: true },
    ],
  },
  {
    question:
      "Which cloud model provides runtime, development tools, and operating systems?",
    answers: [
      { text: "IaaS", correct: false },
      { text: "PaaS", correct: true },
      { text: "SaaS", correct: false },
      { text: "Hybrid", correct: false },
    ],
  },
  {
    question: "Which of the following is a benefit of using virtual machines?",
    answers: [
      { text: "Difficult software testing", correct: false },
      { text: "Fixed hardware configurations", correct: false },
      {
        text: "Run operating systems where hardware is unavailable",
        correct: true,
      },
      { text: "Inflexible deployment", correct: false },
    ],
  },
  {
    question: "What makes cloud computing cost-effective?",
    answers: [
      { text: "Unlimited bandwidth", correct: false },
      { text: "Pay-as-you-go model and low-cost software", correct: true },
      { text: "Dedicated IT personnel", correct: false },
      { text: "High initial investment", correct: false },
    ],
  },
  {
    question: "Which is a disadvantage of cloud computing?",
    answers: [
      { text: "Improved collaboration", correct: false },
      { text: "High-speed access", correct: false },
      { text: "Requires constant internet connectivity", correct: true },
      { text: "Enhanced performance", correct: false },
    ],
  },
  {
    question: "What is a virtual workspace?",
    answers: [
      {
        text: "A physical setup for remote work",
        correct: false,
      },
      {
        text: "An abstraction of an execution environment dynamically available to authorized clients",
        correct: true,
      },
      {
        text: "A user-controlled desktop screen",
        correct: false,
      },
      {
        text: "An OS running directly on hardware",
        correct: false,
      },
    ],
  },
  {
    question: "What does virtualization in general allow?",
    answers: [
      { text: "Increased dependency on hardware", correct: false },
      { text: "Run multiple VMs on a single physical machine", correct: true },
      { text: "Only run one OS per machine", correct: false },
      { text: "Limited software testing", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT an advantage of virtual machines?",
    answers: [
      { text: "Easy backup and migration", correct: false },
      { text: "Run legacy systems", correct: false },
      { text: "High hardware dependency", correct: true },
      {
        text: "Emulate more machines than physically available",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following cloud types is accessible to the general public?",
    answers: [
      { text: "Community cloud", correct: false },
      { text: "Public cloud", correct: true },
      { text: "Private cloud", correct: false },
      { text: "Hybrid cloud", correct: false },
    ],
  },
  {
    question:
      "Which platform is used for cloud storage and computing by Amazon?",
    answers: [
      { text: "Google Cloud Platform", correct: false },
      { text: "Amazon EC2 and S3", correct: true },
      { text: "Microsoft Azure", correct: false },
      { text: "Dropbox", correct: false },
    ],
  },
  {
    question: "What are the key concerns in cloud-sourcing?",
    answers: [
      { text: "Color themes and UI elements", correct: false },
      { text: "Low power consumption", correct: false },
      {
        text: "Performance, reliability, data control, and security",
        correct: true,
      },
      { text: "Installation of physical components", correct: false },
    ],
  },
  {
    question:
      "Which cloud deployment model combines two or more types of clouds?",
    answers: [
      { text: "Private cloud", correct: false },
      { text: "Public cloud", correct: false },
      { text: "Hybrid cloud", correct: true },
      { text: "Community cloud", correct: false },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////  Evolution of Cloud Computing  ////////////////////////////////////////
const Evolution_Of_Cloud_Computing = [
  {
    question:
      "Which of the following is a key business driver for adopting cloud computing?",
    answers: [
      { text: "High local IT maintenance costs", correct: true },
      { text: "Low electricity consumption", correct: false },
      { text: "Requirement for physical space", correct: false },
      { text: "Need for internal software licenses", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a benefit for end users using a public cloud?",
    answers: [
      { text: "Dedicated physical infrastructure", correct: false },
      { text: "Separate hardware procurement", correct: false },
      { text: "High scalability and utilization", correct: true },
      { text: "Limited availability", correct: false },
    ],
  },
  {
    question: "Public clouds provide high availability with SLAs around:",
    answers: [
      { text: "90%", correct: false },
      { text: "99%", correct: true },
      { text: "70%", correct: false },
      { text: "85%", correct: false },
    ],
  },
  {
    question: "Why are public clouds cost-effective for software startups?",
    answers: [
      { text: "They require large upfront investments", correct: false },
      { text: "They offer uncertain performance", correct: false },
      { text: "They allow renting resources instead of buying", correct: true },
      { text: "They provide static scaling", correct: false },
    ],
  },
  {
    question:
      "Which organizations are working towards cloud portability standards?",
    answers: [
      { text: "World Wide Web Consortium", correct: false },
      { text: "Cloud Computing Interoperability Forum", correct: true },
      { text: "Internet Engineering Task Force", correct: false },
      { text: "Cloud Security Alliance", correct: false },
    ],
  },
  {
    question: "What is a benefit of using a private cloud?",
    answers: [
      { text: "It requires separate power costs", correct: false },
      { text: "Data confidentiality is preserved", correct: true },
      { text: "It depends on internet speed", correct: false },
      { text: "It increases hardware dependency", correct: false },
    ],
  },
  {
    question: "Which is more cost-efficient in private clouds?",
    answers: [
      { text: "12 servers with 1 core and 1 GB RAM", correct: false },
      { text: "1 server with 12 cores and 12 GB RAM", correct: true },
      { text: "Clustered physical machines", correct: false },
      { text: "Dedicated individual servers", correct: false },
    ],
  },
  {
    question: "In the economics of PaaS vs IaaS, which is true for PaaS?",
    answers: [
      { text: "Requires continuous server provisioning", correct: false },
      { text: "Costs nothing unless used", correct: true },
      { text: "Cannot scale automatically", correct: false },
      { text: "Manual load balancing needed", correct: false },
    ],
  },
  {
    question: "Which benefit does PaaS offer to developers?",
    answers: [
      { text: "Manual load balancing setup", correct: false },
      { text: "Separate IDE licenses needed", correct: false },
      { text: "Web-based development environment", correct: true },
      { text: "Complex deployment process", correct: false },
    ],
  },
  {
    question: "How does SaaS reduce software costs for users?",
    answers: [
      { text: "By requiring dedicated servers", correct: false },
      { text: "Through web service subscriptions", correct: true },
      { text: "Via license-based installations", correct: false },
      { text: "With manual software setup", correct: false },
    ],
  },
  {
    question: "Which application is an example of SaaS?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "Google Docs", correct: true },
      { text: "KVM hypervisor", correct: false },
      { text: "VMware Workstation", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a typical purpose of cloud computing in organizations?",
    answers: [
      { text: "Storing large files", correct: false },
      { text: "Developing and testing software", correct: false },
      { text: "Buying physical servers", correct: true },
      { text: "Running e-business sites", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a common cloud application driving cloud adaptation?",
    answers: [
      { text: "Mail and messaging", correct: true },
      { text: "Disk defragmentation", correct: false },
      { text: "Offline storage backup", correct: false },
      { text: "Spreadsheet printing", correct: false },
    ],
  },
  {
    question: "What is a key advantage of private clouds?",
    answers: [
      { text: "Requires public infrastructure", correct: false },
      { text: "Faster to provision virtual machines", correct: true },
      { text: "More expensive than public cloud", correct: false },
      { text: "Requires individual licensing", correct: false },
    ],
  },
  {
    question:
      "Which cloud model is ideal when usage and transaction volume vary rapidly?",
    answers: [
      { text: "IaaS", correct: false },
      { text: "Private Cloud", correct: false },
      { text: "PaaS", correct: true },
      { text: "Legacy Systems", correct: false },
    ],
  },
  {
    question: "Which is NOT a benefit of SaaS?",
    answers: [
      { text: "No need to buy software instances", correct: false },
      { text: "Free use of certain services like Google Docs", correct: false },
      { text: "Dedicated on-premise installations", correct: true },
      { text: "Web-based CRM systems", correct: false },
    ],
  },
  {
    question: "Which task is commonly done on cloud by enterprises?",
    answers: [
      { text: "Analyzing customer data", correct: true },
      { text: "Making office furniture", correct: false },
      { text: "Creating physical backups", correct: false },
      { text: "Building internal hardware", correct: false },
    ],
  },
  {
    question: "Why is cloud computing preferred for prototype development?",
    answers: [
      { text: "It has no internet dependency", correct: false },
      { text: "It avoids major investments early on", correct: true },
      { text: "It uses physical disks", correct: false },
      { text: "It doesn't offer virtualization", correct: false },
    ],
  },
  {
    question: "Which of the following best describes PaaS scaling?",
    answers: [
      { text: "Manual only", correct: false },
      { text: "Static", correct: false },
      { text: "Automatic", correct: true },
      { text: "Not scalable", correct: false },
    ],
  },
  {
    question:
      "Which cloud feature helps during high demand spikes on websites?",
    answers: [
      { text: "Elasticity", correct: true },
      { text: "Legacy software", correct: false },
      { text: "Manual resource allocation", correct: false },
      { text: "Server underutilization", correct: false },
    ],
  },
];

///////////////////////////////////////// Cloud Computing Architectiure ////////////////////////////////
const Cloud_Computing_Architecture = [
  {
    question:
      "What are the major goals of the high-level architectural approach in cloud computing?",
    answers: [
      {
        text: "Business goal, Quality attribute, Architectural tactics",
        correct: true,
      },
      {
        text: "Client-server setup, Load balancing, Backup management",
        correct: false,
      },
      { text: "Cost reduction, Speed, Communication methods", correct: false },
      { text: "Security, Encryption, Legal concerns", correct: false },
    ],
  },
  {
    question:
      "Which of the following is *not* a technical architecture concern in cloud computing?",
    answers: [
      { text: "Middleware and communication", correct: false },
      { text: "Geo-location check", correct: true },
      { text: "Management and security", correct: false },
      { text: "Structuring cloud services and components", correct: false },
    ],
  },
  {
    question: "What does XaaS stand for?",
    answers: [
      { text: "X-ray as a Service", correct: false },
      { text: "X as a System", correct: false },
      { text: "X as a Service", correct: true },
      { text: "Xtra Application as a Software", correct: false },
    ],
  },
  {
    question: "Which of the following is the essence of cloud computing?",
    answers: [
      { text: "Virtual Machines", correct: false },
      { text: "SaaS", correct: false },
      { text: "Client-server architecture", correct: false },
      { text: "XaaS", correct: true },
    ],
  },
  {
    question: "Which is an example of IaaS?",
    answers: [
      { text: "Google Docs", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "Salesforce CRM", correct: false },
      { text: "Gmail", correct: false },
    ],
  },
  {
    question:
      "Which service model provides a platform to develop and deploy applications?",
    answers: [
      { text: "SaaS", correct: false },
      { text: "IaaS", correct: false },
      { text: "PaaS", correct: true },
      { text: "BPaaS", correct: false },
    ],
  },
  {
    question:
      "What is the key characteristic of the client in a client-server architecture?",
    answers: [
      { text: "It performs load balancing", correct: false },
      {
        text: "It is a thin client with low computational power",
        correct: true,
      },
      { text: "It acts as a database server", correct: false },
      { text: "It manages cloud virtual machines", correct: false },
    ],
  },
  {
    question:
      "Which tier in the three-tier architecture handles business logic?",
    answers: [
      { text: "Presentation tier", correct: false },
      { text: "Logical tier", correct: true },
      { text: "Data tier", correct: false },
      { text: "Client tier", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT commonly delivered as a service in XaaS?",
    answers: [
      { text: "Storage", correct: false },
      { text: "Firewall", correct: false },
      { text: "Power supply", correct: true },
      { text: "Database", correct: false },
    ],
  },
  {
    question: "Which model theoretically provides infinite scalability?",
    answers: [
      { text: "Client-server model", correct: false },
      { text: "Grid computing", correct: false },
      { text: "Cloud computing model", correct: true },
      { text: "Cluster computing", correct: false },
    ],
  },
  {
    question: "What core technology enables scalability in cloud computing?",
    answers: [
      { text: "Containerization", correct: false },
      { text: "Virtualization", correct: true },
      { text: "Encryption", correct: false },
      { text: "Caching", correct: false },
    ],
  },
  {
    question: "In the classical service model, what is a major disadvantage?",
    answers: [
      { text: "Easy replacement of layers", correct: false },
      { text: "Cost-effective scaling", correct: false },
      { text: "Manual operations and tight coupling", correct: true },
      { text: "High cloud integration", correct: false },
    ],
  },
  {
    question: "Which of the following is a SaaS application?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "Salesforce CRM", correct: true },
      { text: "Windows Server", correct: false },
      { text: "Oracle VM", correct: false },
    ],
  },
  {
    question: "Which scenario is NOT ideal for SaaS?",
    answers: [
      { text: "Applications with short-term need", correct: false },
      { text: "Real-time processing of data", correct: true },
      { text: "Web/mobile accessible apps", correct: false },
      { text: "Email newsletter software", correct: false },
    ],
  },
  {
    question: "What is a benefit of client-server architecture?",
    answers: [
      { text: "Easy infinite scaling", correct: false },
      { text: "Simple load balancing", correct: true },
      { text: "Full virtualization", correct: false },
      { text: "Supports complex service models", correct: false },
    ],
  },
  {
    question: "What does a Cloud Service Provider (CSP) aim to increase?",
    answers: [
      { text: "Manual interventions", correct: false },
      {
        text: "Productivity, satisfaction, innovation, and agility",
        correct: true,
      },
      { text: "System dependencies", correct: false },
      { text: "Data redundancy", correct: false },
    ],
  },
  {
    question:
      "Which component belongs to the Deployment Operation Architecture?",
    answers: [
      { text: "Middleware", correct: false },
      { text: "Security mechanisms", correct: false },
      { text: "Geo-location check", correct: true },
      { text: "Cloud services structuring", correct: false },
    ],
  },
  {
    question: "Which is a correct combination that leads to XaaS?",
    answers: [
      { text: "Broad network access + VPN", correct: false },
      { text: "Cloud access + database tuning", correct: false },
      {
        text: "Broad access + resource pooling + SOI + service orientation",
        correct: true,
      },
      { text: "Data tier + logical tier + UX layer", correct: false },
    ],
  },
  {
    question:
      "Which service is categorized under Security as a Service (SECaaS)?",
    answers: [
      { text: "Cloud firewall management", correct: true },
      { text: "CRM access module", correct: false },
      { text: "Container orchestration", correct: false },
      { text: "File sharing", correct: false },
    ],
  },
  {
    question: "What is Desktop as a Service (DaaS) primarily used for?",
    answers: [
      { text: "Providing virtual desktops remotely", correct: true },
      { text: "Distributing operating systems", correct: false },
      { text: "Application hosting", correct: false },
      { text: "File encryption", correct: false },
    ],
  },
  {
    question: "Which model typically uses thin clients?",
    answers: [
      { text: "Grid computing", correct: false },
      { text: "Client-server architecture", correct: true },
      { text: "Cloud-native deployment", correct: false },
      { text: "Legacy model", correct: false },
    ],
  },
  {
    question: "Which of these best defines PaaS?",
    answers: [
      { text: "A complete software on cloud", correct: false },
      { text: "An environment to build and deploy apps", correct: true },
      { text: "Virtual hardware machines", correct: false },
      { text: "Shared CRM tools", correct: false },
    ],
  },
  {
    question: "Which of these layers is NOT part of the classical model?",
    answers: [
      { text: "Application", correct: false },
      { text: "Middleware", correct: true },
      { text: "Development Tools", correct: false },
      { text: "Operating System", correct: false },
    ],
  },
  {
    question: "What type of systems are deployed in classical IT?",
    answers: [
      { text: "Custom build-to-order, vertically stacked", correct: true },
      { text: "On-demand and scalable", correct: false },
      { text: "Serverless functions", correct: false },
      { text: "Cloud-native microservices", correct: false },
    ],
  },
];

////////////////////////////////////////////  Architecture and Deploy Modals //////////////////////////////////////
const Architecture_Deploy_Modals = [
  {
    question: "Which characteristic best describes IaaS?",
    answers: [
      {
        text: "It provides complete software solutions to users",
        correct: false,
      },
      { text: "Resources are distributed as a service", correct: true },
      { text: "Only one user can access the hardware", correct: false },
      { text: "Fixed monthly pricing model", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a SaaS provider?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "Force.com", correct: false },
      { text: "Salesforce.com", correct: true },
      { text: "Heroku", correct: false },
    ],
  },
  {
    question: "Which of the following allows for dynamic scaling?",
    answers: [
      { text: "SaaS", correct: false },
      { text: "IaaS", correct: true },
      { text: "DNS", correct: false },
      { text: "HTTP", correct: false },
    ],
  },
  {
    question: "What is a key feature of IaaS pricing?",
    answers: [
      { text: "Subscription-based model", correct: false },
      { text: "Flat rate model", correct: false },
      { text: "Utility pricing model", correct: true },
      { text: "Lifetime licensing", correct: false },
    ],
  },
  {
    question: "Which of the following is a PaaS provider?",
    answers: [
      { text: "Google Mail", correct: false },
      { text: "Joyent", correct: false },
      { text: "Heroku", correct: true },
      { text: "SmugMug", correct: false },
    ],
  },
  {
    question: "Which networking concept is essential to cloud computing?",
    answers: [
      { text: "TCP/IP stack only", correct: false },
      { text: "Virtual Private Networks (VPNs)", correct: true },
      { text: "Wired Ethernet only", correct: false },
      { text: "Bluetooth", correct: false },
    ],
  },
  {
    question: "What is the goal of Network Function Virtualization?",
    answers: [
      { text: "To reduce cloud security", correct: false },
      { text: "To enhance mobile networks", correct: false },
      {
        text: "To consolidate network functions on standard IT hardware",
        correct: true,
      },
      { text: "To create new types of servers", correct: false },
    ],
  },
  {
    question:
      "Which tool helps in creating secure communication channels in cloud networks?",
    answers: [
      { text: "Bluetooth", correct: false },
      { text: "OpenSSH", correct: true },
      { text: "Wi-Fi Direct", correct: false },
      { text: "NAT", correct: false },
    ],
  },
  {
    question:
      "Which deployment model is provisioned for open use by the general public?",
    answers: [
      { text: "Private Cloud", correct: false },
      { text: "Community Cloud", correct: false },
      { text: "Public Cloud", correct: true },
      { text: "Hybrid Cloud", correct: false },
    ],
  },
  {
    question:
      "Which cloud model may be hosted off-premise but dedicated to a single organization?",
    answers: [
      { text: "Public Cloud", correct: false },
      { text: "Hybrid Cloud", correct: false },
      { text: "Private Cloud", correct: true },
      { text: "Community Cloud", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a private cloud provider?",
    answers: [
      { text: "Amazon EC2", correct: false },
      { text: "Google Drive", correct: false },
      { text: "Amazon VPC", correct: true },
      { text: "XDrive", correct: false },
    ],
  },
  {
    question: "What is one major risk of the public cloud model?",
    answers: [
      { text: "Vendor lock-in", correct: false },
      { text: "Data being stored locally", correct: false },
      { text: "Risks from multi-tenancy", correct: true },
      { text: "Insufficient resource availability", correct: false },
    ],
  },
  {
    question:
      "Which deployment model combines both private and public cloud features?",
    answers: [
      { text: "Hybrid Cloud", correct: true },
      { text: "Community Cloud", correct: false },
      { text: "Dedicated Cloud", correct: false },
      { text: "On-prem Cloud", correct: false },
    ],
  },
  {
    question:
      "Which cloud provider supports multiple users on the same hardware?",
    answers: [
      { text: "Dedicated Cloud", correct: false },
      { text: "IaaS", correct: true },
      { text: "PaaS", correct: false },
      { text: "VPN", correct: false },
    ],
  },
  {
    question: "What is a common use of a VPN in cloud computing?",
    answers: [
      { text: "To manage memory", correct: false },
      { text: "To enhance disk speed", correct: false },
      { text: "To securely connect to cloud resources", correct: true },
      { text: "To compress files", correct: false },
    ],
  },
  {
    question: "Which tool is used for secure shell access in cloud networks?",
    answers: [
      { text: "OpenVPN", correct: false },
      { text: "SSH Client", correct: false },
      { text: "OpenSSH", correct: true },
      { text: "Firewall", correct: false },
    ],
  },
  {
    question:
      "Which cloud deployment model is shared among several organizations with a common concern?",
    answers: [
      { text: "Hybrid Cloud", correct: false },
      { text: "Public Cloud", correct: false },
      { text: "Private Cloud", correct: false },
      { text: "Community Cloud", correct: true },
    ],
  },
  {
    question: "Which of the following is an example of IaaS?",
    answers: [
      { text: "Appian Anywhere", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "AppEngine", correct: false },
      { text: "ProcessMaker Live", correct: false },
    ],
  },
  {
    question:
      "Which of the following is *not* a role of networking in cloud computing?",
    answers: [
      { text: "Facilitating virtual topologies", correct: false },
      { text: "Provisioning compute power", correct: true },
      { text: "Enabling VPN access", correct: false },
      { text: "Handling protocol layers", correct: false },
    ],
  },
  {
    question:
      "What are the security perimeters in an outsourced private cloud?",
    answers: [
      { text: "Only the provider’s perimeter", correct: false },
      { text: "Only the subscriber’s perimeter", correct: false },
      { text: "Both provider and subscriber perimeters", correct: true },
      { text: "There is no defined perimeter", correct: false },
    ],
  },
  {
    question: "Which of the following is true about on-site private cloud?",
    answers: [
      { text: "It is managed only by third-party", correct: false },
      { text: "It requires no IT skills", correct: false },
      { text: "It resides within the organization’s premises", correct: true },
      { text: "It does not hide workload location", correct: false },
    ],
  },
  {
    question: "In public cloud, where can workloads be migrated?",
    answers: [
      { text: "Only within the same country", correct: false },
      { text: "Anywhere based on provider cost optimization", correct: true },
      { text: "Only between user devices", correct: false },
      { text: "Only to user premises", correct: false },
    ],
  },
  {
    question: "Which PaaS provider is developed by Google?",
    answers: [
      { text: "Azure", correct: false },
      { text: "AppEngine", correct: true },
      { text: "Force.com", correct: false },
      { text: "Aneka", correct: false },
    ],
  },
  {
    question:
      "Which service model provides a platform allowing customers to develop, run, and manage applications?",
    answers: [
      { text: "IaaS", correct: false },
      { text: "PaaS", correct: true },
      { text: "SaaS", correct: false },
      { text: "DaaS", correct: false },
    ],
  },
  {
    question: "What is a benefit of the outsourced private cloud?",
    answers: [
      { text: "Limited resources", correct: false },
      { text: "Subscriber can rent resources in any quantity", correct: true },
      { text: "No need for security perimeters", correct: false },
      { text: "No protected communication required", correct: false },
    ],
  },
];
////////////////////////////// VIRTUALIZATION //////////////////////////////////////////////
const Virtualization = [
  {
    question: "What is a Community Cloud?",
    answers: [
      {
        text: "Cloud infrastructure shared by several organizations with common concerns",
        correct: true,
      },
      {
        text: "Cloud infrastructure used by a single private organization",
        correct: false,
      },
      {
        text: "Public cloud hosted by a third party",
        correct: false,
      },
      {
        text: "A combination of public and private clouds",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is an example of a Community Cloud?",
    answers: [
      { text: "Amazon Web Services", correct: false },
      { text: "Google Apps for Government", correct: true },
      { text: "VMware vCloud", correct: false },
      { text: "Microsoft Azure", correct: false },
    ],
  },
  {
    question: "What defines a Hybrid Cloud?",
    answers: [
      {
        text: "A mix of two or more distinct cloud infrastructures bound by technology",
        correct: true,
      },
      {
        text: "A cloud entirely owned by a third party",
        correct: false,
      },
      {
        text: "A private cloud with government access",
        correct: false,
      },
      {
        text: "A public cloud restricted to a single tenant",
        correct: false,
      },
    ],
  },
  {
    question: "Which cloud platform supports Hybrid Cloud services?",
    answers: [
      { text: "Google Cloud", correct: false },
      { text: "VMware vCloud", correct: true },
      { text: "Dropbox", correct: false },
      { text: "iCloud", correct: false },
    ],
  },
  {
    question: "How are usage fees typically calculated in virtualization?",
    answers: [
      { text: "Based on number of users", correct: false },
      { text: "Based on daily usage time", correct: false },
      {
        text: "Per CPU hour, storage GB/hr, bandwidth, and services used",
        correct: true,
      },
      { text: "Per number of VMs created", correct: false },
    ],
  },
  {
    question: "What does IaaS stand for?",
    answers: [
      { text: "Internet as a Service", correct: false },
      { text: "Infrastructure as a Service", correct: true },
      { text: "Internal application and storage", correct: false },
      { text: "Interface and Storage System", correct: false },
    ],
  },
  {
    question: "Who controls the Guest OS layer in IaaS?",
    answers: [
      { text: "Cloud provider", correct: false },
      { text: "Network admin", correct: false },
      { text: "Subscriber", correct: true },
      { text: "System hardware manager", correct: false },
    ],
  },
  {
    question: "What does the Hypervisor do?",
    answers: [
      {
        text: "Synthesizes Virtual Machines and manages virtual hardware",
        correct: true,
      },
      { text: "Stores data permanently", correct: false },
      { text: "Hosts web services", correct: false },
      { text: "Executes guest applications", correct: false },
    ],
  },
  {
    question: "Which component runs directly on the CPU in virtualization?",
    answers: [
      { text: "Cloud Manager", correct: false },
      { text: "Hypervisor or Virtual Machine Monitor", correct: true },
      { text: "Guest OS", correct: false },
      { text: "DOS", correct: false },
    ],
  },
  {
    question: "Which layer does the subscriber not control in IaaS?",
    answers: [
      { text: "Applications", correct: false },
      { text: "Middleware", correct: false },
      { text: "Hypervisor", correct: true },
      { text: "Guest Operating System", correct: false },
    ],
  },
  {
    question: "What is the top-most control layer in IaaS cloud systems?",
    answers: [
      { text: "Cluster Manager", correct: false },
      { text: "Computer Manager", correct: false },
      { text: "Cloud Manager", correct: true },
      { text: "Persistent Local Storage", correct: false },
    ],
  },
  {
    question: "What does the Cloud Manager handle?",
    answers: [
      { text: "Starting and stopping VMs", correct: false },
      {
        text: "Authenticating subscribers and top-level resource management",
        correct: true,
      },
      { text: "Cluster operations only", correct: false },
      { text: "Network switching", correct: false },
    ],
  },
  {
    question: "Which component holds the subscriber's metadata?",
    answers: [
      { text: "Cloud Manager", correct: false },
      { text: "Virtual Machine", correct: false },
      { text: "Data Object Storage (DOS)", correct: true },
      { text: "Computer Manager", correct: false },
    ],
  },
  {
    question:
      "Which component is responsible for managing multiple computer systems?",
    answers: [
      { text: "Hypervisor", correct: false },
      { text: "Cluster Manager", correct: true },
      { text: "Cloud Manager", correct: false },
      { text: "DOS", correct: false },
    ],
  },
  {
    question: "What does Persistent Local Storage (PLS) provide?",
    answers: [
      { text: "Storage for OS images only", correct: false },
      { text: "Temporary memory", correct: false },
      { text: "Persistent disk-like storage to VMs", correct: true },
      { text: "Storage for the cloud manager", correct: false },
    ],
  },
  {
    question: "Which component performs VM-level commands like start/stop?",
    answers: [
      { text: "DOS", correct: false },
      { text: "Cluster Manager", correct: false },
      { text: "Computer Manager", correct: true },
      { text: "Cloud Subscriber", correct: false },
    ],
  },
  {
    question: "Which of these is true about virtualization?",
    answers: [
      {
        text: "Allows multiple OS to run on the same hardware simultaneously",
        correct: true,
      },
      { text: "Only supports single-boot configurations", correct: false },
      { text: "Requires separate hardware for each OS", correct: false },
      { text: "Supports only Linux-based systems", correct: false },
    ],
  },
  {
    question: "How is virtualization different from dual-boot?",
    answers: [
      { text: "Virtualization supports only Linux OS", correct: false },
      {
        text: "Virtualization runs both OSes at the same time",
        correct: true,
      },
      { text: "Dual boot supports concurrent OSes", correct: false },
      { text: "They are technically the same", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a goal of virtualization per Popek and Goldberg?",
    answers: [
      { text: "Equivalence", correct: false },
      { text: "Efficiency", correct: false },
      { text: "Resource control", correct: false },
      { text: "Data encryption", correct: true },
    ],
  },
  {
    question:
      "What must sensitive instructions be for virtualization to succeed?",
    answers: [
      {
        text: "A subset of privileged instructions",
        correct: true,
      },
      {
        text: "Executed in kernel mode only",
        correct: false,
      },
      {
        text: "Translated to machine code",
        correct: false,
      },
      {
        text: "Part of application layer",
        correct: false,
      },
    ],
  },
  {
    question: "What is a sensitive instruction?",
    answers: [
      {
        text: "An instruction that modifies or reveals privileged information",
        correct: true,
      },
      { text: "A regular arithmetic operation", correct: false },
      { text: "An instruction in the guest OS", correct: false },
      { text: "A networking instruction", correct: false },
    ],
  },
  {
    question:
      "What happens when a sensitive instruction is executed in user mode?",
    answers: [
      { text: "System shuts down", correct: false },
      { text: "It traps to the hypervisor", correct: true },
      { text: "It runs directly", correct: false },
      { text: "It causes memory corruption", correct: false },
    ],
  },
  {
    question: "What is the purpose of the hypervisor in virtualization?",
    answers: [
      {
        text: "To manage and emulate sensitive instructions",
        correct: true,
      },
      { text: "To store VM images", correct: false },
      { text: "To run application software", correct: false },
      { text: "To encrypt VM data", correct: false },
    ],
  },
  {
    question: "What does the guest OS see when running in a VM?",
    answers: [
      { text: "Another OS running beside it", correct: false },
      { text: "A simulation of hardware", correct: true },
      { text: "Real physical hardware", correct: false },
      { text: "Only its own application layer", correct: false },
    ],
  },
  {
    question: "Which layer in virtualization architecture is most privileged?",
    answers: [
      { text: "Guest OS", correct: false },
      { text: "Middleware", correct: false },
      { text: "Hypervisor", correct: true },
      { text: "Application layer", correct: false },
    ],
  },
];

/////////////////////////  VIRTUALIZATION PART 2  //////////////////////////////////////////
const Virtualization2 = [
  {
    question: "What is a primary characteristic of full virtualization?",
    answers: [
      { text: "The guest OS is modified", correct: false },
      { text: "The guest OS runs directly on the hardware", correct: false },
      {
        text: "The entire hardware is emulated including the CPU",
        correct: true,
      },
      {
        text: "Privileged instructions are executed at Ring 0",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following tools are popular for full virtualization?",
    answers: [
      { text: "VMware and Hyper-V", correct: false },
      { text: "QEMU and Bochs", correct: true },
      { text: "Docker and Kubernetes", correct: false },
      { text: "KVM and Xen", correct: false },
    ],
  },
  {
    question: "What is one major advantage of full virtualization?",
    answers: [
      { text: "Faster execution due to lack of emulation", correct: false },
      { text: "Requires modified guest OS", correct: false },
      {
        text: "Provides complete VM portability across hardware",
        correct: true,
      },
      { text: "Hardware access is unrestricted", correct: false },
    ],
  },
  {
    question:
      "Which ring does the guest OS operate in under full virtualization?",
    answers: [
      { text: "Ring 0", correct: false },
      { text: "Ring -1", correct: false },
      { text: "Ring 1 or 3", correct: true },
      { text: "Ring 2", correct: false },
    ],
  },
  {
    question: "Why does full virtualization often incur a performance penalty?",
    answers: [
      { text: "Because it needs a modified OS", correct: false },
      {
        text: "Due to direct execution of privileged instructions",
        correct: false,
      },
      {
        text: "Because privileged instructions must be trapped and emulated",
        correct: true,
      },
      { text: "Because guest OS runs at Ring 0", correct: false },
    ],
  },
  {
    question:
      "What distinguishes para-virtualization from full virtualization?",
    answers: [
      { text: "Guest OS is not modified", correct: false },
      { text: "Emulation is used to run the guest OS", correct: false },
      {
        text: "Guest OS is modified and aware of virtualization",
        correct: true,
      },
      { text: "Para-virtualization uses Ring 0 only", correct: false },
    ],
  },
  {
    question: "How does a para-virtualized OS interact with the VMM?",
    answers: [
      { text: "Through direct hardware access", correct: false },
      { text: "Via dynamic binary translation", correct: false },
      { text: "Using specialized APIs", correct: true },
      { text: "Using BIOS instructions", correct: false },
    ],
  },
  {
    question: "Which of the following is a drawback of para-virtualization?",
    answers: [
      { text: "Inability to isolate VMs", correct: false },
      { text: "Requires modification of the guest OS", correct: true },
      { text: "Lack of performance improvements", correct: false },
      { text: "Hardware incompatibility", correct: false },
    ],
  },
  {
    question: "What is a common method to implement para-virtualization?",
    answers: [
      { text: "Install virtual drivers only", correct: false },
      { text: "Use BIOS-level translation", correct: false },
      { text: "Recompile the guest OS kernel with APIs", correct: true },
      { text: "Apply no changes to the guest OS", correct: false },
    ],
  },
  {
    question:
      "What does hardware-assisted virtualization use to improve performance?",
    answers: [
      { text: "Network interface emulation", correct: false },
      { text: "Processor extensions like Intel VT or AMD-V", correct: true },
      { text: "Device-level para-virtualization", correct: false },
      { text: "Direct BIOS emulation", correct: false },
    ],
  },
  {
    question:
      "In hardware-assisted virtualization, where does the VMM operate?",
    answers: [
      { text: "Ring 0", correct: false },
      { text: "Ring 1", correct: false },
      { text: "Ring -1 (Virtual-1)", correct: true },
      { text: "Ring 3", correct: false },
    ],
  },
  {
    question: "What is a major advantage of hardware-assisted virtualization?",
    answers: [
      { text: "Requires a modified guest OS", correct: false },
      { text: "Can run unmodified operating systems", correct: true },
      { text: "Does not require hardware support", correct: false },
      { text: "Is slower than full virtualization", correct: false },
    ],
  },
  {
    question: "What is one drawback of hardware-assisted virtualization?",
    answers: [
      { text: "Cannot run legacy OS", correct: false },
      { text: "Requires full emulation of hardware", correct: false },
      {
        text: "Unmodified OS cannot leverage virtualization features",
        correct: true,
      },
      { text: "Needs para-virtualized API calls", correct: false },
    ],
  },
  {
    question:
      "Which design goal of network virtualization emphasizes isolation and privacy?",
    answers: [
      { text: "Flexibility", correct: false },
      { text: "Scalability", correct: false },
      { text: "Privacy and Isolation", correct: true },
      { text: "Recursion", correct: false },
    ],
  },
  {
    question: "Which of the following best defines network virtualization?",
    answers: [
      { text: "Virtualizing only the storage components", correct: false },
      {
        text: "Using hardware abstraction layers for graphics",
        correct: false,
      },
      {
        text: "Allowing multiple service providers to run isolated networks on shared infrastructure",
        correct: true,
      },
      { text: "Creating overlays for operating systems", correct: false },
    ],
  },
  {
    question: "What is recursion in the context of network virtualization?",
    answers: [
      { text: "Running repeated security checks on packets", correct: false },
      {
        text: "Virtual networks can host other virtual networks",
        correct: true,
      },
      { text: "All devices must use IP", correct: false },
      { text: "Repeating data packets across multiple routes", correct: false },
    ],
  },
  {
    question:
      "What is one reason why virtualization is important in networking?",
    answers: [
      { text: "It removes the need for any physical hardware", correct: false },
      {
        text: "Internet’s limitations require flexible, expandable testbeds",
        correct: true,
      },
      { text: "It improves wireless signal strength", correct: false },
      { text: "It guarantees security by default", correct: false },
    ],
  },
  {
    question: "Which is NOT a core design goal of network virtualization?",
    answers: [
      { text: "Experimental and deployment facility", correct: false },
      { text: "Manageability", correct: false },
      { text: "Performance tuning only for storage", correct: true },
      { text: "Programibility", correct: false },
    ],
  },
  {
    question: "Which layer is typically used in network virtualization?",
    answers: [
      { text: "Presentation layer", correct: false },
      { text: "Application layer", correct: false },
      { text: "IP or ATM layer", correct: true },
      { text: "BIOS firmware layer", correct: false },
    ],
  },
  {
    question: "What is an example of partial para-virtualization?",
    answers: [
      { text: "Using full hardware emulation", correct: false },
      {
        text: "Installing virtualization-aware drivers for devices like network cards",
        correct: true,
      },
      { text: "Running the guest OS in Ring 0", correct: false },
      { text: "Using binary translation for OS kernel", correct: false },
    ],
  },
];
/////////////////////////////////////  XML  ///////////////////////////////////////////
const XML = [
  {
    question: "What does XML stand for?",
    answers: [
      { text: "Extended Markup Language", correct: false },
      { text: "Extra Multi Language", correct: false },
      { text: "Extensible Markup Language", correct: true },
      { text: "Exotic Markup Listing", correct: false },
    ],
  },
  {
    question: "Which of the following is true about XML?",
    answers: [
      { text: "XML tags are predefined", correct: false },
      { text: "XML is case-insensitive", correct: false },
      { text: "XML allows user-defined tags", correct: true },
      { text: "XML is only used for web development", correct: false },
    ],
  },
  {
    question: "Which character is used to denote the beginning of an XML tag?",
    answers: [
      { text: "/", correct: false },
      { text: "<", correct: true },
      { text: ":", correct: false },
      { text: "&", correct: false },
    ],
  },
  {
    question: "In XML, every opening tag must have:",
    answers: [
      { text: "A corresponding closing tag", correct: true },
      { text: "An ID attribute", correct: false },
      { text: "An href value", correct: false },
      { text: "A namespace declaration", correct: false },
    ],
  },
  {
    question: "Which of the following is a correct XML element?",
    answers: [
      { text: "<1tag>value</1tag>", correct: false },
      { text: "<tag>value</tag>", correct: true },
      { text: "<tag-value>", correct: false },
      { text: "<tag value>", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT allowed in XML tag names?",
    answers: [
      { text: "Underscores", correct: false },
      { text: "Colons", correct: false },
      { text: "Numbers", correct: false },
      { text: "Spaces", correct: true },
    ],
  },
  {
    question: "Attributes in XML must always:",
    answers: [
      { text: "Be enclosed in double quotes", correct: true },
      { text: "Start with a number", correct: false },
      { text: "Be lowercase", correct: false },
      { text: "Have an underscore", correct: false },
    ],
  },
  {
    question: "Which is a correct example of an XML attribute?",
    answers: [
      { text: "<tag attribute=value>", correct: false },
      { text: "<tag attribute='value'>", correct: true },
      { text: "<tag(attribute)=value>", correct: false },
      { text: "<tag attribute:value>", correct: false },
    ],
  },
  {
    question: "What does a namespace in XML prevent?",
    answers: [
      { text: "Excessive file size", correct: false },
      { text: "Syntax errors", correct: false },
      { text: "Tag name conflicts", correct: true },
      { text: "Slow loading", correct: false },
    ],
  },
  {
    question:
      'What does the following URI represent in an XML document?\nxmlns:h="http://www.w3.org/TR/html4/"',
    answers: [
      { text: "It defines where to fetch HTML4 online", correct: false },
      { text: "It is a required XML schema", correct: false },
      {
        text: "It defines a unique namespace for HTML4 elements",
        correct: true,
      },
      { text: "It links to an HTML style guide", correct: false },
    ],
  },
  {
    question: "Which of the following is correct about XML Parsers?",
    answers: [
      { text: "Validating parser check only syntax", correct: false },
      {
        text: "Validating parser check both syntax and DOD rules",
        correct: true,
      },
      {
        text: "Non Validating Parser check both syntax and DOD rules",
        correct: false,
      },
      { text: "Non Validating Parser checks for only syntax", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a valid XML character encoding?",
    answers: [
      { text: "UTF-8", correct: false },
      { text: "ASCII", correct: false },
      { text: "UTF-16", correct: false },
      { text: "PDF", correct: true },
    ],
  },
  {
    question: "What does character encoding define in an XML file?",
    answers: [
      { text: "The language of the content", correct: false },
      { text: "How characters are represented in bytes", correct: true },
      { text: "The XML version used", correct: false },
      { text: "The number of characters in the file", correct: false },
    ],
  },
  {
    question: "Which encoding is commonly used by web applications and XML?",
    answers: [
      { text: "UTF-8", correct: true },
      { text: "Base64", correct: false },
      { text: "UTF-2", correct: false },
      { text: "Hexadecimal", correct: false },
    ],
  },
  {
    question: "Which character must be escaped in XML?",
    answers: [
      { text: "&", correct: true },
      { text: "@", correct: false },
      { text: "?", correct: false },
      { text: "%", correct: false },
    ],
  },
  {
    question: "Which is the correct way to escape the '<' character in XML?",
    answers: [
      { text: "&lt;", correct: true },
      { text: "&less;", correct: false },
      { text: "&l;", correct: false },
      { text: "&left;", correct: false },
    ],
  },
  {
    question: "Which declaration defines encoding in an XML document?",
    answers: [
      { text: "<?xml encoding='UTF-8'?>", correct: true },
      { text: "<encoding>UTF-8</encoding>", correct: false },
      { text: "<meta charset='UTF-8'>", correct: false },
      { text: "<!DOCTYPE encoding='UTF-8'>", correct: false },
    ],
  },
  {
    question:
      "Which of the following best describes a well-formed XML document?",
    answers: [
      { text: "It can be opened in a browser", correct: false },
      {
        text: "It follows basic syntax rules like properly nested tags",
        correct: true,
      },
      { text: "It uses JavaScript to run", correct: false },
      { text: "It includes CSS for styling", correct: false },
    ],
  },
  {
    question: "Which tool is commonly used to validate XML against a schema?",
    answers: [
      { text: "XML Validator", correct: true },
      { text: "JavaScript", correct: false },
      { text: "HTML Parser", correct: false },
      { text: "CSS Checker", correct: false },
    ],
  },
  {
    question: "Which of the following tags is self-closing in XML?",
    answers: [
      { text: "<tag />", correct: true },
      { text: "<tag></tag>", correct: false },
      { text: "<tag><tag>", correct: false },
      { text: "<tag>", correct: false },
    ],
  },
  {
    question: "What is the role of an XML parser?",
    answers: [
      { text: "To compress XML files", correct: false },
      { text: "To convert XML into JavaScript", correct: false },
      { text: "To read and validate XML data structure", correct: true },
      { text: "To style XML using CSS", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of XML parser?",
    answers: [
      { text: "XHTML", correct: false },
      { text: "DTD", correct: false },
      { text: "SAX", correct: true },
      { text: "HTTP", correct: false },
    ],
  },
  {
    question: "What does XML messaging typically involve?",
    answers: [
      { text: "Sending XML data over a network", correct: true },
      { text: "Encoding XML files into images", correct: false },
      { text: "Using XML as a database", correct: false },
      { text: "Writing HTML in XML format", correct: false },
    ],
  },
  {
    question: "Which technology is often used to transform XML documents?",
    answers: [
      { text: "CSS", correct: false },
      { text: "XSLT", correct: true },
      { text: "DTD", correct: false },
      { text: "JSON", correct: false },
    ],
  },
  {
    question: "What is the purpose of DTD (Document Type Definition)?",
    answers: [
      { text: "To apply styles to XML data", correct: false },
      {
        text: "To define the structure and rules of an XML document",
        correct: true,
      },
      { text: "To encrypt XML messages", correct: false },
      { text: "To parse HTML documents", correct: false },
    ],
  },
  {
    question: "Which parse model reads an XML document sequentially?",
    answers: [
      { text: "DOM", correct: false },
      { text: "SAX", correct: true },
      { text: "DTD", correct: false },
      { text: "JSON", correct: false },
    ],
  },
  {
    question: "What does DOM parser do?",
    answers: [
      { text: "Parses XML document into an object tree", correct: true },
      { text: "Reads only the root element", correct: false },
      { text: "Ignores element attributes", correct: false },
      { text: "Converts XML to CSV format", correct: false },
    ],
  },
  {
    question: "Which is an advantage of using SAX over DOM?",
    answers: [
      { text: "SAX is faster and uses less memory", correct: true },
      { text: "SAX allows direct access to elements by ID", correct: false },
      { text: "SAX stores entire XML in memory", correct: false },
      { text: "SAX supports styling XML documents", correct: false },
    ],
  },
  {
    question: "What is SOAP in XML messaging?",
    answers: [
      {
        text: "A protocol used for exchanging structured XML information",
        correct: true,
      },
      { text: "A parser for validating XML", correct: false },
      { text: "An editor for XML documents", correct: false },
      { text: "A tool for minifying XML files", correct: false },
    ],
  },
  {
    question:
      "Which file extension is typically used for XSLT transformations?",
    answers: [
      { text: ".xsl", correct: true },
      { text: ".xmlt", correct: false },
      { text: ".xhtml", correct: false },
      { text: ".dtl", correct: false },
    ],
  },
];
//////////////////////////  WEB SERVICE   //////////////////////////////////////
const Web_Service = [
  {
    question: "What is Electronic Data Interchange (EDI)?",
    answers: [
      {
        text: "A method to visually design user interfaces on the web",
        correct: false,
      },
      {
        text: "A computer-to-computer exchange of business data in standard formats",
        correct: true,
      },
      {
        text: "An online platform for customer support",
        correct: false,
      },
      {
        text: "A digital signature tool used in e-commerce",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is NOT an advantage of EDI?",
    answers: [
      { text: "Increased human error", correct: true },
      { text: "Faster trading cycle", correct: false },
      { text: "Lower operating costs", correct: false },
      { text: "Increased productivity", correct: false },
    ],
  },
  {
    question: "Web Services use which of the following for communication?",
    answers: [
      { text: "Binary protocols", correct: false },
      { text: "Text-based communication protocols", correct: true },
      { text: "FTP only", correct: false },
      { text: "Bluetooth", correct: false },
    ],
  },
  {
    question: "Which protocol is mainly used by SOAP for transport?",
    answers: [
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "HTTP", correct: true },
      { text: "POP3", correct: false },
    ],
  },
  {
    question: "Which characteristic of XML makes it suitable for web services?",
    answers: [
      { text: "It is binary based", correct: false },
      { text: "It defines layout formatting", correct: false },
      { text: "It separates content from presentation", correct: true },
      { text: "It provides audio/video encoding", correct: false },
    ],
  },
  {
    question:
      "Which of the following is used to describe the capabilities of a web service?",
    answers: [
      { text: "SOAP", correct: false },
      { text: "WSDL", correct: true },
      { text: "HTML", correct: false },
      { text: "FTP", correct: false },
    ],
  },
  {
    question: "What does UDDI stand for?",
    answers: [
      {
        text: "Universal Data Description and Integration",
        correct: false,
      },
      {
        text: "Universal Description, Discovery and Integration",
        correct: true,
      },
      {
        text: "Uniform Data Deployment Interface",
        correct: false,
      },
      {
        text: "Unified Directory for Digital Integration",
        correct: false,
      },
    ],
  },
  {
    question: "Which is a required element in a SOAP message?",
    answers: [
      { text: "Header", correct: false },
      { text: "Body", correct: true },
      { text: "Fault", correct: false },
      { text: "Metadata", correct: false },
    ],
  },
  {
    question: "What is the role of the service provider in SOA?",
    answers: [
      { text: "Searches for available services", correct: false },
      { text: "Owns and hosts the service", correct: true },
      { text: "Requests the service", correct: false },
      { text: "Publishes client interfaces", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a SOAP characteristic?",
    answers: [
      { text: "Extensibility", correct: false },
      { text: "Neutrality", correct: false },
      { text: "Proprietary", correct: true },
      { text: "Independence", correct: false },
    ],
  },
  {
    question: "Which format is used by SOAP messages?",
    answers: [
      { text: "JSON", correct: false },
      { text: "Binary", correct: false },
      { text: "XML", correct: true },
      { text: "CSV", correct: false },
    ],
  },
  {
    question:
      "Which of the following best describes the WSDL 'binding' element?",
    answers: [
      { text: "Defines the endpoint URL", correct: false },
      { text: "Specifies the communication protocol", correct: true },
      { text: "Describes the service provider", correct: false },
      { text: "Lists the programming languages used", correct: false },
    ],
  },
  {
    question: "What is the function of a service registry in SOA?",
    answers: [
      { text: "Stores and executes all services", correct: false },
      { text: "Provides a searchable list of services", correct: true },
      { text: "Binds the services to the network", correct: false },
      { text: "Acts as a firewall for services", correct: false },
    ],
  },
  {
    question:
      "What does the 'publish' operation in Web Service architecture do?",
    answers: [
      { text: "Executes a service", correct: false },
      { text: "Removes a service from registry", correct: false },
      {
        text: "Makes the service description available to requestors",
        correct: true,
      },
      { text: "Encrypts service data", correct: false },
    ],
  },
  {
    question:
      "Which web technology was intended to solve interoperability and firewall traversal?",
    answers: [
      { text: "FTP", correct: false },
      { text: "EDI", correct: false },
      { text: "Web Services", correct: true },
      { text: "HTML", correct: false },
    ],
  },
  {
    question:
      "Which component helps in debugging Web Services because it is text-based?",
    answers: [
      { text: "WSDL", correct: false },
      { text: "SOAP", correct: true },
      { text: "FTP", correct: false },
      { text: "CSS", correct: false },
    ],
  },
  {
    question: "Which is NOT a valid SOAP building block?",
    answers: [
      { text: "Envelope", correct: false },
      { text: "Header", correct: false },
      { text: "Script", correct: true },
      { text: "Body", correct: false },
    ],
  },
  {
    question: "What enables businesses to register and locate web services?",
    answers: [
      { text: "WSDL", correct: false },
      { text: "SOAP", correct: false },
      { text: "UDDI", correct: true },
      { text: "HTTP", correct: false },
    ],
  },
  {
    question: "What does an XML parser do?",
    answers: [
      {
        text: "Executes the content within XML files",
        correct: false,
      },
      {
        text: "Checks the syntax and validity against schema/DTD",
        correct: true,
      },
      {
        text: "Converts XML to HTML",
        correct: false,
      },
      {
        text: "Creates dynamic websites",
        correct: false,
      },
    ],
  },
  {
    question: "In SOA, what does the 'bind' operation imply?",
    answers: [
      {
        text: "Registering a new service",
        correct: false,
      },
      {
        text: "Invoking or initiating interaction with a service at runtime",
        correct: true,
      },
      {
        text: "Parsing XML data",
        correct: false,
      },
      {
        text: "Translating service data to binary",
        correct: false,
      },
    ],
  },
];
/////////////////////////////////  Service level Agreement  //////////////////////////////////////
const SLA_Economics = [
  {
    question: "What is a Service Level Agreement (SLA)?",
    answers: [
      {
        text: "A legal contract to transfer data between cloud providers",
        correct: false,
      },
      {
        text: "A formal contract between a Service Provider and a Service Consumer",
        correct: true,
      },
      {
        text: "An encryption protocol used in web services",
        correct: false,
      },
      {
        text: "A billing invoice between two cloud providers",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of an SLA?",
    answers: [
      { text: "To monitor cloud marketing strategies", correct: false },
      {
        text: "To define a formal basis for performance and availability guarantees",
        correct: true,
      },
      { text: "To evaluate only security parameters", correct: false },
      { text: "To define UI features of a web app", correct: false },
    ],
  },
  {
    question: "Which of the following is included in the contents of an SLA?",
    answers: [
      { text: "Web design tools", correct: false },
      { text: "Customer satisfaction reviews", correct: false },
      { text: "Auditing mechanism", correct: true },
      { text: "Development lifecycle model", correct: false },
    ],
  },
  {
    question: "What does WS-Agreement provide?",
    answers: [
      { text: "A SQL database service", correct: false },
      {
        text: "An XML-based protocol for negotiating and managing service agreements",
        correct: true,
      },
      { text: "A cloud storage solution", correct: false },
      { text: "A client-side encryption tool", correct: false },
    ],
  },
  {
    question: "What is WSLA?",
    answers: [
      {
        text: "Web Server Load Adapter",
        correct: false,
      },
      {
        text: "A framework to express and monitor SLAs using XML",
        correct: true,
      },
      {
        text: "A cloud deployment tool",
        correct: false,
      },
      {
        text: "A type of cloud database",
        correct: false,
      },
    ],
  },
  {
    question: "What differentiates a Cloud SLA from a Web Service SLA?",
    answers: [
      { text: "Use of UDDI directories in cloud SLAs", correct: false },
      {
        text: "Cloud SLAs include QoS related to security, trust, and automation",
        correct: true,
      },
      {
        text: "Web SLAs include infrastructure cost planning",
        correct: false,
      },
      {
        text: "Cloud SLAs are used only for mobile apps",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is a negotiable SLA characteristic?",
    answers: [
      {
        text: "It uses a fixed template created by the provider",
        correct: false,
      },
      {
        text: "It allows negotiation via external agents",
        correct: true,
      },
      {
        text: "It doesn't require any agreement at runtime",
        correct: false,
      },
      {
        text: "It is non-conducive for mission-critical systems",
        correct: false,
      },
    ],
  },
  {
    question: "Which is an example of a Service Level Objective (SLO)?",
    answers: [
      {
        text: "The service must be visually appealing",
        correct: false,
      },
      {
        text: "Availability of a service is 99.9%",
        correct: true,
      },
      {
        text: "The user must agree to terms and conditions",
        correct: false,
      },
      {
        text: "The UI must respond in blue theme",
        correct: false,
      },
    ],
  },
  {
    question: "Service Level Management involves:",
    answers: [
      { text: "Web UI design monitoring", correct: false },
      {
        text: "Monitoring and measuring performance based on SLOs",
        correct: true,
      },
      { text: "Only consumer-side operations", correct: false },
      { text: "Creating new SLA documents daily", correct: false },
    ],
  },
  {
    question: "Which of the following is a typical KPI used in SLA?",
    answers: [
      { text: "User interface font size", correct: false },
      { text: "Page scroll behavior", correct: false },
      { text: "Downtime and uptime", correct: true },
      { text: "Number of user clicks", correct: false },
    ],
  },
  {
    question: "How is availability calculated from KPIs?",
    answers: [
      { text: "Availability = uptime - downtime", correct: false },
      { text: "Availability = 1 + (downtime / uptime)", correct: false },
      { text: "Availability = uptime × downtime", correct: false },
      { text: "Availability = 1 - (downtime / uptime)", correct: true },
    ],
  },
  {
    question: "What is a key limitation of SLAs?",
    answers: [
      { text: "They ensure perfect uptime", correct: false },
      { text: "They eliminate need for monitoring", correct: false },
      { text: "Biasness towards vendors", correct: true },
      { text: "They provide security auditing", correct: false },
    ],
  },
  {
    question:
      "Which SLA requirement ensures user data is protected from unauthorized access?",
    answers: [
      { text: "Transparency", correct: false },
      { text: "Monitoring", correct: false },
      { text: "Data Encryption", correct: true },
      { text: "Auditability", correct: false },
    ],
  },
  {
    question: "Which SLA requirement ensures old data is properly handled?",
    answers: [
      { text: "Data Retention and Deletion", correct: true },
      { text: "Service Redundancy", correct: false },
      { text: "Latency Management", correct: false },
      { text: "Bandwidth Provisioning", correct: false },
    ],
  },
  {
    question: "Cloud computing supports which pricing model?",
    answers: [
      { text: "Fixed annual pricing", correct: false },
      { text: "Utility pricing or pay-per-use", correct: true },
      { text: "Free-tier for all services", correct: false },
      { text: "Hardware-ownership pricing", correct: false },
    ],
  },
  {
    question:
      "Which property defines cloud's ability to be globally available?",
    answers: [
      { text: "Multiplexing", correct: false },
      { text: "Location-independence", correct: true },
      { text: "Service Composition", correct: false },
      { text: "Hybrid Integration", correct: false },
    ],
  },
  {
    question: "What economic benefit does pooled infrastructure provide?",
    answers: [
      { text: "Reduced service performance", correct: false },
      { text: "Increased operating costs", correct: false },
      { text: "Economies of scale", correct: true },
      { text: "Slower demand analysis", correct: false },
    ],
  },
  {
    question: "What is the coefficient of variation (CV)?",
    answers: [
      { text: "Standard deviation of the maximum value", correct: false },
      { text: "Variance of the absolute values", correct: false },
      { text: "Ratio of standard deviation to mean", correct: true },
      { text: "Product of mean and standard deviation", correct: false },
    ],
  },
  {
    question: "Higher smoothness in demand results in:",
    answers: [
      { text: "Higher cost of service", correct: false },
      { text: "Increased SLA violations", correct: false },
      { text: "Higher utilization and efficiency", correct: true },
      { text: "Lower resource reuse", correct: false },
    ],
  },
  {
    question: "Which is true for off-the-shelf SLA?",
    answers: [
      { text: "It is highly negotiable", correct: false },
      { text: "Used mainly in experimental cloud setups", correct: false },
      { text: "Provider defines all terms without negotiation", correct: true },
      { text: "Negotiated through multiple agents", correct: false },
    ],
  },
  {
    question: "Which layer does not have an expected SLA parameter?",
    answers: [
      { text: "SaaS", correct: false },
      { text: "PaaS", correct: false },
      { text: "IaaS", correct: false },
      { text: "BIaaS (Business Intelligence as a Service)", correct: true },
    ],
  },
  {
    question:
      "Which metric is used to track actual service delivery over time?",
    answers: [
      { text: "Theme selection", correct: false },
      { text: "Packet inbytes and outbytes", correct: true },
      { text: "Window reload counts", correct: false },
      { text: "Dropdown navigation speed", correct: false },
    ],
  },
  {
    question: "Penalty cost in on-demand services occurs when:",
    answers: [
      { text: "The resources exceed demand", correct: false },
      {
        text: "Resources don't match instantaneous demand",
        correct: true,
      },
      { text: "Customer terminates SLA early", correct: false },
      { text: "Data transfer is free", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a benefit of on-demand cloud resources?",
    answers: [
      { text: "Static allocation", correct: false },
      { text: "Delayed provisioning", correct: false },
      {
        text: "Scalable, elastic resources provisioned without delay",
        correct: true,
      },
      { text: "High upfront hardware cost", correct: false },
    ],
  },
  {
    question: "What does statistical multiplexing allow in cloud?",
    answers: [
      { text: "Predict exact user behavior", correct: false },
      {
        text: "Share resources efficiently by aggregating variable demand",
        correct: true,
      },
      { text: "Increase individual costs", correct: false },
      { text: "Decrease availability", correct: false },
    ],
  },
];
///////////////////////////////// Managing Data  //////////////////////////////////////
const ManagingData = [
  {
    question:
      "What is the default data storage and retrieval mechanism since the 1980s?",
    answers: [
      { text: "Hierarchical databases", correct: false },
      { text: "Network databases", correct: false },
      { text: "Relational databases", correct: true },
      { text: "Column-oriented databases", correct: false },
    ],
  },
  {
    question:
      "Which system organizes data similarly to column-oriented databases like Vertica?",
    answers: [
      { text: "Dynamo", correct: false },
      { text: "MapReduce", correct: false },
      { text: "BigTable", correct: true },
      { text: "Google File System", correct: false },
    ],
  },
  {
    question: "Which of the following is a parallel programming paradigm?",
    answers: [
      { text: "SQL", correct: false },
      { text: "MapReduce", correct: true },
      { text: "SMP", correct: false },
      { text: "HDFS", correct: false },
    ],
  },
  {
    question: "Which of the following is an open-source implementation of GFS?",
    answers: [
      { text: "SimpleDB", correct: false },
      { text: "Dynamo", correct: false },
      { text: "HDFS", correct: true },
      { text: "BigTable", correct: false },
    ],
  },
  {
    question: "What type of storage do traditional relational databases use?",
    answers: [
      { text: "Column-oriented storage", correct: false },
      { text: "Object-oriented storage", correct: false },
      { text: "Row-oriented storage", correct: true },
      { text: "Distributed object storage", correct: false },
    ],
  },
  {
    question:
      "Which architecture has each processor with its own memory and disk?",
    answers: [
      { text: "Shared memory", correct: false },
      { text: "Shared disk", correct: false },
      { text: "Shared nothing", correct: true },
      { text: "Cloud-based", correct: false },
    ],
  },
  {
    question:
      "Which architecture allows all processors to access shared memory?",
    answers: [
      { text: "Shared memory", correct: true },
      { text: "Shared nothing", correct: false },
      { text: "Shared disk", correct: false },
      { text: "Distributed file system", correct: false },
    ],
  },
  {
    question:
      "Which architecture is a hybrid of shared memory and shared nothing?",
    answers: [
      { text: "Shared memory", correct: false },
      { text: "Shared disk", correct: true },
      { text: "Cloud architecture", correct: false },
      { text: "Centralized", correct: false },
    ],
  },
  {
    question:
      "Which of these databases supports parallel processing for transaction tasks?",
    answers: [
      { text: "Netezza", correct: false },
      { text: "Oracle", correct: true },
      { text: "SimpleDB", correct: false },
      { text: "BigTable", correct: false },
    ],
  },
  {
    question:
      "Which Google service offers a key-value store built on BigTable?",
    answers: [
      { text: "Google File System", correct: false },
      { text: "Google App Engine's Datastore", correct: true },
      { text: "Google Cloud Storage", correct: false },
      { text: "Google Drive", correct: false },
    ],
  },
  {
    question: "How does the GFS client read a file?",
    answers: [
      { text: "Reads metadata from chunk server directly", correct: false },
      { text: "Sends request to master to get chunk metadata", correct: true },
      { text: "Reads the file entirely into memory", correct: false },
      { text: "Uses SimpleDB to retrieve chunk", correct: false },
    ],
  },
  {
    question: "What is the purpose of tablets in BigTable?",
    answers: [
      { text: "To store configurations", correct: false },
      {
        text: "To enable parallel access and management of data",
        correct: true,
      },
      { text: "To handle only metadata", correct: false },
      { text: "To simulate a relational table", correct: false },
    ],
  },
  {
    question: "Which type of database is Dynamo best suited for?",
    answers: [
      { text: "Scientific simulations", correct: false },
      { text: "E-commerce web applications", correct: true },
      { text: "Geographic databases", correct: false },
      { text: "Time series databases", correct: false },
    ],
  },
  {
    question:
      "Which technique is used by Dynamo to ensure consistency during concurrent reads/writes?",
    answers: [
      { text: "Simple locking", correct: false },
      { text: "Two-phase commit", correct: false },
      { text: "Quorum protocol", correct: true },
      { text: "Sharding", correct: false },
    ],
  },
  {
    question: "What kind of data model is used in Dynamo?",
    answers: [
      { text: "Relational", correct: false },
      { text: "Document-based", correct: false },
      { text: "<Key, Value> pair", correct: true },
      { text: "Graph-based", correct: false },
    ],
  },
  {
    question: "In MapReduce, what happens in the map phase?",
    answers: [
      { text: "Reducer processes are scheduled", correct: false },
      { text: "Key-value pairs are grouped by key", correct: false },
      {
        text: "Input data is split and transformed into key-value pairs",
        correct: true,
      },
      { text: "Results are stored in GFS", correct: false },
    ],
  },
  {
    question: "What does the reducer do in the MapReduce model?",
    answers: [
      { text: "Splits data", correct: false },
      { text: "Transforms files into key-value pairs", correct: false },
      {
        text: "Applies a function on grouped key-value results",
        correct: true,
      },
      { text: "Schedules mappers", correct: false },
    ],
  },
  {
    question:
      "Which layer in RDBMS handles fetching of pages from disk into memory?",
    answers: [
      { text: "Query parser", correct: false },
      { text: "Transaction manager", correct: false },
      { text: "Disk-space management", correct: true },
      { text: "Optimizer", correct: false },
    ],
  },
  {
    question:
      "Which component transforms SQL queries into memory and disk-level operations?",
    answers: [
      { text: "Optimizer", correct: false },
      { text: "Disk-space manager", correct: false },
      { text: "Parser", correct: true },
      { text: "Transaction manager", correct: false },
    ],
  },
  {
    question: "What is the main purpose of SSTables in BigTable?",
    answers: [
      { text: "Store meta-data only", correct: false },
      {
        text: "Store column families efficiently for a row range",
        correct: true,
      },
      { text: "Provide row-level isolation", correct: false },
      { text: "Replace chunk servers", correct: false },
    ],
  },
  {
    question:
      "What is the primary function of a Relational Database Management System (RDBMS)?",
    answers: [
      { text: "To manage unstructured files on cloud storage", correct: false },
      { text: "To transform HTML into SQL", correct: false },
      {
        text: "To parse and optimize SQL queries for data storage and retrieval",
        correct: true,
      },
      {
        text: "To replace all hierarchical databases with JSON",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is a column-oriented storage system developed by Google?",
    answers: [
      { text: "Google File System", correct: false },
      { text: "DynamoDB", correct: false },
      { text: "BigTable", correct: true },
      { text: "MySQL", correct: false },
    ],
  },
  {
    question:
      "Which architecture does not share memory or disk between servers?",
    answers: [
      { text: "Shared memory", correct: false },
      { text: "Shared disk", correct: false },
      { text: "Shared nothing", correct: true },
      { text: "Hybrid memory", correct: false },
    ],
  },
  {
    question:
      "Which open-source system implements the concepts of Google File System (GFS)?",
    answers: [
      { text: "BigTable", correct: false },
      { text: "SimpleDB", correct: false },
      { text: "Hadoop Distributed File System (HDFS)", correct: true },
      { text: "Amazon EC2", correct: false },
    ],
  },
  {
    question:
      "Which programming paradigm is central to processing large-scale data in a parallel and fault-tolerant manner?",
    answers: [
      { text: "Object-Oriented Programming", correct: false },
      { text: "Functional Programming", correct: false },
      { text: "MapReduce", correct: true },
      { text: "Service-Oriented Architecture", correct: false },
    ],
  },
  {
    question: "In BigTable, what uniquely identifies each cell of data?",
    answers: [
      { text: "Row key, column key, and timestamp", correct: true },
      { text: "Table name and index", correct: false },
      { text: "Label and primary key", correct: false },
      { text: "File path and offset", correct: false },
    ],
  },
  {
    question:
      "Which system uses a ring-based architecture with MD5 hashing for distributed storage?",
    answers: [
      { text: "BigTable", correct: false },
      { text: "MapReduce", correct: false },
      { text: "Dynamo", correct: true },
      { text: "Vertica", correct: false },
    ],
  },
  {
    question:
      "What is the primary use of the Reduce phase in the MapReduce model?",
    answers: [
      { text: "Sorts input data", correct: false },
      { text: "Fetches metadata from the master node", correct: false },
      {
        text: "Performs aggregation and summarization based on key",
        correct: true,
      },
      { text: "Splits data into tablets for storage", correct: false },
    ],
  },
  {
    question:
      "Which of the following best describes the fault-tolerance mechanism in GFS?",
    answers: [
      { text: "Redundant HTML caching", correct: false },
      { text: "Use of a master node for all reads and writes", correct: false },
      {
        text: "Multiple replicas and handling failures during read/write operations",
        correct: true,
      },
      { text: "Dynamic creation of database schemas", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a key feature of Dynamo in handling concurrent updates?",
    answers: [
      { text: "Immediate deletion of conflicting versions", correct: false },
      { text: "Single version enforcement", correct: false },
      {
        text: "Application-independent conflict resolution with versioning",
        correct: true,
      },
      { text: "Database-wide locking", correct: false },
    ],
  },
];
/////////////////////////////////  OpenStack  //////////////////////////////////////
const OpenStack = [
  {
    question: "What is OpenStack primarily used for?",
    answers: [
      { text: "Creating mobile applications", correct: false },
      {
        text: "Managing large pools of compute, storage, and networking resources",
        correct: true,
      },
      { text: "Developing machine learning models", correct: false },
      { text: "Automating hardware manufacturing", correct: false },
    ],
  },
  {
    question:
      "Which interface does OpenStack provide for administrators and users?",
    answers: [
      { text: "Command Line Interface only", correct: false },
      { text: "A mobile app", correct: false },
      { text: "A web-based dashboard", correct: true },
      { text: "REST API only", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a capability provided by OpenStack?",
    answers: [
      { text: "Software as a Service (SaaS)", correct: false },
      { text: "Infrastructure as a Service (IaaS)", correct: false },
      { text: "Hardware as a Service (HaaS)", correct: true },
      { text: "Platform as a Service (PaaS)", correct: false },
    ],
  },
  {
    question: "What is the main function of the OpenStack Nova project?",
    answers: [
      { text: "Provides identity and access management", correct: false },
      { text: "Manages compute instances lifecycle", correct: true },
      { text: "Stores object-based files", correct: false },
      { text: "Monitors cloud services", correct: false },
    ],
  },
  {
    question: "What does the Neutron service in OpenStack provide?",
    answers: [
      { text: "Image storage", correct: false },
      { text: "Compute instance scheduling", correct: false },
      { text: "Network-Connectivity-as-a-Service", correct: true },
      { text: "Block storage", correct: false },
    ],
  },
  {
    question: "Which OpenStack project handles unstructured object storage?",
    answers: [
      { text: "Nova", correct: false },
      { text: "Glance", correct: false },
      { text: "Cinder", correct: false },
      { text: "Swift", correct: true },
    ],
  },
  {
    question: "Which project provides persistent block storage in OpenStack?",
    answers: [
      { text: "Cinder", correct: true },
      { text: "Swift", correct: false },
      { text: "Nova", correct: false },
      { text: "Glance", correct: false },
    ],
  },
  {
    question: "What is the role of Keystone in OpenStack?",
    answers: [
      { text: "Stores VM images", correct: false },
      { text: "Provides authorization and authentication", correct: true },
      { text: "Manages compute resources", correct: false },
      { text: "Schedules VM instances", correct: false },
    ],
  },
  {
    question:
      "Which service in OpenStack is responsible for providing a web UI?",
    answers: [
      { text: "Ceilometer", correct: false },
      { text: "Keystone", correct: false },
      { text: "Horizon", correct: true },
      { text: "Glance", correct: false },
    ],
  },
  {
    question:
      "Which service is used by Nova during instance provisioning to retrieve VM images?",
    answers: [
      { text: "Keystone", correct: false },
      { text: "Ceilometer", correct: false },
      { text: "Glance", correct: true },
      { text: "Neutron", correct: false },
    ],
  },
  {
    question: "What kind of storage does Swift provide?",
    answers: [
      { text: "Block-level storage", correct: false },
      { text: "Temporary storage", correct: false },
      { text: "Object storage", correct: true },
      { text: "RAM-only storage", correct: false },
    ],
  },
  {
    question: "What does Ceilometer monitor in an OpenStack environment?",
    answers: [
      { text: "System processes", correct: false },
      { text: "Power consumption", correct: false },
      { text: "Cloud usage for billing and statistics", correct: true },
      { text: "User access logs", correct: false },
    ],
  },
  {
    question: "What kind of API does Swift use to store and retrieve data?",
    answers: [
      { text: "GraphQL", correct: false },
      { text: "RESTful HTTP API", correct: true },
      { text: "SOAP", correct: false },
      { text: "gRPC", correct: false },
    ],
  },
  {
    question:
      "Which of the following OpenStack services uses a pluggable driver architecture?",
    answers: [
      { text: "Nova", correct: false },
      { text: "Cinder", correct: true },
      { text: "Swift", correct: false },
      { text: "Horizon", correct: false },
    ],
  },
  {
    question:
      "In the provisioning flow, who is responsible for filtering and selecting the compute node?",
    answers: [
      { text: "Nova API", correct: false },
      { text: "Neutron", correct: false },
      { text: "Scheduler", correct: true },
      { text: "Conductor", correct: false },
    ],
  },
  {
    question: "Which type of storage persists only until the VM is terminated?",
    answers: [
      { text: "Block storage", correct: false },
      { text: "Object storage", correct: false },
      { text: "Ephemeral storage", correct: true },
      { text: "Database storage", correct: false },
    ],
  },
  {
    question: "Which type of storage is managed by Cinder?",
    answers: [
      { text: "Object storage", correct: false },
      { text: "Block storage", correct: true },
      { text: "Ephemeral storage", correct: false },
      { text: "RAM storage", correct: false },
    ],
  },
  {
    question:
      "Which cloud platform offers services to build, test and deploy applications on Google’s infrastructure?",
    answers: [
      { text: "Amazon Web Services", correct: false },
      { text: "Microsoft Azure", correct: false },
      { text: "Google Cloud Platform", correct: true },
      { text: "IBM Cloud", correct: false },
    ],
  },
  {
    question: "Which service of GCP helps scale applications globally?",
    answers: [
      { text: "Google Drive", correct: false },
      { text: "Google Cloud Endpoints", correct: true },
      { text: "Google Cloud Console", correct: false },
      { text: "Firebase", correct: false },
    ],
  },
  {
    question: "What percentage of global electricity is consumed by servers?",
    answers: [
      { text: "1.5%", correct: false },
      { text: "0.5%", correct: true },
      { text: "5%", correct: false },
      { text: "10%", correct: false },
    ],
  },
  {
    question: "Which of the following is a green computing technique?",
    answers: [
      { text: "Installing more servers", correct: false },
      { text: "Advanced scheduling schemes", correct: true },
      { text: "Using more disk space", correct: false },
      { text: "Increasing network traffic", correct: false },
    ],
  },
  {
    question: "What is the focus of Power-aware Scheduling?",
    answers: [
      { text: "Reducing internet usage", correct: false },
      { text: "Optimizing billing", correct: false },
      { text: "Reducing power usage during VM scheduling", correct: true },
      { text: "Improving image quality", correct: false },
    ],
  },
  {
    question:
      "Which type of resource is considered logical in cloud computing?",
    answers: [
      { text: "Disk", correct: false },
      { text: "Scientific instrument", correct: false },
      { text: "Monitoring", correct: true },
      { text: "Database server", correct: false },
    ],
  },
  {
    question:
      "Which OpenStack component is used to attach IP and configure DNS during VM creation?",
    answers: [
      { text: "Nova", correct: false },
      { text: "Cinder", correct: false },
      { text: "Neutron", correct: true },
      { text: "Glance", correct: false },
    ],
  },
  {
    question:
      "Which storage is suitable for storing VM images and other files?",
    answers: [
      { text: "Block storage", correct: false },
      { text: "Ephemeral storage", correct: false },
      { text: "Object storage", correct: true },
      { text: "RAM", correct: false },
    ],
  },
  {
    question: "Where does Nova Conductor fetch information about a VM from?",
    answers: [
      { text: "From user input", correct: false },
      { text: "From Neutron", correct: false },
      { text: "From the database", correct: true },
      { text: "From Glance", correct: false },
    ],
  },
  {
    question: "Which OpenStack service assigns IP addresses to instances?",
    answers: [
      { text: "Horizon", correct: false },
      { text: "Keystone", correct: false },
      { text: "Neutron", correct: true },
      { text: "Cinder", correct: false },
    ],
  },
  {
    question: "What role does Glance play in OpenStack?",
    answers: [
      { text: "Networking service", correct: false },
      { text: "Image storage and retrieval", correct: true },
      { text: "Compute node scheduling", correct: false },
      { text: "Monitoring", correct: false },
    ],
  },
  {
    question:
      "Why is power-aware and thermal-aware scheduling important in cloud data centers?",
    answers: [
      { text: "To reduce user activity", correct: false },
      { text: "To minimize performance", correct: false },
      { text: "To reduce energy and temperature", correct: true },
      { text: "To improve battery life", correct: false },
    ],
  },
  {
    question:
      "What is the effect of advanced scheduling strategies on data center power usage?",
    answers: [
      { text: "Increases power usage", correct: false },
      { text: "No impact", correct: false },
      {
        text: "Reduces power usage with minimal performance impact",
        correct: true,
      },
      { text: "Stops scheduling", correct: false },
    ],
  },
];
//////////////////////////// Resource Management 2 //////////////////////////////////////
const ResourceManagement2 = [
  {
    question: "Which of the following is an objective of resource management?",
    answers: [
      { text: "Increased latency", correct: false },
      { text: "Reduced overheads", correct: true },
      { text: "Increased complexity", correct: false },
      { text: "Higher energy consumption", correct: false },
    ],
  },
  {
    question: "What is a key performance metric for resource management?",
    answers: [
      { text: "Cost effectiveness", correct: false },
      { text: "Ease of deployment", correct: true },
      { text: "Protocol design", correct: false },
      { text: "Cloud storage pricing", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a challenge in resource management related to hardware?",
    answers: [
      { text: "Data mining", correct: false },
      { text: "Sensors/actuators", correct: true },
      { text: "Application UI design", correct: false },
      { text: "Customer feedback", correct: false },
    ],
  },
  {
    question:
      "What aspect of resource management involves estimating future resource needs?",
    answers: [
      { text: "Resource brokering", correct: false },
      { text: "Resource provisioning", correct: false },
      { text: "Resource estimation", correct: true },
      { text: "Resource discovery", correct: false },
    ],
  },
  {
    question:
      "Which of the following is not a performance metric for resource management?",
    answers: [
      { text: "QoS", correct: false },
      { text: "Delay", correct: false },
      { text: "Scalability", correct: true },
      { text: "Control overhead", correct: false },
    ],
  },
  {
    question: "What does confidentiality in cloud security mean?",
    answers: [
      { text: "Allowing free access to data", correct: false },
      { text: "Keeping data and resources hidden", correct: true },
      { text: "Improving system latency", correct: false },
      { text: "Ensuring multiple backups", correct: false },
    ],
  },
  {
    question:
      "Which type of attack involves unauthorized access to information being transmitted?",
    answers: [
      { text: "Replay attack", correct: false },
      { text: "Masquerade attack", correct: false },
      { text: "Passive attack", correct: true },
      { text: "Denial of Service", correct: false },
    ],
  },
  {
    question: "Interception attacks primarily affect which security component?",
    answers: [
      { text: "Availability", correct: false },
      { text: "Authentication", correct: false },
      { text: "Confidentiality", correct: true },
      { text: "Integrity", correct: false },
    ],
  },
  {
    question:
      "Which of these is a class of threat that involves unauthorized data disclosure?",
    answers: [
      { text: "Usurpation", correct: false },
      { text: "Deception", correct: false },
      { text: "Disclosure", correct: true },
      { text: "Disruption", correct: false },
    ],
  },
  {
    question: "What kind of attack does 'fabrication' represent?",
    answers: [
      { text: "Attack on integrity", correct: false },
      { text: "Attack on confidentiality", correct: false },
      { text: "Attack on authenticity", correct: true },
      { text: "Attack on availability", correct: false },
    ],
  },
  {
    question: "Which of these is a type of active attack?",
    answers: [
      { text: "Traffic analysis", correct: false },
      { text: "Replay", correct: true },
      { text: "Snooping", correct: false },
      { text: "Release of message contents", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a valid recovery metric in disaster planning?",
    answers: [
      { text: "QoS time", correct: false },
      { text: "Network load", correct: false },
      { text: "Recovery Point Objective (RPO)", correct: true },
      { text: "System efficiency ratio", correct: false },
    ],
  },
  {
    question: "What is the purpose of redundancy in fault tolerance?",
    answers: [
      { text: "To reduce latency", correct: false },
      { text: "To duplicate critical components", correct: true },
      { text: "To enhance user experience", correct: false },
      { text: "To backup databases", correct: false },
    ],
  },
  {
    question: "Which of these best defines 'Usurpation' threat?",
    answers: [
      { text: "Unauthorized disclosure of data", correct: false },
      { text: "Modification or spoofing of resources", correct: true },
      { text: "Legal misuse of data", correct: false },
      { text: "Loss of backup", correct: false },
    ],
  },
  {
    question: "What does the Replay attack involve?",
    answers: [
      { text: "Masquerading as a trusted entity", correct: false },
      {
        text: "Reusing a captured message for unauthorized access",
        correct: true,
      },
      { text: "Altering the contents of a message", correct: false },
      { text: "Disabling server access", correct: false },
    ],
  },
  {
    question:
      "Which operational issue considers 'Is it cheaper to prevent or recover?'",
    answers: [
      { text: "Risk analysis", correct: false },
      { text: "Cost-benefit analysis", correct: true },
      { text: "Backup frequency", correct: false },
      { text: "Fault tolerance", correct: false },
    ],
  },
  {
    question: "Which of the following is not an example of an active attack?",
    answers: [
      { text: "Masquerade", correct: false },
      { text: "Modification", correct: false },
      { text: "Traffic analysis", correct: true },
      { text: "Denial of service", correct: false },
    ],
  },
  {
    question: "Which component ensures 'origin integrity' in cloud security?",
    answers: [
      { text: "Availability", correct: false },
      { text: "Authentication", correct: true },
      { text: "Data storage", correct: false },
      { text: "Bandwidth control", correct: false },
    ],
  },
  {
    question: "Which of the following best describes 'Resource modeling'?",
    answers: [
      { text: "Allocating existing resources", correct: false },
      { text: "Estimating future usage of network", correct: false },
      {
        text: "Describing the structure and behavior of resources",
        correct: true,
      },
      { text: "Controlling system APIs", correct: false },
    ],
  },
  {
    question:
      "Which threat includes actions like spoofing and denial of service?",
    answers: [
      { text: "Disclosure", correct: false },
      { text: "Deception", correct: false },
      { text: "Disruption", correct: false },
      { text: "Usurpation", correct: true },
    ],
  },
];
//////////////////////////////  Cloud Security  //////////////////////////////
const Cloud_Security = [
  {
    question:
      "What is a key risk introduced by multi-tenancy in cloud computing?",
    answers: [
      { text: "Overloading a single user’s VM", correct: false },
      {
        text: "Side-channel attacks and cross-VM information leakage",
        correct: true,
      },
      { text: "Decreased storage capacity", correct: false },
      { text: "Slow internet connection", correct: false },
    ],
  },
  {
    question:
      "What is the main challenge posed by multi-tenancy in cloud systems?",
    answers: [
      { text: "Limited user interface options", correct: false },
      { text: "Inability to scale resources", correct: false },
      {
        text: "Vulnerable VM isolation and resource sharing risks",
        correct: true,
      },
      { text: "Lack of API integrations", correct: false },
    ],
  },
  {
    question: "Which cloud service provider was used to test cross-VM attacks?",
    answers: [
      { text: "Google Cloud Platform", correct: false },
      { text: "Microsoft Azure", correct: false },
      { text: "Amazon EC2", correct: true },
      { text: "IBM Cloud", correct: false },
    ],
  },
  {
    question: "What are the two primary steps of a cross-VM attack?",
    answers: [
      { text: "Scanning and injection", correct: false },
      { text: "Placement and extraction", correct: true },
      { text: "Mapping and flooding", correct: false },
      { text: "Execution and analysis", correct: false },
    ],
  },
  {
    question:
      "What assumption is made in the threat model regarding cloud providers?",
    answers: [
      { text: "They are considered malicious", correct: false },
      { text: "They will attempt to subvert users", correct: false },
      { text: "They are fully trusted", correct: true },
      { text: "They share user data with attackers", correct: false },
    ],
  },
  {
    question: "What is cloud cartography?",
    answers: [
      { text: "A service that encrypts cloud data", correct: false },
      {
        text: "The process of mapping instance locations in the cloud",
        correct: true,
      },
      { text: "A tool for performance monitoring", correct: false },
      { text: "An API for cloud cost estimation", correct: false },
    ],
  },
  {
    question: "Which probing method originates from outside EC2?",
    answers: [
      { text: "Internal probe", correct: false },
      { text: "Cross probe", correct: false },
      { text: "External probe", correct: true },
      { text: "Cloud-native probe", correct: false },
    ],
  },
  {
    question: "What is the goal of a keystroke timing attack?",
    answers: [
      { text: "To block all key inputs", correct: false },
      {
        text: "To guess passwords based on inter-keystroke delays",
        correct: true,
      },
      { text: "To detect network interruptions", correct: false },
      { text: "To break SSL encryption", correct: false },
    ],
  },
  {
    question: "Which tool is used for discovering IP prefixes in EC2?",
    answers: [
      { text: "nmap", correct: false },
      { text: "WHOIS", correct: true },
      { text: "Netstat", correct: false },
      { text: "Traceroute", correct: false },
    ],
  },
  {
    question:
      "What kind of attack is used to manipulate shared physical resources?",
    answers: [
      { text: "Brute force password attack", correct: false },
      { text: "Side-channel attack", correct: true },
      { text: "Phishing", correct: false },
      { text: "DDoS", correct: false },
    ],
  },
  {
    question: "Which hypervisor is used by Amazon EC2?",
    answers: [
      { text: "VMware", correct: false },
      { text: "Xen", correct: true },
      { text: "KVM", correct: false },
      { text: "Hyper-V", correct: false },
    ],
  },
  {
    question: "What does Risk-based Access Control (RAC) allow?",
    answers: [
      { text: "Blocking all unauthorized users", correct: false },
      {
        text: "Access even if exact permissions are not present",
        correct: true,
      },
      { text: "Giving access based only on passwords", correct: false },
      { text: "Encryption of user data at rest", correct: false },
    ],
  },
  {
    question: "What is a challenge in existing RAC systems?",
    answers: [
      { text: "Excessive logging", correct: false },
      { text: "Quantification of operational need", correct: true },
      { text: "UI latency", correct: false },
      { text: "Lack of encryption", correct: false },
    ],
  },
  {
    question: "What is Inter-Domain Role Mapping (IDRM) used for?",
    answers: [
      { text: "Detecting rogue VMs", correct: false },
      { text: "Mapping requested permissions across domains", correct: true },
      { text: "Encrypting database entries", correct: false },
      { text: "Monitoring IP traffic", correct: false },
    ],
  },
  {
    question: "What type of collaboration is harder to secure in the cloud?",
    answers: [
      { text: "Tightly-coupled", correct: false },
      { text: "Loosely-coupled", correct: true },
      { text: "Federated", correct: false },
      { text: "Static", correct: false },
    ],
  },
  {
    question: "What is the goal of the IDRM-availability variant?",
    answers: [
      { text: "Maximize permissions granted", correct: false },
      { text: "Minimize additional permissions added", correct: true },
      { text: "Track user sessions", correct: false },
      { text: "Identify senior roles", correct: false },
    ],
  },
  {
    question: "Which condition detects inheritance conflict?",
    answers: [
      { text: "Conflicting permission present", correct: false },
      { text: "At least one exit role", correct: true },
      { text: "Entry and exit role are unrelated", correct: false },
      { text: "Virtual role exists", correct: false },
    ],
  },
  {
    question: "What does SoD stand for in conflict detection?",
    answers: [
      { text: "Storage on Demand", correct: false },
      { text: "Segregation of Duties", correct: true },
      { text: "Software over Data", correct: false },
      { text: "Standard on Delivery", correct: false },
    ],
  },
  {
    question:
      "What happens in case of no exact role match during conflict removal?",
    answers: [
      { text: "User is denied access permanently", correct: false },
      { text: "System crashes", correct: false },
      { text: "A virtual role is introduced", correct: true },
      { text: "All permissions are removed", correct: false },
    ],
  },
  {
    question:
      "Which of the following is **not** a preventive measure for side-channel attacks?",
    answers: [
      { text: "Cloud cartography", correct: false },
      { text: "Co-residence check", correct: false },
      { text: "Co-location restriction", correct: false },
      { text: "Brute-force key injection", correct: true },
    ],
  },
];
//////////////////////////////////  Cloud Marketplace  //////////////////////////////
const Cloudmarketplace = [
  {
    question: "What is the purpose of CloudCmp in a cloud marketplace?",
    answers: [
      { text: "To provide storage solutions", correct: false },
      { text: "To monitor mobile devices", correct: false },
      { text: "To compare cloud providers based on QoS", correct: true },
      { text: "To manage user billing", correct: false },
    ],
  },
  {
    question: "What kind of decision mechanism does the Migration Decider use?",
    answers: [
      { text: "Linear regression model", correct: false },
      { text: "Fuzzy inference engine", correct: true },
      { text: "Blockchain consensus", correct: false },
      { text: "Greedy algorithm", correct: false },
    ],
  },
  {
    question: "In the Migration Decider, what triggers a migration?",
    answers: [
      { text: "SLA cost goes above threshold", correct: false },
      { text: "Degree of SLA Satisfaction < threshold", correct: true },
      { text: "CPU usage becomes zero", correct: false },
      { text: "Network latency improves", correct: false },
    ],
  },
  {
    question:
      "What distribution is followed by degraded QoS parameters in the IaaS case study?",
    answers: [
      { text: "Uniform", correct: false },
      { text: "Poisson", correct: false },
      { text: "Exponential", correct: false },
      { text: "Gaussian", correct: true },
    ],
  },
  {
    question:
      "Which approach is compared with the fuzzy broker in SaaS Marketplace?",
    answers: [
      { text: "Neural networks", correct: false },
      { text: "Minimum cost crisp broker", correct: true },
      { text: "Random broker", correct: false },
      { text: "Priority-based broker", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT an advantage of Mobile Cloud Computing?",
    answers: [
      { text: "Extended battery life", correct: false },
      { text: "Improved data storage", correct: false },
      { text: "Limited scalability", correct: true },
      { text: "Ease of integration", correct: false },
    ],
  },
  {
    question: "What is the role of the Profiler in MCC?",
    answers: [
      { text: "Monitoring application execution", correct: true },
      { text: "Syncing data with cloud", correct: false },
      { text: "Selecting service providers", correct: false },
      { text: "Managing battery usage", correct: false },
    ],
  },
  {
    question: "What is the main task of the Solver in MCC architecture?",
    answers: [
      { text: "Encrypt data for transfer", correct: false },
      { text: "Choose where parts of app should run", correct: true },
      { text: "Update app code", correct: false },
      { text: "Optimize UI layout", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a key component of MCC?",
    answers: [
      { text: "Profiler", correct: false },
      { text: "Solver", correct: false },
      { text: "Optimizer", correct: true },
      { text: "Synchronizer", correct: false },
    ],
  },
  {
    question: "Which method is used in static partitioning in MCC?",
    answers: [
      { text: "Greedy method", correct: false },
      { text: "Fuzzy logic", correct: false },
      { text: "ILP solver", correct: true },
      { text: "Dynamic profiling", correct: false },
    ],
  },
  {
    question: "Which problem does task partitioning in MCC resemble?",
    answers: [
      { text: "Routing problem", correct: false },
      { text: "Job scheduling problem", correct: true },
      { text: "Graph coloring problem", correct: false },
      { text: "Matrix multiplication", correct: false },
    ],
  },
  {
    question:
      "What kind of execution environment change is considered in dynamic partitioning?",
    answers: [
      { text: "Hardware upgrade", correct: false },
      { text: "Environmental variation", correct: true },
      { text: "Static energy profile", correct: false },
      { text: "Fixed app layout", correct: false },
    ],
  },
  {
    question: "Which challenge does MCC face due to mobile communication?",
    answers: [
      { text: "Overclocking issues", correct: false },
      { text: "Low bandwidth", correct: true },
      { text: "High latency desktops", correct: false },
      { text: "Parallel computing", correct: false },
    ],
  },
  {
    question: "Which of the following is true about offloading in MCC?",
    answers: [
      { text: "It always saves energy", correct: false },
      { text: "It depends on energy and communication cost", correct: true },
      { text: "It is useful for all kinds of apps", correct: false },
      { text: "It eliminates network dependency", correct: false },
    ],
  },
  {
    question: "What is a Cloudlet?",
    answers: [
      { text: "Low-resource mobile device", correct: false },
      {
        text: "Cluster of high-resource servers close to users",
        correct: true,
      },
      { text: "Virtual machine for backup", correct: false },
      { text: "Cloud management software", correct: false },
    ],
  },
  {
    question: "Which of the following is a mobile cloud computing application?",
    answers: [
      { text: "Mobile gaming", correct: true },
      { text: "Cryptocurrency mining", correct: false },
      { text: "Firewall management", correct: false },
      { text: "Database sharding", correct: false },
    ],
  },
  {
    question: "Which factor affects the decision to offload code to the cloud?",
    answers: [
      { text: "Execution history", correct: false },
      { text: "Network latency and energy trade-off", correct: true },
      { text: "User preference", correct: false },
      { text: "App UI theme", correct: false },
    ],
  },
  {
    question: "What metric is used to evaluate MCC performance?",
    answers: [
      { text: "Latency only", correct: false },
      { text: "Battery only", correct: false },
      { text: "Execution time and energy consumption", correct: true },
      { text: "Server load", correct: false },
    ],
  },
  {
    question: "What does MuSIC in MCC handle?",
    answers: [
      { text: "Load balancing", correct: false },
      { text: "User authentication", correct: false },
      { text: "Mobility-aware optimal service allocation", correct: true },
      { text: "Data backup and restore", correct: false },
    ],
  },
  {
    question: "Which modeling framework is used in MuSIC?",
    answers: [
      { text: "Service oriented architecture", correct: false },
      { text: "Graph neural networks", correct: false },
      { text: "Location-time workflow", correct: true },
      { text: "REST API model", correct: false },
    ],
  },
  {
    question: "What causes latency in mobile-cloud communication in MuSIC?",
    answers: [
      { text: "Improper login", correct: false },
      { text: "User movement away from provisioned cloud", correct: true },
      { text: "Device overheating", correct: false },
      { text: "Excessive app permissions", correct: false },
    ],
  },
  {
    question: "Which is a key benefit of code offloading using Cloudlet?",
    answers: [
      { text: "Reduced execution time only", correct: false },
      { text: "Reduced storage usage", correct: false },
      { text: "Reduced energy consumption and latency", correct: true },
      { text: "Faster internet speed", correct: false },
    ],
  },
  {
    question: "What metric does a fuzzy provider selection mechanism use?",
    answers: [
      { text: "CPU time", correct: false },
      { text: "Trust and competence", correct: true },
      { text: "User age", correct: false },
      { text: "Internet provider rating", correct: false },
    ],
  },
  {
    question:
      "Which MCC component ensures the app behaves transparently to the user?",
    answers: [
      { text: "Solver", correct: false },
      { text: "Profiler", correct: false },
      { text: "Synchronizer", correct: true },
      { text: "Monitor", correct: false },
    ],
  },
  {
    question: "Which is NOT a key requirement for MCC platforms?",
    answers: [
      { text: "Web interface", correct: false },
      { text: "Simple APIs", correct: false },
      { text: "Proprietary networking hardware", correct: true },
      { text: "Internet access to remote apps", correct: false },
    ],
  },
  {
    question: "What is the classic problem MCC tries to solve?",
    answers: [
      { text: "Job Scheduling", correct: true },
      { text: "Sorting large datasets", correct: false },
      { text: "Rendering 3D objects", correct: false },
      { text: "Video compression", correct: false },
    ],
  },
  {
    question: "What is evaluated in a case study of dynamic parking?",
    answers: [
      { text: "City traffic flow", correct: false },
      { text: "QoS in private parking", correct: false },
      { text: "Context-aware parking using cloud", correct: true },
      { text: "Energy usage of electric cars", correct: false },
    ],
  },
  {
    question: "What enables context-aware parking services?",
    answers: [
      { text: "AR navigation", correct: false },
      { text: "Cloud and wireless sensor networks", correct: true },
      { text: "Satellite tracking", correct: false },
      { text: "Offline maps", correct: false },
    ],
  },
  {
    question: "Which factor affects offloading energy savings?",
    answers: [
      { text: "Data type", correct: false },
      { text: "Distance to server", correct: false },
      { text: "Ratio D/B compared with C/M", correct: true },
      { text: "Screen resolution", correct: false },
    ],
  },
];
//////////////////////////////////  Mobile CLoud COmputing and Fog Computing  ////////////////////////////
const MCC = [
  {
    question: "What is the main goal of Mobile Cloud Computing (MCC)?",
    answers: [
      { text: "Enhance graphics on mobile devices", correct: false },
      {
        text: "Optimize application execution time and energy consumption",
        correct: true,
      },
      { text: "Increase mobile phone memory capacity", correct: false },
      { text: "Improve camera quality on mobile devices", correct: false },
    ],
  },
  {
    question: "Which of the following is a classic problem in MCC?",
    answers: [
      { text: "Machine Learning Optimization", correct: false },
      { text: "Graph Coloring Problem", correct: false },
      { text: "Task Partitioning Problem", correct: true },
      { text: "Deadlock Avoidance Problem", correct: false },
    ],
  },
  {
    question: "What is the input to the Task Partitioning Problem in MCC?",
    answers: [
      { text: "A data flow diagram", correct: false },
      { text: "A method call graph with energy attributes", correct: true },
      { text: "An image recognition model", correct: false },
      { text: "A UML class diagram", correct: false },
    ],
  },
  {
    question:
      "Which is NOT a constraint typically considered in MCC partitioning?",
    answers: [
      { text: "Battery level", correct: true },
      { text: "Execution time", correct: false },
      { text: "Energy consumption", correct: false },
      { text: "Monetary cost", correct: false },
    ],
  },
  {
    question: "What is static partitioning in MCC?",
    answers: [
      { text: "Partitioning based on user feedback", correct: false },
      { text: "Partitioning at runtime based on environment", correct: false },
      { text: "Partitioning methods during application launch", correct: true },
      { text: "Partitioning using a fixed cloud server", correct: false },
    ],
  },
  {
    question: "Which technique is used for faster static partitioning?",
    answers: [
      { text: "Brute Force", correct: false },
      { text: "Heuristics", correct: true },
      { text: "Neural Networks", correct: false },
      { text: "Greedy Algorithms", correct: false },
    ],
  },
  {
    question:
      "Which architecture helps reduce latency and battery consumption?",
    answers: [
      { text: "Big Data Analytics", correct: false },
      { text: "Cloud-Only Architecture", correct: false },
      { text: "Code Offloading", correct: true },
      { text: "Peer-to-Peer Networking", correct: false },
    ],
  },
  {
    question:
      "Which type of network connection typically consumes less energy?",
    answers: [
      { text: "Broadband wireless", correct: false },
      { text: "Bluetooth", correct: true },
      { text: "Satellite Internet", correct: false },
      { text: "Optical fiber", correct: false },
    ],
  },
  {
    question: "What does Fog Computing aim to reduce?",
    answers: [
      { text: "Device memory usage", correct: false },
      { text: "Sensor count", correct: false },
      { text: "Network bandwidth requirement", correct: true },
      { text: "Number of servers", correct: false },
    ],
  },
  {
    question: "Which company introduced the term 'Fog Computing'?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Google", correct: false },
      { text: "Cisco", correct: true },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "Where does Fog Computing primarily perform data processing?",
    answers: [
      { text: "In centralized cloud data centers", correct: false },
      { text: "On the end-user's device", correct: false },
      { text: "At the edge of the network", correct: true },
      { text: "On IoT gateways only", correct: false },
    ],
  },
  {
    question: "Which of these is a characteristic of cloud computing?",
    answers: [
      { text: "Manual resource allocation", correct: false },
      { text: "Static scalability", correct: false },
      { text: "User-managed infrastructure", correct: false },
      { text: "Dynamic scalability", correct: true },
    ],
  },
  {
    question: "Which of the following is NOT an advantage of Fog Computing?",
    answers: [
      { text: "Low latency", correct: false },
      { text: "Geo-distribution", correct: false },
      { text: "Centralized processing", correct: true },
      { text: "Real-time interaction support", correct: false },
    ],
  },
  {
    question:
      "Which technology allows lightweight virtualization in Fog Computing?",
    answers: [
      { text: "VMware", correct: false },
      { text: "Hyper-V", correct: false },
      { text: "Docker Containers", correct: true },
      { text: "CloudStack", correct: false },
    ],
  },
  {
    question:
      "What is a key enabler for controlling network switches in Fog Computing?",
    answers: [
      { text: "Load Balancing", correct: false },
      { text: "Software Defined Networking (SDN)", correct: true },
      { text: "HTTP Routing", correct: false },
      { text: "Database Sharding", correct: false },
    ],
  },
  {
    question: "Which of these is a major security issue in Fog Computing?",
    answers: [
      { text: "Strong password enforcement", correct: false },
      { text: "Man-in-the-Middle attack", correct: true },
      { text: "File compression", correct: false },
      { text: "Data replication", correct: false },
    ],
  },
  {
    question: "Which of the following is a limitation of cloud-only computing?",
    answers: [
      { text: "High speed", correct: false },
      { text: "Low latency", correct: false },
      { text: "High capacity requirement", correct: true },
      { text: "Low storage need", correct: false },
    ],
  },
  {
    question: "Which application is ideal for Fog Computing deployment?",
    answers: [
      { text: "Web hosting", correct: false },
      { text: "Video streaming", correct: false },
      { text: "Smart traffic lights", correct: true },
      { text: "Offline games", correct: false },
    ],
  },
  {
    question:
      "Which type of partitioning adapts during execution based on environment?",
    answers: [
      { text: "Static Partitioning", correct: false },
      { text: "Random Partitioning", correct: false },
      { text: "Dynamic or Adaptive Partitioning", correct: true },
      { text: "Incremental Partitioning", correct: false },
    ],
  },
  {
    question:
      "In the Connected Vehicle (CV) context, what role does Fog Computing play?",
    answers: [
      { text: "Supports offline navigation", correct: false },
      { text: "Provides low-latency real-time interactions", correct: true },
      { text: "Acts as a car battery controller", correct: false },
      { text: "Disables car-to-car communication", correct: false },
    ],
  },
];
///////////////////////////  Geospatial Information System and Docker  ///////////////////////////
const GIS_Docker = [
  {
    question: "What is a Geographic Information System (GIS)?",
    answers: [
      { text: "A tool used only for navigation", correct: false },
      { text: "A computer system for managing geospatial data", correct: true },
      { text: "A satellite imaging platform", correct: false },
      { text: "A hardware tool for topographic mapping", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a component of a GIS?",
    answers: [
      { text: "Computer hardware", correct: false },
      { text: "Software", correct: false },
      { text: "Geospatial data", correct: false },
      { text: "Machine learning model", correct: true },
    ],
  },
  {
    question: "Which challenge is common in GIS systems?",
    answers: [
      { text: "Low volume of data", correct: false },
      { text: "Computation intensive processes", correct: true },
      { text: "Simple network structures", correct: false },
      { text: "Minimal data management", correct: false },
    ],
  },
  {
    question: "What is the primary reason for heterogeneity in GIS layers?",
    answers: [
      { text: "Same software used across departments", correct: false },
      { text: "Centralized GIS control", correct: false },
      { text: "Different departments using different tools", correct: true },
      { text: "Homogeneous encoding of data", correct: false },
    ],
  },
  {
    question: "Which is NOT a solution to heterogeneity in GIS?",
    answers: [
      { text: "Homogeneous data description", correct: false },
      { text: "Standard data encoding", correct: false },
      { text: "Private database storage", correct: true },
      { text: "Standard mechanisms for sharing data", correct: false },
    ],
  },
  {
    question: "What does Spatial Data Infrastructure (SDI) provide?",
    answers: [
      { text: "Graphic design services", correct: false },
      { text: "Policy formulation and implementation", correct: true },
      { text: "Local database access", correct: false },
      { text: "Satellite data storage", correct: false },
    ],
  },
  {
    question: "Which sector is NOT directly mentioned as a user of SDI?",
    answers: [
      { text: "Government", correct: false },
      { text: "Commercial sector", correct: false },
      { text: "Education/Academia", correct: false },
      { text: "Military", correct: true },
    ],
  },
  {
    question: "Why is there a need for Geospatial Cloud?",
    answers: [
      { text: "To store only images", correct: false },
      { text: "To handle the huge volume of data and metadata", correct: true },
      { text: "To reduce map resolution", correct: false },
      { text: "To avoid service orchestration", correct: false },
    ],
  },
  {
    question: "Who are NOT listed as actors in a Geospatial Cloud?",
    answers: [
      { text: "Customers", correct: false },
      { text: "Security Auditors", correct: false },
      { text: "Brokers", correct: false },
      { text: "Frontend Developers", correct: true },
    ],
  },
  {
    question: "Which is NOT a challenge in geospatial cloud?",
    answers: [
      { text: "Need for multi-tenancy", correct: false },
      { text: "Geographically situated backups", correct: false },
      { text: "Unreliable data usage", correct: true },
      { text: "Policy management among tenants", correct: false },
    ],
  },
  {
    question: "What does data-level interoperability ensure?",
    answers: [
      { text: "Trustworthy exchange of services", correct: false },
      { text: "Ability to consume the data", correct: true },
      { text: "Security of transmitted data", correct: false },
      { text: "Data encryption", correct: false },
    ],
  },
  {
    question: "Which standard body helps implement GIS interoperability?",
    answers: [
      { text: "IEEE", correct: false },
      { text: "W3C", correct: false },
      { text: "OGC", correct: true },
      { text: "NIST", correct: false },
    ],
  },
  {
    question: "What is Docker primarily used for?",
    answers: [
      { text: "Managing relational databases", correct: false },
      { text: "Containerizing applications", correct: true },
      { text: "Developing GIS software", correct: false },
      { text: "Hardware virtualization", correct: false },
    ],
  },
  {
    question: "What does Docker Compose do?",
    answers: [
      { text: "Manages host operating system", correct: false },
      { text: "Defines applications using multiple containers", correct: true },
      { text: "Acts as a virtual machine", correct: false },
      { text: "Builds Docker images automatically", correct: false },
    ],
  },
  {
    question: "What is Docker Hub?",
    answers: [
      { text: "Local container builder", correct: false },
      { text: "Public repository for Docker images", correct: true },
      { text: "A command-line tool for containers", correct: false },
      { text: "OS for running Docker", correct: false },
    ],
  },
  {
    question: "Which platform is Docker NOT officially available for?",
    answers: [
      { text: "Linux", correct: false },
      { text: "Windows", correct: false },
      { text: "Android", correct: true },
      { text: "macOS", correct: false },
    ],
  },
  {
    question: "Which component builds Docker images and runs containers?",
    answers: [
      { text: "Docker Engine", correct: true },
      { text: "Docker Compose", correct: false },
      { text: "Docker Hub", correct: false },
      { text: "Docker Desktop", correct: false },
    ],
  },
  {
    question: "What is a container in Docker?",
    answers: [
      { text: "A graphical interface for Docker", correct: false },
      { text: "A physical environment for running code", correct: false },
      { text: "An isolated environment for executing apps", correct: true },
      { text: "A data backup system", correct: false },
    ],
  },
  {
    question: "Which is true about Docker containers?",
    answers: [
      { text: "They run guest operating systems", correct: false },
      { text: "They are heavier than VMs", correct: false },
      { text: "They start almost instantly", correct: true },
      { text: "They require hypervisors", correct: false },
    ],
  },
  {
    question: "What is a Docker image?",
    answers: [
      { text: "A GUI representation of a container", correct: false },
      {
        text: "A complete package with everything to run an app",
        correct: true,
      },
      { text: "A virtual machine", correct: false },
      { text: "A networking tool", correct: false },
    ],
  },
  {
    question: "How do Docker containers compare with virtual machines?",
    answers: [
      { text: "They use more memory", correct: false },
      { text: "They contain full OS like VMs", correct: false },
      { text: "They are more lightweight and share the kernel", correct: true },
      { text: "They need a hypervisor to run", correct: false },
    ],
  },
  {
    question: "Where does a Docker container run?",
    answers: [
      { text: "Inside a virtual machine", correct: false },
      { text: "As a process on the host OS", correct: true },
      { text: "On a dedicated cloud server only", correct: false },
      { text: "Only on Linux systems", correct: false },
    ],
  },
  {
    question: "Which Docker component is used for image sharing?",
    answers: [
      { text: "Docker Compose", correct: false },
      { text: "Docker CLI", correct: false },
      { text: "Docker Hub", correct: true },
      { text: "Docker Engine", correct: false },
    ],
  },
  {
    question:
      "Which feature of Docker makes it suitable for Agile development?",
    answers: [
      { text: "Heavy OS dependency", correct: false },
      { text: "Instant scalability and portability", correct: true },
      { text: "Monolithic architecture", correct: false },
      { text: "Complex configuration", correct: false },
    ],
  },
  {
    question:
      "Who benefits from Docker by avoiding 'works on my machine' issues?",
    answers: [
      { text: "End users", correct: false },
      { text: "Hardware engineers", correct: false },
      { text: "Developers", correct: true },
      { text: "Project managers", correct: false },
    ],
  },
  {
    question: "Which Docker tool allows apps to run in isolation?",
    answers: [
      { text: "Docker Hub", correct: false },
      { text: "Docker Engine", correct: false },
      { text: "Docker Containers", correct: true },
      { text: "Docker Volume", correct: false },
    ],
  },
  {
    question: "What ensures service-level interoperability in GIS?",
    answers: [
      { text: "Encryption algorithms", correct: false },
      { text: "Ability to consume the data", correct: false },
      { text: "Ability to exchange data", correct: true },
      { text: "Firewall configurations", correct: false },
    ],
  },
  {
    question: "What makes containers more efficient than VMs?",
    answers: [
      { text: "They include the full OS", correct: false },
      { text: "They boot slower", correct: false },
      { text: "They share the host OS kernel", correct: true },
      { text: "They require more RAM", correct: false },
    ],
  },
  {
    question: "How do enterprises use Docker?",
    answers: [
      { text: "To replace cloud services", correct: false },
      { text: "To simplify their physical infrastructure", correct: false },
      {
        text: "To create agile pipelines and faster deployments",
        correct: true,
      },
      { text: "To host databases only", correct: false },
    ],
  },
];
//////////////////////////////   Green and Sensor Cloud Computing  ///////////////////////////
const Green_Sensor_Cloud = [
  {
    question: "What is the main goal of Green Cloud computing?",
    answers: [
      { text: "To improve network latency", correct: false },
      {
        text: "To minimize energy consumption and efficiently utilize infrastructure",
        correct: true,
      },
      { text: "To replace traditional servers", correct: false },
      { text: "To increase data redundancy", correct: false },
    ],
  },
  {
    question:
      "Which component in a typical data center consumes the most energy?",
    answers: [
      { text: "Power Distribution", correct: false },
      { text: "Cooling System", correct: true },
      { text: "IT Equipment", correct: false },
      { text: "Networking Equipment", correct: false },
    ],
  },
  {
    question:
      "What percentage of data center operational expenses is energy expected to account for in the future?",
    answers: [
      { text: "20%", correct: false },
      { text: "30%", correct: false },
      { text: "50%", correct: true },
      { text: "10%", correct: false },
    ],
  },
  {
    question:
      "What is a characteristic of a two-tier data center architecture?",
    answers: [
      { text: "Includes aggregation layer", correct: false },
      { text: "Uses full mesh core network", correct: true },
      { text: "Utilizes 100 GE links", correct: false },
      { text: "Supports over 10,000 servers", correct: false },
    ],
  },
  {
    question: "Which architecture is most widely used in modern data centers?",
    answers: [
      { text: "Two-tier architecture", correct: false },
      { text: "Three-tier architecture", correct: true },
      { text: "Single-layer flat architecture", correct: false },
      { text: "Decentralized architecture", correct: false },
    ],
  },
  {
    question: "What is a feature of the three-tier high-speed architecture?",
    answers: [
      { text: "Uses 1 GE links only", correct: false },
      { text: "Lacks load balancing", correct: false },
      { text: "Utilizes 2-way ECMP and 100 GE standards", correct: true },
      { text: "Has only access and core layers", correct: false },
    ],
  },
  {
    question:
      "Which company builds data centers near the Columbia River for energy efficiency?",
    answers: [
      { text: "Netflix", correct: false },
      { text: "Microsoft", correct: true },
      { text: "Meta", correct: false },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "What is a Green Broker responsible for?",
    answers: [
      { text: "Managing physical sensors", correct: false },
      {
        text: "Carbon-aware scheduling and analyzing user requirements",
        correct: true,
      },
      { text: "Provisioning virtual machines only", correct: false },
      { text: "Providing network access only", correct: false },
    ],
  },
  {
    question:
      "Which layer in a Green Broker calculates the cost and carbon footprint of services?",
    answers: [
      { text: "First Layer", correct: false },
      { text: "Second Layer", correct: true },
      { text: "Third Layer", correct: false },
      { text: "Aggregation Layer", correct: false },
    ],
  },
  {
    question: "What is a major challenge of traditional sensor networks?",
    answers: [
      { text: "Too many users", correct: false },
      { text: "Lack of standard sensors", correct: false },
      {
        text: "Difficult to scale and share data across different users",
        correct: true,
      },
      { text: "Overpowered storage capacity", correct: false },
    ],
  },
  {
    question:
      "Sensor Cloud Computing acts as an interface between which two worlds?",
    answers: [
      { text: "Data and Application", correct: false },
      { text: "Cyber and Physical", correct: true },
      { text: "Software and Hardware", correct: false },
      { text: "Client and Server", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a benefit of Sensor Cloud Computing?",
    answers: [
      {
        text: "Delivers cloud services via sensor-rich devices",
        correct: false,
      },
      { text: "Supports proprietary sensor networks only", correct: true },
      { text: "Enables large-scale data sharing", correct: false },
      { text: "Allows cross-disciplinary applications", correct: false },
    ],
  },
  {
    question:
      "What does the 'One to Many' virtual sensor configuration represent?",
    answers: [
      { text: "Many physical sensors for one virtual sensor", correct: false },
      {
        text: "One virtual sensor controlling many physical ones",
        correct: false,
      },
      {
        text: "One physical sensor shared by multiple virtual sensors",
        correct: true,
      },
      {
        text: "No relation between physical and virtual sensors",
        correct: false,
      },
    ],
  },
  {
    question:
      "In 'One to Many' configuration, how is sensor sampling frequency decided?",
    answers: [
      { text: "By physical sensor alone", correct: false },
      { text: "Fixed at deployment", correct: false },
      { text: "Dynamically computed based on user demands", correct: true },
      { text: "Randomly selected", correct: false },
    ],
  },
  {
    question: "What does 'Many to One' configuration involve?",
    answers: [
      {
        text: "One virtual sensor controls all physical sensors globally",
        correct: false,
      },
      {
        text: "Many physical sensors aggregate data for one virtual sensor",
        correct: true,
      },
      {
        text: "Many virtual sensors for many physical sensors",
        correct: false,
      },
      { text: "One sensor shared across networks", correct: false },
    ],
  },
  {
    question:
      "Which configuration is a hybrid of other two sensor configurations?",
    answers: [
      { text: "One to Many", correct: false },
      { text: "Many to One", correct: false },
      { text: "Many to Many", correct: true },
      { text: "One to One", correct: false },
    ],
  },
  {
    question:
      "What is the primary communication medium in Sensor Cloud Computing?",
    answers: [
      { text: "Bluetooth", correct: false },
      { text: "Ethernet", correct: false },
      { text: "Internet", correct: true },
      { text: "Radio Frequency only", correct: false },
    ],
  },
  {
    question:
      "Which challenge is faced in implementing large-scale sensor networks?",
    answers: [
      { text: "Overpowered CPUs", correct: false },
      { text: "Too many sensors", correct: false },
      { text: "Vendor-specific designs", correct: true },
      { text: "Unlimited storage", correct: false },
    ],
  },
  {
    question:
      "What enables cloud services to be delivered via sensor-rich devices?",
    answers: [
      { text: "Low latency servers", correct: false },
      { text: "Sensor Cloud Infrastructure", correct: true },
      { text: "Containerization only", correct: false },
      { text: "Centralized Storage", correct: false },
    ],
  },
  {
    question:
      "What aspect of Sensor Cloud Computing allows applications to span across organizations?",
    answers: [
      { text: "Local data storage", correct: false },
      { text: "Cross-disciplinary application support", correct: true },
      { text: "Single point access", correct: false },
      { text: "Device locking mechanisms", correct: false },
    ],
  },
];
//////////////////////////////////  Internet of Things and Resource Management  ////////////////////////////////////
const IoT = [
  {
    question:
      "Which of the following are the basic building blocks of IoT architecture?",
    answers: [
      { text: "Devices, Servers, Routers", correct: false },
      { text: "Things, Gateway, Network and Cloud", correct: true },
      { text: "Nodes, Hosts, Clients", correct: false },
      { text: "Cloud, Applications, OS", correct: false },
    ],
  },
  {
    question: "What is a key feature of IoT systems?",
    answers: [
      {
        text: "They require deep understanding of infrastructure",
        correct: false,
      },
      { text: "They work only on-premises", correct: false },
      {
        text: "They enable services without understanding infrastructure",
        correct: true,
      },
      { text: "They rely solely on cloud servers", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a challenge in IoT systems?",
    answers: [
      { text: "Scale", correct: false },
      { text: "Security", correct: false },
      { text: "Design", correct: true },
      { text: "Speed", correct: false },
    ],
  },
  {
    question:
      "Which computing model helps in reducing latency in time-sensitive IoT applications?",
    answers: [
      { text: "Cloud computing", correct: false },
      { text: "Fog and Edge computing", correct: true },
      { text: "Centralized computing", correct: false },
      { text: "Local computing", correct: false },
    ],
  },
  {
    question:
      "In a cloud-fog environment model, what are the three main layers?",
    answers: [
      { text: "Client, Cloud, Network", correct: false },
      { text: "Edge, Fog, Cloud", correct: true },
      { text: "End, Central, Cloud", correct: false },
      { text: "Node, Gateway, Server", correct: false },
    ],
  },
  {
    question: "What is the role of Fog Server Manager?",
    answers: [
      { text: "To manage IoT device batteries", correct: false },
      {
        text: "To manage resources and virtual machines in fog environment",
        correct: true,
      },
      { text: "To design application UI", correct: false },
      { text: "To act as DNS resolver", correct: false },
    ],
  },
  {
    question:
      "Which layer handles the computation when the fog layer lacks resources?",
    answers: [
      { text: "Client layer", correct: false },
      { text: "Edge layer", correct: false },
      { text: "Cloud layer", correct: true },
      { text: "Middleware layer", correct: false },
    ],
  },
  {
    question:
      "Which of the following are infrastructure resources in fog/edge computing?",
    answers: [
      { text: "Programming languages and scripts", correct: false },
      { text: "Storage, network, and computation resources", correct: true },
      { text: "Mobile apps only", correct: false },
      { text: "Power cables and switches", correct: false },
    ],
  },
  {
    question:
      "Which type of devices are used in fog/edge hardware infrastructure?",
    answers: [
      { text: "Supercomputers", correct: false },
      { text: "Only cloud servers", correct: false },
      {
        text: "Small-form-factor devices like WiFi APs and set-top boxes",
        correct: true,
      },
      { text: "Laptops only", correct: false },
    ],
  },
  {
    question: "Which layer in fog architecture typically runs middleware?",
    answers: [
      { text: "Cloud layer", correct: false },
      { text: "Hardware layer", correct: false },
      { text: "Fog/Edge computing devices", correct: true },
      { text: "Client layer", correct: false },
    ],
  },
  {
    question:
      "What does the 'placement' task in resource management aim to achieve?",
    answers: [
      { text: "Schedule events for user devices", correct: false },
      {
        text: "Place computation tasks on suitable fog/edge resources",
        correct: true,
      },
      { text: "Benchmark energy usage", correct: false },
      { text: "Identify the best wireless protocol", correct: false },
    ],
  },
  {
    question: "What is a core benefit of load balancing in edge data centers?",
    answers: [
      { text: "Reduced device cost", correct: false },
      { text: "Efficient task distribution", correct: true },
      { text: "Increased latency", correct: false },
      { text: "Improved battery charging", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a valid application constraint for service placement?",
    answers: [
      { text: "Color format", correct: false },
      { text: "Temperature tolerance", correct: false },
      { text: "Locality requirement", correct: true },
      { text: "Battery voltage", correct: false },
    ],
  },
  {
    question: "What is offloading in the context of fog/edge computing?",
    answers: [
      { text: "Moving fog servers to remote locations", correct: false },
      { text: "Relocating user data centers to the cloud", correct: false },
      { text: "Shifting computation from user/cloud to edge", correct: true },
      { text: "Disabling fog nodes in remote areas", correct: false },
    ],
  },
  {
    question:
      "Which of these is a correct example of offloading from user device to edge?",
    answers: [
      { text: "Sending queries to cloud for AI processing", correct: false },
      { text: "Using a CDN for video delivery", correct: false },
      {
        text: "Using nearby fog nodes to execute mobile app tasks",
        correct: true,
      },
      { text: "Removing local storage completely", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a resource constraint during application placement?",
    answers: [
      { text: "Cloud latency", correct: false },
      { text: "Network congestion", correct: false },
      { text: "Limited CPU, RAM, or bandwidth on nodes", correct: true },
      { text: "GPS signal strength", correct: false },
    ],
  },
  {
    question:
      "Which approach ensures faster response time in IoT applications?",
    answers: [
      { text: "Processing everything in cloud", correct: false },
      { text: "Storing data on USB drives", correct: false },
      { text: "Using fog/edge computing close to data source", correct: true },
      { text: "Compressing images before transmission", correct: false },
    ],
  },
  {
    question:
      "In application placement, what does ‘locality requirement’ mean?",
    answers: [
      {
        text: "Application must run on a specific operating system",
        correct: false,
      },
      {
        text: "Service should be deployed close to its data source",
        correct: true,
      },
      { text: "Only cloud services are allowed", correct: false },
      { text: "Data should be stored globally", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the benchmarking component in edge computing?",
    answers: [
      { text: "To ensure software compatibility", correct: false },
      { text: "To track user behavior", correct: false },
      {
        text: "To measure the performance of hardware and system",
        correct: true,
      },
      { text: "To improve color accuracy", correct: false },
    ],
  },
  {
    question: "Which of these best defines the cloud-fog-edge framework?",
    answers: [
      {
        text: "A distributed computing model involving edge, fog, and centralized cloud layers",
        correct: true,
      },
      {
        text: "Only a replacement for traditional cloud computing",
        correct: false,
      },
      { text: "A storage-only model", correct: false },
      { text: "An IoT sensor layout diagram", correct: false },
    ],
  },
];
//////////////////////////////   Cloud Federation and VM Migration  ///////////////////////////////////////
const Cloud_Federation = [
  {
    question: "What is Cloud Federation?",
    answers: [
      {
        text: "Deployment of a single cloud to support business operations",
        correct: false,
      },
      {
        text: "A private cloud setup for enterprise use",
        correct: false,
      },
      {
        text: "Deployment and management of multiple internal and external cloud services",
        correct: true,
      },
      {
        text: "Establishment of cloud services for personal users only",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is a key motivation for Cloud Federation?",
    answers: [
      { text: "To decrease global utility", correct: false },
      { text: "To minimize interoperability", correct: false },
      { text: "To maximize resource utilization", correct: true },
      { text: "To increase power consumption", correct: false },
    ],
  },
  {
    question: "What is one of the benefits of cloud federation?",
    answers: [
      { text: "Reduces global cloud access", correct: false },
      { text: "Prevents load balancing", correct: false },
      { text: "Enables high availability and resource sharing", correct: true },
      { text: "Promotes single-cloud dependency", correct: false },
    ],
  },
  {
    question: "Cloud Federation is an example of which type of organization?",
    answers: [
      { text: "Intra-cloud", correct: false },
      { text: "Inter-cloud", correct: true },
      { text: "Mono-cloud", correct: false },
      { text: "Micro-cloud", correct: false },
    ],
  },
  {
    question:
      "Which architecture in cloud federation is considered loosely coupled?",
    answers: [
      { text: "Multitier", correct: false },
      { text: "Tightly coupled", correct: false },
      { text: "Hybrid / Cloud Bursting", correct: true },
      { text: "Aggregated", correct: false },
    ],
  },
  {
    question: "What is the key feature of a tightly coupled federation?",
    answers: [
      { text: "Minimal control over remote resources", correct: false },
      { text: "VM placement decisions not allowed", correct: false },
      {
        text: "Advanced features like VM migration and cross-site networking",
        correct: true,
      },
      { text: "Contracts are not required between clouds", correct: false },
    ],
  },
  {
    question: "Which architecture uses a broker for service deployment?",
    answers: [
      { text: "Aggregated", correct: false },
      { text: "Hybrid", correct: false },
      { text: "Broker Architecture", correct: true },
      { text: "Multitier", correct: false },
    ],
  },
  {
    question:
      "In which type of federation are contracts established between CSPs?",
    answers: [
      { text: "Loosely Coupled Federation", correct: false },
      { text: "Tightly Coupled Federation", correct: false },
      { text: "Partially Coupled Federation", correct: true },
      { text: "Single Cloud System", correct: false },
    ],
  },
  {
    question:
      "Which architecture is beneficial for geographically distributed infrastructures?",
    answers: [
      { text: "Broker Architecture", correct: false },
      { text: "Hybrid Cloud", correct: false },
      { text: "Multitier Architecture", correct: true },
      { text: "Loosely Coupled Federation", correct: false },
    ],
  },
  {
    question: "What is VM Migration?",
    answers: [
      { text: "Copying files from one VM to another", correct: false },
      { text: "Upgrading the VM software version", correct: false },
      { text: "Moving a running VM from one host to another", correct: true },
      { text: "Deleting old VMs", correct: false },
    ],
  },
  {
    question: "Which type of VM migration requires shutting down the VM?",
    answers: [
      { text: "Live Migration", correct: false },
      { text: "Cold or Non-Live Migration", correct: true },
      { text: "Dynamic Migration", correct: false },
      { text: "Parallel Migration", correct: false },
    ],
  },
  {
    question: "What is a key advantage of Live VM Migration?",
    answers: [
      { text: "VM is permanently stopped", correct: false },
      { text: "Reduces network bandwidth", correct: false },
      {
        text: "VM continues to provide service during migration",
        correct: true,
      },
      { text: "CPU state is never moved", correct: false },
    ],
  },
  {
    question:
      "Which of the following are the phases of Pre-Copy live migration?",
    answers: [
      { text: "Start, Copy, Finish", correct: false },
      { text: "Pre-copy, Pre-copy Termination, Stop-and-Copy", correct: true },
      { text: "Boot, Migrate, Resume", correct: false },
      { text: "Pause, Transfer, Run", correct: false },
    ],
  },
  {
    question: "What happens during the Stop-and-Copy phase of VM migration?",
    answers: [
      { text: "VM continues running on both hosts", correct: false },
      { text: "Execution of the VM is suspended at the source", correct: true },
      { text: "Memory is never copied", correct: false },
      { text: "VM shuts down permanently", correct: false },
    ],
  },
  {
    question: "In Post-copy migration, what happens first?",
    answers: [
      { text: "All memory is copied", correct: false },
      { text: "Destination VM is shut down", correct: false },
      { text: "Source VM is stopped and CPU state is copied", correct: true },
      { text: "VM memory is copied in multiple rounds", correct: false },
    ],
  },
  {
    question:
      "Which live migration approach may result in accessing memory pages on demand?",
    answers: [
      { text: "Pre-copy", correct: false },
      { text: "Cold migration", correct: false },
      { text: "Post-copy", correct: true },
      { text: "Serial migration", correct: false },
    ],
  },
  {
    question:
      "What is a common goal of both pre-copy and post-copy live migration?",
    answers: [
      { text: "Shut down VMs quickly", correct: false },
      { text: "Avoid dirty memory pages", correct: false },
      { text: "Minimize downtime during migration", correct: true },
      { text: "Use maximum transmission bandwidth", correct: false },
    ],
  },
  {
    question: "Which strategy migrates multiple VMs one after another?",
    answers: [
      { text: "Parallel Migration", correct: false },
      { text: "Hybrid Migration", correct: false },
      { text: "Serial Migration", correct: true },
      { text: "Batch Migration", correct: false },
    ],
  },
  {
    question: "In parallel migration, what happens to transmission bandwidth?",
    answers: [
      { text: "Each VM gets the full bandwidth", correct: false },
      { text: "Bandwidth is divided equally among VMs", correct: true },
      { text: "Only one VM is migrated", correct: false },
      { text: "Bandwidth is ignored", correct: false },
    ],
  },
  {
    question:
      "Which architecture provides the most advanced control over remote resources?",
    answers: [
      { text: "Loosely Coupled", correct: false },
      { text: "Tightly Coupled", correct: true },
      { text: "Hybrid", correct: false },
      { text: "Broker", correct: false },
    ],
  },
  {
    question: "Which is a feature of aggregated federation architecture?",
    answers: [
      { text: "No interoperability", correct: false },
      { text: "Loosely coupled setup", correct: false },
      { text: "Partner clouds aggregate their resources", correct: true },
      { text: "Single-site infrastructure", correct: false },
    ],
  },
  {
    question: "What is the main role of a broker in federation?",
    answers: [
      { text: "Store user data", correct: false },
      { text: "Deploy virtual resources in the selected cloud", correct: true },
      { text: "Replace the CSPs", correct: false },
      { text: "Monitor VM hardware", correct: false },
    ],
  },
  {
    question: "What ensures memory consistency in iterative pre-copy?",
    answers: [
      { text: "Skipping dirty pages", correct: false },
      { text: "Sending dirty pages again in the next round", correct: true },
      { text: "Suspending all VMs", correct: false },
      { text: "Avoiding memory copy", correct: false },
    ],
  },
  {
    question: "What can cause severe degradation in service quality?",
    answers: [
      { text: "Hybrid cloud setup", correct: false },
      { text: "Live migration", correct: false },
      { text: "Non-live migration for real-time applications", correct: true },
      { text: "Cloud federation setup", correct: false },
    ],
  },
  {
    question:
      "In which type of migration is the VM memory empty at the beginning on the destination?",
    answers: [
      { text: "Cold migration", correct: false },
      { text: "Pre-copy", correct: false },
      { text: "Post-copy", correct: true },
      { text: "Serial migration", correct: false },
    ],
  },
];
///////////////////////////  Containers, Dockers and Kubernetes  ////////////////////////////////////////
const Container_Docker_Kubernetes = [
  {
    question: "What is a container in cloud computing?",
    answers: [
      {
        text: "A lightweight virtualization technique that packages application code with dependencies",
        correct: true,
      },
      {
        text: "A type of database used for storing user data",
        correct: false,
      },
      {
        text: "A physical server used for deployment",
        correct: false,
      },
      {
        text: "A tool used to design user interfaces",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which open platform is widely used to develop, ship, and run containers?",
    answers: [
      { text: "Kubernetes", correct: false },
      { text: "VirtualBox", correct: false },
      { text: "Docker", correct: true },
      { text: "VMware", correct: false },
    ],
  },
  {
    question: "What is Kubernetes?",
    answers: [
      {
        text: "An open-source platform for managing containerized applications",
        correct: true,
      },
      {
        text: "A programming language",
        correct: false,
      },
      {
        text: "A cloud storage provider",
        correct: false,
      },
      {
        text: "A virtualization software for desktops",
        correct: false,
      },
    ],
  },
  {
    question: "How do containers virtualize resources?",
    answers: [
      { text: "At the hardware level", correct: false },
      { text: "At the kernel module level", correct: false },
      { text: "At the OS level", correct: true },
      { text: "Through BIOS virtualization", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a benefit of using containers?",
    answers: [
      { text: "Application isolation", correct: false },
      { text: "Workload portability", correct: false },
      { text: "Increased VM overhead", correct: true },
      { text: "Separation of responsibilities", correct: false },
    ],
  },
  {
    question: "Which component of Kubernetes hosts the Pods?",
    answers: [
      { text: "Control Plane", correct: false },
      { text: "Worker Nodes", correct: true },
      { text: "Kubelet", correct: false },
      { text: "Docker Daemon", correct: false },
    ],
  },
  {
    question: "Which of the following virtualizes hardware resources?",
    answers: [
      { text: "Containers", correct: false },
      { text: "Virtual Machines", correct: true },
      { text: "Kubernetes", correct: false },
      { text: "Dockerfiles", correct: false },
    ],
  },
  {
    question: "What command is used to run a Docker container from an image?",
    answers: [
      { text: "docker commit", correct: false },
      { text: "docker build", correct: false },
      { text: "docker run", correct: true },
      { text: "docker tag", correct: false },
    ],
  },
  {
    question: "What does the Docker daemon do?",
    answers: [
      {
        text: "Communicates with the Docker client to build and manage containers",
        correct: true,
      },
      {
        text: "Hosts the Kubernetes dashboard",
        correct: false,
      },
      {
        text: "Acts as the primary interface for DockerHub",
        correct: false,
      },
      {
        text: "Stores persistent user data",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which Kubernetes component manages the cluster and its workload?",
    answers: [
      { text: "Pods", correct: false },
      { text: "Worker Node", correct: false },
      { text: "Control Plane", correct: true },
      { text: "Kube Proxy", correct: false },
    ],
  },
  {
    question: "Why are containers considered lightweight?",
    answers: [
      {
        text: "They do not require an OS per application and share the OS kernel",
        correct: true,
      },
      {
        text: "They include full virtualized hardware",
        correct: false,
      },
      {
        text: "They cannot be used in cloud environments",
        correct: false,
      },
      {
        text: "They require separate hardware",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is a key benefit of using Docker?",
    answers: [
      { text: "Slower provisioning", correct: false },
      { text: "Heavy memory usage", correct: false },
      { text: "Easy and consistent deployments", correct: true },
      { text: "Dependent on specific OS", correct: false },
    ],
  },
  {
    question: "What does 'docker build' do?",
    answers: [
      { text: "Runs a Docker container", correct: false },
      { text: "Commits an image", correct: false },
      { text: "Builds a Docker image from a Dockerfile", correct: true },
      { text: "Tags a Docker image", correct: false },
    ],
  },
  {
    question: "What is a Docker image?",
    answers: [
      {
        text: "A static file that contains code, dependencies, and settings to run an app",
        correct: true,
      },
      {
        text: "A configuration file for Kubernetes",
        correct: false,
      },
      {
        text: "A script to install Docker",
        correct: false,
      },
      {
        text: "A backup of a container's log files",
        correct: false,
      },
    ],
  },
  {
    question: "What is the key difference between VMs and containers?",
    answers: [
      {
        text: "VMs virtualize at the hardware level while containers virtualize at the OS level",
        correct: true,
      },
      {
        text: "Containers need more memory than VMs",
        correct: false,
      },
      {
        text: "VMs are OS-independent",
        correct: false,
      },
      {
        text: "Containers are not portable",
        correct: false,
      },
    ],
  },
  {
    question: "What is the primary unit of deployment in Kubernetes?",
    answers: [
      { text: "Service", correct: false },
      { text: "Pod", correct: true },
      { text: "Node", correct: false },
      { text: "Ingress", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a key advantage of Docker for software prototyping?",
    answers: [
      { text: "Requires full VMs to be provisioned", correct: false },
      {
        text: "Provides quick and isolated sandbox environments",
        correct: true,
      },
      { text: "Only works with Windows", correct: false },
      { text: "Cannot be used offline", correct: false },
    ],
  },
  {
    question: "Which of the following statements is true about containers?",
    answers: [
      {
        text: "They require separate operating systems for each application",
        correct: false,
      },
      {
        text: "They are portable and abstract the app from the underlying system",
        correct: true,
      },
      { text: "They are slower than VMs", correct: false },
      { text: "They need hardware virtualization support", correct: false },
    ],
  },
  {
    question: "Why are Docker builds suitable for continuous delivery?",
    answers: [
      { text: "They are tied to specific machines", correct: false },
      { text: "They are easily reproducible and replicable", correct: true },
      { text: "They are manually deployed", correct: false },
      { text: "They do not support automation", correct: false },
    ],
  },
  {
    question: "What is the role of the private Docker registry?",
    answers: [
      { text: "It stores container logs", correct: false },
      {
        text: "It stores Docker images privately for authorized access",
        correct: true,
      },
      { text: "It provides internet access to containers", correct: false },
      { text: "It monitors CPU usage", correct: false },
    ],
  },
  {
    question: "Which of these is an example of container orchestration?",
    answers: [
      { text: "Docker Engine", correct: false },
      { text: "Kubernetes", correct: true },
      { text: "PostgreSQL", correct: false },
      { text: "Linux Kernel", correct: false },
    ],
  },
  {
    question: "What does 'docker commit' do?",
    answers: [
      { text: "Pushes the image to Docker Hub", correct: false },
      { text: "Commits a container's changes to a new image", correct: true },
      { text: "Runs the container", correct: false },
      { text: "Builds the image from a Dockerfile", correct: false },
    ],
  },
  {
    question: "How does Docker help with debugging?",
    answers: [
      { text: "It eliminates the need for logs", correct: false },
      {
        text: "It provides isolated environments with known properties for easier reproduction",
        correct: true,
      },
      { text: "It runs directly on the host system", correct: false },
      { text: "It removes all error messages", correct: false },
    ],
  },
  {
    question: "Which statement about container deployment is correct?",
    answers: [
      { text: "It offers no application isolation", correct: false },
      {
        text: "Containers share the OS and are portable across platforms",
        correct: true,
      },
      { text: "It uses full hardware virtualization", correct: false },
      { text: "Containers require physical servers only", correct: false },
    ],
  },
  {
    question: "Which Docker command assigns a label to an image?",
    answers: [
      { text: "docker tag", correct: true },
      { text: "docker commit", correct: false },
      { text: "docker run", correct: false },
      { text: "docker push", correct: false },
    ],
  },
  {
    question: "Which resource is NOT virtualized by containers?",
    answers: [
      { text: "CPU", correct: false },
      { text: "Memory", correct: false },
      { text: "Hard disk BIOS", correct: true },
      { text: "Network", correct: false },
    ],
  },
  {
    question:
      "Which of the following does NOT describe traditional deployments?",
    answers: [
      {
        text: "Apps run on physical servers without resource boundaries",
        correct: false,
      },
      { text: "Apps are isolated via VMs", correct: true },
      { text: "Resource allocation issues arise frequently", correct: false },
      { text: "No logical isolation between applications", correct: false },
    ],
  },
  {
    question: "Which of the following features is provided by Kubernetes?",
    answers: [
      { text: "CPU-level virtualization", correct: false },
      {
        text: "Declarative configuration and scaling of containers",
        correct: true,
      },
      { text: "Filesystem management for VMs", correct: false },
      { text: "Dependency management for Node.js", correct: false },
    ],
  },
  {
    question: "What does containerization promote in team environments?",
    answers: [
      { text: "Increased confusion due to many versions", correct: false },
      {
        text: "Separation of responsibilities between devs and ops",
        correct: true,
      },
      { text: "Incompatibility across machines", correct: false },
      { text: "Manual deployment of all services", correct: false },
    ],
  },
];
//////////////////////////////  Docker, Dew and Serverless Computing   //////////////////////////////
const Docker_Dew_Serverless = [
  {
    question:
      "What is the main purpose of using Docker for MySQL and PHPMyAdmin?",
    answers: [
      {
        text: "To install them separately on a standalone machine",
        correct: false,
      },
      {
        text: "To provide a lightweight, portable environment for running services",
        correct: true,
      },
      { text: "To reduce the need for PHP programming", correct: false },
      { text: "To replace MySQL with PostgreSQL", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a benefit of containerization?",
    answers: [
      { text: "Workload portability", correct: false },
      { text: "Heavy use of hardware resources", correct: true },
      { text: "Application isolation", correct: false },
      { text: "Separation of responsibility", correct: false },
    ],
  },
  {
    question: "How are containers different from virtual machines (VMs)?",
    answers: [
      {
        text: "Containers virtualize hardware, while VMs virtualize the OS",
        correct: false,
      },
      { text: "Containers run on separate operating systems", correct: false },
      {
        text: "Containers virtualize at the OS level and are more lightweight",
        correct: true,
      },
      { text: "Containers require more memory than VMs", correct: false },
    ],
  },
  {
    question: "What is Dew Computing primarily designed to reduce?",
    answers: [
      { text: "Dependency on user interaction", correct: false },
      { text: "Dependency on continuous internet connection", correct: true },
      { text: "Storage requirements on cloud", correct: false },
      { text: "Complexity of cloud APIs", correct: false },
    ],
  },
  {
    question: "Which of the following is a typical example of Dew Computing?",
    answers: [
      { text: "YouTube", correct: false },
      { text: "Dropbox", correct: true },
      { text: "Facebook", correct: false },
      { text: "Amazon Web Services", correct: false },
    ],
  },
  {
    question: "What does Dew Computing prioritize in its architecture?",
    answers: [
      { text: "Centralized server processing", correct: false },
      { text: "Virtual machine usage", correct: false },
      {
        text: "User-centric, flexible, and personalized-supported applications",
        correct: true,
      },
      { text: "Heavy reliance on cloud connectivity", correct: false },
    ],
  },
  {
    question:
      "Which of the following best represents the order in the IoT-fog-cloud continuum?",
    answers: [
      { text: "Cloud → Dew → Fog", correct: false },
      { text: "Fog → Dew → Cloud", correct: false },
      { text: "Dew → Fog → Cloud", correct: true },
      { text: "Cloud → Fog → Dew", correct: false },
    ],
  },
  {
    question:
      "Which dew computing application area stores a partial copy of the web on a local device?",
    answers: [
      { text: "Storage in Dew (SiD)", correct: false },
      { text: "Web in Dew (WiD)", correct: true },
      { text: "Platform in Dew (PiD)", correct: false },
      { text: "Infrastructure as Dew (IaD)", correct: false },
    ],
  },
  {
    question:
      "Which feature of dew computing ensures service availability without internet?",
    answers: [
      { text: "Cloud sync", correct: false },
      { text: "Independence", correct: true },
      { text: "Peer-to-peer networking", correct: false },
      { text: "Server replication", correct: false },
    ],
  },
  {
    question: "Which of the following is a challenge in Dew Computing?",
    answers: [
      { text: "Ease of data synchronization", correct: false },
      { text: "Database security", correct: true },
      { text: "Lower cost of implementation", correct: false },
      { text: "Simple architecture", correct: false },
    ],
  },
  {
    question: "What is the main idea behind serverless computing?",
    answers: [
      { text: "Running applications without any backend", correct: false },
      { text: "Using physical servers instead of VMs", correct: false },
      {
        text: "Writing and deploying code without managing infrastructure",
        correct: true,
      },
      { text: "Avoiding cloud providers altogether", correct: false },
    ],
  },
  {
    question:
      "Which of these is NOT a characteristic of Function-as-a-Service (FaaS)?",
    answers: [
      { text: "Functions run constantly in the background", correct: true },
      { text: "Functions are triggered by events", correct: false },
      { text: "Functions run in isolated environments", correct: false },
      { text: "Functions scale automatically based on demand", correct: false },
    ],
  },
  {
    question:
      "In which model do developers outsource backend logic to external services?",
    answers: [
      { text: "Infrastructure-as-a-Service (IaaS)", correct: false },
      { text: "Backend-as-a-Service (BaaS)", correct: true },
      { text: "Software-as-a-Service (SaaS)", correct: false },
      { text: "Function-as-a-Service (FaaS)", correct: false },
    ],
  },
  {
    question: "Which of these is an example of BaaS?",
    answers: [
      { text: "GitHub Actions", correct: false },
      { text: "Google Firebase", correct: true },
      { text: "Amazon Lambda", correct: false },
      { text: "Dropbox", correct: false },
    ],
  },
  {
    question: "What major challenge is associated with serverless computing?",
    answers: [
      { text: "Function-level scaling", correct: false },
      {
        text: "Asynchronous calls and inter-function communication",
        correct: true,
      },
      { text: "Simple function deployment", correct: false },
      { text: "Automated scaling", correct: false },
    ],
  },
  {
    question:
      "Which architecture is best described by 'event-driven, cloud-hosted, and micro-function oriented'?",
    answers: [
      { text: "Server-based architecture", correct: false },
      { text: "Platform-as-a-Service", correct: false },
      { text: "Function-as-a-Service", correct: true },
      { text: "Container orchestration", correct: false },
    ],
  },
  {
    question:
      "Which dew computing model syncs development tools and data to the cloud?",
    answers: [
      { text: "Platform in Dew (PiD)", correct: true },
      { text: "Storage in Dew (SiD)", correct: false },
      { text: "Infrastructure in Dew (IaD)", correct: false },
      { text: "Database in Dew (DBiD)", correct: false },
    ],
  },
  {
    question:
      "Which container-based tool provides a GUI to manage MySQL databases?",
    answers: [
      { text: "Apache Server", correct: false },
      { text: "PostgreSQL", correct: false },
      { text: "PHPMyAdmin", correct: true },
      { text: "Docker Compose", correct: false },
    ],
  },
  {
    question:
      "Which term describes the ability of dew computing to sync local and cloud data?",
    answers: [
      { text: "Replication", correct: false },
      { text: "Isolation", correct: false },
      { text: "Collaboration", correct: true },
      { text: "Redundancy", correct: false },
    ],
  },
  {
    question:
      "Which dew computing model supports services without a permanent cloud connection?",
    answers: [
      { text: "Fog computing", correct: false },
      { text: "Cloud computing", correct: false },
      { text: "Dew computing", correct: true },
      { text: "Edge computing", correct: false },
    ],
  },
];
///////////////////////////////  Serverless Computnig ///////////////////////////////
const Serverless_Computing = [
  {
    question: "What is AWS Lambda?",
    answers: [
      {
        text: "A server-based application management tool",
        correct: false,
      },
      {
        text: "An event-driven serverless computing platform by Amazon",
        correct: true,
      },
      {
        text: "A database engine used in AWS",
        correct: false,
      },
      {
        text: "A virtual server for background tasks",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is true about AWS Lambda?",
    answers: [
      {
        text: "You need to manage infrastructure manually",
        correct: false,
      },
      {
        text: "You pay for the server uptime regardless of usage",
        correct: false,
      },
      {
        text: "It runs code in response to AWS service events",
        correct: true,
      },
      {
        text: "It can only be triggered by manual inputs",
        correct: false,
      },
    ],
  },
  {
    question: "Which language is NOT supported by AWS Lambda?",
    answers: [
      { text: "Java", correct: false },
      { text: "Go", correct: false },
      { text: "Swift", correct: true },
      { text: "C#", correct: false },
    ],
  },
  {
    question: "Which AWS service can trigger an AWS Lambda function?",
    answers: [
      { text: "Amazon S3", correct: true },
      { text: "Amazon Kindle", correct: false },
      { text: "Amazon Prime", correct: false },
      { text: "Amazon Fire", correct: false },
    ],
  },
  {
    question: "What is a Lambda Layer in AWS Lambda?",
    answers: [
      {
        text: "A security layer for API protection",
        correct: false,
      },
      {
        text: "A feature to handle HTTP requests",
        correct: false,
      },
      {
        text: "A distribution mechanism for libraries and dependencies",
        correct: true,
      },
      {
        text: "A separate virtual server for logging",
        correct: false,
      },
    ],
  },
  {
    question: "Which AWS service allows custom logging in Lambda?",
    answers: [
      { text: "Log stream", correct: true },
      { text: "Log writer", correct: false },
      { text: "StreamLog", correct: false },
      { text: "AWS Logger", correct: false },
    ],
  },
  {
    question: "Which cloud provider offers Cloud Functions?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Google Cloud", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Oracle", correct: false },
    ],
  },
  {
    question:
      "What is the primary trigger mechanism for Google Cloud Functions?",
    answers: [
      { text: "Command Line Interface", correct: false },
      { text: "Google Play Events", correct: false },
      { text: "Cloud Infrastructure Events", correct: true },
      { text: "Google Maps", correct: false },
    ],
  },
  {
    question:
      "Which of these is NOT an event provider for Google Cloud Functions?",
    answers: [
      { text: "Cloud Pub/Sub", correct: false },
      { text: "Firebase", correct: false },
      { text: "Google Compute Engine", correct: false },
      { text: "Amazon S3", correct: true },
    ],
  },
  {
    question: "What best describes a 'Trigger' in Google Cloud Functions?",
    answers: [
      { text: "The programming language used in the function", correct: false },
      {
        text: "An event and its associated data causing function execution",
        correct: true,
      },
      {
        text: "The error message returned from a failed function",
        correct: false,
      },
      { text: "A signal to start a Google Virtual Machine", correct: false },
    ],
  },
  {
    question: "Which model does Google Cloud Functions follow?",
    answers: [
      { text: "Stateful execution", correct: false },
      { text: "Persistent instance hosting", correct: false },
      { text: "Stateless execution", correct: true },
      { text: "Synchronous only functions", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a key characteristic of Google Cloud Functions?",
    answers: [
      { text: "Supports running containers directly", correct: false },
      {
        text: "Executes code in a fully managed environment",
        correct: true,
      },
      { text: "Requires manual server provisioning", correct: false },
      { text: "Can run on on-premises infrastructure", correct: false },
    ],
  },
  {
    question:
      "Azure Functions use which configuration file to manage settings?",
    answers: [
      { text: "settings.json", correct: false },
      { text: "function.config", correct: false },
      { text: "function.json", correct: true },
      { text: "azure.conf", correct: false },
    ],
  },
  {
    question: "Which is NOT a language supported by Azure Functions?",
    answers: [
      { text: "PowerShell", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Ruby", correct: true },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "What are the pricing models available in Azure Functions?",
    answers: [
      { text: "Subscription only", correct: false },
      {
        text: "Consumption, Premium, and App Service plans",
        correct: true,
      },
      { text: "Hourly Billing only", correct: false },
      { text: "Trial mode and Enterprise mode", correct: false },
    ],
  },
  {
    question: "Which is NOT a use case of Azure Functions?",
    answers: [
      { text: "Building serverless APIs", correct: false },
      { text: "Streaming IoT data", correct: false },
      { text: "Operating system virtualization", correct: true },
      { text: "Big data and machine learning pipelines", correct: false },
    ],
  },
  {
    question: "What is the main advantage of Azure Functions?",
    answers: [
      { text: "Manual server configuration", correct: false },
      { text: "Complete control over networking stack", correct: false },
      { text: "Focus on logic; rest is managed by Azure", correct: true },
      { text: "Provision dedicated VMs", correct: false },
    ],
  },
  {
    question: "What type of tasks is AWS Lambda best suited for?",
    answers: [
      { text: "Long-running batch jobs", correct: false },
      { text: "Front-end development", correct: false },
      { text: "Event-based background tasks", correct: true },
      { text: "Virtual machine deployment", correct: false },
    ],
  },
  {
    question:
      "Which of the following services can directly invoke a Google Cloud Function?",
    answers: [
      { text: "Cloud Storage", correct: true },
      { text: "Google Maps", correct: false },
      { text: "Google Chrome", correct: false },
      { text: "Amazon RDS", correct: false },
    ],
  },
  {
    question: "Which cloud platform offers serverless computing?",
    answers: [
      { text: "Amazon AWS", correct: false },
      { text: "Microsoft Azure", correct: false },
      { text: "Google Cloud", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
];
//////////////////////////////  Sustainable Cloud Computing and 5G Network  /////////////////////////////////
const Sustainable_Cloud_Computing_and_5G = [
  {
    question: "What is the primary focus of sustainable cloud computing?",
    answers: [
      { text: "Maximizing profit of cloud service providers", correct: false },
      { text: "Minimizing data transfer times", correct: false },
      {
        text: "Minimizing energy consumption and carbon footprints",
        correct: true,
      },
      { text: "Improving user interface design", correct: false },
    ],
  },
  {
    question: "Which cloud layer includes Software as a Service (SaaS)?",
    answers: [
      { text: "Cooling Manager", correct: false },
      { text: "Cloud Architecture", correct: true },
      { text: "Virtualization Layer", correct: false },
      { text: "Application Model", correct: false },
    ],
  },
  {
    question:
      "Which of the following contributes the most to energy consumption in a cloud datacenter?",
    answers: [
      { text: "Storage", correct: false },
      { text: "Network", correct: false },
      { text: "Processor", correct: true },
      { text: "Cooling", correct: false },
    ],
  },
  {
    question:
      "Thermal-aware scheduling aims to minimize which of the following?",
    answers: [
      { text: "Data loss", correct: false },
      { text: "Heat transfer efficiency", correct: false },
      { text: "Hotspots and thermal gradients", correct: true },
      { text: "Service pricing", correct: false },
    ],
  },
  {
    question:
      "What is a key challenge of using renewable energy in cloud datacenters?",
    answers: [
      { text: "Low bandwidth", correct: false },
      { text: "Unpredictability and high capital cost", correct: true },
      { text: "Low user demand", correct: false },
      { text: "Slow migration techniques", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a goal of reliability in cloud services?",
    answers: [
      { text: "Secure VM migration", correct: false },
      { text: "Maximizing service delay", correct: true },
      { text: "Point-to-point encrypted communication", correct: false },
      { text: "Reducing SLA violations", correct: false },
    ],
  },
  {
    question:
      "What is the expected energy consumption of Cloud Data Centers by 2030?",
    answers: [
      { text: "500 TWh", correct: false },
      { text: "1200 TWh", correct: false },
      { text: "8000 TWh", correct: true },
      { text: "10000 TWh", correct: false },
    ],
  },
  {
    question: "What does DVFS stand for in cloud computing?",
    answers: [
      { text: "Data Visualization and Frequency Scaling", correct: false },
      { text: "Dynamic Voltage and Frequency Scaling", correct: true },
      { text: "Distributed Virtual File System", correct: false },
      { text: "Digital Voltage Fallback Simulation", correct: false },
    ],
  },
  {
    question:
      "Which technology enables workload migration across geographically distributed datacenters?",
    answers: [
      { text: "Heat mapping", correct: false },
      { text: "Data compression", correct: false },
      { text: "Virtual Machine (VM) technology", correct: true },
      { text: "Packet switching", correct: false },
    ],
  },
  {
    question:
      "Which scheduling mechanism in thermal-aware scheduling is based on prediction?",
    answers: [
      { text: "Proactive", correct: true },
      { text: "Reactive", correct: false },
      { text: "Hybrid", correct: false },
      { text: "Dynamic", correct: false },
    ],
  },
  {
    question: "What does PUE stand for in cloud datacenters?",
    answers: [
      { text: "Power Utilization Efficiency", correct: false },
      { text: "Power Usage Effectiveness", correct: true },
      { text: "Performance Under Energy", correct: false },
      { text: "Power Unit Efficiency", correct: false },
    ],
  },
  {
    question:
      "What is one implication of frequently turning servers on and off?",
    answers: [
      { text: "Improved processing speed", correct: false },
      { text: "Increased reliability", correct: false },
      { text: "Decreased reliability of server components", correct: true },
      { text: "Better energy saving", correct: false },
    ],
  },
  {
    question:
      "Which model focuses on analyzing and merging applications to improve resource utilization?",
    answers: [
      { text: "Cooling Manager", correct: false },
      { text: "Application Model", correct: false },
      { text: "Capacity Planning", correct: true },
      { text: "Reliability Manager", correct: false },
    ],
  },
  {
    question:
      "Waste heat in cloud datacenters can be reused through which technique?",
    answers: [
      { text: "Air cooling", correct: false },
      { text: "Liquid nitrogen cooling", correct: false },
      { text: "Vapor-absorption based cooling", correct: true },
      { text: "Electro-thermal recycling", correct: false },
    ],
  },
  {
    question: "Which generation introduced mobile broadband?",
    answers: [
      { text: "1G", correct: false },
      { text: "2G", correct: false },
      { text: "3G", correct: false },
      { text: "4G LTE", correct: true },
    ],
  },
  {
    question: "What does eMBB stand for in the context of 5G?",
    answers: [
      { text: "Enhanced Multimedia Broadcasting", correct: false },
      { text: "Enhanced Mobile Broadband", correct: true },
      { text: "Efficient Mobile Bitrate Balancing", correct: false },
      { text: "Embedded Mobile Buffer Bandwidth", correct: false },
    ],
  },
  {
    question:
      "Which 5G feature is targeted for applications like autonomous vehicles and telehealth?",
    answers: [
      { text: "mMTC", correct: false },
      { text: "URLLC", correct: true },
      { text: "eMBB", correct: false },
      { text: "LTE-A", correct: false },
    ],
  },
  {
    question: "What is the main benefit of edge computing in 5G networks?",
    answers: [
      { text: "Increased cost", correct: false },
      { text: "Higher latency", correct: false },
      { text: "Bringing cloud capabilities closer to users", correct: true },
      { text: "Reducing mobile data", correct: false },
    ],
  },
  {
    question:
      "Which of the following applications benefits most from edge computing in 5G?",
    answers: [
      { text: "Cloud backup", correct: false },
      { text: "Augmented Reality", correct: true },
      { text: "Simple text messaging", correct: false },
      { text: "Spreadsheet editing", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT an application of edge computing in 5G?",
    answers: [
      { text: "Emergency response systems", correct: false },
      { text: "Smart cities", correct: false },
      { text: "Manual fax machines", correct: true },
      { text: "Factories of the future", correct: false },
    ],
  },
];
///////////////////////////////  Cyber Physical System  //////////////////////////////////////
const Cyber_Physical_Systems = [
  {
    question: "What does a Cyber-Physical System (CPS) primarily involve?",
    answers: [
      {
        text: "Integration of electrical and chemical processes",
        correct: false,
      },
      {
        text: "Integration of computation with physical processes",
        correct: true,
      },
      { text: "Purely software-based systems", correct: false },
      { text: "Only mechanical systems with sensors", correct: false },
    ],
  },
  {
    question: "Who coined the term 'Cyber-Physical Systems'?",
    answers: [
      { text: "Mark Zuckerberg", correct: false },
      { text: "Elon Musk", correct: false },
      { text: "Helen Gill", correct: true },
      { text: "Tim Berners-Lee", correct: false },
    ],
  },
  {
    question: "In CPS, feedback loops are used for:",
    answers: [
      { text: "Separating cyber and physical domains", correct: false },
      { text: "Monitoring temperature only", correct: false },
      {
        text: "Physical processes affecting computations and vice versa",
        correct: true,
      },
      { text: "Uploading data to the cloud", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a typical application of CPS?",
    answers: [
      { text: "Medical monitoring systems", correct: false },
      { text: "Autonomous automobile systems", correct: false },
      { text: "Text message broadcasting", correct: true },
      { text: "Smart grid", correct: false },
    ],
  },
  {
    question: "CPS combines engineering models from which disciplines?",
    answers: [
      { text: "Only mechanical and civil engineering", correct: false },
      { text: "Only computer science", correct: false },
      { text: "All engineering fields with computer science", correct: true },
      { text: "Only biomedical engineering", correct: false },
    ],
  },
  {
    question: "Which one of these is a feature of CPS?",
    answers: [
      { text: "Operates only on a fixed scale", correct: false },
      { text: "Exhibits multiple behavioral modalities", correct: true },
      { text: "Does not depend on context", correct: false },
      { text: "Only functions in isolation", correct: false },
    ],
  },
  {
    question: "Which of the following does CPS architecture *not* involve?",
    answers: [
      { text: "Cybernetics", correct: false },
      { text: "Mechatronics", correct: false },
      { text: "Design and process science", correct: false },
      { text: "Purely traditional mechanics", correct: true },
    ],
  },
  {
    question: "What role does cloud computing play in CPS?",
    answers: [
      { text: "Acts as a standalone computing model", correct: false },
      {
        text: "Provides a flexible platform for realizing CPS goals",
        correct: true,
      },
      { text: "Disables interaction between components", correct: false },
      { text: "Limits scalability", correct: false },
    ],
  },
  {
    question: "What does CPCC stand for?",
    answers: [
      { text: "Cyber Physical Core Control", correct: false },
      { text: "Cyber Physical Cloud Computing", correct: true },
      { text: "Central Power Control Circuit", correct: false },
      { text: "Cloud Performance Computing Center", correct: false },
    ],
  },
  {
    question: "Which is NOT a benefit of CPCC?",
    answers: [
      { text: "Modular composition", correct: false },
      { text: "Efficient use of resources", correct: false },
      { text: "Increased latency", correct: true },
      { text: "Rapid development", correct: false },
    ],
  },
  {
    question: "Which of the following best defines Spatial Data?",
    answers: [
      { text: "Text-based data stored in databases", correct: false },
      {
        text: "Data with a geographical or location-based context",
        correct: true,
      },
      { text: "Financial transactional data", correct: false },
      { text: "Audio-visual data from sensors", correct: false },
    ],
  },
  {
    question: "Which of these is a feature of Spatial Cloud Computing?",
    answers: [
      { text: "Does not support spatiotemporal data", correct: false },
      { text: "Supports shared resource pooling", correct: true },
      { text: "Provides only static data analytics", correct: false },
      { text: "Works only on private clouds", correct: false },
    ],
  },
  {
    question:
      "Which service helps with indexing trajectory data in Traj-Cloud?",
    answers: [
      { text: "Trajectory Map-Matching Service", correct: false },
      { text: "Trajectory Indexing Service", correct: true },
      { text: "Trajectory Recovery Service", correct: false },
      { text: "Trajectory Visualization Module", correct: false },
    ],
  },
  {
    question:
      "Which component is used for trajectory query service in Traj-Cloud?",
    answers: [
      { text: "Cloud Storage", correct: false },
      { text: "Google Compute Engine and Cloud SQL", correct: true },
      { text: "Firebase Database", correct: false },
      { text: "Google Drive API", correct: false },
    ],
  },
  {
    question: "In mobility trace analysis, what is the main challenge?",
    answers: [
      { text: "Data collection from roads", correct: false },
      { text: "Providing location-aware services", correct: true },
      { text: "Maintaining database backups", correct: false },
      { text: "Extracting audio files", correct: false },
    ],
  },
  {
    question: "Which simulator is used to test fog models in IoHT?",
    answers: [
      { text: "FogSim++", correct: false },
      { text: "FogTest", correct: false },
      { text: "iFogSim", correct: true },
      { text: "EdgeSim", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of Fog-Edge Computing in IoHT?",
    answers: [
      { text: "Increase cloud load", correct: false },
      { text: "Reduce latency and network usage", correct: true },
      { text: "Add more servers to cloud", correct: false },
      { text: "Improve display quality of health devices", correct: false },
    ],
  },
  {
    question: "Which GCP component is used for map-matching in Traj-Cloud?",
    answers: [
      { text: "Cloud SQL", correct: false },
      { text: "Firebase", correct: false },
      { text: "Google Compute Engine", correct: true },
      { text: "Cloud Functions", correct: false },
    ],
  },
  {
    question:
      "What is the key aspect of intelligent transportation systems (ITS)?",
    answers: [
      { text: "Installing more GPS devices", correct: false },
      { text: "Efficient mobility analytics", correct: true },
      { text: "Monitoring road cameras", correct: false },
      { text: "Using drones", correct: false },
    ],
  },
  {
    question:
      "Which of the following describes Dew Computing in the context of IoHT?",
    answers: [
      { text: "A cooling technology for cloud servers", correct: false },
      { text: "Computing on water-purification systems", correct: false },
      {
        text: "Computing at a very localized level like wearables",
        correct: true,
      },
      { text: "Backup servers for cloud outages", correct: false },
    ],
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementsByClassName("progress-bar")[0];
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let Questions = [];
let n = 0;
let incrementValue = 0;
let count = 0;
let accuracy = 0;
let imgUrl;
var img = document.createElement("img");

let timer;
let timeLeft = 300; // 5 minutes in seconds

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ee1").addEventListener("change", function () {
    selectedValue = this.value;

    if (selectedValue === "HTML") {
      Questions = HTML;
    } else if (selectedValue === "GridComputing") {
      Questions = GridComputing;
    } else if (selectedValue === "DistributedComputing") {
      Questions = DistributedComputing;
    } else if (selectedValue === "Cluster_Utility_Computing") {
      Questions = Cluster_Utility_Computing;
    } else if (selectedValue === "Cloud_Computing") {
      Questions = Cloud_Computing;
    } else if (selectedValue === "Evolution_Of_Cloud_Computing") {
      Questions = Evolution_Of_Cloud_Computing;
    } else if (selectedValue === "Cloud_Computing_Architecture") {
      Questions = Cloud_Computing_Architecture;
    } else if (selectedValue === "Architecture_Deploy_Modals") {
      Questions = Architecture_Deploy_Modals;
    } else if (selectedValue === "Virtualization") {
      Questions = Virtualization;
    } else if (selectedValue === "Virtualization2") {
      Questions = Virtualization2;
    } else if (selectedValue === "XML") {
      Questions = XML;
    } else if (selectedValue === "Web_Service") {
      Questions = Web_Service;
    } else if (selectedValue === "SLA_Economics") {
      Questions = SLA_Economics;
    } else if (selectedValue === "ManagingData") {
      Questions = ManagingData;
    } else if (selectedValue === "OpenStack") {
      Questions = OpenStack;
    } else if (selectedValue === "ResourceManagement2") {
      Questions = ResourceManagement2;
    } else if (selectedValue === "Cloud_Security") {
      Questions = Cloud_Security;
    } else if (selectedValue === "Cloudmarketplace") {
      Questions = Cloudmarketplace;
    } else if (selectedValue === "MCC") {
      Questions = MCC;
    } else if (selectedValue === "GIS_Docker") {
      Questions = GIS_Docker;
    } else if (selectedValue === "Green_Sensor_Cloud") {
      Questions = Green_Sensor_Cloud;
    } else if (selectedValue === "Cloud_Federation") {
      Questions = Cloud_Federation;
    } else if (selectedValue === "Container_Docker_Kubernetes") {
      Questions = Container_Docker_Kubernetes;
    } else if (selectedValue === "Docker_Dew_Serverless") {
      Questions = Docker_Dew_Serverless;
    } else if (selectedValue === "Serverless_Computing") {
      Questions = Serverless_Computing;
    } else if (selectedValue === "Sustainable_Cloud_Computing_and_5G") {
      Questions = Sustainable_Cloud_Computing_and_5G;
    } else if (selectedValue === "Cyber_Physical_Systems") {
      Questions = Cyber_Physical_Systems;
    } else if (selectedValue === "Signal_and_System") {
      Questions = Signal_and - System;
    } else if (selectedValue === "Digital_ELectronics") {
      Questions = Digital_Electronics;
    } else if (selectedValue === "Microprocessor_and_Microcontroller") {
      Questions = Microprocessor_and_Microcontroller;
    } else if (selectedValue === "Arduino") {
      Questions = Arduino;
    } else if (selectedValue === "Sensors") {
      Questions = Sensors;
    } else if (selectedValue === "VLSI") {
      Questions = VLSI;
    } else if (selectedValue === "Power_Electronics") {
      Questions = Power_Electronics;
    } else if (selectedValue === "Control_System") {
      Questions = Control_System;
    } else if (selectedValue === "Circuit_Thoery") {
      Questions = Circuit_Thoery;
    } else if (selectedValue === "Angular") {
      Questions = Angular;
    } else if (selectedValue === "MaterialUI") {
      Questions = MaterialUI;
    } else if (selectedValue === "PHP") {
      Questions = PHP;
    } else if (selectedValue === "Analog_Electronics") {
      Questions = Analog_Electronics;
    } else if (selectedValue === "Embedded_System") {
      Questions = Embedded_Systems;
    } else if (selectedValue === "Communication_System") {
      Questions = Communication_Systems;
    } else if (selectedValue === "Microwave_Engineering") {
      Questions = Microwave_Engineering;
    } else if (selectedValue === "Wireless_Communications") {
      Questions = Wireless_Communications;
    } else if (selectedValue === "Optical_Communications") {
      Questions = Optical_Communication;
    } else if (selectedValue === "Mobile_Communications") {
      Questions = Mobile_Communication;
    } else if (selectedValue === "Satellite_Communications") {
      Questions = Satellite_Communication;
    } else if (selectedValue === "Radar_and_Nevigation") {
      Questions = Radar_and_Navigation;
    } else if (selectedValue === "Fluid_Mechanics") {
      Questions = Fluid_Mechanics;
    } else if (selectedValue === "Surveying") {
      Questions = Surveying;
    } else if (selectedValue === "Building_Material") {
      Questions = Building_Materials;
    } else if (selectedValue === "Structural_Analysis1") {
      Questions = Structural_Analysis1;
    } else if (selectedValue === "Concrete_Technology") {
      Questions = Concrete_Technology;
    } else if (selectedValue === "Soil_Mechanics") {
      Questions = Soil_Mechanics;
    } else if (selectedValue === "Irrigation_Engineering") {
      Questions = Irrigation_Engineering;
    }

    if (Questions.length > 0) {
      n = Questions.length;
      incrementValue = 100 / n;
      console.log(`Number of questions for ${selectedValue}: ${n}`);
      progressBar.style.setProperty("--width", 0);
      startQuiz();
      resetTimer();
    } else {
      console.log(`No questions found for ${selectedValue}`);
    }
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  count = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  resetTimer();
}

function showQuestion() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    count++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  accuracy = (count / n) * 100;
  if (accuracy <= 30) {
    imgUrl = "./public/SAD.png";
  }
  if (accuracy > 30 && accuracy <= 70) {
    imgUrl = "./public/moderate.png";
  }
  if (accuracy > 70) {
    imgUrl = "./public/happy.png";
  }
  img.src = imgUrl;
  img.alt = "Description of the image";
  img.style.width = "120px";
  img.style.height = "auto";
  img.style.alignItems = "center";

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your accuracy: ${accuracy}%<br>Total Score: ${score} out of ${n}!`;
  questionElement.appendChild(img);
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  clearInterval(timer);
}

function handleNextButton() {
  currentQuestionIndex++;

  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
  progressBar.style.setProperty("--width", width + incrementValue);

  if (currentQuestionIndex < n) {
    showQuestion();
    //resetTimer();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < n) {
    handleNextButton();
  } else {
    startQuiz();
    progressBar.style.setProperty("--width", 0);
  }
  //resetTimer();
});
function resetTimer() {
  clearInterval(timer);
  timeLeft = 0;
  updateTimerDisplay();
  startTimer();
  document.getElementById("toggle-icon").className = "fas fa-pause";
}
let timerInterval = null;
let isRunning = false;
timeLeft = 0;
timerElement = document.getElementById("timer");

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.innerHTML = `Time: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    timeLeft++;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
    document.getElementById("toggle-icon").className = "fas fa-play";
  } else {
    startTimer();
    document.getElementById("toggle-icon").className = "fas fa-pause";
  }
  isRunning = !isRunning;
}

updateTimerDisplay(); // initialize display if needed
// // Create the popup container dynamically
// const popupHTML = `
//   <div id="popup" style="
//     display: none;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 80%;
//     height: 80%;
//     background-color: #fff;
//     box-shadow: 0 0 10px rgba(0,0,0,0.25);
//     border-radius: 10px;
//     z-index: 1000;
//   ">
//     <div style="
//       display: flex;
//       justify-content: flex-end;
//       background-color: #f2f2f2;
//       padding: 10px;
//       border-bottom: 1px solid #ddd;
//     ">
//       <button onclick="closePopup()" style="
//         background: #ff4d4d;
//         color: white;
//         border: none;
//         padding: 6px 12px;
//         border-radius: 4px;
//         cursor: pointer;
//       ">Close</button>
//     </div>
//     <iframe id="noteFrame" src="" style="width: 100%; height: calc(100% - 50px); border: none;"></iframe>
//   </div>
// `;
// document.body.insertAdjacentHTML("beforeend", popupHTML);

// // Handle button click
// document.getElementById("viewNoteBtn").addEventListener("click", function () {
//   const selectedTopic = document.getElementById("ee1").value;

//   if (!selectedTopic) {
//     alert("Please select a topic first.");
//     return;
//   }

//   const pdfMap = {
//     DistributedComputing: "pdfs/DistributedComputing.pdf",
//     GridComputing: "pdfs/GridComputing.pdf",
//     Cluster_Utility_Computing: "pdfs/Cluster_Utility_Computing.pdf",
//     Cloud_Computing: "pdfs/Cloud_Computing.pdf",
//     Evolution_Of_Cloud_Computing: "pdfs/Evolution_Of_Cloud_Computing.pdf",
//   };

//   const pdfUrl = pdfMap[selectedTopic] || "";

//   document.getElementById("noteFrame").src = pdfUrl;
//   document.getElementById("popup").style.display = "block";
// });

// function closePopup() {
//   document.getElementById("popup").style.display = "none";
//   document.getElementById("noteFrame").src = "";
// }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLOvx8NxsfkPNVOIqbxGUh_-JYSkjLJik",
  authDomain: "quiz1-5ec75.firebaseapp.com",
  projectId: "quiz1-5ec75",
  storageBucket: "quiz1-5ec75.firebasestorage.app",
  messagingSenderId: "247573804561",
  appId: "1:247573804561:web:cc4baf66cc78ef5514e3b0",
  measurementId: "G-JRMJBKLECE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
