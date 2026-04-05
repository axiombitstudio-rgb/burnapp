(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Nav({ mode, onModeChange, witnessCount }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const t = setTimeout({
                "Nav.useEffect.t": ()=>setVisible(true)
            }["Nav.useEffect.t"], 80);
            return ({
                "Nav.useEffect": ()=>clearTimeout(t)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex justify-between items-center px-6 py-4 absolute top-0 left-0 right-0 z-10",
        style: {
            opacity: visible ? 1 : 0,
            transition: "opacity 3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] text-muted tracking-[4px] uppercase",
                children: "Burn"
            }, void 0, false, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onModeChange("write"),
                        className: `text-[12px] px-2 py-1 rounded transition-all font-serif ${mode === "write" ? "text-accent bg-accent/[0.08]" : "text-muted hover:text-text"}`,
                        children: "Write"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onModeChange("witness"),
                        className: `text-[12px] px-2 py-1 rounded transition-all font-serif ${mode === "witness" ? "text-accent bg-accent/[0.08]" : "text-muted hover:text-text"}`,
                        children: "Witness"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-muted italic",
                        children: [
                            witnessCount,
                            " present"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Nav, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FlameGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlameGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FlameGlow() {
    _s();
    const layer0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // ember bed
    const layer1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // center tongue
    const layer2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // left tongue
    const layer3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // right tongue
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlameGlow.useEffect": ()=>{
            const start = performance.now();
            const loop = {
                "FlameGlow.useEffect.loop": (now)=>{
                    const t = (now - start) / 1000;
                    // Each layer gets its own noise-like oscillation from summed sines
                    const o0 = 0.12 + 0.06 * Math.sin(t * 1.1) + 0.04 * Math.sin(t * 2.7 + 1.0);
                    const o1 = 0.20 + 0.10 * Math.sin(t * 1.7 + 0.5) + 0.06 * Math.sin(t * 3.3 + 2.1);
                    const o2 = 0.14 + 0.07 * Math.sin(t * 2.1 + 1.2) + 0.05 * Math.sin(t * 0.9 + 0.3);
                    const o3 = 0.13 + 0.07 * Math.sin(t * 1.4 + 2.4) + 0.04 * Math.sin(t * 3.8 + 1.5);
                    // Slight vertical drift for the center tongue
                    const y1 = -4 * Math.sin(t * 1.3 + 0.8);
                    const y2 = -3 * Math.sin(t * 1.9 + 1.6);
                    const y3 = -3 * Math.sin(t * 2.2 + 0.2);
                    if (layer0.current) layer0.current.style.opacity = String(o0);
                    if (layer1.current) {
                        layer1.current.style.opacity = String(o1);
                        layer1.current.style.transform = `translateX(-50%) translateY(${y1}px)`;
                    }
                    if (layer2.current) {
                        layer2.current.style.opacity = String(o2);
                        layer2.current.style.transform = `translateX(-180px) translateY(${y2}px)`;
                    }
                    if (layer3.current) {
                        layer3.current.style.opacity = String(o3);
                        layer3.current.style.transform = `translateX(20px) translateY(${y3}px)`;
                    }
                    rafRef.current = requestAnimationFrame(loop);
                }
            }["FlameGlow.useEffect.loop"];
            rafRef.current = requestAnimationFrame(loop);
            return ({
                "FlameGlow.useEffect": ()=>cancelAnimationFrame(rafRef.current)
            })["FlameGlow.useEffect"];
        }
    }["FlameGlow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60vh",
            pointerEvents: "none",
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: layer0,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "220px",
                    background: "radial-gradient(ellipse at center bottom, rgba(200,80,10,0.9) 0%, rgba(160,50,5,0.5) 45%, transparent 75%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FlameGlow.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: layer1,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "520px",
                    height: "480px",
                    background: "radial-gradient(ellipse at center bottom, rgba(230,110,15,1) 0%, rgba(190,65,5,0.55) 35%, rgba(120,30,0,0.18) 65%, transparent 85%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FlameGlow.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: layer2,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-300px)",
                    width: "320px",
                    height: "360px",
                    background: "radial-gradient(ellipse at center bottom, rgba(210,80,10,0.9) 0%, rgba(150,45,5,0.4) 50%, transparent 80%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FlameGlow.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: layer3,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(20px)",
                    width: "320px",
                    height: "340px",
                    background: "radial-gradient(ellipse at center bottom, rgba(220,90,12,0.9) 0%, rgba(155,50,5,0.4) 50%, transparent 80%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FlameGlow.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FlameGlow.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(FlameGlow, "GZSt4m/255k/rSZxCDhAeqLb4WQ=");
_c = FlameGlow;
var _c;
__turbopack_context__.k.register(_c, "FlameGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FlameTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlameTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simplex-noise/dist/esm/simplex-noise.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const EMBER_COLORS = [
    "#FF8C00",
    "#FF6B00",
    "#FF4500",
    "#FFB830",
    "#FF7700",
    "#FFD700",
    "#FF5500"
];
function easeInQuad(t) {
    return t * t;
}
function FlameTransition({ active, onComplete }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const doneFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const embersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const noise2D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoise2D"])());
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlameTransition.useEffect": ()=>{
            onCompleteRef.current = onComplete;
        }
    }["FlameTransition.useEffect"], [
        onComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlameTransition.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            if (!active) {
                cancelAnimationFrame(rafRef.current);
                canvas.style.display = "none";
                return;
            }
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.display = "block";
            startRef.current = null;
            doneFiredRef.current = false;
            embersRef.current = [];
            const DURATION = 1.4; // seconds for wipe
            const noise = noise2D.current;
            // Pre-compute tongue surge centres (stable per-run)
            const H = canvas.height;
            const TONGUE_COUNT = 6;
            const tongueY = Array.from({
                length: TONGUE_COUNT
            }, {
                "FlameTransition.useEffect.tongueY": (_, i)=>H / TONGUE_COUNT * i + H / TONGUE_COUNT * 0.5
            }["FlameTransition.useEffect.tongueY"]);
            const loop = {
                "FlameTransition.useEffect.loop": (now)=>{
                    if (startRef.current === null) startRef.current = now;
                    const elapsed = (now - startRef.current) / 1000;
                    const rawP = Math.min(elapsed / DURATION, 1);
                    const progress = easeInQuad(rawP);
                    const W = canvas.width;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return;
                    ctx.clearRect(0, 0, W, H);
                    const t = elapsed;
                    // The burn-front X marches right → left
                    const frontX = W * (1 - progress);
                    // ── Burned area (left of front) ────────────────────────────────────
                    ctx.fillStyle = "rgba(4,1,0,1)";
                    ctx.fillRect(0, 0, frontX, H);
                    // ── Flame scanlines ────────────────────────────────────────────────
                    // Render every 1px row for crispness
                    for(let y = 0; y < H; y++){
                        const n1 = noise(y * 0.005, t * 1.6);
                        const n2 = noise(y * 0.012, t * 2.4 + 4.1);
                        const n3 = noise(y * 0.028, t * 3.5 + 8.7);
                        const nv = n1 * 0.55 + n2 * 0.30 + n3 * 0.15;
                        // Tongue surge: nearby surge points push the flame further right
                        let surge = 0;
                        for (const ty of tongueY){
                            const drift = noise(t * 0.7, ty * 0.003) * H * 0.07;
                            const dy = Math.abs(y - (ty + drift));
                            const band = H * 0.055;
                            if (dy < band) surge += (1 - dy / band) * 80;
                        }
                        const fx = frontX + nv * 38;
                        const flameW = 90 + surge + Math.abs(nv) * 30;
                        const intensity = 0.72 + 0.28 * Math.abs(nv);
                        // Fire gradient — white-hot core → yellow → orange → red → dark
                        if (fx < W) {
                            const right = Math.min(fx + flameW, W);
                            const grd = ctx.createLinearGradient(fx, 0, right, 0);
                            grd.addColorStop(0, `rgba(255,255,230,${intensity})`);
                            grd.addColorStop(0.04, `rgba(255,245,120,${intensity})`);
                            grd.addColorStop(0.13, `rgba(255,170,25,${intensity * 0.97})`);
                            grd.addColorStop(0.28, `rgba(255,95,8,${intensity * 0.88})`);
                            grd.addColorStop(0.46, `rgba(210,45,2,${intensity * 0.68})`);
                            grd.addColorStop(0.65, `rgba(130,18,0,${intensity * 0.38})`);
                            grd.addColorStop(0.84, `rgba(45,5,0,${intensity * 0.12})`);
                            grd.addColorStop(1, "rgba(0,0,0,0)");
                            ctx.fillStyle = grd;
                            ctx.fillRect(fx, y, right - fx, 1);
                        }
                        // Char bleed on the left edge of the front — warm glow seeping left
                        if (fx > 0) {
                            const charW = 30 + Math.abs(nv) * 18;
                            const left = Math.max(fx - charW, 0);
                            const cGrd = ctx.createLinearGradient(left, 0, fx, 0);
                            cGrd.addColorStop(0, "rgba(0,0,0,0)");
                            cGrd.addColorStop(0.4, `rgba(50,10,0,${intensity * 0.22})`);
                            cGrd.addColorStop(1, `rgba(190,65,0,${intensity * 0.52})`);
                            ctx.fillStyle = cGrd;
                            ctx.fillRect(left, y, charW, 1);
                        }
                    }
                    // ── Bloom glow at the front ────────────────────────────────────────
                    if (frontX < W) {
                        const bGrd = ctx.createLinearGradient(frontX - 30, 0, frontX + 200, 0);
                        bGrd.addColorStop(0, "rgba(255,130,15,0.00)");
                        bGrd.addColorStop(0.08, "rgba(255,160,20,0.22)");
                        bGrd.addColorStop(0.22, "rgba(255,110,8,0.12)");
                        bGrd.addColorStop(0.50, "rgba(180,45,0,0.05)");
                        bGrd.addColorStop(1, "rgba(0,0,0,0)");
                        ctx.fillStyle = bGrd;
                        ctx.fillRect(frontX - 30, 0, 240, H);
                    }
                    // ── Spawn embers ───────────────────────────────────────────────────
                    if (rawP < 0.85) {
                        const spawnN = Math.floor(2 + rawP * 6);
                        for(let s = 0; s < spawnN; s++){
                            if (Math.random() > 0.45 || embersRef.current.length > 200) continue;
                            const ey = Math.random() * H;
                            const nx = noise(ey * 0.005, t * 1.6);
                            embersRef.current.push({
                                x: frontX + nx * 38,
                                y: ey,
                                vx: -(1.2 + Math.random() * 5.5),
                                vy: -(0.3 + Math.random() * 3.2),
                                life: 1,
                                decay: 0.030 + Math.random() * 0.040,
                                size: 0.7 + Math.random() * 2.8,
                                color: EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)]
                            });
                        }
                    }
                    // ── Draw + update embers ───────────────────────────────────────────
                    embersRef.current = embersRef.current.filter({
                        "FlameTransition.useEffect.loop": (e)=>{
                            e.x += e.vx;
                            e.y += e.vy;
                            e.vy += 0.032;
                            e.vx *= 0.987;
                            e.life -= e.decay;
                            if (e.life <= 0) return false;
                            ctx.globalAlpha = Math.min(e.life, 1) * 0.92;
                            ctx.fillStyle = e.color;
                            ctx.beginPath();
                            ctx.arc(e.x, e.y, e.size * Math.min(e.life * 1.5, 1), 0, Math.PI * 2);
                            ctx.fill();
                            return true;
                        }
                    }["FlameTransition.useEffect.loop"]);
                    ctx.globalAlpha = 1;
                    // ── Completion — fire as soon as wipe reaches left edge ────────────
                    if (rawP >= 1 && !doneFiredRef.current) {
                        doneFiredRef.current = true;
                        onCompleteRef.current();
                        return;
                    }
                    rafRef.current = requestAnimationFrame(loop);
                }
            }["FlameTransition.useEffect.loop"];
            rafRef.current = requestAnimationFrame(loop);
            return ({
                "FlameTransition.useEffect": ()=>cancelAnimationFrame(rafRef.current)
            })["FlameTransition.useEffect"];
        }
    }["FlameTransition.useEffect"], [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "none",
            pointerEvents: "none"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/FlameTransition.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(FlameTransition, "24vpVyGxE9STatqVtVZY3Ul/XvE=");
_c = FlameTransition;
var _c;
__turbopack_context__.k.register(_c, "FlameTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Screen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Screen({ children, active }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Screen.useEffect": ()=>{
            if (!active) {
                setVisible(false);
                return;
            }
            const t = setTimeout({
                "Screen.useEffect.t": ()=>setVisible(true)
            }["Screen.useEffect.t"], 80);
            return ({
                "Screen.useEffect": ()=>clearTimeout(t)
            })["Screen.useEffect"];
        }
    }["Screen.useEffect"], [
        active
    ]);
    // Unmount when not active so timers inside (e.g. CountdownRing) don't fire
    if (!active) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-6 py-12 text-center",
        style: {
            opacity: visible ? 1 : 0,
            transition: "opacity 3s ease"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Screen.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Screen, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = Screen;
var _c;
__turbopack_context__.k.register(_c, "Screen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BurnButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BurnButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function BurnButton({ onClick, disabled, children, variant = "primary", className = "" }) {
    if (variant === "ghost") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            disabled: disabled,
            className: `bg-transparent border border-dashed border-accent/20 text-dim font-serif text-[13px] px-6 py-2 rounded-sm cursor-pointer transition-all hover:border-accent/60 hover:text-accent disabled:opacity-20 disabled:cursor-default ${className}`,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/BurnButton.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `bg-transparent border border-accent/30 text-accent/80 font-serif text-[13px] px-9 py-3 rounded-sm cursor-pointer transition-all tracking-[3px] uppercase hover:bg-accent/[0.07] hover:border-accent hover:text-accent disabled:opacity-20 disabled:cursor-default disabled:hover:bg-transparent ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/BurnButton.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = BurnButton;
var _c;
__turbopack_context__.k.register(_c, "BurnButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ParchmentBurn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParchmentBurn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ParchmentBurn({ text, burning, onComplete, volume = 0.85 }) {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textOpacity, setTextOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    const doneFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentBurn.useEffect": ()=>{
            onCompleteRef.current = onComplete;
        }
    }["ParchmentBurn.useEffect"], [
        onComplete
    ]);
    // Start video when burn begins
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentBurn.useEffect": ()=>{
            if (!burning) return;
            const video = videoRef.current;
            if (!video) return;
            doneFiredRef.current = false;
            setTextOpacity(1);
            video.currentTime = 0;
            video.volume = Math.max(0, Math.min(1, volume));
            video.play().catch({
                "ParchmentBurn.useEffect": ()=>{}
            }["ParchmentBurn.useEffect"]);
        }
    }["ParchmentBurn.useEffect"], [
        burning,
        volume
    ]);
    // Track video progress to fade text
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentBurn.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const handleTimeUpdate = {
                "ParchmentBurn.useEffect.handleTimeUpdate": ()=>{
                    const duration = video.duration;
                    if (!duration) return;
                    const progress = video.currentTime / duration;
                    // Stay visible for first 20%, fade out by 80%
                    const opacity = progress < 0.2 ? 1 : progress > 0.8 ? 0 : 1 - (progress - 0.2) / 0.6;
                    setTextOpacity(opacity);
                }
            }["ParchmentBurn.useEffect.handleTimeUpdate"];
            const handleEnded = {
                "ParchmentBurn.useEffect.handleEnded": ()=>{
                    if (doneFiredRef.current) return;
                    doneFiredRef.current = true;
                    setTimeout({
                        "ParchmentBurn.useEffect.handleEnded": ()=>onCompleteRef.current()
                    }["ParchmentBurn.useEffect.handleEnded"], 500);
                }
            }["ParchmentBurn.useEffect.handleEnded"];
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("ended", handleEnded);
            return ({
                "ParchmentBurn.useEffect": ()=>{
                    video.removeEventListener("timeupdate", handleTimeUpdate);
                    video.removeEventListener("ended", handleEnded);
                }
            })["ParchmentBurn.useEffect"];
        }
    }["ParchmentBurn.useEffect"], []);
    // Text wrapping
    const words = text.split(" ");
    const approxCharsPerLine = 32;
    const lines = [];
    let line = "";
    for (const word of words){
        if ((line + " " + word).trim().length > approxCharsPerLine && line) {
            lines.push(line);
            line = word;
        } else {
            line = line ? `${line} ${word}` : word;
        }
    }
    if (line) lines.push(line);
    const fontSize = 18;
    const lineHeight = fontSize * 1.85;
    const totalTextH = lines.length * lineHeight;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "min(460px, 85vw)",
            aspectRatio: "3 / 4",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "2px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: "/burn-effect.mp4",
                playsInline: true,
                preload: "auto",
                muted: true,
                style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ParchmentBurn.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15%",
                    pointerEvents: "none",
                    opacity: textOpacity,
                    transition: "opacity 0.15s linear"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 300,
                        fontStyle: "italic",
                        color: "#2a1f14",
                        fontSize: "clamp(14px, 3.8vw, 18px)",
                        lineHeight: 1.85,
                        textAlign: "center",
                        height: totalTextH,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 0
                    },
                    children: lines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "block"
                            },
                            children: l
                        }, i, false, {
                            fileName: "[project]/src/components/ParchmentBurn.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ParchmentBurn.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ParchmentBurn.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ParchmentBurn.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(ParchmentBurn, "IS/TsndoiYubcdbDen6cK6L6zXY=");
_c = ParchmentBurn;
var _c;
__turbopack_context__.k.register(_c, "ParchmentBurn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TimerBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimerBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TimerBar({ duration = 10 }) {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimerBar.useEffect": ()=>{
            const steps = duration * 10;
            let current = 100;
            const interval = setInterval({
                "TimerBar.useEffect.interval": ()=>{
                    current -= 100 / steps;
                    if (current <= 0) {
                        clearInterval(interval);
                        current = 0;
                    }
                    setWidth(current);
                }
            }["TimerBar.useEffect.interval"], 100);
            return ({
                "TimerBar.useEffect": ()=>clearInterval(interval)
            })["TimerBar.useEffect"];
        }
    }["TimerBar.useEffect"], [
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[240px] h-[2px] bg-accent/[0.08] rounded-sm overflow-hidden mb-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-sm transition-[width] duration-100 ease-linear",
            style: {
                width: `${width}%`,
                background: "linear-gradient(90deg, #8a6a40, #a04020)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/TimerBar.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TimerBar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(TimerBar, "ok9oG+xhgfLkpHTJswbaY57p/xg=");
_c = TimerBar;
var _c;
__turbopack_context__.k.register(_c, "TimerBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CountdownRing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountdownRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CountdownRing({ secret, duration = 10, onComplete }) {
    _s();
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownRing.useEffect": ()=>{
            if (ringRef.current) {
                ringRef.current.style.animation = "none";
                ringRef.current.offsetHeight;
                ringRef.current.style.animation = `countdownRing ${duration}s linear forwards`;
            }
            const timer = setTimeout(onComplete, duration * 1000);
            return ({
                "CountdownRing.useEffect": ()=>clearTimeout(timer)
            })["CountdownRing.useEffect"];
        }
    }["CountdownRing.useEffect"], [
        duration,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[200px] h-[200px] mx-auto mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "200",
                height: "200",
                viewBox: "0 0 200 200",
                style: {
                    transform: "rotate(-90deg)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "100",
                        r: "45",
                        fill: "none",
                        stroke: "rgba(196,122,48,0.06)",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CountdownRing.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        ref: ringRef,
                        cx: "100",
                        cy: "100",
                        r: "45",
                        fill: "none",
                        stroke: "#8a6a40",
                        strokeWidth: "2",
                        strokeDasharray: "283",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CountdownRing.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CountdownRing.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] text-text max-w-[130px] text-center leading-relaxed italic font-serif",
                children: secret
            }, void 0, false, {
                fileName: "[project]/src/components/CountdownRing.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CountdownRing.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(CountdownRing, "v9GC239WBf2cEP/4TV4F9yz/kd0=");
_c = CountdownRing;
var _c;
__turbopack_context__.k.register(_c, "CountdownRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ParchmentIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParchmentIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LINES = [
    "I told her it didn't matter anymore.",
    "That I had made peace with it.",
    "I smiled when I said it.",
    "",
    "I still check her profile every night."
];
function ParchmentIntro({ onComplete, onSkip }) {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textOpacity, setTextOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [fading, setFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentIntro.useEffect": ()=>{
            const t = setTimeout({
                "ParchmentIntro.useEffect.t": ()=>setMounted(true)
            }["ParchmentIntro.useEffect.t"], 60);
            return ({
                "ParchmentIntro.useEffect": ()=>clearTimeout(t)
            })["ParchmentIntro.useEffect"];
        }
    }["ParchmentIntro.useEffect"], []);
    const doneFiredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    const onSkipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSkip);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentIntro.useEffect": ()=>{
            onCompleteRef.current = onComplete;
        }
    }["ParchmentIntro.useEffect"], [
        onComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentIntro.useEffect": ()=>{
            onSkipRef.current = onSkip;
        }
    }["ParchmentIntro.useEffect"], [
        onSkip
    ]);
    // Autoplay on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentIntro.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            video.play().catch({
                "ParchmentIntro.useEffect": ()=>{}
            }["ParchmentIntro.useEffect"]);
        }
    }["ParchmentIntro.useEffect"], []);
    // Fade text as video plays, complete when video ends
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParchmentIntro.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const handleTimeUpdate = {
                "ParchmentIntro.useEffect.handleTimeUpdate": ()=>{
                    const duration = video.duration;
                    if (!duration) return;
                    const progress = video.currentTime / duration;
                    const opacity = progress < 0.2 ? 1 : progress > 0.8 ? 0 : 1 - (progress - 0.2) / 0.6;
                    setTextOpacity(opacity);
                }
            }["ParchmentIntro.useEffect.handleTimeUpdate"];
            const handleEnded = {
                "ParchmentIntro.useEffect.handleEnded": ()=>{
                    if (doneFiredRef.current) return;
                    doneFiredRef.current = true;
                    setFading(true);
                    setTimeout({
                        "ParchmentIntro.useEffect.handleEnded": ()=>onCompleteRef.current()
                    }["ParchmentIntro.useEffect.handleEnded"], 1200);
                }
            }["ParchmentIntro.useEffect.handleEnded"];
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("ended", handleEnded);
            return ({
                "ParchmentIntro.useEffect": ()=>{
                    video.removeEventListener("timeupdate", handleTimeUpdate);
                    video.removeEventListener("ended", handleEnded);
                }
            })["ParchmentIntro.useEffect"];
        }
    }["ParchmentIntro.useEffect"], []);
    const skip = ()=>{
        if (doneFiredRef.current) return;
        doneFiredRef.current = true;
        setFading(true);
        onSkipRef.current();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center cursor-pointer",
        style: {
            background: "#000000",
            opacity: fading ? 0 : mounted ? 1 : 0,
            transition: fading ? "opacity 2.5s ease" : "opacity 2s ease"
        },
        onClick: skip,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "relative",
                display: "inline-block"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        width: "min(90vw, calc(75vh * (896 / 1200)))",
                        aspectRatio: "896 / 1200",
                        overflow: "hidden",
                        borderRadius: "16px",
                        boxShadow: "0 16px 64px rgba(0,0,0,0.75), 0 4px 20px rgba(0,0,0,0.5)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            src: "/burn-effect.mp4",
                            playsInline: true,
                            preload: "auto",
                            muted: true,
                            style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "110%",
                                objectFit: "cover",
                                objectPosition: "top"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ParchmentIntro.tsx",
                            lineNumber: 102,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10%",
                                boxSizing: "border-box",
                                opacity: textOpacity,
                                transition: "opacity 0.15s linear",
                                pointerEvents: "none"
                            },
                            children: LINES.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minHeight: line === "" ? "14px" : undefined,
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontSize: "17px",
                                        fontWeight: 300,
                                        fontStyle: "normal",
                                        lineHeight: "2",
                                        color: "#1a0e04",
                                        textAlign: "center"
                                    },
                                    children: line || "\u00A0"
                                }, i, false, {
                                    fileName: "[project]/src/components/ParchmentIntro.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ParchmentIntro.tsx",
                            lineNumber: 120,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ParchmentIntro.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        textAlign: "center",
                        marginTop: "12px",
                        fontSize: "18px",
                        color: "#9a7840",
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        opacity: 0.5
                    },
                    children: "Skip"
                }, void 0, false, {
                    fileName: "[project]/src/components/ParchmentIntro.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ParchmentIntro.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ParchmentIntro.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(ParchmentIntro, "y3P/9k/ULpNK0zkOhTslRwi4WIo=");
_c = ParchmentIntro;
var _c;
__turbopack_context__.k.register(_c, "ParchmentIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROMPTS",
    ()=>PROMPTS,
    "RESPONSE_SETS",
    ()=>RESPONSE_SETS,
    "SAMPLE_SECRETS",
    ()=>SAMPLE_SECRETS,
    "pickRandom",
    ()=>pickRandom,
    "pickRandomSet",
    ()=>pickRandomSet
]);
const PROMPTS = [
    "What have you never told anyone?",
    "What would you say if no one was listening?",
    "Who do you owe an apology you'll never give?",
    "What are you pretending is fine?",
    "What do you wish you could unhear?",
    "What's the thing you carry that no one sees?",
    "If you could say one thing without consequences, what would it be?",
    "What did you never get to say goodbye to?",
    "What truth are you tired of hiding?"
];
const RESPONSE_SETS = [
    [
        "I understand.",
        "I believe you.",
        "You're not alone.",
        "Thank you."
    ],
    [
        "I hear you.",
        "That took courage.",
        "I'm holding this.",
        "Me too."
    ],
    [
        "It makes sense.",
        "You're not broken.",
        "I'm glad you said it.",
        "I've felt this too."
    ],
    [
        "I won't forget this.",
        "You deserved better.",
        "I'm still here.",
        "I see you."
    ]
];
const SAMPLE_SECRETS = [
    "I never told my father I forgave him before he died.",
    "I smile at work every day but I haven't felt joy in months.",
    "I'm terrified that I'm becoming my mother.",
    "I left because I loved you too much to stay.",
    "I pretend I don't remember but I remember everything.",
    "Some days the only reason I get up is because the dog needs to be fed.",
    "I said I was fine with it. I wasn't.",
    "I keep the voicemail because it's the last time I heard her voice.",
    "I chose my career over him and I still don't know if it was right.",
    "Nobody knows I almost didn't come home that night.",
    "I tell everyone I'm over it. I'm not even close.",
    "The last thing she said to me was a lie, and I let her believe I didn't know."
];
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function pickRandomSet() {
    return pickRandom(RESPONSE_SETS);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlameGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlameGlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlameTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlameTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BurnButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ParchmentBurn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ParchmentBurn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimerBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TimerBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CountdownRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CountdownRing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ParchmentIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ParchmentIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [secret, setSecret] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [witnessCount, setWitnessCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [burnCount, setBurnCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [witnessResponse, setWitnessResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [primerSecret, setPrimerSecret] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [primerReady, setPrimerReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [witnessSecret, setWitnessSecret] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [witnessResponses, setWitnessResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [flameTransition, setFlameTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const flameNavRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Trigger flame then navigate to home
    const flameToHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[flameToHome]": (nav)=>{
            nav();
            flameNavRef.current = null;
            setFlameTransition(true);
        }
    }["Home.useCallback[flameToHome]"], []);
    const responseTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const witnessTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setBurnCount(180 + Math.floor(Math.random() * 200));
        }
    }["Home.useEffect"], []);
    // Kill all pending timers on intro or home
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (screen !== "intro" && screen !== "home") return;
            if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
            if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
            responseTimerRef.current = null;
            witnessTimerRef.current = null;
        }
    }["Home.useEffect"], [
        screen
    ]);
    // Witness count ticker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setWitnessCount({
                        "Home.useEffect.interval": (c)=>Math.max(3, c + Math.floor(Math.random() * 5) - 2)
                    }["Home.useEffect.interval"]);
                }
            }["Home.useEffect.interval"], 8000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Set initial prompt
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setPrompt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROMPTS"]));
        }
    }["Home.useEffect"], []);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[goTo]": (s)=>setScreen(s)
    }["Home.useCallback[goTo]"], []);
    const handleModeChange = (m)=>{
        setMode(m);
        if (m === "write") {
            setPrompt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROMPTS"]));
            goTo("prompt");
        } else {
            goTo("witness-oath");
        }
    };
    const handleBegin = ()=>{
        setPrimerSecret((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_SECRETS"]));
        setPrimerReady(false);
        goTo("witness-primer");
        setTimeout(()=>setPrimerReady(true), 6000);
    };
    const handleBurn = ()=>{
        setWitnessResponse(null);
        goTo("witnessing");
        const delay = 3000 + Math.random() * 3000;
        responseTimerRef.current = setTimeout(()=>{
            const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandomSet"])();
            setWitnessResponse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(set));
        }, delay);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (screen === "witnessing") {
                const burnTimer = setTimeout({
                    "Home.useEffect.burnTimer": ()=>goTo("burning")
                }["Home.useEffect.burnTimer"], 10000);
                return ({
                    "Home.useEffect": ()=>{
                        clearTimeout(burnTimer);
                        if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
                    }
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        screen,
        goTo
    ]);
    const handleBurnComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleBurnComplete]": ()=>{
            goTo("released");
        }
    }["Home.useCallback[handleBurnComplete]"], [
        goTo
    ]);
    const handleWitnessAccept = ()=>{
        goTo("witness-waiting");
        const delay = 2000 + Math.random() * 2000;
        witnessTimerRef.current = setTimeout(()=>{
            setWitnessSecret((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_SECRETS"]));
            setWitnessResponses((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandomSet"])());
            goTo("witness-read");
        }, delay);
    };
    const handleWitnessRespond = ()=>{
        if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
        goTo("witness-sent");
    };
    const handleWitnessTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleWitnessTimeout]": ()=>{
            goTo("witness-sent");
        }
    }["Home.useCallback[handleWitnessTimeout]"], [
        goTo
    ]);
    const resetHome = ()=>{
        if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
        if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
        setSecret("");
        setWitnessResponse(null);
        setMode("home");
        flameToHome(()=>goTo("home"));
    };
    const newPrompt = ()=>{
        setPrompt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROMPTS"]));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-bg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlameTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: flameTransition,
                onComplete: ()=>{
                    setFlameTransition(false);
                    flameNavRef.current?.();
                    flameNavRef.current = null;
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            screen !== "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlameGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 171,
                columnNumber: 30
            }, this),
            screen === "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ParchmentIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>{
                    // Video ended naturally → go to witness flow, no flame
                    goTo("witness-oath");
                },
                onSkip: ()=>{
                    // User clicked skip → flame transition to home
                    if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
                    if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
                    setSecret("");
                    setWitnessResponse(null);
                    setMode("home");
                    flameToHome(()=>goTo("home"));
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            screen !== "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mode: mode,
                onModeChange: handleModeChange,
                witnessCount: witnessCount
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 191,
                columnNumber: 30
            }, this),
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex flex-col items-center justify-center text-center px-6",
                style: {
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[12px] text-muted tracking-[5px] uppercase mb-9",
                        children: "Burn"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[42px] font-normal text-text leading-[1.2] mb-7 max-w-[460px] font-serif",
                        children: [
                            "Say what you could never",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: "text-warm italic",
                                children: "say."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[15px] text-dim italic leading-relaxed mb-9 max-w-[360px] font-serif",
                        children: [
                            "Write it. A stranger reads it for ten seconds.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            "Then it's gone forever."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: handleBegin,
                        children: "Begin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] text-deep italic mt-5",
                        children: burnCount !== null ? `${burnCount} secrets burned today` : ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "witness-primer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-deep tracking-[2px] uppercase mb-4",
                        children: "Someone burned this moments ago"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[440px] w-full border border-accent/10 rounded-sm p-8 bg-accent/[0.02] mb-6 min-h-[100px] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[20px] font-light text-text leading-relaxed italic font-serif animate-textFade",
                            children: [
                                "“",
                                primerSecret,
                                "”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-deep italic mb-5",
                        children: "This is what it feels like to hold a stranger's truth."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-opacity duration-500",
                        style: {
                            opacity: primerReady ? 1 : 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>{
                                setMode("write");
                                setPrompt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickRandom"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROMPTS"]));
                                goTo("prompt");
                            },
                            children: "Now it's your turn"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "prompt",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[17px] text-muted italic mb-6 leading-relaxed max-w-[380px] font-serif",
                        children: prompt
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: secret,
                        onChange: (e)=>setSecret(e.target.value.slice(0, 500)),
                        placeholder: "Say it here...",
                        className: "w-full max-w-[460px] min-h-[150px] bg-transparent border border-accent/[0.12] rounded-sm text-text font-serif text-[17px] p-5 resize-none leading-relaxed transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-deep mt-1.5 text-right w-full max-w-[460px]",
                        children: [
                            secret.length,
                            " / 500"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: handleBurn,
                        disabled: secret.length < 3,
                        className: "mt-4",
                        children: "Burn it"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: newPrompt,
                        className: "bg-transparent border-none text-deep font-serif text-[11px] italic mt-3 cursor-pointer hover:text-muted transition-colors p-1",
                        children: "different prompt"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "witnessing",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] text-deep mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block w-[6px] h-[6px] rounded-full bg-accent animate-pulse-glow mr-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            "Someone is reading this"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[20px] font-light text-text max-w-[440px] leading-[1.7] mb-5 italic font-serif",
                        children: [
                            "“",
                            secret,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TimerBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        duration: 10
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] text-dim italic mt-1.5",
                        children: witnessResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-accent",
                            children: witnessResponse
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this) : "waiting..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "burning",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ParchmentBurn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: secret,
                    burning: screen === "burning",
                    onComplete: handleBurnComplete
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "released",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[28px] font-light text-text tracking-wide mb-2 font-serif",
                        children: "Gone."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-deep italic mb-7",
                        children: "You said it. Someone heard it."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: resetHome,
                        children: "Again"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "ghost",
                        onClick: ()=>alert("Archive — keep a private ghost of what you burned. Coming soon."),
                        className: "mt-3",
                        children: "Save to archive"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "witness-oath",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[20px] font-light text-accent tracking-wide mb-6 font-serif",
                        children: "Four rules"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[300px] mb-6",
                        children: [
                            "Read it",
                            "Don't judge it",
                            "Presence, not advice",
                            "Let it go"
                        ].map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-muted italic leading-[2.2] font-serif",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent",
                                        children: [
                                            i + 1,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    rule
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: handleWitnessAccept,
                        children: "I understand"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "witness-waiting",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[14px] text-dim italic font-serif",
                    children: [
                        "Waiting",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-pulse-glow",
                            children: " . . ."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "witness-read",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CountdownRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        secret: witnessSecret,
                        duration: 10,
                        onComplete: handleWitnessTimeout
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 max-w-[320px] mx-auto",
                        children: witnessResponses.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleWitnessRespond,
                                className: "bg-accent/[0.03] border border-accent/10 text-text font-serif text-[13px] py-3 px-3 rounded-sm cursor-pointer transition-all italic hover:bg-accent/[0.08] hover:border-accent/40",
                                children: r
                            }, i, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: screen === "witness-sent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[48px] text-accent font-light font-serif leading-none",
                        children: "Felt."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[20px] text-dim italic mt-4 mb-8 font-serif",
                        children: "It's gone now."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BurnButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: resetHome,
                        children: "Go to home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(Home, "m+rKUZTIgXtBiTGr3jk0Nvmapqo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_002ry4o._.js.map