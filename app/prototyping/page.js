"use client";

import PageLayout from "../layouts/PageLayout";

import { useEffect } from "react";

import { useAnimate, useInView } from "framer-motion";

function Component() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { x: 100 });
    }
  }, [isInView]);

  return (
    <ul ref={scope}>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
      <li className="text-white font-semibold">Test</li>
    </ul>
  );
}

export default function PrototypingPage() {
  return (
    <PageLayout>
      <div className="h-[32rem] w-full bg-neutral-950 mt-12">
        <div className="absolute -z-10 w-full h-full backdrop-blur-lg" />
        <p className="text-white">Test</p>
      </div>
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
    </PageLayout>
  );
}
