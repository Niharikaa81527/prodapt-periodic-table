// Copy ALL your elements from script.js here
// Example data structure. Replace this with your actual data!
const elements = [
  {
    symbol: "JI",
    subtitle: "JIRA",
    group: "pmtools",
    desc: "Jira is a widely-used software tool developed by Atlassian, designed for project management, issue tracking, and bug tracking. It is particularly popular among agile teams for planning, tracking, and releasing software projects. The name \"Jira\" originates from the Japanese word \"Gojira,\" meaning \"Godzilla.\"",
    link: "https://www.atlassian.com/software/jira",
    category: "Project Management",
    vendor: "Atlassian",
    costcodes: `TES Global B2C (B/TEM/001)<br>Cenam SF Implementation (B/CNM/001)<br>Path to Premier (B/CTL/069)`
  },
  {
    symbol: "AD",
    subtitle: "Azure DevOps",
    group: "pmtools",
    desc: "Azure DevOps Services is a comprehensive suite of development tools and services designed to help teams plan smarter, collaborate better, and ship faster. It supports a collaborative culture and set of processes that bring together developers, project managers, and contributors to develop software more efficiently than traditional approaches",
    link: "https://azure.microsoft.com/en-us/products/devops",
    category: "Project Management",
    vendor: "Microsoft",
    costcodes: `WIN IT - MIRROR  Decomm (B/WIN/114)<br>MVNx Onboarding Automation MVP 1 (B/ATT/054)<br>Delta RFC Application Project (B/DLF/002)`
  },
  {
    symbol: "MI",
    subtitle: "Miro",
    group: "pmtools",
    desc: "Miro is a collaborative online platform designed to support teams in planning, and execution across different locations and time zones. It is used for a variety of purposes, including brainstorming, agile planning, customer journey mapping, product design, and remote workshops.",
    link: "https://miro.com/",
    category: "Collaboration",
    vendor: "Miro",
    costcodes: `B2B SOW (B/KPN/038)<br>Customer CI Squad (B/CFL/004)<br>Delta Fiber Consulting (B/DLF/001)`
  },
  {
    symbol: "MD",
    subtitle: "Monday.com",
    group: "pmtools",
    desc: "the Work OS that provides you with all of the no-code building blocks so you can shape your workflows, your way. Here, you can run every aspect of your work by layering industry-specific products on top of the Work OS. Combine building blocks, like apps and integrations, to customize anything you need to improve the way your business runs.",
    link: "https://monday.com/",
    category: "Project Management",
    vendor: "Monday.com",
    costcodes: `Centric FSL (B/CIG/002)<br>Gamma Enterprise Salesforce Track (B/GMA/006)`
  },
  {
    symbol: "PL",
    subtitle: "ProjectLibre",
    group: "pmtools",
    desc: "ProjectLibre is a project management software company with both a free open-source desktop and a Cloud AI version. ProjectLibre Cloud is a team and Artificial Intelligence solution. ProjectLibre desktop is a free and open-source project management software system intended ultimately as a standalone replacement for Microsoft Project.",
    link: "https://www.projectlibre.com/",
    category: "Project Management",
    vendor: "ProjectLibre",
    costcodes: `Matrix- Charging Migration (B/TLS/021)`
  },
  {
    symbol: "SQ",
    subtitle: "SonarQube",
    group: "codereview",
    desc: "SonarQube is an open-source platform for continuous code quality inspection. It helps development teams manage technical debt and maintain high code quality through automated code reviews. The platform supports multiple languages and integrates with CI/CD pipelines, providing real-time feedback to developers.",
    link: "https://www.sonarqube.org/",
    category: "Code Review",
    vendor: "SonarSource",
    costcodes: `Path to Premier (B/CTL/069)<br>Quantum Fiber - Phase 1 (B/CTL/063)<br>Brightspeed EOM Support (B/BRS/002)`
  },
  {
    symbol: "SL",
    subtitle: "SonarLint",
    group: "codereview",
    desc: "SonarLint is a free and open-source IDE plugin designed for static code analysis. It provides real-time feedback on code quality and security issues as you write code in your IDE. SonarLint supports multiple languages and frameworks, making it a versatile tool for developers.",
    link: "https://www.sonarlint.org/",
    category: "Code Review",
    vendor: "SonarSource",
    costcodes: `BT Network Subcon ITT - Lot A (B/BTO/034)<br>Windstream Kinetic  overbuild (B/WIN/110)`
  },
  {
    symbol: "FS",
    subtitle: "FortiScan",
    group: "codereview",
    desc: "The FortiScan Compliance and Vulnerability Management Platform by Fortinet, Inc. is an enterprise level IT security solution that protects your IP assets from known vulnerabilities and exploits, and allows you to address new vulnerabilities and exploits immediately, before vendor-provided patches or fixes are available.",
    link: "#",
    category: "Security",
    vendor: "Fortinet",
    costcodes: `Network Intelligence (B/WIN/079)`
  },
  {
    symbol: "APMD",
    subtitle: "Apex PMD",
    group: "codereview",
    desc: "Apex PMD is a specific implementation of PMD that supports the Apex language. It allows Salesforce developers to perform static code analysis on their Apex code to ensure it adheres to best practices and coding standards.",
    link: "https://pmd.github.io/",
    category: "Code Review",
    vendor: "PMD",
    costcodes: `Cenam SF Implementation (B/CNM/001)<br>TDS SF Implementation (B/TDS/001)`
  },
  {
    symbol: "PYL",
    subtitle: "Pylint",
    group: "codereview",
    desc: "Pylint is a static code analyzer for Python that checks your code for errors, enforces a coding standard, looks for code smells, and suggests how the code can be refactored. It is highly configurable and can be integrated into various development environments, making it a popular choice for Python developers looking to maintain high code quality and consistency.",
    link: "https://pylint.pycqa.org/",
    category: "Code Review",
    vendor: "PyCQA",
    costcodes: `Frontier BP Development (B/FTR/001)<br>LMN - GenAI for IVR (B/CTL/076)`
  },
  {
    symbol: "VS",
    subtitle: "Visual Studio Code + Copilot",
    group: "codereview",
    desc: "Visual Studio Code (VS Code) is a free, cross-platform code editor developed by Microsoft. It is designed to provide a streamlined and efficient coding experience for developers working on various platforms, including Windows, macOS, and Linux.",
    link: "https://code.visualstudio.com/",
    category: "Code Review",
    vendor: "Microsoft",
    costcodes: `WIN IT - MIRROR Decomm (B/WIN/114)`
  },
  {
    symbol: "EIA",
    subtitle: "Evergreen Insta Analyzer",
    group: "codereview",
    desc: "The Evergreen Instance Analyzer (EIA) for ServiceNow is a tool developed by Evergreen Systems to help organizations identify and address poor quality code within their ServiceNow instances. It analyzes code, identifies deviations from best practices, and provides a platform for managing repairs, ultimately leading to improved performance, maintainability, and upgradeability",
    link: "https://www.youtube.com/watch?v=_XlhWj94yuQ",
    category: "Code Review",
    vendor: "Evergreen",
    costcodes: `ServiceNow resourcing (B/APF/001)`
  },
  {
    symbol: "AS",
    subtitle: "IBM AppScan",
    group: "codereview",
    desc: "IBM AppScan is a comprehensive application security testing tool designed to identify and manage vulnerabilities in web applications, web services, and APIs. It provides advanced scanning capabilities to ensure compliance with security standards and protect applications from potential threats.",
    link: "https://www.ibm.com/security/application-security/appscan",
    category: "Security",
    vendor: "IBM",
    costcodes: ``
  },
  {
    symbol: "JU",
    subtitle: "JUnit",
    group: "unittesting",
    desc: "JUnit is an open-source unit testing framework for the Java programming language. It allows developers to write and execute automated tests to ensure that their code works as expected. JUnit is widely used in the Java ecosystem for test-driven development (TDD), where tests are written before the actual code is implemented.",
    link: "https://junit.org/",
    category: "Unit Testing",
    vendor: "JUnit",
    costcodes: `MVNx Onboarding Automation MVP 1 (B/ATT/054)<br>BT Network Subcon ITT - Lot A (B/BTO/034)<br>Gamma Labs UK Legacy BSS Stack Transformation(B/GMA/001)`
  },
  {
    symbol: "NU",
    subtitle: "NUnit",
    group: "unittesting",
    desc: "NUnit is an open-source unit testing framework designed for the .NET Framework and Mono. It is widely used for writing and running tests in .NET applications, similar to how JUnit is used in the Java ecosystem.",
    link: "https://nunit.org/",
    category: "Unit Testing",
    vendor: "NUnit",
    costcodes: `VMIE L3 Local (B/LGI/121)<br>VMIE L2 App Support (B/LGI/092)`
  },
  {
    symbol: "PT",
    subtitle: "Pytest",
    group: "unittesting",
    desc: "Pytest is an open-source testing framework that has redefined simplicity and efficiency in Python testing. Its popularity hinges on its ability to support simple unit tests and complex functional testing for applications. What sets Pytest apart is its minimalistic syntax and the ability to write test codes using Python's assert statement, making tests readable and maintainable.",
    link: "https://pytest.org/",
    category: "Unit Testing",
    vendor: "pytest",
    costcodes: `LMN DC platform assist (B/CTL/078)`
  },
  {
    symbol: "SE",
    subtitle: "Selenium",
    group: "testingtool",
    desc: "Selenium is a free (open-source) automated testing framework used to validate web applications across different browsers and platforms. It supports multiple programming languages like Java, C#, Python, and more to create Selenium Test Scripts. Selenium is widely used for automating web applications for testing purposes, but it can also automate other web-based administration tasks.",
    link: "https://www.selenium.dev/",
    category: "Testing",
    vendor: "Selenium",
    costcodes: `GCX IT Transformation - Phase 1 (B/GCX/003)<br>VDSI _ Network Capacity Planning _ Type 1 (B/VZN/033)<br>Rogers - Proximus - Q1FY26 (B/ROC/036)`
  },
  {
    symbol: "JM",
    subtitle: "JMeter",
    group: "testingtool",
    desc: "JMeter is an open-source tool developed by Apache, primarily used for performance testing of web applications, APIs, and databases. It is a Java-based application that allows users to simulate heavy loads on servers to analyze their performance under stress. JMeter can conduct functional, load, and performance testing, making it versatile for various testing needs.",
    link: "https://jmeter.apache.org/",
    category: "Testing",
    vendor: "Apache",
    costcodes: `MPesa Test as a Service (B/MPS/001)<br>Matrix- Charging Migration (B/TLS/021)`
  },
  {
    symbol: "PM",
    subtitle: "Postman",
    group: "testingtool",
    desc: "Postman is an API platform designed to simplify the process of building, testing, and managing APIs. It provides a comprehensive set of tools that streamline the entire API lifecycle, from design and testing to documentation and collaboration.",
    link: "https://www.postman.com/",
    category: "Testing",
    vendor: "Postman",
    costcodes: `VMIE L3 Local (B/LGI/121)<br>MPESA One Operations (B/MPS/007)`
  },
  {
    symbol: "ATF",
    subtitle: "ATF",
    group: "testingtool",
    desc: "Built-in tool that enables users to automate the testing of applications, customizations, and configurations within a ServiceNow instance. ATF allows developers and QA teams to create and run automated tests on forms, buttons, scripts, workflows, and more, without needing to write extensive code.",
    link: "https://developer.servicenow.com/",
    category: "Testing",
    vendor: "ATF",
    costcodes: `VMIE ServiceNow Implementation (B/LGI/117)<br>ServiceNow Integration (B/STL/002)<br>HyperOptic OSS Transformation (B/HPO/001)`
  },
  {
    symbol: "AQ",
    subtitle: "AccelQ",
    group: "testingtool",
    desc: "The most powerful test automation tool for Web, API, Mobile, Desktop, Mainframes and more. AI-powered Recording coupled with a powerful No-code Natural language editor.",
    link: "https://www.accelq.com/",
    category: "Testing",
    vendor: "AccelQ",
    costcodes: `Quantum Fiber - Phase 1 (B/CTL/063)`
  },
  {
    symbol: "CY",
    subtitle: "Cypress",
    group: "testingtool",
    desc: "Cypress can be best described as an end-to-end testing framework that allows developers to write automated tests for web applications. It provides a comprehensive solution for testing everything from user interactions to backend processes.",
    link: "https://www.cypress.io/",
    category: "Testing",
    vendor: "Cypress",
    costcodes: `MPESA One Operations (B/MPS/007)`
  },
  {
    symbol: "ZP",
    subtitle: "Zephyr",
    group: "testingtool",
    desc: "Zephyr is a suite of test management tools developed by SmartBear, designed to help manage the entire software testing lifecycle. It offers functionalities for organizing and automating testing processes, improving efficiency and quality in software delivery. Zephyr is also integrated with Jira, allowing teams to manage test cases, executions, and reporting within the familiar Jira interface.",
    link: "https://www.getzephyr.com/",
    category: "Testing",
    vendor: "Zephyr",
    costcodes: `Brightspeed EOM and Support (B/BRS/002)`
  },
  {
    symbol: "RF",
    subtitle: "Robot Framework",
    group: "testingtool",
    desc: "Robot Framework is an open-source automation framework designed for test automation and robotic process automation (RPA). It is supported by the Robot Framework Foundation and is widely used in the industry. The framework's syntax is human-friendly and versatile, utilizing keywords that can be extended through libraries in Python, Java, and other languages.",
    link: "https://robotframework.org/",
    category: "Testing",
    vendor: "Robot Framework",
    costcodes: `Virgin Media System Integration and Service Delivery (B/LGI/114)`
  },
  {
    symbol: "JK",
    subtitle: "Jenkins",
    group: "cicdtools",
    desc: "Jenkins is an open-source automation server that facilitates the continuous integration and continuous delivery (CI/CD) of software projects. Written in Java, Jenkins allows developers to build, test, and deploy their applications efficiently. It operates within servlet containers like Apache Tomcat and supports various version control tools such as Git, Subversion, and Mercurial",
    link: "https://www.jenkins.io/",
    category: "CI/CD",
    vendor: "Jenkins",
    costcodes: `VZ | NS | Security Vulnerabilities (B/VZN/042)<br>TES Global B2C (B/TEM/001)<br>CF - Development Squad (B/CFL/008)`
  },
  {
    symbol: "ADO",
    subtitle: "ADO Pipeline",
    group: "cicdtools",
    desc: "An ADO (Azure DevOps) Pipeline is a feature of Azure DevOps that automates the processes of building, testing, and deploying code. It integrates Continuous Integration (CI) and Continuous Delivery (CD) practices to ensure that code changes are consistently built, tested, and delivered to various environments or production systems.",
    link: "https://azure.microsoft.com/en-us/products/devops/pipelines",
    category: "CI/CD",
    vendor: "Microsoft",
    costcodes: `MVNx Onboarding Automation MVP 1 (B/ATT/054)<br>BOTPRESS development (B/WIN/088)`
  },
  {
    symbol: "GL",
    subtitle: "GitLab",
    group: "cicdtools",
    desc: "GitLab is a comprehensive DevOps platform that integrates various tools and functionalities to streamline the software development lifecycle. It is not just a Git repository manager but a complete solution that includes version control, issue tracking, continuous integration/continuous deployment (CI/CD), and collaboration tools.",
    link: "https://about.gitlab.com/",
    category: "CI/CD",
    vendor: "GitLab",
    costcodes: `Centric SF (B/CIG/001)<br>TierPoint Managed Services (B/TRP/003)<br>CENAM SF Implementation (B/CNM/001)`
  },
  {
    symbol: "GH",
    subtitle: "GitHub",
    group: "cicdtools",
    desc: "GitHub is a web-based platform designed for version control and collaboration, built on top of Git, a distributed version control system. It allows developers to host, manage, and collaborate on software projects efficiently, whether they are working individually or as part of a team.",
    link: "https://github.com/",
    category: "CI/CD",
    vendor: "GitHub",
    costcodes: `Shentel- ServiceNow TSOM (B/STL/004)<br>Brightspeed EOM and Support (B/BRS/002)<br>VMIE Platform build (B/LGI/116)`
  },
  {
    symbol: "BB",
    subtitle: "Bitbucket",
    group: "cicdtools",
    desc: "Bitbucket is a Git-based code hosting and collaboration platform designed for teams to manage their software development lifecycle. It provides tools for source code management, continuous integration/continuous delivery (CI/CD), and team collaboration. Bitbucket supports both cloud-based and self-hosted options, catering to diverse organizational needs.",
    link: "https://bitbucket.org/",
    category: "CI/CD",
    vendor: "Atlassian",
    costcodes: `IT Transformation - Phase 1 (B/GCX/003)`
  },
  {
    symbol: "AE",
    subtitle: "Appian Integration",
    group: "cicdtools",
    desc: "Appian integration enables seamless communication between Appian applications and external systems. It supports various methods such as HTTP APIs, Web Services, and Connected Systems, allowing efficient data exchange and process automation. Integrations in Appian are designed to handle JSON/XML data, secure authentication, and external system interactions.",
    link: "https://www.appian.com/",
    category: "CI/CD",
    vendor: "Appian",
    costcodes: `Appian enabled integration<br>VMO2 Appian Development (B/LGI/127)`
  },
  {
    symbol: "CP",
    subtitle: "Copado",
    group: "cicdtools",
    desc: "Copado is a powerful DevOps platform designed specifically for the Salesforce ecosystem. It provides an end-to-end solution that helps organizations manage the entire development lifecycle, enabling them to adopt agile methodologies and automate their release processes. Key features include automated deployment, version control, and integrated testing, making it a leading choice for low-code SaaS platforms.",
    link: "https://www.copado.com/",
    category: "CI/CD",
    vendor: "Copado",
    costcodes: `LLA - Peacock (B/CWC/051)<br>TDS SF Implementation (B/TDS/001)`
  },
  {
    symbol: "AWS",
    subtitle: "AWS CI/CD",
    group: "cicdtools",
    desc: "Continuous Integration (CI) and Continuous Delivery (CD) are essential practices in modern software development, enabling teams to deliver applications and services at high velocity. AWS provides a comprehensive suite of tools to implement CI/CD pipelines, automating the build, test, and deployment processes.",
    link: "https://aws.amazon.com/devops/continuous-delivery/",
    category: "CI/CD",
    vendor: "Amazon",
    costcodes: `Rogers-Comcast RFP-OSS Managed Services (B/ROC/037)<br>Circles: Wireless Customer Migration (B/CIR/001)<br>LLA - Customer Care Ops (B/CWC/069)`
  },
  {
    symbol: "TMF",
    subtitle: "TMF API",
    group: "cicdtools",
    desc: "The TM Forum Open APIs (TMF APIs) are a set of standardized interfaces designed to enable seamless integration and interoperability within the telecommunications industry. These APIs are developed under the Apache 2.0 license and are widely adopted by Communication Service Providers (CSPs) and software vendors to accelerate digital transformation and innovation.",
    link: "https://www.tmforum.org/",
    category: "CI/CD",
    vendor: "TM Forum",
    costcodes: `ServiceNow-Integration (B/STL/002)`
  },
  {
    symbol: "OS",
    subtitle: "OpenShift",
    group: "cicdtools",
    desc: "OpenShift is a containerization platform developed by Red Hat that simplifies the deployment and management of containerized applications. It leverages Kubernetes as its underlying orchestration platform, enabling automated deployment, scaling, and management of applications. OpenShift is designed to facilitate collaboration between development and operations teams, providing tools and workflows that streamline the software development lifecycle.",
    link: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
    category: "CI/CD",
    vendor: "Red Hat",
    costcodes: `VDSI _ Network Capacity Planning _ Type 1 (B/VZN/033)`
  },
  {
    symbol: "SP",
    subtitle: "Spinnaker",
    group: "cicdtools",
    desc: "Spinnaker was originally developed by Netflix to address deployment complexities across multiple clouds and microservices architectures. It automates the delivery process through customizable pipelines, allowing organizations to deploy applications and infrastructure changes with confidence and minimal manual effort.",
    link: "https://www.spinnaker.io/",
    category: "CI/CD",
    vendor: "Netflix",
    costcodes: `BT Network Subcon ITT - Lot A (B/BTO/034)`
  },
  {
    symbol: "SN",
    subtitle: "Snowflake CI/CD",
    group: "cicdtools",
    desc: "Snowflake is a cloud-based data warehousing platform known for its scalability and flexibility. It separates storage and compute resources, enabling independent scaling and cost optimization. With a focus on ease of use, it facilitates secure data sharing and collaboration between organizations. Snowflake's cloud-native architecture leverages the benefits of providers like AWS, Azure, and Google Cloud.",
    link: "https://www.snowflake.com/",
    category: "CI/CD",
    vendor: "Snowflake",
    costcodes: `CF_PJMMLTeam_FY24 (B/CFL/020)`
  },
  {
    symbol: "AR",
    subtitle: "Argo CD",
    group: "cicdtools",
    desc: "Argo CD is a declarative continuous delivery tool designed for Kubernetes. It follows the GitOps pattern, which uses Git repositories as the single source of truth for defining the desired state of applications and infrastructure. This approach ensures that the desired state is versioned, expressed declaratively, and automatically pulled from the Git repository.",
    link: "https://argo-cd.readthedocs.io/",
    category: "CI/CD",
    vendor: "Argo",
    costcodes: `Shentel - Network Assurance (B/STL/005)`
  },
  {
    symbol: "SFDX",
    subtitle: "Salesforce Developer Experience",
    group: "cicdtools",
    desc: "Salesforce Developer Experience (SFDX) is a suite of tools and features designed to enhance the development process on the Salesforce platform. It caters to both pro-code developers and low-code administrators, enabling efficient, source-driven development and streamlined DevOps workflows.",
    link: "https://developer.salesforce.com/tools/sfdxcli",
    category: "CI/CD",
    vendor: "Salesforce",
    costcodes: `CENAM SF Implementation (B/CNM/001)`
  },
  {
    symbol: "TC",
    subtitle: "TeamCity",
    group: "cicdtools",
    desc: "TeamCity, developed by JetBrains, is a powerful Continuous Integration (CI) and Continuous Deployment (CD) server designed to streamline software development workflows. It automates the process of building, testing, and deploying code, ensuring rapid feedback and improved collaboration among development teams.",
    link: "https://www.jetbrains.com/teamcity/",
    category: "CI/CD",
    vendor: "JetBrains",
    costcodes: ``
  },
  {
    symbol: "AN",
    subtitle: "Ansible",
    group: "cicdtools",
    desc: "Ansible is an open-source IT automation tool that simplifies the management of applications, systems, and infrastructure. It is designed to automate tasks such as application deployment, cloud provisioning, and intra-service orchestration. Ansible is known for its simplicity, ease of use, and agentless architecture, which means it does not require any software to be installed on the managed nodes.",
    link: "https://www.ansible.com/",
    category: "CI/CD",
    vendor: "Red Hat",
    costcodes: ``
  },
  {
    symbol: "CM",
    subtitle: "CheckMarx",
    group: "codereview",
    desc: "Static Application Security Testing (SAST) tool for identifying security vulnerabilities in source code",
    link: "https://checkmarx.com",
    category: "Security",
    vendor: "Checkmarx",
    costcodes: `Brightspeed EOM and Support (B/BRS/002)`
  },
  {
    symbol: "FC",
    subtitle: "Flosum Composer",
    group: "cicdtools",
    desc: "Flosum is a complete platform built natively for Salesforce, ensuring best-in-class security and ease of Deployment through the familiar Salesforce interface.Flosum Composer is 100% native Salesforce DevOps solution within Flosum platform, that focuses on creating and managing Salesforce metadata and Deployment.",
    link: "https://www.flosum.com",
    category: "CI/CD",
    vendor: "Flosum",
    costcodes: `Quantum Fiber - Phase 1 (B/CTL/064)`
  },
  {
    symbol: "TF",
    subtitle: "Terraform Automation Scripts",
    group: "codereview",
    desc: "In built Terraform Automation scripts for VMIE Platform build - Infrastructure as Code tool with built-in automation scripts",
    link: "https://terraform.io",
    category: "Infrastructure",
    vendor: "HashiCorp",
    costcodes: `VMIE Platform build (B/LGI/116)`
  }
];

// Group definitions for legend
const groups = [
  { group: "pmtools", label: "PM Tools" },
  { group: "codereview", label: "Code Review" },
  { group: "unittesting", label: "Unit Testing" },
  { group: "testingtool", label: "Testing Tool" },
  { group: "cicdtools", label: "CI/CD Tools" }
];

// Export the data for React components
export { elements, groups };

