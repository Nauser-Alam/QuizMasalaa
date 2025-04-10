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

///////////////////////////////////////////////  BOOTSTRAP  ///////////////////////////////////////////////////////////////
const Bootstrap = [
  {
    question: "What is Bootstrap?",
    answers: [
      { text: "A JavaScript library", correct: false },
      { text: "A CSS framework", correct: true },
      { text: "A programming language", correct: false },
      { text: "A text editor", correct: false },
    ],
  },

  {
    question: "Who developed Bootstrap?",
    answers: [
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Twitter", correct: true },
      { text: "Facebook", correct: false },
    ],
  },

  {
    question: "Which class provides a responsive fixed width container?",
    answers: [
      { text: ".container", correct: true },
      { text: ".container-fluid", correct: false },
      { text: ".container-fixed", correct: false },
      { text: ".fixed-container", correct: false },
    ],
  },

  {
    question: "How do you create a button with Bootstrap?",
    answers: [
      { text: '<button class="btn btn-default">', correct: true },
      { text: '<button class="button default">', correct: false },
      { text: '<button class="btn-default">', correct: false },
      { text: '<button class="btn default">', correct: false },
    ],
  },

  {
    question:
      "Which class is used to create a basic navigation bar in Bootstrap?",
    answers: [
      { text: "navbar-basic", correct: false },
      { text: "navbar", correct: false },
      { text: "navbar-default", correct: true },
      { text: "navbar-basic-default", correct: false },
    ],
  },

  {
    question: "What does the .img-responsive class do?",
    answers: [
      { text: "Makes the image circular", correct: false },
      { text: "Adds a border to the image", correct: false },
      {
        text: "Makes the image scale appropriately across devices",
        correct: true,
      },
      { text: "Adds a shadow to the image", correct: false },
    ],
  },

  {
    question: "Which class adds a white text color to an element?",
    answers: [
      { text: ".text-white", correct: true },
      { text: ".text-light", correct: false },
      { text: ".text-bright", correct: false },
      { text: ".text-color-white", correct: false },
    ],
  },

  {
    question: "How do you create a Bootstrap card?",
    answers: [
      { text: '<div class="card">', correct: true },
      { text: '<div class="card-bootstrap">', correct: false },
      { text: '<div class="bootstrap-card">', correct: false },
      { text: '<div class="card-default">', correct: false },
    ],
  },

  {
    question: "Which class is used to create a badge in Bootstrap?",
    answers: [
      { text: "badge", correct: false },
      { text: "label", correct: false },
      { text: "badge-label", correct: false },
      { text: "badge-primary", correct: true },
    ],
  },

  {
    question: "How do you make a table responsive in Bootstrap?",
    answers: [
      { text: "table-responsive", correct: true },
      { text: "table-responsive-table", correct: false },
      { text: "responsive-table", correct: false },
      { text: "table-table-responsive", correct: false },
    ],
  },

  {
    question: "Which Bootstrap class is used to set the text color?",
    answers: [
      { text: "text-color", correct: false },
      { text: "color-text", correct: false },
      { text: "text", correct: false },
      { text: "text-primary", correct: true },
    ],
  },

  {
    question:
      "Which class would you use to make a form horizontally aligned in Bootstrap?",
    answers: [
      { text: "form-horizontal", correct: true },
      { text: "form-align-horizontal", correct: false },
      { text: "form-inline", correct: false },
      { text: "form-layout-horizontal", correct: false },
    ],
  },

  {
    question: "How do you create a rounded image in Bootstrap?",
    answers: [
      { text: ".img-rounded", correct: true },
      { text: ".img-circle", correct: false },
      { text: ".img-round", correct: false },
      { text: ".img-oval", correct: false },
    ],
  },

  {
    question: "Which class provides a blue background color in Bootstrap?",
    answers: [
      { text: "bg-blue", correct: false },
      { text: "bg-primary", correct: true },
      { text: "bg-info", correct: false },
      { text: "bg-success", correct: false },
    ],
  },

  {
    question: "Which Bootstrap class adds a hovering effect on a table row?",
    answers: [
      { text: "table-hover", correct: true },
      { text: "table-hovering", correct: false },
      { text: "table-hover-effect", correct: false },
      { text: "table-hoverable", correct: false },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////  REACT JS   //////////////////////////////////////////////////////////////
const ReactJs = [
  {
    question: "What is ReactJS?",
    answers: [
      { text: "A JavaScript framework", correct: false },
      {
        text: "A JavaScript library for building user interfaces",
        correct: true,
      },
      { text: "A CSS framework", correct: false },
      { text: "A programming language", correct: false },
    ],
  },

  {
    question: "Who developed ReactJS?",
    answers: [
      { text: "Google", correct: false },
      { text: "Facebook", correct: true },
      { text: "Twitter", correct: false },
      { text: "Microsoft", correct: false },
    ],
  },

  {
    question: "What is a component in React?",
    answers: [
      { text: "A piece of reusable code", correct: true },
      { text: "A CSS class", correct: false },
      { text: "A JavaScript function", correct: false },
      { text: "An HTML element", correct: false },
    ],
  },

  {
    question: "What is JSX?",
    answers: [
      { text: "A JavaScript syntax extension", correct: true },
      { text: "A new HTML tag", correct: false },
      { text: "A CSS preprocessor", correct: false },
      { text: "A database query language", correct: false },
    ],
  },

  {
    question: "Which method in React is used to render components?",
    answers: [
      { text: "render()", correct: true },
      { text: "display()", correct: false },
      { text: "show()", correct: false },
      { text: "view()", correct: false },
    ],
  },

  {
    question: "What are props in React?",
    answers: [
      { text: "Components", correct: false },
      { text: "Properties", correct: true },
      { text: "Methods", correct: false },
      { text: "States", correct: false },
    ],
  },

  {
    question: "What is state in React?",
    answers: [
      { text: "A way to store data within a component", correct: true },
      { text: "A property of the component", correct: false },
      { text: "A method in the component", correct: false },
      { text: "A lifecycle method", correct: false },
    ],
  },

  {
    question: "Which method is used to update state in a React component?",
    answers: [
      { text: "setState()", correct: true },
      { text: "updateState()", correct: false },
      { text: "changeState()", correct: false },
      { text: "refreshState()", correct: false },
    ],
  },

  {
    question: "What is the purpose of the ReactDOM library?",
    answers: [
      { text: "To enable virtual DOM", correct: false },
      { text: "To provide DOM-specific methods", correct: true },
      { text: "To provide state management", correct: false },
      { text: "To handle props", correct: false },
    ],
  },

  {
    question: "What is a pure component in React?",
    answers: [
      { text: "A component that manages its own state", correct: false },
      { text: "A component that does not use JSX", correct: false },
      {
        text: "A component that only depends on props and state",
        correct: true,
      },
      { text: "A component that does not re-render", correct: false },
    ],
  },

  {
    question: "What is a higher-order component (HOC) in React?",
    answers: [
      { text: "A component that renders a higher element", correct: false },
      { text: "A component that returns another component", correct: true },
      { text: "A component that has a higher state", correct: false },
      {
        text: "A component that uses a higher number of props",
        correct: false,
      },
    ],
  },

  {
    question: "What is the use of the useEffect hook in React?",
    answers: [
      { text: "To manage state", correct: false },
      { text: "To perform side effects in function components", correct: true },
      { text: "To handle props", correct: false },
      { text: "To render components", correct: false },
    ],
  },

  {
    question: "What is the use of the useState hook in React?",
    answers: [
      { text: "To handle lifecycle methods", correct: false },
      { text: "To add state to function components", correct: true },
      { text: "To update props", correct: false },
      { text: "To manage styles", correct: false },
    ],
  },

  {
    question: "What is the virtual DOM in React?",
    answers: [
      { text: "A virtual representation of the real DOM", correct: true },
      { text: "A different version of the real DOM", correct: false },
      { text: "A new DOM API", correct: false },
      { text: "A virtual machine", correct: false },
    ],
  },

  {
    question: "Which hook is used to access the previous state or props?",
    answers: [
      { text: "usePrevious()", correct: false },
      { text: "useRef()", correct: true },
      { text: "useContext()", correct: false },
      { text: "useCallback()", correct: false },
    ],
  },

  {
    question: "What does the key prop do in React?",
    answers: [
      { text: "Sets a unique identifier for elements", correct: true },
      { text: "Defines the primary key for components", correct: false },
      { text: "Styles the component", correct: false },
      { text: "Handles state updates", correct: false },
    ],
  },

  {
    question:
      "How do you pass data from a parent component to a child component?",
    answers: [
      { text: "Using state", correct: false },
      { text: "Using refs", correct: false },
      { text: "Using props", correct: true },
      { text: "Using context", correct: false },
    ],
  },

  {
    question: "What is the use of the useContext hook in React?",
    answers: [
      { text: "To access state", correct: false },
      { text: "To create a new context", correct: false },
      {
        text: "To subscribe to a context within a function component",
        correct: true,
      },
      { text: "To manage side effects", correct: false },
    ],
  },

  {
    question:
      "Which lifecycle method is called after the component is rendered for the first time?",
    answers: [
      { text: "componentDidMount", correct: true },
      { text: "componentDidUpdate", correct: false },
      { text: "componentWillUnmount", correct: false },
      { text: "componentWillMount", correct: false },
    ],
  },

  {
    question: "How do you conditionally render a component in React?",
    answers: [
      { text: "Using a switch statement", correct: false },
      { text: "Using a conditional operator", correct: true },
      { text: "Using a for loop", correct: false },
      { text: "Using a map function", correct: false },
    ],
  },
];
///////////////////////////////////////// ANGULAR ////////////////////////////////////////////////////////////////////
const Angular = [
  {
    question: "What is Angular?",
    answers: [
      {
        text: "A JavaScript library for building user interfaces",
        correct: false,
      },
      {
        text: "A front-end framework for developing single-page applications",
        correct: true,
      },
      {
        text: "A backend framework for server-side programming",
        correct: false,
      },
      { text: "A database management system", correct: false },
    ],
  },
  {
    question: "Which company developed Angular?",
    answers: [
      { text: "Facebook", correct: false },
      { text: "Google", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "What is the primary language used for Angular development?",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "Java", correct: false },
      { text: "TypeScript", correct: true },
      { text: "Python", correct: false },
    ],
  },
  {
    question:
      "Which directive is used to create a two-way data binding in Angular?",
    answers: [
      { text: "[ngModel]", correct: true },
      { text: "[ngBind]", correct: false },
      { text: "[ngTwoWay]", correct: false },
      { text: "[ngBindModel]", correct: false },
    ],
  },
  {
    question: "Which command is used to create a new Angular project?",
    answers: [
      { text: "ng generate project", correct: false },
      { text: "ng new project-name", correct: true },
      { text: "angular create project", correct: false },
      { text: "ng create project", correct: false },
    ],
  },
  {
    question: "What is a component in Angular?",
    answers: [
      { text: "A service that handles data operations", correct: false },
      {
        text: "A part of the application containing HTML, CSS, and JavaScript for a UI element",
        correct: true,
      },
      { text: "A module that contains routing information", correct: false },
      { text: "A class that provides dependency injection", correct: false },
    ],
  },
  {
    question: "What does Angular CLI stand for?",
    answers: [
      { text: "Command Line Interface", correct: true },
      { text: "Component Library Interface", correct: false },
      { text: "Controller Logic Interface", correct: false },
      { text: "Central Logic Interface", correct: false },
    ],
  },
  {
    question: "Which decorator is used to define a component in Angular?",
    answers: [
      { text: "@Directive", correct: false },
      { text: "@Component", correct: true },
      { text: "@Module", correct: false },
      { text: "@Service", correct: false },
    ],
  },
  {
    question: "What is a module in Angular?",
    answers: [
      {
        text: "A set of services and components organized together",
        correct: true,
      },
      { text: "A single file containing application logic", correct: false },
      { text: "A directive that manages templates", correct: false },
      { text: "A component that handles user interactions", correct: false },
    ],
  },
  {
    question: "Which file is the main entry point of an Angular application?",
    answers: [
      { text: "main.ts", correct: true },
      { text: "app.module.ts", correct: false },
      { text: "index.html", correct: false },
      { text: "angular.json", correct: false },
    ],
  },
  {
    question: "How do you define routing in an Angular application?",
    answers: [
      { text: "Using @Route decorator", correct: false },
      { text: "Using @RouterModule", correct: false },
      { text: "Using RouterModule.forRoot() method", correct: true },
      { text: "Using RouterService", correct: false },
    ],
  },
  {
    question: "What is Angular's data binding?",
    answers: [
      {
        text: "The process of binding JavaScript data to HTML elements",
        correct: false,
      },
      {
        text: "The process of synchronizing data between the model and the view",
        correct: true,
      },
      { text: "The process of binding components together", correct: false },
      { text: "The process of binding CSS styles to elements", correct: false },
    ],
  },
  {
    question: "Which service is used to make HTTP calls in Angular?",
    answers: [
      { text: "HttpService", correct: false },
      { text: "HttpClientModule", correct: true },
      { text: "HttpModule", correct: false },
      { text: "HttpRequestService", correct: false },
    ],
  },
  {
    question: "What is Angular's dependency injection?",
    answers: [
      { text: "A design pattern for handling user inputs", correct: false },
      {
        text: "A design pattern for injecting services into components",
        correct: true,
      },
      { text: "A technique for optimizing data binding", correct: false },
      { text: "A method for routing navigation", correct: false },
    ],
  },
  {
    question:
      "Which lifecycle hook is called after a component's view has been initialized?",
    answers: [
      { text: "ngOnInit", correct: false },
      { text: "ngAfterViewInit", correct: true },
      { text: "ngAfterContentInit", correct: false },
      { text: "ngOnChanges", correct: false },
    ],
  },
  {
    question: "What is the purpose of the Angular CLI 'ng generate' command?",
    answers: [
      { text: "To create a new Angular application", correct: false },
      {
        text: "To generate components, services, modules, and more",
        correct: true,
      },
      { text: "To start the Angular application server", correct: false },
      { text: "To run the Angular unit tests", correct: false },
    ],
  },
  {
    question:
      "Which operator from RxJS is commonly used to handle asynchronous data in Angular?",
    answers: [
      { text: "filter", correct: false },
      { text: "map", correct: false },
      { text: "subscribe", correct: true },
      { text: "distinctUntilChanged", correct: false },
    ],
  },
  {
    question: "What is the purpose of Angular's 'ngIf' directive?",
    answers: [
      { text: "To iterate over a list of items", correct: false },
      {
        text: "To conditionally include or exclude a portion of the DOM",
        correct: true,
      },
      { text: "To handle form validation", correct: false },
      { text: "To bind a CSS class to an element", correct: false },
    ],
  },
  {
    question: "What is a service in Angular?",
    answers: [
      { text: "A component that handles user input", correct: false },
      {
        text: "A class that contains business logic and data management code",
        correct: true,
      },
      { text: "A module that handles routing", correct: false },
      { text: "A directive that manipulates the DOM", correct: false },
    ],
  },
  {
    question: "Which command is used to serve an Angular application locally?",
    answers: [
      { text: "ng build", correct: false },
      { text: "ng serve", correct: true },
      { text: "ng start", correct: false },
      { text: "ng run", correct: false },
    ],
  },
];
////////////////////////////////////////////  MATERIAL UI ///////////////////////////////////////////////////////////
const MaterialUI = [
  {
    question: "What is Material-UI?",
    answers: [
      {
        text: "A front-end framework for developing single-page applications",
        correct: false,
      },
      {
        text: "A design system for building React applications with a consistent UI",
        correct: true,
      },
      {
        text: "A backend framework for server-side programming",
        correct: false,
      },
      { text: "A database management system", correct: false },
    ],
  },
  {
    question:
      "Which company developed the Material Design guidelines that Material-UI is based on?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Google", correct: true },
      { text: "Facebook", correct: false },
    ],
  },
  {
    question:
      "What is the primary language used for developing with Material-UI?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "C#", correct: false },
    ],
  },
  {
    question:
      "Which command is used to install Material-UI in a React project?",
    answers: [
      { text: "npm install @material-ui/core", correct: true },
      { text: "npm install material-ui", correct: false },
      { text: "npm install material-design", correct: false },
      { text: "npm install material-react", correct: false },
    ],
  },
  {
    question: "What is a primary component library provided by Material-UI?",
    answers: [
      { text: "Bootstrap", correct: false },
      { text: "Ant Design", correct: false },
      { text: "Material-UI Core", correct: true },
      { text: "Foundation", correct: false },
    ],
  },
  {
    question: "Which Material-UI component is used for creating buttons?",
    answers: [
      { text: "Button", correct: true },
      { text: "Btn", correct: false },
      { text: "Link", correct: false },
      { text: "Input", correct: false },
    ],
  },
  {
    question: "How do you apply styles to Material-UI components?",
    answers: [
      { text: "Using inline styles only", correct: false },
      { text: "Using the withStyles higher-order component", correct: true },
      { text: "Using external CSS files only", correct: false },
      { text: "Using JavaScript styles only", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the Material-UI 'ThemeProvider' component?",
    answers: [
      {
        text: "To apply global styles to the entire application",
        correct: false,
      },
      { text: "To manage the state of the application", correct: false },
      {
        text: "To provide a consistent theme across the application",
        correct: true,
      },
      { text: "To handle routing in the application", correct: false },
    ],
  },
  {
    question:
      "Which component is used to create a responsive layout grid in Material-UI?",
    answers: [
      { text: "Grid", correct: true },
      { text: "Container", correct: false },
      { text: "Box", correct: false },
      { text: "Flex", correct: false },
    ],
  },
  {
    question: "What is the 'makeStyles' function used for in Material-UI?",
    answers: [
      { text: "To create a new component", correct: false },
      { text: "To define custom CSS styles", correct: true },
      { text: "To manage component state", correct: false },
      { text: "To handle API calls", correct: false },
    ],
  },
  {
    question: "How do you apply Material-UI icons in a React project?",
    answers: [
      { text: "Using the @material-ui/icons package", correct: true },
      { text: "Using the @material-ui/core package", correct: false },
      { text: "Using the @material-ui/components package", correct: false },
      { text: "Using the @material-ui/theme package", correct: false },
    ],
  },
  {
    question:
      "Which component is used to create a modal dialog in Material-UI?",
    answers: [
      { text: "Dialog", correct: true },
      { text: "Modal", correct: false },
      { text: "Popup", correct: false },
      { text: "Window", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'Box' component in Material-UI?",
    answers: [
      { text: "To create a form element", correct: false },
      { text: "To handle API requests", correct: false },
      {
        text: "To provide a wrapper component with utility styling",
        correct: true,
      },
      { text: "To create navigation elements", correct: false },
    ],
  },
  {
    question: "How do you customize the default theme in Material-UI?",
    answers: [
      { text: "Using the createTheme function", correct: true },
      { text: "Using the withTheme function", correct: false },
      { text: "Using the ThemeProvider component", correct: false },
      { text: "Using the setTheme function", correct: false },
    ],
  },
  {
    question:
      "Which Material-UI component is used for creating navigation drawers?",
    answers: [
      { text: "AppBar", correct: false },
      { text: "Drawer", correct: true },
      { text: "Sidebar", correct: false },
      { text: "Menu", correct: false },
    ],
  },
  {
    question: "What does the 'sx' prop in Material-UI do?",
    answers: [
      { text: "It applies styles directly to a component", correct: true },
      { text: "It sets the state of a component", correct: false },
      { text: "It handles component events", correct: false },
      { text: "It manages component lifecycle", correct: false },
    ],
  },
  {
    question: "Which Material-UI component is used for creating forms?",
    answers: [
      { text: "Form", correct: false },
      { text: "FormControl", correct: true },
      { text: "Input", correct: false },
      { text: "FormField", correct: false },
    ],
  },
  {
    question: "How do you add spacing between Grid items in Material-UI?",
    answers: [
      { text: "Using the space prop", correct: false },
      { text: "Using the gap prop", correct: false },
      { text: "Using the spacing prop", correct: true },
      { text: "Using the margin prop", correct: false },
    ],
  },
  {
    question: "Which component is used to create tabs in Material-UI?",
    answers: [
      { text: "Tabs", correct: true },
      { text: "TabPanel", correct: false },
      { text: "TabControl", correct: false },
      { text: "NavigationTabs", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the 'CssBaseline' component in Material-UI?",
    answers: [
      { text: "To handle form validation", correct: false },
      {
        text: "To reset and apply a consistent baseline CSS to the application",
        correct: true,
      },
      { text: "To create a navigation bar", correct: false },
      { text: "To manage component state", correct: false },
    ],
  },
];
/////////////////////////////////////////////////  P   H   P  ///////////////////////////////////////////////////////
const PHP = [
  {
    question: "What does PHP stand for?",
    answers: [
      { text: "Personal Home Page", correct: false },
      { text: "PHP: Hypertext Preprocessor", correct: true },
      { text: "Private Home Page", correct: false },
      { text: "Programmed Hypertext Page", correct: false },
    ],
  },
  {
    question: "PHP is a...",
    answers: [
      { text: "Server-side scripting language", correct: true },
      { text: "Client-side scripting language", correct: false },
      { text: "Database management system", correct: false },
      { text: "Markup language", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to start a PHP block of code?",
    answers: [
      { text: "<?php", correct: true },
      { text: "<script>", correct: false },
      { text: "<php>", correct: false },
      { text: "<?php code>", correct: false },
    ],
  },
  {
    question: "Which of the following is used to declare a variable in PHP?",
    answers: [
      { text: "$variable_name", correct: true },
      { text: "var variable_name", correct: false },
      { text: "variable_name", correct: false },
      { text: "@variable_name", correct: false },
    ],
  },
  {
    question: "Which function is used to output text in PHP?",
    answers: [
      { text: "echo", correct: true },
      { text: "print", correct: false },
      { text: "write", correct: false },
      { text: "display", correct: false },
    ],
  },
  {
    question: "How do you write a comment in PHP?",
    answers: [
      { text: "// This is a comment", correct: true },
      { text: "# This is a comment", correct: false },
      { text: "/* This is a comment */", correct: true },
      { text: "<!-- This is a comment -->", correct: false },
    ],
  },
  {
    question: "Which of the following is a superglobal in PHP?",
    answers: [
      { text: "$_GET", correct: true },
      { text: "$GLOBALS", correct: true },
      { text: "$_POST", correct: true },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the correct way to include a file in PHP?",
    answers: [
      { text: "include 'filename.php';", correct: true },
      { text: "import 'filename.php';", correct: false },
      { text: "require 'filename.php';", correct: true },
      { text: "use 'filename.php';", correct: false },
    ],
  },
  {
    question: "What is the purpose of the isset() function in PHP?",
    answers: [
      { text: "To check if a variable is set and is not NULL", correct: true },
      { text: "To set a variable", correct: false },
      { text: "To unset a variable", correct: false },
      { text: "To check if a variable is empty", correct: false },
    ],
  },
  {
    question: "What is the correct way to end a PHP statement?",
    answers: [
      { text: "With a period (.)", correct: false },
      { text: "With a semicolon (;)", correct: true },
      { text: "With a comma (,)", correct: false },
      { text: "With a colon (:)", correct: false },
    ],
  },
  {
    question: "Which function is used to get the length of a string in PHP?",
    answers: [
      { text: "strlen()", correct: true },
      { text: "length()", correct: false },
      { text: "strlength()", correct: false },
      { text: "count()", correct: false },
    ],
  },
  {
    question: "How do you create an array in PHP?",
    answers: [
      { text: "$array = array();", correct: true },
      { text: "$array = [];", correct: true },
      { text: "$array = new Array();", correct: false },
      { text: "$array = {};", correct: false },
    ],
  },
  {
    question:
      "Which function is used to check if a variable is an array in PHP?",
    answers: [
      { text: "is_array()", correct: true },
      { text: "isArray()", correct: false },
      { text: "check_array()", correct: false },
      { text: "array_check()", correct: false },
    ],
  },
  {
    question: "How do you start a session in PHP?",
    answers: [
      { text: "session_start();", correct: true },
      { text: "start_session();", correct: false },
      { text: "begin_session();", correct: false },
      { text: "session_begin();", correct: false },
    ],
  },
  {
    question: "How do you destroy a session in PHP?",
    answers: [
      { text: "session_destroy();", correct: true },
      { text: "destroy_session();", correct: false },
      { text: "end_session();", correct: false },
      { text: "session_end();", correct: false },
    ],
  },
  {
    question: "What is the correct way to connect to a MySQL database in PHP?",
    answers: [
      { text: "mysqli_connect()", correct: true },
      { text: "mysql_connect()", correct: false },
      { text: "connect_mysql()", correct: false },
      { text: "db_connect()", correct: false },
    ],
  },
  {
    question:
      "Which function is used to fetch a result row as an associative array in PHP?",
    answers: [
      { text: "mysqli_fetch_assoc()", correct: true },
      { text: "mysqli_fetch_array()", correct: false },
      { text: "mysqli_fetch_row()", correct: false },
      { text: "mysqli_fetch_object()", correct: false },
    ],
  },
  {
    question: "What is the correct way to create a constant in PHP?",
    answers: [
      { text: "define('CONSTANT_NAME', 'value');", correct: true },
      { text: "const CONSTANT_NAME = 'value';", correct: true },
      { text: "$CONSTANT_NAME = 'value';", correct: false },
      { text: "constant('CONSTANT_NAME', 'value');", correct: false },
    ],
  },
  {
    question: "What is the use of the 'foreach' loop in PHP?",
    answers: [
      { text: "To iterate over arrays", correct: true },
      { text: "To iterate over objects", correct: false },
      { text: "To iterate over strings", correct: false },
      { text: "To iterate over numbers", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to open a file for reading in PHP?",
    answers: [
      { text: "fopen('filename', 'r')", correct: true },
      { text: "fopen('filename', 'w')", correct: false },
      { text: "fopen('filename', 'a')", correct: false },
      { text: "fopen('filename', 'r+')", correct: false },
    ],
  },
];
///////////////////////////////////////////  NODE JS  ///////////////////////////////////////////////////////////////
const NodeJs = [
  {
    question: "What is Node.js?",
    answers: [
      { text: "A web server", correct: false },
      {
        text: "A JavaScript runtime built on Chrome's V8 engine",
        correct: true,
      },
      { text: "A JavaScript library", correct: false },
      { text: "A web browser", correct: false },
    ],
  },
  {
    question: "Which of the following is used to manage Node.js packages?",
    answers: [
      { text: "npm", correct: true },
      { text: "composer", correct: false },
      { text: "pip", correct: false },
      { text: "gem", correct: false },
    ],
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    answers: [
      { text: "npm start", correct: false },
      { text: "npm init", correct: true },
      { text: "node init", correct: false },
      { text: "npm new", correct: false },
    ],
  },
  {
    question: "How do you import a module in Node.js?",
    answers: [
      { text: "import module from 'module';", correct: false },
      { text: "include('module');", correct: false },
      { text: "require('module');", correct: true },
      { text: "load('module');", correct: false },
    ],
  },
  {
    question: "Which method is used to read a file asynchronously in Node.js?",
    answers: [
      { text: "fs.readFile()", correct: true },
      { text: "fs.readFileSync()", correct: false },
      { text: "fs.open()", correct: false },
      { text: "fs.openSync()", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the 'package.json' file in a Node.js project?",
    answers: [
      { text: "To list project dependencies", correct: true },
      { text: "To configure the web server", correct: false },
      { text: "To write the project code", correct: false },
      { text: "To set environment variables", correct: false },
    ],
  },
  {
    question: "Which of the following is a core module in Node.js?",
    answers: [
      { text: "express", correct: false },
      { text: "http", correct: true },
      { text: "lodash", correct: false },
      { text: "mongoose", correct: false },
    ],
  },
  {
    question: "Which command is used to install a package globally using npm?",
    answers: [
      { text: "npm install package", correct: false },
      { text: "npm install -g package", correct: true },
      { text: "npm install --global package", correct: true },
      { text: "npm global install package", correct: false },
    ],
  },
  {
    question: "How do you create a new instance of an HTTP server in Node.js?",
    answers: [
      { text: "http.createServer()", correct: true },
      { text: "http.newServer()", correct: false },
      { text: "new http.Server()", correct: false },
      { text: "http.startServer()", correct: false },
    ],
  },
  {
    question: "Which method is used to handle events in Node.js?",
    answers: [
      { text: "emit()", correct: true },
      { text: "trigger()", correct: false },
      { text: "dispatch()", correct: false },
      { text: "send()", correct: false },
    ],
  },
  {
    question: "How do you install the Express framework using npm?",
    answers: [
      { text: "npm install express", correct: true },
      { text: "npm get express", correct: false },
      { text: "npm add express", correct: false },
      { text: "npm fetch express", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'res.send()' method in Express?",
    answers: [
      { text: "To send a response to the client", correct: true },
      { text: "To send a request to the server", correct: false },
      { text: "To send an error message", correct: false },
      { text: "To send a file to the client", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a popular template engine for Node.js?",
    answers: [
      { text: "EJS", correct: true },
      { text: "Jinja", correct: false },
      { text: "Twig", correct: false },
      { text: "Blade", correct: false },
    ],
  },
  {
    question: "How do you start a Node.js application?",
    answers: [
      { text: "node app.js", correct: true },
      { text: "npm start app.js", correct: false },
      { text: "run app.js", correct: false },
      { text: "start app.js", correct: false },
    ],
  },
  {
    question: "Which method is used to read a file synchronously in Node.js?",
    answers: [
      { text: "fs.readFileSync()", correct: true },
      { text: "fs.readFile()", correct: false },
      { text: "fs.openSync()", correct: false },
      { text: "fs.open()", correct: false },
    ],
  },
  {
    question: "What is 'middleware' in Express?",
    answers: [
      {
        text: "Functions that execute during the lifecycle of a request to the server",
        correct: true,
      },
      { text: "Middleware is not a concept in Express", correct: false },
      {
        text: "Functions that execute after a response is sent",
        correct: false,
      },
      {
        text: "Functions that execute during the lifecycle of a server start",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is true about Node.js?",
    answers: [
      { text: "It is single-threaded", correct: true },
      { text: "It is multi-threaded", correct: false },
      { text: "It cannot handle asynchronous operations", correct: false },
      { text: "It is only for front-end development", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'require' function in Node.js?",
    answers: [
      { text: "To import modules", correct: true },
      { text: "To export modules", correct: false },
      { text: "To create modules", correct: false },
      { text: "To delete modules", correct: false },
    ],
  },
  {
    question:
      "Which method is used to listen for incoming connections on a specific port in Node.js?",
    answers: [
      { text: "server.listen()", correct: true },
      { text: "server.connect()", correct: false },
      { text: "server.bind()", correct: false },
      { text: "server.start()", correct: false },
    ],
  },
  {
    question: "How do you handle errors in asynchronous functions in Node.js?",
    answers: [
      { text: "Using callbacks", correct: true },
      { text: "Using try-catch blocks", correct: false },
      { text: "Using promises", correct: true },
      { text: "Using async/await with try-catch blocks", correct: true },
    ],
  },
];
/////////////////////////////////////   J   A    V    A    //////////////////////////////////////////////////////////
const Java = [
  {
    question: "What is Java?",
    answers: [
      { text: "A compiled language", correct: true },
      { text: "A scripting language", correct: false },
      { text: "A markup language", correct: false },
      { text: "A style sheet language", correct: false },
    ],
  },
  {
    question: "Which of the following is not a Java feature?",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Portable", correct: false },
      { text: "Dynamic", correct: false },
      { text: "Interpreted", correct: true },
    ],
  },
  {
    question: "What is the extension of compiled Java classes?",
    answers: [
      { text: ".js", correct: false },
      { text: ".txt", correct: false },
      { text: ".class", correct: true },
      { text: ".java", correct: false },
    ],
  },
  {
    question: "Which method is the entry point of a Java program?",
    answers: [
      { text: "main()", correct: true },
      { text: "start()", correct: false },
      { text: "init()", correct: false },
      { text: "run()", correct: false },
    ],
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    answers: [
      { text: "extends", correct: true },
      { text: "implements", correct: false },
      { text: "inherits", correct: false },
      { text: "extends", correct: true },
    ],
  },
  {
    question: "Which of the following is a superclass of all classes in Java?",
    answers: [
      { text: "Object", correct: true },
      { text: "Class", correct: false },
      { text: "System", correct: false },
      { text: "Main", correct: false },
    ],
  },
  {
    question: "Which package contains the fundamental classes in Java?",
    answers: [
      { text: "java.awt", correct: false },
      { text: "java.util", correct: false },
      { text: "java.lang", correct: true },
      { text: "java.io", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a constant variable in Java?",
    answers: [
      { text: "const", correct: false },
      { text: "final", correct: true },
      { text: "static", correct: false },
      { text: "constant", correct: false },
    ],
  },
  {
    question: "How do you create an object in Java?",
    answers: [
      { text: "new", correct: true },
      { text: "create", correct: false },
      { text: "instantiate", correct: false },
      { text: "make", correct: false },
    ],
  },
  {
    question: "What is bytecode in Java?",
    answers: [
      { text: "The source code of Java", correct: false },
      { text: "The machine code of Java", correct: false },
      { text: "The intermediate representation of Java code", correct: true },
      { text: "The output code of Java", correct: false },
    ],
  },
  {
    question: "Which method is used to start a thread in Java?",
    answers: [
      { text: "start()", correct: true },
      { text: "run()", correct: false },
      { text: "init()", correct: false },
      { text: "begin()", correct: false },
    ],
  },
  {
    question:
      "Which exception is thrown when an array is accessed with an illegal index?",
    answers: [
      { text: "ArrayIndexOutOfBoundsException", correct: true },
      { text: "IllegalArgumentException", correct: false },
      { text: "NullPointerException", correct: false },
      { text: "IndexOutOfBoundsException", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'this' keyword in Java?",
    answers: [
      { text: "To refer to the current object", correct: true },
      { text: "To refer to the parent class", correct: false },
      { text: "To refer to the current method", correct: false },
      { text: "To refer to the child class", correct: false },
    ],
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    answers: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do-while loop", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which collection class allows you to grow or shrink its size and provides indexed access to its elements?",
    answers: [
      { text: "Array", correct: false },
      { text: "ArrayList", correct: true },
      { text: "HashSet", correct: false },
      { text: "TreeSet", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define an abstract class in Java?",
    answers: [
      { text: "abstract", correct: true },
      { text: "interface", correct: false },
      { text: "implements", correct: false },
      { text: "extends", correct: false },
    ],
  },
  {
    question: "Which method can be defined in an interface in Java 8?",
    answers: [
      { text: "Abstract methods only", correct: false },
      { text: "Static methods only", correct: false },
      { text: "Default and static methods", correct: true },
      { text: "Final methods only", correct: false },
    ],
  },
  {
    question: "What is the size of an int variable in Java?",
    answers: [
      { text: "4 bytes", correct: true },
      { text: "2 bytes", correct: false },
      { text: "8 bytes", correct: false },
      { text: "1 byte", correct: false },
    ],
  },
  {
    question:
      'What is the output of the following code?\nSystem.out.println(10 + 20 + "30");',
    answers: [
      { text: "30", correct: false },
      { text: "1030", correct: false },
      { text: "3030", correct: false },
      { text: "3030", correct: true },
    ],
  },
  {
    question: "Which of the following statements is true about Java?",
    answers: [
      { text: "Java is platform-dependent", correct: false },
      { text: "Java is platform-independent", correct: true },
      { text: "Java supports pointers", correct: false },
      { text: "Java does not support multithreading", correct: false },
    ],
  },
];
////////////////////////////////////////////////  PYTHON  ///////////////////////////////////////////////////////////
const Python = [
  {
    question: "What is Python?",
    answers: [
      { text: "A high-level, interpreted programming language", correct: true },
      { text: "A low-level, compiled programming language", correct: false },
      { text: "A markup language", correct: false },
      { text: "A style sheet language", correct: false },
    ],
  },
  {
    question: "Which of the following is a feature of Python?",
    answers: [
      { text: "Interpreted", correct: true },
      { text: "Strongly typed", correct: false },
      { text: "Compiled", correct: false },
      { text: "Static typing", correct: false },
    ],
  },
  {
    question: "What is the file extension for Python files?",
    answers: [
      { text: ".py", correct: true },
      { text: ".python", correct: false },
      { text: ".pt", correct: false },
      { text: ".p", correct: false },
    ],
  },
  {
    question: "How do you create a function in Python?",
    answers: [
      { text: "def functionName():", correct: true },
      { text: "function functionName():", correct: false },
      { text: "create function functionName():", correct: false },
      { text: "def functionName[]:", correct: false },
    ],
  },
  {
    question:
      "Which of the following is used to define a block of code in Python?",
    answers: [
      { text: "Indentation", correct: true },
      { text: "Braces", correct: false },
      { text: "Parentheses", correct: false },
      { text: "Quotes", correct: false },
    ],
  },
  {
    question: "How do you write a single-line comment in Python?",
    answers: [
      { text: "// This is a comment", correct: false },
      { text: "# This is a comment", correct: true },
      { text: "/* This is a comment */", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
    ],
  },
  {
    question: "What is the output of the following code?\nprint(type(5))",
    answers: [
      { text: "<class 'int'>", correct: true },
      { text: "<type 'int'>", correct: false },
      { text: "<class 'integer'>", correct: false },
      { text: "<type 'integer'>", correct: false },
    ],
  },
  {
    question: "Which of the following is not a Python data type?",
    answers: [
      { text: "List", correct: false },
      { text: "Tuple", correct: false },
      { text: "Dictionary", correct: false },
      { text: "Set", correct: true },
    ],
  },
  {
    question: "How do you start a loop that iterates over a list in Python?",
    answers: [
      { text: "for item in list:", correct: true },
      { text: "foreach item in list:", correct: false },
      { text: "loop item in list:", correct: false },
      { text: "iterate item in list:", correct: false },
    ],
  },
  {
    question: "How do you import a module in Python?",
    answers: [
      { text: "import moduleName", correct: true },
      { text: "include moduleName", correct: false },
      { text: "require moduleName", correct: false },
      { text: "using moduleName", correct: false },
    ],
  },
  {
    question: "What is the output of the following code?\nprint(2 ** 3)",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "Which of the following is used to handle exceptions in Python?",
    answers: [
      { text: "try/except", correct: true },
      { text: "try/catch", correct: false },
      { text: "try/error", correct: false },
      { text: "attempt/except", correct: false },
    ],
  },
  {
    question: "How do you create a dictionary in Python?",
    answers: [
      { text: "{'key': 'value'}", correct: true },
      { text: "{key = 'value'}", correct: false },
      { text: "dict{'key': 'value'}", correct: false },
      { text: "[key: 'value']", correct: false },
    ],
  },
  {
    question: "What is the output of the following code?\nprint(len('hello'))",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a correct syntax to open a file in Python?",
    answers: [
      { text: "file('filename')", correct: false },
      { text: "open('filename')", correct: true },
      { text: "file.open('filename')", correct: false },
      { text: "open.file('filename')", correct: false },
    ],
  },
  {
    question: "How do you create a list in Python?",
    answers: [
      { text: "[1, 2, 3]", correct: true },
      { text: "{1, 2, 3}", correct: false },
      { text: "(1, 2, 3)", correct: false },
      { text: "<1, 2, 3>", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a class in Python?",
    answers: [
      { text: "class", correct: true },
      { text: "def", correct: false },
      { text: "object", correct: false },
      { text: "struct", correct: false },
    ],
  },
  {
    question: "How do you check if a key exists in a dictionary in Python?",
    answers: [
      { text: "if key in dict:", correct: true },
      { text: "if dict.has_key(key):", correct: false },
      { text: "if key exists in dict:", correct: false },
      { text: "if dict.contains(key):", correct: false },
    ],
  },
  {
    question:
      "Which method is used to remove whitespace from the beginning and end of a string in Python?",
    answers: [
      { text: "strip()", correct: true },
      { text: "trim()", correct: false },
      { text: "remove()", correct: false },
      { text: "cut()", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code?\nprint('Hello ' + 'World')",
    answers: [
      { text: "Hello World", correct: true },
      { text: "HelloWorld", correct: false },
      { text: "Hello+World", correct: false },
      { text: "Hello World ", correct: false },
    ],
  },
];
///////////////////////////////////////////// C  Programming  ///////////////////////////////////////////////////////
const C_Programming = [
  {
    question: "What is the main function in a C program?",
    answers: [
      { text: "start()", correct: false },
      { text: "main()", correct: true },
      { text: "run()", correct: false },
      { text: "execute()", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid variable declaration in C?",
    answers: [
      { text: "int 1variable;", correct: false },
      { text: "int variable_1;", correct: true },
      { text: "int variable-1;", correct: false },
      { text: "int variable 1;", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to include a standard library header file in C?",
    answers: [
      { text: "#include <stdio.h>", correct: true },
      { text: "#include 'stdio.h'", correct: false },
      { text: "#include stdio.h", correct: false },
      { text: "#include [stdio.h]", correct: false },
    ],
  },
  {
    question: "What is the correct syntax to declare a pointer in C?",
    answers: [
      { text: "int *ptr;", correct: true },
      { text: "int ptr*;", correct: false },
      { text: "*int ptr;", correct: false },
      { text: "int ptr;", correct: false },
    ],
  },
  {
    question: 'What is the output of the following code?\nprintf("%d", 5 + 2);',
    answers: [
      { text: "7", correct: true },
      { text: "52", correct: false },
      { text: "5 + 2", correct: false },
      { text: "%d", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid comment in C?",
    answers: [
      { text: "// This is a comment", correct: true },
      { text: "# This is a comment", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
      { text: "/* This is a comment", correct: false },
    ],
  },
  {
    question: "What is the size of an int data type in C?",
    answers: [
      { text: "4 bytes", correct: true },
      { text: "2 bytes", correct: false },
      { text: "8 bytes", correct: false },
      { text: "1 byte", correct: false },
    ],
  },
  {
    question: "How do you declare an array of 10 integers in C?",
    answers: [
      { text: "int arr[10];", correct: true },
      { text: "int arr;", correct: false },
      { text: "array int arr[10];", correct: false },
      { text: "int[10] arr;", correct: false },
    ],
  },
  {
    question:
      "Which of the following is used to take input from the user in C?",
    answers: [
      { text: "printf", correct: false },
      { text: "scanf", correct: true },
      { text: "input", correct: false },
      { text: "get", correct: false },
    ],
  },
  {
    question:
      "Which operator is used to access the value stored at a pointer address in C?",
    answers: [
      { text: "&", correct: false },
      { text: "*", correct: true },
      { text: "->", correct: false },
      { text: ".", correct: false },
    ],
  },
  {
    question: "Which of the following loop structures is available in C?",
    answers: [
      { text: "for", correct: true },
      { text: "foreach", correct: false },
      { text: "while", correct: true },
      { text: "until", correct: false },
    ],
  },
  {
    question: "What is the correct way to define a constant in C?",
    answers: [
      { text: "#define PI 3.14", correct: true },
      { text: "const PI = 3.14;", correct: false },
      { text: "constant PI = 3.14;", correct: false },
      { text: "define PI 3.14;", correct: false },
    ],
  },
  {
    question: "Which function is used to allocate memory dynamically in C?",
    answers: [
      { text: "malloc", correct: true },
      { text: "alloc", correct: false },
      { text: "memory", correct: false },
      { text: "dynamic_alloc", correct: false },
    ],
  },
  {
    question:
      'What will be the output of the following code?\nint a = 5;\nint b = a++;\nprintf("%d", b);',
    answers: [
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "4", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid if statement in C?",
    answers: [
      { text: "if (a == b)", correct: true },
      { text: "if a == b", correct: false },
      { text: "if (a = b)", correct: false },
      { text: "if (a == b) then", correct: false },
    ],
  },
  {
    question: "Which of the following is not a valid storage class in C?",
    answers: [
      { text: "auto", correct: false },
      { text: "register", correct: false },
      { text: "volatile", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "Which function is used to deallocate memory in C?",
    answers: [
      { text: "free", correct: true },
      { text: "delete", correct: false },
      { text: "remove", correct: false },
      { text: "dealloc", correct: false },
    ],
  },
  {
    question:
      'What is the output of the following code?\nprintf("%d", sizeof(char));',
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Which of the following correctly declares a structure in C?",
    answers: [
      { text: "struct { int a; float b; };", correct: true },
      { text: "structure { int a; float b; };", correct: false },
      { text: "struct ( int a; float b; );", correct: false },
      { text: "struct { int a; float b }", correct: false },
    ],
  },
  {
    question: "Which of the following is a logical operator in C?",
    answers: [
      { text: "&&", correct: true },
      { text: "&", correct: false },
      { text: "|", correct: false },
      { text: "!", correct: false },
    ],
  },
];
////////////////////////////////////////////  C++ Programming  //////////////////////////////////////////////////////
const CPP_Programming = [
  {
    question: "What is the correct syntax to declare a class in C++?",
    answers: [
      { text: "class ClassName { ... }", correct: true },
      { text: "Class ClassName { ... }", correct: false },
      { text: "struct ClassName { ... }", correct: false },
      { text: "class { ... } ClassName", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to create an object of a class in C++?",
    answers: [
      { text: "ClassName obj;", correct: true },
      { text: "obj ClassName;", correct: false },
      { text: "ClassName = obj;", correct: false },
      { text: "object ClassName;", correct: false },
    ],
  },
  {
    question: "What is the purpose of a constructor in C++?",
    answers: [
      { text: "To initialize objects of a class", correct: true },
      { text: "To delete objects of a class", correct: false },
      { text: "To create a copy of objects", correct: false },
      { text: "To overload operators", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid access specifier in C++?",
    answers: [
      { text: "public", correct: true },
      { text: "open", correct: false },
      { text: "exposed", correct: false },
      { text: "shared", correct: false },
    ],
  },
  {
    question: "What is the correct way to inherit a class in C++?",
    answers: [
      { text: "class Derived : public Base", correct: true },
      { text: "class Derived inherits Base", correct: false },
      { text: "class Derived < Base", correct: false },
      { text: "class Derived from Base", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a template in C++?",
    answers: [
      { text: "template", correct: true },
      { text: "generic", correct: false },
      { text: "typename", correct: false },
      { text: "type", correct: false },
    ],
  },
  {
    question:
      "Which operator is used to access a member of a class or structure through a pointer?",
    answers: [
      { text: "->", correct: true },
      { text: ".", correct: false },
      { text: "::", correct: false },
      { text: ":", correct: false },
    ],
  },
  {
    question: "What is the correct way to overload the operator + in C++?",
    answers: [
      { text: "ClassName operator+(const ClassName& obj)", correct: true },
      { text: "ClassName operator.plus(const ClassName& obj)", correct: false },
      { text: "ClassName overload+ (const ClassName& obj)", correct: false },
      { text: "ClassName plus(const ClassName& obj)", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid destructor in C++?",
    answers: [
      { text: "~ClassName()", correct: true },
      { text: "destructor~ClassName()", correct: false },
      { text: "~ClassName", correct: false },
      { text: "delete ClassName()", correct: false },
    ],
  },
  {
    question:
      "Which C++ feature allows a function or an operator to be given more than one definition?",
    answers: [
      { text: "Function overloading", correct: true },
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: false },
      { text: "Polymorphism", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code?\nstd::cout << sizeof(char);",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question:
      "What is the default access level of members in a class if no access specifier is provided?",
    answers: [
      { text: "private", correct: true },
      { text: "public", correct: false },
      { text: "protected", correct: false },
      { text: "default", correct: false },
    ],
  },
  {
    question:
      "Which of the following correctly declares a friend function in C++?",
    answers: [
      { text: "friend void func();", correct: true },
      { text: "friend function func();", correct: false },
      { text: "void friend func();", correct: false },
      { text: "function friend func();", correct: false },
    ],
  },
  {
    question:
      "What is the correct way to create a constant pointer to an integer in C++?",
    answers: [
      { text: "int *const ptr;", correct: true },
      { text: "const int *ptr;", correct: false },
      { text: "int const *ptr;", correct: false },
      { text: "const int *const ptr;", correct: false },
    ],
  },
  {
    question: "Which keyword is used to handle exceptions in C++?",
    answers: [
      { text: "try", correct: true },
      { text: "catch", correct: true },
      { text: "throw", correct: true },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "What is the correct way to define a pure virtual function in C++?",
    answers: [
      { text: "virtual void func() = 0;", correct: true },
      { text: "virtual void func() {};", correct: false },
      { text: "pure virtual void func();", correct: false },
      { text: "virtual void func();", correct: false },
    ],
  },
  {
    question: "Which of the following correctly declares a namespace in C++?",
    answers: [
      { text: "namespace MyNamespace { ... }", correct: true },
      { text: "namespace: MyNamespace { ... }", correct: false },
      { text: "namespace = MyNamespace { ... }", correct: false },
      { text: "namespace [MyNamespace] { ... }", correct: false },
    ],
  },
  {
    question:
      "What is the correct way to allocate memory for an integer array dynamically in C++?",
    answers: [
      { text: "int *arr = new int[10];", correct: true },
      { text: "int *arr = allocate int[10];", correct: false },
      { text: "int arr[10];", correct: false },
      { text: "int *arr = malloc(10 * sizeof(int));", correct: false },
    ],
  },
  {
    question:
      "Which operator is used to release dynamically allocated memory in C++?",
    answers: [
      { text: "delete", correct: true },
      { text: "free", correct: false },
      { text: "remove", correct: false },
      { text: "release", correct: false },
    ],
  },
  {
    question: "Which of the following is true about references in C++?",
    answers: [
      { text: "A reference must be initialized when declared", correct: true },
      { text: "A reference can be null", correct: false },
      {
        text: "A reference can be reassigned to another object",
        correct: false,
      },
      {
        text: "References cannot be used as function parameters",
        correct: false,
      },
    ],
  },
];
////////////////////////////////////////  My SQL   //////////////////////////////////////////////////////////////////
const MySQL = [
  {
    question: "What does SQL stand for?",
    answers: [
      { text: "Structured Query Language", correct: true },
      { text: "Simple Query Language", correct: false },
      { text: "Structured Question Language", correct: false },
      { text: "Sample Query Language", correct: false },
    ],
  },
  {
    question: "Which command is used to create a new database in MySQL?",
    answers: [
      { text: "CREATE DATABASE dbName;", correct: true },
      { text: "NEW DATABASE dbName;", correct: false },
      { text: "MAKE DATABASE dbName;", correct: false },
      { text: "ADD DATABASE dbName;", correct: false },
    ],
  },
  {
    question: "How do you retrieve all columns from a table named 'users'?",
    answers: [
      { text: "SELECT * FROM users;", correct: true },
      { text: "GET * FROM users;", correct: false },
      { text: "RETRIEVE * FROM users;", correct: false },
      { text: "FETCH * FROM users;", correct: false },
    ],
  },
  {
    question: "Which statement is used to delete data from a table in MySQL?",
    answers: [
      { text: "DELETE FROM tableName WHERE condition;", correct: true },
      { text: "REMOVE FROM tableName WHERE condition;", correct: false },
      { text: "DROP FROM tableName WHERE condition;", correct: false },
      { text: "ERASE FROM tableName WHERE condition;", correct: false },
    ],
  },
  {
    question:
      "Which MySQL statement is used to modify the structure of an existing table?",
    answers: [
      { text: "ALTER TABLE tableName;", correct: true },
      { text: "CHANGE TABLE tableName;", correct: false },
      { text: "MODIFY TABLE tableName;", correct: false },
      { text: "UPDATE TABLE tableName;", correct: false },
    ],
  },
  {
    question: "What is the correct syntax to insert a new row into a table?",
    answers: [
      {
        text: "INSERT INTO tableName (column1, column2) VALUES (value1, value2);",
        correct: true,
      },
      {
        text: "ADD INTO tableName (column1, column2) VALUES (value1, value2);",
        correct: false,
      },
      {
        text: "INSERT ROW INTO tableName (column1, column2) VALUES (value1, value2);",
        correct: false,
      },
      {
        text: "NEW ROW INTO tableName (column1, column2) VALUES (value1, value2);",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which keyword is used to sort the result-set in ascending or descending order?",
    answers: [
      { text: "ORDER BY", correct: true },
      { text: "SORT BY", correct: false },
      { text: "ARRANGE BY", correct: false },
      { text: "GROUP BY", correct: false },
    ],
  },
  {
    question: "How do you add a column named 'email' to a table named 'users'?",
    answers: [
      {
        text: "ALTER TABLE users ADD COLUMN email VARCHAR(255);",
        correct: true,
      },
      { text: "ALTER TABLE users ADD email VARCHAR(255);", correct: false },
      {
        text: "MODIFY TABLE users ADD COLUMN email VARCHAR(255);",
        correct: false,
      },
      {
        text: "UPDATE TABLE users ADD COLUMN email VARCHAR(255);",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which function is used to return the current date and time in MySQL?",
    answers: [
      { text: "NOW()", correct: true },
      { text: "CURRENT_TIMESTAMP()", correct: false },
      { text: "GETDATE()", correct: false },
      { text: "CURDATE()", correct: false },
    ],
  },
  {
    question: "What is the purpose of the PRIMARY KEY constraint?",
    answers: [
      { text: "To uniquely identify each record in a table", correct: true },
      {
        text: "To enforce a column to accept unique values only",
        correct: false,
      },
      { text: "To create a unique index for faster retrieval", correct: false },
      { text: "To define a foreign key relationship", correct: false },
    ],
  },
  {
    question: "Which command is used to remove a table from a database?",
    answers: [
      { text: "DROP TABLE tableName;", correct: true },
      { text: "DELETE TABLE tableName;", correct: false },
      { text: "REMOVE TABLE tableName;", correct: false },
      { text: "ERASE TABLE tableName;", correct: false },
    ],
  },
  {
    question: "What does the FOREIGN KEY constraint do?",
    answers: [
      { text: "It creates a link between two tables", correct: true },
      { text: "It ensures unique values in a column", correct: false },
      { text: "It defines the primary key of a table", correct: false },
      { text: "It restricts NULL values in a column", correct: false },
    ],
  },
  {
    question: "Which clause is used to filter records in a SELECT statement?",
    answers: [
      { text: "WHERE", correct: true },
      { text: "HAVING", correct: false },
      { text: "FILTER", correct: false },
      { text: "LIMIT", correct: false },
    ],
  },
  {
    question: "What is the correct syntax to create a new user in MySQL?",
    answers: [
      {
        text: "CREATE USER 'username'@'host' IDENTIFIED BY 'password';",
        correct: true,
      },
      {
        text: "NEW USER 'username'@'host' IDENTIFIED BY 'password';",
        correct: false,
      },
      {
        text: "ADD USER 'username'@'host' IDENTIFIED BY 'password';",
        correct: false,
      },
      {
        text: "MAKE USER 'username'@'host' IDENTIFIED BY 'password';",
        correct: false,
      },
    ],
  },
  {
    question: "Which statement is used to grant privileges to a user in MySQL?",
    answers: [
      { text: "GRANT", correct: true },
      { text: "ALLOW", correct: false },
      { text: "PERMIT", correct: false },
      { text: "GIVE", correct: false },
    ],
  },
  {
    question: "What does the AUTO_INCREMENT attribute do?",
    answers: [
      {
        text: "Automatically generates a unique number for each new record",
        correct: true,
      },
      {
        text: "Automatically generates a random value for each new record",
        correct: false,
      },
      {
        text: "Automatically increments the value of each record",
        correct: false,
      },
      { text: "Automatically resets the primary key value", correct: false },
    ],
  },
  {
    question: "How can you change the data type of a column in MySQL?",
    answers: [
      {
        text: "ALTER TABLE tableName MODIFY columnName newDataType;",
        correct: true,
      },
      {
        text: "ALTER TABLE tableName CHANGE columnName newDataType;",
        correct: false,
      },
      {
        text: "MODIFY TABLE tableName CHANGE columnName newDataType;",
        correct: false,
      },
      {
        text: "CHANGE TABLE tableName MODIFY columnName newDataType;",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which function is used to find the maximum value in a numeric column?",
    answers: [
      { text: "MAX()", correct: true },
      { text: "GREATEST()", correct: false },
      { text: "HIGHEST()", correct: false },
      { text: "UPPER()", correct: false },
    ],
  },
  {
    question: "What does the COUNT() function do in MySQL?",
    answers: [
      {
        text: "Returns the number of rows that match a specified criteria",
        correct: true,
      },
      { text: "Returns the sum of values in a numeric column", correct: false },
      {
        text: "Returns the average of values in a numeric column",
        correct: false,
      },
      { text: "Returns the minimum value in a numeric column", correct: false },
    ],
  },
  {
    question:
      "Which MySQL statement is used to update existing data in a table?",
    answers: [
      {
        text: "UPDATE tableName SET columnName = value WHERE condition;",
        correct: true,
      },
      {
        text: "MODIFY tableName SET columnName = value WHERE condition;",
        correct: false,
      },
      {
        text: "CHANGE tableName SET columnName = value WHERE condition;",
        correct: false,
      },
      {
        text: "ALTER tableName SET columnName = value WHERE condition;",
        correct: false,
      },
    ],
  },
];
//////////////////////////////////////  AI/ML   /////////////////////////////////////////////////////////////////////
const AI_ML = [
  {
    question: "What does AI stand for?",
    answers: [
      { text: "Artificial Intelligence", correct: true },
      { text: "Automated Information", correct: false },
      { text: "Artificial Information", correct: false },
      { text: "Automated Intelligence", correct: false },
    ],
  },
  {
    question: "What is the main goal of machine learning?",
    answers: [
      { text: "To learn from data and make predictions", correct: true },
      { text: "To solve complex mathematical problems", correct: false },
      { text: "To perform physical tasks", correct: false },
      { text: "To simulate human emotions", correct: false },
    ],
  },
  {
    question: "Which of the following is a supervised learning algorithm?",
    answers: [
      { text: "Decision Trees", correct: true },
      { text: "K-Means Clustering", correct: false },
      { text: "Principal Component Analysis", correct: false },
      { text: "Apriori Algorithm", correct: false },
    ],
  },
  {
    question: "What is a neural network?",
    answers: [
      {
        text: "A set of algorithms modeled after the human brain",
        correct: true,
      },
      { text: "A network of interconnected computers", correct: false },
      { text: "A software tool for data visualization", correct: false },
      { text: "A database management system", correct: false },
    ],
  },
  {
    question:
      "Which term describes the process of training a machine learning model using labeled data?",
    answers: [
      { text: "Supervised Learning", correct: true },
      { text: "Unsupervised Learning", correct: false },
      { text: "Reinforcement Learning", correct: false },
      { text: "Semi-Supervised Learning", correct: false },
    ],
  },
  {
    question: "What is overfitting in machine learning?",
    answers: [
      {
        text: "A model that performs well on training data but poorly on new data",
        correct: true,
      },
      {
        text: "A model that performs well on both training and new data",
        correct: false,
      },
      {
        text: "A model that performs poorly on both training and new data",
        correct: false,
      },
      {
        text: "A model that performs poorly on training data but well on new data",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is a technique for reducing overfitting?",
    answers: [
      { text: "Regularization", correct: true },
      { text: "Increasing the number of features", correct: false },
      { text: "Reducing the size of the dataset", correct: false },
      { text: "Using a deeper neural network", correct: false },
    ],
  },
  {
    question: "What is a confusion matrix used for?",
    answers: [
      {
        text: "Evaluating the performance of a classification algorithm",
        correct: true,
      },
      { text: "Measuring the accuracy of a regression model", correct: false },
      { text: "Visualizing data distributions", correct: false },
      { text: "Detecting anomalies in data", correct: false },
    ],
  },
  {
    question: "Which of the following is an unsupervised learning algorithm?",
    answers: [
      { text: "K-Means Clustering", correct: true },
      { text: "Linear Regression", correct: false },
      { text: "Support Vector Machines", correct: false },
      { text: "Logistic Regression", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the activation function in a neural network?",
    answers: [
      { text: "To introduce non-linearity into the model", correct: true },
      { text: "To initialize the weights of the model", correct: false },
      { text: "To optimize the learning rate", correct: false },
      { text: "To reduce the dimensionality of the data", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a reinforcement learning problem?",
    answers: [
      { text: "Playing a game of chess", correct: true },
      { text: "Classifying images of cats and dogs", correct: false },
      { text: "Predicting house prices", correct: false },
      { text: "Clustering customer data", correct: false },
    ],
  },
  {
    question: "What is a hyperparameter in machine learning?",
    answers: [
      {
        text: "A parameter whose value is set before the learning process begins",
        correct: true,
      },
      {
        text: "A parameter that is learned during the training process",
        correct: false,
      },
      {
        text: "A parameter that controls the size of the dataset",
        correct: false,
      },
      {
        text: "A parameter that determines the output of the model",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is a popular library for machine learning in Python?",
    answers: [
      { text: "scikit-learn", correct: true },
      { text: "NumPy", correct: false },
      { text: "Pandas", correct: false },
      { text: "Matplotlib", correct: false },
    ],
  },
  {
    question: "What is the goal of clustering in machine learning?",
    answers: [
      { text: "To group similar data points together", correct: true },
      {
        text: "To classify data points into predefined categories",
        correct: false,
      },
      { text: "To predict continuous values", correct: false },
      { text: "To reduce the dimensionality of data", correct: false },
    ],
  },
  {
    question: "Which term describes the error on the training data?",
    answers: [
      { text: "Training Error", correct: true },
      { text: "Validation Error", correct: false },
      { text: "Test Error", correct: false },
      { text: "Generalization Error", correct: false },
    ],
  },
  {
    question: "What is the purpose of cross-validation in machine learning?",
    answers: [
      {
        text: "To assess how well a model will generalize to an independent dataset",
        correct: true,
      },
      { text: "To reduce the dimensionality of the dataset", correct: false },
      { text: "To increase the complexity of the model", correct: false },
      { text: "To improve the training error", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of recurrent neural network?",
    answers: [
      { text: "Long Short-Term Memory (LSTM)", correct: true },
      { text: "Convolutional Neural Network (CNN)", correct: false },
      { text: "Feedforward Neural Network", correct: false },
      { text: "Generative Adversarial Network (GAN)", correct: false },
    ],
  },
  {
    question: "What is the purpose of the learning rate in gradient descent?",
    answers: [
      { text: "To control the step size in each iteration", correct: true },
      { text: "To determine the number of iterations", correct: false },
      { text: "To initialize the weights of the model", correct: false },
      { text: "To optimize the cost function", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a commonly used loss function for regression problems?",
    answers: [
      { text: "Mean Squared Error (MSE)", correct: true },
      { text: "Cross-Entropy Loss", correct: false },
      { text: "Hinge Loss", correct: false },
      { text: "Log Loss", correct: false },
    ],
  },
  {
    question:
      "Which metric is used to evaluate the performance of a classification model?",
    answers: [
      { text: "Accuracy", correct: true },
      { text: "Mean Absolute Error", correct: false },
      { text: "Root Mean Squared Error", correct: false },
      { text: "R-squared", correct: false },
    ],
  },
];
//////////////////////////////////////////////   D   S   A   ////////////////////////////////////////////////////////
const DSA = [
  {
    question:
      "What is the time complexity of inserting an element at the end of an array of size n, assuming no resizing is needed?",
    answers: [
      { text: "O(1)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: false },
      { text: "O(n^2)", correct: false },
    ],
  },
  {
    question:
      "Which data structure allows you to access its elements in Last-In-First-Out (LIFO) order?",
    answers: [
      { text: "Stack", correct: true },
      { text: "Queue", correct: false },
      { text: "Heap", correct: false },
      { text: "Tree", correct: false },
    ],
  },
  {
    question:
      "What is the worst-case time complexity of searching for an element in a binary search tree (BST) of size n?",
    answers: [
      { text: "O(n)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question:
      "Which sorting algorithm has a worst-case time complexity of O(n^2)?",
    answers: [
      { text: "Bubble Sort", correct: true },
      { text: "Merge Sort", correct: false },
      { text: "Quick Sort", correct: false },
      { text: "Insertion Sort", correct: false },
    ],
  },
  {
    question: "What is the main advantage of using a hash table?",
    answers: [
      {
        text: "Average O(1) time complexity for insert, delete, and search operations",
        correct: true,
      },
      {
        text: "Guaranteed O(1) time complexity for all operations",
        correct: false,
      },
      { text: "Allows for efficient sorting of elements", correct: false },
      {
        text: "Supports dynamic resizing without performance degradation",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which data structure uses two pointers, usually named 'slow' and 'fast', to detect cycles in a linked list?",
    answers: [
      { text: "Floyd's Tortoise and Hare algorithm", correct: true },
      { text: "Depth-First Search (DFS)", correct: false },
      { text: "Breadth-First Search (BFS)", correct: false },
      { text: "Dijkstra's algorithm", correct: false },
    ],
  },
  {
    question:
      "What is the worst-case time complexity of binary search on a sorted array of size n?",
    answers: [
      { text: "O(log n)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question:
      "Which data structure is typically used to implement a priority queue?",
    answers: [
      { text: "Heap", correct: true },
      { text: "Stack", correct: false },
      { text: "Queue", correct: false },
      { text: "Linked List", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using a doubly linked list over a singly linked list?",
    answers: [
      {
        text: "Allows for efficient deletion of nodes without traversal from the head",
        correct: true,
      },
      { text: "Requires less memory per node", correct: false },
      { text: "Simplifies traversal operations", correct: false },
      { text: "Provides constant-time access to any element", correct: false },
    ],
  },
  {
    question:
      "Which search algorithm is guaranteed to find the shortest path in an unweighted graph?",
    answers: [
      { text: "Breadth-First Search (BFS)", correct: true },
      { text: "Depth-First Search (DFS)", correct: false },
      { text: "Dijkstra's algorithm", correct: false },
      { text: "A* search algorithm", correct: false },
    ],
  },
  {
    question:
      "What is the worst-case time complexity of the Quick Sort algorithm?",
    answers: [
      { text: "O(n^2)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question:
      "Which data structure uses First-In-First-Out (FIFO) order for its operations?",
    answers: [
      { text: "Queue", correct: true },
      { text: "Stack", correct: false },
      { text: "Heap", correct: false },
      { text: "Tree", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using an AVL tree over a binary search tree?",
    answers: [
      {
        text: "Guaranteed O(log n) time complexity for all operations",
        correct: true,
      },
      { text: "Requires less memory per node", correct: false },
      { text: "Allows for efficient range queries", correct: false },
      { text: "Simplifies insertion and deletion operations", correct: false },
    ],
  },
  {
    question:
      "Which sorting algorithm is known for its ability to efficiently sort nearly sorted arrays or small arrays?",
    answers: [
      { text: "Insertion Sort", correct: true },
      { text: "Merge Sort", correct: false },
      { text: "Heap Sort", correct: false },
      { text: "Bubble Sort", correct: false },
    ],
  },
  {
    question: "What is the purpose of Big-O notation in computer science?",
    answers: [
      {
        text: "To describe the asymptotic upper bound on the time complexity of algorithms",
        correct: true,
      },
      {
        text: "To calculate the exact number of operations performed by an algorithm",
        correct: false,
      },
      {
        text: "To compare the memory usage of different data structures",
        correct: false,
      },
      {
        text: "To measure the efficiency of parallel algorithms",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which algorithm is used to find the minimum spanning tree in a weighted, connected graph?",
    answers: [
      { text: "Kruskal's algorithm", correct: true },
      { text: "Depth-First Search (DFS)", correct: false },
      { text: "Breadth-First Search (BFS)", correct: false },
      { text: "Prim's algorithm", correct: false },
    ],
  },
  {
    question: "What is the primary advantage of using a trie data structure?",
    answers: [
      { text: "Efficient prefix search operations", correct: true },
      { text: "Efficient insertion and deletion operations", correct: false },
      {
        text: "Guaranteed O(1) time complexity for all operations",
        correct: false,
      },
      {
        text: "Supports dynamic resizing without performance degradation",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which data structure is typically used to implement a least recently used (LRU) cache?",
    answers: [
      { text: "Doubly Linked List", correct: true },
      { text: "Hash Table", correct: false },
      { text: "Priority Queue", correct: false },
      { text: "Binary Search Tree", correct: false },
    ],
  },
  {
    question: "What is the purpose of the Depth-First Search (DFS) algorithm?",
    answers: [
      {
        text: "To traverse or search a graph in depth-first order",
        correct: true,
      },
      { text: "To find the shortest path in a weighted graph", correct: false },
      {
        text: "To find the strongly connected components in a graph",
        correct: false,
      },
      { text: "To detect cycles in a directed graph", correct: false },
    ],
  },
  {
    question:
      "Which data structure uses both breadth-first and depth-first search techniques for efficient searching?",
    answers: [
      { text: "Graph", correct: true },
      { text: "Heap", correct: false },
      { text: "Stack", correct: false },
      { text: "Queue", correct: false },
    ],
  },
];
////////////////////////////////////////////  O  O  Ps  /////////////////////////////////////////////////////////////
const OOPs = [
  {
    question: "What is encapsulation in object-oriented programming?",
    answers: [
      {
        text: "Combining data and functions that manipulate the data into a single unit",
        correct: true,
      },
      { text: "Protecting data from unauthorized access", correct: false },
      { text: "Hiding the implementation details of a class", correct: false },
      { text: "Creating multiple instances of a class", correct: false },
    ],
  },
  {
    question:
      "Which concept in OOP refers to the ability of an object to take multiple forms?",
    answers: [
      { text: "Polymorphism", correct: true },
      { text: "Inheritance", correct: false },
      { text: "Abstraction", correct: false },
      { text: "Encapsulation", correct: false },
    ],
  },
  {
    question:
      "Inheritance in OOP allows a class to inherit properties and behaviors from another class. What term describes the class that inherits these properties?",
    answers: [
      { text: "Subclass", correct: true },
      { text: "Superclass", correct: false },
      { text: "Derived class", correct: false },
      { text: "Parent class", correct: false },
    ],
  },
  {
    question:
      "Which OOP principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program?",
    answers: [
      { text: "Liskov Substitution Principle (LSP)", correct: true },
      { text: "Open/Closed Principle (OCP)", correct: false },
      { text: "Single Responsibility Principle (SRP)", correct: false },
      { text: "Interface Segregation Principle (ISP)", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of abstraction in object-oriented programming?",
    answers: [
      {
        text: "Hiding complex implementation details and showing only the essential features of an object",
        correct: true,
      },
      {
        text: "Combining data and functions that manipulate the data into a single unit",
        correct: false,
      },
      {
        text: "Allowing a class to inherit properties and behaviors from another class",
        correct: false,
      },
      { text: "Enabling an object to take multiple forms", correct: false },
    ],
  },
  {
    question:
      "Which term describes the process of creating a new object based on an existing object?",
    answers: [
      { text: "Cloning", correct: true },
      { text: "Instantiation", correct: false },
      { text: "Polymorphism", correct: false },
      { text: "Overloading", correct: false },
    ],
  },
  {
    question:
      "Which OOP concept emphasizes the separation of concerns by assigning each class a single responsibility?",
    answers: [
      { text: "Single Responsibility Principle (SRP)", correct: true },
      { text: "Open/Closed Principle (OCP)", correct: false },
      { text: "Liskov Substitution Principle (LSP)", correct: false },
      { text: "Interface Segregation Principle (ISP)", correct: false },
    ],
  },
  {
    question:
      "What is the primary benefit of using interfaces in object-oriented programming?",
    answers: [
      {
        text: "Enforcing a contract that classes implementing the interface must follow",
        correct: true,
      },
      {
        text: "Enabling a class to inherit properties and behaviors from another class",
        correct: false,
      },
      {
        text: "Supporting the ability of an object to take multiple forms",
        correct: false,
      },
      { text: "Providing a blueprint for creating objects", correct: false },
    ],
  },
  {
    question: "What is an abstract class in OOP?",
    answers: [
      {
        text: "A class that cannot be instantiated and serves as a base for other classes",
        correct: true,
      },
      {
        text: "A class that allows for multiple instances to be created from it",
        correct: false,
      },
      {
        text: "A class that inherits properties and behaviors from another class",
        correct: false,
      },
      {
        text: "A class that hides the implementation details of its methods",
        correct: false,
      },
    ],
  },
  {
    question:
      "What does the acronym SOLID stand for in object-oriented design?",
    answers: [
      {
        text: "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion",
        correct: true,
      },
      {
        text: "Simple, Object-Oriented, Logical, Inheritance, Design",
        correct: false,
      },
      {
        text: "Structured, Objectives, Layered, Inheritance, Development",
        correct: false,
      },
      {
        text: "Systematic, Ongoing, Logical, Iterative, Development",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which OOP principle suggests that a software entity should be open for extension but closed for modification?",
    answers: [
      { text: "Open/Closed Principle (OCP)", correct: true },
      { text: "Liskov Substitution Principle (LSP)", correct: false },
      { text: "Single Responsibility Principle (SRP)", correct: false },
      { text: "Interface Segregation Principle (ISP)", correct: false },
    ],
  },
  {
    question: "What is composition in object-oriented programming?",
    answers: [
      {
        text: "Combining objects of different classes to create more complex objects",
        correct: true,
      },
      {
        text: "Allowing a class to inherit properties and behaviors from another class",
        correct: false,
      },
      { text: "Enabling an object to take multiple forms", correct: false },
      {
        text: "Hiding complex implementation details and showing only the essential features of an object",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which term describes the ability of a class to provide different implementations of its methods based on the input parameters?",
    answers: [
      { text: "Method Overloading", correct: true },
      { text: "Method Overriding", correct: false },
      { text: "Method Hiding", correct: false },
      { text: "Method Polymorphism", correct: false },
    ],
  },
  {
    question: "In OOP, what is a static method?",
    answers: [
      {
        text: "A method that belongs to the class rather than to instances of the class",
        correct: true,
      },
      { text: "A method that can be overridden by subclasses", correct: false },
      {
        text: "A method that is declared in an abstract class",
        correct: false,
      },
      {
        text: "A method that is available only within a specific package",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the purpose of the 'super' keyword in Java and similar languages?",
    answers: [
      {
        text: "To refer to the superclass of the current object",
        correct: true,
      },
      { text: "To specify access modifiers for class members", correct: false },
      { text: "To define a constructor for a class", correct: false },
      { text: "To prevent a class from being inherited", correct: false },
    ],
  },
  {
    question:
      "What is the primary difference between composition and inheritance in object-oriented programming?",
    answers: [
      {
        text: "Composition allows for more flexible relationships between classes compared to inheritance",
        correct: true,
      },
      {
        text: "Inheritance allows for more flexible relationships between classes compared to composition",
        correct: false,
      },
      {
        text: "Composition is used for creating multiple instances of a class",
        correct: false,
      },
      {
        text: "Inheritance is used for combining data and functions into a single unit",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which OOP concept allows you to implement different versions of a method in different classes using inheritance?",
    answers: [
      { text: "Method Overriding", correct: true },
      { text: "Method Overloading", correct: false },
      { text: "Method Hiding", correct: false },
      { text: "Method Polymorphism", correct: false },
    ],
  },
  {
    question:
      "What is the primary disadvantage of using inheritance in object-oriented programming?",
    answers: [
      {
        text: "It can lead to tight coupling between classes, making the system less flexible",
        correct: true,
      },
      {
        text: "It requires more memory per object compared to composition",
        correct: false,
      },
      {
        text: "It makes it difficult to hide implementation details of a class",
        correct: false,
      },
      {
        text: "It limits the ability to extend the functionality of a class",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which term describes the process of creating an instance of a class?",
    answers: [
      { text: "Instantiation", correct: true },
      { text: "Cloning", correct: false },
      { text: "Abstraction", correct: false },
      { text: "Polymorphism", correct: false },
    ],
  },
  {
    question:
      "What is the primary benefit of using constructors in object-oriented programming?",
    answers: [
      { text: "To initialize objects when they are created", correct: true },
      { text: "To define methods for accessing class members", correct: false },
      { text: "To enforce encapsulation of class data", correct: false },
      { text: "To provide a blueprint for creating objects", correct: false },
    ],
  },
];
////////////////////////////////////////  Operating System   ///////////////////////////////////////////////////////
const Operating_System = [
  {
    question: "What is an operating system?",
    answers: [
      {
        text: "Software that acts as an intermediary between user applications and computer hardware",
        correct: true,
      },
      {
        text: "A program that manages files and folders on a computer",
        correct: false,
      },
      { text: "An application used for browsing the internet", correct: false },
      { text: "A tool to write and execute computer programs", correct: false },
    ],
  },
  {
    question:
      "Which of the following is not a function of an operating system?",
    answers: [
      { text: "Memory management", correct: false },
      { text: "Disk formatting", correct: false },
      { text: "Word processing", correct: true },
      { text: "Process scheduling", correct: false },
    ],
  },
  {
    question: "What is virtual memory in an operating system?",
    answers: [
      {
        text: "A technique that allows the execution of processes that are not completely in memory",
        correct: true,
      },
      { text: "A type of memory used by virtual machines", correct: false },
      {
        text: "A memory management technique for organizing files",
        correct: false,
      },
      {
        text: "A type of memory that stores virtual addresses",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which scheduling algorithm provides the highest average turnaround time?",
    answers: [
      { text: "First-Come, First-Served (FCFS)", correct: true },
      { text: "Shortest Job Next (SJN)", correct: false },
      { text: "Round Robin (RR)", correct: false },
      { text: "Priority Scheduling", correct: false },
    ],
  },
  {
    question: "What is a deadlock in the context of operating systems?",
    answers: [
      {
        text: "A situation where two or more processes are unable to proceed because each is waiting for one of the others to finish some operation",
        correct: true,
      },
      {
        text: "A situation where a process continues to hold onto resources indefinitely",
        correct: false,
      },
      {
        text: "A condition where a process loses control of the CPU and is unable to regain it",
        correct: false,
      },
      {
        text: "A type of error that occurs during file system operations",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which memory management scheme allows processes to be swapped in and out of main memory?",
    answers: [
      { text: "Paging", correct: false },
      { text: "Segmentation", correct: false },
      { text: "Swapping", correct: true },
      { text: "Virtual memory", correct: false },
    ],
  },
  {
    question: "What is a process in the context of operating systems?",
    answers: [
      { text: "A program in execution", correct: true },
      { text: "A unit of data storage", correct: false },
      { text: "A type of file system", correct: false },
      { text: "A type of CPU scheduling algorithm", correct: false },
    ],
  },
  {
    question: "What is a file system?",
    answers: [
      {
        text: "A method for storing and organizing computer files and their data",
        correct: true,
      },
      { text: "An algorithm for scheduling disk operations", correct: false },
      { text: "A type of memory used by virtual machines", correct: false },
      {
        text: "A technique for preventing data loss in case of a system crash",
        correct: false,
      },
    ],
  },
  {
    question: "Which type of file system is commonly used in Linux?",
    answers: [
      { text: "Ext4", correct: true },
      { text: "NTFS", correct: false },
      { text: "FAT32", correct: false },
      { text: "HFS+", correct: false },
    ],
  },
  {
    question: "What is a system call?",
    answers: [
      {
        text: "An interface provided by the operating system to allow user-level processes to request services from the kernel",
        correct: true,
      },
      { text: "A command used to launch applications", correct: false },
      {
        text: "A function used to allocate memory dynamically",
        correct: false,
      },
      { text: "A technique for managing multiple CPUs", correct: false },
    ],
  },
  {
    question: "What is a semaphore in operating systems?",
    answers: [
      {
        text: "A variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system",
        correct: true,
      },
      { text: "A type of CPU scheduling algorithm", correct: false },
      {
        text: "A memory management technique for organizing files",
        correct: false,
      },
      {
        text: "A technique for preventing data loss in case of a system crash",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of a device driver in an operating system?",
    answers: [
      {
        text: "To allow communication between the operating system and hardware devices",
        correct: true,
      },
      { text: "To manage memory allocation and deallocation", correct: false },
      {
        text: "To schedule processes for execution on the CPU",
        correct: false,
      },
      {
        text: "To provide an interface for users to interact with the system",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of operating system allows multiple users to access a computer system concurrently?",
    answers: [
      { text: "Time-sharing system", correct: true },
      { text: "Single-user system", correct: false },
      { text: "Real-time operating system", correct: false },
      { text: "Distributed operating system", correct: false },
    ],
  },
  {
    question: "What is thrashing in operating systems?",
    answers: [
      {
        text: "A condition where excessive paging occurs, causing a severe decrease in system performance",
        correct: true,
      },
      {
        text: "A technique used to manage multiple threads in a process",
        correct: false,
      },
      {
        text: "A deadlock situation involving multiple processes",
        correct: false,
      },
      { text: "A scheduling algorithm for real-time systems", correct: false },
    ],
  },
  {
    question:
      "Which type of CPU scheduling algorithm provides the minimum average waiting time for processes?",
    answers: [
      { text: "Shortest Job Next (SJN)", correct: true },
      { text: "First-Come, First-Served (FCFS)", correct: false },
      { text: "Round Robin (RR)", correct: false },
      { text: "Priority Scheduling", correct: false },
    ],
  },
  {
    question: "What is a kernel in an operating system?",
    answers: [
      {
        text: "The core component of the operating system that provides basic services for all other parts",
        correct: true,
      },
      {
        text: "A user-level program used to manage files and folders",
        correct: false,
      },
      {
        text: "A type of device driver used to interface with hardware devices",
        correct: false,
      },
      { text: "A method for managing memory allocation", correct: false },
    ],
  },
  {
    question:
      "Which memory management technique divides memory into fixed-size partitions?",
    answers: [
      { text: "Fixed Partitioning", correct: true },
      { text: "Dynamic Partitioning", correct: false },
      { text: "Paging", correct: false },
      { text: "Segmentation", correct: false },
    ],
  },
  {
    question: "What is a page fault in virtual memory?",
    answers: [
      {
        text: "A trap to the software raised by the hardware when a process accesses a page that is not mapped",
        correct: true,
      },
      { text: "An error in the disk scheduling algorithm", correct: false },
      {
        text: "A condition where a process cannot proceed due to lack of available pages",
        correct: false,
      },
      {
        text: "A deadlock situation involving virtual memory allocation",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of an interrupt in operating systems?",
    answers: [
      {
        text: "To signal the processor to suspend its current execution and handle the event",
        correct: true,
      },
      { text: "To manage memory allocation and deallocation", correct: false },
      {
        text: "To synchronize access to shared resources in a multi-threaded environment",
        correct: false,
      },
      {
        text: "To allow communication between the operating system and hardware devices",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which disk scheduling algorithm provides the shortest average seek time?",
    answers: [
      { text: "Shortest Seek Time First (SSTF)", correct: true },
      { text: "First-Come, First-Served (FCFS)", correct: false },
      { text: "Round Robin (RR)", correct: false },
      { text: "Priority Scheduling", correct: false },
    ],
  },
];
//////////////////////////////////////////   Compiler Design  ///////////////////////////////////////////////////////
const Compiler_Design = [
  {
    question: "What is a compiler?",
    answers: [
      {
        text: "A program that translates high-level source code into machine code",
        correct: true,
      },
      { text: "A tool for debugging software applications", correct: false },
      {
        text: "A device used to convert analog signals into digital signals",
        correct: false,
      },
      { text: "An algorithm for optimizing database queries", correct: false },
    ],
  },
  {
    question: "What are the main phases of a compiler in order?",
    answers: [
      {
        text: "Lexical analysis, syntax analysis, semantic analysis, optimization, code generation",
        correct: true,
      },
      {
        text: "Optimization, code generation, syntax analysis, lexical analysis, semantic analysis",
        correct: false,
      },
      {
        text: "Syntax analysis, lexical analysis, code generation, optimization, semantic analysis",
        correct: false,
      },
      {
        text: "Code generation, optimization, lexical analysis, syntax analysis, semantic analysis",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of lexical analysis in a compiler?",
    answers: [
      {
        text: "To convert a sequence of characters into a sequence of tokens",
        correct: true,
      },
      {
        text: "To generate optimized code for the target machine",
        correct: false,
      },
      {
        text: "To analyze the syntactic structure of the source program",
        correct: false,
      },
      { text: "To perform semantic checks on the program", correct: false },
    ],
  },
  {
    question: "What is a token in compiler design?",
    answers: [
      {
        text: "A category of lexemes that represent the basic building blocks of a program",
        correct: true,
      },
      {
        text: "A type of data structure used for storing intermediate code",
        correct: false,
      },
      {
        text: "An optimization technique used during code generation",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
    ],
  },
  {
    question: "What does syntax analysis (parsing) do in a compiler?",
    answers: [
      {
        text: "To check whether the tokens generated by lexical analysis form valid statements in the programming language",
        correct: true,
      },
      {
        text: "To translate intermediate code into machine code",
        correct: false,
      },
      { text: "To perform optimizations on the code", correct: false },
      {
        text: "To manage the allocation and deallocation of memory",
        correct: false,
      },
    ],
  },
  {
    question: "What is semantic analysis in compiler design?",
    answers: [
      {
        text: "To check whether the statements and expressions have a meaning according to the rules of the programming language",
        correct: true,
      },
      {
        text: "To generate optimized code for the target machine",
        correct: false,
      },
      {
        text: "To convert intermediate code into assembly code",
        correct: false,
      },
      { text: "To perform syntax checks on the program", correct: false },
    ],
  },
  {
    question: "What is the purpose of optimization in compiler design?",
    answers: [
      {
        text: "To improve the efficiency and performance of the generated code",
        correct: true,
      },
      {
        text: "To generate intermediate code from the source program",
        correct: false,
      },
      { text: "To perform syntax checks on the program", correct: false },
      {
        text: "To manage the allocation and deallocation of memory",
        correct: false,
      },
    ],
  },
  {
    question: "What does code generation do in a compiler?",
    answers: [
      {
        text: "To translate intermediate code into machine code for a specific computer architecture",
        correct: true,
      },
      {
        text: "To analyze the syntactic structure of the source program",
        correct: false,
      },
      { text: "To perform optimizations on the code", correct: false },
      {
        text: "To convert high-level source code into intermediate code",
        correct: false,
      },
    ],
  },
  {
    question: "What is the difference between compiler and interpreter?",
    answers: [
      {
        text: "A compiler translates high-level source code into machine code, while an interpreter executes high-level source code directly",
        correct: true,
      },
      {
        text: "A compiler and an interpreter perform the same functions in software development",
        correct: false,
      },
      {
        text: "A compiler and an interpreter are different names for the same software tool",
        correct: false,
      },
      {
        text: "A compiler translates machine code into high-level source code, while an interpreter translates high-level source code into machine code",
        correct: false,
      },
    ],
  },
  {
    question: "What is static vs dynamic linking in compiler design?",
    answers: [
      {
        text: "Static linking links library code to the executable at compile time, while dynamic linking links library code at runtime",
        correct: true,
      },
      {
        text: "Static linking links library code at runtime, while dynamic linking links library code at compile time",
        correct: false,
      },
      {
        text: "Static linking does not link library code to the executable, while dynamic linking links library code at runtime",
        correct: false,
      },
      {
        text: "Static linking and dynamic linking both refer to the same process in compiler design",
        correct: false,
      },
    ],
  },
  {
    question: "What is a syntax-directed translation?",
    answers: [
      {
        text: "A method of translation that uses the syntax of the source language to generate the target language code",
        correct: true,
      },
      {
        text: "A technique for optimizing code generation in compilers",
        correct: false,
      },
      {
        text: "A type of semantic analysis used in compiler design",
        correct: false,
      },
      {
        text: "A method for managing memory allocation in the compiler",
        correct: false,
      },
    ],
  },
  {
    question: "What is bootstrapping in compiler design?",
    answers: [
      {
        text: "The process of writing a compiler for a programming language in the same language it compiles",
        correct: true,
      },
      {
        text: "A technique for converting intermediate code into machine code",
        correct: false,
      },
      {
        text: "The process of generating optimized code for the target machine",
        correct: false,
      },
      {
        text: "A method for managing memory allocation in the compiler",
        correct: false,
      },
    ],
  },
  {
    question: "What is a symbol table in compiler design?",
    answers: [
      {
        text: "A data structure that stores information about identifiers (variables, functions, etc.) in a program",
        correct: true,
      },
      {
        text: "A type of intermediate representation used during code generation",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "An optimization technique used during code optimization",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the role of a parser generator (like Yacc/Bison) in compiler design?",
    answers: [
      {
        text: "To generate the syntax analyzer (parser) based on the grammar rules specified by the user",
        correct: true,
      },
      {
        text: "To optimize the generated code for the target machine",
        correct: false,
      },
      {
        text: "To convert intermediate code into machine code",
        correct: false,
      },
      {
        text: "To manage the allocation and deallocation of memory",
        correct: false,
      },
    ],
  },
  {
    question: "What is a parse tree (or syntax tree) in compiler design?",
    answers: [
      {
        text: "A hierarchical representation of the syntactic structure of a program",
        correct: true,
      },
      {
        text: "A data structure used to store intermediate code",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "An optimization technique used during code generation",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of intermediate code in compiler design?",
    answers: [
      {
        text: "To provide a platform-independent representation of the source program before generating machine code",
        correct: true,
      },
      {
        text: "To manage the allocation and deallocation of memory",
        correct: false,
      },
      {
        text: "To convert high-level source code into assembly code",
        correct: false,
      },
      {
        text: "To analyze the syntactic structure of the source program",
        correct: false,
      },
    ],
  },
  {
    question: "What is register allocation in compiler design?",
    answers: [
      {
        text: "The process of assigning variables to registers during code generation to optimize execution speed",
        correct: true,
      },
      {
        text: "A method for converting intermediate code into machine code",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "An optimization technique used during code optimization",
        correct: false,
      },
    ],
  },
  {
    question: "What is garbage collection in compiler design?",
    answers: [
      {
        text: "A process that automatically reclaims memory occupied by objects that are no longer in use by the program",
        correct: true,
      },
      {
        text: "A technique for optimizing code generation in compilers",
        correct: false,
      },
      {
        text: "A type of semantic analysis used in compiler design",
        correct: false,
      },
      {
        text: "A method for managing memory allocation in the compiler",
        correct: false,
      },
    ],
  },
  {
    question: "What is an attribute grammar in compiler design?",
    answers: [
      {
        text: "A formalism for describing the syntax and semantics of programming languages using attributes associated with grammar rules",
        correct: true,
      },
      {
        text: "A method for generating optimized code for the target machine",
        correct: false,
      },
      {
        text: "A technique for converting intermediate code into machine code",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
    ],
  },
  {
    question: "What is loop optimization in compiler design?",
    answers: [
      {
        text: "A set of techniques to optimize the execution speed of loops in the generated code",
        correct: true,
      },
      {
        text: "A method for converting intermediate code into machine code",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "An optimization technique used during code generation",
        correct: false,
      },
    ],
  },
  {
    question: "What is dead code elimination in compiler design?",
    answers: [
      {
        text: "A process to remove code that does not affect the output of the program",
        correct: true,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "An optimization technique used during code optimization",
        correct: false,
      },
      {
        text: "A method for converting intermediate code into machine code",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of a lexer in compiler design?",
    answers: [
      {
        text: "To break the input program into tokens (lexical analysis)",
        correct: true,
      },
      {
        text: "To generate intermediate code for the source program",
        correct: false,
      },
      { text: "To perform syntax checks on the program", correct: false },
      {
        text: "To optimize the generated code for the target machine",
        correct: false,
      },
    ],
  },
  {
    question: "What is control flow analysis in compiler design?",
    answers: [
      {
        text: "A technique to analyze the order of execution of statements and optimize the generated code",
        correct: true,
      },
      {
        text: "A method for converting intermediate code into machine code",
        correct: false,
      },
      {
        text: "A technique for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "An optimization technique used during code generation",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the difference between front-end and back-end in compiler design?",
    answers: [
      {
        text: "Front-end deals with analyzing and parsing the source code, while back-end deals with optimization and code generation",
        correct: true,
      },
      {
        text: "Front-end deals with optimizing the code, while back-end deals with analyzing and parsing the source code",
        correct: false,
      },
      {
        text: "Front-end generates the intermediate code, while back-end generates machine code",
        correct: false,
      },
      {
        text: "Front-end translates the intermediate code into machine code, while back-end performs syntax analysis",
        correct: false,
      },
    ],
  },
  {
    question: "What is a semantic action in compiler design?",
    answers: [
      {
        text: "An action associated with a production rule in the grammar to perform semantic analysis",
        correct: true,
      },
      {
        text: "A method for managing memory allocation in the compiler",
        correct: false,
      },
      {
        text: "A technique for converting intermediate code into machine code",
        correct: false,
      },
      {
        text: "An optimization technique used during code generation",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of a code optimizer in compiler design?",
    answers: [
      {
        text: "To improve the efficiency and performance of the generated code",
        correct: true,
      },
      {
        text: "To manage the allocation and deallocation of memory",
        correct: false,
      },
      { text: "To perform syntax checks on the program", correct: false },
      {
        text: "To convert intermediate code into machine code",
        correct: false,
      },
    ],
  },
];

///////////////////////////////////////////// Cyber Security  ///////////////////////////////////////////////////////
const Cyber_Security = [
  {
    question: "What is phishing?",
    answers: [
      {
        text: "A method used to steal confidential information by disguising as a trustworthy entity.",
        correct: true,
      },
      {
        text: "A technique to encrypt data during transmission.",
        correct: false,
      },
      {
        text: "A type of malware that spreads through email attachments.",
        correct: false,
      },
      { text: "A hardware device used to secure networks.", correct: false },
    ],
  },

  {
    question: "Which of the following is NOT a type of malware?",
    answers: [
      { text: "Trojan", correct: false },
      { text: "Spyware", correct: false },
      { text: "SSL", correct: true },
      { text: "Ransomware", correct: false },
    ],
  },

  {
    question: "What does VPN stand for?",
    answers: [
      { text: "Virtual Private Network", correct: true },
      { text: "Virtual Public Network", correct: false },
      { text: "Very Private Network", correct: false },
      { text: "Verified Personal Network", correct: false },
    ],
  },

  {
    question: "What is a brute force attack?",
    answers: [
      {
        text: "A method to guess passwords by trying every possible combination.",
        correct: true,
      },
      {
        text: "A type of phishing attack using deceptive emails.",
        correct: false,
      },
      {
        text: "A malware that hijacks a computer's resources.",
        correct: false,
      },
      { text: "A hardware device used to breach firewalls.", correct: false },
    ],
  },

  {
    question: "What is a firewall?",
    answers: [
      {
        text: "A security system that controls network traffic based on set rules.",
        correct: true,
      },
      {
        text: "A software tool for encrypting files on a disk.",
        correct: false,
      },
      {
        text: "A device that scans and removes viruses from a network.",
        correct: false,
      },
      {
        text: "A type of phishing attack involving false advertisements.",
        correct: false,
      },
    ],
  },

  {
    question: "What does CSRF stand for?",
    answers: [
      { text: "Cross-Site Request Forgery", correct: true },
      { text: "Cross-Site Resource Form", correct: false },
      { text: "Client-Side Request Form", correct: false },
      { text: "Cyber Security Resource Finder", correct: false },
    ],
  },

  {
    question: "What is the purpose of encryption?",
    answers: [
      { text: "To protect data from unauthorized access.", correct: true },
      { text: "To speed up internet connection.", correct: false },
      { text: "To scan for vulnerabilities in software.", correct: false },
      { text: "To hide personal information on social media.", correct: false },
    ],
  },

  {
    question: "What is the role of a penetration tester?",
    answers: [
      {
        text: "To simulate cyber attacks to find security vulnerabilities.",
        correct: true,
      },
      { text: "To develop new encryption algorithms.", correct: false },
      { text: "To monitor network traffic for anomalies.", correct: false },
      {
        text: "To design firewalls and intrusion detection systems.",
        correct: false,
      },
    ],
  },

  {
    question: "What is two-factor authentication (2FA)?",
    answers: [
      {
        text: "A security method that requires two forms of identification to access an account.",
        correct: true,
      },
      {
        text: "A firewall that blocks traffic from two specific IP addresses.",
        correct: false,
      },
      {
        text: "A type of encryption using two different algorithms.",
        correct: false,
      },
      {
        text: "A hardware device that encrypts data on a local network.",
        correct: false,
      },
    ],
  },

  {
    question: "What is a DDoS attack?",
    answers: [
      {
        text: "Distributed Denial of Service attack, which floods a system with traffic to make it unavailable.",
        correct: true,
      },
      {
        text: "Digital Defense System used to protect networks from malware.",
        correct: false,
      },
      {
        text: "Data-driven Operating System attack that exploits vulnerabilities in OS software.",
        correct: false,
      },
      {
        text: "Domain-Driven Security system that monitors domain traffic for threats.",
        correct: false,
      },
    ],
  },

  {
    question: "What does SSL/TLS encryption secure?",
    answers: [
      { text: "Data transmitted over the internet.", correct: true },
      { text: "Internal network communications.", correct: false },
      { text: "Physical access to servers.", correct: false },
      { text: "Software licenses and updates.", correct: false },
    ],
  },

  {
    question: "What is social engineering in the context of cyber security?",
    answers: [
      {
        text: "Psychological manipulation of people to gain confidential information.",
        correct: true,
      },
      {
        text: "Automated system to simulate user interactions.",
        correct: false,
      },
      {
        text: "A type of malware disguised as legitimate software.",
        correct: false,
      },
      {
        text: "A hardware tool to test network vulnerabilities.",
        correct: false,
      },
    ],
  },

  {
    question: "What is ransomware?",
    answers: [
      {
        text: "Malicious software that encrypts files and demands payment for decryption.",
        correct: true,
      },
      {
        text: "A type of virus that spreads through email attachments.",
        correct: false,
      },
      {
        text: "A technique to steal login credentials by impersonating a legitimate website.",
        correct: false,
      },
      {
        text: "A hardware device used to monitor network traffic.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the main goal of cyber security?",
    answers: [
      {
        text: "To protect computer systems and networks from unauthorized access and attacks.",
        correct: true,
      },
      { text: "To develop new programming languages.", correct: false },
      {
        text: "To increase the speed of internet connections.",
        correct: false,
      },
      { text: "To analyze trends in social media usage.", correct: false },
    ],
  },

  {
    question: "What is the difference between white hat and black hat hackers?",
    answers: [
      {
        text: "White hat hackers use their skills for ethical hacking and security testing, while black hat hackers engage in illegal activities.",
        correct: true,
      },
      {
        text: "White hat hackers develop new encryption algorithms, while black hat hackers steal personal data.",
        correct: false,
      },
      {
        text: "White hat hackers work for government agencies, while black hat hackers work for private companies.",
        correct: false,
      },
      {
        text: "White hat hackers focus on network security, while black hat hackers focus on hardware vulnerabilities.",
        correct: false,
      },
    ],
  },

  {
    question: "What is network segmentation?",
    answers: [
      {
        text: "Dividing a network into smaller subnetworks to improve security and performance.",
        correct: true,
      },
      { text: "Scanning a network for vulnerabilities.", correct: false },
      {
        text: "Encrypting network traffic to prevent eavesdropping.",
        correct: false,
      },
      {
        text: "Securing wireless networks with strong passwords.",
        correct: false,
      },
    ],
  },

  {
    question: "What is a vulnerability assessment?",
    answers: [
      {
        text: "A process to identify and prioritize weaknesses in a computer system.",
        correct: true,
      },
      {
        text: "A method to prevent unauthorized access to a network.",
        correct: false,
      },
      {
        text: "A type of encryption used for secure data storage.",
        correct: false,
      },
      {
        text: "A hardware device that monitors network traffic.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the role of a security incident response team?",
    answers: [
      {
        text: "To handle and mitigate security breaches and incidents.",
        correct: true,
      },
      { text: "To develop new software patches and updates.", correct: false },
      {
        text: "To perform regular audits of network infrastructure.",
        correct: false,
      },
      { text: "To monitor social media for cyber threats.", correct: false },
    ],
  },

  {
    question: "What is the CIA Triad in cyber security?",
    answers: [
      { text: "Confidentiality, Integrity, Availability.", correct: true },
      {
        text: "Confidentiality, Identification, Authentication.",
        correct: false,
      },
      { text: "Cybersecurity, Intelligence, Analysis.", correct: false },
      { text: "Cybersecurity, Integrity, Authentication.", correct: false },
    ],
  },

  {
    question: "What is the role of encryption keys in data security?",
    answers: [
      {
        text: "Encryption keys are used to encrypt and decrypt data securely.",
        correct: true,
      },
      {
        text: "Encryption keys protect physical access to servers.",
        correct: false,
      },
      {
        text: "Encryption keys monitor network traffic for vulnerabilities.",
        correct: false,
      },
      {
        text: "Encryption keys secure wireless network connections.",
        correct: false,
      },
    ],
  },

  {
    question: "What is a honeypot?",
    answers: [
      {
        text: "A decoy system designed to lure hackers and study their techniques.",
        correct: true,
      },
      {
        text: "A type of malware that spreads through email attachments.",
        correct: false,
      },
      {
        text: "A hardware device used to monitor network traffic.",
        correct: false,
      },
      {
        text: "A social engineering technique to gain access to sensitive information.",
        correct: false,
      },
    ],
  },
];
/////////////////////////////////////////////////  I   o   T   //////////////////////////////////////////////////////
const IoT = [
  {
    question: "What does IoT stand for?",
    answers: [
      { text: "Internet of Technology", correct: false },
      { text: "Internet of Things", correct: true },
      { text: "Innovations of Technology", correct: false },
      { text: "Internet over Things", correct: false },
    ],
  },

  {
    question: "Which of the following is NOT a characteristic of IoT devices?",
    answers: [
      { text: "High computation power", correct: true },
      { text: "Connectivity to the internet", correct: false },
      { text: "Sensors and actuators", correct: false },
      { text: "Ability to collect and transmit data", correct: false },
    ],
  },

  {
    question: "What is a sensor in the context of IoT?",
    answers: [
      {
        text: "A device that detects physical or environmental changes and sends signals to other devices.",
        correct: true,
      },
      { text: "A small computer used to store IoT data.", correct: false },
      { text: "A software program that manages IoT networks.", correct: false },
      { text: "An algorithm used to analyze IoT data.", correct: false },
    ],
  },

  {
    question:
      "Which protocol is commonly used for communication between IoT devices and the cloud?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "MQTT", correct: true },
      { text: "SMTP", correct: false },
      { text: "SSH", correct: false },
    ],
  },

  {
    question: "What is edge computing in IoT?",
    answers: [
      {
        text: "Processing data closer to where it is generated rather than sending it across long routes to data centers.",
        correct: true,
      },
      {
        text: "A security measure to protect IoT devices from cyber attacks.",
        correct: false,
      },
      { text: "An algorithm used to encrypt IoT data.", correct: false },
      {
        text: "A network topology for connecting IoT devices.",
        correct: false,
      },
    ],
  },

  {
    question: "What is RFID (Radio Frequency Identification) used for in IoT?",
    answers: [
      {
        text: "To track and identify objects using radio waves.",
        correct: true,
      },
      {
        text: "To provide internet connectivity to IoT devices.",
        correct: false,
      },
      { text: "To analyze large amounts of IoT data.", correct: false },
      {
        text: "To secure IoT devices from unauthorized access.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the role of actuators in IoT?",
    answers: [
      {
        text: "To control physical devices based on data received from sensors.",
        correct: true,
      },
      {
        text: "To collect data from the environment and send it to IoT devices.",
        correct: false,
      },
      {
        text: "To process and analyze data collected by IoT devices.",
        correct: false,
      },
      { text: "To manage the power supply of IoT devices.", correct: false },
    ],
  },

  {
    question: "What are some common security challenges in IoT?",
    answers: [
      {
        text: "Device authentication, data encryption, and secure firmware updates.",
        correct: true,
      },
      { text: "Network bandwidth and latency issues.", correct: false },
      { text: "Battery life and power consumption.", correct: false },
      { text: "Cloud storage and data analytics.", correct: false },
    ],
  },

  {
    question: "What is a smart home?",
    answers: [
      {
        text: "A home equipped with IoT devices for automation and control.",
        correct: true,
      },
      {
        text: "A network of computers connected to the internet.",
        correct: false,
      },
      { text: "A security measure to protect IoT networks.", correct: false },
      {
        text: "A software platform for developing IoT applications.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the role of AI (Artificial Intelligence) in IoT?",
    answers: [
      {
        text: "To analyze IoT data and make autonomous decisions.",
        correct: true,
      },
      { text: "To secure IoT devices from cyber attacks.", correct: false },
      {
        text: "To provide internet connectivity to IoT devices.",
        correct: false,
      },
      {
        text: "To develop new protocols for IoT communication.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the IoT ecosystem?",
    answers: [
      {
        text: "The network of interconnected IoT devices, platforms, and services.",
        correct: true,
      },
      { text: "The physical components of IoT devices.", correct: false },
      { text: "The process of deploying IoT solutions.", correct: false },
      {
        text: "The legal framework governing IoT technologies.",
        correct: false,
      },
    ],
  },

  {
    question: "What is fog computing in IoT?",
    answers: [
      {
        text: "A decentralized computing infrastructure for IoT applications.",
        correct: true,
      },
      {
        text: "A security measure to protect IoT networks from cyber attacks.",
        correct: false,
      },
      {
        text: "A protocol used for communication between IoT devices and the cloud.",
        correct: false,
      },
      {
        text: "A type of encryption algorithm used in IoT devices.",
        correct: false,
      },
    ],
  },

  {
    question: "What is the role of blockchain in IoT?",
    answers: [
      {
        text: "To provide secure and transparent transactions between IoT devices.",
        correct: true,
      },
      { text: "To analyze data collected by IoT sensors.", correct: false },
      { text: "To develop new IoT devices and protocols.", correct: false },
      { text: "To optimize the performance of IoT networks.", correct: false },
    ],
  },

  {
    question: "What is M2M communication in IoT?",
    answers: [
      {
        text: "Machine-to-Machine communication, where IoT devices exchange data without human intervention.",
        correct: true,
      },
      {
        text: "Mobile-to-Mobile communication, using cellular networks for IoT connectivity.",
        correct: false,
      },
      {
        text: "Market-to-Market communication, facilitating trade between IoT vendors.",
        correct: false,
      },
      {
        text: "Media-to-Media communication, sharing multimedia content over IoT networks.",
        correct: false,
      },
    ],
  },

  {
    question: "What are some examples of consumer IoT devices?",
    answers: [
      {
        text: "Smart thermostats, wearable fitness trackers, and voice-activated assistants.",
        correct: true,
      },
      {
        text: "Industrial robots, automated manufacturing systems, and drones.",
        correct: false,
      },
      { text: "IoT sensors for environmental monitoring.", correct: false },
      {
        text: "Blockchain-enabled devices for secure data storage.",
        correct: false,
      },
    ],
  },

  {
    question: "What is a digital twin in IoT?",
    answers: [
      {
        text: "A virtual representation of a physical IoT device or system.",
        correct: true,
      },
      {
        text: "An encryption key used to secure IoT data transmissions.",
        correct: false,
      },
      { text: "A network protocol for IoT communication.", correct: false },
      { text: "A cloud-based platform for IoT analytics.", correct: false },
    ],
  },

  {
    question: "What is the role of big data in IoT?",
    answers: [
      {
        text: "To analyze large volumes of IoT data to extract valuable insights.",
        correct: true,
      },
      { text: "To secure IoT devices from cyber attacks.", correct: false },
      {
        text: "To provide internet connectivity to IoT devices.",
        correct: false,
      },
      {
        text: "To develop new protocols for IoT communication.",
        correct: false,
      },
    ],
  },

  {
    question: "What are some challenges of IoT security?",
    answers: [
      {
        text: "Device authentication, data encryption, and secure firmware updates.",
        correct: true,
      },
      { text: "Network bandwidth and latency issues.", correct: false },
      { text: "Battery life and power consumption.", correct: false },
      { text: "Cloud storage and data analytics.", correct: false },
    ],
  },

  {
    question: "What is the role of fog computing in IoT?",
    answers: [
      {
        text: "A decentralized computing infrastructure for IoT applications.",
        correct: true,
      },
      {
        text: "A security measure to protect IoT networks from cyber attacks.",
        correct: false,
      },
      {
        text: "A protocol used for communication between IoT devices and the cloud.",
        correct: false,
      },
      {
        text: "A type of encryption algorithm used in IoT devices.",
        correct: false,
      },
    ],
  },
];
/////////////////////////////////////////// ROBOTICS  ////////////////////////////////////////////////////////////////
const Robotics = [
  {
    question: "What is Robotics?",
    answers: [
      {
        text: "The study of artificial intelligence and its applications in machines.",
        correct: false,
      },
      {
        text: "A branch of engineering focused on the design and development of robots.",
        correct: true,
      },
      {
        text: "The practice of creating software for automated systems.",
        correct: false,
      },
      {
        text: "A field of medicine dealing with robotic surgeries.",
        correct: false,
      },
    ],
  },
  {
    question: "What is a robot?",
    answers: [
      {
        text: "A computer program that performs tasks on the internet.",
        correct: false,
      },
      {
        text: "A machine capable of carrying out complex actions automatically.",
        correct: true,
      },
      {
        text: "An artificial intelligence system that mimics human behavior.",
        correct: false,
      },
      {
        text: "A software application used to control industrial processes.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a type of robot based on locomotion?",
    answers: [
      { text: "Bipedal", correct: false },
      { text: "Quadrupedal", correct: false },
      { text: "Hexapodal", correct: false },
      { text: "Unipedal", correct: true },
    ],
  },
  {
    question: "What does AI stand for in the context of Robotics?",
    answers: [
      { text: "Artificial Initiative", correct: false },
      { text: "Automated Intelligence", correct: false },
      { text: "Artificial Intelligence", correct: true },
      { text: "Automated Interaction", correct: false },
    ],
  },
  {
    question: "Which programming languages are commonly used in Robotics?",
    answers: [
      { text: "Java and C#", correct: false },
      { text: "Python and JavaScript", correct: false },
      { text: "C++ and Python", correct: true },
      { text: "Ruby and PHP", correct: false },
    ],
  },
  {
    question: "What is the main advantage of using robots in manufacturing?",
    answers: [
      { text: "Reduced initial investment costs", correct: false },
      { text: "Increased human employment opportunities", correct: false },
      { text: "Higher precision and productivity", correct: true },
      { text: "Lower maintenance requirements", correct: false },
    ],
  },
  {
    question:
      "Which sensor type is commonly used for obstacle detection in mobile robots?",
    answers: [
      { text: "Infrared sensors", correct: true },
      { text: "Temperature sensors", correct: false },
      { text: "Pressure sensors", correct: false },
      { text: "Light sensors", correct: false },
    ],
  },
  {
    question: "What is ROS (Robot Operating System)?",
    answers: [
      { text: "A framework for developing web-based robots", correct: false },
      {
        text: "An open-source middleware for robotics applications",
        correct: true,
      },
      {
        text: "A proprietary operating system for industrial robots",
        correct: false,
      },
      {
        text: "A programming language specifically designed for robots",
        correct: false,
      },
    ],
  },
  {
    question: "What is the Uncanny Valley in Robotics?",
    answers: [
      { text: "A theoretical model of robot emotions", correct: false },
      {
        text: "A psychological concept related to human-like robots",
        correct: true,
      },
      {
        text: "A geographic area with high robot population density",
        correct: false,
      },
      {
        text: "A term for robots that are prone to malfunction",
        correct: false,
      },
    ],
  },
  {
    question: "Which industry commonly uses robotic exoskeletons?",
    answers: [
      { text: "Agriculture", correct: false },
      { text: "Construction", correct: false },
      { text: "Healthcare", correct: true },
      { text: "Retail", correct: false },
    ],
  },
  {
    question: "What is the purpose of haptic feedback in robotics?",
    answers: [
      { text: "To enhance visual recognition capabilities", correct: false },
      {
        text: "To provide physical interaction with virtual environments",
        correct: true,
      },
      { text: "To improve battery life in mobile robots", correct: false },
      { text: "To regulate robot motor functions", correct: false },
    ],
  },
  {
    question: "Which robotics concept is inspired by the behavior of ants?",
    answers: [
      { text: "Swarm robotics", correct: true },
      { text: "Modular robotics", correct: false },
      { text: "Soft robotics", correct: false },
      { text: "Biomimetic robotics", correct: false },
    ],
  },
  {
    question: "What is the function of a gripper in robotics?",
    answers: [
      { text: "To regulate robot motor functions", correct: false },
      { text: "To enhance robot vision capabilities", correct: false },
      { text: "To perform physical interaction with objects", correct: true },
      { text: "To provide wireless communication for robots", correct: false },
    ],
  },
  {
    question:
      "Which type of robot is commonly used for underwater exploration?",
    answers: [
      { text: "Quadcopter", correct: false },
      { text: "Submersible robot", correct: true },
      { text: "Humanoid robot", correct: false },
      { text: "Mars rover", correct: false },
    ],
  },
  {
    question: "What is the role of AI in autonomous robots?",
    answers: [
      { text: "To enhance physical strength", correct: false },
      { text: "To optimize energy consumption", correct: false },
      {
        text: "To make decisions and adapt to changing environments",
        correct: true,
      },
      { text: "To improve mechanical stability", correct: false },
    ],
  },
  {
    question:
      "Which engineering discipline integrates principles of robotics with biological systems?",
    answers: [
      { text: "Biomedical engineering", correct: true },
      { text: "Environmental engineering", correct: false },
      { text: "Civil engineering", correct: false },
      { text: "Chemical engineering", correct: false },
    ],
  },
  {
    question: "What is the significance of kinematics in robotics?",
    answers: [
      { text: "To control robot emotions", correct: false },
      { text: "To analyze robot motion", correct: true },
      { text: "To enhance robot navigation", correct: false },
      { text: "To optimize robot power consumption", correct: false },
    ],
  },
  {
    question:
      "Which mathematical concept is fundamental for robot path planning?",
    answers: [
      { text: "Trigonometry", correct: true },
      { text: "Calculus", correct: false },
      { text: "Linear algebra", correct: false },
      { text: "Statistics", correct: false },
    ],
  },
  {
    question: "What is the role of actuators in robotics?",
    answers: [
      { text: "To process sensory information", correct: false },
      { text: "To perform physical tasks or movements", correct: true },
      { text: "To regulate power distribution", correct: false },
      { text: "To analyze environmental data", correct: false },
    ],
  },
  {
    question:
      "Which sensor type is commonly used for distance measurement in robotics?",
    answers: [
      { text: "Pressure sensor", correct: false },
      { text: "Ultrasonic sensor", correct: true },
      { text: "Temperature sensor", correct: false },
      { text: "Light sensor", correct: false },
    ],
  },
  {
    question: "What are collaborative robots (cobots) designed for?",
    answers: [
      { text: "To replace human workers in manufacturing", correct: false },
      { text: "To assist and collaborate with human workers", correct: true },
      { text: "To compete in robot sports competitions", correct: false },
      { text: "To conduct deep-space exploration missions", correct: false },
    ],
  },
];
////////////////////////////////////////////  Image Processing   ////////////////////////////////////////////////////
const Image_Processing = [
  {
    question: "What is Image Processing?",
    answers: [
      { text: "The study of digital photography techniques.", correct: false },
      {
        text: "A field of computer science focusing on manipulating digital images.",
        correct: true,
      },
      {
        text: "The practice of enhancing physical photographs using chemicals.",
        correct: false,
      },
      {
        text: "A branch of electrical engineering dealing with power distribution.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following is NOT a fundamental step in Image Processing?",
    answers: [
      { text: "Image capture", correct: false },
      { text: "Image storage", correct: true },
      { text: "Image enhancement", correct: false },
      { text: "Image analysis", correct: false },
    ],
  },
  {
    question: "What is the purpose of Image Enhancement techniques?",
    answers: [
      { text: "To compress image data for storage.", correct: false },
      { text: "To remove noise and improve visual quality.", correct: true },
      { text: "To encrypt images for secure transmission.", correct: false },
      { text: "To analyze patterns and structures in images.", correct: false },
    ],
  },
  {
    question:
      "Which technique is used for removing the background of an image?",
    answers: [
      { text: "Image segmentation", correct: true },
      { text: "Image compression", correct: false },
      { text: "Image registration", correct: false },
      { text: "Image interpolation", correct: false },
    ],
  },
  {
    question: "Which image format supports lossless compression?",
    answers: [
      { text: "JPEG", correct: false },
      { text: "PNG", correct: true },
      { text: "GIF", correct: false },
      { text: "BMP", correct: false },
    ],
  },
  {
    question: "What is the primary goal of Image Compression?",
    answers: [
      { text: "To increase image resolution.", correct: false },
      {
        text: "To reduce file size while preserving image quality.",
        correct: true,
      },
      { text: "To apply artistic effects to images.", correct: false },
      { text: "To synchronize multiple images into one.", correct: false },
    ],
  },
  {
    question: "Which method is commonly used for Image Segmentation?",
    answers: [
      { text: "Edge detection", correct: true },
      { text: "Histogram equalization", correct: false },
      { text: "Fourier transform", correct: false },
      { text: "Median filtering", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of Morphological Operations in Image Processing?",
    answers: [
      { text: "To adjust brightness and contrast.", correct: false },
      { text: "To analyze texture and patterns.", correct: false },
      { text: "To manipulate image shapes and structures.", correct: true },
      { text: "To correct lens distortions.", correct: false },
    ],
  },
  {
    question: "Which technique is used for recognizing text in images?",
    answers: [
      { text: "Optical character recognition (OCR)", correct: true },
      { text: "Image warping", correct: false },
      { text: "Feature extraction", correct: false },
      { text: "Kernel methods", correct: false },
    ],
  },
  {
    question: "What is the role of Image Registration?",
    answers: [
      { text: "To classify images into different categories.", correct: false },
      {
        text: "To align multiple images into the same coordinate system.",
        correct: true,
      },
      { text: "To apply geometric transformations to images.", correct: false },
      { text: "To enhance image brightness and contrast.", correct: false },
    ],
  },
  {
    question:
      "Which technique is used for detecting and recognizing faces in images?",
    answers: [
      { text: "Histogram matching", correct: false },
      { text: "Principal component analysis (PCA)", correct: false },
      { text: "Haar cascade classifiers", correct: true },
      { text: "Gaussian blur", correct: false },
    ],
  },
  {
    question:
      "What does the term 'Feature Extraction' refer to in Image Processing?",
    answers: [
      { text: "Extracting prominent objects from an image.", correct: false },
      {
        text: "Identifying key points or patterns in an image.",
        correct: true,
      },
      { text: "Adjusting color and brightness levels.", correct: false },
      {
        text: "Transforming images into different file formats.",
        correct: false,
      },
    ],
  },
  {
    question: "Which method is used for image restoration from noisy images?",
    answers: [
      { text: "Histogram equalization", correct: false },
      { text: "Wiener filter", correct: true },
      { text: "Fourier transform", correct: false },
      { text: "Sobel edge detection", correct: false },
    ],
  },
  {
    question: "What is the purpose of Histogram Equalization?",
    answers: [
      { text: "To reduce image file size.", correct: false },
      { text: "To enhance image contrast.", correct: true },
      { text: "To compress image data for transmission.", correct: false },
      { text: "To remove unwanted noise from images.", correct: false },
    ],
  },
  {
    question: "Which technique is used for enhancing details in an image?",
    answers: [
      { text: "Blurring", correct: false },
      { text: "Sharpening", correct: true },
      { text: "Scaling", correct: false },
      { text: "Rotating", correct: false },
    ],
  },
  {
    question: "What is the role of Convolution in Image Processing?",
    answers: [
      { text: "To adjust color balance in images.", correct: false },
      { text: "To perform geometric transformations.", correct: false },
      { text: "To apply filters and masks to images.", correct: true },
      { text: "To segment images into regions.", correct: false },
    ],
  },
  {
    question: "Which technique is used for detecting edges in an image?",
    answers: [
      { text: "Gaussian blur", correct: false },
      { text: "Laplacian of Gaussian (LoG)", correct: false },
      { text: "Canny edge detector", correct: true },
      { text: "Morphological operations", correct: false },
    ],
  },
  {
    question: "What does the term 'Thresholding' refer to in Image Processing?",
    answers: [
      { text: "Adjusting image brightness and contrast.", correct: false },
      { text: "Segmenting an image based on pixel intensity.", correct: true },
      { text: "Removing noise from an image.", correct: false },
      { text: "Applying artistic filters to an image.", correct: false },
    ],
  },
  {
    question:
      "Which technique is used for converting color images to grayscale?",
    answers: [
      { text: "Histogram matching", correct: false },
      { text: "Pseudo-coloring", correct: false },
      { text: "Color space conversion", correct: true },
      { text: "Contrast stretching", correct: false },
    ],
  },
  {
    question: "What is the purpose of Fourier Transform in Image Processing?",
    answers: [
      { text: "To enhance image resolution.", correct: false },
      { text: "To analyze image textures.", correct: false },
      {
        text: "To convert images between different file formats.",
        correct: false,
      },
      { text: "To decompose images into frequency components.", correct: true },
    ],
  },
];
/////////////////////////////////////////  Virtual Reality  /////////////////////////////////////////////////////////
const Virtual_Reality = [
  {
    question: "What is Virtual Reality (VR)?",
    answers: [
      {
        text: "A technology for creating 3D models in computer graphics.",
        correct: false,
      },
      {
        text: "An artificial environment created by computer-generated simulations.",
        correct: true,
      },
      {
        text: "A method for enhancing audio quality in digital media.",
        correct: false,
      },
      {
        text: "A technique for encrypting data in virtual environments.",
        correct: false,
      },
    ],
  },
  {
    question: "Which device is commonly used for experiencing Virtual Reality?",
    answers: [
      { text: "Smartphone", correct: false },
      { text: "Virtual Reality headset", correct: true },
      { text: "Smartwatch", correct: false },
      { text: "Bluetooth speaker", correct: false },
    ],
  },
  {
    question: "What is the purpose of Haptic Feedback in Virtual Reality?",
    answers: [
      {
        text: "To adjust the brightness of virtual environments.",
        correct: false,
      },
      {
        text: "To simulate touch sensations for a more immersive experience.",
        correct: true,
      },
      { text: "To synchronize audio and video streams.", correct: false },
      { text: "To create 3D models from 2D images.", correct: false },
    ],
  },
  {
    question:
      "Which technology is essential for tracking movement in Virtual Reality?",
    answers: [
      { text: "RFID (Radio Frequency Identification)", correct: false },
      { text: "LiDAR (Light Detection and Ranging)", correct: false },
      { text: "Accelerometers and gyroscopes", correct: true },
      { text: "Satellite navigation (GPS)", correct: false },
    ],
  },
  {
    question: "What does the term 'Telepresence' refer to in Virtual Reality?",
    answers: [
      {
        text: "Simulating physical presence in remote environments.",
        correct: true,
      },
      {
        text: "Creating virtual representations of real-world objects.",
        correct: false,
      },
      {
        text: "Analyzing data patterns in virtual simulations.",
        correct: false,
      },
      {
        text: "Enhancing visual effects in computer graphics.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which industry commonly uses Virtual Reality for training simulations?",
    answers: [
      { text: "Agriculture", correct: false },
      { text: "Manufacturing", correct: true },
      { text: "Retail", correct: false },
      { text: "Tourism", correct: false },
    ],
  },
  {
    question: "What is the role of Augmented Reality (AR) in Virtual Reality?",
    answers: [
      {
        text: "To enhance virtual environments with real-world elements.",
        correct: false,
      },
      {
        text: "To simulate physical sensations in virtual environments.",
        correct: false,
      },
      {
        text: "To project virtual objects onto physical surfaces.",
        correct: false,
      },
      {
        text: "To overlay digital information onto the user's view of the real world.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which principle is used to create the illusion of depth in Virtual Reality?",
    answers: [
      { text: "Perspective projection", correct: true },
      { text: "Top-down projection", correct: false },
      { text: "Orthographic projection", correct: false },
      { text: "Isometric projection", correct: false },
    ],
  },
  {
    question: "What is the primary goal of Immersive Virtual Reality?",
    answers: [
      {
        text: "To display interactive 3D models on web browsers.",
        correct: false,
      },
      {
        text: "To create a sense of presence and engagement in virtual environments.",
        correct: true,
      },
      {
        text: "To simulate real-world physics in computer simulations.",
        correct: false,
      },
      {
        text: "To synchronize multiple users in a shared virtual space.",
        correct: false,
      },
    ],
  },
  {
    question: "Which input devices are commonly used in Virtual Reality?",
    answers: [
      { text: "Joystick and mouse", correct: false },
      { text: "Keyboard and touchscreen", correct: false },
      { text: "Motion controllers and gamepads", correct: true },
      { text: "Scanner and printer", correct: false },
    ],
  },
  {
    question: "What does the term 'Presence' mean in Virtual Reality?",
    answers: [
      { text: "The duration of a virtual experience.", correct: false },
      {
        text: "The sense of being physically present in a virtual environment.",
        correct: true,
      },
      {
        text: "The process of creating realistic textures in virtual simulations.",
        correct: false,
      },
      {
        text: "The technique for rendering lighting effects in 3D models.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which technology enables wireless communication in Virtual Reality?",
    answers: [
      { text: "Bluetooth", correct: true },
      { text: "Ethernet", correct: false },
      { text: "Fiber optics", correct: false },
      { text: "DSL (Digital Subscriber Line)", correct: false },
    ],
  },
  {
    question: "What is the purpose of Spatial Audio in Virtual Reality?",
    answers: [
      {
        text: "To synchronize audio playback with video frames.",
        correct: false,
      },
      {
        text: "To enhance the realism of virtual environments by simulating sound directionality.",
        correct: true,
      },
      {
        text: "To compress audio data for efficient transmission.",
        correct: false,
      },
      { text: "To apply audio effects to speech synthesis.", correct: false },
    ],
  },
  {
    question: "Which rendering technique is commonly used in Virtual Reality?",
    answers: [
      { text: "Rasterization", correct: true },
      { text: "Ray tracing", correct: false },
      { text: "Path tracing", correct: false },
      { text: "Voxelization", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of Web-based Virtual Reality applications?",
    answers: [
      { text: "Highly realistic graphics rendering.", correct: false },
      {
        text: "Cross-platform compatibility without requiring specific hardware.",
        correct: true,
      },
      { text: "Advanced motion tracking capabilities.", correct: false },
      { text: "Enhanced interaction through haptic feedback.", correct: false },
    ],
  },
  {
    question:
      "Which concept is central to the development of Social Virtual Reality platforms?",
    answers: [
      { text: "Geometric modeling", correct: false },
      { text: "Human-computer interaction", correct: false },
      { text: "Avatars and virtual identities", correct: true },
      { text: "Data encryption and security", correct: false },
    ],
  },
  {
    question:
      "What is the primary challenge in achieving 'Presence' in Virtual Reality?",
    answers: [
      { text: "Display resolution limitations", correct: false },
      { text: "Latency in motion tracking", correct: false },
      { text: "Simulating realistic physical interactions", correct: false },
      {
        text: "Overcoming visual and sensory discrepancies between real and virtual environments",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which technology enables real-time collaboration in Virtual Reality?",
    answers: [
      { text: "Internet Protocol (IP) cameras", correct: false },
      { text: "Peer-to-peer networking", correct: false },
      { text: "Cloud computing", correct: false },
      { text: "Virtual Private Networks (VPNs)", correct: true },
    ],
  },
  {
    question:
      "What is the role of AI (Artificial Intelligence) in Virtual Reality applications?",
    answers: [
      {
        text: "To simulate physical phenomena in virtual environments.",
        correct: false,
      },
      {
        text: "To analyze user behavior and preferences for personalized experiences.",
        correct: true,
      },
      {
        text: "To compress and optimize data transmission in VR systems.",
        correct: false,
      },
      {
        text: "To synchronize audio and visual cues for immersive storytelling.",
        correct: false,
      },
    ],
  },
  {
    question: "What does the term 'Cybersickness' refer to in Virtual Reality?",
    answers: [
      {
        text: "The sensation of vertigo caused by visual motion in VR.",
        correct: true,
      },
      {
        text: "The risk of cyber attacks on virtual environments.",
        correct: false,
      },
      {
        text: "The process of establishing secure connections in VR networks.",
        correct: false,
      },
      {
        text: "The practice of creating virtual replicas of physical objects.",
        correct: false,
      },
    ],
  },
];
///////////////////////////////////////////// Augmented Reality  ////////////////////////////////////////////////////
const Augmented_Reality = [
  {
    question: "What is Augmented Reality (AR)?",
    answers: [
      {
        text: "A technology that generates 3D models from 2D images.",
        correct: false,
      },
      {
        text: "A technology that overlays digital information onto the real world.",
        correct: true,
      },
      {
        text: "A method for enhancing audio quality in digital media.",
        correct: false,
      },
      {
        text: "A technique for encrypting data in virtual environments.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which device is commonly used for experiencing Augmented Reality?",
    answers: [
      { text: "Smartphone", correct: true },
      { text: "DVD player", correct: false },
      { text: "Smartwatch", correct: false },
      { text: "Bluetooth speaker", correct: false },
    ],
  },
  {
    question: "What is the purpose of AR markers?",
    answers: [
      { text: "To create 3D models from 2D images.", correct: false },
      {
        text: "To provide reference points for placing digital content in the real world.",
        correct: true,
      },
      { text: "To synchronize audio and video streams.", correct: false },
      { text: "To store large amounts of digital data.", correct: false },
    ],
  },
  {
    question:
      "Which technology is essential for tracking movement in Augmented Reality?",
    answers: [
      { text: "RFID (Radio Frequency Identification)", correct: false },
      { text: "LiDAR (Light Detection and Ranging)", correct: true },
      { text: "Accelerometers and gyroscopes", correct: true },
      { text: "Satellite navigation (GPS)", correct: false },
    ],
  },
  {
    question: "What does the term 'Markerless AR' refer to?",
    answers: [
      {
        text: "AR applications that do not require physical markers to function.",
        correct: true,
      },
      {
        text: "AR experiences that are purely virtual and not overlaid on the real world.",
        correct: false,
      },
      {
        text: "A method of AR that relies on GPS data exclusively.",
        correct: false,
      },
      {
        text: "An AR system that enhances sound rather than visual elements.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which industry commonly uses Augmented Reality for training simulations?",
    answers: [
      { text: "Agriculture", correct: false },
      { text: "Retail", correct: false },
      { text: "Healthcare", correct: true },
      { text: "Tourism", correct: false },
    ],
  },
  {
    question: "What is the role of Computer Vision in Augmented Reality?",
    answers: [
      {
        text: "To create realistic soundscapes for AR environments.",
        correct: false,
      },
      {
        text: "To analyze and interpret visual data for overlaying digital content.",
        correct: true,
      },
      { text: "To compress data for efficient storage.", correct: false },
      {
        text: "To provide network security for AR applications.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which principle is used to create the illusion of depth in Augmented Reality?",
    answers: [
      { text: "Perspective projection", correct: true },
      { text: "Top-down projection", correct: false },
      { text: "Orthographic projection", correct: false },
      { text: "Isometric projection", correct: false },
    ],
  },
  {
    question: "What is the primary goal of Augmented Reality?",
    answers: [
      {
        text: "To display interactive 3D models on web browsers.",
        correct: false,
      },
      {
        text: "To enhance the real world with digital elements.",
        correct: true,
      },
      {
        text: "To simulate real-world physics in computer simulations.",
        correct: false,
      },
      {
        text: "To synchronize multiple users in a shared virtual space.",
        correct: false,
      },
    ],
  },
  {
    question: "Which input devices are commonly used in Augmented Reality?",
    answers: [
      { text: "Joystick and mouse", correct: false },
      { text: "Keyboard and touchscreen", correct: true },
      { text: "Motion controllers and gamepads", correct: false },
      { text: "Scanner and printer", correct: false },
    ],
  },
  {
    question: "What does the term 'SLAM' stand for in Augmented Reality?",
    answers: [
      { text: "Simultaneous Localization and Mapping", correct: true },
      { text: "Structured Light and Modeling", correct: false },
      { text: "Synchronous Location and Motion", correct: false },
      { text: "Spatial Layering and Measurement", correct: false },
    ],
  },
  {
    question:
      "Which technology enables wireless communication in Augmented Reality?",
    answers: [
      { text: "Bluetooth", correct: true },
      { text: "Ethernet", correct: false },
      { text: "Fiber optics", correct: false },
      { text: "DSL (Digital Subscriber Line)", correct: false },
    ],
  },
  {
    question: "What is the purpose of Spatial Audio in Augmented Reality?",
    answers: [
      {
        text: "To synchronize audio playback with video frames.",
        correct: false,
      },
      {
        text: "To enhance the realism of AR experiences by simulating sound directionality.",
        correct: true,
      },
      {
        text: "To compress audio data for efficient transmission.",
        correct: false,
      },
      { text: "To apply audio effects to speech synthesis.", correct: false },
    ],
  },
  {
    question:
      "Which rendering technique is commonly used in Augmented Reality?",
    answers: [
      { text: "Rasterization", correct: true },
      { text: "Ray tracing", correct: false },
      { text: "Path tracing", correct: false },
      { text: "Voxelization", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of Web-based Augmented Reality applications?",
    answers: [
      { text: "Highly realistic graphics rendering.", correct: false },
      {
        text: "Cross-platform compatibility without requiring specific hardware.",
        correct: true,
      },
      { text: "Advanced motion tracking capabilities.", correct: false },
      { text: "Enhanced interaction through haptic feedback.", correct: false },
    ],
  },
  {
    question:
      "Which concept is central to the development of Social Augmented Reality platforms?",
    answers: [
      { text: "Geometric modeling", correct: false },
      { text: "Human-computer interaction", correct: false },
      { text: "Avatars and virtual identities", correct: true },
      { text: "Data encryption and security", correct: false },
    ],
  },
  {
    question:
      "What is the primary challenge in achieving 'Presence' in Augmented Reality?",
    answers: [
      { text: "Display resolution limitations", correct: false },
      { text: "Latency in motion tracking", correct: false },
      { text: "Simulating realistic physical interactions", correct: false },
      {
        text: "Overcoming visual and sensory discrepancies between real and augmented environments",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which technology enables real-time collaboration in Augmented Reality?",
    answers: [
      { text: "Internet Protocol (IP) cameras", correct: false },
      { text: "Peer-to-peer networking", correct: false },
      { text: "Cloud computing", correct: false },
      { text: "Virtual Private Networks (VPNs)", correct: true },
    ],
  },
  {
    question:
      "What is the role of AI (Artificial Intelligence) in Augmented Reality applications?",
    answers: [
      {
        text: "To simulate physical phenomena in augmented environments.",
        correct: false,
      },
      {
        text: "To analyze user behavior and preferences for personalized experiences.",
        correct: true,
      },
      {
        text: "To compress and optimize data transmission in AR systems.",
        correct: false,
      },
      {
        text: "To synchronize audio and visual cues for immersive storytelling.",
        correct: false,
      },
    ],
  },
  {
    question: "What does the term 'Augmented Reality Glasses' refer to?",
    answers: [
      {
        text: "A type of eyewear that enhances vision for low-light conditions.",
        correct: false,
      },
      {
        text: "A type of glasses that overlay digital information on the real world.",
        correct: true,
      },
      {
        text: "A device for magnifying small objects in scientific research.",
        correct: false,
      },
      {
        text: "A protective eyewear used in industrial settings.",
        correct: false,
      },
    ],
  },
];
/////////////////////////////////////////  Ethical Hacking   ////////////////////////////////////////////////////////
const Ethical_Hacking = [
  {
    question: "What is Ethical Hacking?",
    answers: [
      { text: "Hacking for illegal purposes.", correct: false },
      { text: "Unauthorized access to computer systems.", correct: false },
      {
        text: "The practice of bypassing system security to identify potential data breaches and threats in a legal and legitimate manner.",
        correct: true,
      },
      { text: "Creating viruses and malware.", correct: false },
    ],
  },
  {
    question: "Which term refers to an ethical hacker?",
    answers: [
      { text: "Black Hat Hacker", correct: false },
      { text: "White Hat Hacker", correct: true },
      { text: "Gray Hat Hacker", correct: false },
      { text: "Script Kiddie", correct: false },
    ],
  },
  {
    question: "What is a penetration test?",
    answers: [
      { text: "A method to develop software applications.", correct: false },
      {
        text: "A security exercise to identify vulnerabilities in a system.",
        correct: true,
      },
      { text: "A process to install software on a computer.", correct: false },
      { text: "A technique for optimizing computer hardware.", correct: false },
    ],
  },
  {
    question:
      "Which tool is commonly used for network scanning in Ethical Hacking?",
    answers: [
      { text: "Microsoft Excel", correct: false },
      { text: "Nmap", correct: true },
      { text: "Adobe Photoshop", correct: false },
      { text: "VLC Media Player", correct: false },
    ],
  },
  {
    question:
      "What does the term 'Vulnerability' mean in the context of cybersecurity?",
    answers: [
      { text: "A feature that enhances system performance.", correct: false },
      { text: "A weakness in a system that can be exploited.", correct: true },
      { text: "A method to increase storage capacity.", correct: false },
      { text: "A type of computer virus.", correct: false },
    ],
  },
  {
    question:
      "Which ethical hacking phase involves gathering information about a target system?",
    answers: [
      { text: "Scanning", correct: false },
      { text: "Reconnaissance", correct: true },
      { text: "Gaining Access", correct: false },
      { text: "Maintaining Access", correct: false },
    ],
  },
  {
    question: "What is Social Engineering in the context of Ethical Hacking?",
    answers: [
      { text: "A method to design computer networks.", correct: false },
      {
        text: "Manipulating individuals to gain confidential information.",
        correct: true,
      },
      { text: "A technique to build physical infrastructure.", correct: false },
      {
        text: "The practice of creating social media accounts.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the primary objective of a Denial of Service (DoS) attack?",
    answers: [
      { text: "To steal sensitive information.", correct: false },
      {
        text: "To render a system or network unavailable to users.",
        correct: true,
      },
      { text: "To install malware on a system.", correct: false },
      { text: "To deface a website.", correct: false },
    ],
  },
  {
    question:
      "Which type of attack involves intercepting and altering communications between two parties?",
    answers: [
      { text: "Phishing", correct: false },
      { text: "Man-in-the-Middle Attack", correct: true },
      { text: "Brute Force Attack", correct: false },
      { text: "SQL Injection", correct: false },
    ],
  },
  {
    question: "What is the role of a firewall in cybersecurity?",
    answers: [
      { text: "To increase the speed of a network.", correct: false },
      {
        text: "To block unauthorized access while permitting outward communication.",
        correct: true,
      },
      { text: "To store data securely.", correct: false },
      { text: "To design software applications.", correct: false },
    ],
  },
  {
    question:
      "Which term refers to a security flaw found in software or hardware?",
    answers: [
      { text: "Exploit", correct: true },
      { text: "Firewall", correct: false },
      { text: "Patch", correct: false },
      { text: "Antivirus", correct: false },
    ],
  },
  {
    question: "What is the purpose of encryption in cybersecurity?",
    answers: [
      { text: "To compress data for storage.", correct: false },
      { text: "To protect data by converting it into a code.", correct: true },
      { text: "To delete unwanted files.", correct: false },
      { text: "To speed up internet connections.", correct: false },
    ],
  },
  {
    question:
      "Which technique involves guessing passwords by trying many possible combinations?",
    answers: [
      { text: "Phishing", correct: false },
      { text: "Brute Force Attack", correct: true },
      { text: "Social Engineering", correct: false },
      { text: "DNS Spoofing", correct: false },
    ],
  },
  {
    question: "Which of the following is a common tool for password cracking?",
    answers: [
      { text: "Wireshark", correct: false },
      { text: "John the Ripper", correct: true },
      { text: "Photoshop", correct: false },
      { text: "Excel", correct: false },
    ],
  },
  {
    question: "What does SQL Injection exploit?",
    answers: [
      {
        text: "Vulnerabilities in SQL databases to execute malicious SQL statements.",
        correct: true,
      },
      { text: "Weaknesses in wireless networks.", correct: false },
      { text: "Flaws in web browser security.", correct: false },
      { text: "Issues with antivirus software.", correct: false },
    ],
  },
  {
    question: "What is a zero-day exploit?",
    answers: [
      { text: "An exploit for which a patch is available.", correct: false },
      {
        text: "A vulnerability that is unknown to those who should be interested in its mitigation.",
        correct: true,
      },
      { text: "A type of social engineering attack.", correct: false },
      { text: "A firewall configuration error.", correct: false },
    ],
  },
  {
    question:
      "Which organization is responsible for creating and managing the Common Vulnerabilities and Exposures (CVE) list?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "MITRE Corporation", correct: true },
      { text: "Facebook", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of ethical hacking certifications like CEH (Certified Ethical Hacker)?",
    answers: [
      {
        text: "To certify individuals to conduct illegal hacking activities.",
        correct: false,
      },
      {
        text: "To validate the skills and knowledge of professionals in identifying and addressing security threats.",
        correct: true,
      },
      { text: "To provide legal advice to hacking victims.", correct: false },
      { text: "To teach software development.", correct: false },
    ],
  },
  {
    question:
      "Which phase of ethical hacking involves fixing the vulnerabilities found?",
    answers: [
      { text: "Reconnaissance", correct: false },
      { text: "Scanning", correct: false },
      { text: "Maintaining Access", correct: false },
      { text: "Covering Tracks", correct: true },
    ],
  },
  {
    question: "Which of the following is an example of a phishing attack?",
    answers: [
      {
        text: "Sending an email that appears to be from a trusted source to trick the recipient into revealing sensitive information.",
        correct: true,
      },
      { text: "Infecting a system with ransomware.", correct: false },
      { text: "Exploiting a buffer overflow vulnerability.", correct: false },
      { text: "Performing a DDoS attack.", correct: false },
    ],
  },
];
///////////////////////////////////////////  Data Base   ////////////////////////////////////////////////////////////
const DataBase = [
  {
    question: "What is a database?",
    answers: [
      {
        text: "A collection of data stored in a computer system.",
        correct: true,
      },
      { text: "A programming language.", correct: false },
      { text: "A type of software application.", correct: false },
      { text: "A hardware device used for data storage.", correct: false },
    ],
  },
  {
    question: "What does SQL stand for?",
    answers: [
      { text: "Structured Query Language", correct: true },
      { text: "Sequential Query Language", correct: false },
      { text: "Structured Question Language", correct: false },
      { text: "System Query Language", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of database model?",
    answers: [
      { text: "Hierarchical", correct: true },
      { text: "Sequential", correct: false },
      { text: "Procedural", correct: false },
      { text: "Modular", correct: false },
    ],
  },
  {
    question: "What is a primary key?",
    answers: [
      {
        text: "A key that uniquely identifies a record in a table.",
        correct: true,
      },
      { text: "A key that is used to encrypt data.", correct: false },
      { text: "A key that is used to unlock a database.", correct: false },
      { text: "A key that links multiple tables.", correct: false },
    ],
  },
  {
    question: "What is a foreign key?",
    answers: [
      {
        text: "A key that uniquely identifies a record in a table.",
        correct: false,
      },
      { text: "A key used to connect two tables.", correct: true },
      { text: "A key that encrypts data in a database.", correct: false },
      { text: "A key that sorts data in a table.", correct: false },
    ],
  },
  {
    question: "What is normalization in databases?",
    answers: [
      {
        text: "The process of reducing redundancy and dependency by organizing fields and table of a database.",
        correct: true,
      },
      { text: "The process of making a database faster.", correct: false },
      { text: "The process of encrypting data in a database.", correct: false },
      { text: "The process of backing up data in a database.", correct: false },
    ],
  },
  {
    question: "What is a transaction in database terms?",
    answers: [
      {
        text: "A sequence of operations performed as a single logical unit of work.",
        correct: true,
      },
      { text: "A backup of the database.", correct: false },
      { text: "A user query for data retrieval.", correct: false },
      { text: "A type of data encryption.", correct: false },
    ],
  },
  {
    question: "What does ACID stand for in databases?",
    answers: [
      { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
      { text: "Accuracy, Consistency, Integrity, Durability", correct: false },
      { text: "Atomicity, Control, Isolation, Dependability", correct: false },
      { text: "Accuracy, Control, Integrity, Dependability", correct: false },
    ],
  },
  {
    question: "Which of the following is an SQL command used to retrieve data?",
    answers: [
      { text: "SELECT", correct: true },
      { text: "UPDATE", correct: false },
      { text: "DELETE", correct: false },
      { text: "INSERT", correct: false },
    ],
  },
  {
    question: "What is a view in SQL?",
    answers: [
      {
        text: "A virtual table based on the result-set of an SQL statement.",
        correct: true,
      },
      { text: "A backup of the database.", correct: false },
      { text: "A physical table in the database.", correct: false },
      { text: "A transaction log of the database.", correct: false },
    ],
  },
  {
    question: "Which SQL clause is used to filter records?",
    answers: [
      { text: "WHERE", correct: true },
      { text: "GROUP BY", correct: false },
      { text: "ORDER BY", correct: false },
      { text: "HAVING", correct: false },
    ],
  },
  {
    question: "What is an index in a database?",
    answers: [
      {
        text: "A database object that improves the speed of data retrieval.",
        correct: true,
      },
      { text: "A summary of the database.", correct: false },
      { text: "A primary key for a table.", correct: false },
      { text: "A backup of the database.", correct: false },
    ],
  },
  {
    question: "What is a join in SQL?",
    answers: [
      {
        text: "A SQL operation that combines rows from two or more tables.",
        correct: true,
      },
      { text: "A SQL command to update records.", correct: false },
      { text: "A SQL command to delete records.", correct: false },
      { text: "A SQL command to insert records.", correct: false },
    ],
  },
  {
    question: "What is a stored procedure in SQL?",
    answers: [
      {
        text: "A precompiled collection of one or more SQL statements stored in the database.",
        correct: true,
      },
      { text: "A backup of the database.", correct: false },
      { text: "A temporary table in the database.", correct: false },
      { text: "A type of data encryption.", correct: false },
    ],
  },
  {
    question: "Which of the following is a NoSQL database?",
    answers: [
      { text: "MySQL", correct: false },
      { text: "MongoDB", correct: true },
      { text: "SQL Server", correct: false },
      { text: "PostgreSQL", correct: false },
    ],
  },
  {
    question: "What is a trigger in a database?",
    answers: [
      {
        text: "A set of actions that are automatically performed in response to a certain event.",
        correct: true,
      },
      { text: "A type of primary key.", correct: false },
      { text: "A temporary table in the database.", correct: false },
      { text: "A backup process for the database.", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'GROUP BY' clause in SQL?",
    answers: [
      {
        text: "To group rows that have the same values into summary rows.",
        correct: true,
      },
      { text: "To filter records in the database.", correct: false },
      { text: "To sort the records in the database.", correct: false },
      { text: "To join multiple tables.", correct: false },
    ],
  },
  {
    question: "Which command is used to delete a table in SQL?",
    answers: [
      { text: "DROP TABLE", correct: true },
      { text: "DELETE TABLE", correct: false },
      { text: "REMOVE TABLE", correct: false },
      { text: "ERASE TABLE", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'HAVING' clause in SQL?",
    answers: [
      {
        text: "To filter groups based on a specified condition.",
        correct: true,
      },
      { text: "To filter individual rows in the database.", correct: false },
      { text: "To sort the records in the database.", correct: false },
      { text: "To join multiple tables.", correct: false },
    ],
  },
  {
    question:
      "Which SQL function is used to count the number of rows in a table?",
    answers: [
      { text: "COUNT()", correct: true },
      { text: "SUM()", correct: false },
      { text: "AVG()", correct: false },
      { text: "MAX()", correct: false },
    ],
  },
];
//////////////////////////////////////////////  Mongo Db /////////////////////////////////////////////////////////////
const MongoDB = [
  {
    question: "What type of database is MongoDB?",
    answers: [
      { text: "Relational database", correct: false },
      { text: "NoSQL database", correct: true },
      { text: "In-memory database", correct: false },
      { text: "Graph database", correct: false },
    ],
  },
  {
    question: "What is a document in MongoDB?",
    answers: [
      { text: "A table in MongoDB", correct: false },
      { text: "A record in MongoDB", correct: true },
      { text: "A database in MongoDB", correct: false },
      { text: "A schema in MongoDB", correct: false },
    ],
  },
  {
    question: "In what format are documents stored in MongoDB?",
    answers: [
      { text: "XML", correct: false },
      { text: "JSON", correct: true },
      { text: "CSV", correct: false },
      { text: "HTML", correct: false },
    ],
  },
  {
    question: "What is a collection in MongoDB?",
    answers: [
      { text: "A group of databases", correct: false },
      { text: "A group of documents", correct: true },
      { text: "A group of tables", correct: false },
      { text: "A group of schemas", correct: false },
    ],
  },
  {
    question: "Which command is used to insert a document into a collection?",
    answers: [
      { text: "db.collection.insertOne()", correct: true },
      { text: "db.collection.add()", correct: false },
      { text: "db.collection.save()", correct: false },
      { text: "db.collection.insertDocument()", correct: false },
    ],
  },
  {
    question: "What is the default port for MongoDB?",
    answers: [
      { text: "27017", correct: true },
      { text: "3306", correct: false },
      { text: "5432", correct: false },
      { text: "8080", correct: false },
    ],
  },
  {
    question: "What does the 'find()' method do in MongoDB?",
    answers: [
      { text: "Deletes documents", correct: false },
      { text: "Retrieves documents", correct: true },
      { text: "Inserts documents", correct: false },
      { text: "Updates documents", correct: false },
    ],
  },
  {
    question: "Which of the following is true about MongoDB's schema?",
    answers: [
      { text: "It is fixed and predefined", correct: false },
      { text: "It is flexible and dynamic", correct: true },
      { text: "It is required for each collection", correct: false },
      { text: "It cannot be changed once set", correct: false },
    ],
  },
  {
    question: "How do you update a document in MongoDB?",
    answers: [
      { text: "db.collection.updateOne()", correct: true },
      { text: "db.collection.save()", correct: false },
      { text: "db.collection.modify()", correct: false },
      { text: "db.collection.change()", correct: false },
    ],
  },
  {
    question: "What is an index in MongoDB used for?",
    answers: [
      { text: "To increase storage space", correct: false },
      { text: "To speed up query performance", correct: true },
      { text: "To backup data", correct: false },
      { text: "To delete duplicate documents", correct: false },
    ],
  },
  {
    question: "Which command is used to delete a document in MongoDB?",
    answers: [
      { text: "db.collection.remove()", correct: true },
      { text: "db.collection.delete()", correct: false },
      { text: "db.collection.drop()", correct: false },
      { text: "db.collection.erase()", correct: false },
    ],
  },
  {
    question: "What is a replica set in MongoDB?",
    answers: [
      { text: "A set of collections with identical documents", correct: false },
      {
        text: "A group of mongod processes that maintain the same data set",
        correct: true,
      },
      { text: "A group of databases with similar schema", correct: false },
      { text: "A set of tables that share the same schema", correct: false },
    ],
  },
  {
    question: "What is sharding in MongoDB?",
    answers: [
      { text: "A method for querying documents", correct: false },
      {
        text: "A method for distributing data across multiple machines",
        correct: true,
      },
      { text: "A method for indexing documents", correct: false },
      { text: "A method for backing up data", correct: false },
    ],
  },
  {
    question: "Which of the following is a MongoDB data type?",
    answers: [
      { text: "Binary", correct: true },
      { text: "Double", correct: false },
      { text: "Blob", correct: false },
      { text: "Integer", correct: false },
    ],
  },
  {
    question: "What does 'db' stand for in MongoDB commands?",
    answers: [
      { text: "Database", correct: true },
      { text: "Document", correct: false },
      { text: "Data block", correct: false },
      { text: "Data bundle", correct: false },
    ],
  },
  {
    question: "What is an embedded document in MongoDB?",
    answers: [
      {
        text: "A document that contains a reference to another document",
        correct: false,
      },
      {
        text: "A document that is nested within another document",
        correct: true,
      },
      { text: "A document that is indexed", correct: false },
      { text: "A document that is used for sharding", correct: false },
    ],
  },
  {
    question: "How do you create a collection in MongoDB?",
    answers: [
      {
        text: "Collections are created automatically when a document is inserted",
        correct: true,
      },
      { text: "Using db.createCollection()", correct: false },
      { text: "Using db.newCollection()", correct: false },
      { text: "Using db.addCollection()", correct: false },
    ],
  },
  {
    question: "What is the command to drop a collection in MongoDB?",
    answers: [
      { text: "db.collection.drop()", correct: true },
      { text: "db.collection.remove()", correct: false },
      { text: "db.collection.delete()", correct: false },
      { text: "db.collection.erase()", correct: false },
    ],
  },
  {
    question: "Which command is used to create an index on a collection?",
    answers: [
      { text: "db.collection.createIndex()", correct: true },
      { text: "db.collection.addIndex()", correct: false },
      { text: "db.collection.makeIndex()", correct: false },
      { text: "db.collection.index()", correct: false },
    ],
  },
  {
    question: "Which of the following is a MongoDB aggregation operation?",
    answers: [
      { text: "$group", correct: true },
      { text: "$collect", correct: false },
      { text: "$filter", correct: false },
      { text: "$sort", correct: false },
    ],
  },
];
///////////////////////////////////////////////  basic Electronics  /////////////////////////////////////////////////
const Basic_Electronics = [
  {
    question: "What is Ohm's Law?",
    answers: [
      {
        text: "The relationship between voltage, current, and resistance",
        correct: true,
      },
      { text: "The principle of electromagnetic induction", correct: false },
      { text: "The law of conservation of energy", correct: false },
      {
        text: "The relationship between power, voltage, and current",
        correct: false,
      },
    ],
  },
  {
    question: "What does a resistor do in an electrical circuit?",
    answers: [
      { text: "Stores electrical energy", correct: false },
      { text: "Provides electrical resistance", correct: true },
      { text: "Amplifies electrical signals", correct: false },
      { text: "Converts electrical energy into light", correct: false },
    ],
  },
  {
    question: "Which device is used to measure electric current?",
    answers: [
      { text: "Voltmeter", correct: false },
      { text: "Ammeter", correct: true },
      { text: "Ohmmeter", correct: false },
      { text: "Wattmeter", correct: false },
    ],
  },
  {
    question: "What is a semiconductor?",
    answers: [
      {
        text: "A material with very high electrical conductivity",
        correct: false,
      },
      {
        text: "A material with electrical conductivity between a conductor and an insulator",
        correct: true,
      },
      { text: "A material with no electrical conductivity", correct: false },
      {
        text: "A material that converts electrical energy into light",
        correct: false,
      },
    ],
  },
  {
    question: "What is the unit of electrical resistance?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ampere", correct: false },
      { text: "Ohm", correct: true },
      { text: "Watt", correct: false },
    ],
  },
  {
    question: "What does a capacitor do in an electrical circuit?",
    answers: [
      { text: "Stores electrical energy", correct: true },
      { text: "Provides electrical resistance", correct: false },
      { text: "Amplifies electrical signals", correct: false },
      { text: "Converts electrical energy into light", correct: false },
    ],
  },
  {
    question: "What is the basic unit of electric charge?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ampere", correct: false },
      { text: "Coulomb", correct: true },
      { text: "Ohm", correct: false },
    ],
  },
  {
    question: "What is a diode used for?",
    answers: [
      { text: "Storing electrical energy", correct: false },
      { text: "Providing electrical resistance", correct: false },
      { text: "Allowing current to flow in one direction only", correct: true },
      { text: "Amplifying electrical signals", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of transistor?",
    answers: [
      { text: "BJT", correct: true },
      { text: "IC", correct: false },
      { text: "RLC", correct: false },
      { text: "PWM", correct: false },
    ],
  },
  {
    question: "What is the purpose of a transformer?",
    answers: [
      { text: "To increase or decrease voltage levels", correct: true },
      { text: "To store electrical energy", correct: false },
      { text: "To convert electrical energy into light", correct: false },
      { text: "To measure electrical resistance", correct: false },
    ],
  },
  {
    question: "What is the unit of capacitance?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ampere", correct: false },
      { text: "Farad", correct: true },
      { text: "Ohm", correct: false },
    ],
  },
  {
    question: "What is an integrated circuit (IC)?",
    answers: [
      { text: "A type of capacitor", correct: false },
      { text: "A type of resistor", correct: false },
      { text: "A miniaturized electronic circuit", correct: true },
      { text: "A type of transformer", correct: false },
    ],
  },
  {
    question: "What is Kirchhoff's Voltage Law (KVL)?",
    answers: [
      {
        text: "The total current entering a junction equals the total current leaving",
        correct: false,
      },
      {
        text: "The sum of all voltages around a closed loop equals zero",
        correct: true,
      },
      {
        text: "The relationship between voltage, current, and resistance",
        correct: false,
      },
      {
        text: "The power consumed in a circuit is equal to the power supplied",
        correct: false,
      },
    ],
  },
  {
    question: "Which component is used to amplify signals?",
    answers: [
      { text: "Resistor", correct: false },
      { text: "Capacitor", correct: false },
      { text: "Inductor", correct: false },
      { text: "Transistor", correct: true },
    ],
  },
  {
    question: "What is the main function of an inductor?",
    answers: [
      {
        text: "To store electrical energy in an electric field",
        correct: false,
      },
      { text: "To store electrical energy in a magnetic field", correct: true },
      { text: "To provide electrical resistance", correct: false },
      { text: "To amplify electrical signals", correct: false },
    ],
  },
  {
    question: "What does an LED stand for?",
    answers: [
      { text: "Light Emitting Diode", correct: true },
      { text: "Low Energy Device", correct: false },
      { text: "Light Energy Display", correct: false },
      { text: "Laser Emitting Device", correct: false },
    ],
  },
  {
    question: "What is the purpose of a relay?",
    answers: [
      { text: "To store electrical energy", correct: false },
      { text: "To provide electrical resistance", correct: false },
      { text: "To switch electrical circuits on and off", correct: true },
      { text: "To amplify electrical signals", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a characteristic of an ideal operational amplifier?",
    answers: [
      { text: "Infinite gain", correct: true },
      { text: "Zero input resistance", correct: false },
      { text: "Infinite output resistance", correct: false },
      { text: "Finite gain", correct: false },
    ],
  },
  {
    question: "What does the term 'biasing' refer to in electronics?",
    answers: [
      {
        text: "Applying a voltage or current to set the operating point of a component",
        correct: true,
      },
      { text: "Connecting components in series", correct: false },
      { text: "Connecting components in parallel", correct: false },
      { text: "Measuring electrical resistance", correct: false },
    ],
  },
  {
    question: "What is a rectifier used for?",
    answers: [
      { text: "Converting AC to DC", correct: true },
      { text: "Amplifying electrical signals", correct: false },
      { text: "Storing electrical energy", correct: false },
      { text: "Providing electrical resistance", correct: false },
    ],
  },
];
////////////////////////////////////  Electromagnetic Field Theory  /////////////////////////////////////////////////
const Electromagnetic_Theory = [
  {
    question: "What is Gauss's Law?",
    answers: [
      {
        text: "The principle that states the electric flux through a closed surface is proportional to the charge enclosed",
        correct: true,
      },
      {
        text: "The law that relates magnetic fields and electric currents",
        correct: false,
      },
      {
        text: "The principle that states the total current entering a junction equals the total current leaving",
        correct: false,
      },
      {
        text: "The law that states the induced EMF is proportional to the rate of change of magnetic flux",
        correct: false,
      },
    ],
  },
  {
    question: "What is Faraday's Law of Electromagnetic Induction?",
    answers: [
      {
        text: "The principle that states the total current entering a junction equals the total current leaving",
        correct: false,
      },
      {
        text: "The law that states the induced EMF is proportional to the rate of change of magnetic flux",
        correct: true,
      },
      {
        text: "The principle that states the electric flux through a closed surface is proportional to the charge enclosed",
        correct: false,
      },
      {
        text: "The law that relates magnetic fields and electric currents",
        correct: false,
      },
    ],
  },
  {
    question: "What is the unit of magnetic flux?",
    answers: [
      { text: "Weber (Wb)", correct: true },
      { text: "Tesla (T)", correct: false },
      { text: "Henry (H)", correct: false },
      { text: "Farad (F)", correct: false },
    ],
  },
  {
    question: "What does Ampere's Law state?",
    answers: [
      {
        text: "The total current entering a junction equals the total current leaving",
        correct: false,
      },
      {
        text: "The line integral of the magnetic field around a closed loop is proportional to the current enclosed",
        correct: true,
      },
      {
        text: "The induced EMF is proportional to the rate of change of magnetic flux",
        correct: false,
      },
      {
        text: "The electric flux through a closed surface is proportional to the charge enclosed",
        correct: false,
      },
    ],
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      { text: "3 × 10^8 m/s", correct: true },
      { text: "3 × 10^6 m/s", correct: false },
      { text: "3 × 10^10 m/s", correct: false },
      { text: "3 × 10^4 m/s", correct: false },
    ],
  },
  {
    question: "What is the unit of electric field strength?",
    answers: [
      { text: "Volt per meter (V/m)", correct: true },
      { text: "Newton per Coulomb (N/C)", correct: false },
      { text: "Coulomb per meter (C/m)", correct: false },
      { text: "Farad per meter (F/m)", correct: false },
    ],
  },
  {
    question: "What is the purpose of Maxwell's equations?",
    answers: [
      {
        text: "To describe the behavior of electric and magnetic fields",
        correct: true,
      },
      { text: "To relate electric current to voltage", correct: false },
      { text: "To measure the strength of magnetic fields", correct: false },
      { text: "To convert AC to DC", correct: false },
    ],
  },
  {
    question: "What is the permittivity of free space (ε0)?",
    answers: [
      { text: "8.85 × 10^-12 F/m", correct: true },
      { text: "8.85 × 10^-10 F/m", correct: false },
      { text: "8.85 × 10^-14 F/m", correct: false },
      { text: "8.85 × 10^-16 F/m", correct: false },
    ],
  },
  {
    question: "What is the permeability of free space (μ0)?",
    answers: [
      { text: "4π × 10^-7 H/m", correct: true },
      { text: "4π × 10^-5 H/m", correct: false },
      { text: "4π × 10^-9 H/m", correct: false },
      { text: "4π × 10^-11 H/m", correct: false },
    ],
  },
  {
    question: "What is the principle of superposition in electromagnetics?",
    answers: [
      {
        text: "The total electric field due to multiple charges is the vector sum of the individual fields",
        correct: true,
      },
      {
        text: "The induced EMF is proportional to the rate of change of magnetic flux",
        correct: false,
      },
      {
        text: "The electric flux through a closed surface is proportional to the charge enclosed",
        correct: false,
      },
      {
        text: "The line integral of the magnetic field around a closed loop is proportional to the current enclosed",
        correct: false,
      },
    ],
  },
  {
    question: "What is an electric dipole?",
    answers: [
      {
        text: "A pair of equal and opposite charges separated by a distance",
        correct: true,
      },
      { text: "A single charge in an electric field", correct: false },
      {
        text: "A pair of like charges separated by a distance",
        correct: false,
      },
      { text: "A loop of current in a magnetic field", correct: false },
    ],
  },
  {
    question: "What is the Poynting vector?",
    answers: [
      {
        text: "A vector representing the direction and magnitude of electromagnetic energy flow",
        correct: true,
      },
      {
        text: "A vector representing the magnetic field strength",
        correct: false,
      },
      {
        text: "A vector representing the electric field strength",
        correct: false,
      },
      { text: "A vector representing the charge density", correct: false },
    ],
  },
  {
    question: "What is Lenz's Law?",
    answers: [
      {
        text: "The direction of the induced EMF and current will oppose the change in magnetic flux",
        correct: true,
      },
      {
        text: "The electric flux through a closed surface is proportional to the charge enclosed",
        correct: false,
      },
      {
        text: "The total current entering a junction equals the total current leaving",
        correct: false,
      },
      {
        text: "The induced EMF is proportional to the rate of change of magnetic flux",
        correct: false,
      },
    ],
  },
  {
    question: "What is the unit of magnetic field strength?",
    answers: [
      { text: "Tesla (T)", correct: true },
      { text: "Weber (Wb)", correct: false },
      { text: "Henry (H)", correct: false },
      { text: "Farad (F)", correct: false },
    ],
  },
  {
    question: "What is the concept of electromagnetic wave propagation?",
    answers: [
      {
        text: "The transmission of electromagnetic energy through space",
        correct: true,
      },
      {
        text: "The reflection of electromagnetic waves off surfaces",
        correct: false,
      },
      {
        text: "The absorption of electromagnetic waves by materials",
        correct: false,
      },
      {
        text: "The generation of electromagnetic waves by antennas",
        correct: false,
      },
    ],
  },
  {
    question: "What is Coulomb's Law?",
    answers: [
      {
        text: "The force between two point charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them",
        correct: true,
      },
      {
        text: "The electric flux through a closed surface is proportional to the charge enclosed",
        correct: false,
      },
      {
        text: "The total current entering a junction equals the total current leaving",
        correct: false,
      },
      {
        text: "The line integral of the magnetic field around a closed loop is proportional to the current enclosed",
        correct: false,
      },
    ],
  },
  {
    question: "What is the function of an electromagnetic spectrum?",
    answers: [
      {
        text: "To classify electromagnetic waves by their frequency or wavelength",
        correct: true,
      },
      { text: "To measure the strength of magnetic fields", correct: false },
      { text: "To convert AC to DC", correct: false },
      { text: "To relate electric current to voltage", correct: false },
    ],
  },
  {
    question: "What is the concept of wave-particle duality?",
    answers: [
      {
        text: "Electromagnetic waves exhibit both wave-like and particle-like properties",
        correct: true,
      },
      { text: "The speed of light is constant in a vacuum", correct: false },
      {
        text: "The total electric field due to multiple charges is the vector sum of the individual fields",
        correct: false,
      },
      {
        text: "The force between two point charges is directly proportional to the product of their charges",
        correct: false,
      },
    ],
  },
  {
    question: "What is the skin effect?",
    answers: [
      {
        text: "The tendency of AC current to distribute within a conductor so that the current density is largest near the surface",
        correct: true,
      },
      { text: "The force between two point charges", correct: false },
      {
        text: "The total electric field due to multiple charges",
        correct: false,
      },
      { text: "The direction of the induced EMF and current", correct: false },
    ],
  },
  {
    question: "What is the purpose of boundary conditions in electromagnetics?",
    answers: [
      {
        text: "To describe the behavior of electric and magnetic fields at the interface of two different media",
        correct: true,
      },
      { text: "To measure the strength of magnetic fields", correct: false },
      { text: "To convert AC to DC", correct: false },
      { text: "To relate electric current to voltage", correct: false },
    ],
  },
];
//////////////////////////////////////////////// Signal and System  /////////////////////////////////////////////////
const Signal_and_System = [
  {
    question: "What is a continuous-time signal?",
    answers: [
      {
        text: "A signal that is defined only at discrete times",
        correct: false,
      },
      {
        text: "A signal that is defined for every instant of time",
        correct: true,
      },
      {
        text: "A signal that is only defined for integer values",
        correct: false,
      },
      {
        text: "A signal that is periodic with a fixed interval",
        correct: false,
      },
    ],
  },
  {
    question: "What is a discrete-time signal?",
    answers: [
      {
        text: "A signal that is defined for every instant of time",
        correct: false,
      },
      {
        text: "A signal that is defined only at discrete times",
        correct: true,
      },
      { text: "A signal that is continuous in nature", correct: false },
      { text: "A signal that is random in nature", correct: false },
    ],
  },
  {
    question: "What is the unit impulse function?",
    answers: [
      {
        text: "A function that is zero everywhere except at one point where it is infinite",
        correct: true,
      },
      { text: "A function that is zero everywhere", correct: false },
      { text: "A function that is one everywhere", correct: false },
      { text: "A function that decreases exponentially", correct: false },
    ],
  },
  {
    question: "What is the Fourier Transform used for?",
    answers: [
      {
        text: "Converting a time-domain signal into its frequency-domain representation",
        correct: true,
      },
      { text: "Sampling a continuous-time signal", correct: false },
      {
        text: "Converting a discrete-time signal into a continuous-time signal",
        correct: false,
      },
      { text: "Filtering noise from a signal", correct: false },
    ],
  },
  {
    question: "What is the Laplace Transform used for?",
    answers: [
      { text: "Analyzing linear time-invariant systems", correct: true },
      { text: "Analyzing non-linear systems", correct: false },
      { text: "Sampling continuous-time signals", correct: false },
      { text: "Finding the Z-transform of a signal", correct: false },
    ],
  },
  {
    question: "What is the Z-transform used for?",
    answers: [
      { text: "Analyzing discrete-time signals and systems", correct: true },
      { text: "Analyzing continuous-time signals", correct: false },
      { text: "Finding the Laplace transform of a signal", correct: false },
      { text: "Sampling continuous-time signals", correct: false },
    ],
  },
  {
    question: "What is an LTI system?",
    answers: [
      { text: "A system that is linear and time-invariant", correct: true },
      { text: "A system that is non-linear and time-variant", correct: false },
      { text: "A system that is linear and time-variant", correct: false },
      {
        text: "A system that is non-linear and time-invariant",
        correct: false,
      },
    ],
  },
  {
    question: "What is convolution?",
    answers: [
      {
        text: "A mathematical operation used to determine the output of an LTI system",
        correct: true,
      },
      {
        text: "A process of sampling a continuous-time signal",
        correct: false,
      },
      {
        text: "A method to transform a signal into its frequency components",
        correct: false,
      },
      { text: "A technique to remove noise from a signal", correct: false },
    ],
  },
  {
    question: "What is a causal system?",
    answers: [
      {
        text: "A system where the output depends only on past and present inputs",
        correct: true,
      },
      {
        text: "A system where the output depends on future inputs",
        correct: false,
      },
      {
        text: "A system where the output is independent of the input",
        correct: false,
      },
      { text: "A system that is non-linear in nature", correct: false },
    ],
  },
  {
    question: "What is an energy signal?",
    answers: [
      { text: "A signal with finite energy", correct: true },
      { text: "A signal with finite power", correct: false },
      { text: "A signal that is always periodic", correct: false },
      { text: "A signal that has infinite energy", correct: false },
    ],
  },
  {
    question: "What is a power signal?",
    answers: [
      { text: "A signal with finite power", correct: true },
      { text: "A signal with finite energy", correct: false },
      { text: "A signal that is always periodic", correct: false },
      { text: "A signal that has infinite power", correct: false },
    ],
  },
  {
    question: "What is sampling?",
    answers: [
      {
        text: "The process of converting a continuous-time signal into a discrete-time signal",
        correct: true,
      },
      {
        text: "The process of converting a discrete-time signal into a continuous-time signal",
        correct: false,
      },
      { text: "The process of filtering noise from a signal", correct: false },
      { text: "The process of modulating a signal", correct: false },
    ],
  },
  {
    question: "What is aliasing?",
    answers: [
      {
        text: "The distortion that occurs when a signal is undersampled",
        correct: true,
      },
      {
        text: "The process of converting a signal from time-domain to frequency-domain",
        correct: false,
      },
      {
        text: "The technique used to remove noise from a signal",
        correct: false,
      },
      { text: "The process of amplifying a signal", correct: false },
    ],
  },
  {
    question: "What is the Nyquist rate?",
    answers: [
      {
        text: "The minimum sampling rate required to avoid aliasing",
        correct: true,
      },
      { text: "The maximum frequency of a signal", correct: false },
      { text: "The rate at which a signal is modulated", correct: false },
      { text: "The rate at which a signal is amplified", correct: false },
    ],
  },
  {
    question: "What is a band-pass filter?",
    answers: [
      {
        text: "A filter that allows frequencies within a certain range to pass",
        correct: true,
      },
      { text: "A filter that blocks all frequencies", correct: false },
      { text: "A filter that allows all frequencies to pass", correct: false },
      {
        text: "A filter that allows only a single frequency to pass",
        correct: false,
      },
    ],
  },
  {
    question: "What is the impulse response of a system?",
    answers: [
      {
        text: "The output of a system when the input is an impulse signal",
        correct: true,
      },
      {
        text: "The input required to produce a constant output",
        correct: false,
      },
      {
        text: "The output of a system when the input is a sinusoidal signal",
        correct: false,
      },
      { text: "The response of a system to a step input", correct: false },
    ],
  },
  {
    question: "What is the purpose of a Fourier series?",
    answers: [
      {
        text: "To represent a periodic signal as a sum of sinusoids",
        correct: true,
      },
      {
        text: "To convert a signal into its Laplace transform",
        correct: false,
      },
      { text: "To filter noise from a signal", correct: false },
      { text: "To sample a continuous-time signal", correct: false },
    ],
  },
  {
    question: "What is the bandwidth of a signal?",
    answers: [
      {
        text: "The range of frequencies over which the signal is defined",
        correct: true,
      },
      { text: "The maximum amplitude of the signal", correct: false },
      { text: "The duration of the signal", correct: false },
      { text: "The power of the signal", correct: false },
    ],
  },
  {
    question: "What is an even signal?",
    answers: [
      {
        text: "A signal that is symmetric about the vertical axis",
        correct: true,
      },
      {
        text: "A signal that is symmetric about the horizontal axis",
        correct: false,
      },
      { text: "A signal that is periodic", correct: false },
      { text: "A signal that is non-periodic", correct: false },
    ],
  },
  {
    question: "What is an odd signal?",
    answers: [
      {
        text: "A signal that is antisymmetric about the vertical axis",
        correct: true,
      },
      {
        text: "A signal that is symmetric about the vertical axis",
        correct: false,
      },
      { text: "A signal that is periodic", correct: false },
      { text: "A signal that is non-periodic", correct: false },
    ],
  },
];
///////////////////////////////////////////  Digital Electronics  ///////////////////////////////////////////////////
const Digital_Electronics = [
  {
    question: "What is a logic gate?",
    answers: [
      {
        text: "A device that performs logical operations on one or more binary inputs",
        correct: true,
      },
      { text: "A type of memory storage device", correct: false },
      { text: "A component used to amplify signals", correct: false },
      { text: "A device used for analog signal processing", correct: false },
    ],
  },
  {
    question: "What is the binary equivalent of the decimal number 10?",
    answers: [
      { text: "1000", correct: false },
      { text: "1010", correct: true },
      { text: "1100", correct: false },
      { text: "1110", correct: false },
    ],
  },
  {
    question: "Which of the following is a universal gate?",
    answers: [
      { text: "AND gate", correct: false },
      { text: "OR gate", correct: false },
      { text: "NAND gate", correct: true },
      { text: "XOR gate", correct: false },
    ],
  },
  {
    question: "What is the function of a flip-flop?",
    answers: [
      { text: "To amplify digital signals", correct: false },
      { text: "To store binary data", correct: true },
      { text: "To perform arithmetic operations", correct: false },
      { text: "To convert analog signals to digital", correct: false },
    ],
  },
  {
    question: "What is the hexadecimal equivalent of the binary number 1101?",
    answers: [
      { text: "D", correct: true },
      { text: "E", correct: false },
      { text: "F", correct: false },
      { text: "C", correct: false },
    ],
  },
  {
    question: "What is a multiplexer used for?",
    answers: [
      { text: "To store data", correct: false },
      { text: "To perform logical operations", correct: false },
      { text: "To select one input from multiple inputs", correct: true },
      { text: "To convert analog signals to digital", correct: false },
    ],
  },
  {
    question: "What is the basic building block of a digital circuit?",
    answers: [
      { text: "Transistor", correct: true },
      { text: "Capacitor", correct: false },
      { text: "Inductor", correct: false },
      { text: "Resistor", correct: false },
    ],
  },
  {
    question: "What is the Boolean expression for an AND gate?",
    answers: [
      { text: "A + B", correct: false },
      { text: "A • B", correct: true },
      { text: "A ⊕ B", correct: false },
      { text: "A' + B'", correct: false },
    ],
  },
  {
    question: "Which of the following represents a binary addition of 1 and 1?",
    answers: [
      { text: "10", correct: true },
      { text: "11", correct: false },
      { text: "01", correct: false },
      { text: "00", correct: false },
    ],
  },
  {
    question: "What is the primary function of a decoder?",
    answers: [
      { text: "To encode data", correct: false },
      { text: "To amplify signals", correct: false },
      { text: "To convert binary data into a specific output", correct: true },
      { text: "To store data", correct: false },
    ],
  },
  {
    question: "What is a half-adder used for?",
    answers: [
      { text: "To perform binary subtraction", correct: false },
      { text: "To store data", correct: false },
      { text: "To perform binary addition of two bits", correct: true },
      { text: "To amplify digital signals", correct: false },
    ],
  },
  {
    question: "Which of the following is a non-volatile memory?",
    answers: [
      { text: "RAM", correct: false },
      { text: "ROM", correct: true },
      { text: "SRAM", correct: false },
      { text: "DRAM", correct: false },
    ],
  },
  {
    question: "What does the term 'propagation delay' refer to?",
    answers: [
      {
        text: "The time taken for a signal to travel from input to output",
        correct: true,
      },
      {
        text: "The time taken for a signal to reach its maximum amplitude",
        correct: false,
      },
      {
        text: "The time taken for a signal to be stored in memory",
        correct: false,
      },
      { text: "The time taken for a signal to be amplified", correct: false },
    ],
  },
  {
    question: "What is the purpose of an ALU in a computer?",
    answers: [
      { text: "To perform arithmetic and logical operations", correct: true },
      { text: "To store data", correct: false },
      { text: "To control the flow of data", correct: false },
      { text: "To convert analog signals to digital", correct: false },
    ],
  },
  {
    question:
      "What is the primary difference between synchronous and asynchronous circuits?",
    answers: [
      { text: "Synchronous circuits are faster", correct: false },
      { text: "Asynchronous circuits use a clock signal", correct: false },
      { text: "Synchronous circuits use a clock signal", correct: true },
      { text: "Asynchronous circuits are more reliable", correct: false },
    ],
  },
  {
    question:
      "What is the hexadecimal representation of the binary number 1111?",
    answers: [
      { text: "E", correct: false },
      { text: "F", correct: true },
      { text: "D", correct: false },
      { text: "C", correct: false },
    ],
  },
  {
    question: "What does the term 'bit' stand for?",
    answers: [
      { text: "Binary Information Token", correct: false },
      { text: "Binary Digit", correct: true },
      { text: "Binary Integer", correct: false },
      { text: "Binary Unit", correct: false },
    ],
  },
  {
    question: "What is the main function of a shift register?",
    answers: [
      { text: "To perform binary addition", correct: false },
      { text: "To store binary data", correct: false },
      { text: "To shift data bits left or right", correct: true },
      { text: "To convert analog signals to digital", correct: false },
    ],
  },
  {
    question: "What is the decimal equivalent of the binary number 1011?",
    answers: [
      { text: "11", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which logic gate outputs true only if both inputs are false?",
    answers: [
      { text: "AND gate", correct: false },
      { text: "OR gate", correct: false },
      { text: "NAND gate", correct: false },
      { text: "NOR gate", correct: true },
    ],
  },
];
/////////////////////////////////////////////  Microprocesor and Microcontroller  ///////////////////////////////////
const Microprocessor_and_Microcontroller = [
  {
    question: "What is a microprocessor?",
    answers: [
      { text: "A device used to amplify signals", correct: false },
      {
        text: "A central processing unit on a single integrated circuit",
        correct: true,
      },
      { text: "A memory storage device", correct: false },
      { text: "A component used for signal modulation", correct: false },
    ],
  },
  {
    question: "What is the primary function of a microcontroller?",
    answers: [
      { text: "To perform complex mathematical operations", correct: false },
      {
        text: "To control embedded systems and perform specific tasks",
        correct: true,
      },
      { text: "To store large amounts of data", correct: false },
      { text: "To provide network connectivity", correct: false },
    ],
  },
  {
    question: "Which component is typically not part of a microcontroller?",
    answers: [
      { text: "CPU", correct: false },
      { text: "RAM", correct: false },
      { text: "I/O ports", correct: false },
      { text: "Hard disk", correct: true },
    ],
  },
  {
    question: "What is the typical architecture used in microprocessors?",
    answers: [
      { text: "Von Neumann architecture", correct: true },
      { text: "Harvard architecture", correct: false },
      { text: "Princeton architecture", correct: false },
      { text: "Stanford architecture", correct: false },
    ],
  },
  {
    question:
      "Which register in a microprocessor holds the address of the next instruction to be executed?",
    answers: [
      { text: "Accumulator", correct: false },
      { text: "Program Counter", correct: true },
      { text: "Stack Pointer", correct: false },
      { text: "Instruction Register", correct: false },
    ],
  },
  {
    question: "What is an interrupt in microprocessors?",
    answers: [
      {
        text: "A signal that temporarily halts the CPU's current activities",
        correct: true,
      },
      { text: "A command to start a subroutine", correct: false },
      { text: "A method of data transfer", correct: false },
      { text: "A type of memory storage", correct: false },
    ],
  },
  {
    question:
      "What is the role of an ALU (Arithmetic Logic Unit) in a microprocessor?",
    answers: [
      { text: "To perform arithmetic and logical operations", correct: true },
      { text: "To store data", correct: false },
      { text: "To decode instructions", correct: false },
      { text: "To manage power supply", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a characteristic of RISC (Reduced Instruction Set Computer) architecture?",
    answers: [
      { text: "Complex instruction set", correct: false },
      {
        text: "Simple instructions that can be executed in a single clock cycle",
        correct: true,
      },
      { text: "Use of microprogramming", correct: false },
      { text: "Emphasis on software complexity", correct: false },
    ],
  },
  {
    question: "Which microcontroller family is widely used in Arduino boards?",
    answers: [
      { text: "8051", correct: false },
      { text: "PIC", correct: false },
      { text: "AVR", correct: true },
      { text: "ARM Cortex", correct: false },
    ],
  },
  {
    question:
      "What is the main difference between a microprocessor and a microcontroller?",
    answers: [
      {
        text: "A microprocessor has built-in memory and I/O ports",
        correct: false,
      },
      {
        text: "A microcontroller has built-in memory and I/O ports",
        correct: true,
      },
      { text: "A microprocessor is used for specific tasks", correct: false },
      {
        text: "A microcontroller is used for general-purpose computing",
        correct: false,
      },
    ],
  },
  {
    question: "What is an embedded system?",
    answers: [
      { text: "A system designed for general-purpose use", correct: false },
      {
        text: "A computer system with a dedicated function within a larger system",
        correct: true,
      },
      { text: "A high-performance computing system", correct: false },
      { text: "A system designed for network communication", correct: false },
    ],
  },
  {
    question: "Which of the following is an 8-bit microcontroller?",
    answers: [
      { text: "Intel 8086", correct: false },
      { text: "8051", correct: true },
      { text: "PIC18F", correct: false },
      { text: "ARM Cortex-M4", correct: false },
    ],
  },
  {
    question: "What is the purpose of a watchdog timer in a microcontroller?",
    answers: [
      { text: "To measure elapsed time", correct: false },
      { text: "To reset the system if it becomes unresponsive", correct: true },
      { text: "To control power supply", correct: false },
      { text: "To manage I/O operations", correct: false },
    ],
  },
  {
    question: "What is meant by 'flash memory' in microcontrollers?",
    answers: [
      { text: "A type of volatile memory", correct: false },
      {
        text: "A type of non-volatile memory used for storing firmware",
        correct: true,
      },
      { text: "A type of cache memory", correct: false },
      {
        text: "A type of memory used for temporary data storage",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which instruction set architecture is widely used in ARM microprocessors?",
    answers: [
      { text: "CISC", correct: false },
      { text: "RISC", correct: true },
      { text: "VLIW", correct: false },
      { text: "EPIC", correct: false },
    ],
  },
  {
    question: "What does DMA stand for in microcontrollers?",
    answers: [
      { text: "Direct Memory Access", correct: true },
      { text: "Data Memory Access", correct: false },
      { text: "Direct Module Access", correct: false },
      { text: "Data Module Access", correct: false },
    ],
  },
  {
    question: "What is the primary use of GPIO pins in microcontrollers?",
    answers: [
      { text: "To manage power supply", correct: false },
      { text: "To perform arithmetic operations", correct: false },
      { text: "To interface with external peripherals", correct: true },
      { text: "To store data", correct: false },
    ],
  },
  {
    question:
      "Which company developed the first microprocessor, the Intel 4004?",
    answers: [
      { text: "AMD", correct: false },
      { text: "Intel", correct: true },
      { text: "Motorola", correct: false },
      { text: "Texas Instruments", correct: false },
    ],
  },
  {
    question: "What is the purpose of a clock signal in a microprocessor?",
    answers: [
      { text: "To store data", correct: false },
      { text: "To control the timing of operations", correct: true },
      { text: "To amplify signals", correct: false },
      { text: "To perform arithmetic operations", correct: false },
    ],
  },
  {
    question: "Which of the following is a common use for microcontrollers?",
    answers: [
      { text: "Running desktop applications", correct: false },
      { text: "Controlling home appliances", correct: true },
      { text: "Performing complex data analysis", correct: false },
      { text: "Managing cloud servers", correct: false },
    ],
  },
];
///////////////////////////////////////////////////  Arduino  ///////////////////////////////////////////////////////
const Arduino = [
  {
    question: "What is Arduino?",
    answers: [
      { text: "A microprocessor developed by Intel", correct: false },
      {
        text: "An open-source electronics platform based on easy-to-use hardware and software",
        correct: true,
      },
      { text: "A type of microcontroller developed by Atmel", correct: false },
      { text: "A cloud computing service provided by Amazon", correct: false },
    ],
  },
  {
    question: "Which programming language is commonly used with Arduino?",
    answers: [
      { text: "C++", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the typical power supply voltage for Arduino boards?",
    answers: [
      { text: "5V", correct: true },
      { text: "3.3V", correct: false },
      { text: "12V", correct: false },
      { text: "9V", correct: false },
    ],
  },
  {
    question: "Which of the following is not a component of an Arduino board?",
    answers: [
      { text: "Microprocessor", correct: false },
      { text: "Voltage regulator", correct: false },
      { text: "Bluetooth module", correct: true },
      { text: "USB interface", correct: false },
    ],
  },
  {
    question: "What is the main advantage of using Arduino for prototyping?",
    answers: [
      { text: "High cost", correct: false },
      { text: "Complex programming", correct: false },
      { text: "Wide range of sensors and modules", correct: true },
      { text: "Limited community support", correct: false },
    ],
  },
  {
    question:
      "Which IDE (Integrated Development Environment) is commonly used for Arduino programming?",
    answers: [
      { text: "Eclipse", correct: false },
      { text: "Visual Studio", correct: false },
      { text: "Arduino IDE", correct: true },
      { text: "PyCharm", correct: false },
    ],
  },
  {
    question:
      "What is the function of the 'setup()' function in Arduino sketches?",
    answers: [
      { text: "To define global variables", correct: false },
      { text: "To initialize hardware settings", correct: true },
      { text: "To handle user input", correct: false },
      { text: "To execute main program logic", correct: false },
    ],
  },
  {
    question: "Which board is often recommended for beginners in Arduino?",
    answers: [
      { text: "Arduino Mega", correct: false },
      { text: "Arduino Uno", correct: true },
      { text: "Arduino Due", correct: false },
      { text: "Arduino Leonardo", correct: false },
    ],
  },
  {
    question: "What is a shield in Arduino?",
    answers: [
      { text: "A type of sensor", correct: false },
      { text: "A module for wireless communication", correct: false },
      {
        text: "An add-on board that extends Arduino's capabilities",
        correct: true,
      },
      { text: "A programming language used with Arduino", correct: false },
    ],
  },
  {
    question:
      "What is the function of the 'loop()' function in Arduino sketches?",
    answers: [
      { text: "To control servo motors", correct: false },
      { text: "To execute a specific task once", correct: false },
      { text: "To continuously run the main program logic", correct: true },
      { text: "To initialize hardware settings", correct: false },
    ],
  },
  {
    question:
      "Which communication protocol is commonly used with Arduino for serial communication?",
    answers: [
      { text: "USB", correct: false },
      { text: "SPI", correct: false },
      { text: "UART", correct: true },
      { text: "I2C", correct: false },
    ],
  },
  {
    question: "What does PWM stand for in Arduino?",
    answers: [
      { text: "Pulse Width Modulation", correct: true },
      { text: "Power Width Modulation", correct: false },
      { text: "Parallel Width Modulation", correct: false },
      { text: "Programmable Width Modulation", correct: false },
    ],
  },
  {
    question: "Which of the following is not a type of Arduino board?",
    answers: [
      { text: "Arduino Mega", correct: false },
      { text: "Arduino Nano", correct: false },
      { text: "Arduino Spartan", correct: true },
      { text: "Arduino Due", correct: false },
    ],
  },
  {
    question: "What is the function of the 'analogRead()' function in Arduino?",
    answers: [
      { text: "To read digital signals", correct: false },
      { text: "To read analog signals from sensors", correct: true },
      { text: "To write analog signals to output pins", correct: false },
      { text: "To perform mathematical calculations", correct: false },
    ],
  },
  {
    question:
      "Which component converts digital signals to analog signals in Arduino?",
    answers: [
      { text: "DAC (Digital-to-Analog Converter)", correct: true },
      { text: "ADC (Analog-to-Digital Converter)", correct: false },
      { text: "Op-amp (Operational Amplifier)", correct: false },
      { text: "PWM (Pulse Width Modulation)", correct: false },
    ],
  },
  {
    question:
      "What is the maximum number of digital pins on an Arduino Uno board?",
    answers: [
      { text: "14", correct: true },
      { text: "16", correct: false },
      { text: "20", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "Which company originally developed the Arduino platform?",
    answers: [
      { text: "Intel", correct: false },
      { text: "Raspberry Pi Foundation", correct: false },
      { text: "Arduino LLC", correct: true },
      { text: "Atmel Corporation", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the 'delay()' function in Arduino sketches?",
    answers: [
      { text: "To synchronize data transmission", correct: false },
      { text: "To generate interrupts", correct: false },
      {
        text: "To pause the program execution for a specified time",
        correct: true,
      },
      { text: "To read sensor values", correct: false },
    ],
  },
  {
    question:
      "What is the maximum current that can be drawn from a single I/O pin on an Arduino Uno board?",
    answers: [
      { text: "20 mA", correct: true },
      { text: "50 mA", correct: false },
      { text: "100 mA", correct: false },
      { text: "10 mA", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a benefit of using Arduino for IoT (Internet of Things) projects?",
    answers: [
      { text: "Limited connectivity options", correct: false },
      { text: "Complex programming requirements", correct: false },
      {
        text: "Wide range of sensor integration and community support",
        correct: true,
      },
      { text: "High cost of development boards", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'analogWrite()' function in Arduino?",
    answers: [
      {
        text: "To write analog signals to output pins using PWM",
        correct: true,
      },
      { text: "To read analog signals from sensors", correct: false },
      { text: "To perform analog-to-digital conversion", correct: false },
      { text: "To generate square wave signals", correct: false },
    ],
  },
];
/////////////////////////////////////////////   Sensors    //////////////////////////////////////////////////////////
const Sensors = [
  {
    question: "What is a sensor?",
    answers: [
      { text: "A type of actuator", correct: false },
      {
        text: "A device that detects or measures physical properties and converts them into signals",
        correct: true,
      },
      { text: "A component of a microcontroller", correct: false },
      { text: "An algorithm used in image processing", correct: false },
    ],
  },
  {
    question: "Which of the following is not a type of sensor?",
    answers: [
      { text: "Temperature sensor", correct: false },
      { text: "Actuator", correct: true },
      { text: "Proximity sensor", correct: false },
      { text: "Pressure sensor", correct: false },
    ],
  },
  {
    question: "What is the function of a photoresistor?",
    answers: [
      { text: "Detects motion", correct: false },
      { text: "Measures temperature", correct: false },
      { text: "Changes resistance based on light intensity", correct: true },
      { text: "Generates sound waves", correct: false },
    ],
  },
  {
    question: "Which sensor is used to measure distance between objects?",
    answers: [
      { text: "Humidity sensor", correct: false },
      { text: "Infrared sensor", correct: false },
      { text: "Ultrasonic sensor", correct: true },
      { text: "Accelerometer", correct: false },
    ],
  },
  {
    question: "What does an accelerometer measure?",
    answers: [
      { text: "Temperature", correct: false },
      { text: "Acceleration", correct: true },
      { text: "Light intensity", correct: false },
      { text: "Pressure", correct: false },
    ],
  },
  {
    question: "Which sensor is commonly used in touch-sensitive screens?",
    answers: [
      { text: "Proximity sensor", correct: false },
      { text: "Capacitive sensor", correct: true },
      { text: "Magnetic sensor", correct: false },
      { text: "Gas sensor", correct: false },
    ],
  },
  {
    question: "What does a strain gauge measure?",
    answers: [
      { text: "Electric current", correct: false },
      { text: "Force or pressure", correct: true },
      { text: "Light intensity", correct: false },
      { text: "Sound waves", correct: false },
    ],
  },
  {
    question: "Which type of sensor is used in heart rate monitors?",
    answers: [
      { text: "Pressure sensor", correct: false },
      { text: "Capacitive sensor", correct: false },
      { text: "Biometric sensor", correct: true },
      { text: "Ultrasonic sensor", correct: false },
    ],
  },
  {
    question: "What is the primary function of a Hall effect sensor?",
    answers: [
      { text: "Measure temperature", correct: false },
      { text: "Detect magnetic fields", correct: true },
      { text: "Sense humidity levels", correct: false },
      { text: "Monitor light intensity", correct: false },
    ],
  },
  {
    question: "Which sensor is used to measure air quality?",
    answers: [
      { text: "Temperature sensor", correct: false },
      { text: "Humidity sensor", correct: false },
      { text: "Gas sensor", correct: true },
      { text: "Accelerometer", correct: false },
    ],
  },
  {
    question: "What does a piezoelectric sensor detect?",
    answers: [
      { text: "Changes in temperature", correct: false },
      { text: "Mechanical stress or vibration", correct: true },
      { text: "Light intensity", correct: false },
      { text: "Gas concentration", correct: false },
    ],
  },
  {
    question:
      "Which sensor is used to detect the presence or absence of an object?",
    answers: [
      { text: "Proximity sensor", correct: true },
      { text: "Force sensor", correct: false },
      { text: "Gas sensor", correct: false },
      { text: "Biometric sensor", correct: false },
    ],
  },
  {
    question: "What is the function of a gyroscope sensor?",
    answers: [
      { text: "Detects changes in temperature", correct: false },
      { text: "Measures rotational motion", correct: true },
      { text: "Measures air pressure", correct: false },
      { text: "Detects light intensity", correct: false },
    ],
  },
  {
    question: "Which sensor is used in tilt sensors?",
    answers: [
      { text: "Accelerometer", correct: true },
      { text: "Humidity sensor", correct: false },
      { text: "Temperature sensor", correct: false },
      { text: "Proximity sensor", correct: false },
    ],
  },
  {
    question: "What is the primary application of a humidity sensor?",
    answers: [
      { text: "Measures electromagnetic fields", correct: false },
      { text: "Measures gas concentration", correct: false },
      { text: "Measures moisture content in the air", correct: true },
      { text: "Measures light intensity", correct: false },
    ],
  },
  {
    question: "Which sensor is used to detect electromagnetic radiation?",
    answers: [
      { text: "Radiation sensor", correct: false },
      { text: "Photodetector", correct: true },
      { text: "Pressure sensor", correct: false },
      { text: "Humidity sensor", correct: false },
    ],
  },
  {
    question: "What does an oxygen sensor measure?",
    answers: [
      { text: "Temperature", correct: false },
      { text: "Oxygen concentration in gas or liquid", correct: true },
      { text: "Pressure", correct: false },
      { text: "Humidity", correct: false },
    ],
  },
  {
    question: "Which sensor is used in fingerprint scanners?",
    answers: [
      { text: "Proximity sensor", correct: false },
      { text: "Capacitive sensor", correct: false },
      { text: "Biometric sensor", correct: true },
      { text: "Ultrasonic sensor", correct: false },
    ],
  },
  {
    question: "What does an IR sensor detect?",
    answers: [
      { text: "Sound waves", correct: false },
      { text: "Infrared radiation", correct: true },
      { text: "Magnetic fields", correct: false },
      { text: "Electric current", correct: false },
    ],
  },
  {
    question:
      "Which sensor is used in smart lighting systems to adjust brightness based on ambient light?",
    answers: [
      { text: "Temperature sensor", correct: false },
      { text: "Light sensor (photocell)", correct: true },
      { text: "Gas sensor", correct: false },
      { text: "Force sensor", correct: false },
    ],
  },
];
/////////////////////////////////////////////  Power Electronics  ///////////////////////////////////////////////////
const Power_Electronics = [
  {
    question: "What is Power Electronics?",
    answers: [
      {
        text: "A branch of electronics dealing with low power circuits",
        correct: false,
      },
      {
        text: "A field that deals with the conversion and control of electric power",
        correct: true,
      },
      { text: "An area of study focused on digital circuits", correct: false },
      { text: "The study of electromagnetic fields", correct: false },
    ],
  },
  {
    question:
      "Which device is commonly used as a switch in power electronic circuits?",
    answers: [
      { text: "Resistor", correct: false },
      { text: "Diode", correct: false },
      { text: "Transistor", correct: true },
      { text: "Capacitor", correct: false },
    ],
  },
  {
    question: "What is the purpose of a rectifier in power electronics?",
    answers: [
      { text: "To generate AC voltage", correct: false },
      { text: "To convert AC voltage to DC voltage", correct: true },
      { text: "To filter high-frequency noise", correct: false },
      { text: "To store electrical energy", correct: false },
    ],
  },
  {
    question: "Which topology is commonly used for DC-DC converters?",
    answers: [
      { text: "Full bridge", correct: false },
      { text: "Boost converter", correct: false },
      { text: "Buck converter", correct: true },
      { text: "Flyback converter", correct: false },
    ],
  },
  {
    question: "What does an inverter do in power electronic systems?",
    answers: [
      { text: "Converts DC to AC", correct: true },
      { text: "Regulates voltage", correct: false },
      { text: "Filters harmonic distortion", correct: false },
      { text: "Stores energy in batteries", correct: false },
    ],
  },
  {
    question: "What is the function of a thyristor in power electronics?",
    answers: [
      { text: "To control voltage levels", correct: false },
      { text: "To regulate current flow", correct: false },
      { text: "To switch high power loads", correct: true },
      { text: "To measure energy consumption", correct: false },
    ],
  },
  {
    question:
      "Which device is used for overcurrent protection in power circuits?",
    answers: [
      { text: "Inductor", correct: false },
      { text: "Fuse", correct: true },
      { text: "Zener diode", correct: false },
      { text: "Optocoupler", correct: false },
    ],
  },
  {
    question: "What is the primary function of a chopper circuit?",
    answers: [
      { text: "To amplify signals", correct: false },
      { text: "To modulate radio frequencies", correct: false },
      { text: "To regulate voltage", correct: true },
      { text: "To convert digital signals to analog", correct: false },
    ],
  },
  {
    question:
      "Which type of converter is suitable for high-voltage applications?",
    answers: [
      { text: "Boost converter", correct: false },
      { text: "Flyback converter", correct: false },
      { text: "Full-bridge converter", correct: true },
      { text: "Buck-boost converter", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using IGBTs (Insulated Gate Bipolar Transistors) in power electronics?",
    answers: [
      { text: "Low cost", correct: false },
      { text: "High speed switching", correct: false },
      { text: "High current handling capability", correct: true },
      { text: "Low power dissipation", correct: false },
    ],
  },
  {
    question:
      "Which semiconductor device is commonly used for voltage regulation in power supplies?",
    answers: [
      { text: "MOSFET", correct: false },
      { text: "IGBT", correct: false },
      { text: "Zener diode", correct: true },
      { text: "SCR (Silicon Controlled Rectifier)", correct: false },
    ],
  },
  {
    question: "What does a snubber circuit do in power electronics?",
    answers: [
      { text: "Reduces electromagnetic interference", correct: false },
      { text: "Provides overvoltage protection", correct: false },
      { text: "Suppresses voltage spikes", correct: true },
      { text: "Filters out high-frequency noise", correct: false },
    ],
  },
  {
    question:
      "Which type of power converter is used for isolating input and output circuits?",
    answers: [
      { text: "Boost converter", correct: false },
      { text: "Flyback converter", correct: true },
      { text: "Buck converter", correct: false },
      { text: "Full-bridge converter", correct: false },
    ],
  },
  {
    question: "What is the purpose of a heat sink in power electronic devices?",
    answers: [
      { text: "To reduce electrical noise", correct: false },
      { text: "To improve heat dissipation", correct: true },
      { text: "To increase voltage regulation", correct: false },
      { text: "To store electrical energy", correct: false },
    ],
  },
  {
    question:
      "Which parameter is critical for selecting a capacitor in power electronics?",
    answers: [
      { text: "Voltage rating", correct: true },
      { text: "Resistance value", correct: false },
      { text: "Inductance", correct: false },
      { text: "Power dissipation", correct: false },
    ],
  },
  {
    question:
      "What is the function of a freewheeling diode in power electronic circuits?",
    answers: [
      { text: "To regulate voltage", correct: false },
      { text: "To protect against reverse voltage", correct: true },
      { text: "To amplify signals", correct: false },
      { text: "To filter high-frequency noise", correct: false },
    ],
  },
  {
    question: "Which power electronic device has the lowest conduction losses?",
    answers: [
      { text: "BJT (Bipolar Junction Transistor)", correct: false },
      {
        text: "MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)",
        correct: true,
      },
      { text: "IGBT (Insulated Gate Bipolar Transistor)", correct: false },
      { text: "SCR (Silicon Controlled Rectifier)", correct: false },
    ],
  },
  {
    question:
      "What is the primary disadvantage of using SCR (Silicon Controlled Rectifier) in power electronics?",
    answers: [
      { text: "Low current handling capability", correct: false },
      { text: "High switching losses", correct: true },
      { text: "Limited voltage rating", correct: false },
      { text: "Complex control circuitry", correct: false },
    ],
  },
  {
    question:
      "Which type of power converter is used for generating high-frequency AC signals?",
    answers: [
      { text: "Inverter", correct: false },
      { text: "Chopper", correct: true },
      { text: "Rectifier", correct: false },
      { text: "Converter", correct: false },
    ],
  },
  {
    question:
      "What is the primary function of a flyback transformer in power supplies?",
    answers: [
      { text: "To step up voltage", correct: false },
      { text: "To provide isolation", correct: true },
      { text: "To regulate current", correct: false },
      { text: "To filter noise", correct: false },
    ],
  },
];
////////////////////////////////////////////  V   L    S   i   ////////////////////////////////////////////////////
const VLSI = [
  {
    question: "What does VLSI stand for?",
    answers: [
      { text: "Very Long Static Interference", correct: false },
      { text: "Very Large Scale Integration", correct: true },
      { text: "Voltage Logic System Integration", correct: false },
      { text: "Virtual Low-Speed Interface", correct: false },
    ],
  },
  {
    question: "Which technology is used for fabricating VLSI circuits?",
    answers: [
      { text: "MOSFET", correct: true },
      { text: "BJT", correct: false },
      { text: "SCR", correct: false },
      { text: "IGBT", correct: false },
    ],
  },
  {
    question: "What is the primary advantage of VLSI technology?",
    answers: [
      { text: "Low power consumption", correct: false },
      { text: "High component count on a single chip", correct: true },
      { text: "Resistance to electromagnetic interference", correct: false },
      { text: "Easy prototyping", correct: false },
    ],
  },
  {
    question: "Which CAD tools are commonly used in VLSI design?",
    answers: [
      { text: "MATLAB", correct: false },
      { text: "OrCAD", correct: true },
      { text: "LabVIEW", correct: false },
      { text: "SolidWorks", correct: false },
    ],
  },
  {
    question: "What is meant by RTL in VLSI design?",
    answers: [
      { text: "Right Turn Left", correct: false },
      { text: "Resistor-Transistor Logic", correct: false },
      { text: "Register-Transfer Level", correct: true },
      { text: "Random Testing Language", correct: false },
    ],
  },
  {
    question:
      "Which company is known for pioneering the first microprocessor using VLSI technology?",
    answers: [
      { text: "Intel", correct: true },
      { text: "AMD", correct: false },
      { text: "IBM", correct: false },
      { text: "Texas Instruments", correct: false },
    ],
  },
  {
    question: "What is a standard cell in VLSI design?",
    answers: [
      { text: "A pre-designed transistor circuit", correct: true },
      { text: "A testing device for ICs", correct: false },
      { text: "A device for voltage regulation", correct: false },
      { text: "A module for data storage", correct: false },
    ],
  },
  {
    question:
      "Which programming language is often used for writing VLSI testbenches?",
    answers: [
      { text: "Java", correct: false },
      { text: "Verilog", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What is the main function of a multiplexer in VLSI circuits?",
    answers: [
      { text: "To amplify signals", correct: false },
      { text: "To perform arithmetic operations", correct: false },
      {
        text: "To select one of several inputs based on a control signal",
        correct: true,
      },
      { text: "To store data temporarily", correct: false },
    ],
  },
  {
    question:
      "Which process is used for embedding multiple layers of interconnects in VLSI fabrication?",
    answers: [
      { text: "Etching", correct: false },
      { text: "Lithography", correct: false },
      { text: "Deposition", correct: false },
      { text: "Metallization", correct: true },
    ],
  },
  {
    question: "What does DRC stand for in VLSI design?",
    answers: [
      { text: "Design Review Checklist", correct: false },
      { text: "Data Recovery Circuit", correct: false },
      { text: "Design Rule Check", correct: true },
      { text: "Digital Routing Controller", correct: false },
    ],
  },
  {
    question:
      "Which parameter is critical for reducing power consumption in VLSI circuits?",
    answers: [
      { text: "Clock frequency", correct: false },
      { text: "Operating temperature", correct: false },
      { text: "Supply voltage", correct: true },
      { text: "Interconnect length", correct: false },
    ],
  },
  {
    question: "What is meant by FPGA in VLSI technology?",
    answers: [
      { text: "Fast Processing Gate Array", correct: false },
      { text: "Field-Programmable Gate Array", correct: true },
      { text: "Floating Point Gate Array", correct: false },
      { text: "Frequency Pulse Generator Array", correct: false },
    ],
  },
  {
    question: "Which logic family is commonly used for low-power VLSI design?",
    answers: [
      { text: "TTL (Transistor-Transistor Logic)", correct: false },
      { text: "CMOS (Complementary Metal-Oxide-Semiconductor)", correct: true },
      { text: "ECL (Emitter-Coupled Logic)", correct: false },
      { text: "RTL (Resistor-Transistor Logic)", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of clock skew optimization in VLSI circuits?",
    answers: [
      { text: "To synchronize input signals", correct: false },
      { text: "To reduce power consumption", correct: false },
      {
        text: "To minimize timing delays between clock signals",
        correct: true,
      },
      { text: "To increase circuit density", correct: false },
    ],
  },
  {
    question:
      "Which type of simulation is used for verifying VLSI designs before fabrication?",
    answers: [
      { text: "Hardware-in-the-loop simulation", correct: false },
      { text: "Behavioral simulation", correct: true },
      { text: "Real-time simulation", correct: false },
      { text: "Firmware simulation", correct: false },
    ],
  },
  {
    question: "What is the primary role of a buffer in VLSI circuits?",
    answers: [
      { text: "To filter noise from signals", correct: false },
      { text: "To amplify signals", correct: false },
      {
        text: "To isolate high-current sections from low-current sections",
        correct: true,
      },
      { text: "To store data temporarily", correct: false },
    ],
  },
  {
    question:
      "Which technology node represents smaller feature sizes in VLSI fabrication?",
    answers: [
      { text: "90 nm", correct: false },
      { text: "45 nm", correct: true },
      { text: "180 nm", correct: false },
      { text: "500 nm", correct: false },
    ],
  },
  {
    question:
      "What is the main advantage of ASIC (Application-Specific Integrated Circuit) in VLSI design?",
    answers: [
      { text: "Flexibility for multiple applications", correct: false },
      { text: "Lower development cost", correct: true },
      { text: "High-speed processing capability", correct: false },
      { text: "Ease of programmability", correct: false },
    ],
  },
  {
    question:
      "Which technique is used for reducing crosstalk in VLSI interconnects?",
    answers: [
      { text: "Shielding", correct: true },
      { text: "Amplification", correct: false },
      { text: "Multiplexing", correct: false },
      { text: "Decoupling", correct: false },
    ],
  },
];
////////////////////////////////////////////  Control System  ////////////////////////////////////////////////////////
const Control_System = [
  {
    question: "What is a control system?",
    answers: [
      { text: "A system that manages employee work schedules", correct: false },
      {
        text: "A system that regulates the behavior of other systems or devices",
        correct: true,
      },
      {
        text: "A system that controls access to computer networks",
        correct: false,
      },
      { text: "A system that manages financial transactions", correct: false },
    ],
  },
  {
    question: "What is feedback in the context of control systems?",
    answers: [
      { text: "A method for monitoring employee performance", correct: false },
      {
        text: "The return of part of the output signal to the input",
        correct: true,
      },
      {
        text: "A mechanism for reporting errors in computer programs",
        correct: false,
      },
      { text: "A tool for managing customer complaints", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a characteristic of a closed-loop control system?",
    answers: [
      { text: "It has no feedback mechanism", correct: false },
      { text: "It does not require sensors", correct: false },
      { text: "It adjusts its operation based on feedback", correct: true },
      { text: "It operates only in discrete time", correct: false },
    ],
  },
  {
    question: "What is the purpose of a PID controller?",
    answers: [
      { text: "To play audio and video files", correct: false },
      {
        text: "To regulate industrial processes based on proportional, integral, and derivative actions",
        correct: true,
      },
      { text: "To encrypt data transmitted over networks", correct: false },
      {
        text: "To manage personal identification numbers in security systems",
        correct: false,
      },
    ],
  },
  {
    question: "What is the steady-state error in a control system?",
    answers: [
      {
        text: "The error that occurs when the system is first turned on",
        correct: false,
      },
      {
        text: "The error that persists after the system has stabilized",
        correct: true,
      },
      { text: "The error caused by noise in sensor readings", correct: false },
      {
        text: "The error in data transmission between computers",
        correct: false,
      },
    ],
  },
  {
    question: "What does the transfer function of a control system describe?",
    answers: [
      { text: "The physical layout of the control panel", correct: false },
      {
        text: "The relationship between the input and output signals",
        correct: true,
      },
      { text: "The steps involved in controlling a process", correct: false },
      {
        text: "The protocols used for communication between devices",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of control system is characterized by a fixed set of rules?",
    answers: [
      { text: "Open-loop control system", correct: true },
      { text: "Feedback control system", correct: false },
      { text: "Adaptive control system", correct: false },
      { text: "Digital control system", correct: false },
    ],
  },
  {
    question: "In control systems, what does 'plant' refer to?",
    answers: [
      { text: "A manufacturing facility", correct: false },
      { text: "The physical system being controlled", correct: true },
      { text: "A type of sensor used for measurement", correct: false },
      { text: "A software module for managing data", correct: false },
    ],
  },
  {
    question: "What is the role of actuators in control systems?",
    answers: [
      { text: "To measure physical quantities", correct: false },
      { text: "To process feedback signals", correct: false },
      {
        text: "To convert control signals into physical actions",
        correct: true,
      },
      { text: "To store historical data for analysis", correct: false },
    ],
  },
  {
    question: "What is the Nyquist criterion used for in control systems?",
    answers: [
      {
        text: "To determine the frequency response of a system",
        correct: true,
      },
      { text: "To select optimal PID controller gains", correct: false },
      {
        text: "To calculate the transfer function of a system",
        correct: false,
      },
      {
        text: "To predict steady-state errors in closed-loop systems",
        correct: false,
      },
    ],
  },
  {
    question: "What is meant by 'stability' in control systems?",
    answers: [
      {
        text: "The ability of a system to achieve desired performance",
        correct: false,
      },
      {
        text: "The resistance of a system to external disturbances",
        correct: false,
      },
      {
        text: "The absence of oscillations or unbounded growth in the system's response",
        correct: true,
      },
      { text: "The accuracy of sensor readings in the system", correct: false },
    ],
  },
  {
    question:
      "Which control system design method emphasizes graphical representation of system behavior?",
    answers: [
      { text: "State-space analysis", correct: false },
      { text: "Frequency response analysis", correct: true },
      { text: "Root locus analysis", correct: false },
      { text: "Time-domain analysis", correct: false },
    ],
  },
  {
    question: "What is the role of a sensor in a control system?",
    answers: [
      {
        text: "To convert physical quantities into electrical signals",
        correct: true,
      },
      { text: "To generate random numbers for system testing", correct: false },
      { text: "To store data in memory for future analysis", correct: false },
      {
        text: "To regulate the flow of data between subsystems",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of controller adjusts its parameters based on system behavior?",
    answers: [
      { text: "Proportional controller", correct: false },
      { text: "Integral controller", correct: false },
      { text: "Adaptive controller", correct: true },
      { text: "On-off controller", correct: false },
    ],
  },
  {
    question: "What is meant by 'response time' in control systems?",
    answers: [
      {
        text: "The duration of system operation before maintenance is required",
        correct: false,
      },
      {
        text: "The time taken for a system to achieve a steady-state response",
        correct: false,
      },
      {
        text: "The time delay between input signal changes and system response",
        correct: true,
      },
      {
        text: "The frequency of periodic signal oscillations in the system",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of control system is used for automated manufacturing processes?",
    answers: [
      { text: "Aircraft flight control system", correct: false },
      { text: "Process control system", correct: true },
      { text: "Vehicle stability control system", correct: false },
      { text: "Home automation system", correct: false },
    ],
  },
  {
    question:
      "What is the primary function of a compensator in control systems?",
    answers: [
      { text: "To monitor system performance metrics", correct: false },
      { text: "To correct errors in sensor readings", correct: false },
      {
        text: "To adjust the dynamics of a system to meet desired specifications",
        correct: true,
      },
      { text: "To regulate power supply voltages", correct: false },
    ],
  },
  {
    question:
      "Which control system design approach focuses on the analysis of poles and zeros in the s-domain?",
    answers: [
      { text: "Frequency response analysis", correct: false },
      { text: "Root locus analysis", correct: true },
      { text: "State-space analysis", correct: false },
      { text: "Time-domain analysis", correct: false },
    ],
  },
  {
    question: "What does 'steady-state response' refer to in control systems?",
    answers: [
      { text: "The initial transient behavior of the system", correct: false },
      {
        text: "The response of the system after it has settled to a constant value",
        correct: true,
      },
      {
        text: "The dynamic response of the system to input changes",
        correct: false,
      },
      { text: "The stability analysis of the control loop", correct: false },
    ],
  },
  {
    question:
      "Which type of controller is commonly used for on-off control applications?",
    answers: [
      { text: "PID controller", correct: false },
      { text: "On-off controller", correct: true },
      { text: "Adaptive controller", correct: false },
      { text: "Proportional controller", correct: false },
    ],
  },
];
////////////////////////////////////////////  Circuit  Theory  //////////////////////////////////////////////////////
const Circuit_Theory = [
  {
    question: "What is a circuit?",
    answers: [
      { text: "A path for electrical current", correct: true },
      { text: "A type of resistor", correct: false },
      { text: "A unit of measurement for voltage", correct: false },
      { text: "A component that stores electrical energy", correct: false },
    ],
  },
  {
    question: "What is Kirchhoff's Voltage Law (KVL) used for?",
    answers: [
      {
        text: "To analyze the current flowing through a circuit",
        correct: false,
      },
      {
        text: "To calculate the power dissipation in resistors",
        correct: false,
      },
      {
        text: "To determine the total resistance of a circuit",
        correct: false,
      },
      {
        text: "To analyze the voltages in a closed loop circuit",
        correct: true,
      },
    ],
  },
  {
    question: "What is the unit of electrical resistance?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ampere", correct: false },
      { text: "Ohm", correct: true },
      { text: "Watt", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of a capacitor in a circuit?",
    answers: [
      { text: "To amplify electrical signals", correct: false },
      { text: "To store electrical energy", correct: true },
      { text: "To generate magnetic fields", correct: false },
      { text: "To regulate voltage levels", correct: false },
    ],
  },
  {
    question:
      "Which law states that the total current entering a node is equal to the total current leaving the node?",
    answers: [
      { text: "Ohm's Law", correct: false },
      { text: "Kirchhoff's Current Law (KCL)", correct: true },
      { text: "Faraday's Law", correct: false },
      { text: "Lenz's Law", correct: false },
    ],
  },
  {
    question: "What is the main function of a diode in a circuit?",
    answers: [
      { text: "To control the flow of current", correct: true },
      { text: "To amplify electrical signals", correct: false },
      { text: "To store electrical charge", correct: false },
      { text: "To regulate voltage", correct: false },
    ],
  },
  {
    question: "What does Ohm's Law describe?",
    answers: [
      {
        text: "The relationship between voltage and current in a resistor",
        correct: true,
      },
      { text: "The behavior of capacitors in AC circuits", correct: false },
      { text: "The operation of transistors in amplifiers", correct: false },
      { text: "The generation of electromagnetic waves", correct: false },
    ],
  },
  {
    question: "What is the purpose of a transistor in electronic circuits?",
    answers: [
      { text: "To store data temporarily", correct: false },
      { text: "To generate electrical signals", correct: false },
      { text: "To amplify or switch electronic signals", correct: true },
      { text: "To measure current flow", correct: false },
    ],
  },
  {
    question:
      "Which component is used to control the flow of current between two terminals?",
    answers: [
      { text: "Resistor", correct: false },
      { text: "Capacitor", correct: false },
      { text: "Switch", correct: true },
      { text: "Inductor", correct: false },
    ],
  },
  {
    question: "What is the primary function of an inductor in a circuit?",
    answers: [
      { text: "To store electrical energy", correct: false },
      { text: "To control the flow of current", correct: false },
      { text: "To resist the flow of electrical current", correct: false },
      { text: "To store magnetic energy", correct: true },
    ],
  },
  {
    question: "What is resonance in an electrical circuit?",
    answers: [
      { text: "The ability of a circuit to amplify signals", correct: false },
      {
        text: "The frequency at which a circuit absorbs maximum power",
        correct: true,
      },
      {
        text: "The resistance of a circuit to changes in current",
        correct: false,
      },
      { text: "The ability of a circuit to store energy", correct: false },
    ],
  },
  {
    question:
      "What is the difference between AC (Alternating Current) and DC (Direct Current)?",
    answers: [
      {
        text: "AC flows in one direction only, while DC changes direction periodically",
        correct: false,
      },
      {
        text: "AC changes direction periodically, while DC flows in one direction only",
        correct: true,
      },
      {
        text: "AC is used for digital circuits, while DC is used for analog circuits",
        correct: false,
      },
      {
        text: "AC is safer to use in residential buildings, while DC is used in industrial settings",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which law states that the voltage across a resistor is proportional to the current flowing through it?",
    answers: [
      { text: "Faraday's Law", correct: false },
      { text: "Kirchhoff's Voltage Law (KVL)", correct: false },
      { text: "Ohm's Law", correct: true },
      { text: "Lenz's Law", correct: false },
    ],
  },
  {
    question: "What does 'impedance' represent in a circuit?",
    answers: [
      {
        text: "The ability of a circuit to generate electrical energy",
        correct: false,
      },
      { text: "The total resistance of a circuit", correct: false },
      {
        text: "The combination of resistance, inductance, and capacitance in AC circuits",
        correct: true,
      },
      { text: "The voltage drop across a resistor", correct: false },
    ],
  },
  {
    question: "What is the role of a fuse in an electrical circuit?",
    answers: [
      { text: "To store excess electrical charge", correct: false },
      { text: "To regulate the flow of current", correct: false },
      {
        text: "To protect the circuit from overcurrent conditions",
        correct: true,
      },
      { text: "To amplify electrical signals", correct: false },
    ],
  },
  {
    question: "What is the function of a transformer in electrical circuits?",
    answers: [
      { text: "To store electrical energy", correct: false },
      { text: "To convert DC to AC power", correct: false },
      { text: "To increase or decrease AC voltage levels", correct: true },
      { text: "To regulate current flow in a circuit", correct: false },
    ],
  },
  {
    question: "What does 'power factor' indicate in electrical circuits?",
    answers: [
      {
        text: "The efficiency of a circuit in converting electrical energy into heat",
        correct: false,
      },
      {
        text: "The ratio of true power to apparent power in AC circuits",
        correct: true,
      },
      {
        text: "The ability of a circuit to handle high voltage spikes",
        correct: false,
      },
      {
        text: "The resistance of a circuit to changes in current",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of a breadboard in electronics?",
    answers: [
      { text: "To store electronic components", correct: false },
      { text: "To provide a platform for prototyping circuits", correct: true },
      { text: "To control the flow of current in circuits", correct: false },
      { text: "To generate electrical signals for testing", correct: false },
    ],
  },
  {
    question:
      "Which law governs the conservation of energy in electrical circuits?",
    answers: [
      { text: "Ohm's Law", correct: false },
      { text: "Kirchhoff's Voltage Law (KVL)", correct: false },
      { text: "Kirchhoff's Current Law (KCL)", correct: false },
      { text: "The law of conservation of energy", correct: true },
    ],
  },
  {
    question: "What does 'grounding' refer to in electrical circuits?",
    answers: [
      {
        text: "The process of connecting a circuit to a power source",
        correct: false,
      },
      {
        text: "The protection of circuits from lightning strikes",
        correct: false,
      },
      {
        text: "The connection of a circuit to the Earth to prevent electrical hazards",
        correct: true,
      },
      { text: "The measurement of voltage levels in circuits", correct: false },
    ],
  },
];
///////////////////////////////////////////  Analog  Electronics  ///////////////////////////////////////////////////
const Analog_Electronics = [
  {
    question:
      "What is the primary function of a transistor in analog circuits?",
    answers: [
      { text: "To store data temporarily", correct: false },
      { text: "To amplify electrical signals", correct: true },
      { text: "To generate AC voltage", correct: false },
      { text: "To regulate power supply voltages", correct: false },
    ],
  },
  {
    question: "What is the purpose of a capacitor in an analog circuit?",
    answers: [
      { text: "To regulate current flow", correct: false },
      { text: "To store and release electrical energy", correct: true },
      { text: "To amplify voltage signals", correct: false },
      { text: "To protect against voltage spikes", correct: false },
    ],
  },
  {
    question: "Which parameter describes the gain of an amplifier?",
    answers: [
      { text: "Bandwidth", correct: false },
      { text: "Impedance", correct: false },
      { text: "Power dissipation", correct: false },
      { text: "Voltage gain", correct: true },
    ],
  },
  {
    question: "What does 'bandwidth' refer to in analog circuits?",
    answers: [
      {
        text: "The range of frequencies over which a device operates effectively",
        correct: true,
      },
      { text: "The total resistance in a circuit", correct: false },
      {
        text: "The maximum power handling capacity of a transistor",
        correct: false,
      },
      {
        text: "The speed of data transmission in digital circuits",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of a diode in analog electronics?",
    answers: [
      { text: "To store electrical charge", correct: false },
      { text: "To control the flow of current", correct: false },
      { text: "To rectify AC signals into DC signals", correct: true },
      { text: "To generate oscillations", correct: false },
    ],
  },
  {
    question:
      "Which circuit component is used to stabilize voltage levels in power supplies?",
    answers: [
      { text: "Inductor", correct: false },
      { text: "Resistor", correct: false },
      { text: "Zener diode", correct: true },
      { text: "Capacitor", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of an operational amplifier (op-amp) in analog circuits?",
    answers: [
      { text: "To store digital data", correct: false },
      { text: "To provide voltage regulation", correct: false },
      { text: "To amplify and process analog signals", correct: true },
      { text: "To convert digital signals to analog signals", correct: false },
    ],
  },
  {
    question: "What does 'resonance' mean in analog circuits?",
    answers: [
      {
        text: "The ability of a circuit to generate oscillations",
        correct: true,
      },
      {
        text: "The process of converting digital signals to analog signals",
        correct: false,
      },
      {
        text: "The resistance offered by a circuit to the flow of current",
        correct: false,
      },
      {
        text: "The capacity of a capacitor to store electrical charge",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the primary purpose of a transformer in analog circuits?",
    answers: [
      { text: "To regulate voltage levels", correct: true },
      { text: "To amplify electrical signals", correct: false },
      { text: "To convert DC to AC power", correct: false },
      {
        text: "To protect against electromagnetic interference",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of filter is used to pass only certain frequencies and block others?",
    answers: [
      { text: "Amplifier", correct: false },
      { text: "Capacitor", correct: false },
      { text: "Resonant circuit", correct: false },
      { text: "Bandpass filter", correct: true },
    ],
  },
  {
    question:
      "What is the primary function of a voltage regulator in analog circuits?",
    answers: [
      { text: "To amplify voltage signals", correct: false },
      { text: "To stabilize and regulate voltage levels", correct: true },
      { text: "To convert AC voltage to DC voltage", correct: false },
      { text: "To store electrical energy", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a crystal oscillator in analog electronics?",
    answers: [
      { text: "To amplify electrical signals", correct: false },
      {
        text: "To generate clock signals with precise frequencies",
        correct: true,
      },
      { text: "To regulate voltage levels", correct: false },
      { text: "To convert digital signals to analog signals", correct: false },
    ],
  },
  {
    question:
      "Which component is used to protect circuits from excessive current?",
    answers: [
      { text: "Transistor", correct: false },
      { text: "Fuse", correct: true },
      { text: "Op-amp", correct: false },
      { text: "Capacitor", correct: false },
    ],
  },
  {
    question:
      "What is the primary function of a potentiometer in analog circuits?",
    answers: [
      { text: "To measure current flow", correct: false },
      { text: "To convert analog signals to digital signals", correct: false },
      { text: "To vary resistance and control voltage levels", correct: true },
      { text: "To amplify voltage signals", correct: false },
    ],
  },
  {
    question:
      "Which characteristic of a capacitor determines its ability to store charge?",
    answers: [
      { text: "Capacitance", correct: true },
      { text: "Inductance", correct: false },
      { text: "Resistance", correct: false },
      { text: "Bandwidth", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of a choke coil in analog circuits?",
    answers: [
      { text: "To regulate voltage levels", correct: false },
      { text: "To filter out high-frequency noise", correct: true },
      { text: "To amplify electrical signals", correct: false },
      { text: "To convert AC voltage to DC voltage", correct: false },
    ],
  },
  {
    question: "Which type of amplifier has the highest gain?",
    answers: [
      { text: "Class A amplifier", correct: false },
      { text: "Class B amplifier", correct: false },
      { text: "Class C amplifier", correct: false },
      { text: "Class D amplifier", correct: true },
    ],
  },
  {
    question: "What is the function of a flyback diode in analog circuits?",
    answers: [
      { text: "To regulate current flow", correct: false },
      { text: "To protect against reverse voltage spikes", correct: true },
      { text: "To amplify electrical signals", correct: false },
      { text: "To convert AC voltage to DC voltage", correct: false },
    ],
  },
  {
    question:
      "Which characteristic of an inductor affects its ability to store energy?",
    answers: [
      { text: "Resistance", correct: false },
      { text: "Capacitance", correct: false },
      { text: "Inductance", correct: true },
      { text: "Bandwidth", correct: false },
    ],
  },
  {
    question: "What is the purpose of a feedback loop in analog amplifiers?",
    answers: [
      { text: "To stabilize amplifier gain", correct: true },
      { text: "To increase power dissipation", correct: false },
      { text: "To regulate voltage levels", correct: false },
      { text: "To convert digital signals to analog signals", correct: false },
    ],
  },
];
/////////////////////////////////////   Embedded System   ///////////////////////////////////////////////////////////
const Embedded_Systems = [
  {
    question: "What is an embedded system?",
    answers: [
      {
        text: "A software application that runs on a personal computer",
        correct: false,
      },
      {
        text: "A computer system with a dedicated function within a larger mechanical or electrical system",
        correct: true,
      },
      { text: "A general-purpose computer system", correct: false },
      { text: "A system used exclusively for data storage", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a characteristic of an embedded system?",
    answers: [
      { text: "It is designed for multiple tasks", correct: false },
      { text: "It is dedicated to a specific task", correct: true },
      { text: "It has high processing power", correct: false },
      {
        text: "It uses an operating system like Windows or macOS",
        correct: false,
      },
    ],
  },
  {
    question: "What is the role of a microcontroller in an embedded system?",
    answers: [
      { text: "To perform general-purpose computing", correct: false },
      {
        text: "To control specific functions within the system",
        correct: true,
      },
      { text: "To provide graphical output", correct: false },
      { text: "To manage network connections", correct: false },
    ],
  },
  {
    question:
      "Which programming language is commonly used in embedded systems?",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
      { text: "C", correct: true },
      { text: "Ruby", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using an RTOS in an embedded system?",
    answers: [
      { text: "It provides a graphical user interface", correct: false },
      {
        text: "It ensures real-time task scheduling and execution",
        correct: true,
      },
      { text: "It reduces power consumption", correct: false },
      { text: "It simplifies hardware design", correct: false },
    ],
  },
  {
    question: "What is the purpose of an ADC in an embedded system?",
    answers: [
      { text: "To convert digital signals to analog signals", correct: false },
      { text: "To amplify signals", correct: false },
      { text: "To convert analog signals to digital signals", correct: true },
      { text: "To regulate power supply", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a common communication protocol used in embedded systems?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "I2C", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
    ],
  },
  {
    question: "What does PWM stand for in embedded systems?",
    answers: [
      { text: "Pulse Width Modulation", correct: true },
      { text: "Phase Width Modulation", correct: false },
      { text: "Pulse Wave Modulation", correct: false },
      { text: "Phase Wave Modulation", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a type of memory used in embedded systems?",
    answers: [
      { text: "EEPROM", correct: false },
      { text: "RAM", correct: false },
      { text: "ROM", correct: false },
      { text: "CPU", correct: true },
    ],
  },
  {
    question: "What is the purpose of a watchdog timer in an embedded system?",
    answers: [
      {
        text: "To monitor and reset the system in case of a fault",
        correct: true,
      },
      { text: "To synchronize data communication", correct: false },
      { text: "To control power supply voltages", correct: false },
      { text: "To manage memory allocation", correct: false },
    ],
  },
  {
    question: "What is a bootloader in an embedded system?",
    answers: [
      {
        text: "A program that loads and starts the main operating system",
        correct: true,
      },
      { text: "A program that manages memory", correct: false },
      { text: "A program that controls peripheral devices", correct: false },
      { text: "A program that performs signal processing", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an example of a real-time operating system (RTOS)?",
    answers: [
      { text: "Windows", correct: false },
      { text: "Linux", correct: false },
      { text: "FreeRTOS", correct: true },
      { text: "macOS", correct: false },
    ],
  },
  {
    question: "In embedded systems, what is an interrupt?",
    answers: [
      {
        text: "A signal that causes the processor to stop and perform a specific task",
        correct: true,
      },
      { text: "A command to delete data", correct: false },
      { text: "A process to increase memory capacity", correct: false },
      { text: "A method to improve signal strength", correct: false },
    ],
  },
  {
    question: "What is a common use of UART in embedded systems?",
    answers: [
      { text: "To control motors", correct: false },
      { text: "To interface with sensors", correct: false },
      { text: "To facilitate serial communication", correct: true },
      { text: "To manage power supply", correct: false },
    ],
  },
  {
    question: "What is the function of a DAC in an embedded system?",
    answers: [
      { text: "To convert digital signals to analog signals", correct: true },
      { text: "To amplify signals", correct: false },
      { text: "To store data", correct: false },
      { text: "To regulate voltage", correct: false },
    ],
  },
  {
    question: "Which of the following best describes firmware?",
    answers: [
      {
        text: "Software designed to manage hardware operations",
        correct: true,
      },
      { text: "An application used for data processing", correct: false },
      { text: "A hardware component that stores data", correct: false },
      { text: "A tool for debugging software", correct: false },
    ],
  },
  {
    question: "What is the primary role of a sensor in an embedded system?",
    answers: [
      { text: "To store data", correct: false },
      { text: "To provide a user interface", correct: false },
      {
        text: "To measure and convert physical parameters to electrical signals",
        correct: true,
      },
      { text: "To control the power supply", correct: false },
    ],
  },
  {
    question: "What does SPI stand for in the context of embedded systems?",
    answers: [
      { text: "Serial Parallel Interface", correct: false },
      { text: "Serial Peripheral Interface", correct: true },
      { text: "System Peripheral Interface", correct: false },
      { text: "System Parallel Interface", correct: false },
    ],
  },
  {
    question: "What is an ISR in embedded systems?",
    answers: [
      { text: "Interrupt Service Routine", correct: true },
      { text: "Input Signal Resistor", correct: false },
      { text: "Integrated Signal Receiver", correct: false },
      { text: "Interrupt Signal Receiver", correct: false },
    ],
  },
  {
    question: "What is the purpose of debouncing in embedded systems?",
    answers: [
      { text: "To reduce signal noise", correct: false },
      {
        text: "To ensure stable signal reading from mechanical switches",
        correct: true,
      },
      { text: "To increase signal strength", correct: false },
      { text: "To manage power consumption", correct: false },
    ],
  },
];
////////////////////////////////////////  Communication System  /////////////////////////////////////////////////////
const Communication_Systems = [
  {
    question: "What is the primary function of a communication system?",
    answers: [
      { text: "To store data securely", correct: false },
      {
        text: "To transmit information from one place to another",
        correct: true,
      },
      { text: "To perform calculations quickly", correct: false },
      { text: "To control mechanical systems", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a type of modulation used in analog communication?",
    answers: [
      { text: "Amplitude Modulation (AM)", correct: true },
      { text: "Pulse Code Modulation (PCM)", correct: false },
      { text: "Frequency Division Multiplexing (FDM)", correct: false },
      { text: "Time Division Multiplexing (TDM)", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a carrier signal in communication systems?",
    answers: [
      { text: "To amplify the information signal", correct: false },
      {
        text: "To carry the information signal over long distances",
        correct: true,
      },
      { text: "To filter out noise", correct: false },
      { text: "To convert analog signals to digital signals", correct: false },
    ],
  },
  {
    question:
      "Which device is used to convert analog signals to digital signals?",
    answers: [
      { text: "Digital-to-Analog Converter (DAC)", correct: false },
      { text: "Analog-to-Digital Converter (ADC)", correct: true },
      { text: "Modulator", correct: false },
      { text: "Demodulator", correct: false },
    ],
  },
  {
    question: "What is bandwidth in the context of communication systems?",
    answers: [
      { text: "The amount of data that can be stored", correct: false },
      {
        text: "The range of frequencies that a communication channel can transmit",
        correct: true,
      },
      { text: "The speed of data processing", correct: false },
      { text: "The power output of a transmitter", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a type of digital modulation?",
    answers: [
      { text: "Quadrature Amplitude Modulation (QAM)", correct: false },
      { text: "Frequency Shift Keying (FSK)", correct: false },
      { text: "Phase Shift Keying (PSK)", correct: false },
      { text: "Amplitude Modulation (AM)", correct: true },
    ],
  },
  {
    question: "What is the role of a demodulator in a communication system?",
    answers: [
      { text: "To amplify the received signal", correct: false },
      {
        text: "To extract the information signal from the carrier signal",
        correct: true,
      },
      { text: "To generate the carrier signal", correct: false },
      { text: "To convert digital signals to analog signals", correct: false },
    ],
  },
  {
    question: "What does SNR stand for in communication systems?",
    answers: [
      { text: "Signal-to-Noise Ratio", correct: true },
      { text: "Signal Network Range", correct: false },
      { text: "Signal Number Rate", correct: false },
      { text: "Standard Noise Reduction", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a type of noise in communication systems?",
    answers: [
      { text: "Thermal noise", correct: true },
      { text: "Voltage noise", correct: false },
      { text: "Power noise", correct: false },
      { text: "Current noise", correct: false },
    ],
  },
  {
    question:
      "What is the main advantage of digital communication over analog communication?",
    answers: [
      { text: "Higher power consumption", correct: false },
      { text: "Lower signal-to-noise ratio", correct: false },
      { text: "Better noise immunity", correct: true },
      { text: "Simpler signal processing", correct: false },
    ],
  },
  {
    question:
      "Which communication technique uses multiple frequencies to transmit multiple signals simultaneously?",
    answers: [
      { text: "Time Division Multiplexing (TDM)", correct: false },
      { text: "Frequency Division Multiplexing (FDM)", correct: true },
      { text: "Code Division Multiple Access (CDMA)", correct: false },
      { text: "Space Division Multiplexing (SDM)", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of error detection and correction in communication systems?",
    answers: [
      { text: "To increase the transmission speed", correct: false },
      { text: "To ensure accurate data transmission", correct: true },
      { text: "To reduce power consumption", correct: false },
      { text: "To simplify modulation techniques", correct: false },
    ],
  },
  {
    question:
      "What is an antenna's primary function in a communication system?",
    answers: [
      { text: "To store energy", correct: false },
      { text: "To transmit and receive electromagnetic waves", correct: true },
      { text: "To amplify signals", correct: false },
      { text: "To convert digital signals to analog signals", correct: false },
    ],
  },
  {
    question: "What is the purpose of multiplexing in communication systems?",
    answers: [
      {
        text: "To increase the power of the transmitted signal",
        correct: false,
      },
      {
        text: "To combine multiple signals into one for transmission",
        correct: true,
      },
      { text: "To convert analog signals to digital signals", correct: false },
      { text: "To amplify received signals", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a disadvantage of wireless communication?",
    answers: [
      { text: "Limited mobility", correct: false },
      { text: "Higher cost of implementation", correct: false },
      { text: "Susceptibility to interference and noise", correct: true },
      { text: "Reduced signal strength over long distances", correct: false },
    ],
  },
  {
    question: "What is modulation in the context of communication systems?",
    answers: [
      { text: "The process of amplifying a signal", correct: false },
      {
        text: "The process of varying a carrier signal to transmit information",
        correct: true,
      },
      { text: "The process of filtering out noise", correct: false },
      {
        text: "The process of converting digital signals to analog signals",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of modulation is used in Frequency Modulation (FM) radio?",
    answers: [
      { text: "Amplitude Modulation (AM)", correct: false },
      { text: "Phase Modulation (PM)", correct: false },
      { text: "Frequency Modulation (FM)", correct: true },
      { text: "Pulse Modulation", correct: false },
    ],
  },
  {
    question:
      "What is the primary purpose of a repeater in a communication system?",
    answers: [
      { text: "To store data", correct: false },
      { text: "To extend the range of a communication signal", correct: true },
      { text: "To amplify audio signals", correct: false },
      { text: "To convert signals from analog to digital", correct: false },
    ],
  },
  {
    question: "What does BER stand for in communication systems?",
    answers: [
      { text: "Bit Error Rate", correct: true },
      { text: "Bandwidth Error Ratio", correct: false },
      { text: "Binary Encoding Rate", correct: false },
      { text: "Bit Encoding Ratio", correct: false },
    ],
  },
  {
    question: "Which of the following is a type of analog modulation?",
    answers: [
      { text: "Amplitude Modulation (AM)", correct: true },
      { text: "Quadrature Amplitude Modulation (QAM)", correct: false },
      { text: "Phase Shift Keying (PSK)", correct: false },
      { text: "Frequency Shift Keying (FSK)", correct: false },
    ],
  },
];
////////////////////////////////////////   Microwave Engineering   //////////////////////////////////////////////////
const Microwave_Engineering = [
  {
    question: "What is the typical frequency range of microwaves?",
    answers: [
      { text: "3 Hz to 30 Hz", correct: false },
      { text: "3 GHz to 30 GHz", correct: true },
      { text: "300 MHz to 3 GHz", correct: false },
      { text: "30 GHz to 300 GHz", correct: false },
    ],
  },
  {
    question: "Which component is commonly used for generating microwaves?",
    answers: [
      { text: "Transistor", correct: false },
      { text: "Klystron", correct: true },
      { text: "Diode", correct: false },
      { text: "Resistor", correct: false },
    ],
  },
  {
    question:
      "What is the primary application of a waveguide in microwave engineering?",
    answers: [
      { text: "To store energy", correct: false },
      { text: "To amplify signals", correct: false },
      {
        text: "To transmit microwaves from one point to another",
        correct: true,
      },
      { text: "To filter signals", correct: false },
    ],
  },
  {
    question:
      "Which type of modulation is commonly used in microwave communication?",
    answers: [
      { text: "Amplitude Modulation (AM)", correct: false },
      { text: "Frequency Modulation (FM)", correct: false },
      { text: "Pulse Code Modulation (PCM)", correct: false },
      { text: "Phase Modulation (PM)", correct: true },
    ],
  },
  {
    question: "What is the purpose of a circulator in a microwave system?",
    answers: [
      { text: "To amplify signals", correct: false },
      { text: "To convert AC to DC", correct: false },
      {
        text: "To direct microwave signals in a specific direction",
        correct: true,
      },
      { text: "To generate microwaves", correct: false },
    ],
  },
  {
    question:
      "Which material is commonly used for microwave circuit substrates?",
    answers: [
      { text: "Silicon", correct: false },
      { text: "Copper", correct: false },
      { text: "Gallium Arsenide (GaAs)", correct: true },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question: "What is a Gunn diode used for in microwave engineering?",
    answers: [
      { text: "As a mixer", correct: false },
      { text: "As an oscillator", correct: true },
      { text: "As a filter", correct: false },
      { text: "As an amplifier", correct: false },
    ],
  },
  {
    question:
      "What is the primary purpose of a magnetron in microwave engineering?",
    answers: [
      { text: "To detect microwaves", correct: false },
      { text: "To convert microwaves to light", correct: false },
      { text: "To generate microwaves", correct: true },
      { text: "To store microwaves", correct: false },
    ],
  },
  {
    question: "Which type of filter is commonly used in microwave circuits?",
    answers: [
      { text: "Low-pass filter", correct: false },
      { text: "High-pass filter", correct: false },
      { text: "Band-pass filter", correct: true },
      { text: "Notch filter", correct: false },
    ],
  },
  {
    question:
      "What is a scalar network analyzer used for in microwave engineering?",
    answers: [
      { text: "To measure voltage levels", correct: false },
      {
        text: "To measure scalar (magnitude) properties of microwave components",
        correct: true,
      },
      { text: "To generate microwave signals", correct: false },
      { text: "To filter microwave signals", correct: false },
    ],
  },
  {
    question: "Which parameter is measured by a vector network analyzer (VNA)?",
    answers: [
      { text: "Current", correct: false },
      { text: "Power", correct: false },
      { text: "Impedance", correct: false },
      { text: "Scattering parameters (S-parameters)", correct: true },
    ],
  },
  {
    question:
      "What is the typical use of a directional coupler in microwave systems?",
    answers: [
      { text: "To increase signal power", correct: false },
      { text: "To couple a specific amount of microwave power", correct: true },
      { text: "To convert DC to AC", correct: false },
      { text: "To store microwave energy", correct: false },
    ],
  },
  {
    question: "What is the main characteristic of a TEM mode in a waveguide?",
    answers: [
      { text: "Transverse electric and magnetic fields", correct: true },
      { text: "Transverse electric field only", correct: false },
      { text: "Transverse magnetic field only", correct: false },
      { text: "Longitudinal electric field only", correct: false },
    ],
  },
  {
    question: "What does VSWR stand for in microwave engineering?",
    answers: [
      { text: "Voltage Standing Wave Ratio", correct: true },
      { text: "Voltage Signal Wave Ratio", correct: false },
      { text: "Voltage System Wave Ratio", correct: false },
      { text: "Voltage Supply Wave Ratio", correct: false },
    ],
  },
  {
    question:
      "Which component is used to measure the power of microwave signals?",
    answers: [
      { text: "Oscilloscope", correct: false },
      { text: "Spectrum analyzer", correct: false },
      { text: "Power meter", correct: true },
      { text: "Network analyzer", correct: false },
    ],
  },
  {
    question: "What is the function of a microwave isolator?",
    answers: [
      { text: "To store microwave energy", correct: false },
      { text: "To amplify microwave signals", correct: false },
      {
        text: "To allow signal transmission in one direction only",
        correct: true,
      },
      { text: "To filter microwave signals", correct: false },
    ],
  },
  {
    question:
      "What is the advantage of using a microstrip line in microwave circuits?",
    answers: [
      { text: "Low cost and easy fabrication", correct: true },
      { text: "High power handling", correct: false },
      { text: "Wide bandwidth", correct: false },
      { text: "Low insertion loss", correct: false },
    ],
  },
  {
    question: "What does the term 'cutoff frequency' refer to in waveguides?",
    answers: [
      { text: "The maximum frequency that can be transmitted", correct: false },
      {
        text: "The frequency below which the waveguide cannot support a propagating mode",
        correct: true,
      },
      {
        text: "The frequency at which the waveguide is most efficient",
        correct: false,
      },
      {
        text: "The frequency above which the waveguide cannot support a propagating mode",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which phenomenon causes signal attenuation in microwave communication?",
    answers: [
      { text: "Reflection", correct: false },
      { text: "Scattering", correct: false },
      { text: "Absorption", correct: true },
      { text: "Diffraction", correct: false },
    ],
  },
  {
    question:
      "What is the primary use of a parabolic reflector in microwave communication?",
    answers: [
      { text: "To filter microwave signals", correct: false },
      { text: "To amplify microwave signals", correct: false },
      { text: "To focus and direct microwave signals", correct: true },
      { text: "To store microwave energy", correct: false },
    ],
  },
];
//////////////////////////////////////  Wireless communication  /////////////////////////////////////////////////////
const Wireless_Communications = [
  {
    question:
      "What is the main purpose of a base station in wireless communication?",
    answers: [
      { text: "To store data", correct: false },
      { text: "To amplify signals", correct: false },
      { text: "To manage communication with mobile devices", correct: true },
      { text: "To regulate power supply", correct: false },
    ],
  },
  {
    question: "What is the full form of LTE in wireless communication?",
    answers: [
      { text: "Local Telecommunication Exchange", correct: false },
      { text: "Long Term Evolution", correct: true },
      { text: "Local Transmission Equipment", correct: false },
      { text: "Long Transmission Expansion", correct: false },
    ],
  },
  {
    question: "What frequency band is commonly used for Wi-Fi networks?",
    answers: [
      { text: "900 MHz", correct: false },
      { text: "1.8 GHz", correct: false },
      { text: "2.4 GHz and 5 GHz", correct: true },
      { text: "3.5 GHz", correct: false },
    ],
  },
  {
    question: "What modulation technique is widely used in 4G LTE?",
    answers: [
      { text: "Amplitude Modulation (AM)", correct: false },
      { text: "Frequency Modulation (FM)", correct: false },
      {
        text: "Orthogonal Frequency Division Multiplexing (OFDM)",
        correct: true,
      },
      { text: "Phase Modulation (PM)", correct: false },
    ],
  },
  {
    question:
      "What is the primary function of an antenna in wireless communication?",
    answers: [
      { text: "To store electrical energy", correct: false },
      {
        text: "To convert electrical signals to radio waves and vice versa",
        correct: true,
      },
      { text: "To amplify signals", correct: false },
      { text: "To regulate current flow", correct: false },
    ],
  },
  {
    question:
      "Which technology is used for short-range wireless communication between devices?",
    answers: [
      { text: "Bluetooth", correct: true },
      { text: "Wi-Fi", correct: false },
      { text: "LTE", correct: false },
      { text: "5G", correct: false },
    ],
  },
  {
    question: "What is the maximum data rate of a typical 5G network?",
    answers: [
      { text: "100 Mbps", correct: false },
      { text: "1 Gbps", correct: false },
      { text: "10 Gbps", correct: true },
      { text: "100 Gbps", correct: false },
    ],
  },
  {
    question:
      "What is the main advantage of using multiple-input multiple-output (MIMO) technology?",
    answers: [
      { text: "Reduced power consumption", correct: false },
      { text: "Increased data rates and link reliability", correct: true },
      { text: "Simplified network architecture", correct: false },
      { text: "Lower latency", correct: false },
    ],
  },
  {
    question:
      "Which type of modulation is used in Wi-Fi 6 (802.11ax) for improved efficiency?",
    answers: [
      { text: "Quadrature Amplitude Modulation (QAM)", correct: true },
      { text: "Frequency Shift Keying (FSK)", correct: false },
      { text: "Amplitude Modulation (AM)", correct: false },
      { text: "Phase Modulation (PM)", correct: false },
    ],
  },
  {
    question: "What is the function of a handover in cellular networks?",
    answers: [
      { text: "To increase signal strength", correct: false },
      {
        text: "To transfer an ongoing call or data session from one cell to another",
        correct: true,
      },
      { text: "To encode data for transmission", correct: false },
      { text: "To provide power to mobile devices", correct: false },
    ],
  },
  {
    question: "What does the term 'cell' refer to in cellular networks?",
    answers: [
      { text: "A mobile device", correct: false },
      { text: "A geographic area covered by a base station", correct: true },
      { text: "A type of modulation", correct: false },
      { text: "A signal amplifier", correct: false },
    ],
  },
  {
    question:
      "Which frequency band is primarily used for 5G millimeter wave (mmWave) communication?",
    answers: [
      { text: "700 MHz", correct: false },
      { text: "2.4 GHz", correct: false },
      { text: "28 GHz", correct: true },
      { text: "5 GHz", correct: false },
    ],
  },
  {
    question:
      "What is the main purpose of the Global System for Mobile Communications (GSM)?",
    answers: [
      { text: "To provide high-speed internet", correct: false },
      { text: "To ensure secure email communication", correct: false },
      { text: "To standardize mobile communication", correct: true },
      { text: "To amplify radio signals", correct: false },
    ],
  },
  {
    question:
      "Which protocol is used for secure communication over wireless networks?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "FTP", correct: false },
      { text: "WPA3", correct: true },
      { text: "SMTP", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using Frequency Division Duplex (FDD) over Time Division Duplex (TDD)?",
    answers: [
      { text: "Lower cost", correct: false },
      { text: "Higher data rates", correct: false },
      { text: "Simultaneous transmission and reception", correct: true },
      { text: "Lower latency", correct: false },
    ],
  },
  {
    question: "What is the typical range of a Bluetooth connection?",
    answers: [
      { text: "1-2 meters", correct: false },
      { text: "10-100 meters", correct: true },
      { text: "500-1000 meters", correct: false },
      { text: "1-10 kilometers", correct: false },
    ],
  },
  {
    question:
      "Which technology is used to extend the range of wireless networks?",
    answers: [
      { text: "Router", correct: false },
      { text: "Repeater", correct: true },
      { text: "Modem", correct: false },
      { text: "Switch", correct: false },
    ],
  },
  {
    question: "What is the main function of a cellular network's core network?",
    answers: [
      { text: "To manage radio frequencies", correct: false },
      {
        text: "To control and route data between base stations and external networks",
        correct: true,
      },
      { text: "To amplify signal strength", correct: false },
      { text: "To provide power to mobile devices", correct: false },
    ],
  },
  {
    question: "What is the purpose of carrier aggregation in LTE-Advanced?",
    answers: [
      { text: "To reduce interference", correct: false },
      {
        text: "To increase data rates by combining multiple frequency bands",
        correct: true,
      },
      { text: "To enhance security", correct: false },
      { text: "To simplify network design", correct: false },
    ],
  },
  {
    question:
      "Which multiple access technique is used in CDMA (Code Division Multiple Access)?",
    answers: [
      { text: "Time Division Multiple Access (TDMA)", correct: false },
      { text: "Frequency Division Multiple Access (FDMA)", correct: false },
      { text: "Code Division Multiple Access (CDMA)", correct: true },
      { text: "Space Division Multiple Access (SDMA)", correct: false },
    ],
  },
];
///////////////////////////////////////////  Optical Communication   ///////////////////////////////////////////////
const Optical_Communication = [
  {
    question:
      "What is the primary advantage of using optical fibers for communication?",
    answers: [
      { text: "Lower cost", correct: false },
      { text: "Higher bandwidth and data rates", correct: true },
      { text: "Ease of installation", correct: false },
      { text: "Lower power consumption", correct: false },
    ],
  },
  {
    question: "What material is typically used to make optical fibers?",
    answers: [
      { text: "Plastic", correct: false },
      { text: "Glass or silica", correct: true },
      { text: "Copper", correct: false },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question:
      "What is the core function of an optical transmitter in a fiber optic communication system?",
    answers: [
      {
        text: "To convert electrical signals to optical signals",
        correct: true,
      },
      { text: "To amplify optical signals", correct: false },
      { text: "To store data", correct: false },
      {
        text: "To convert optical signals to electrical signals",
        correct: false,
      },
    ],
  },
  {
    question: "Which device is used to couple light into an optical fiber?",
    answers: [
      { text: "Modulator", correct: false },
      { text: "Laser diode", correct: true },
      { text: "Photodiode", correct: false },
      { text: "Optical amplifier", correct: false },
    ],
  },
  {
    question: "What is attenuation in optical fibers?",
    answers: [
      { text: "The increase in signal power", correct: false },
      {
        text: "The reduction of signal strength as it travels through the fiber",
        correct: true,
      },
      { text: "The dispersion of light signals", correct: false },
      { text: "The reflection of light signals", correct: false },
    ],
  },
  {
    question: "What is the purpose of an optical repeater?",
    answers: [
      {
        text: "To convert optical signals to electrical signals",
        correct: false,
      },
      { text: "To amplify and regenerate optical signals", correct: true },
      { text: "To store optical data", correct: false },
      { text: "To modulate optical signals", correct: false },
    ],
  },
  {
    question:
      "Which phenomenon causes light to be confined within the core of an optical fiber?",
    answers: [
      { text: "Reflection", correct: false },
      { text: "Refraction", correct: false },
      { text: "Total internal reflection", correct: true },
      { text: "Dispersion", correct: false },
    ],
  },
  {
    question:
      "What is the typical wavelength range used for optical communication?",
    answers: [
      { text: "400-700 nm", correct: false },
      { text: "700-1000 nm", correct: false },
      { text: "850-1550 nm", correct: true },
      { text: "2000-3000 nm", correct: false },
    ],
  },
  {
    question:
      "What type of optical fiber has a large core and supports multiple modes of light propagation?",
    answers: [
      { text: "Single-mode fiber", correct: false },
      { text: "Multi-mode fiber", correct: true },
      { text: "Plastic optical fiber", correct: false },
      { text: "Graded-index fiber", correct: false },
    ],
  },
  {
    question:
      "Which component is used to split or combine optical signals in a fiber optic network?",
    answers: [
      { text: "Optical coupler", correct: true },
      { text: "Optical isolator", correct: false },
      { text: "Optical amplifier", correct: false },
      { text: "Optical modulator", correct: false },
    ],
  },
  {
    question: "What is chromatic dispersion in optical fibers?",
    answers: [
      {
        text: "The spreading of light pulses due to different wavelengths traveling at different speeds",
        correct: true,
      },
      { text: "The attenuation of light signals", correct: false },
      { text: "The reflection of light signals", correct: false },
      { text: "The scattering of light signals", correct: false },
    ],
  },
  {
    question:
      "What is the main function of a photodetector in an optical communication system?",
    answers: [
      { text: "To amplify optical signals", correct: false },
      {
        text: "To convert optical signals to electrical signals",
        correct: true,
      },
      { text: "To store optical data", correct: false },
      { text: "To modulate optical signals", correct: false },
    ],
  },
  {
    question:
      "What type of laser is commonly used in optical communication systems?",
    answers: [
      { text: "CO2 laser", correct: false },
      { text: "He-Ne laser", correct: false },
      { text: "Semiconductor laser diode", correct: true },
      { text: "Argon-ion laser", correct: false },
    ],
  },
  {
    question:
      "Which type of optical fiber has a small core and supports only a single mode of light propagation?",
    answers: [
      { text: "Single-mode fiber", correct: true },
      { text: "Multi-mode fiber", correct: false },
      { text: "Plastic optical fiber", correct: false },
      { text: "Graded-index fiber", correct: false },
    ],
  },
  {
    question:
      "What is the main disadvantage of multi-mode fibers compared to single-mode fibers?",
    answers: [
      { text: "Higher attenuation", correct: false },
      { text: "Higher cost", correct: false },
      { text: "Limited bandwidth and distance", correct: true },
      { text: "Complex installation process", correct: false },
    ],
  },
  {
    question: "What is the function of an optical amplifier?",
    answers: [
      {
        text: "To convert optical signals to electrical signals",
        correct: false,
      },
      {
        text: "To amplify optical signals directly without converting them to electrical signals",
        correct: true,
      },
      { text: "To modulate optical signals", correct: false },
      { text: "To split optical signals", correct: false },
    ],
  },
  {
    question:
      "Which component is used to control the intensity, phase, or polarization of light in optical communication?",
    answers: [
      { text: "Optical coupler", correct: false },
      { text: "Optical modulator", correct: true },
      { text: "Optical isolator", correct: false },
      { text: "Optical amplifier", correct: false },
    ],
  },
  {
    question: "What is the main cause of signal loss in optical fibers?",
    answers: [
      { text: "Chromatic dispersion", correct: false },
      { text: "Total internal reflection", correct: false },
      { text: "Attenuation due to absorption and scattering", correct: true },
      { text: "Modulation instability", correct: false },
    ],
  },
  {
    question:
      "What is Wavelength Division Multiplexing (WDM) in optical communication?",
    answers: [
      { text: "A technique to amplify optical signals", correct: false },
      {
        text: "A method to convert optical signals to electrical signals",
        correct: false,
      },
      {
        text: "A method to combine multiple wavelengths of light into a single fiber",
        correct: true,
      },
      { text: "A technique to split optical signals", correct: false },
    ],
  },
  {
    question:
      "What is the main advantage of using optical communication over traditional copper wires?",
    answers: [
      { text: "Lower cost", correct: false },
      {
        text: "Higher bandwidth and longer transmission distances",
        correct: true,
      },
      { text: "Ease of installation", correct: false },
      { text: "Lower power consumption", correct: false },
    ],
  },
];
///////////////////////////////////////  Mobile COmmunication  //////////////////////////////////////////////////////
const Mobile_Communication = [
  {
    question: "What is the primary function of a mobile communication system?",
    answers: [
      { text: "To provide television broadcasting services", correct: false },
      {
        text: "To enable wireless voice and data communication",
        correct: true,
      },
      { text: "To facilitate wired internet access", correct: false },
      { text: "To provide landline telephone services", correct: false },
    ],
  },
  {
    question:
      "Which generation of mobile communication introduced digital cellular networks?",
    answers: [
      { text: "1G", correct: false },
      { text: "2G", correct: true },
      { text: "3G", correct: false },
      { text: "4G", correct: false },
    ],
  },
  {
    question: "What technology is primarily used in 4G mobile networks?",
    answers: [
      { text: "CDMA", correct: false },
      { text: "GSM", correct: false },
      { text: "LTE", correct: true },
      { text: "AMPS", correct: false },
    ],
  },
  {
    question: "What is the full form of GSM?",
    answers: [
      { text: "Global System for Messaging", correct: false },
      { text: "Global System for Mobile Communications", correct: true },
      { text: "Global Satellite Messaging", correct: false },
      { text: "Global Standard for Mobile", correct: false },
    ],
  },
  {
    question: "What is the main advantage of 5G over 4G?",
    answers: [
      { text: "Lower latency and higher data rates", correct: true },
      { text: "Longer battery life for devices", correct: false },
      { text: "Lower power consumption", correct: false },
      { text: "Simpler network architecture", correct: false },
    ],
  },
  {
    question: "Which frequency bands are typically used for 5G communication?",
    answers: [
      { text: "700 MHz - 2.6 GHz", correct: false },
      { text: "2.6 GHz - 4.9 GHz", correct: false },
      { text: "24 GHz - 100 GHz", correct: true },
      { text: "150 MHz - 500 MHz", correct: false },
    ],
  },
  {
    question: "What is a cell in mobile communication?",
    answers: [
      { text: "A single mobile device", correct: false },
      { text: "A base station", correct: false },
      { text: "A geographical area covered by a base station", correct: true },
      { text: "A type of antenna", correct: false },
    ],
  },
  {
    question: "What is the purpose of a SIM card in a mobile phone?",
    answers: [
      { text: "To store contact information", correct: false },
      { text: "To store the operating system", correct: false },
      {
        text: "To identify and authenticate the user to the network",
        correct: true,
      },
      { text: "To enhance signal strength", correct: false },
    ],
  },
  {
    question: "What is handover in mobile communication?",
    answers: [
      {
        text: "The process of switching from one cell to another",
        correct: true,
      },
      { text: "The process of ending a call", correct: false },
      { text: "The process of updating the SIM card", correct: false },
      { text: "The process of switching off the mobile phone", correct: false },
    ],
  },
  {
    question:
      "Which protocol is used for data transmission in mobile networks?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "FTP", correct: false },
      { text: "TCP/IP", correct: true },
      { text: "SMTP", correct: false },
    ],
  },
  {
    question: "What is the main purpose of a base station in a mobile network?",
    answers: [
      { text: "To store user data", correct: false },
      { text: "To charge mobile devices", correct: false },
      { text: "To transmit and receive radio signals", correct: true },
      { text: "To manage network security", correct: false },
    ],
  },
  {
    question: "What does VoLTE stand for?",
    answers: [
      { text: "Voice over LTE", correct: true },
      { text: "Video over LTE", correct: false },
      { text: "Virtual LTE", correct: false },
      { text: "Volume over LTE", correct: false },
    ],
  },
  {
    question: "Which technology enables high-speed internet on mobile devices?",
    answers: [
      { text: "GPRS", correct: false },
      { text: "EDGE", correct: false },
      { text: "HSPA", correct: false },
      { text: "LTE", correct: true },
    ],
  },
  {
    question:
      "What is the primary function of an antenna in mobile communication?",
    answers: [
      { text: "To amplify signals", correct: false },
      { text: "To transmit and receive electromagnetic waves", correct: true },
      { text: "To convert digital signals to analog", correct: false },
      { text: "To store data", correct: false },
    ],
  },
  {
    question: "What is the typical range of a Wi-Fi network?",
    answers: [
      { text: "10-20 meters", correct: true },
      { text: "50-100 meters", correct: false },
      { text: "100-200 meters", correct: false },
      { text: "200-500 meters", correct: false },
    ],
  },
  {
    question:
      "Which mobile communication standard supports both data and voice services?",
    answers: [
      { text: "1G", correct: false },
      { text: "2G", correct: true },
      { text: "AMPS", correct: false },
      { text: "VoIP", correct: false },
    ],
  },
  {
    question: "What is the purpose of an IMSI in mobile communication?",
    answers: [
      { text: "To provide internet access", correct: false },
      {
        text: "To uniquely identify a subscriber in a mobile network",
        correct: true,
      },
      { text: "To increase signal strength", correct: false },
      { text: "To enable voice calls", correct: false },
    ],
  },
  {
    question:
      "Which technology is used for short-range communication between devices?",
    answers: [
      { text: "NFC", correct: true },
      { text: "Wi-Fi", correct: false },
      { text: "Bluetooth", correct: false },
      { text: "Zigbee", correct: false },
    ],
  },
  {
    question: "What does the acronym SMS stand for?",
    answers: [
      { text: "Short Message Service", correct: true },
      { text: "Signal Modulation Service", correct: false },
      { text: "Subscriber Management System", correct: false },
      { text: "Service Management System", correct: false },
    ],
  },
  {
    question: "What is the main purpose of the HLR in a mobile network?",
    answers: [
      { text: "To amplify signals", correct: false },
      { text: "To store and manage subscriber information", correct: true },
      { text: "To provide internet access", correct: false },
      { text: "To transmit radio signals", correct: false },
    ],
  },
];
///////////////////////////////////////// Salellite COmmunication  //////////////////////////////////////////////////
const Satellite_Communication = [
  {
    question: "What is the primary function of a communication satellite?",
    answers: [
      { text: "To provide weather forecasting", correct: false },
      { text: "To relay communication signals", correct: true },
      { text: "To conduct scientific research in space", correct: false },
      { text: "To navigate aircraft", correct: false },
    ],
  },
  {
    question: "What is the geostationary orbit?",
    answers: [
      {
        text: "An orbit in which a satellite orbits the Earth in 90 minutes",
        correct: false,
      },
      {
        text: "An orbit where the satellite appears stationary relative to the Earth's surface",
        correct: true,
      },
      { text: "An orbit that passes over the poles", correct: false },
      { text: "An orbit that lies between Earth and the Moon", correct: false },
    ],
  },
  {
    question:
      "Which frequency band is primarily used for satellite communication?",
    answers: [
      { text: "AM band", correct: false },
      { text: "FM band", correct: false },
      { text: "Ku band", correct: true },
      { text: "VLF band", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a transponder in a communication satellite?",
    answers: [
      { text: "To store energy", correct: false },
      { text: "To amplify and relay signals", correct: true },
      { text: "To provide navigation services", correct: false },
      { text: "To transmit weather data", correct: false },
    ],
  },
  {
    question: "Which type of orbit is used by GPS satellites?",
    answers: [
      { text: "Low Earth Orbit (LEO)", correct: false },
      { text: "Medium Earth Orbit (MEO)", correct: true },
      { text: "Geostationary Orbit (GEO)", correct: false },
      { text: "High Earth Orbit (HEO)", correct: false },
    ],
  },
  {
    question:
      "What does the term 'footprint' refer to in satellite communication?",
    answers: [
      { text: "The weight of the satellite", correct: false },
      {
        text: "The coverage area of the satellite signal on Earth",
        correct: true,
      },
      { text: "The size of the satellite", correct: false },
      { text: "The energy consumption of the satellite", correct: false },
    ],
  },
  {
    question:
      "Which component of a satellite communication system is located on Earth?",
    answers: [
      { text: "Transponder", correct: false },
      { text: "Payload", correct: false },
      { text: "Earth station", correct: true },
      { text: "Solar panel", correct: false },
    ],
  },
  {
    question: "What is the purpose of a downlink in satellite communication?",
    answers: [
      { text: "To send signals from Earth to the satellite", correct: false },
      { text: "To send signals from the satellite to Earth", correct: true },
      { text: "To send signals between satellites", correct: false },
      { text: "To measure the satellite's position", correct: false },
    ],
  },
  {
    question:
      "Which modulation technique is commonly used in satellite communication?",
    answers: [
      { text: "Amplitude Modulation (AM)", correct: false },
      { text: "Frequency Modulation (FM)", correct: false },
      { text: "Phase Shift Keying (PSK)", correct: true },
      { text: "Quadrature Amplitude Modulation (QAM)", correct: false },
    ],
  },
  {
    question: "What is a satellite constellation?",
    answers: [
      { text: "A single satellite in orbit", correct: false },
      { text: "A group of satellites working together", correct: true },
      {
        text: "The ground equipment used for satellite communication",
        correct: false,
      },
      { text: "A type of satellite orbit", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a beacon signal in satellite communication?",
    answers: [
      { text: "To locate the position of the satellite", correct: false },
      { text: "To measure signal strength", correct: false },
      {
        text: "To provide a reference for signal tracking and alignment",
        correct: true,
      },
      { text: "To transmit data between satellites", correct: false },
    ],
  },
  {
    question:
      "What does the term 'uplink' refer to in satellite communication?",
    answers: [
      { text: "The transmission from the satellite to Earth", correct: false },
      { text: "The transmission from Earth to the satellite", correct: true },
      { text: "The transmission between satellites", correct: false },
      { text: "The process of launching the satellite", correct: false },
    ],
  },
  {
    question:
      "Which satellite system is used for global broadcasting services?",
    answers: [
      { text: "LEO satellites", correct: false },
      { text: "MEO satellites", correct: false },
      { text: "GEO satellites", correct: true },
      { text: "HEO satellites", correct: false },
    ],
  },
  {
    question: "What is a polar orbit?",
    answers: [
      { text: "An orbit that passes over the equator", correct: false },
      { text: "An orbit that passes over the poles", correct: true },
      {
        text: "An orbit that remains fixed above one point on Earth",
        correct: false,
      },
      {
        text: "An orbit that is used by geostationary satellites",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which component of a satellite system amplifies the received signals?",
    answers: [
      { text: "Antenna", correct: false },
      { text: "Transponder", correct: true },
      { text: "Solar panel", correct: false },
      { text: "Thruster", correct: false },
    ],
  },
  {
    question: "What does VSAT stand for?",
    answers: [
      { text: "Very Small Aperture Terminal", correct: true },
      { text: "Variable Signal Amplification Technology", correct: false },
      { text: "Very Small Antenna Terminal", correct: false },
      { text: "Variable Signal Antenna Technology", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a parabolic dish in satellite communication?",
    answers: [
      { text: "To generate power for the satellite", correct: false },
      { text: "To provide thrust for the satellite", correct: false },
      { text: "To focus and direct the radio waves", correct: true },
      { text: "To measure the satellite's position", correct: false },
    ],
  },
  {
    question:
      "Which type of orbit has the shortest orbital period around the Earth?",
    answers: [
      { text: "Geostationary Orbit (GEO)", correct: false },
      { text: "Low Earth Orbit (LEO)", correct: true },
      { text: "Medium Earth Orbit (MEO)", correct: false },
      { text: "High Earth Orbit (HEO)", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using satellites for communication?",
    answers: [
      { text: "High-speed data transfer", correct: false },
      { text: "Global coverage", correct: true },
      { text: "Low latency", correct: false },
      { text: "High signal strength", correct: false },
    ],
  },
  {
    question: "What is a ground station in satellite communication?",
    answers: [
      { text: "A satellite in low Earth orbit", correct: false },
      { text: "A control center for launching satellites", correct: false },
      {
        text: "A terrestrial terminal used to communicate with satellites",
        correct: true,
      },
      { text: "A base for space exploration missions", correct: false },
    ],
  },
];
/////////////////////////////////////////  Radar and Nevigation  ////////////////////////////////////////////////////
const Radar_and_Navigation = [
  {
    question: "What does RADAR stand for?",
    answers: [
      { text: "Radio Detection and Ranging", correct: true },
      { text: "Radio Direction and Ranging", correct: false },
      { text: "Remote Detection and Ranging", correct: false },
      { text: "Radio Development and Ranging", correct: false },
    ],
  },
  {
    question: "Which component of a radar system emits the radio waves?",
    answers: [
      { text: "Receiver", correct: false },
      { text: "Antenna", correct: false },
      { text: "Transmitter", correct: true },
      { text: "Oscillator", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of radar in aviation?",
    answers: [
      { text: "To detect weather patterns", correct: false },
      { text: "To provide entertainment for passengers", correct: false },
      { text: "To detect and track aircraft", correct: true },
      { text: "To measure fuel consumption", correct: false },
    ],
  },
  {
    question: "What does a radar's range resolution depend on?",
    answers: [
      { text: "Pulse width", correct: true },
      { text: "Antenna size", correct: false },
      { text: "Transmit power", correct: false },
      { text: "Frequency of the transmitted wave", correct: false },
    ],
  },
  {
    question: "Which radar system uses the Doppler effect to measure velocity?",
    answers: [
      { text: "Pulse radar", correct: false },
      { text: "Monopulse radar", correct: false },
      { text: "Doppler radar", correct: true },
      { text: "CW radar", correct: false },
    ],
  },
  {
    question: "What is the function of the receiver in a radar system?",
    answers: [
      { text: "To generate the radar pulse", correct: false },
      { text: "To detect and amplify the reflected signal", correct: true },
      { text: "To focus the radar beam", correct: false },
      { text: "To rotate the radar antenna", correct: false },
    ],
  },
  {
    question: "What is the role of a radar antenna?",
    answers: [
      { text: "To generate the radar pulse", correct: false },
      { text: "To amplify the signal", correct: false },
      { text: "To transmit and receive radio waves", correct: true },
      { text: "To decode the received signal", correct: false },
    ],
  },
  {
    question: "Which type of navigation uses stars to determine position?",
    answers: [
      { text: "Satellite navigation", correct: false },
      { text: "Celestial navigation", correct: true },
      { text: "Inertial navigation", correct: false },
      { text: "Radio navigation", correct: false },
    ],
  },
  {
    question: "What is GPS an abbreviation for?",
    answers: [
      { text: "Global Positioning System", correct: true },
      { text: "General Positioning System", correct: false },
      { text: "Geographic Positioning System", correct: false },
      { text: "Global Placement System", correct: false },
    ],
  },
  {
    question:
      "Which system uses gyroscopes and accelerometers to determine position?",
    answers: [
      { text: "Radar", correct: false },
      { text: "GPS", correct: false },
      { text: "Inertial Navigation System", correct: true },
      { text: "Radio Navigation", correct: false },
    ],
  },
  {
    question: "What is a transponder used for in aviation?",
    answers: [
      { text: "To detect other aircraft", correct: false },
      { text: "To amplify radio signals", correct: false },
      { text: "To communicate with air traffic control", correct: true },
      { text: "To generate radar pulses", correct: false },
    ],
  },
  {
    question: "Which type of radar is used for weather monitoring?",
    answers: [
      { text: "Monopulse radar", correct: false },
      { text: "Weather radar", correct: true },
      { text: "Doppler radar", correct: true },
      { text: "Surface radar", correct: false },
    ],
  },
  {
    question: "What does the term 'azimuth' refer to in radar systems?",
    answers: [
      { text: "The range to the target", correct: false },
      { text: "The speed of the target", correct: false },
      { text: "The angular position of the target", correct: true },
      { text: "The size of the radar pulse", correct: false },
    ],
  },
  {
    question: "What is the main disadvantage of radar navigation?",
    answers: [
      { text: "Limited range", correct: false },
      { text: "Requires clear weather conditions", correct: false },
      { text: "Susceptible to interference", correct: true },
      { text: "High cost of operation", correct: false },
    ],
  },
  {
    question: "What is the principle behind inertial navigation?",
    answers: [
      { text: "Using satellite signals to determine position", correct: false },
      {
        text: "Measuring the position relative to ground stations",
        correct: false,
      },
      {
        text: "Using gyroscopes and accelerometers to track position changes",
        correct: true,
      },
      { text: "Following a pre-determined route using maps", correct: false },
    ],
  },
  {
    question:
      "What type of radar is primarily used in automotive applications?",
    answers: [
      { text: "Surface radar", correct: false },
      { text: "Monopulse radar", correct: false },
      { text: "Automotive radar", correct: true },
      { text: "Weather radar", correct: false },
    ],
  },
  {
    question:
      "What is the main purpose of an Automatic Identification System (AIS) in maritime navigation?",
    answers: [
      { text: "To detect weather patterns", correct: false },
      { text: "To track and identify vessels", correct: true },
      { text: "To amplify radio signals", correct: false },
      { text: "To navigate using celestial objects", correct: false },
    ],
  },
  {
    question:
      "Which component of a radar system determines the direction of the received signal?",
    answers: [
      { text: "Transmitter", correct: false },
      { text: "Antenna", correct: true },
      { text: "Receiver", correct: false },
      { text: "Oscillator", correct: false },
    ],
  },
  {
    question: "What does the term 'range gate' refer to in radar technology?",
    answers: [
      { text: "The maximum range of the radar", correct: false },
      { text: "The range of frequencies used by the radar", correct: false },
      { text: "The specific range interval being measured", correct: true },
      { text: "The time interval between radar pulses", correct: false },
    ],
  },
  {
    question: "What is the main advantage of phased array radar?",
    answers: [
      { text: "Lower cost", correct: false },
      { text: "Higher accuracy", correct: true },
      { text: "Larger size", correct: false },
      { text: "Simpler design", correct: false },
    ],
  },
];
////////////////////////////////////////////  Fluid Mechanics  //////////////////////////////////////////////////////
const Fluid_Mechanics = [
  {
    question: "What is the primary difference between fluids and solids?",
    answers: [
      {
        text: "Solids have fixed shape and volume, while fluids have fixed volume.",
        correct: false,
      },
      {
        text: "Solids have fixed volume, while fluids can change shape and volume.",
        correct: true,
      },
      {
        text: "Solids have variable shape and volume, while fluids have fixed shape.",
        correct: false,
      },
      {
        text: "Solids have variable shape and volume, while fluids can change volume.",
        correct: false,
      },
    ],
  },
  {
    question: "What property of a fluid measures its resistance to flow?",
    answers: [
      { text: "Density", correct: false },
      { text: "Viscosity", correct: true },
      { text: "Pressure", correct: false },
      { text: "Surface tension", correct: false },
    ],
  },
  {
    question:
      "Which law of fluid mechanics states that the total energy of a fluid flowing along a streamline remains constant?",
    answers: [
      { text: "Pascal's law", correct: false },
      { text: "Bernoulli's equation", correct: true },
      { text: "Archimedes' principle", correct: false },
      { text: "Newton's second law", correct: false },
    ],
  },
  {
    question: "What is the SI unit of viscosity?",
    answers: [
      { text: "Poise", correct: false },
      { text: "Pascal-second", correct: true },
      { text: "Newton", correct: false },
      { text: "Joule", correct: false },
    ],
  },
  {
    question:
      "What phenomenon is responsible for the rise of liquids in capillary tubes?",
    answers: [
      { text: "Surface tension", correct: true },
      { text: "Viscosity", correct: false },
      { text: "Buoyancy", correct: false },
      { text: "Cohesion", correct: false },
    ],
  },
  {
    question:
      "What term describes the force per unit area exerted by a fluid at rest?",
    answers: [
      { text: "Velocity", correct: false },
      { text: "Pressure", correct: true },
      { text: "Friction", correct: false },
      { text: "Shear stress", correct: false },
    ],
  },
  {
    question:
      "In fluid mechanics, which type of flow occurs when the Reynolds number is less than 2000?",
    answers: [
      { text: "Laminar flow", correct: true },
      { text: "Turbulent flow", correct: false },
      { text: "Steady flow", correct: false },
      { text: "Compressible flow", correct: false },
    ],
  },
  {
    question:
      "What is the name of the equation that describes the flow of an incompressible fluid through a tube?",
    answers: [
      { text: "Stokes' law", correct: false },
      { text: "Hagen-Poiseuille equation", correct: true },
      { text: "Newton's law of viscosity", correct: false },
      { text: "Euler's equation of motion", correct: false },
    ],
  },
  {
    question:
      "What is the term for the force that opposes the relative motion of two adjacent layers of fluid?",
    answers: [
      { text: "Surface tension", correct: false },
      { text: "Viscous drag", correct: true },
      { text: "Inertia force", correct: false },
      { text: "Centrifugal force", correct: false },
    ],
  },
  {
    question:
      "Which law states that the buoyant force exerted by a fluid on a submerged object is equal to the weight of the fluid displaced?",
    answers: [
      { text: "Pascal's law", correct: false },
      { text: "Archimedes' principle", correct: true },
      { text: "Bernoulli's principle", correct: false },
      { text: "Newton's third law", correct: false },
    ],
  },
  {
    question:
      "What is the measure of the difficulty of initiating motion in a fluid?",
    answers: [
      { text: "Kinematic viscosity", correct: false },
      { text: "Dynamic viscosity", correct: false },
      { text: "Viscosity index", correct: false },
      { text: "Fluid viscosity", correct: true },
    ],
  },
  {
    question:
      "In fluid mechanics, what is the term for the tendency of fluid particles to move from higher pressure to lower pressure?",
    answers: [
      { text: "Pressure gradient", correct: true },
      { text: "Bernoulli's effect", correct: false },
      { text: "Boundary layer", correct: false },
      { text: "Capillary action", correct: false },
    ],
  },
  {
    question:
      "Which term describes the property of a fluid that allows it to resist tensile stress and form droplets?",
    answers: [
      { text: "Surface tension", correct: true },
      { text: "Viscosity", correct: false },
      { text: "Compressibility", correct: false },
      { text: "Buoyancy", correct: false },
    ],
  },
  {
    question: "What does the Bernoulli's equation relate in fluid dynamics?",
    answers: [
      { text: "Density and volume", correct: false },
      { text: "Pressure and temperature", correct: false },
      { text: "Velocity and acceleration", correct: true },
      { text: "Viscosity and density", correct: false },
    ],
  },
  {
    question:
      "Which law states that the total pressure in a fluid remains constant along a streamline?",
    answers: [
      { text: "Pascal's law", correct: false },
      { text: "Archimedes' principle", correct: false },
      { text: "Bernoulli's equation", correct: true },
      { text: "Newton's second law", correct: false },
    ],
  },
  {
    question:
      "What is the name of the force exerted by a fluid perpendicular to a surface?",
    answers: [
      { text: "Pressure", correct: true },
      { text: "Shear stress", correct: false },
      { text: "Viscous drag", correct: false },
      { text: "Centrifugal force", correct: false },
    ],
  },
  {
    question:
      "Which parameter is not considered in the Hagen-Poiseuille equation for laminar flow through a pipe?",
    answers: [
      { text: "Viscosity", correct: false },
      { text: "Length of the pipe", correct: false },
      { text: "Diameter of the pipe", correct: false },
      { text: "Fluid compressibility", correct: true },
    ],
  },
  {
    question:
      "What is the term for the force that opposes the motion of an object through a fluid?",
    answers: [
      { text: "Drag force", correct: true },
      { text: "Buoyant force", correct: false },
      { text: "Gravitational force", correct: false },
      { text: "Surface tension force", correct: false },
    ],
  },
  {
    question:
      "Which property of a fluid is defined as its mass per unit volume?",
    answers: [
      { text: "Pressure", correct: false },
      { text: "Viscosity", correct: false },
      { text: "Density", correct: true },
      { text: "Surface tension", correct: false },
    ],
  },
  {
    question:
      "What phenomenon allows fluids to rise in narrow tubes against gravity?",
    answers: [
      { text: "Viscosity", correct: false },
      { text: "Buoyancy", correct: false },
      { text: "Surface tension", correct: true },
      { text: "Capillarity", correct: false },
    ],
  },
];
//////////////////////////////////////////  Surveying  /////////////////////////////////////////////////////////////
const Surveying = [
  {
    question: "What is the primary purpose of surveying in civil engineering?",
    answers: [
      { text: "To design structures", correct: false },
      { text: "To measure and map land", correct: true },
      { text: "To analyze environmental impacts", correct: false },
      { text: "To study material properties", correct: false },
    ],
  },
  {
    question:
      "Which instrument is used to measure horizontal angles in surveying?",
    answers: [
      { text: "Level", correct: false },
      { text: "Theodolite", correct: true },
      { text: "Total station", correct: false },
      { text: "Clinometer", correct: false },
    ],
  },
  {
    question: "What is a benchmark in surveying?",
    answers: [
      { text: "A reference point with a known elevation", correct: true },
      { text: "A temporary structure for measurement", correct: false },
      { text: "A tool for measuring distances", correct: false },
      { text: "A type of surveying software", correct: false },
    ],
  },
  {
    question:
      "Which surveying technique uses satellite signals to determine positions on the Earth's surface?",
    answers: [
      { text: "Topographic surveying", correct: false },
      { text: "Aerial surveying", correct: false },
      { text: "GPS surveying", correct: true },
      { text: "Hydrographic surveying", correct: false },
    ],
  },
  {
    question: "What is the purpose of leveling in surveying?",
    answers: [
      { text: "To measure horizontal distances", correct: false },
      { text: "To measure vertical distances", correct: true },
      { text: "To establish benchmarks", correct: false },
      { text: "To calculate areas", correct: false },
    ],
  },
  {
    question: "Which surveying method is used to measure underwater surfaces?",
    answers: [
      { text: "Topographic surveying", correct: false },
      { text: "Aerial surveying", correct: false },
      { text: "Hydrographic surveying", correct: true },
      { text: "Engineering surveying", correct: false },
    ],
  },
  {
    question:
      "What is the term for the process of marking points and angles on the ground before measurement in surveying?",
    answers: [
      { text: "Plotting", correct: false },
      { text: "Setting out", correct: true },
      { text: "Mapping", correct: false },
      { text: "Calibration", correct: false },
    ],
  },
  {
    question:
      "Which type of surveying is used to create contour maps and determine elevations?",
    answers: [
      { text: "Aerial surveying", correct: false },
      { text: "Engineering surveying", correct: false },
      { text: "Topographic surveying", correct: true },
      { text: "Cadastral surveying", correct: false },
    ],
  },
  {
    question: "In surveying, what does the abbreviation 'GPS' stand for?",
    answers: [
      { text: "Global Positioning System", correct: true },
      { text: "Geographical Positioning Survey", correct: false },
      { text: "Ground Positioning System", correct: false },
      { text: "Geodetic Positioning Service", correct: false },
    ],
  },
  {
    question:
      "What is the term for the process of determining the boundaries of land ownership?",
    answers: [
      { text: "Topographic surveying", correct: false },
      { text: "Hydrographic surveying", correct: false },
      { text: "Cadastral surveying", correct: true },
      { text: "Geodetic surveying", correct: false },
    ],
  },
  {
    question:
      "Which instrument is used to measure the vertical angles in surveying?",
    answers: [
      { text: "Level", correct: true },
      { text: "Theodolite", correct: false },
      { text: "Total station", correct: false },
      { text: "Clinometer", correct: false },
    ],
  },
  {
    question: "What is a traverse in surveying?",
    answers: [
      { text: "A type of aerial surveying", correct: false },
      { text: "A linear measurement", correct: false },
      { text: "A sequence of connected survey lines", correct: true },
      { text: "A method for measuring underwater topography", correct: false },
    ],
  },
  {
    question:
      "Which surveying technique uses cameras mounted on aircraft or drones to capture images of the Earth's surface?",
    answers: [
      { text: "GPS surveying", correct: false },
      { text: "Aerial surveying", correct: true },
      { text: "Hydrographic surveying", correct: false },
      { text: "Topographic surveying", correct: false },
    ],
  },
  {
    question: "What is the primary objective of cadastral surveying?",
    answers: [
      { text: "To create topographic maps", correct: false },
      { text: "To measure underwater terrain", correct: false },
      { text: "To establish property boundaries", correct: true },
      { text: "To calculate volumetric measurements", correct: false },
    ],
  },
  {
    question:
      "Which type of surveying is used to measure and map large areas of land?",
    answers: [
      { text: "GPS surveying", correct: false },
      { text: "Aerial surveying", correct: true },
      { text: "Hydrographic surveying", correct: false },
      { text: "Topographic surveying", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of triangulation in surveying?",
    answers: [
      { text: "To measure angles in the field", correct: false },
      { text: "To establish control points", correct: true },
      { text: "To perform underwater measurements", correct: false },
      { text: "To determine elevation changes", correct: false },
    ],
  },
  {
    question: "What is a contour line in topographic surveying?",
    answers: [
      { text: "A line connecting points of equal elevation", correct: true },
      { text: "A straight line used for measurements", correct: false },
      { text: "A line marking property boundaries", correct: false },
      { text: "A line indicating the slope of the terrain", correct: false },
    ],
  },
  {
    question:
      "Which surveying method is used to measure distances using signals reflected from a prism?",
    answers: [
      { text: "Topographic surveying", correct: false },
      { text: "Aerial surveying", correct: false },
      { text: "Tachymetry", correct: true },
      { text: "Hydrographic surveying", correct: false },
    ],
  },
  {
    question:
      "What is the term for the error caused by the Earth's curvature in surveying?",
    answers: [
      { text: "Parallax error", correct: false },
      { text: "Refraction error", correct: false },
      { text: "Spherical excess error", correct: false },
      { text: "Spherical correction error", correct: true },
    ],
  },
  {
    question:
      "Which surveying technique is used to measure and map underwater features?",
    answers: [
      { text: "Aerial surveying", correct: false },
      { text: "Hydrographic surveying", correct: true },
      { text: "GPS surveying", correct: false },
      { text: "Topographic surveying", correct: false },
    ],
  },
];
////////////////////////////////////////////  Building Material   ///////////////////////////////////////////////////
const Building_Materials = [
  {
    question: "Which of the following is not a primary ingredient in concrete?",
    answers: [
      { text: "Cement", correct: false },
      { text: "Sand", correct: false },
      { text: "Steel", correct: true },
      { text: "Water", correct: false },
    ],
  },
  {
    question:
      "What type of material is commonly used for roofing due to its durability and weather resistance?",
    answers: [
      { text: "Plastic", correct: false },
      { text: "Aluminum", correct: false },
      { text: "Asphalt", correct: true },
      { text: "Wood", correct: false },
    ],
  },
  {
    question:
      "Which material is known for its high strength-to-weight ratio, making it suitable for structural applications?",
    answers: [
      { text: "Brick", correct: false },
      { text: "Concrete", correct: false },
      { text: "Steel", correct: true },
      { text: "Glass", correct: false },
    ],
  },
  {
    question: "What is the primary component of mortar?",
    answers: [
      { text: "Cement", correct: true },
      { text: "Sand", correct: false },
      { text: "Gravel", correct: false },
      { text: "Water", correct: false },
    ],
  },
  {
    question:
      "Which material is used for its thermal insulation properties in buildings?",
    answers: [
      { text: "Steel", correct: false },
      { text: "Brick", correct: false },
      { text: "Glass", correct: false },
      { text: "Fiberglass", correct: true },
    ],
  },
  {
    question:
      "What type of material is commonly used for load-bearing walls in residential construction?",
    answers: [
      { text: "Concrete", correct: false },
      { text: "Wood", correct: false },
      { text: "Brick", correct: true },
      { text: "Plastic", correct: false },
    ],
  },
  {
    question:
      "Which material is known for its fire-resistant properties and is often used in fireproofing applications?",
    answers: [
      { text: "Asphalt", correct: false },
      { text: "Plastic", correct: false },
      { text: "Gypsum", correct: true },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question:
      "What type of material is used for plumbing pipes due to its corrosion resistance?",
    answers: [
      { text: "Copper", correct: true },
      { text: "Steel", correct: false },
      { text: "Brick", correct: false },
      { text: "Glass", correct: false },
    ],
  },
  {
    question:
      "Which material is used for its acoustic insulation properties in buildings?",
    answers: [
      { text: "Concrete", correct: false },
      { text: "Asphalt", correct: false },
      { text: "Rubber", correct: true },
      { text: "Wood", correct: false },
    ],
  },
  {
    question: "What is the primary component of asphalt concrete?",
    answers: [
      { text: "Aggregate", correct: true },
      { text: "Cement", correct: false },
      { text: "Water", correct: false },
      { text: "Steel", correct: false },
    ],
  },
  {
    question:
      "Which material is commonly used for decorative finishes in interior construction?",
    answers: [
      { text: "Gypsum", correct: false },
      { text: "Plastic", correct: false },
      { text: "Glass", correct: false },
      { text: "Paint", correct: true },
    ],
  },
  {
    question:
      "What type of material is used for its flexibility and waterproofing properties in roofing?",
    answers: [
      { text: "Wood", correct: false },
      { text: "Asphalt", correct: true },
      { text: "Steel", correct: false },
      { text: "Brick", correct: false },
    ],
  },
  {
    question:
      "Which material is commonly used for flooring due to its durability and ease of maintenance?",
    answers: [
      { text: "Wood", correct: false },
      { text: "Vinyl", correct: true },
      { text: "Asphalt", correct: false },
      { text: "Gypsum", correct: false },
    ],
  },
  {
    question:
      "What type of material is used for its thermal insulation properties in roofs and walls?",
    answers: [
      { text: "Brick", correct: false },
      { text: "Fiberglass", correct: true },
      { text: "Concrete", correct: false },
      { text: "Steel", correct: false },
    ],
  },
  {
    question:
      "Which material is used for its strength and durability in foundation construction?",
    answers: [
      { text: "Plastic", correct: false },
      { text: "Concrete", correct: true },
      { text: "Glass", correct: false },
      { text: "Gypsum", correct: false },
    ],
  },
  {
    question:
      "What type of material is used for its reflective properties in roofing?",
    answers: [
      { text: "Asphalt", correct: false },
      { text: "Aluminum", correct: true },
      { text: "Brick", correct: false },
      { text: "Wood", correct: false },
    ],
  },
  {
    question:
      "Which material is commonly used for external cladding due to its weather resistance?",
    answers: [
      { text: "Plastic", correct: false },
      { text: "Wood", correct: false },
      { text: "Steel", correct: false },
      { text: "Brick", correct: true },
    ],
  },
  {
    question: "What is the primary component of cement?",
    answers: [
      { text: "Sand", correct: false },
      { text: "Water", correct: false },
      { text: "Limestone", correct: true },
      { text: "Aggregate", correct: false },
    ],
  },
  {
    question:
      "Which material is commonly used for window frames due to its thermal insulation properties?",
    answers: [
      { text: "Steel", correct: false },
      { text: "Aluminum", correct: true },
      { text: "Wood", correct: false },
      { text: "Concrete", correct: false },
    ],
  },
  {
    question:
      "What type of material is used for its durability and aesthetic appeal in exterior finishes?",
    answers: [
      { text: "Plastic", correct: false },
      { text: "Stone", correct: true },
      { text: "Asphalt", correct: false },
      { text: "Gypsum", correct: false },
    ],
  },
];
////////////////////////////////////////////  Structural Analysis  //////////////////////////////////////////////////
const Structural_Analysis = [
  {
    question: "What is structural analysis?",
    answers: [
      {
        text: "The study of structural components in architecture",
        correct: false,
      },
      {
        text: "The examination of materials used in construction",
        correct: false,
      },
      {
        text: "The prediction of the behavior of structures under loads",
        correct: true,
      },
      {
        text: "The assessment of environmental impact on buildings",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which method is commonly used for analyzing statically determinate structures?",
    answers: [
      { text: "Finite element method", correct: false },
      { text: "Moment distribution method", correct: true },
      { text: "Method of sections", correct: false },
      { text: "Cross-sectional analysis", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of a shear force diagram in structural analysis?",
    answers: [
      { text: "To determine the bending moment distribution", correct: false },
      { text: "To calculate the deflection of the structure", correct: false },
      { text: "To identify points of maximum shear stress", correct: true },
      { text: "To analyze the axial forces in members", correct: false },
    ],
  },
  {
    question:
      "Which type of load is used to analyze the stability of structures?",
    answers: [
      { text: "Point load", correct: false },
      { text: "Distributed load", correct: false },
      { text: "Wind load", correct: true },
      { text: "Live load", correct: false },
    ],
  },
  {
    question:
      "What does the term 'moment distribution' refer to in structural analysis?",
    answers: [
      { text: "Distribution of force over an area", correct: false },
      { text: "Redistribution of moments at joints", correct: true },
      { text: "Analysis of internal forces in beams", correct: false },
      { text: "Determination of load combinations", correct: false },
    ],
  },
  {
    question:
      "Which method is used to analyze indeterminate structures with fixed supports?",
    answers: [
      { text: "Slope-deflection method", correct: true },
      { text: "Virtual work method", correct: false },
      { text: "Matrix analysis", correct: false },
      { text: "Euler-Bernoulli method", correct: false },
    ],
  },
  {
    question: "What is the primary objective of structural analysis?",
    answers: [
      { text: "To determine structural aesthetics", correct: false },
      { text: "To calculate construction costs", correct: false },
      { text: "To ensure structural safety and stability", correct: true },
      { text: "To design architectural layouts", correct: false },
    ],
  },
  {
    question:
      "Which theorem is fundamental in the analysis of statically indeterminate structures?",
    answers: [
      { text: "Principle of superposition", correct: true },
      { text: "Moment distribution theorem", correct: false },
      { text: "Euler's buckling theorem", correct: false },
      { text: "Mohr's circle theorem", correct: false },
    ],
  },
  {
    question:
      "What does the term 'deflection' refer to in structural analysis?",
    answers: [
      { text: "Displacement of a structure under load", correct: true },
      { text: "Distribution of loads on a structure", correct: false },
      { text: "Dynamic response of structures to vibrations", correct: false },
      { text: "Reduction in structural integrity over time", correct: false },
    ],
  },
  {
    question:
      "Which software is commonly used for computer-aided structural analysis?",
    answers: [
      { text: "AutoCAD", correct: false },
      { text: "MATLAB", correct: false },
      { text: "STAAD.Pro", correct: true },
      { text: "SolidWorks", correct: false },
    ],
  },
  {
    question: "What is the role of a moment diagram in structural analysis?",
    answers: [
      { text: "To determine stress concentrations", correct: false },
      { text: "To analyze bending moments along a beam", correct: true },
      { text: "To calculate shear forces in trusses", correct: false },
      { text: "To assess the stability of columns", correct: false },
    ],
  },
  {
    question:
      "Which concept is fundamental in analyzing the stability of frames and trusses?",
    answers: [
      { text: "Elastic modulus", correct: false },
      { text: "Structural equilibrium", correct: true },
      { text: "Damping ratio", correct: false },
      { text: "Geometric imperfections", correct: false },
    ],
  },
  {
    question:
      "What is the primary challenge in analyzing dynamically loaded structures?",
    answers: [
      { text: "Predicting load duration", correct: false },
      { text: "Accounting for creep effects", correct: false },
      { text: "Calculating dynamic responses", correct: true },
      { text: "Estimating fatigue life", correct: false },
    ],
  },
  {
    question: "Which method is used to analyze structures under seismic loads?",
    answers: [
      { text: "Response spectrum analysis", correct: true },
      { text: "Buckling analysis", correct: false },
      { text: "Vibration analysis", correct: false },
      { text: "Finite element analysis", correct: false },
    ],
  },
  {
    question: "What is the significance of a structural model in analysis?",
    answers: [
      { text: "To determine construction materials", correct: false },
      { text: "To simulate environmental conditions", correct: false },
      { text: "To predict structural behavior", correct: true },
      { text: "To calculate seismic accelerations", correct: false },
    ],
  },
  {
    question:
      "Which concept is critical in analyzing the stability of slender columns?",
    answers: [
      { text: "Buckling", correct: true },
      { text: "Shear force", correct: false },
      { text: "Torsional moment", correct: false },
      { text: "Deflection", correct: false },
    ],
  },
  {
    question:
      "What is the primary advantage of using matrix methods in structural analysis?",
    answers: [
      { text: "Simplified analysis of complex structures", correct: true },
      { text: "Precise calculation of static equilibrium", correct: false },
      { text: "Accurate prediction of material properties", correct: false },
      { text: "Efficient determination of load combinations", correct: false },
    ],
  },
  {
    question:
      "Which type of analysis is used to predict the response of structures to temperature variations?",
    answers: [
      { text: "Dynamic analysis", correct: false },
      { text: "Thermal analysis", correct: true },
      { text: "Modal analysis", correct: false },
      { text: "Fatigue analysis", correct: false },
    ],
  },
  {
    question: "What does the term 'structural dynamics' refer to?",
    answers: [
      { text: "Analysis of structural deformations", correct: false },
      { text: "Study of structural aesthetics", correct: false },
      { text: "Behavior of structures under dynamic loads", correct: true },
      { text: "Simulation of construction processes", correct: false },
    ],
  },
  {
    question:
      "Which parameter is critical in assessing the stability of arch bridges?",
    answers: [
      { text: "Moment of inertia", correct: false },
      { text: "Geometric configuration", correct: true },
      { text: "Young's modulus", correct: false },
      { text: "Shear strength", correct: false },
    ],
  },
];
///////////////////////////////////////////  Concrete Technology  //////////////////////////////////////////////////
const Concrete_Technology = [
  {
    question: "What is concrete?",
    answers: [
      { text: "A type of rock", correct: false },
      { text: "A mixture of cement, water, and aggregates", correct: true },
      { text: "A natural polymer", correct: false },
      { text: "A type of steel", correct: false },
    ],
  },
  {
    question: "What is the primary ingredient in concrete?",
    answers: [
      { text: "Water", correct: false },
      { text: "Cement", correct: true },
      { text: "Sand", correct: false },
      { text: "Gravel", correct: false },
    ],
  },
  {
    question: "What is the function of aggregates in concrete?",
    answers: [
      { text: "To increase workability", correct: false },
      { text: "To bond with cement", correct: false },
      { text: "To reduce shrinkage", correct: false },
      { text: "To provide bulk and strength", correct: true },
    ],
  },
  {
    question:
      "What is the process of compacting concrete to remove air voids called?",
    answers: [
      { text: "Curing", correct: false },
      { text: "Mixing", correct: false },
      { text: "Vibration", correct: true },
      { text: "Setting", correct: false },
    ],
  },
  {
    question: "Which type of cement is suitable for underwater construction?",
    answers: [
      { text: "Portland cement", correct: false },
      { text: "Rapid hardening cement", correct: true },
      { text: "White cement", correct: false },
      { text: "Pozzolana cement", correct: false },
    ],
  },
  {
    question: "What is the purpose of adding admixtures to concrete?",
    answers: [
      { text: "To increase compressive strength", correct: false },
      { text: "To improve durability and workability", correct: true },
      { text: "To reduce water content", correct: false },
      { text: "To accelerate hydration", correct: false },
    ],
  },
  {
    question:
      "What is the term for the ability of concrete to resist weathering action?",
    answers: [
      { text: "Workability", correct: false },
      { text: "Durability", correct: true },
      { text: "Plasticity", correct: false },
      { text: "Permeability", correct: false },
    ],
  },
  {
    question:
      "Which test is used to determine the workability of fresh concrete?",
    answers: [
      { text: "Compressive strength test", correct: false },
      { text: "Flexural strength test", correct: false },
      { text: "Slump test", correct: true },
      { text: "Curing test", correct: false },
    ],
  },
  {
    question: "What does the term 'hydration' refer to in concrete?",
    answers: [
      { text: "Setting and hardening of concrete", correct: true },
      { text: "Mixing of concrete ingredients", correct: false },
      { text: "Curing of concrete", correct: false },
      { text: "Testing of concrete properties", correct: false },
    ],
  },
  {
    question:
      "Which factor primarily influences the strength of hardened concrete?",
    answers: [
      { text: "Cement content", correct: true },
      { text: "Water-cement ratio", correct: false },
      { text: "Aggregate size", correct: false },
      { text: "Admixture type", correct: false },
    ],
  },
  {
    question: "What is the purpose of curing concrete?",
    answers: [
      { text: "To increase workability", correct: false },
      { text: "To improve surface finish", correct: false },
      { text: "To prevent moisture loss and ensure hydration", correct: true },
      { text: "To reduce shrinkage cracks", correct: false },
    ],
  },
  {
    question:
      "Which type of admixture is used to reduce the heat of hydration in concrete?",
    answers: [
      { text: "Air-entraining admixture", correct: false },
      { text: "Accelerating admixture", correct: false },
      { text: "Retarding admixture", correct: false },
      { text: "Water-reducing admixture", correct: true },
    ],
  },
  {
    question: "What is the main disadvantage of using high-slump concrete?",
    answers: [
      { text: "Poor workability", correct: false },
      { text: "Reduced strength", correct: false },
      { text: "Increased water content", correct: true },
      { text: "Rapid setting time", correct: false },
    ],
  },
  {
    question:
      "Which test is used to evaluate the compressive strength of hardened concrete?",
    answers: [
      { text: "Flexural test", correct: false },
      { text: "Tensile test", correct: false },
      { text: "Compressive strength test", correct: true },
      { text: "Shear strength test", correct: false },
    ],
  },
  {
    question:
      "What is the typical ratio of water to cement in concrete mixtures?",
    answers: [
      { text: "0.5:1", correct: false },
      { text: "1:2", correct: false },
      { text: "0.25:1", correct: false },
      { text: "0.5:1", correct: true },
    ],
  },
  {
    question: "Which type of cement is used for architectural finishes?",
    answers: [
      { text: "Portland cement", correct: true },
      { text: "Rapid hardening cement", correct: false },
      { text: "White cement", correct: true },
      { text: "Pozzolana cement", correct: false },
    ],
  },
  {
    question:
      "What does the term 'blinding' refer to in concrete construction?",
    answers: [
      {
        text: "Applying a finishing coat to concrete surfaces",
        correct: false,
      },
      { text: "Covering reinforcement with mortar", correct: true },
      { text: "Exposing aggregate in finished concrete", correct: false },
      { text: "Adding admixtures to concrete mixtures", correct: false },
    ],
  },
  {
    question:
      "Which material is commonly used as a fine aggregate in concrete?",
    answers: [
      { text: "Gravel", correct: false },
      { text: "Sand", correct: true },
      { text: "Crushed stone", correct: false },
      { text: "Fly ash", correct: false },
    ],
  },
  {
    question:
      "What is the term for the process of hardening and setting of concrete?",
    answers: [
      { text: "Curing", correct: false },
      { text: "Hydration", correct: true },
      { text: "Aggregation", correct: false },
      { text: "Mixing", correct: false },
    ],
  },
  {
    question:
      "Which method is used to measure the workability of fresh concrete by its flow?",
    answers: [
      { text: "Compaction factor test", correct: true },
      { text: "Slump test", correct: false },
      { text: "Vee-Bee test", correct: false },
      { text: "Kelly ball test", correct: false },
    ],
  },
];
//////////////////////////////////////////////   Soil Mechanics   ///////////////////////////////////////////////////
const Soil_Mechanics = [
  {
    question: "What is the primary constituent of soil?",
    answers: [
      { text: "Water", correct: false },
      { text: "Air", correct: false },
      { text: "Mineral particles", correct: true },
      { text: "Organic matter", correct: false },
    ],
  },
  {
    question: "Which soil particle size is the smallest?",
    answers: [
      { text: "Gravel", correct: false },
      { text: "Sand", correct: false },
      { text: "Silt", correct: true },
      { text: "Clay", correct: false },
    ],
  },
  {
    question:
      "What is the term for the ability of soil to deform without breaking?",
    answers: [
      { text: "Strength", correct: false },
      { text: "Plasticity", correct: true },
      { text: "Compressibility", correct: false },
      { text: "Permeability", correct: false },
    ],
  },
  {
    question:
      "Which test is used to determine the particle size distribution of soil?",
    answers: [
      { text: "Consolidation test", correct: false },
      { text: "Proctor compaction test", correct: false },
      { text: "Sieve analysis", correct: true },
      { text: "Triaxial shear test", correct: false },
    ],
  },
  {
    question:
      "What is the term for the ability of soil to bear loads without failing?",
    answers: [
      { text: "Stress", correct: false },
      { text: "Strain", correct: false },
      { text: "Strength", correct: true },
      { text: "Settlement", correct: false },
    ],
  },
  {
    question: "Which soil type has the highest water retention capacity?",
    answers: [
      { text: "Gravel", correct: false },
      { text: "Sand", correct: false },
      { text: "Clay", correct: true },
      { text: "Silt", correct: false },
    ],
  },
  {
    question: "What is the term for the process of reducing air voids in soil?",
    answers: [
      { text: "Compaction", correct: true },
      { text: "Permeability", correct: false },
      { text: "Consolidation", correct: false },
      { text: "Expansion", correct: false },
    ],
  },
  {
    question:
      "Which soil parameter is defined as the ratio of void volume to total volume?",
    answers: [
      { text: "Porosity", correct: true },
      { text: "Permeability", correct: false },
      { text: "Plasticity index", correct: false },
      { text: "Consolidation index", correct: false },
    ],
  },
  {
    question: "What is the term for the upward movement of water in soil?",
    answers: [
      { text: "Percolation", correct: false },
      { text: "Capillarity", correct: true },
      { text: "Consolidation", correct: false },
      { text: "Compaction", correct: false },
    ],
  },
  {
    question:
      "Which type of soil is typically used as a landfill liner due to its low permeability?",
    answers: [
      { text: "Gravel", correct: false },
      { text: "Sand", correct: false },
      { text: "Clay", correct: true },
      { text: "Silt", correct: false },
    ],
  },
  {
    question:
      "What is the term for the resistance of soil to deformation or rupture?",
    answers: [
      { text: "Plasticity", correct: false },
      { text: "Compressibility", correct: false },
      { text: "Strength", correct: true },
      { text: "Permeability", correct: false },
    ],
  },
  {
    question:
      "Which soil type is known for its high shear strength and low compressibility?",
    answers: [
      { text: "Clay", correct: true },
      { text: "Silt", correct: false },
      { text: "Sand", correct: false },
      { text: "Gravel", correct: false },
    ],
  },
  {
    question:
      "Which soil property determines the ease with which water can pass through it?",
    answers: [
      { text: "Strength", correct: false },
      { text: "Plasticity", correct: false },
      { text: "Permeability", correct: true },
      { text: "Compressibility", correct: false },
    ],
  },
  {
    question:
      "What is the term for the maximum water content at which a soil remains in a plastic state?",
    answers: [
      { text: "Liquid limit", correct: false },
      { text: "Plastic limit", correct: true },
      { text: "Shrinkage limit", correct: false },
      { text: "Consistency limit", correct: false },
    ],
  },
  {
    question:
      "Which soil type is most susceptible to volume changes due to water content variations?",
    answers: [
      { text: "Gravel", correct: false },
      { text: "Silt", correct: false },
      { text: "Clay", correct: true },
      { text: "Sand", correct: false },
    ],
  },
  {
    question:
      "What is the term for the ratio of the weight of water to the weight of solids in a soil sample?",
    answers: [
      { text: "Porosity", correct: false },
      { text: "Specific gravity", correct: false },
      { text: "Unit weight", correct: false },
      { text: "Water content", correct: true },
    ],
  },
  {
    question:
      "Which soil property indicates its ability to undergo deformation without rupture?",
    answers: [
      { text: "Strength", correct: false },
      { text: "Plasticity", correct: true },
      { text: "Compressibility", correct: false },
      { text: "Permeability", correct: false },
    ],
  },
  {
    question:
      "What is the term for the reduction in volume of soil due to squeezing out of water under pressure?",
    answers: [
      { text: "Expansion", correct: false },
      { text: "Consolidation", correct: true },
      { text: "Compaction", correct: false },
      { text: "Percolation", correct: false },
    ],
  },
  {
    question: "Which soil type has the lowest bearing capacity?",
    answers: [
      { text: "Gravel", correct: false },
      { text: "Sand", correct: false },
      { text: "Silt", correct: false },
      { text: "Clay", correct: true },
    ],
  },
  {
    question: "What is the term for the ability of soil to transmit fluids?",
    answers: [
      { text: "Permeability", correct: true },
      { text: "Plasticity", correct: false },
      { text: "Compressibility", correct: false },
      { text: "Strength", correct: false },
    ],
  },
];
/////////////////////////////////////////////  Structural Analysis  /////////////////////////////////////////////////
const Structural_Analysis1 = [
  {
    question: "What is Structural Analysis?",
    answers: [
      {
        text: "The study of internal forces and deformations in structures under loading",
        correct: true,
      },
      {
        text: "The design of architectural layouts for buildings",
        correct: false,
      },
      {
        text: "The analysis of structural damages in buildings",
        correct: false,
      },
      {
        text: "The process of evaluating material strengths for construction",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which method is commonly used to analyze statically determinate structures?",
    answers: [
      { text: "Finite Element Method (FEM)", correct: false },
      { text: "Matrix Structural Analysis", correct: false },
      { text: "Method of Joints", correct: false },
      { text: "Method of Sections", correct: true },
    ],
  },
  {
    question:
      "What does the superposition principle state in structural analysis?",
    answers: [
      {
        text: "That structures with similar designs will have similar outcomes",
        correct: false,
      },
      {
        text: "That the total response of a structure is the sum of responses due to each load separately",
        correct: true,
      },
      {
        text: "That structural analysis should focus on the outermost elements of a building",
        correct: false,
      },
      {
        text: "That structural defects can accumulate over time and weaken a building",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of structure is characterized by having only two supports?",
    answers: [
      { text: "Truss", correct: false },
      { text: "Beam", correct: false },
      { text: "Cantilever", correct: true },
      { text: "Arch", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of a structural load test?",
    answers: [
      {
        text: "To determine the aesthetics of a building's design",
        correct: false,
      },
      {
        text: "To assess the structural integrity and strength of a building",
        correct: true,
      },
      {
        text: "To analyze the environmental impact of a building",
        correct: false,
      },
      {
        text: "To measure the acoustic properties of a building",
        correct: false,
      },
    ],
  },
  {
    question: "In structural dynamics, what does 'natural frequency' refer to?",
    answers: [
      {
        text: "The frequency of vibrations caused by external forces",
        correct: false,
      },
      {
        text: "The frequency at which a structure tends to vibrate in the absence of external forces",
        correct: true,
      },
      {
        text: "The frequency of resonance in structural components",
        correct: false,
      },
      {
        text: "The frequency at which a structure undergoes material fatigue",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which structural analysis method is based on the concept of virtual work?",
    answers: [
      { text: "Slope deflection method", correct: false },
      { text: "Moment distribution method", correct: false },
      { text: "Finite element method (FEM)", correct: true },
      { text: "Column analogy method", correct: false },
    ],
  },
  {
    question:
      "What is the primary role of a structural engineer in construction projects?",
    answers: [
      { text: "To design the interior layout of a building", correct: false },
      {
        text: "To supervise the installation of plumbing and electrical systems",
        correct: false,
      },
      {
        text: "To ensure that a structure can withstand the loads and forces it will encounter",
        correct: true,
      },
      {
        text: "To manage the financial aspects of a construction project",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the significance of the 'moment of inertia' in structural analysis?",
    answers: [
      {
        text: "It determines the bending stress in a structural member",
        correct: true,
      },
      {
        text: "It measures the overall weight distribution of a structure",
        correct: false,
      },
      {
        text: "It represents the rotational stability of a building",
        correct: false,
      },
      {
        text: "It quantifies the internal force interactions in a structure",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of a structural shear test?",
    answers: [
      {
        text: "To analyze the compression strength of a building material",
        correct: false,
      },
      {
        text: "To measure the deformation caused by lateral forces in a structure",
        correct: true,
      },
      {
        text: "To assess the acoustic insulation of a building component",
        correct: false,
      },
      {
        text: "To determine the thermal conductivity of structural elements",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which type of structural load primarily acts downward due to gravity?",
    answers: [
      { text: "Live load", correct: false },
      { text: "Wind load", correct: false },
      { text: "Dead load", correct: true },
      { text: "Seismic load", correct: false },
    ],
  },
  {
    question: "What is the purpose of a structural stability analysis?",
    answers: [
      {
        text: "To calculate the structural weight distribution",
        correct: false,
      },
      {
        text: "To determine the resistance of a structure to collapse or failure",
        correct: true,
      },
      {
        text: "To assess the environmental impact of structural materials",
        correct: false,
      },
      {
        text: "To analyze the acoustic performance of a building",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which structural material is known for its high strength-to-weight ratio?",
    answers: [
      { text: "Concrete", correct: false },
      { text: "Steel", correct: true },
      { text: "Wood", correct: false },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question: "What is the primary function of a structural support?",
    answers: [
      { text: "To insulate a building from external noise", correct: false },
      { text: "To provide stability and resist applied loads", correct: true },
      {
        text: "To enhance the aesthetic appearance of a building",
        correct: false,
      },
      {
        text: "To regulate the internal temperature of a building",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which structural analysis method involves dividing the structure into sections and solving for internal forces?",
    answers: [
      { text: "Moment distribution method", correct: false },
      { text: "Finite element method (FEM)", correct: false },
      { text: "Method of Joints", correct: false },
      { text: "Method of Sections", correct: true },
    ],
  },
  {
    question:
      "What is the significance of the 'yield strength' in structural materials?",
    answers: [
      {
        text: "It measures the tensile strength of a material",
        correct: false,
      },
      {
        text: "It represents the maximum stress a material can endure without permanent deformation",
        correct: true,
      },
      {
        text: "It quantifies the compressive strength of a material",
        correct: false,
      },
      {
        text: "It indicates the resistance of a material to fatigue",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which structural element is designed to carry loads primarily by axial compression?",
    answers: [
      { text: "Beam", correct: false },
      { text: "Column", correct: true },
      { text: "Truss", correct: false },
      { text: "Slab", correct: false },
    ],
  },
  {
    question: "What does 'buckling' refer to in structural mechanics?",
    answers: [
      { text: "The breaking point of a structural material", correct: false },
      {
        text: "The excessive deformation of a structural member",
        correct: false,
      },
      {
        text: "The sudden failure of a building under seismic load",
        correct: false,
      },
      {
        text: "The sudden sideways deflection of a slender structural element under compressive stress",
        correct: true,
      },
    ],
  },
  {
    question: "What is the purpose of structural analysis software?",
    answers: [
      { text: "To design architectural layouts for buildings", correct: false },
      {
        text: "To simulate the behavior of structures under various loads and conditions",
        correct: true,
      },
      {
        text: "To control the temperature and humidity inside buildings",
        correct: false,
      },
      {
        text: "To evaluate the environmental impact of construction projects",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which factor is crucial in determining the stability of a cantilever beam?",
    answers: [
      { text: "Its length", correct: true },
      { text: "Its material density", correct: false },
      { text: "Its width", correct: false },
      { text: "Its height", correct: false },
    ],
  },
  {
    question:
      "What is the primary consideration in selecting structural materials for bridges?",
    answers: [
      { text: "Aesthetics", correct: false },
      { text: "Durability and strength", correct: true },
      { text: "Sound insulation", correct: false },
      { text: "Thermal conductivity", correct: false },
    ],
  },
];
///////////////////////////////////////////  Irrigation Engineering  ////////////////////////////////////////////////
const Irrigation_Engineering = [
  {
    question: "What is the primary purpose of irrigation?",
    answers: [
      { text: "To control soil erosion", correct: false },
      { text: "To prevent flooding", correct: false },
      { text: "To supply water to crops", correct: true },
      { text: "To purify water resources", correct: false },
    ],
  },
  {
    question:
      "Which irrigation method involves delivering water directly to the root zone of plants?",
    answers: [
      { text: "Flood irrigation", correct: false },
      { text: "Drip irrigation", correct: true },
      { text: "Sprinkler irrigation", correct: false },
      { text: "Furrow irrigation", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of soil moisture sensors in irrigation systems?",
    answers: [
      { text: "To measure the pH level of soil", correct: false },
      { text: "To determine the nutrient content of soil", correct: false },
      {
        text: "To monitor soil moisture levels for efficient water management",
        correct: true,
      },
      { text: "To detect soil compaction", correct: false },
    ],
  },
  {
    question:
      "Which factor is crucial in determining the water requirement for irrigation?",
    answers: [
      { text: "Crop yield", correct: false },
      { text: "Crop type", correct: false },
      { text: "Climate conditions", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the purpose of canal lining in irrigation channels?",
    answers: [
      { text: "To reduce water seepage and evaporation losses", correct: true },
      { text: "To increase the flow rate of water", correct: false },
      { text: "To prevent soil erosion", correct: false },
      { text: "To facilitate fish farming", correct: false },
    ],
  },
  {
    question:
      "Which irrigation system is known for its high application efficiency?",
    answers: [
      { text: "Sprinkler irrigation", correct: true },
      { text: "Surface irrigation", correct: false },
      { text: "Subsurface irrigation", correct: false },
      { text: "Furrow irrigation", correct: false },
    ],
  },
  {
    question: "What is the main advantage of drip irrigation?",
    answers: [
      { text: "It requires minimal initial investment", correct: false },
      {
        text: "It allows for uniform application of water and nutrients",
        correct: true,
      },
      { text: "It is suitable for all types of soil", correct: false },
      { text: "It does not require electricity for operation", correct: false },
    ],
  },
  {
    question: "Which irrigation system is best suited for hilly terrains?",
    answers: [
      { text: "Flood irrigation", correct: false },
      { text: "Sprinkler irrigation", correct: false },
      { text: "Drip irrigation", correct: false },
      { text: "Terrace irrigation", correct: true },
    ],
  },
  {
    question:
      "What is the primary advantage of center pivot irrigation systems?",
    answers: [
      { text: "They are suitable for small-scale farming", correct: false },
      {
        text: "They allow for precise control over water application",
        correct: false,
      },
      {
        text: "They are cost-effective for large-scale farming",
        correct: true,
      },
      { text: "They reduce soil erosion", correct: false },
    ],
  },
  {
    question:
      "Which irrigation system is commonly used in greenhouse agriculture?",
    answers: [
      { text: "Sprinkler irrigation", correct: false },
      { text: "Flood irrigation", correct: false },
      { text: "Drip irrigation", correct: true },
      { text: "Furrow irrigation", correct: false },
    ],
  },
  {
    question:
      "What is the role of evapotranspiration in irrigation scheduling?",
    answers: [
      { text: "To measure soil moisture levels", correct: false },
      { text: "To estimate water losses due to wind", correct: false },
      {
        text: "To calculate the water demand of crops based on climatic conditions",
        correct: true,
      },
      {
        text: "To monitor water distribution in irrigation canals",
        correct: false,
      },
    ],
  },
  {
    question: "Which factor influences the selection of irrigation methods?",
    answers: [
      { text: "Topography", correct: false },
      { text: "Crop rotation", correct: false },
      { text: "Available water resources", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the significance of fertigation in modern agriculture?",
    answers: [
      { text: "It involves the use of organic fertilizers", correct: false },
      {
        text: "It reduces water consumption in irrigation systems",
        correct: false,
      },
      {
        text: "It combines fertilizer application with irrigation water for improved nutrient uptake by crops",
        correct: true,
      },
      { text: "It enhances soil aeration", correct: false },
    ],
  },
  {
    question:
      "Which irrigation method is known for its ability to improve soil structure?",
    answers: [
      { text: "Flood irrigation", correct: false },
      { text: "Drip irrigation", correct: false },
      { text: "Furrow irrigation", correct: false },
      { text: "Subsurface irrigation", correct: true },
    ],
  },
  {
    question:
      "What is the purpose of soil conservation techniques in irrigation?",
    answers: [
      { text: "To prevent soil compaction", correct: false },
      {
        text: "To promote water infiltration and reduce erosion",
        correct: true,
      },
      { text: "To enhance soil fertility", correct: false },
      { text: "To maintain optimal soil pH levels", correct: false },
    ],
  },
  {
    question: "Which irrigation method is most commonly used in paddy fields?",
    answers: [
      { text: "Drip irrigation", correct: false },
      { text: "Sprinkler irrigation", correct: false },
      { text: "Flood irrigation", correct: true },
      { text: "Terrace irrigation", correct: false },
    ],
  },
  {
    question: "What is the purpose of irrigation scheduling?",
    answers: [
      { text: "To measure the pH level of soil", correct: false },
      { text: "To determine the nutrient content of soil", correct: false },
      { text: "To optimize water use and maximize crop yield", correct: true },
      { text: "To prevent soil erosion", correct: false },
    ],
  },
  {
    question: "Which irrigation system is least affected by wind?",
    answers: [
      { text: "Furrow irrigation", correct: false },
      { text: "Drip irrigation", correct: false },
      { text: "Sprinkler irrigation", correct: true },
      { text: "Surface irrigation", correct: false },
    ],
  },
  {
    question: "What is the primary challenge of irrigation in arid regions?",
    answers: [
      { text: "Excessive soil salinity", correct: false },
      { text: "High water table levels", correct: false },
      { text: "Limited water availability", correct: true },
      { text: "Soil erosion", correct: false },
    ],
  },
  {
    question: "Which irrigation system is most suitable for orchard crops?",
    answers: [
      { text: "Sprinkler irrigation", correct: false },
      { text: "Flood irrigation", correct: false },
      { text: "Drip irrigation", correct: true },
      { text: "Subsurface irrigation", correct: false },
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
    } else if (selectedValue === "Bootstrap") {
      Questions = Bootstrap;
    } else if (selectedValue === "ReactJs") {
      Questions = ReactJs;
    } else if (selectedValue === "Java") {
      Questions = Java;
    } else if (selectedValue === "Python") {
      Questions = Python;
    } else if (selectedValue === "C_Programming") {
      Questions = C_Programming;
    } else if (selectedValue === "C++") {
      Questions = CPP_Programming;
    } else if (selectedValue === "MySQL") {
      Questions = MySQL;
    } else if (selectedValue === "AI/ML") {
      Questions = AI_ML;
    } else if (selectedValue === "DSA") {
      Questions = DSA;
    } else if (selectedValue === "OOPs") {
      Questions = OOPs;
    } else if (selectedValue === "Operating_System") {
      Questions = Operating_System;
    } else if (selectedValue === "Compiler_Design") {
      Questions = Compiler_Design;
    } else if (selectedValue === "Cyber_Security") {
      Questions = Cyber_Security;
    } else if (selectedValue === "IoT") {
      Questions = IoT;
    } else if (selectedValue === "Image_Processing") {
      Questions = Image_Processing;
    } else if (selectedValue === "Robotics") {
      Questions = Robotics;
    } else if (selectedValue === "Virtual_Reality") {
      Questions = Virtual_Reality;
    } else if (selectedValue === "Augmented_Reality") {
      Questions = Augmented_Reality;
    } else if (selectedValue === "Ethical_Hacking") {
      Questions = Ethical_Hacking;
    } else if (selectedValue === "DataBase") {
      Questions = DataBase;
    } else if (selectedValue === "MongoDB") {
      Questions = MongoDB;
    } else if (selectedValue === "Basic_Electronics") {
      Questions = Basic_Electronics;
    } else if (selectedValue === "Electromagnetic_Theory") {
      Questions = Electromagnetic_Theory;
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
