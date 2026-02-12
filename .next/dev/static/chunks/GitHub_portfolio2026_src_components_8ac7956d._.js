(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/GitHub/portfolio2026/src/components/before-after-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BeforeAfterImage",
    ()=>BeforeAfterImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BeforeAfterImage({ oldSrc, newSrc, alt = "Before and after comparison", className = "" }) {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BeforeAfterImage.useCallback[handleMove]": (clientX)=>{
            const container = containerRef.current;
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const x = clientX - rect.left;
            const pct = Math.max(0, Math.min(100, x / rect.width * 100));
            setPosition(pct);
        }
    }["BeforeAfterImage.useCallback[handleMove]"], []);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BeforeAfterImage.useCallback[handleMouseDown]": (e)=>{
            e.preventDefault();
            isDragging.current = true;
        }
    }["BeforeAfterImage.useCallback[handleMouseDown]"], []);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BeforeAfterImage.useCallback[handleMouseMove]": (e)=>{
            if (isDragging.current) handleMove(e.clientX);
        }
    }["BeforeAfterImage.useCallback[handleMouseMove]"], [
        handleMove
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BeforeAfterImage.useCallback[handleMouseUp]": ()=>{
            isDragging.current = false;
        }
    }["BeforeAfterImage.useCallback[handleMouseUp]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeforeAfterImage.useEffect": ()=>{
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            return ({
                "BeforeAfterImage.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                }
            })["BeforeAfterImage.useEffect"];
        }
    }["BeforeAfterImage.useEffect"], [
        handleMouseMove,
        handleMouseUp
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BeforeAfterImage.useCallback[handleTouchMove]": (e)=>{
            const touch = e.touches[0];
            if (touch) handleMove(touch.clientX);
        }
    }["BeforeAfterImage.useCallback[handleTouchMove]"], [
        handleMove
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BeforeAfterImage.useCallback[handleKeyDown]": (e)=>{
            if (e.key === "ArrowLeft") setPosition({
                "BeforeAfterImage.useCallback[handleKeyDown]": (p)=>Math.max(0, p - 5)
            }["BeforeAfterImage.useCallback[handleKeyDown]"]);
            else if (e.key === "ArrowRight") setPosition({
                "BeforeAfterImage.useCallback[handleKeyDown]": (p)=>Math.min(100, p + 5)
            }["BeforeAfterImage.useCallback[handleKeyDown]"]);
        }
    }["BeforeAfterImage.useCallback[handleKeyDown]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `group relative cursor-ew-resize overflow-hidden rounded-xl border border-white/15 bg-zinc-900 ${className}`,
        onMouseDown: (e)=>{
            handleMouseDown(e);
            if (!e.target.closest("[data-slider-handle]")) {
                handleMove(e.clientX);
            }
        },
        onTouchStart: handleMouseDown,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleMouseUp,
        onKeyDown: handleKeyDown,
        role: "slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": position,
        "aria-label": alt,
        tabIndex: 0,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[4/3] w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: newSrc,
                        alt: `${alt} (after)`,
                        fill: true,
                        className: "object-contain",
                        sizes: "900px"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 overflow-hidden",
                    style: {
                        clipPath: `inset(0 ${100 - position}% 0 0)`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: oldSrc,
                        alt: `${alt} (before)`,
                        fill: true,
                        className: "object-contain object-left",
                        sizes: "900px"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-slider-handle": true,
                    className: "absolute inset-y-0 w-1 cursor-ew-resize select-none",
                    style: {
                        left: `${position}%`,
                        transform: "translateX(-50%)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 w-1 bg-white/80 transition group-hover:bg-white"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-zinc-900 shadow-lg transition group-hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white",
                    children: "Before"
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white",
                    children: "After"
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/before-after-image.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(BeforeAfterImage, "ngeZ8wZ062wDwKKLmHSqt1woMe0=");
_c = BeforeAfterImage;
var _c;
__turbopack_context__.k.register(_c, "BeforeAfterImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/portfolio2026/src/components/case-study-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaseStudyImage",
    ()=>CaseStudyImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CaseStudyImage({ src, alt, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden rounded-xl border border-white/15 bg-zinc-900 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: "block w-full max-w-full h-auto object-contain"
        }, void 0, false, {
            fileName: "[project]/GitHub/portfolio2026/src/components/case-study-image.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/portfolio2026/src/components/case-study-image.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = CaseStudyImage;
var _c;
__turbopack_context__.k.register(_c, "CaseStudyImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/portfolio2026/src/components/image-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageCarousel",
    ()=>ImageCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$case$2d$study$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/portfolio2026/src/components/case-study-image.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function normalizeItems(items) {
    return items.map((item)=>typeof item === "string" ? {
            src: item,
            alt: ""
        } : item);
}
const SLIDES_PER_VIEW = 2;
function ImageCarousel({ items: rawItems, className = "" }) {
    _s();
    const items = normalizeItems(rawItems);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maxIndex = Math.max(0, items.length - SLIDES_PER_VIEW);
    const canGoPrev = index > 0;
    const canGoNext = index < maxIndex;
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCarousel.useCallback[goPrev]": ()=>{
            if (canGoPrev) setIndex({
                "ImageCarousel.useCallback[goPrev]": (i)=>Math.max(0, i - 1)
            }["ImageCarousel.useCallback[goPrev]"]);
        }
    }["ImageCarousel.useCallback[goPrev]"], [
        canGoPrev
    ]);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageCarousel.useCallback[goNext]": ()=>{
            if (canGoNext) setIndex({
                "ImageCarousel.useCallback[goNext]": (i)=>Math.min(maxIndex, i + 1)
            }["ImageCarousel.useCallback[goNext]"]);
        }
    }["ImageCarousel.useCallback[goNext]"], [
        canGoNext,
        maxIndex
    ]);
    if (items.length === 0) return null;
    const trackWidthPct = items.length * (100 / SLIDES_PER_VIEW);
    const slideWidthPct = 100 / items.length;
    const transformPct = index * slideWidthPct;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full ${className}`,
        role: "region",
        "aria-roledescription": "carousel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "flex transition-transform duration-300 ease-out",
                    style: {
                        width: `${trackWidthPct}%`,
                        transform: `translateX(-${transformPct}%)`
                    },
                    children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 px-2 sm:px-3",
                            style: {
                                width: `${slideWidthPct}%`
                            },
                            role: "group",
                            "aria-roledescription": "slide",
                            "aria-label": item.alt ? `Slide ${i + 1}: ${item.alt}` : `Slide ${i + 1}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$src$2f$components$2f$case$2d$study$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaseStudyImage"], {
                                src: item.src,
                                alt: item.alt ?? "",
                                className: "shadow-lg max-w-full"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, item.src + i, false, {
                            fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: goPrev,
                        disabled: !canGoPrev,
                        className: "absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-700/95 text-zinc-100 shadow-lg transition hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:pointer-events-none disabled:opacity-40",
                        "aria-label": "Previous image",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: goNext,
                        disabled: !canGoNext,
                        className: "absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-700/95 text-zinc-100 shadow-lg transition hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:pointer-events-none disabled:opacity-40",
                        "aria-label": "Next image",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$portfolio2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/portfolio2026/src/components/image-carousel.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ImageCarousel, "ZQ9u2hM14CWxtKRXhwNyV1veGIw=");
_c = ImageCarousel;
var _c;
__turbopack_context__.k.register(_c, "ImageCarousel");
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

//# sourceMappingURL=GitHub_portfolio2026_src_components_8ac7956d._.js.map