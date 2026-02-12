(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/GitHub/portfolio2026/src/components/project-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Figma image asset for the case study card.
// This is a temporary shared image until per-project artwork is wired up.
const CASE_STUDY_IMAGE = "/case-study-image.png";
function ProjectCard({ title, client, description, year, scope, platform, href, image, themeColor = "#ffa100" }) {
    _s();
    const imageSrc = image ?? CASE_STUDY_IMAGE;
    // Convert hex to RGB for glow effect
    const hexToRgb = (hex)=>{
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
            r: 255,
            g: 161,
            b: 0
        };
    };
    const rgb = hexToRgb(themeColor);
    const outerGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseEnter = ()=>{
        if (outerGlowRef.current) {
            outerGlowRef.current.style.boxShadow = `0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3), 0 0 40px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;
        }
        if (innerGlowRef.current) {
            innerGlowRef.current.style.boxShadow = `0 0 15px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25), 0 0 30px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;
        }
    };
    const handleMouseLeave = ()=>{
        if (outerGlowRef.current) {
            outerGlowRef.current.style.boxShadow = `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`;
        }
        if (innerGlowRef.current) {
            innerGlowRef.current.style.boxShadow = `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`;
        }
    };
    const cardClassName = "group relative flex flex-col gap-5 rounded-[24px] bg-zinc-950/70 p-0 shadow-[0_18px_60px_rgba(0,0,0,0.85)] transition-shadow duration-300 cursor-pointer";
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 text-[0.65rem] font-medium tracking-[0.16em] text-zinc-200/90",
                    children: [
                        scope && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-md bg-zinc-900/70 px-3 py-1",
                            children: scope
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        platform && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-md bg-zinc-900/70 px-3 py-1",
                            children: platform
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-md bg-zinc-900/70 px-3 py-1",
                            children: year
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerGlowRef,
                className: "relative rounded-[18px] bg-zinc-900/60 p-2 border border-white/15 transition-[box-shadow] duration-300",
                style: {
                    boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: innerGlowRef,
                    className: "relative aspect-[2880/1808] rounded-[10px] transition-[box-shadow] duration-300",
                    style: {
                        boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageSrc,
                        alt: title,
                        className: "project-card-image size-full object-cover transition-all duration-300 border border-white/15 rounded-[10px]"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 space-y-2 pt-1 text-zinc-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[24px] font-semibold text-zinc-50",
                        style: {
                            fontFamily: "var(--font-crimson)"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-300/90",
                        children: client
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] text-zinc-300/70",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            ref: cardRef,
            className: cardClassName,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: content
        }, void 0, false, {
            fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: cardClassName,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: content
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/project-card.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "3NEQxbi52ghp7JyrF1DgKyt6jnc=");
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiniProjectCard",
    ()=>MiniProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MiniProjectCard({ title, client, description, year, scope, platform, href, image = "/case-study-image.png", themeColor = "#ffa100" }) {
    _s();
    // Convert hex to RGB for glow effect
    const hexToRgb = (hex)=>{
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
            r: 255,
            g: 161,
            b: 0
        };
    };
    const rgb = hexToRgb(themeColor);
    const outerGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseEnter = ()=>{
        if (outerGlowRef.current) {
            outerGlowRef.current.style.boxShadow = `0 0 15px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3), 0 0 30px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`;
        }
        if (innerGlowRef.current) {
            innerGlowRef.current.style.boxShadow = `0 0 10px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25), 0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`;
        }
    };
    const handleMouseLeave = ()=>{
        if (outerGlowRef.current) {
            outerGlowRef.current.style.boxShadow = `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`;
        }
        if (innerGlowRef.current) {
            innerGlowRef.current.style.boxShadow = `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`;
        }
    };
    const sharedProps = {
        ref: cardRef,
        className: "group relative flex flex-col gap-3 rounded-[16px] bg-zinc-950/70 p-0 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition-shadow duration-300 cursor-pointer",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerGlowRef,
                className: "relative rounded-[12px] bg-zinc-900/60 p-1.5 border border-white/15 transition-[box-shadow] duration-300",
                style: {
                    boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: innerGlowRef,
                    className: "relative aspect-[2880/1808] rounded-[8px] transition-[box-shadow] duration-300",
                    style: {
                        boxShadow: `0 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: title,
                        className: "project-card-image size-full object-cover transition-all duration-300 border border-white/15 rounded-[8px]"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 space-y-1 pt-0.5 text-zinc-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[20px] font-semibold text-zinc-50 leading-tight",
                        style: {
                            fontFamily: "var(--font-crimson)"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-300/90 line-clamp-2 leading-snug",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            ref: cardRef,
            className: sharedProps.className,
            onMouseEnter: sharedProps.onMouseEnter,
            onMouseLeave: sharedProps.onMouseLeave,
            children: content
        }, void 0, false, {
            fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: sharedProps.className,
        onMouseEnter: sharedProps.onMouseEnter,
        onMouseLeave: sharedProps.onMouseLeave,
        children: content
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/mini-project-card.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(MiniProjectCard, "3NEQxbi52ghp7JyrF1DgKyt6jnc=");
_c = MiniProjectCard;
var _c;
__turbopack_context__.k.register(_c, "MiniProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkWithPreview",
    ()=>LinkWithPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LinkedInPreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[200px] overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-zinc-200/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 bg-gradient-to-br from-[#0a66c2] to-[#004182]"
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-3 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "-mt-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/headshot.png",
                            alt: "",
                            width: 48,
                            height: 48,
                            className: "h-12 w-12 rounded-full border-2 border-white object-cover shadow-md"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-zinc-900",
                                children: "Kyle Boyd"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 line-clamp-2 text-[10px] text-zinc-600",
                                children: "Lead Designer | Product & systems for enterprise"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[10px] text-zinc-500",
                                children: "Denver, Colorado"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-2 -top-1 flex h-10 w-10 items-center justify-center rounded bg-[#0a66c2] text-white shadow-lg",
                style: {
                    transform: "rotate(12deg)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-bold leading-none",
                    children: "in"
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = LinkedInPreview;
function ResumePreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[180px] overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-zinc-200/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-zinc-200 bg-zinc-50 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-zinc-800",
                        children: "Kyle Boyd"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-zinc-500",
                        children: "Product Designer · Resume"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 px-3 py-2",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 w-full rounded bg-zinc-200/80",
                        style: {
                            width: `${100 - i * 8}%`
                        }
                    }, i, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-1 -top-1 rounded bg-zinc-100 p-1.5 shadow",
                style: {
                    transform: "rotate(-8deg)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "h-5 w-5 text-zinc-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c1 = ResumePreview;
function LinkWithPreview({ href, label, variant, className = "" }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("above");
    const linkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LinkWithPreview.useEffect": ()=>{
            return ({
                "LinkWithPreview.useEffect": ()=>{
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }
            })["LinkWithPreview.useEffect"];
        }
    }["LinkWithPreview.useEffect"], []);
    const handleMouseEnter = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (linkRef.current) {
            const rect = linkRef.current.getBoundingClientRect();
            const spaceAbove = rect.top;
            const spaceBelow = window.innerHeight - rect.bottom;
            setPosition(spaceBelow >= 220 || spaceAbove < spaceBelow ? "below" : "above");
        }
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        timeoutRef.current = setTimeout(()=>setIsHovered(false), 150);
    };
    const rotation = variant === "linkedin" ? "-3deg" : "2deg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                ref: linkRef,
                href: href,
                target: href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined,
                rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
                className: `inline-block underline decoration-zinc-500 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-400 ${className}`,
                style: {
                    fontFamily: "var(--font-outfit)"
                },
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: label
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute z-50 flex transition-opacity duration-150 ${position === "above" ? "bottom-full left-1/2 mb-2" : "left-1/2 top-full mt-2"}`,
                style: {
                    transform: `translateX(-50%) rotate(${rotation})`
                },
                onMouseEnter: ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }
                    setIsHovered(true);
                },
                onMouseLeave: handleMouseLeave,
                children: variant === "linkedin" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedInPreview, {}, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                    lineNumber: 134,
                    columnNumber: 37
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumePreview, {}, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                    lineNumber: 134,
                    columnNumber: 59
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/components/link-with-preview.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(LinkWithPreview, "RHoX0d7Drx6F7fNpUR60Jpy9MwA=");
_c2 = LinkWithPreview;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LinkedInPreview");
__turbopack_context__.k.register(_c1, "ResumePreview");
__turbopack_context__.k.register(_c2, "LinkWithPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/portfolio2026/src/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const activeClass = "rounded-full bg-zinc-100/10 px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-50 transition hover:bg-zinc-100/16";
const inactiveClass = "rounded-full px-5 py-2 text-[0.76rem] tracking-[0.08em] text-zinc-200/90 transition hover:bg-zinc-100/10 hover:text-white";
function SiteHeader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (href)=>{
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "pointer-events-none fixed inset-x-0 top-5 z-40 flex justify-center sm:top-7",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto inline-flex rounded-full bg-gradient-to-tr from-zinc-700/35 via-zinc-600/20 to-zinc-600/45 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.7)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-1 rounded-full bg-black/55 px-1 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: isActive("/") ? activeClass : inactiveClass,
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/work",
                        className: isActive("/work") ? activeClass : inactiveClass,
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/playground",
                        className: isActive("/playground") ? activeClass : inactiveClass,
                        children: "Playground"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/writing",
                        className: isActive("/writing") ? activeClass : inactiveClass,
                        children: "Writing"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about",
                        className: isActive("/about") ? activeClass : inactiveClass,
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/site-header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=GitHub_portfolio2026_src_components_04ed4d21._.js.map