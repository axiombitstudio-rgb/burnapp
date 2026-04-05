"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Nav from "@/components/Nav";
import FlameGlow from "@/components/FlameGlow";
import FlameTransition from "@/components/FlameTransition";
import Screen from "@/components/Screen";
import BurnButton from "@/components/BurnButton";
import ParchmentBurn from "@/components/ParchmentBurn";
import TimerBar from "@/components/TimerBar";
import CountdownRing from "@/components/CountdownRing";
import ParchmentIntro from "@/components/ParchmentIntro";
import {
  PROMPTS,
  SAMPLE_SECRETS,
  pickRandom,
  pickRandomSet,
} from "@/lib/constants";

type AppScreen =
  | "intro"
  | "home"
  | "witness-primer"
  | "prompt"
  | "witnessing"
  | "burning"
  | "released"
  | "witness-oath"
  | "witness-waiting"
  | "witness-read"
  | "witness-sent";

export default function Home() {
  const [screen, setScreen] = useState<AppScreen>("intro");
  const [mode, setMode] = useState<"home" | "write" | "witness">("home");
  const [secret, setSecret] = useState("");
  const [prompt, setPrompt] = useState("");
  const [witnessCount, setWitnessCount] = useState(12);
  const [burnCount, setBurnCount] = useState<number | null>(null);
  const [witnessResponse, setWitnessResponse] = useState<string | null>(null);
  const [primerSecret, setPrimerSecret] = useState("");
  const [primerReady, setPrimerReady] = useState(false);
  const [witnessSecret, setWitnessSecret] = useState("");
  const [witnessResponses, setWitnessResponses] = useState<string[]>([]);
  const [flameTransition, setFlameTransition] = useState(false);
  const flameNavRef = useRef<(() => void) | null>(null);
  // Trigger flame then navigate to home
  const flameToHome = useCallback((nav: () => void) => {
    nav();
    flameNavRef.current = null;
    setFlameTransition(true);
  }, []);
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const witnessTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setBurnCount(180 + Math.floor(Math.random() * 200));
  }, []);

  // Kill all pending timers on intro or home
  useEffect(() => {
    if (screen !== "intro" && screen !== "home") return;
    if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
    if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
    responseTimerRef.current = null;
    witnessTimerRef.current = null;
  }, [screen]);

  // Witness count ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setWitnessCount((c) => Math.max(3, c + Math.floor(Math.random() * 5) - 2));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Set initial prompt
  useEffect(() => {
    setPrompt(pickRandom(PROMPTS));
  }, []);

  const goTo = useCallback((s: AppScreen) => setScreen(s), []);


  const handleModeChange = (m: "write" | "witness") => {
    setMode(m);
    if (m === "write") {
      setPrompt(pickRandom(PROMPTS));
      goTo("prompt");
    } else {
      goTo("witness-oath");
    }
  };

  const handleBegin = () => {
    setPrimerSecret(pickRandom(SAMPLE_SECRETS));
    setPrimerReady(false);
    goTo("witness-primer");
    setTimeout(() => setPrimerReady(true), 6000);
  };

  const handleBurn = () => {
    setWitnessResponse(null);
    goTo("witnessing");
    const delay = 3000 + Math.random() * 3000;
    responseTimerRef.current = setTimeout(() => {
      const set = pickRandomSet();
      setWitnessResponse(pickRandom(set));
    }, delay);
  };

  useEffect(() => {
    if (screen === "witnessing") {
      const burnTimer = setTimeout(() => goTo("burning"), 10000);
      return () => {
        clearTimeout(burnTimer);
        if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
      };
    }
  }, [screen, goTo]);

  const handleBurnComplete = useCallback(() => {
    goTo("released");
  }, [goTo]);

  const handleWitnessAccept = () => {
    goTo("witness-waiting");
    const delay = 2000 + Math.random() * 2000;
    witnessTimerRef.current = setTimeout(() => {
      setWitnessSecret(pickRandom(SAMPLE_SECRETS));
      setWitnessResponses(pickRandomSet());
      goTo("witness-read");
    }, delay);
  };

  const handleWitnessRespond = () => {
    if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
    goTo("witness-sent");
  };

  const handleWitnessTimeout = useCallback(() => {
    goTo("witness-sent");
  }, [goTo]);

  const resetHome = () => {
    if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
    if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
    setSecret("");
    setWitnessResponse(null);
    setMode("home");
    flameToHome(() => goTo("home"));
  };

  const newPrompt = () => {
    setPrompt(pickRandom(PROMPTS));
  };

  return (
    <main className="relative min-h-screen bg-bg overflow-hidden">
      {/* Flame transition overlay — always mounted */}
      <FlameTransition
        active={flameTransition}
        onComplete={() => {
          setFlameTransition(false);
          flameNavRef.current?.();
          flameNavRef.current = null;
        }}
      />

      {/* Bottom glow — all pages except intro */}
      {screen !== "intro" && <FlameGlow />}

      {screen === "intro" && (
        <ParchmentIntro
          onComplete={() => {
            // Video ended naturally → go to witness flow, no flame
            goTo("witness-oath");
          }}
          onSkip={() => {
            // User clicked skip → flame transition to home
            if (responseTimerRef.current) clearTimeout(responseTimerRef.current);
            if (witnessTimerRef.current) clearTimeout(witnessTimerRef.current);
            setSecret("");
            setWitnessResponse(null);
            setMode("home");
            flameToHome(() => goTo("home"));
          }}
        />
      )}

      {screen !== "intro" && <Nav mode={mode} onModeChange={handleModeChange} witnessCount={witnessCount} />}

      {/* ═══ HOME ═══ */}
      {screen === "home" && (
        <div className="fixed inset-0 flex flex-col items-center justify-center text-center px-6" style={{ zIndex: 1 }}>
          <span className="text-[12px] text-muted tracking-[5px] uppercase mb-9">
            Burn
          </span>
          <h1 className="text-[42px] font-normal text-text leading-[1.2] mb-7 max-w-[460px] font-serif">
            Say what you could never{" "}
            <em className="text-warm italic">say.</em>
          </h1>
          <p className="text-[15px] text-dim italic leading-relaxed mb-9 max-w-[360px] font-serif">
            Write it. A stranger reads it for ten seconds.
            <br />
            Then it&apos;s gone forever.
          </p>
          <BurnButton onClick={handleBegin}>Begin</BurnButton>
          <p className="text-[12px] text-deep italic mt-5">
            {burnCount !== null ? `${burnCount} secrets burned today` : ""}
          </p>
        </div>
      )}

      {/* ═══ WITNESS PRIMER ═══ */}
      <Screen active={screen === "witness-primer"}>
        <span className="text-[11px] text-deep tracking-[2px] uppercase mb-4">
          Someone burned this moments ago
        </span>
        <div className="max-w-[440px] w-full border border-accent/10 rounded-sm p-8 bg-accent/[0.02] mb-6 min-h-[100px] flex items-center justify-center">
          <p className="text-[20px] font-light text-text leading-relaxed italic font-serif animate-textFade">
            &ldquo;{primerSecret}&rdquo;
          </p>
        </div>
        <p className="text-[11px] text-deep italic mb-5">
          This is what it feels like to hold a stranger&apos;s truth.
        </p>
        <div
          className="transition-opacity duration-500"
          style={{ opacity: primerReady ? 1 : 0 }}
        >
          <BurnButton
            onClick={() => {
              setMode("write");
              setPrompt(pickRandom(PROMPTS));
              goTo("prompt");
            }}
          >
            Now it&apos;s your turn
          </BurnButton>
        </div>
      </Screen>

      {/* ═══ PROMPT + WRITE ═══ */}
      <Screen active={screen === "prompt"}>
        <p className="text-[17px] text-muted italic mb-6 leading-relaxed max-w-[380px] font-serif">
          {prompt}
        </p>
        <textarea
          value={secret}
          onChange={(e) => setSecret(e.target.value.slice(0, 500))}
          placeholder="Say it here..."
          className="w-full max-w-[460px] min-h-[150px] bg-transparent border border-accent/[0.12] rounded-sm text-text font-serif text-[17px] p-5 resize-none leading-relaxed transition-colors"
        />
        <p className="text-[11px] text-deep mt-1.5 text-right w-full max-w-[460px]">
          {secret.length} / 500
        </p>
        <BurnButton
          onClick={handleBurn}
          disabled={secret.length < 3}
          className="mt-4"
        >
          Burn it
        </BurnButton>
        <button
          onClick={newPrompt}
          className="bg-transparent border-none text-deep font-serif text-[11px] italic mt-3 cursor-pointer hover:text-muted transition-colors p-1"
        >
          different prompt
        </button>
      </Screen>

      {/* ═══ WITNESSING ═══ */}
      <Screen active={screen === "witnessing"}>
        <div className="text-[11px] text-deep mb-2">
          <span className="inline-block w-[6px] h-[6px] rounded-full bg-accent animate-pulse-glow mr-1.5" />
          Someone is reading this
        </div>
        <p className="text-[20px] font-light text-text max-w-[440px] leading-[1.7] mb-5 italic font-serif">
          &ldquo;{secret}&rdquo;
        </p>
        <TimerBar duration={10} />
        <p className="text-[12px] text-dim italic mt-1.5">
          {witnessResponse ? (
            <span className="text-accent">{witnessResponse}</span>
          ) : (
            "waiting..."
          )}
        </p>
      </Screen>

      {/* ═══ BURNING ═══ */}
      <Screen active={screen === "burning"}>
        <ParchmentBurn
          text={secret}
          burning={screen === "burning"}
          onComplete={handleBurnComplete}
        />
      </Screen>

      {/* ═══ RELEASED ═══ */}
      <Screen active={screen === "released"}>
        <h2 className="text-[28px] font-light text-text tracking-wide mb-2 font-serif">
          Gone.
        </h2>
        <p className="text-[13px] text-deep italic mb-7">
          You said it. Someone heard it.
        </p>
        <BurnButton onClick={resetHome}>Again</BurnButton>
        <BurnButton
          variant="ghost"
          onClick={() => alert("Archive — keep a private ghost of what you burned. Coming soon.")}
          className="mt-3"
        >
          Save to archive
        </BurnButton>
      </Screen>

      {/* ═══ WITNESS OATH ═══ */}
      <Screen active={screen === "witness-oath"}>
        <h2 className="text-[20px] font-light text-accent tracking-wide mb-6 font-serif">
          Four rules
        </h2>
        <div className="max-w-[300px] mb-6">
          {["Read it", "Don't judge it", "Presence, not advice", "Let it go"].map((rule, i) => (
            <p key={i} className="text-[14px] text-muted italic leading-[2.2] font-serif">
              <span className="text-accent">{i + 1}.</span> {rule}
            </p>
          ))}
        </div>
        <BurnButton onClick={handleWitnessAccept}>I understand</BurnButton>
      </Screen>

      {/* ═══ WITNESS WAITING ═══ */}
      <Screen active={screen === "witness-waiting"}>
        <p className="text-[14px] text-dim italic font-serif">
          Waiting
          <span className="animate-pulse-glow"> . . .</span>
        </p>
      </Screen>

      {/* ═══ WITNESS READ ═══ */}
      <Screen active={screen === "witness-read"}>
        <CountdownRing
          secret={witnessSecret}
          duration={10}
          onComplete={handleWitnessTimeout}
        />
        <div className="grid grid-cols-2 gap-2 max-w-[320px] mx-auto">
          {witnessResponses.map((r, i) => (
            <button
              key={i}
              onClick={handleWitnessRespond}
              className="bg-accent/[0.03] border border-accent/10 text-text font-serif text-[13px] py-3 px-3 rounded-sm cursor-pointer transition-all italic hover:bg-accent/[0.08] hover:border-accent/40"
            >
              {r}
            </button>
          ))}
        </div>
      </Screen>

      {/* ═══ WITNESS SENT ═══ */}
      <Screen active={screen === "witness-sent"}>
        <h2 className="text-[48px] text-accent font-light font-serif leading-none">
          Felt.
        </h2>
        <p className="text-[20px] text-dim italic mt-4 mb-8 font-serif">
          It&apos;s gone now.
        </p>
        <BurnButton onClick={resetHome}>Go to home</BurnButton>
      </Screen>
    </main>
  );
}
