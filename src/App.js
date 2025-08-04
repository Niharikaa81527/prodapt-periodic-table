import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Legend from './components/Legend';
import PeriodicGrid from './components/PeriodicGrid';
import Modal from './components/Modal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements, setElements] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static data - no API calls, no database
  useEffect(() => {
    console.log('🚀 Loading static data...');
    
    // Comprehensive hardcoded elements
    const staticElements = [
      {
        symbol: "JI",
        subtitle: "JIRA",
        group: "pmtools",
        desc: "Jira is a widely-used software tool developed by Atlassian, designed for project management, issue tracking, and bug tracking. It is particularly popular among agile teams for planning, tracking, and releasing software projects. The platform offers comprehensive features including customizable workflows, advanced reporting and analytics, roadmap planning, and sprint management. Jira supports various project methodologies including Scrum, Kanban, and mixed approaches, with powerful integration capabilities for development tools, CI/CD pipelines, and team collaboration platforms. Its flexible issue types, custom fields, and automation rules make it adaptable to diverse team needs and organizational processes.",
        link: "https://www.atlassian.com/software/jira",
        position_index: 0,
        costcodes: `TES Global B2C (B/TEM/001) | <a href="mailto:sriharicherur.k@prodapt.com" class="project-head-email">sriharicherur.k@prodapt.com</a><br>Cenam SF Implementation (B/CNM/001) | <a href="mailto:vamsikrishna.av@prodapt.com" class="project-head-email">vamsikrishna.av@prodapt.com</a><br>Path to Premier (B/CTL/069) | <a href="mailto:karthick.mohan@prodapt.com" class="project-head-email">karthick.mohan@prodapt.com</a>`
      },
      {
        symbol: "GH",
        subtitle: "GitHub",
        group: "cicdtools",
        desc: "GitHub is the world's leading web-based platform for version control and collaborative software development, built on top of Git. Beyond basic code hosting, GitHub provides comprehensive DevOps capabilities including issue tracking, project management, pull requests for code review, GitHub Actions for CI/CD automation, and GitHub Pages for static site hosting. The platform facilitates seamless collaboration through features like branch protection rules, automated testing, security scanning, and dependency management.",
        link: "https://github.com/",
        position_index: 17,
        costcodes: `Shentel- ServiceNow TSOM (B/STL/004) | <a href="mailto:sathiyanarayanan.m@prodapt.com" class="project-head-email">sathiyanarayanan.m@prodapt.com</a><br>Brightspeed EOM and Support (B/BRS/002) | <a href="mailto:maniannagasubra.s@prodapt.com" class="project-head-email">maniannagasubra.s@prodapt.com</a><br>VMIE Platform build (B/LGI/116) | <a href="mailto:mohammed.fi@prodapt.com" class="project-head-email">mohammed.fi@prodapt.com</a>`
      },
      {
        symbol: "MI",
        subtitle: "Miro",
        group: "pmtools",
        desc: "Miro is a collaborative online platform designed to support teams in planning, brainstorming, and execution across different locations and time zones. It provides an infinite digital whiteboard experience that enables real-time collaboration for various purposes including agile planning, customer journey mapping, product design, remote workshops, and design thinking sessions. The platform offers extensive template libraries, sticky notes, shapes, connectors, and multimedia integration capabilities. Miro supports seamless integration with popular tools like Slack, Microsoft Teams, Google Workspace, and Atlassian products, making it a central hub for visual collaboration. Its advanced features include voting, timer functionality, presentation mode, and enterprise-grade security, enabling teams to maintain productivity and creativity regardless of their physical location.",
        link: "https://miro.com/",
        position_index: 2,
        costcodes: `B2B SOW (B/KPN/038) | <a href="mailto:gireesha.e@prodapt.com" class="project-head-email">gireesha.e@prodapt.com</a><br>Customer CI Squad (B/CFL/004) | <a href="mailto:kumarmangalam.m@prodapt.com" class="project-head-email">kumarmangalam.m@prodapt.com</a>`
      },
      {
        symbol: "AE",
        subtitle: "Appian Integration",
        group: "cicdtools",
        desc: "Appian integration enables seamless communication between Appian applications and external systems through multiple connectivity methods and robust data exchange capabilities. It supports various integration approaches including HTTP APIs, Web Services, Connected Systems, and database connections, allowing efficient data synchronization and process automation across enterprise ecosystems. The platform's integration framework is designed to handle complex data transformations, support multiple data formats including JSON and XML, implement secure authentication mechanisms, and manage external system interactions with reliability and scalability. Appian's low-code integration approach enables both technical and business users to create sophisticated integrations through visual designers, pre-built connectors, and comprehensive monitoring tools that ensure data integrity and system performance.",
        link: "https://www.appian.com/",
        position_index: 27,
        costcodes: `VMO2 Appian Development (B/LGI/127) | <a href="mailto:mohammed.fi@prodapt.com" class="project-head-email">mohammed.fi@prodapt.com</a>`
      },
      {
        symbol: "AD",
        subtitle: "Azure DevOps",
        group: "pmtools",
        desc: "Azure DevOps Services is a comprehensive suite of development tools and services designed to help teams plan smarter, collaborate better, and ship faster. It supports a collaborative culture and set of processes that bring together developers, project managers, and contributors to develop software more efficiently than traditional approaches",
        link: "https://azure.microsoft.com/en-us/products/devops",
        position_index: 18,
        vendor: "Microsoft",
        costcodes: `WIN IT - MIRROR  Decomm (B/WIN/114) | <a href="mailto:sujith.g@prodapt.com" class="project-head-email">sujith.g@prodapt.com</a><br>MVNx Onboarding Automation MVP 1 (B/ATT/054) | <a href="mailto:pradeshkumar.v@prodapt.com" class="project-head-email">pradeshkumar.v@prodapt.com</a>`
      },
      {
        symbol: "SQ",
        subtitle: "SonarQube",
        group: "codereview",
        desc: "SonarQube is an open-source platform for continuous code quality inspection that revolutionizes how development teams manage technical debt and maintain high code quality standards. It performs automated code reviews through comprehensive static analysis, detecting bugs, vulnerabilities, code smells, and maintainability issues across over 25 programming languages. The platform supports seamless integration with CI/CD pipelines including Jenkins, Azure DevOps, GitLab, and GitHub Actions, providing real-time feedback to developers during the development process. SonarQube offers advanced features including quality gates, security hotspots analysis, test coverage reporting, and detailed remediation guidance. Its enterprise capabilities include branch analysis, portfolio management, and extensive reporting dashboards that enable teams to track code quality trends and enforce coding standards organization-wide.",
        link: "https://www.sonarqube.org/",
        position_index: 5,
        costcodes: `Path to Premier (B/CTL/069) | <a href="mailto:karthick.mohan@prodapt.com" class="project-head-email">karthick.mohan@prodapt.com</a><br>Quantum Fiber - Phase 1 (B/CTL/063) | <a href="mailto:muthuselvan.s@prodapt.com" class="project-head-email">muthuselvan.s@prodapt.com</a><br>Brightspeed EOM Support (B/BRS/002) | <a href="mailto:maniannagasubra.s@prodapt.com" class="project-head-email">maniannagasubra.s@prodapt.com</a>`
      },
      {
        symbol: "TC",
        subtitle: "TeamCity",
        group: "cicdtools",
        desc: "TeamCity, developed by JetBrains, is a powerful Continuous Integration (CI) and Continuous Deployment (CD) server designed to streamline software development workflows. It automates the process of building, testing, and deploying code, ensuring rapid feedback and improved collaboration among development teams.",
        link: "https://www.jetbrains.com/teamcity/",
        position_index: 6,
        costcodes: ``
      },
      {
        symbol: "AQ",
        subtitle: "AccelQ",
        group: "testingtool",
        desc: "AccelQ is a comprehensive cloud-based test automation platform that revolutionizes software testing with its AI-powered capabilities and codeless approach. It supports end-to-end testing across Web, API, Mobile, Desktop, Database, and Mainframe applications. The platform features intelligent test recording, natural language test scripting, and advanced analytics. AccelQ's unique selling point is its ability to enable both technical and non-technical team members to create robust automated tests without programming knowledge, while providing enterprise-grade scalability and integration capabilities with popular CI/CD tools.",
        link: "https://www.accelq.com/",
        position_index: 26,
        costcodes: `Quantum Fiber - Phase 1 (B/CTL/063) | <a href="mailto:muthuselvan.s@prodapt.com" class="project-head-email">muthuselvan.s@prodapt.com</a>`
      },
      {
        symbol: "RF",
        subtitle: "Robot Framework",
        group: "testingtool",
        desc: "Robot Framework is an open-source automation framework designed for comprehensive test automation and robotic process automation (RPA), supported by the Robot Framework Foundation and widely adopted across industries. The framework features a unique keyword-driven approach with human-friendly syntax that makes test cases easily readable and maintainable by both technical and non-technical team members. Its versatile architecture allows extensive customization through libraries written in Python, Java, and other languages, enabling automation of web applications, APIs, databases, mobile apps, and desktop applications. Robot Framework supports advanced features including data-driven testing, behavior-driven development, parallel execution, and comprehensive reporting with detailed logs and screenshots. The platform integrates seamlessly with CI/CD pipelines, popular IDEs, and testing tools, making it an ideal choice for organizations seeking robust, scalable automation solutions.",
        link: "https://robotframework.org/",
        position_index: 4,
        costcodes: `Virgin Media System Integration and Service Delivery (B/LGI/114) | <a href="mailto:mohammed.fi@prodapt.com" class="project-head-email">mohammed.fi@prodapt.com</a>`
      },
      {
        symbol: "MD",
        subtitle: "Monday.com",
        group: "pmtools",
        desc: "Monday.com is a comprehensive Work Operating System (Work OS) that provides teams with customizable no-code building blocks to create tailored workflows and manage projects efficiently. The platform offers advanced project tracking, timeline management, automation capabilities, and real-time collaboration tools that adapt to any team's unique needs. With features including custom dashboards, resource management, time tracking, and integration with 50+ popular tools, Monday.com enables organizations to streamline operations, improve transparency, and boost productivity across departments. Its intuitive interface and flexible architecture make it suitable for everything from simple task management to complex enterprise project coordination.",
        link: "https://monday.com/",
        position_index: 7,
        costcodes: `Centric FSL (B/CIG/002) | <a href="mailto:girish.vn@prodapt.com" class="project-head-email">girish.vn@prodapt.com</a><br>Gamma Enterprise Salesforce Track (B/GMA/006) | <a href="mailto:kumarmangalam.m@prodapt.com" class="project-head-email">kumarmangalam.m@prodapt.com</a>`
      },
      {
        symbol: "FS",
        subtitle: "FortiScan",
        group: "codereview",
        desc: "The FortiScan Compliance and Vulnerability Management Platform by Fortinet, Inc. is an enterprise level IT security solution that protects your IP assets from known vulnerabilities and exploits, and allows you to address new vulnerabilities and exploits immediately, before vendor-provided patches or fixes are available.",
        link: "#",
        position_index: 11,
        costcodes: `Network Intelligence (B/WIN/079) | <a href="mailto:mahesh.g@prodapt.com" class="project-head-email">mahesh.g@prodapt.com</a>`
      },
      {
        symbol: "NU",
        subtitle: "NUnit",
        group: "unittesting",
        desc: "NUnit is an open-source unit testing framework designed for the .NET Framework and Mono, providing a comprehensive solution for test-driven development. It features a rich assertion library, parameterized tests, data-driven testing capabilities, and extensive reporting options. NUnit supports parallel test execution, custom attributes for test categorization, and integrates seamlessly with Visual Studio, CI/CD pipelines, and various development tools. The framework follows industry standards and best practices, making it the preferred choice for .NET developers who prioritize code quality and maintainable test suites.",
        link: "https://nunit.org/",
        position_index: 9,
        costcodes: `VMIE L3 Local (B/LGI/121) | <a href="mailto:mohammed.fi@prodapt.com" class="project-head-email">mohammed.fi@prodapt.com</a><br>VMIE L2 App Support (B/LGI/092) | <a href="mailto:mohammed.fi@prodapt.com" class="project-head-email">mohammed.fi@prodapt.com</a>`
      },
      {
        symbol: "JM",
        subtitle: "JMeter",
        group: "testingtool",
        desc: "JMeter is an open-source performance testing tool developed by Apache, specifically designed for comprehensive load testing, performance testing, and functional testing of web applications, APIs, databases, and various network protocols. As a Java-based application, JMeter provides a powerful GUI-based interface for creating sophisticated test plans while also supporting command-line execution for CI/CD integration. The tool excels at simulating heavy user loads on servers, enabling performance analysis under stress conditions through advanced load patterns, ramp-up scenarios, and distributed testing capabilities. JMeter supports extensive protocols including HTTP/HTTPS, SOAP, REST, FTP, JDBC, LDAP, and JMS, making it versatile for testing diverse application architectures. Its comprehensive reporting features include real-time monitoring, detailed performance metrics, response time analysis, and customizable dashboards that help teams identify bottlenecks and optimize application performance.",
        link: "https://jmeter.apache.org/",
        position_index: 10,
        costcodes: `MPesa Test as a Service (B/MPS/001) | <a href="mailto:pavithra.vr@prodapt.com" class="project-head-email">pavithra.vr@prodapt.com</a><br>Matrix- Charging Migration (B/TLS/021) | <a href="mailto:saurabh.kashyap@prodapt.com" class="project-head-email">saurabh.kashyap@prodapt.com</a>`
      },
      {
        symbol: "JK",
        subtitle: "Jenkins",
        group: "cicdtools",
        desc: "Jenkins is an open-source automation server that facilitates the continuous integration and continuous delivery (CI/CD) of software projects. Written in Java, Jenkins allows developers to build, test, and deploy their applications efficiently. It operates within servlet containers like Apache Tomcat and supports various version control tools such as Git, Subversion, and Mercurial",
        link: "https://www.jenkins.io/",
        position_index: 25,
        costcodes: `VZ | NS | Security Vulnerabilities (B/VZN/042) | <a href="mailto:mahendrareddy.k@prodapt.com" class="project-head-email">mahendrareddy.k@prodapt.com</a><br>TES Global B2C (B/TEM/001) | <a href="mailto:sriharicherur.k@prodapt.com" class="project-head-email">sriharicherur.k@prodapt.com</a><br>CF - Development Squad (B/CFL/008) | <a href="mailto:neha.gupta@prodapt.com" class="project-head-email">neha.gupta@prodapt.com</a>`
      },
      {
        symbol: "OS",
        subtitle: "OpenShift",
        group: "cicdtools",
        desc: "OpenShift is a containerization platform developed by Red Hat that simplifies the deployment and management of containerized applications. It leverages Kubernetes as its underlying orchestration platform, enabling automated deployment, scaling, and management of applications. OpenShift is designed to facilitate collaboration between development and operations teams, providing tools and workflows that streamline the software development lifecycle.",
        link: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
        position_index: 12,
        costcodes: `VDSI _ Network Capacity Planning _ Type 1 (B/VZN/033) | <a href="mailto:sreenu.c@prodapt.com" class="project-head-email">sreenu.c@prodapt.com</a>`
      },
      {
        symbol: "EIA",
        subtitle: "Evergreen Insta Analyzer",
        group: "codereview",
        desc: "The Evergreen Instance Analyzer (EIA) for ServiceNow is a tool developed by Evergreen Systems to help organizations identify and address poor quality code within their ServiceNow instances. It analyzes code, identifies deviations from best practices, and provides a platform for managing repairs, ultimately leading to improved performance, maintainability, and upgradeability",
        link: "https://servicedesk-marketplace.com/item/evergreen-instance-analyzer/",
        position_index: 13,
        costcodes: `ServiceNow resourcing (B/APF/001) | <a href="mailto:anuj.garg@prodapt.com" class="project-head-email">anuj.garg@prodapt.com</a>`
      },
      {
        symbol: "SP",
        subtitle: "Spinnaker",
        group: "cicdtools",
        desc: "Spinnaker was originally developed by Netflix to address deployment complexities across multiple clouds and microservices architectures. It automates the delivery process through customizable pipelines, allowing organizations to deploy applications and infrastructure changes with confidence and minimal manual effort.",
        link: "https://www.spinnaker.io/",
        position_index: 14,
        costcodes: `BT Network Subcon ITT - Lot A (B/BTO/034) | <a href="mailto:venkataraghavan.pk@prodapt.com" class="project-head-email">venkataraghavan.pk@prodapt.com</a>`
      },
      {
        symbol: "CY",
        subtitle: "Cypress",
        group: "testingtool",
        desc: "Cypress is a next-generation front-end testing tool built for the modern web, offering real browser testing capabilities with powerful debugging features. It provides automatic waiting, time-travel debugging, network traffic control, and real-time reloads during test development. Cypress excels in end-to-end testing, integration testing, and unit testing with its unique architecture that runs in the same run-loop as your application. The tool features an intuitive test runner, comprehensive screenshots and videos, and exceptional developer experience with fast execution and detailed error messages.",
        link: "https://www.cypress.io/",
        position_index: 15,
        costcodes: `MPESA One Operations (B/MPS/007) | <a href="mailto:mohan.g@prodapt.com" class="project-head-email">mohan.g@prodapt.com</a>`
      },
      {
        symbol: "ZP",
        subtitle: "Zephyr",
        group: "testingtool",
        desc: "Zephyr is a suite of test management tools developed by SmartBear, designed to help manage the entire software testing lifecycle. It offers functionalities for organizing and automating testing processes, improving efficiency and quality in software delivery. Zephyr is also integrated with Jira, allowing teams to manage test cases, executions, and reporting within the familiar Jira interface.",
        link: "https://www.getzephyr.com/",
        position_index: 19,
        costcodes: `Brightspeed EOM and Support (B/BRS/002) | <a href="mailto:maniannagasubra.s@prodapt.com" class="project-head-email">maniannagasubra.s@prodapt.com</a>`
      },
      {
        symbol: "PL",
        subtitle: "ProjectLibre",
        group: "pmtools",
        desc: "ProjectLibre is a project management software company with both a free open-source desktop and a Cloud AI version. ProjectLibre Cloud is a team and Artificial Intelligence solution. ProjectLibre desktop is a free and open-source project management software system intended ultimately as a standalone replacement for Microsoft Project.",
        link: "https://www.projectlibre.com/",
        position_index: 20,
        costcodes: `Matrix- Charging Migration (B/TLS/021) | <a href="mailto:saurabh.kashyap@prodapt.com" class="project-head-email">saurabh.kashyap@prodapt.com</a>`
      },
      {
        symbol: "APMD",
        subtitle: "Apex PMD",
        group: "codereview",
        desc: "Apex PMD is a specialized static code analysis tool specifically designed for Salesforce Apex programming language, extending the capabilities of the widely-used PMD framework. It performs comprehensive code quality checks, identifies potential bugs, security vulnerabilities, and maintainability issues in Apex code. The tool enforces coding standards, detects code smells, unused variables, complex methods, and potential performance bottlenecks. Apex PMD integrates seamlessly with Salesforce development workflows, CI/CD pipelines, and popular IDEs, helping developers maintain high-quality, secure, and performant Salesforce applications while adhering to platform best practices.",
        link: "https://pmd.github.io/",
        position_index: 21,
        costcodes: `Cenam SF Implementation (B/CNM/001) | <a href="mailto:vamsikrishna.av@prodapt.com" class="project-head-email">vamsikrishna.av@prodapt.com</a><br>TDS SF Implementation (B/TDS/001) | <a href="mailto:tom.hoch@prodapt.com" class="project-head-email">tom.hoch@prodapt.com</a>`
      },
      {
        symbol: "PT",
        subtitle: "Pytest",
        group: "unittesting",
        desc: "Pytest is an open-source testing framework that has redefined simplicity and efficiency in Python testing, becoming the gold standard for Python test automation across industries. Its popularity stems from its ability to support everything from simple unit tests to complex functional testing scenarios with minimal boilerplate code. What sets Pytest apart is its intuitive and minimalistic syntax that leverages Python's native assert statement, making test cases highly readable and maintainable for developers of all skill levels. The framework offers powerful features including fixtures for test setup and teardown, parameterized testing for data-driven scenarios, plugin architecture for extensibility, and advanced test discovery mechanisms. Pytest integrates seamlessly with CI/CD pipelines, IDEs, and popular tools like coverage.py, making it an essential component of modern Python development workflows focused on quality and reliability.",
        link: "https://pytest.org/",
        position_index: 22,
        costcodes: `LMN DC platform assist (B/CTL/078) | <a href="mailto:madanmohan.d@prodapt.com" class="project-head-email">madanmohan.d@prodapt.com</a>`
      },
      {
        symbol: "PM",
        subtitle: "Postman",
        group: "testingtool",
        desc: "Postman is a comprehensive API development and testing platform that revolutionizes how developers work with APIs throughout the entire development lifecycle. It provides intuitive interfaces for designing, testing, documenting, and monitoring APIs with features like automated testing, mock servers, and collaborative workspaces. Postman supports various authentication methods, environment variables, pre-request scripts, and post-response tests, enabling complex API workflows and comprehensive test automation. The platform facilitates team collaboration through shared collections, version control, and detailed API documentation generation, making it an essential tool for modern API-driven development.",
        link: "https://www.postman.com/",
        position_index: 23,
        costcodes: `VMIE L3 Local (B/LGI/121) | <a href="mailto:mohammed.fi@prodapt.com" class="project-head-email">mohammed.fi@prodapt.com</a><br>MPESA One Operations (B/MPS/007) | <a href="mailto:mohan.g@prodapt.com" class="project-head-email">mohan.g@prodapt.com</a>`
      },
      {
        symbol: "ADO",
        subtitle: "ADO Pipeline",
        group: "cicdtools",
        desc: "An ADO (Azure DevOps) Pipeline is a feature of Azure DevOps that automates the processes of building, testing, and deploying code. It integrates Continuous Integration (CI) and Continuous Delivery (CD) practices to ensure that code changes are consistently built, tested, and delivered to various environments or production systems.",
        link: "https://azure.microsoft.com/en-us/products/devops/pipelines",
        position_index: 35,
        costcodes: `MVNx Onboarding Automation MVP 1 (B/ATT/054) | <a href="mailto:pradeshkumar.v@prodapt.com" class="project-head-email">pradeshkumar.v@prodapt.com</a><br>BOTPRESS development (B/WIN/088) | <a href="mailto:sujith.g@prodapt.com" class="project-head-email">sujith.g@prodapt.com</a>`
      },
      {
        symbol: "SN",
        subtitle: "Snowflake CI/CD",
        group: "cicdtools",
        desc: "Snowflake is a cloud-based data warehousing platform known for its scalability and flexibility. It separates storage and compute resources, enabling independent scaling and cost optimization. With a focus on ease of use, it facilitates secure data sharing and collaboration between organizations. Snowflake's cloud-native architecture leverages the benefits of providers like AWS, Azure, and Google Cloud.",
        link: "https://www.snowflake.com/",
        position_index: 11,
        costcodes: `CF_PJMMLTeam_FY24 (B/CFL/020) | <a href="mailto:mahesh.g@prodapt.com" class="project-head-email">mahesh.g@prodapt.com</a>`
      },
      {
        symbol: "AS",
        subtitle: "IBM AppScan",
        group: "codereview",
        desc: "IBM AppScan is a comprehensive application security testing solution that provides enterprise-grade static and dynamic analysis capabilities for identifying vulnerabilities across the software development lifecycle. It offers advanced features including SAST (Static Application Security Testing), DAST (Dynamic Application Security Testing), and IAST (Interactive Application Security Testing) to detect security flaws, compliance violations, and potential attack vectors. AppScan integrates seamlessly with DevOps pipelines, supports multiple programming languages and frameworks, and provides detailed remediation guidance with risk prioritization, making it essential for maintaining secure applications in enterprise environments.",
        link: "https://www.ibm.com/security/application-security/appscan",
        position_index: 26,
        costcodes: ``
      },
      {
        symbol: "AR",
        subtitle: "Argo CD",
        group: "cicdtools",
        desc: "Argo CD is a declarative continuous delivery tool designed for Kubernetes. It follows the GitOps pattern, which uses Git repositories as the single source of truth for defining the desired state of applications and infrastructure. This approach ensures that the desired state is versioned, expressed declaratively, and automatically pulled from the Git repository.",
        link: "https://argo-cd.readthedocs.io/",
        position_index: 27,
        costcodes: `Shentel - Network Assurance (B/STL/005) | <a href="mailto:arunbabu.j@prodapt.com" class="project-head-email">arunbabu.j@prodapt.com</a>`
      },
      {
        symbol: "AWS",
        subtitle: "AWS CI/CD",
        group: "cicdtools",
        desc: "Continuous Integration (CI) and Continuous Delivery (CD) are essential practices in modern software development, enabling teams to deliver applications and services at high velocity. AWS provides a comprehensive suite of tools to implement CI/CD pipelines, automating the build, test, and deployment processes.",
        link: "https://aws.amazon.com/devops/continuous-delivery/",
        position_index: 29,
        costcodes: `Rogers-Comcast RFP-OSS Managed Services (B/ROC/037) | <a href="mailto:santhosh.poobathy@prodapt.com" class="project-head-email">santhosh.poobathy@prodapt.com</a><br>Circles: Wireless Customer Migration (B/CIR/001) | <a href="mailto:jagadeesan.s@prodapt.com" class="project-head-email">jagadeesan.s@prodapt.com</a><br>LLA - Customer Care Ops (B/CWC/069) | <a href="mailto:debabrata.b@prodapt.com" class="project-head-email">debabrata.b@prodapt.com</a>`
      },
      {
        symbol: "SE",
        subtitle: "Selenium",
        group: "testingtool",
        desc: "Selenium is the industry-standard open-source automation framework for web application testing, providing a comprehensive suite of tools for automated browser testing across multiple platforms and browsers. It supports various programming languages including Java, Python, C#, Ruby, and JavaScript, enabling teams to write robust test scripts using their preferred language. Selenium WebDriver offers sophisticated element location strategies, advanced user interaction simulation, and parallel execution capabilities. The framework excels in cross-browser compatibility testing, regression testing, and continuous integration workflows, making it the go-to solution for enterprise-level web application quality assurance.",
        link: "https://www.selenium.dev/",
        position_index: 21,
        costcodes: `GCX IT Transformation - Phase 1 (B/GCX/003) | <a href="mailto:narayanan.k@prodapt.com" class="project-head-email">narayanan.k@prodapt.com</a><br>VDSI _ Network Capacity Planning _ Type 1 (B/VZN/033) | <a href="mailto:sreenu.c@prodapt.com" class="project-head-email">sreenu.c@prodapt.com</a><br>Rogers - Proximus - Q1FY26 (B/ROC/036) | <a href="mailto:santhosh.poobathy@prodapt.com" class="project-head-email">santhosh.poobathy@prodapt.com</a>`
      },
      {
        symbol: "SFDX",
        subtitle: "Salesforce Developer Experience",
        group: "cicdtools",
        desc: "Salesforce Developer Experience (SFDX) is a comprehensive suite of tools and features designed to revolutionize and enhance the development process on the Salesforce platform, catering to both pro-code developers and low-code administrators. SFDX enables modern, source-driven development workflows through scratch orgs, version control integration, and modular development practices that align with industry standards. The platform provides powerful CLI tools, VS Code extensions, and APIs that facilitate efficient development, testing, and deployment processes. Key features include org development models, package development, automated testing frameworks, and seamless CI/CD integration capabilities. SFDX supports advanced DevOps practices through features like environment management, change tracking, automated deployments, and comprehensive monitoring tools, making it essential for enterprise Salesforce development teams focused on scalability, maintainability, and rapid delivery cycles.",
        link: "https://developer.salesforce.com/tools/sfdxcli",
        position_index: 30,
        costcodes: `CENAM SF Implementation (B/CNM/001) | <a href="mailto:vamsikrishna.av@prodapt.com" class="project-head-email">vamsikrishna.av@prodapt.com</a>`
      },
      {
        symbol: "PYL",
        subtitle: "Pylint",
        group: "codereview",
        desc: "Pylint is a comprehensive static code analyzer for Python that performs deep analysis of Python code to check for errors, enforce coding standards, identify code smells, and provide intelligent suggestions for code refactoring and improvement. As one of the most widely adopted Python code quality tools, Pylint examines code structure, variable usage, import statements, and adherence to PEP 8 style guidelines while detecting potential bugs and security vulnerabilities. The tool is highly configurable through custom configuration files, allowing teams to tailor rules and standards to their specific requirements and coding conventions.",
        link: "https://pylint.pycqa.org/",
        position_index: 31,
        costcodes: `Frontier BP Development (B/FTR/001) | <a href="mailto:suchitra.bc@prodapt.com" class="project-head-email">suchitra.bc@prodapt.com</a><br>LMN - GenAI for IVR (B/CTL/076) | <a href="mailto:elamparithy.g@prodapt.com" class="project-head-email">elamparithy.g@prodapt.com</a>`
      },
      {
        symbol: "VS",
        subtitle: "Visual Studio Code + Copilot",
        group: "codereview",
        desc: "Visual Studio Code (VS Code) is a free, lightweight yet powerful source code editor developed by Microsoft, featuring extensive customization through extensions, integrated terminal, and advanced debugging capabilities. When combined with GitHub Copilot, it becomes an AI-powered development environment that provides intelligent code suggestions, auto-completion, and contextual code generation. This powerful combination enhances developer productivity through features like IntelliSense, Git integration, syntax highlighting for hundreds of languages, and real-time collaboration tools, making it the preferred choice for developers across different technologies and project scales.",
        link: "https://code.visualstudio.com/",
        position_index: 24,
        costcodes: `WIN IT - MIRROR Decomm (B/WIN/114) | <a href="mailto:sujith.g@prodapt.com" class="project-head-email">sujith.g@prodapt.com</a>`
      },
      {
        symbol: "ATF",
        subtitle: "ATF",
        group: "testingtool",
        desc: "ServiceNow Automated Test Framework (ATF) is a comprehensive built-in testing solution that enables automated testing of ServiceNow applications, customizations, and configurations without requiring extensive coding knowledge. ATF provides a user-friendly interface for creating, managing, and executing test suites that validate forms, workflows, business rules, client scripts, and integrations. The framework supports data-driven testing, test scheduling, parallel execution, and detailed reporting with screenshots and logs. ATF integrates seamlessly with ServiceNow's development lifecycle, enabling continuous testing and quality assurance for platform customizations and applications.",
        link: "https://developer.servicenow.com/",
        position_index: 33,
        costcodes: `VMIE ServiceNow Implementation (B/LGI/117) | <a href="mailto:deepak.j@prodapt.com" class="project-head-email">deepak.j@prodapt.com</a><br>ServiceNow Integration (B/STL/002) | <a href="mailto:sathiyanarayanan.m@prodapt.com" class="project-head-email">sathiyanarayanan.m@prodapt.com</a><br>HyperOptic OSS Transformation (B/HPO/001) | <a href="mailto:sandeepkumar.a@prodapt.com" class="project-head-email">sandeepkumar.a@prodapt.com</a>`
      },
      {
        symbol: "GL",
        subtitle: "GitLab",
        group: "cicdtools",
        desc: "GitLab is a comprehensive DevOps platform that integrates various tools and functionalities to streamline the software development lifecycle. It is not just a Git repository manager but a complete solution that includes version control, issue tracking, continuous integration/continuous deployment (CI/CD), and collaboration tools.",
        link: "https://about.gitlab.com/",
        position_index: 8,
        costcodes: `Centric SF (B/CIG/001) | <a href="mailto:girish.vn@prodapt.com" class="project-head-email">girish.vn@prodapt.com</a><br>TierPoint Managed Services (B/TRP/003) | <a href="mailto:madanmohan.d@prodapt.com" class="project-head-email">madanmohan.d@prodapt.com</a><br>CENAM SF Implementation (B/CNM/001) | <a href="mailto:vamsikrishna.av@prodapt.com" class="project-head-email">vamsikrishna.av@prodapt.com</a>`
      },
      {
        symbol: "AN",
        subtitle: "Ansible",
        group: "cicdtools",
        desc: "Ansible is an open-source IT automation tool that simplifies the management of applications, systems, and infrastructure. It is designed to automate tasks such as application deployment, cloud provisioning, and intra-service orchestration. Ansible is known for its simplicity, ease of use, and agentless architecture, which means it does not require any software to be installed on the managed nodes.",
        link: "https://www.ansible.com/",
        position_index: 24,
        costcodes: ``
      },
      {
        symbol: "CM", 
        subtitle: "CheckMarx",
        group: "codereview",
        desc: "CheckMarx is a leading Static Application Security Testing (SAST) solution that identifies security vulnerabilities, compliance issues, and quality flaws in source code during the development lifecycle. It supports over 25 programming languages and frameworks, integrates seamlessly with popular IDEs, and provides detailed remediation guidance. CheckMarx enables organizations to shift security left by catching vulnerabilities early in the development process, reducing the cost and risk of security incidents in production applications.",
        link: "https://checkmarx.com",
        position_index: 36,
        costcodes: `Brightspeed EOM Support (B/BRS/002) | <a href="mailto:maniannagasubra.s@prodapt.com" class="project-head-email">maniannagasubra.s@prodapt.com</a>`
      },
      {
        symbol: "CP",
        subtitle: "Copado",
        group: "cicdtools",
        desc: "Copado is a powerful DevOps platform designed specifically for the Salesforce ecosystem. It provides an end-to-end solution that helps organizations manage the entire development lifecycle, enabling them to adopt agile methodologies and automate their release processes. Key features include automated deployment, version control, and integrated testing, making it a leading choice for low-code SaaS platforms.",
        link: "https://www.copado.com/",
        position_index: 16,
        costcodes: `LLA - Peacock (B/CWC/051) | <a href="mailto:harishkumar.p@prodapt.com" class="project-head-email">harishkumar.p@prodapt.com</a><br>TDS SF Implementation (B/TDS/001) | <a href="mailto:tom.hoch@prodapt.com" class="project-head-email">tom.hoch@prodapt.com</a>`
      },
      {
        symbol: "TMF",
        subtitle: "TMF API",
        group: "cicdtools",
        desc: "The TM Forum Open APIs (TMF APIs) are a set of standardized interfaces designed to enable seamless integration and interoperability within the telecommunications industry. These APIs are developed under the Apache 2.0 license and are widely adopted by Communication Service Providers (CSPs) and software vendors to accelerate digital transformation and innovation.",
        link: "https://www.tmforum.org/",
        position_index: 39,
        costcodes: `ServiceNow-Integration (B/STL/002) | <a href="mailto:sathiyanarayanan.m@prodapt.com" class="project-head-email">sathiyanarayanan.m@prodapt.com</a>`
      },
      {
        symbol: "JU",
        subtitle: "JUnit",
        group: "unittesting",
        desc: "JUnit is the de facto standard unit testing framework for Java applications, providing a comprehensive foundation for test-driven development and behavior-driven development practices. It offers powerful features including parameterized tests, test suites, test runners, and extensive assertion libraries for validating expected behavior. JUnit supports annotations for test lifecycle management, test categorization, and conditional test execution. The framework integrates seamlessly with build tools like Maven and Gradle, IDEs, and continuous integration pipelines, enabling automated testing workflows. JUnit's modular architecture and extensibility make it essential for maintaining code quality and reliability in Java enterprise applications.",
        link: "https://junit.org/",
        position_index: 20,
        costcodes: `MVNx Onboarding Automation MVP 1 (B/ATT/054) | <a href="mailto:pradeshkumar.v@prodapt.com" class="project-head-email">pradeshkumar.v@prodapt.com</a><br>BT Network Subcon ITT - Lot A (B/BTO/034) | <a href="mailto:venkataraghavan.pk@prodapt.com" class="project-head-email">venkataraghavan.pk@prodapt.com</a><br>Gamma Labs UK Legacy BSS Stack Transformation(B/GMA/001) | <a href="mailto:manohar.mp@prodapt.com" class="project-head-email">manohar.mp@prodapt.com</a>`
      },
      {
        symbol: "SL",
        subtitle: "SonarLint",
        group: "codereview",
        desc: "SonarLint is an intelligent IDE extension that provides real-time static code analysis and quality feedback directly within your development environment. It detects bugs, security vulnerabilities, code smells, and maintainability issues as you write code, offering instant suggestions for improvements. SonarLint supports over 25 programming languages and integrates seamlessly with popular IDEs including Visual Studio Code, IntelliJ IDEA, Eclipse, and Visual Studio. The tool can be connected to SonarQube or SonarCloud for synchronized rule sets and quality gates, enabling consistent code quality standards across development teams and projects.",
        link: "https://www.sonarlint.org/",
        position_index: 19,
        costcodes: `BT Network Subcon ITT - Lot A (B/BTO/034) | <a href="mailto:venkataraghavan.pk@prodapt.com" class="project-head-email">venkataraghavan.pk@prodapt.com</a><br>Windstream Kinetic  overbuild (B/WIN/110) | <a href="mailto:sujith.g@prodapt.com" class="project-head-email">sujith.g@prodapt.com</a>`
      },
      {
        symbol: "BB",
        subtitle: "Bitbucket",
        group: "cicdtools",
        desc: "Bitbucket is a comprehensive Git-based code hosting and collaboration platform designed to empower development teams with robust tools for managing their complete software development lifecycle. Developed by Atlassian, it provides advanced source code management capabilities, seamless continuous integration and continuous delivery (CI/CD) pipelines, and powerful team collaboration features that integrate deeply with the broader Atlassian ecosystem. The platform supports both cloud-based and self-hosted deployment options, catering to diverse organizational needs and security requirements. Bitbucket offers sophisticated features including branch permissions, pull request workflows, inline code commenting, automated testing integration, and deployment management across multiple environments. Its tight integration with Jira for issue tracking and Confluence for documentation creates a unified development workflow that enhances productivity and maintains project visibility across teams.",
        link: "https://bitbucket.org/",
        position_index: 35,
        costcodes: `IT Transformation - Phase 1 (B/GCX/003) | <a href="mailto:narayanan.k@prodapt.com" class="project-head-email">narayanan.k@prodapt.com</a>`
      },
      {
        symbol: "TF",
        subtitle: "Terraform Automation Scripts",
        group: "codereview",
        desc: "Terraform is a powerful Infrastructure as Code (IaC) tool that enables declarative infrastructure management across multiple cloud providers and on-premises environments. These automation scripts provide pre-built modules and configurations for the VMIE Platform build, enabling consistent, version-controlled infrastructure deployment and management. Terraform's state management, dependency resolution, and plan-apply workflow ensure reliable infrastructure changes while reducing manual errors. The scripts support automated provisioning, scaling, and maintenance of cloud resources, making infrastructure deployment repeatable, auditable, and aligned with DevOps best practices for enterprise-scale implementations.",
        link: "https://terraform.io",
        position_index: 25,
        costcodes: `VMIE Platform build (B/LGI/116) | <a href="mailto:roshan.mehaboob@prodapt.com" class="project-head-email">roshan.mehaboob@prodapt.com</a>`
      },
      {
        symbol: "FC",
        subtitle: "Flosum Composer",
        group: "cicdtools",
        desc: "Flosum Composer is a comprehensive native Salesforce DevOps solution that provides end-to-end release management capabilities within the Salesforce ecosystem. Built 100% on the Salesforce platform, it offers advanced features including automated deployment pipelines, version control, change tracking, and release orchestration. Flosum Composer enables teams to manage complex Salesforce metadata deployments with confidence through features like automated rollbacks, environment management, and comprehensive audit trails. The platform supports both point-and-click and advanced deployment strategies, making it suitable for organizations of all sizes seeking to implement robust Salesforce DevOps practices.",
        link: "https://www.flosum.com",
        position_index: 43,
        costcodes: `Quantum Fiber - Phase 1 (B/CTL/064) | <a href="mailto:elamparithy.g@prodapt.com" class="project-head-email">elamparithy.g@prodapt.com</a>`
      }
    ];

    const staticGroups = [
      { group: 'pmtools', label: 'PM Tools', color: '#ffe066' },
      { group: 'codereview', label: 'Code Review', color: '#74c0fc' },
      { group: 'unittesting', label: 'Unit Testing', color: '#ff8787' },
      { group: 'testingtool', label: 'Testing Tools', color: '#63e6be' },
      { group: 'cicdtools', label: 'CI/CD Tools', color: '#b197fc' }
    ];
    
    // Set the data after a short delay to simulate loading
    setTimeout(() => {
      setElements(staticElements);
      setGroups(staticGroups);
      setLoading(false);
      console.log('✅ Static data loaded successfully');
    }, 500);
  }, []);

  const openModal = (element) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedElement(null);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="App">
        <h1 className="main-title">Periodic Table - Tools Landscape</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading periodic table...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Legend */}
      <Legend groups={groups} />
      
      {/* Main Title */}
      <h1 className="main-title">Periodic Table - Tools Landscape</h1>
      
      {/* Periodic Table Grid */}
      <PeriodicGrid 
        elements={elements} 
        groups={groups} 
        searchQuery={searchQuery} 
        onElementClick={openModal} 
      />
      
      {/* Element Details Modal */}
      {isModalOpen && (
        <Modal 
          element={selectedElement} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;
