module.exports = [
"[project]/GitHub/portfolio2026/src/app/favicon.ico.mjs { IMAGE => \"[project]/GitHub/portfolio2026/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/GitHub/portfolio2026/src/app/favicon.ico.mjs { IMAGE => \"[project]/GitHub/portfolio2026/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/GitHub/portfolio2026/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/GitHub/portfolio2026/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/GitHub/portfolio2026/src/data/case-studies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CASE_STUDY_SLUGS",
    ()=>CASE_STUDY_SLUGS,
    "getCaseStudy",
    ()=>getCaseStudy,
    "getSelectedWork",
    ()=>getSelectedWork
]);
const CASE_STUDIES = {
    clay: {
        slug: "clay",
        hero: {
            title: "Clay Home",
            subtitle: "Creating a home base for a programming and schematic design application",
            description: "The Clay app was developed to streamline collaborative office renovation projects for Google, integrating various disparate applications into a cohesive platform. By establishing intuitive navigation, robust search functionality, and version control capabilities inspired by Google Drive, the home feature provides a seamless experience for Project Executives, Analysts, architects, and interior designers."
        },
        meta: {
            role: "Product Designer",
            client: "Google REWS",
            employer: "Outer Labs",
            areas: "Design, Discovery, Strategy"
        },
        cardImage: "/images/clay_initial.png",
        themeColor: "#94a3b8",
        sections: [
            {
                image: "/images/clay_combined.png",
                caption: "Multiple apps that are being combined into Clay",
                title: "Background",
                body: "Clay is a tool developed for Google allowing Project Executives to more easily plan and develop office renovation projects in-house, and then seamlessly hand-off to their external design teams. As a sort in between spreadsheets and the drawing board of CAD or Revit, there are multiple stages a project can move through, and multiple types of studies a user can create for a project. Clay home is where a user can find metadata about these studies and access their desired work. Clay is an amalgamation of a series of previously disparate applications that are all accomplishing similar work in parallel. Clay is intended to help a variety of users (Project Executives, Project Analysts, architects, interior designers, etc) streamline their collaborative process together."
            },
            {
                image: "/images/clay_home.gif",
                caption: "Boundaries between services, tools, and users",
                title: "Initial discovery",
                body: "The first step for the team was to understand the underlying structure and connections between different studies, and establish boundaries between them. Some of the app structure is based off of pre-existing work, and some new, so there was a lot of discovery involved in how a user should move through the different Clay experiences. I worked very closely with product and engineering in this exploration process."
            },
            {
                image: "/images/clay_project.png",
                caption: "Project page with all of its studies shown.",
                title: "Approach",
                body: "The primary goals for this design was to provide an intuitive platform where new users could easily understand how and what they could access, and existing users could quickly find where they left off. As we got further into understanding the boundaries between different states within Clay, it became clear that Google Drive would be a very helpful precedent. Like Drive, Clay has a variety of types of work a user can accomplish. Unlike Drive, the different \"files\" are interlinked and interdependent."
            },
            {
                image: "/images/clay_study.png",
                caption: "Study details side panel with metadata",
                title: "App structure",
                body: "As the first designer specifically on Clay, I worked to bring together the work that other designers were working on previously disconnected applications. We developed a language of Projects and Studies to organize the work, and establish boundaries between different aspects of the programming, designing, and financial planning."
            },
            {
                image: "/images/clay_search.png",
                caption: "Searching for resources (study, user, project)",
                title: "Search",
                body: "In addition to simple navigation, the search feature is a valuable tool that allows a user to quickly find what they want to work with by searching based on a variety of parameters. Including some visual cues about metadata for search results also allows a user to more quickly key in on their desired study or project."
            },
            {
                image: "/images/clay_versioning.gif",
                caption: "Versioning flow both in the home screen and in the tool",
                title: "Versioning",
                body: "Allowing users to see work progress and go back in time if needed gives users confidence to make changes and test different ideas. Again, I heavily referred to Google Drive (especially Docs) as a driving model. Users can flip back through to quickly see changes, and have an indication of where changes were made."
            }
        ]
    },
    lighthouse: {
        slug: "lighthouse",
        hero: {
            title: "Lighthouse",
            subtitle: "Enhancing real estate demand modeling for Google's global office portfolio",
            description: "Lighthouse is a web-based application designed to model all of Google's global office space 10 years into the future. Built to meet the needs of real estate planners and analysts at Google Real Estate and Workplace Services (REWS), it transitions their workflows from a spreadsheet-based system to a more robust and user-friendly web-based platform. The result? Lighthouse enabled 50% faster report generation for the planners and forecasters."
        },
        meta: {
            role: "Product Designer",
            client: "Google",
            employer: "Outer Labs",
            areas: "Design, Strategy"
        },
        cardImage: "/images/lh_initial.png",
        themeColor: "#64748b",
        sections: [
            {
                image: "/images/lh_vid.gif",
                caption: "Lighthouse application demonstration",
                title: "Overview",
                body: "Lighthouse is a web-based application designed to model all of Google's global office space 10 years into the future. Built to meet the needs of real estate planners and analysts at Google Real Estate and Workplace Services (REWS), it transitions their workflows from a spreadsheet-based system to a more robust and user-friendly web-based platform. The result? Lighthouse enabled 50% faster report generation for the planners and forecasters, transforming how Google manages hundreds of millions of square feet of office space worldwide."
            },
            {
                image: "/images/lh_TPP.png",
                caption: "Existing tool that Google planners use (Sheets)",
                title: "Background (Spreadsheet mania)",
                body: "Currently Google models their hundreds of millions of square feet of global office space and millions of employees in a collection of Google Sheets files. The global group of planners who are modeling supply and demand scenarios to study long-term requirements of office space needed a more streamlined, consistent, and fast approach. Pain points included: infinitely configurable (no guardrails), lack of automation (tedious, manual process), no data hierarchy and minimal organization, and no filtering available."
            },
            {
                image: "/images/lh_view.png",
                caption: "Side panel allowing users to quickly show & hide relevant data",
                title: "Approach",
                body: "With two primary goals—streamlining modeling processes and improving data visualization—I took the following approach: Mapped Existing Pain Points by conducting user research with Google planners to understand the workflow and prioritize solutions. Simplified Operations by designing a logical set of operations to enable consistent forecasting and scenario modeling. Crafted Visual Hierarchy & Feedback so interfaces highlighted data relationships, recent changes, and high-level insights at a glance."
            },
            {
                image: "/images/lh_dataheirarchy.png",
                caption: "Clear data hierarchy",
                title: "Clear data hierarchy",
                body: "Organized structure for complex planning data."
            },
            {
                image: "/images/lh_filtering.png",
                caption: "Global and local filtering",
                title: "Global & local filtering",
                body: "Flexible filtering and sorting at multiple levels."
            },
            {
                image: "/images/lh_logic.png",
                caption: "Simple customization logic",
                title: "Simple & powerful logic",
                body: "Intuitive customization without complexity."
            },
            {
                image: "/images/lh_visualcues.png",
                caption: "Visual cues for customizations",
                title: "Visual cues",
                body: "Clear indicators for customizations and changes."
            },
            {
                image: "/images/lh_designsystem.png",
                caption: "Design system components",
                title: "Design system",
                body: "I was working within the Google Material design system, with a specific UI overlay on top of the default Material 2 library for REWS products. This system was not fully fleshed out, so throughout the course of development I had to create and manage some additional components. Because of very tight build timelines, all of the components used had to be rigorously consistent with what is available in the existing Angular and React libraries."
            },
            {
                image: "/images/lh_initial.png",
                caption: "Prototype showing a user making a forecast growth modification",
                title: "Impact & results",
                body: "The Lighthouse application introduced several significant improvements: Automated Calculations—blended sharing ratios are now automatically calculated, saving planners up to 50% of their time preparing reports. Enhanced Data Visibility—a toggle feature allows users to easily switch views. Rule-Based Adjustment—users can apply rule-based calculations across multiple periods. Consistent UI Across Regions—a standardized UI improves usability. Upstream Data Integration—direct integration with upstream data sources eliminates manual linking."
            }
        ]
    },
    acelab: {
        slug: "acelab",
        hero: {
            title: "Acelab",
            subtitle: "Revamping Acelab's navigation: a UX overhaul",
            description: "A comprehensive redesign of Acelab's navigation system to address usability issues and improve the overall user experience. The project focused on creating an intuitive navigation structure that would better serve architects and designers using the platform, resulting in 70% reduction in dead-end clicks and significantly improved user satisfaction."
        },
        meta: {
            role: "UX Designer",
            employer: "Acelab",
            areas: "UX/UI, Navigation, Research"
        },
        cardImage: "/images/acelab_navigation/projectSelection_Notification.png",
        themeColor: "#475569",
        sections: [
            {
                image: "/images/acelab_navigation/previous_navigation.png",
                caption: "Shows the original, fragmented navigation issues",
                title: "Identifying the problem",
                body: "Through a comprehensive platform audit and user feedback, we uncovered several critical issues with Acelab's navigation system: Inconsistent navigation patterns across different sections of the platform; accessibility issues that made features difficult to find, even for internal teams; fragmented growth of navigation elements over time; unintuitive movement across the platform."
            },
            {
                image: "/images/acelab_navigation/ui_options.png",
                caption: "UI exploration for different navigation layouts",
                title: "Defining the solution",
                body: "After mapping out the navigation issues, I advocated for a complete overhaul and proposed three potential concepts: Top Navigation Only (simple but limited space), Left Navigation Only (more scalable but required significant structural changes), Combined Left & Top Navigation (balanced usability and familiarity—final choice). The final decision was validated through internal workshops and testing with power users."
            },
            {
                image: "/images/acelab_navigation/lofi_topNav.png",
                caption: "Top Navigation Only concept",
                title: "Navigation concepts",
                body: "Three concepts were explored: top nav only, left nav only, and combined left and top navigation."
            },
            {
                image: "/images/acelab_navigation/home_prototype.png",
                caption: "Testing navigation within the updated home experience",
                title: "Iterating & Refining",
                body: "As the UI redesign progressed alongside navigation changes, we discovered through user testing that internal team preferences differed significantly from those of real users (architects and designers). This insight led us to pivot our approach to better align with actual user needs rather than internal assumptions. We conducted additional testing with target users to ensure our solution would address their specific pain points and workflows."
            },
            {
                image: "/images/acelab_navigation/sidePanel.png",
                caption: "Showcases the collapsible side navigation solution",
                title: "Overcoming constraints",
                body: "A full platform redesign was infeasible due to time and resource constraints. Instead, we collaborated closely with the engineering team to integrate the new navigation system within the existing screen structures. The solution was to introduce a collapsible left navigation that could be expanded when needed and collapsed to maximize screen real estate. This approach maintained flexibility without requiring a complete overhaul of the entire UI."
            },
            {
                image: "/images/acelab_navigation/projectSelection_Notification.png",
                caption: "Demonstrates the final navigation with project selection and notifications",
                title: "Final outcome & impact",
                body: "The redesigned navigation system delivered several key improvements: Side Navigation with Expanded/Collapsed States—improved accessibility while maintaining screen real estate. Quick Project Selector—enabled faster access to frequently used projects. Updated Notification Panel—enhanced visibility of important updates. 70% Reduction in Dead-End Clicks—significantly reduced user frustration. Overwhelmingly positive feedback from users."
            },
            {
                image: "/images/acelab_navigation/products_prototype.png",
                caption: "Testing how navigation impacts product browsing",
                title: "Key takeaways",
                body: "Research-driven design leads to better user adoption. Balancing ambition with feasibility ensures smoother implementation. Cross-functional collaboration was crucial to delivering an intuitive navigation system that met both user needs and technical requirements."
            }
        ]
    },
    "slab-design-system": {
        slug: "slab-design-system",
        hero: {
            title: "A Slab Design System",
            subtitle: "Building and scaling a design system",
            description: "Increasing design & engineering efficiency and leveling up the visual design at Acelab."
        },
        meta: {
            role: "Product Designer",
            employer: "Acelab",
            areas: "Design System, Component Building"
        },
        cardImage: "/images/slabds_hero.png",
        themeColor: "#71717a",
        sections: [
            {
                image: "/images/slabds_buttons.png",
                caption: "The variety of action buttons currently on the platform",
                title: "Building a robust design system at Acelab",
                body: "When I started at Acelab, the existing design system was minimal—essentially branding guidelines with basic button styles. As the application grew more complex, inconsistencies emerged, even within the limited design system in place. Recognizing the need for a more comprehensive approach, I advocated for the development of a robust design system to address these challenges and promote greater adherence to design standards."
            },
            {
                image: "/images/slabds_options.png",
                caption: "Researching a variety of options",
                title: "Evaluating options for the design system",
                body: "To determine the best path forward, I considered a variety of prebuilt design systems as well as the possibility of developing our own from scratch. My criteria included: Simplicity, Figma Compatibility, and Scalability. After extensive research, I identified that many of the well-known design systems were either too complex for our needs or lacked adaptable Figma files. I ultimately chose to build upon the design system provided by Practical UI."
            },
            {
                image: "/images/slabds_annotation.png",
                caption: "Design token architecture",
                title: "Educating and collaborating with engineering",
                body: "To ensure successful implementation, I started by educating our engineering team about the benefits of a robust design system. Design Tokens: Given our tech stack—Vue, Tailwind, and CSS—I exported Figma variables to JSON and demonstrated their practical use cases. We began rolling out components incrementally, transitioning to the new design system while addressing gaps and ensuring alignment between design and engineering."
            },
            {
                image: "/images/slabds_sidenav.gif",
                caption: "Side navigation component in action",
                title: "Customizing and creating new components",
                body: "Aside from implementing our basic fonts and colors, I also embarked on creating some components that were unique to our platform. For example, making some enhancements to the Side Navigation and adding some additional functionality like dropdowns and selectors."
            },
            {
                image: "/images/slabds_progressmodal.png",
                caption: "Atomic components combined into a Modal",
                title: "Early results and progress",
                body: "While the full implementation of the design system is ongoing, we have already seen significant improvements: Consistency—components across the application are becoming more uniform. Efficiency—communication between design and engineering has become more streamlined. Scalability—the system is equipped to handle our growing application needs with minimal additional effort."
            },
            {
                image: "/images/slabds_progress.png",
                caption: "",
                title: "Reflection",
                body: "The process of establishing a robust design system has been transformative for Acelab. By aligning design and engineering through a shared framework, we are not only improving the quality of our product but also fostering a more collaborative and efficient workflow. This initiative underscores my commitment to creating scalable, user-centered design solutions that drive organizational success."
            }
        ]
    },
    calibrator: {
        slug: "calibrator",
        hero: {
            title: "Calibrator",
            subtitle: "A historical construction costs and comparison tool",
            description: "Designing a comparison feature for a historical construction costs database."
        },
        meta: {
            role: "Product Designer",
            client: "Google GR+D",
            employer: "Outer Labs",
            areas: "Design, Prototyping"
        },
        cardImage: "/images/calibrator_initial.png",
        themeColor: "#78716c",
        sections: [
            {
                image: "/images/calibrator_map.png",
                caption: "Landing screen for Calibrator",
                title: "Background",
                body: "Calibrator is a database tool categorizing all cost data of Google's built projects (the data is still being input from a variety of disparate sources). This feature allowed for direct cost-comparison at a very granular level. Previously projects could only be compared across higher levels of data, but users requested a more fine-grained ability to really get in the weeds."
            },
            {
                image: "/images/calibrator_table.png",
                caption: "Side by side comparison of big buckets of data",
                title: "Challenges of construction cost coding",
                body: "The cost data for construction projects is organized into a series of buckets. Google uses a proprietary system that does not categorize the lowest level items uniformly. This means that users need to compare cost items that may not have a one-to-one relationship. Additionally, at the individual cost item level, users are interested in not just the overall cost of an item but also the cost per unit, and how much each unit costs."
            },
            {
                image: "/images/calibrator_selection.png",
                caption: "Project selection options",
                title: "Selecting projects",
                body: "The first step in a comparison across projects is to help a user select the right project. The list of projects is long, and names of projects are not always helpful in deciphering which one is which. A robust project search feature was de-prioritized for the launch of this feature, so instead I designed a project detail card that allowed a user to see relevant data about the selection that they made."
            },
            {
                image: "/images/calibrator_initial.png",
                caption: "Fine grained data comparison",
                title: "Comparison table",
                body: "The comparison table is relatively straightforward, with the exception of the lowest level items. A card allows for more data to be displayed for each items, without becoming too dense. Users are able to expand and contract categories as well as filter data to find the relevant information."
            }
        ]
    }
};
const CASE_STUDY_SLUGS = [
    "clay",
    "lighthouse",
    "acelab",
    "slab-design-system",
    "calibrator"
];
function getCaseStudy(slug) {
    return CASE_STUDIES[slug] ?? null;
}
function getSelectedWork() {
    return CASE_STUDY_SLUGS.map((slug)=>{
        const study = CASE_STUDIES[slug];
        const clientLine = [
            study.meta.client,
            study.meta.employer
        ].filter(Boolean).join(" / ");
        return {
            slug,
            title: study.hero.title,
            client: clientLine || study.hero.subtitle,
            description: study.hero.description,
            year: "2024",
            scope: study.meta.areas.split(",")[0]?.trim() ?? "Product Design",
            platform: "Web",
            href: `/work/${slug}`,
            image: study.cardImage,
            themeColor: study.themeColor
        };
    });
}
}),
"[project]/GitHub/portfolio2026/src/components/hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Hero({ name, title, location, currentlyAt }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-10 mx-auto flex max-w-[800px] flex-col gap-8 px-6 pb-20 pt-24 sm:px-10 sm:pt-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5 text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-24 text-2xl font-extralight tracking-tight text-zinc-50 sm:text-3xl",
                    style: {
                        fontFamily: "var(--font-crimson)"
                    },
                    children: [
                        "Hello, I'm Kyle Boyd.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-75",
                            children: [
                                "I'm a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "designer"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                                    lineNumber: 18,
                                    columnNumber: 24
                                }, this),
                                " building in product & systems for enterprise solutions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 text-[0.98rem] leading-relaxed text-zinc-300/90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "I'm a product designer based in Denver, Colorado with 10+ years of experience designing complex systems in both the physical and digital realm."
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "I'm currently the lead Designer at CoEnterprise, where I set product direction and strategy as well as build the nuts and bolts of supply chain analytics tools that are used daily by Fortune 500 companies to track their goods and information."
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "I specialize in crafting elegant, user-centric solutions for complex problems. I believe good design can and should make work feel faster and lighter. I thrive in collaborative environments creating systems and processes to work efficiently and effectively as a team."
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/hero.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProjectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProjectCard() from the server but ProjectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/GitHub/portfolio2026/src/components/project-card.tsx <module evaluation>", "ProjectCard");
}),
"[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProjectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProjectCard() from the server but ProjectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/GitHub/portfolio2026/src/components/project-card.tsx", "ProjectCard");
}),
"[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiniProjectCard",
    ()=>MiniProjectCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MiniProjectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MiniProjectCard() from the server but MiniProjectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx <module evaluation>", "MiniProjectCard");
}),
"[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiniProjectCard",
    ()=>MiniProjectCard
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MiniProjectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MiniProjectCard() from the server but MiniProjectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx", "MiniProjectCard");
}),
"[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$mini$2d$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$mini$2d$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$mini$2d$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/GitHub/portfolio2026/src/components/section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Section({ id, title, subtitle, hideTopBorder, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "px-6 py-12 sm:px-10 sm:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[800px] space-y-8 text-zinc-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "space-y-4",
                    children: [
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[0.8rem] font-medium tracking-[0.14em] text-zinc-400",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/section.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[24px] text-zinc-100",
                            style: {
                                fontFamily: "var(--font-crimson)"
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/section.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/section.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/portfolio2026/src/components/section.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/section.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/GitHub/portfolio2026/src/components/site-footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full border-t border-white/5 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-[800px] items-center justify-between px-6 sm:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[0.7rem] text-zinc-400",
                    children: "Made by Kyle Boyd with Cursor"
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/site-footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[0.7rem] text-zinc-400",
                    children: "© 2026"
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/site-footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/portfolio2026/src/components/site-footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/site-footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/GitHub/portfolio2026/src/components/site-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SiteHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "pointer-events-none fixed inset-x-0 top-5 z-40 flex justify-center sm:top-7",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto inline-flex rounded-full bg-gradient-to-tr from-zinc-500/25 via-zinc-500/5 to-zinc-100/35 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.7)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-1 rounded-full bg-black/55 px-1 py-1 text-xs font-medium text-zinc-200 backdrop-blur-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full border border-zinc-500/70 bg-zinc-100/10 px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-50 shadow-[0_0_0_1px_rgba(15,23,42,0.75)] transition hover:bg-zinc-100/16",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white",
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white",
                        children: "Playground"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white",
                        children: "Writing"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/GitHub/portfolio2026/src/components/writing-article.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WritingArticle",
    ()=>WritingArticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function WritingArticle({ date, title, description, href }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: `text-lg font-semibold text-zinc-100 leading-tight ${href ? "transition-colors group-hover:text-zinc-50" : ""}`,
                style: {
                    fontFamily: "var(--font-crimson)"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-400 leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
    const wrapperClassName = `group flex-1 rounded-lg px-4 py-3 transition-colors ${href ? "cursor-pointer" : ""} hover:bg-zinc-900/60`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-8 items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-24 flex-shrink-0 items-center self-stretch text-sm text-zinc-400",
                children: date
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: wrapperClassName,
                children: content
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: wrapperClassName,
                children: content
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/components/writing-article.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/GitHub/portfolio2026/src/data/writing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WRITING_ARTICLES",
    ()=>WRITING_ARTICLES
]);
const WRITING_ARTICLES = [
    {
        date: "Nov 18, 2025",
        title: "You shouldn't become a designer.",
        description: 'A few reasons why being a "designer" in any sense is a terrible idea in 2024.'
    },
    {
        date: "Oct 5, 2025",
        title: "The future of product design",
        description: "Exploring how AI and new technologies are reshaping the role of product designers and the design process."
    },
    {
        date: "Sep 12, 2025",
        title: "Building empathy through design",
        description: "The more we become divided, the more we need to make space to understand one another through thoughtful design."
    }
];
}),
"[project]/GitHub/portfolio2026/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$data$2f$case$2d$studies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/data/case-studies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$mini$2d$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$site$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/site-footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/site-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$writing$2d$article$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/writing-article.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$data$2f$writing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/data/writing.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const PLAYGROUND_PROJECTS = [
    {
        title: "Micro interactions",
        client: "Personal project — Exploring micro interactions and animations.",
        description: "A collection of small interaction experiments and animation prototypes.",
        year: "2024",
        scope: "Interaction",
        platform: "Web",
        themeColor: "#3b82f6"
    },
    {
        title: "Typography experiments",
        client: "Personal project — Playing with typography and layout.",
        description: "Exploring different typographic treatments and layout compositions.",
        year: "2024",
        scope: "Typography",
        platform: "Web",
        themeColor: "#ec4899"
    },
    {
        title: "Color palette generator",
        client: "Personal project — Building tools for designers.",
        description: "A tool for generating and exploring color palettes with accessibility in mind.",
        year: "2024",
        scope: "Tool",
        platform: "Web",
        themeColor: "#f59e0b"
    },
    {
        title: "3D web experiments",
        client: "Personal project — Learning 3D on the web.",
        description: "Experiments with Three.js and WebGL to create immersive web experiences.",
        year: "2024",
        scope: "3D",
        platform: "Web",
        themeColor: "#8b5cf6"
    }
];
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[#080808] text-zinc-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-[-10%] top-[-260px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.32),_transparent_60%)] blur-3xl"
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex min-h-screen max-w-[800px] flex-col pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$site$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hero"], {
                        name: "Your Name",
                        title: "Product Designer",
                        location: "San Francisco, California",
                        currentlyAt: "Your Company"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                        id: "selected-work",
                        title: "Selected works",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-1",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$data$2f$case$2d$studies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectedWork"])().map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectCard"], {
                                    ...project
                                }, project.slug, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                        id: "playground",
                        title: "Playground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 grid-cols-1 md:grid-cols-2",
                            children: PLAYGROUND_PROJECTS.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$mini$2d$project$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MiniProjectCard"], {
                                    ...project
                                }, project.title, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                        id: "writing",
                        title: "Writing",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$data$2f$writing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WRITING_ARTICLES"].map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$writing$2d$article$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WritingArticle"], {
                                    ...article
                                }, article.title, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$site$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteFooter"], {}, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/app/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/GitHub/portfolio2026/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/GitHub/portfolio2026/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__65fbf01e._.js.map